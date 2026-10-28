"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import { ASSET_PREFIX } from "@/lib/assetPrefix";
import { getPageSourceUrl } from "@/lib/sourceUrl";

// Routed through the asset prefix so it reaches this app (not the main site) on mekark.com.
const FORM_ENDPOINT = `${ASSET_PREFIX}/api/enquiry-form`;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LETTERS_REGEX = /^[\p{L}\s]+$/u;

export const INDUSTRIES = [
  "Manufacturing",
  "Logistics & Warehousing",
  "FMCG",
  "Pharmaceutical",
  "Automotive",
  "E-commerce",
  "Cold Storage",
  "Others",
];

export const SQFT_OPTIONS = [
  "Below 30,000 Sq.ft",
  "30,000 - 2,00,000 Sq.ft",
  "Above 2,00,000 Sq.ft",
];

export type BlueprintFormValues = {
  name: string;
  location: string;
  phoneNumber: string;
  email: string;
  industry: string;
  sqft: string;
  details: string;
};

export type BlueprintFormErrors = Partial<
  Record<keyof BlueprintFormValues, string>
>;

const INITIAL_VALUES: BlueprintFormValues = {
  name: "",
  location: "",
  phoneNumber: "",
  email: "",
  industry: "",
  sqft: "",
  details: "",
};

/** State + submit logic for the "Request Your Project Blueprint" form. */
export function useBlueprintForm() {
  const [values, setValues] = useState<BlueprintFormValues>(INITIAL_VALUES);
  const [errors, setErrors] = useState<BlueprintFormErrors>({});
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name } = e.target;
    let { value } = e.target;

    if (name === "phoneNumber") value = value.replace(/\D/g, "").slice(0, 10);
    if (name === "name" || name === "location") {
      value = value.replace(/[^\p{L}\s]/gu, "");
    }

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const next: BlueprintFormErrors = {};
    const required = "This field is required.";

    if (!values.name.trim()) next.name = required;
    else if (!LETTERS_REGEX.test(values.name.trim())) {
      next.name = "Only letters are allowed.";
    }

    if (!values.location.trim()) next.location = required;
    else if (!LETTERS_REGEX.test(values.location.trim())) {
      next.location = "Only letters are allowed.";
    }

    if (!values.phoneNumber) next.phoneNumber = required;
    else if (!/^\d{10}$/.test(values.phoneNumber)) {
      next.phoneNumber = "Enter a valid 10-digit phone number.";
    }

    if (!values.email.trim()) next.email = required;
    else if (!EMAIL_REGEX.test(values.email.trim())) {
      next.email = "Enter valid email.";
    }

    if (!values.industry.trim()) next.industry = required;
    if (!values.sqft) next.sqft = required;
    if (!values.details.trim()) next.details = required;

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validate()) {
      setStatusMessage("Please correct the highlighted fields.");
      return;
    }

    try {
      setIsSubmitting(true);
      setStatusMessage(null);

      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          phone: values.phoneNumber.trim(),
          location: values.location.trim(),
          industry: values.industry,
          sqf: values.sqft,
          message: values.details.trim(),
          sourceName: "Warehouse Division",
          sourceDomain:
            typeof window !== "undefined" ? window.location.hostname : "",
          sourceUrl: getPageSourceUrl(),
          pageUrl: getPageSourceUrl(),
        }),
      });

      const payload = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(payload?.message || "Unable to submit form.");
      }

      setValues(INITIAL_VALUES);
      try {
        sessionStorage.setItem("thankYouAccess:warehouse", "1");
      } catch {}
      // Stay on the current host/path: /thank-you on the subdomain, /warehouse/thank-you on mekark.com.
      window.location.assign(`${window.location.pathname.replace(new RegExp("/$"), "")}/thank-you`);
    } catch (error) {
      setStatusMessage(
        error instanceof Error ? error.message : "Something went wrong.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    values,
    errors,
    statusMessage,
    isSubmitting,
    handleChange,
    handleSubmit,
  };
}

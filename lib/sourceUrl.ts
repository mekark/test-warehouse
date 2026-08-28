export function getPageSourceUrl() {
  if (typeof window === "undefined") return "";

  try {
    const url = new URL(window.location.href);
    const params = new URLSearchParams();

    url.searchParams.forEach((value, key) => {
      params.append(key, value.replace(/\//g, "_").replace(/%/g, "_"));
    });

    const query = params.toString();
    return `${url.origin}${url.pathname}${query ? `?${query}` : ""}`;
  } catch {
    return window.location.href.replace(/%/g, "_");
  }
}

// 1x1 transparent GIF. Used as the srcSet of a <picture> <source> whose media
// query matches when the image is CSS-hidden, so the browser loads this
// instead of the real (eager) image on that breakpoint.
export const BLANK_GIF =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

export const request = (url: string, params: object) =>
  fetch(url + "?" + new URLSearchParams(params as any).toString());

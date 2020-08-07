export const required = (value: string) =>
  value === null || value === '' || value === undefined ? '*Required field' : undefined;

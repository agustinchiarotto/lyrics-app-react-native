export const required = (value: string) =>
  value === null || value === '' || value === undefined ? 'Campo requerido.' : undefined;

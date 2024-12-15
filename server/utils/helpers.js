export const setPermission = (...args) => {
  const defaultKeys = ["create", "read", "delete", "update"];
  const result = {};

  defaultKeys.forEach((key) => {
    result[key] = args.includes(key);
  });

  return result;
};

export default class StatusError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    Error.captureStackTrace(this, this.constructor);
  }
}

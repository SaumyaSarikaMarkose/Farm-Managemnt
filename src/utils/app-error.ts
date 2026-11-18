
export interface ApiFieldError {
  field: string;
  message: string;
}

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly code: string;
  public readonly errors?: ApiFieldError[];

  constructor(
    message: string,
    statusCode = 500,
    code = "INTERNAL_SERVER_ERROR",
    errors?: ApiFieldError[],
  ) {
    super(message);

    this.name = "AppError";
    this.statusCode = statusCode;
    this.code = code;

    if (errors !== undefined) {
      this.errors = errors;
    }

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

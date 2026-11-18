
import {
  CowGender,
  CowStage,
  CowStatus,
  CowReproductiveStatus,
} from "../../generated/prisma/client.js";

export interface CowPayload {
  tagNumber?: string;
  name?: string | null;
  breed?: string | null;
  gender?: CowGender;
  dateOfBirth?: string | null;
  currentWeightKg?: number | null;
  weightMeasuredAt?: string | null;
  acquiredAt?: string | null;
  purchasePrice?: number | null;
  damId?: string | null;
  sireId?: string | null;
  reproductiveStatus?: CowReproductiveStatus | null;
  lactationNumber?: number;
  status?: CowStatus;
  stage?: CowStage;
  photoUrl?: string | null;
  description?: string | null;
}

function badRequest(message: string): never {
  const error = new Error(message) as Error & {
    statusCode: number;
  };

  error.statusCode = 400;
  throw error;
}

function validateDate(value: unknown, field: string) {
  if (value === null || value === undefined) return;

  if (
    typeof value !== "string" ||
    Number.isNaN(Date.parse(value))
  ) {
    badRequest(`${field} must be a valid date`);
  }
}

function validateNumber(
  value: unknown,
  field: string,
  min = 0,
) {
  if (value === null || value === undefined) return;

  if (
    typeof value !== "number" ||
    !Number.isFinite(value) ||
    value < min
  ) {
    badRequest(`${field} must be a valid number`);
  }
}

export function validateCowPayload(
  body: unknown,
  partial = false,
): CowPayload {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    badRequest("Invalid request body");
  }

  const input = body as Record<string, unknown>;

  const allowedFields = [
    "tagNumber",
    "name",
    "breed",
    "gender",
    "dateOfBirth",
    "currentWeightKg",
    "weightMeasuredAt",
    "acquiredAt",
    "purchasePrice",
    "damId",
    "sireId",
    "reproductiveStatus",
    "lactationNumber",
    "status",
    "stage",
    "photoUrl",
    "description",
  ];

  for (const key of Object.keys(input)) {
    if (!allowedFields.includes(key)) {
      badRequest(`Unknown field: ${key}`);
    }
  }

  if (
    !partial &&
    (typeof input.tagNumber !== "string" ||
      !input.tagNumber.trim())
  ) {
    badRequest("Cow tag number is required");
  }

  if (
    input.tagNumber !== undefined &&
    (typeof input.tagNumber !== "string" ||
      !input.tagNumber.trim())
  ) {
    badRequest("Invalid cow tag number");
  }

  for (const field of [
    "name",
    "breed",
    "damId",
    "sireId",
    "photoUrl",
    "description",
  ]) {
    const value = input[field];

    if (
      value !== undefined &&
      value !== null &&
      typeof value !== "string"
    ) {
      badRequest(`${field} must be a string`);
    }
  }

  if (
    input.gender !== undefined &&
    !Object.values(CowGender).includes(input.gender as CowGender)
  ) {
    badRequest("Invalid gender");
  }

  if (
    input.stage !== undefined &&
    !Object.values(CowStage).includes(input.stage as CowStage)
  ) {
    badRequest("Invalid cow stage");
  }

  if (
    input.status !== undefined &&
    !Object.values(CowStatus).includes(input.status as CowStatus)
  ) {
    badRequest("Invalid cow status");
  }

  if (
    input.reproductiveStatus !== undefined &&
    input.reproductiveStatus !== null &&
    !Object.values(CowReproductiveStatus).includes(
      input.reproductiveStatus as CowReproductiveStatus
    )
  ) {
    badRequest("Invalid reproductive status");
  }

  validateDate(input.dateOfBirth, "dateOfBirth");
  validateDate(input.acquiredAt, "acquiredAt");
  validateDate(input.weightMeasuredAt, "weightMeasuredAt");

  validateNumber(input.currentWeightKg, "currentWeightKg");
  validateNumber(input.purchasePrice, "purchasePrice");

  if (input.lactationNumber !== undefined) {
    validateNumber(input.lactationNumber, "lactationNumber");

    if (!Number.isInteger(input.lactationNumber)) {
      badRequest("Lactation number must be an integer");
    }
  }

  return input as CowPayload;
}

export function validateWeightPayload(body: unknown) {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    badRequest("Invalid request body");
  }

  const input = body as Record<string, unknown>;

  if (
    typeof input.currentWeightKg !== "number" ||
    !Number.isFinite(input.currentWeightKg) ||
    input.currentWeightKg <= 0
  ) {
    badRequest("Weight must be greater than zero");
  }

  if (
    Object.keys(input).some(
      key => !["currentWeightKg", "weightMeasuredAt"].includes(key)
    )
  ) {
    badRequest("Unknown weight field");
  }

  validateDate(input.weightMeasuredAt, "weightMeasuredAt");

  return {
    currentWeightKg: input.currentWeightKg,
    weightMeasuredAt: input.weightMeasuredAt as string | undefined,
  };
}

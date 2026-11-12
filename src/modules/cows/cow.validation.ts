const allowedGenders = ["FEMALE", "MALE"] as const;

const allowedStages = [
  "CALF",
  "HEIFER",
  "LACTATING",
  "DRY",
  "BREEDING",
] as const;

const allowedStatuses = [
  "ACTIVE",
  "SOLD",
  "DECEASED",
  "TRANSFERRED",
] as const;

export function validateCreateCow(data: any) {
  const errors: string[] = [];

  if (!data.tagNumber || typeof data.tagNumber !== "string") {
    errors.push("Cow tag number is required.");
  }

  if (!data.stage || !allowedStages.includes(data.stage)) {
    errors.push("A valid cow stage is required.");
  }

  if (data.gender && !allowedGenders.includes(data.gender)) {
    errors.push("Invalid cow gender.");
  }

  if (
    data.purchasePrice !== undefined &&
    (
      typeof data.purchasePrice !== "number" ||
      !Number.isFinite(data.purchasePrice) ||
      data.purchasePrice < 0
    )
  ) {
    errors.push("Purchase price must be a valid non-negative number.");
  }

  for (const field of ["dateOfBirth", "acquiredAt"]) {
    if (
      data[field] !== undefined &&
      data[field] !== null &&
      (
        typeof data[field] !== "string" ||
        Number.isNaN(Date.parse(data[field]))
      )
    ) {
      errors.push(`${field} must be a valid date.`);
    }
  }

  return errors;
}

export function validateUpdateCow(data: any) {
  const errors: string[] = [];

  if (
    data.tagNumber !== undefined &&
    (
      typeof data.tagNumber !== "string" ||
      !data.tagNumber.trim()
    )
  ) {
    errors.push("Cow tag number cannot be empty.");
  }

  if (data.gender !== undefined && !allowedGenders.includes(data.gender)) {
    errors.push("Invalid cow gender.");
  }

  if (data.stage !== undefined && !allowedStages.includes(data.stage)) {
    errors.push("Invalid cow stage.");
  }

  if (
    data.purchasePrice !== undefined &&
    data.purchasePrice !== null &&
    (
      typeof data.purchasePrice !== "number" ||
      !Number.isFinite(data.purchasePrice) ||
      data.purchasePrice < 0
    )
  ) {
    errors.push("Purchase price must be a valid non-negative number.");
  }

  for (const field of ["dateOfBirth", "acquiredAt"]) {
    if (
      data[field] !== undefined &&
      data[field] !== null &&
      (
        typeof data[field] !== "string" ||
        Number.isNaN(Date.parse(data[field]))
      )
    ) {
      errors.push(`${field} must be a valid date.`);
    }
  }

  return errors;
}

export function validateCowStatus(status: any) {
  return allowedStatuses.includes(status);
}
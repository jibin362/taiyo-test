import { object, string } from "yup";

/**
 * Validation schema for user validation
 */
export const UserValidationSchema = object().shape({
  firstName: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  status: string().oneOf(["active", "inactive"]).required("Required"),
});

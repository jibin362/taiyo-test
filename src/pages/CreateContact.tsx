import { Field, Formik } from "formik";
import { UserValidationSchema } from "../validations/UserValidationSchema";
import Button from "../components/Button";
import { useAppDispatch } from "../redux/hooks";
import { addContact } from "../redux/slices/contactSlice";
import { useNavigate } from "react-router-dom";

function CreateContact() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ firstName: "", lastName: "", status: "active" }}
      validationSchema={UserValidationSchema}
      onSubmit={(values, { setSubmitting }) => {
        /**
         * Mimic real life API delay using timeout
         */
        setTimeout(() => {
          dispatch(addContact(values));
          setSubmitting(false);
          navigate("/contacts");
        }, 400);
      }}
    >
      {({
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <Field
                id="first-name"
                type="text"
                name="firstName"
                onBlur={handleBlur("firstName")}
                onChange={handleChange("firstName")}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.firstName && touched.firstName && (
                <div className="text-sm text-red-500">{errors.firstName}</div>
              )}
            </div>
          </div>
          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <Field
                id="last-name"
                type="text"
                name="lastName"
                onBlur={handleBlur("lastName")}
                onChange={handleChange("lastName")}
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.lastName && touched.lastName && (
                <div className="text-sm text-red-500">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="sm:col-span-12">
            <fieldset>
              <legend className="text-sm font-semibold leading-6 text-gray-900">
                Status
              </legend>
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <Field
                    id="active"
                    type="radio"
                    name="status"
                    value="active"
                    onChange={handleChange("status")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="active"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Active
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <Field
                    id="inactive"
                    type="radio"
                    name="status"
                    value="inactive"
                    onChange={handleChange("status")}
                    className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
                  />
                  <label
                    htmlFor="inactive"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Inactive
                  </label>
                </div>
              </div>
              {errors.status && touched.status && (
                <span className="text-sm text-red-500">{errors.status}</span>
              )}
            </fieldset>
          </div>
          <div className="sm:col-span-3">
            <Button disbaled={isSubmitting} onClick={handleSubmit}>
              {isSubmitting ? "Saving..." : "Save Contact"}
            </Button>
          </div>
        </div>
      )}
    </Formik>
  );
}

export default CreateContact;

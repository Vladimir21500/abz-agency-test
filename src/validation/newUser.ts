import * as yup from "yup";

const patternEmail =
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;

const patternPhone = /^[\+]{0,1}380([0-9]{9})$/;

export const validationSchema = yup.object({
  name: yup.string().required("Enter your name").min(2, "Too Short!").max(60, "Too long!"),
  email: yup.string().required("Enter your email").matches(patternEmail, "Invalid email"),
  phone: yup.string().required("Enter your phone").matches(patternPhone, "Invalid phone"),
  position: yup.mixed().required("Select your position"),
  photo: yup
    .mixed()
    .required("You need to upload your photo")
    .test("fileSize", "You need to upload your photo", (value) => {
      return value[0]?.size;
    })
    .test("fileType", "Unsupported File Format", (value) => {
      return ["image/jpeg", "image/jpg"].includes(value[0]?.type);
    })
    .test("fileSize", "File size is too large", (value) => {
      return value[0]?.size <= 5242880;
    }),
});

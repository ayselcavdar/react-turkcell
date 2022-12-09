import { object, string } from "yup";

const required_message = "This field is required";
const contactSchema = object({
  firstName: string().required(required_message),
  lastName: string().required(required_message),
  email: string().email("Use valid email").required(required_message),
  message: string().min(5, "Min 5 character").required(required_message),
});

export default contactSchema;

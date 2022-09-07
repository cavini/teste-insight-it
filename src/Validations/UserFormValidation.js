import * as yup from "yup";

const userSchema = yup.object().shape({
  name: yup
    .string()
    .matches(/^[aA-zZ\s]+$/, "Somente letras são permitidas no campo nome")
    .required("Por favor preencha o nome."),
  address: yup.string().required("Por favor preencha o endereço."),
  phone: yup
    .string()
    .matches(/^\d+$/, "Somente números são permitidos no campo telefone")
    .required("Por favor preencha o telefone."),
  email: yup
    .string()
    .email("Informe um  e-mail válido")
    .required("Por favor preencha o e-mail.")
    .typeError("A number is required"),
  dob: yup
    .date()
    .min("12/31/1900", "A data não pode ser menor que 31/12/1900")
    .max("12/31/2018", "A data não pode ser maior que 31/12/2018"),
});

export default userSchema;

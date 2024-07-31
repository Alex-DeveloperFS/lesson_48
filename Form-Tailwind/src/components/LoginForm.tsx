import * as Yup from 'yup'
import {Form, Formik, FormikProps} from "formik";
import FormikControl from "./FormikControl.tsx";
import Button from "./FormComponents/Button.tsx";

const LoginForm = () => {

  const initialValues = {
    email: '',
    password: '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .max(15, 'Password must be less than 15 characters')
      .required('Required'),
  })

  const handleSubmit = (values: any) => {
    console.log('Form data', values)
  }

  return <Formik
    initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
  validateOnMount={true}>
    {(formik: FormikProps<any>) => {
      return (
      <Form>
        <FormikControl control="input" type="email" name="email" label="Email" placeholder="Enter email.."/>
        <FormikControl control="input" type="password" name="password" label="Password" placeholder="Enter password"/>
        <Button type="submit" text="Submit" disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}/>
      </Form>
      )
    }}
  </Formik>
}
export default LoginForm
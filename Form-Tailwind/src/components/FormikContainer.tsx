import {Form, Formik} from "formik";
import FormikControl from "./FormikControl.tsx";
import * as Yup from 'yup'

const selectOptions = [
  { key: 'Select an option', value: ''},
  { key: 'option 1', value: 'Option1'},
  { key: 'option 2', value: 'Option2'},
  { key: 'option 3', value: 'Option3'},
]

const radioOptions = [
  {key: 'Radio option 1', value: 'Radio option1'},
  {key: 'Radio option 2', value: 'Radio option2'},
  {key: 'Radio option 3', value: 'Radio option3'}
  ]

const initialValues = {
  email: '',
  description: '',
  radioOptions: '',
}

const validationSchema = Yup.object({
  email: Yup.string().required('Required'),
  description: Yup.string().required('Required'),
  select: Yup.string().required('Required'),
  radioOptions: Yup.string().required('Required')
})

const handleSubmit = (values) => {
  console.log('Form data', values)
}

const FormikContainer = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <FormikControl control="input" type="email" name="email" label="Email" placeholder="Enter email" />
          <FormikControl control="textarea" label="description" name="description" placeholder="Enter description" />
          <FormikControl control="radio" label="Radio group" name="radioOption" options={radioOptions} />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  )
}
export default FormikContainer
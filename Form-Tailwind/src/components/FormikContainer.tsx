import {Form, Formik, FormikProps} from "formik";
import FormikControl from "./FormikControl.tsx";
import * as Yup from 'yup'
import Button from "./FormComponents/Button.tsx";

const selectOptions = [
  { key: 'Select an option', value: ''},
  { key: 'option 1', value: 'Option1'},
  { key: 'option 2', value: 'Option2'},
  { key: 'option 3', value: 'Option3'},
]

const radioOptions = [
  {key: 'Radio option 1', value: 'Radio1'},
  {key: 'Radio option 2', value: 'Radio2'},
  {key: 'Radio option 3', value: 'Radio3'}
  ]

const checkboxOptions = [
  { key: 'Checkbox option 1', value: 'checkbox1' },
  { key: 'Checkbox option 2', value: 'checkbox2' },
  { key: 'Checkbox option 3', value: 'checkbox3' }
]

const initialValues = {
  email: '',
  description: '',
  radioOption: '',
  checkboxOption  : [],
  date: null,
}

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email').required('Required'),
  description: Yup.string().required('Required'),
  selectOption: Yup.string().required('Required'),
  radioOption: Yup.string().required('Required'),
  checkboxOption: Yup.array().min(1, 'Required'),
  date: Yup.mixed().required('Required')
})

const handleSubmit = (values: any) => {
  console.log('Form data', values)
  console.log('Saved data', JSON.parse(JSON.stringify(values)))
}

const FormikContainer = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      validateOnMount={true}>
      {(formik: FormikProps<any>) => (
        <Form>
          <FormikControl control="input" type="email" name="email" label="Email" placeholder="Enter email" />
          <FormikControl control="textarea" label="description" name="description" placeholder="Enter description" />
          <FormikControl control="select" label="Select a topic"  name="selectOption" options={selectOptions}/>
          <FormikControl control="radio" label="Radio group" name="radioOption" options={radioOptions} />
          <FormikControl control="checkbox" label="Checkbox group" name="checkboxOption" options={checkboxOptions} />
          <FormikControl control="date" label="Pick a date" name="date" placeholder="Pick a date"/>
          <Button type="submit" text="Submit" disabled={!formik.dirty || !formik.isValid || formik.isSubmitting}/>
        </Form>
      )}
    </Formik>
  )
}
export default FormikContainer







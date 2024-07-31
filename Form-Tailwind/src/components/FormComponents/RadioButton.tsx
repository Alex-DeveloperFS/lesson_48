import {ErrorMessage, Field, FieldProps} from "formik";
import TextError from "./TextError.tsx";

export interface RadiobuttonOption {
  key: string
  value: string
}

export interface RadiobuttonProps {
  label: string
  name: string
  options: RadiobuttonOption[]

  [key: string]: any
}

const RadioButton = ({label, name, options, ...rest}: RadiobuttonProps) => {
  return (
    <fieldset className="flex flex-col space-y-2 mb-4">
      <legend className="font-bold text-sm text-gray-700">{label}</legend>
      <div className="flex space-x-6">
        <Field name={name} {...rest}>
          {({field}: FieldProps) => {
            return options.map((option: RadiobuttonOption) => {
              return (
                <div key={option.value} className="flex items-center">
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}
                    className="mr-2"
                  />
                  <label htmlFor={option.value} className="text-sm text-gray-700">{option.key}</label>
                </div>
              )
            })
          }}
        </Field>
      </div>
      <ErrorMessage name={name} component={TextError}/>
    </fieldset>
  )
}
export default RadioButton


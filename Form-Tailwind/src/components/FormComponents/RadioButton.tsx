import {ErrorMessage, Field, FieldInputProps} from "formik";
import TextError from "./TextError.tsx";

export interface RadioButtonOptions {
  key: string
  value: string
}

export interface RadioButtonProps {
  label: string
  name: string
  options: RadioButtonOptions[]

  [key: string]: any
}

const RadioButton = ({label, name, options, ...rest}: RadioButtonProps) => {
  return (
    <fieldset>
      <legend>{label}</legend>
      <div>
        <Field name={name} {...rest}>
          {({field}: { field: FieldInputProps<any> }) => {
            return options.map((option: RadioButtonOptions) => {
              return (
                <div key={option.value}>
                  <input
                    type="radio"
                    id={option.value}
                    {...field}
                    value={option.value}
                    checked={field.value === option.value}/>
                  <label htmlFor={option.value}>{option.key}</label>
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
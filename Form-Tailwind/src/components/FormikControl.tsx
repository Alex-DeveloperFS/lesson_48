import Input from "./FormComponents/Input.tsx";
import Textarea from "./Textarea.tsx";
import Select, {SelectOptions, SelectProps} from "./FormComponents/Select.tsx";
import RadioButton, {RadioButtonOptions} from "./FormComponents/RadioButton.tsx";

interface FormikControlProps {
  control: string,
  label: string,
  name: string,
  type?: string,
  placeholder?: string,
  options?: SelectOptions[] | RadioButtonOptions[],

  [key: string]: any
}

const FormikControl = ({control, ...rest}: FormikControlProps) => {
  switch (control) {
    case 'input':
      return <Input {...rest} />
    case 'textarea':
      return <Textarea {...rest} />
    case'select':
      return <Select {...(rest as SelectProps)} />
    case 'radio':
      return <RadioButton {...(rest as RadioButton)} />
    case 'checkbox':
      // return <Checkbox {...(rest as CheckboxProps)} />

    default:
      return null
  }
}

export default FormikControl
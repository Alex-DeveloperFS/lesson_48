interface ButtonProps {
  text: string
  type: 'submit' | 'button' | 'reset'
  disabled?: boolean
  [key: string]: any
}

const Button = ({text, type, ...rest}: ButtonProps) => {
  const {disabled} = rest
  const buttonClass: string = disabled ? 'bg-gray-500' : 'bg-blue-500 hover:bg-blue-700'
  return (
      <button
        type={type}
        {...rest}
        className={` ${buttonClass} text-white font-bold py-2 px-4 rounded w-full mt-5`}
        disabled={disabled}
      >
        {text}
      </button>
  )
}
export default Button
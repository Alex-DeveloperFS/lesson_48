import FormikContainer from "./components/FormikContainer.tsx";
import LoginForm from "./components/LoginForm.tsx";

const App = () => {
  return (
    <div className=" bg-gray-100 flex flex-col items-center justify-center h-screen pb-3">

      <div className="bg-white p-8 rounded shadow-lg w-1/2   items-center justify-center mt-3 pt-3 border border-gray-400">
        <h1 className="text-3xl font-bold text-center">Formik controls with Tailwind</h1>
        <FormikContainer />
      </div>

      <div className="bg-white p-8 rounded shadow-lg w-1/2   items-center justify-center mt-3 pb-3 border border-gray-400">
        <h1 className="text-3xl font-bold text-center">Formik controls with Tailwind</h1>
        <LoginForm />
      </div>
    </div>
  )
}
export default App
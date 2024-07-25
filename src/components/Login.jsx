import { useFormik } from 'formik'
import React from 'react'
import userServices from '../services/userServices';
import { useNavigate } from 'react-router-dom';
import { showToast } from './ToastManager';

function Login() {
const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validate: (values) => {
      let error = {};
      if (values.email.length == 0) {
        error.email = "Enter the Email";
      }
      if (values.password.length == 0) {
        error.password = "Enter the password";
      }
      if(values.password.length <=5){
        error.password = "Enter Password Greater than 5."
      }
      return error;
    },
    onSubmit: (values) => {
      userServices.login(values.email,values.password).then((response)=>{
        navigate('/dashboard')
        showToast(response.data.message)

      }).catch((error)=>{
        showToast(error.response.data.message)

      })
    }
  })
  return (
    <>


      <div className="w-full mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form className="space-y-6" onSubmit={formik.handleSubmit}>
          <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in!</h5>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required onChange={formik.handleChange} value={formik.values.email}/>
          </div>
          {formik.getFieldMeta("email").error &&
                formik.getFieldMeta("email").touched && (
                  <span style={{ color: "red" }}>
                    {formik.getFieldMeta("email").error}
                  </span>
                )}
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required onChange={formik.handleChange} value={formik.values.password} />
          </div>
          {formik.getFieldMeta("password").error &&
                formik.getFieldMeta("password").touched && (
                  <span style={{ color: "red" }}>
                    {formik.getFieldMeta("password").error}
                  </span>
                )}
          <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
          <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a className="text-blue-700 hover:underline dark:text-blue-500"onClick={()=>{
              navigate('/register')
            }}>Create account</a>
          </div>
        </form>
      </div>

    </>
  )
}

export default Login
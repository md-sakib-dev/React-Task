import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link,useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signInSchema } from "../schema";

const Login = () => {
  const navigate=useNavigate()
  const initialValues={
    email:"",
    password:""

  }

  const {values,handleChange,handleBlur,touched,errors,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signInSchema,
    onSubmit:(values)=>{
      console.log(values)

    }
  })

  return (
    <div className="flex flex-col gap-4 lg:justify-center lg:items-center mt-10 ">
      <div className="flex flex-col lg:justify-center lg:items-center shadow-md bg-gray-50 ">
        <div className="lg:ml-10 md:ml-72 ml-36">
          <CgProfile color="orange" size={100} />
        </div>
        <div>
          <form className="flex flex-col gap-7 p-2">
           
            <div className="flex flex-col gap-3">
              <label htmlFor="email" className="text-2xl font-semibold">
                Email
              </label>
              <input
                className={
                  errors.email && touched.email
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="email"
                name="email"
                id="email"
                placeholder="xyz@gmail.com"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email ? (
                <p className=" text-red-700 font-semibold">{errors.email}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="password" className="text-2xl font-semibold">
                Password
              </label>
              <input
                className={
                  errors.password && touched.password
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="password"
                name="password"
                id="password"
                placeholder="••••••••••••••••"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.password&& touched.password ? (
                <p className=" text-red-700 font-semibold">{errors.password}</p>
              ) : null}

            </div>
            
            <div className="flex justify-between">
              <div className="flex gap-2 justify-center items-center">
                <input type="checkbox" name="vehicle1" value="Bike" />
                <p className="text-md font-semibold">Remember me</p>
              </div>
              <div>
                <Link to="" className="text-md text-orange-500 font-semibold">
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="flex justify-center bg-orange-500 text-white h-9 hover:opacity-90 ">
              <button className="">Login</button>
            </div>
            <div>
              <p>Don't have an account yet? <button onClick={()=>{navigate('/register')}}  className="text-orange-500 font-semibold hover:border-b-2 border-b-indigo-800">Sign Up</button></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
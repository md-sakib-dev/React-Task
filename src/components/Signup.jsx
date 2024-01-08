import React from "react";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../schema";

const Register = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const { values, handleChange, handleBlur, errors, handleSubmit, touched } =
    useFormik({
      initialValues: initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values) => {},
    });

  console.log(errors);
  return (
    <div className="flex flex-col gap-4 justify-center lg:items-center mt-10 ">
      <div className="flex flex-col lg:justify-center lg:items-center shadow-md bg-gray-50 ">
        <div className="lg:ml-10 md:ml-72 ml-36">
          <CgProfile color="orange" size={100} />
        </div>
        <div>
          <form className="flex flex-col gap-7 p-2" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-3">
              <label htmlFor="name " className="text-2xl font-semibold">
                Name
              </label>
              <input
                className={
                  errors.name && touched.name
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="text"
                name="name"
                id="name"
                placeholder="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <p className=" text-red-700 font-semibold">{errors.name}</p>
              ) : null}
            </div>
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
              {errors.password && touched.password ? (
                <p className=" text-red-700 font-semibold">{errors.password}</p>
              ) : null}
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="confirm_password"
                className="text-2xl font-semibold"
              >
                Confirm password
              </label>
              <input
                className={
                  errors.confirm_password && touched.confirm_password
                    ? "bg-gray-50 border border-red-600 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                    : "bg-gray-50 border border-gray-300 text-gray-900 p-2.5 block rounded-md lg:w-[600px] h-10 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                }
                type="password"
                name="confirm_password"
                id="confirm_password"
                placeholder="••••••••••••••••"
                value={values.confirm_password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.confirm_password && touched.confirm_password ? (
                <p className=" text-red-700 font-semibold">
                  {errors.confirm_password}
                </p>
              ) : null}
            </div>

            <div className="flex justify-center bg-orange-500 text-white h-9 hover:opacity-90 ">
              <button className="" type="submit">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
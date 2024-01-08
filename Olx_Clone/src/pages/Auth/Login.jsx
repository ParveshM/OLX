import { useFormik } from "formik";
import { loginValidate } from "../../utils/validateLogin";
import { Link } from "react-router-dom";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2));
      console.log(formik.errors);
    },
  });
  const style =
    "shadow-sm  border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white";

  return (
    <div className="flex flex-col  justify-center items-center h-screen bg-slate-50">
      <div className="p-7 pb-2 bg-white shadow-lg rounded-lg">
        <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
          <div className="mb-5 ml-16">
            <img
              className="w-28"
              src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png"
              alt="OLX image"
            />
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="email"
              className={style}
              placeholder="jhonedoe@gmail.com"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-sm text-red-700">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={style}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm text-red-700">{formik.errors.password}</p>
            ) : null}
          </div>
          <button
            type="submit"
            className="text-white  border-2 border-black mb-2 bg-black hover:bg-white hover:text-black focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-16 py-2.5 text-center"
          >
            Register new account
          </button>
          <div className="flex items-start mb-5">
            <label
              htmlFor="terms"
              className="ms-2 text-sm font-medium text-gray-500"
            >
              Don't have an Account ?
              <Link to={"/signUp"} className="text-black hover:underline ml-1">
                Register
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

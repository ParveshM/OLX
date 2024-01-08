import { useFormik } from "formik";
import { validateSignUp } from "../../utils/validateSignUp";
import { Link } from "react-router-dom";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      mobile: "",
      password: "",
      rePassword: "",
    },
    validate: validateSignUp,
    onSubmit: (values) => {
      console.log(JSON.stringify(values, null, 2), "submitted");
      console.log(formik.errors);
    },
  });

  const style =
    "shadow-sm  border border-black text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-white";

  return (
    <div className="flex flex-col  justify-center items-center h-screen bg-slate-50">
      <div className="p-10 pb-2 bg-white shadow-lg rounded-lg">
        <form className="max-w-sm mx-auto" onSubmit={formik.handleSubmit}>
          <div className="mb-5 ml-16">
            <img
              className="w-28"
              src="https://seeklogo.com/images/O/olx-logo-20F1656D13-seeklogo.com.png"
              alt=""
            />
          </div>
          <div className="mb-5 ">
            <input
              type="text"
              name="userName"
              className={style}
              placeholder="User Name"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.userName && formik.errors.userName ? (
              <p className="text-md text-red-700 mb-0">
                {formik.errors.userName}
              </p>
            ) : null}
          </div>
          <div className="mb-5">
            <input
              type="text"
              name="email"
              className={style}
              placeholder="jhondoe@gmail.com"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.email && formik.errors.email ? (
              <p className="text-md text-red-700 mb-0">{formik.errors.email}</p>
            ) : null}
          </div>
          <div className="mb-5">
            <input
              type="mobile"
              name="mobile"
              className={style}
              placeholder="Enter mobile number"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            />
            {formik.touched.mobile && formik.errors.mobile ? (
              <p className="text-md text-red-700 mb-0">
                {formik.errors.mobile}
              </p>
            ) : null}
          </div>
          <div className="mb-5 ">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={style}
            />
            {formik.touched.password && formik.errors.password ? (
              <p className="text-sm  text-red-700 mb-0 ">
                {formik.errors.password}
              </p>
            ) : null}
          </div>
          <div className="mb-5">
            <input
              type="password"
              name="rePassword"
              placeholder="Re-enter passoword"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              className={style}
            />
            {formik.touched.rePassword && formik.errors.rePassword ? (
              <p className="text-md text-red-700 mb-0">
                {formik.errors.rePassword}
              </p>
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
              Already have an Account ?
              <Link to={"/login"} className="text-black hover:underline ml-1">
                Login
              </Link>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

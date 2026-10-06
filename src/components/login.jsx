import { Formik,Form, Field } from "formik";
import * as yup from 'yup';
import PersonalError from "./PersonalError";
import { ErrorMessage } from "formik";

const initialValues={
    email:"",
    password:""
}

const onSubmit=(values)=>{
    console.log(values);
    
}

const validationSchema=yup.object({
    email:yup.string().required('this field is empty!').email('ایمیل صحیح نیست'),


    password:yup
    .string()
    .required('this field is empty!')
    .min(8,'password must be ateast 8 charcters long.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        "the password must contain uppercase and lowercase letters,numbers,and special characters."
    )
})

const Login=()=>{
    return(
        <div className="bg-linear-to-r from-purple-600 to-pink-500 min-h-screen flex items-center justify-center">
        <div className="flex items-center justify-between bg-white p-8  rounded-2xl shadow-lg w-full max-w-md">
            
            <div>
                <img src="\src\assets\0b346e.jpg" className="w-30 h-30 " />
            </div>

        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        >
        {formik =>{
             console.log(formik);
            return(
            <Form>
            <h1 className="text-2xl font-bold mb-4">Login</h1>


            <div>
                <Field 
                type="email" 
                name="email" 
                className={ `w-full py-3 px-6 rounded-2xl border 
                    focus:outline-none focus:ring-0 ${
                    formik.errors.email && formik.touched.email ?
                    "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                    : "bg-purple-200 border-purple-500"
                }`} 
                placeholder={
                    formik.touched.email && formik.errors.email
                    ? formik.errors.email
                    : "email"

                } 
                />
            </div>


           <div>
                <Field 
                type="password" 
                name="password" 
                className={ `w-full py-3 px-6 rounded-2xl border mt-3 
                    focus:outline-none focus:ring-0 ${
                    formik.errors.password && formik.touched.password ?
                    "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                    : "bg-purple-200 border-purple-500"
                }`} 
                placeholder={
                    formik.touched.password && formik.errors.password
                    ? formik.errors.password
                    : "password"

                } 
                />
            </div>
 

            <div className="flex items-center justify-center">
                <button className="m-3 bg-purple-400 text-white font-bold py-2 px-5 rounded-2xl hover:bg-purple-500 active:bg-purple-600">
                    login
                </button>
            </div>


            <div className="flex justify-between items-center">
                <a href="#" className="text-sm text-gray-400 hover:underline">
                    forget password?
                </a>

               <div>
                 <a href="#" className="text-lg text-gray-700 hover:underline">
                    sign in</a>
               </div>
            </div>

            </Form>
            )  
            }}
      
        </Formik>


        </div>
      </div>
    )
}

export default Login;
import { Formik,Form, Field } from "formik";
import * as yup from 'yup';
import axios from "axios";


const initialValues={
    mobile:'',
    password:"",
    confirm_password:''

}

const onSubmit=(values)=>{
    console.log(values);

     axios
    .post("https://ecomadminapi.azhadev.ir/api/auth/register", values)
    .then((res) => {
      console.log(res);
      localStorage.setItem("token", res.data.token);
    })
}


const validationSchema=yup.object({
    mobile:yup.string().required("شماره موبایل الزامی است").matches(/^09\d{9}$/,
          "شماره موبایل معتبر نیست"),

      password:yup
       .string()
       .required('فیلد خالی است')
       .min(8,'password must be ateast 8 charcters long.')
       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
           "the password must contain uppercase and lowercase letters,numbers,and special characters."
       ),
       confirm_password:yup.string().required('فیلد خالی است')
       .oneOf([yup.ref('password'),''],'با رمز مطابقت ندارد'),
})


const RealSignIn = () => {
    return (
        
                <div className="bg-linear-to-r from-purple-600 to-pink-500 min-h-screen flex items-center justify-center">
                <div className="flex items-center justify-between bg-white p-8  rounded-2xl shadow-lg w-full max-w-md">
                    
                    <div>
                       <img src="\src\assets\images.png" className="w-28 h-30 " />
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
                           type="mobile" 
                           name="mobile" 
                           className={ `w-full py-3 px-6 rounded-2xl border-4 mt-3 
                               focus:outline-none focus:ring-0 ${
                               formik.errors.mobile && formik.touched.mobile ?
                               "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                               : "bg-purple-200 border-purple-500"
                           }`} 
                           placeholder={
                               formik.touched.mobile && formik.errors.mobile
                               ? formik.errors.mobile
                               : "moblie"
                           } />
                       </div>
        
        
                     <div>
                           <Field 
                           type="password" 
                           name="password" 
                           className={ `w-full py-3 px-6 rounded-2xl border-4 mt-3 
                               focus:outline-none focus:ring-0 ${
                               formik.errors.password && formik.touched.password ?
                               "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                               : "bg-purple-200 border-purple-500"
                           }`} 
                           placeholder={
                               formik.touched.password && formik.errors.password
                               ? formik.errors.password
                               : "password"
                           } />
                       </div>

                       

                       <div>
                           <Field 
                           type="confirm_password" 
                           name="confirm_password" 
                           className={ `w-full py-3 px-6 rounded-2xl border-4 mt-3 
                               focus:outline-none focus:ring-0 ${
                               formik.errors.confirm_password && formik.touched.confirm_password ?
                               "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                               : "bg-purple-200 border-purple-500"
                           }`} 
                           placeholder={
                               formik.touched.confirm_password && formik.errors.confirm_password
                               ? formik.errors.confirm_password
                               : "confirm password"
                           } />
                       </div>

                 
         
        
                    <div className="flex items-center justify-center">
                        <button type="submit" className="m-3 bg-purple-400 text-white font-bold py-2 px-5 rounded-2xl hover:bg-purple-500 active:bg-purple-600">
                            login
                        </button>
                    </div>
                 
                    </Form>
                    )}}
              
                </Formik>
        
        
                </div>
              </div>
            
    );
};

export default RealSignIn;
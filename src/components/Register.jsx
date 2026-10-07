import { Formik,Form, Field, FastField, ErrorMessage } from "formik";
import * as yup from 'yup';
import PersonalError from "./PersonalError";
 


const initialValues={
   user_name:"",
   first_name:"",
   last_name:"",
   email:"",
   mobile:"",
   password:"",
   confirm_password:"",
   RegisterType:"email",
   birthDate:"",
   image:null
}


const onSubmit=(values)=>{
    console.log(values.birthDate);
    
}

const validationSchema=yup.object({
    first_name:yup.string().required('فیلد خالی است').matches(/^[ظطزرذدئوگکمنتالبیسشضصثقفغعهخحجچپ\s0_9a-zA-Z]+$/),
    last_name:yup.string().matches(/^[ظطزرذدئوگکمنتالبیسشضصثقفغعهخحجچپ\s0_9a-zA-Z]+$/),
    user_name:yup.string().required('فیلد خالی است'),
    password:yup
    .string()
    .required('فیلد خالی است')
    .min(8,'password must be ateast 8 charcters long.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
        "the password must contain uppercase and lowercase letters,numbers,and special characters."
    ),
    confirm_password:yup.string().required('فیلد خالی است')
    .oneOf([yup.ref('password'),''],'با رمز مطابقت ندارد'),

    RegisterType:yup.string().required(),

    email:yup.string().when("RegisterType",{
        is:"email",
        then:schema=>
            schema
               .required("ایمیل الزامی است")
               .email("فرمت ایمیل صحیح نیست"),
        otherwise:schema=>schema.notRequired()
    }),

    mobile:yup.string().when("RegisterType",{
        is:"mobile",
        then:schema=>
            schema
               .required("شماره موبایل الزامی است")
               .matches(/^09\d{9}$/,
          "شماره موبایل معتبر نیست"),
        otherwise:schema=>schema.notRequired()
    }),
    birthDate:yup.string().required('فیلد خالی است'),
    image:yup.mixed()
    .required('لطفا این قسمت را پرکنید')
    .test("filesize","حجم فایل نیمتواند بیش از 500 کیلوبایت باشد",value=> value && value.size < (500*1024))
    .test("format","فرمت فایل باید jpg باشد",value=> value && value.type === "image/jpeg")
})


const Register=()=>{
   return(
      <div className="bg-linear-to-r from-purple-600 to-pink-500 min-h-screen flex items-center justify-center ">
            <div className="flex items-center justify-center bg-white p-8  rounded-2xl shadow-lg w-full max-w-md">
    
            <Formik
                   initialValues={initialValues}
                   onSubmit={onSubmit}
                   validationSchema={validationSchema}
                   >
                   {formik =>{
                        console.log(formik);
                       return(
                           <Form>
                        <div className="flex justify-between items-center">
                           <img src="\src\assets\images.png" className="w-28 h-30 " />
                            <h1 className="text-2xl font-bold mb-4">sign in</h1>
                        </div>
                       
     
            
            
           
           
                      <div>
                           <Field 
                           type="first_name" 
                           name="first_name" 
                           className={ `w-full py-3 px-6 rounded-2xl border-4 mt-3 
                               focus:outline-none focus:ring-0 ${
                               formik.errors.first_name && formik.touched.first_name ?
                               "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                               : "bg-purple-200 border-purple-500"
                           }`} 
                           placeholder={
                               formik.touched.first_name && formik.errors.first_name
                               ? formik.errors.first_name
                               : "first name"
                           } />
                       </div>

                              <div>
                           <Field 
                           type="last_name" 
                           name="last_name" 
                           className={ `w-full py-3 px-6 rounded-2xl border-4 mt-3 
                               focus:outline-none focus:ring-0 ${
                               formik.errors.last_name && formik.touched.last_name ?
                               "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                               : "bg-purple-200 border-purple-500"
                           }`} 
                           placeholder={
                               formik.touched.last_name && formik.errors.last_name
                               ? formik.errors.last_name
                               : "last name"
                           } />
                       </div>


                              <div>
                           <Field 
                           type="user_name" 
                           name="user_name" 
                           className={ `w-full py-3 px-6 rounded-2xl border-4 mt-3 
                               focus:outline-none focus:ring-0 ${
                               formik.errors.user_name && formik.touched.user_name ?
                               "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                               : "bg-purple-200 border-purple-500"
                           }`} 
                           placeholder={
                               formik.touched.user_name && formik.errors.user_name
                               ? formik.errors.user_name
                               : "User name"
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
                           type="email" 
                           name="email" 
                           className={ `w-full py-3 px-6 rounded-2xl border-4 mt-3
                               focus:outline-none focus:ring-0 ${
                               formik.errors.email && formik.touched.email ?
                               "border-pink-500 bg-pink-50 placeholder-pink-400 placeholder:text-sm placeholder:font-bold" 
                               : "bg-purple-200 border-purple-500"
                           }`} 
                           placeholder={
                               formik.touched.email && formik.errors.email
                               ? formik.errors.email
                               : "email"
                           } />
                       </div>

                       <div className="mx-20 w-40 text-purple-900 border-4 font-bold border-purple-600 bg-purple-400 p-1 rounded-2xl flex justify-between mt-4 ">
                       <label htmlFor="">
                        <Field 
                        type="radio"
                        name="RegisterType"
                        value="email"/>
                        email
                       </label>

                        <label htmlFor="">
                        <Field 
                        type="radio"
                        name="RegisterType"
                        value="mobile"/>
                        mobile
                       </label>
                       </div>

                       {formik.values.RegisterType === "email" && (
                        <Field 
                        type="email"
                        name="email"
                        placeholder="email" />
                       )}

                       {formik.values.RegisterType === "mobile" && (
                        <Field
                        type="text"
                        name="mobile"
                        placeholder="mobile" />
                       )}


                       <div className="mb-3">
                        <label htmlFor="birthDate"
                        className="form-label font-bold text-purple-800">
                            birthdate
                        </label>

                        <FastField
                        type="date"
                        id="birthDate"
                        className=" form-control border-2 border-purple-200 rounded-2xl bg-purple-50" />

                        <ErrorMessage
                        name="birthDate"
                        component={PersonalError} />
                       </div>


                       <div>
                     
                       <input type="file" name={name}  className="input_file bg-purple-200 border-4 border-purple-500 rounded-2xl p-1 hover:underline active:bg-purple-500 text-purple-900"
                       onChange={e=>{
                        formik.setFieldValue(name,e.target.files[0])
                       }} />
                       </div>



            
           
                       <div className="flex items-center justify-center">
                           <button className="m-3 bg-purple-400 text-white font-bold py-2 px-5 rounded-2xl hover:bg-purple-500 active:bg-purple-600">
                               sign in
                           </button>
                       </div>
           
           
                     
           
                       </Form>
                       )  
                       }}
                 
                   </Formik>
            </div>
            </div>
   )
}

export default Register;
import { Formik,Form } from "formik";
import * as yup from 'yup';

const initialValues={
    email:"",
    password:""
}

const onSubmit=(values)=>{
    console.log(values);
    
}

const validationSchema=yup.object({
    name:yup.string().required('لطفا این قسمت را پر کنید')
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
                <input type="email" name="email" placeholder="email" 
                className="p-2  bg-gray-200 rounded-2xl hover:bg-gray-300 mb-3 " />
            </div>


            <div>
                <input type="password" name="password" placeholder="password" 
                className="p-2  bg-gray-200 rounded-2xl hover:bg-gray-300
                alert-validate
                {`validate-input ${formik.errors.password && Formik.touched.password ? 'alert-validate':null}`}" 
                data-validate={formik.errors.password} />
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
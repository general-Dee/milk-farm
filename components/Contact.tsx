// import React, { useState } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
// import { useForm, SubmitHandler } from "react-hook-form"
// import { addDoc, collection, onSnapshot } from 'firebase/firestore'
// import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form';
// import { firestore } from '../firebase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase';



interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
  }

function Contact() {
    
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ subject, setSubject ] = useState('')
    const [ message, setMessage ] = useState('')
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>()


    const clearForm = () => {
        reset()
        // console.log("Document subbmitted")
        toast.success("Your message was successfully submitted")
    }

    const onFormSubmit = async (data: FormData) => {
        // e.preventDefault()
        // console.log("Data", data)
        setName(data.name)
        setEmail(data.email)
        setSubject(data.subject)
        setMessage(data.message)

        console.log(name,email,subject,message)
        const collectionRef = collection(db , "comments")
        const payLoad = {name, email, subject, message}
        const req = await addDoc(collectionRef, payLoad)
        
        if (req) {
            clearForm()
        }
    }
        

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact Us</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-lg md:text-4xl font-semiboldtext-center pt-20 mt-10'>Do you have questions?{" "} 
            <span className='decoration-[#F7AB0A]/50 underline'>Let's talk</span></h4>
        </div>

        <div>
            <div className='flex items-center space-x-5 justify-center mt-20'>
                <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-lg md:text-xl'>+234 000 000 0000</p>
            </div>
            <div className='flex items-center space-x-5 justify-center mt-5'>
                <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-lg md:text-xl'>kadunamarkets.gov.ng</p>
            </div>
            <div className='flex items-center space-x-5 justify-center mt-5'>
                <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
                <p className='text-lg md:text-xl'>Kubau LGA, Kaduna State.</p>
            </div>

            <form 
             onSubmit={handleSubmit(onFormSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto my-10'>
                <div className='flex space-x-2'>
                <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Name
                            <input type="text" {...register("name", {required: true})} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </label>
                        {errors.name?.type === "required" && (
                            <p className='text-red-600'>
                                This field is required
                            </p>
                        )}
                    </div>
                    <label className="leading-7 text-sm text-gray-600">Email
                            <input type="email" {...register("email", {required: true})} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {errors.email?.type === "required" && (
                            <p className='text-red-600'>
                                This field is required
                            </p>
                        )}
                    </label>
                </div>
                <label className="leading-7 text-sm text-gray-600">Subject
                            <input type="text" {...register("subject", {required: true})} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </label>
                        {errors.subject?.type === "required" && (
                            <p className='text-red-600'>
                                This field is required
                            </p>
                        )}
                <label className="leading-7 text-sm text-gray-600">Message
                            <textarea {...register("message", {required: true})} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                            {errors.message?.type === "required" && (
                            <p className='text-red-600'>
                                This field is required
                            </p>
                        )}
                        </label> 
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
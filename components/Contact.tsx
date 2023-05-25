import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Props = {}
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };

function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formdata) => {
    window.location.href = `mailto:oshinowodare@gmail.com?subject=${formdata.subject}&body=Hi my name is ${formdata.name}. ${formdata.message} (${formdata.email})`;
};

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
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col space-y-2 w-fit mx-auto my-10'>
                <div className='flex space-x-2'>
                    <input type="text"  className='contactInput' placeholder='Name' {...register('name')}/>
                    <input type="email"  className='contactInput' placeholder='Email' {...register('email')}/>
                </div>
                <input type="text" className='contactInput' placeholder='Subject' {...register('subject')}/>
                <textarea className='contactInput' placeholder='Message' {...register('message')}/>
                <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
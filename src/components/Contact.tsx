'use client';

import toast from 'react-hot-toast';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2).max(50),
  email: z.string().email(),
  message: z.string().min(5).max(500),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const { reset,register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit =  async (data: FormData) => {
    console.log(data); // You can handle form submission here
 const response = await fetch("/api/sendmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
            toast.success('Form submitted successfully!');
            reset()
    } else {
            toast.error('Form submission failed!');
    }
  };

  return (
        <div className="mt-8 pb-8 px-4   ">
      <h1 className=" text-center text-4xl md:text-6xl mb-4">
        Contact <span className="text-[#2962EF] ">Me</span>
      </h1>
    <form onSubmit={handleSubmit(onSubmit)} className="w-full font-outfit bg-[#F8F8F8] dark:bg-[#23232369] shadow-md rounded-lg px-8 pt-6 max-w-4xl pb-8  mx-auto">
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm lg:text-lg font-medium text-gray-700">
          Name
        </label>
        <input {...register("name")} id="name" type="text" className="mt-1 block w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring h-10 focus:ring-indigo-200 dark:bg-gray-600 focus:ring-opacity-50" />

        {errors.name && <p className="mt-2 text-sm text-red-600">{errors.name.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block text-sm lg:text-lg font-medium text-gray-700">
          Email
        </label>
        <input {...register("email")} id="email" type="text" className="mt-1 block w-full p-2  rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring h-10 focus:ring-indigo-200 dark:bg-gray-600 focus:ring-opacity-50" />
        {errors.email && <p className="mt-2 text-sm text-red-600">{errors.email.message}</p>}
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-medium lg:text-lg  text-gray-700">
          Message
        </label>
        <textarea {...register("message")} id="message" rows={4} className="mt-1 p-2  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 dark:bg-gray-600 focus:ring-opacity-50"></textarea>
        {errors.message && <p className="mt-2 text-sm text-red-600">{errors.message.message}</p>}
      </div>
      <button type="submit" className=" w-full  px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-[#2962EF] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        Submit
      </button>
    </form>
    </div>
  );
}

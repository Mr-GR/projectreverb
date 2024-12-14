import { zodResolver } from "@hookform/resolvers/zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  name: z.string().max(280, { message: "Please check name length"}),
  email: z.string().email({ message: "Invalid email address."}),
  phone: z.string().min(5, { message: "Phone number must be at least 5 characters." }).max(20, { message: "Phone number is too long." }).optional(),
  message: z.string().max(280, {message: "You have reached the max character limit"})
})

type FormSchemaType = z.infer<typeof formSchema>

const ContactUs: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  // Form submission handler
  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log("Form Submitted:", data)
    //Contact Logic
  }

  return (
    <div className="flex flex-1 justify-center">
      <div className="home-container max-w-md w-full rounded-md">
        <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500">
          Contact Us
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              {...register("name")}
              className={`block w-full mt-1 p-2 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              } text-gray-900`}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className={`block w-full mt-1 p-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              } text-gray-900`}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone (Optional)
            </label>
            <input
              id="phone"
              type="text"
              {...register("phone")}
              className={`block w-full mt-1 p-2 border rounded-md ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } text-gray-900`}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              {...register("message")}
              className={`block w-full mt-1 p-2 border rounded-md ${
                errors.message ? "border-red-500" : "border-gray-300"
              } text-gray-900`}
              rows={4}
            />
            {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}
          </div>

          <button
            type="submit"
            className="block w-full bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-600"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactUs
import { FormEvent } from "react";
import Swal from 'sweetalert2'
import { formConfig } from "@/lib/form/config";

function ContactUs() {
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(event.currentTarget);
    const access = formConfig.formContact
    formData.append("access_key", String(access));

    const object: Record<string, string> = Object.fromEntries(formData) as Record<string, string>;
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });
      const data = await res.json();

      if (data.success) {
        console.log("Success", data);
        Swal.fire({
          title: "Thank You!",
          text: "You'll here from us within 24-48hrs",
          icon: "success"
        });
        form.reset();
      } else {
        console.error("Error", data);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    } catch (error) {
      console.error("Network Error", error);
    }
  };

  return (
    <div className="flex flex-1 justify-center">
      <div className="home-container max-w-md w-full rounded-md">
      <h2 className="h3-bold md:h2-bold text-left w-full text-violet-500">
        Contact Us
      </h2>
        <form onSubmit={onSubmit} className="space-y-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input 
            type="text" 
            name="name" required  
            className={`block w-full mt-1 p-2 border rounded-md "border-gray-300"
          text-gray-900`} />

          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input 
            type="email" 
            name="email" required
            className={`block w-full mt-1 p-2 border rounded-md "border-gray-300"
              text-gray-900`} />

          <label htmlFor="number" className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input 
            type="text" 
            name="phoneNumber"
            className={`block w-full mt-1 p-2 border rounded-md "border-gray-300"
              text-gray-900`} />
            
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea 
            name="message" required 
            className={`block w-full mt-1 p-2 border rounded-md "border-gray-300"
              text-gray-900`}/>
          <button type="submit" className="block w-full bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-violet-600">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
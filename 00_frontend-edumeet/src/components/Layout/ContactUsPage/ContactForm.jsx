// import { useState } from "react";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { apiConnector } from "../../../services/apiConnector";
import { contactusEndpoint } from "../../../services/apis";
import toast from "react-hot-toast";
import countryCode from "../../../data/countrycode.json";

const ContactForm = () => {
  //   const [loading, setloading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        phoneNo: "",
      });
    }
  }, [reset, isSubmitSuccessful]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      //   setloading(true);
      const phoneNo = data.countryCode + "  " + data.phoneNo;
      const { firstName, lastName, email, message } = data;

      const res = await apiConnector("POST", contactusEndpoint.CONTACT_US_API, {
        firstName,
        lastName,
        email,
        message,
        phoneNo,
      });
      if (res.data.success === true) {
        toast.success("Message sent successfully");
      } else {
        toast.error("Something went wrong");
      }
      console.log("contact response", res);
      //   setloading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="md:w-1/2 bg-[#2A2A2A] p-8 rounded-xl shadow-lg backdrop-blur-md">
      <h1 className="font-bold text-center text-2xl pb-2">
        Welcome to Edumeet
      </h1>
      <p className="pb-9 text-center text-[#C691FC]">
        Sign in to continue your learning journey
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col gap-7"}>
        <div className="flex flex-col gap-5 lg:flex-row">
          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="firstname" className="lable-style text-white">
              First Name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter first name"
              {...register("firstName", { required: true })}
              className="w-full p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white focus:ring-2 focus:ring-yellow focus:outline-none"
            />
            {errors.firstName && (
              <span className=" text-[#E94756]">Enter Firstname *</span>
            )}
          </div>

          <div className="flex flex-col gap-2 lg:w-[48%]">
            <label htmlFor="lastname" className="lable-style text-white">
              Last Name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter last name"
              className="w-full p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white focus:ring-2 focus:ring-yellow focus:outline-none"
              {...register("lastName")}
            />
            {errors.lastName && (
              <span className=" text-[#E94756]">Enter Lastname</span>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="lable-style text-white">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            className="w-full p-3  bg-[#2D2D2D] border border-gray-950 rounded-md text-white focus:ring-2 focus:ring-yellow focus:outline-none"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className=" text-[#E94756]">Enter Email *</span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phoneNo" className="lable-style text-white">
            Phone Number
          </label>
          <div className="flex gap-5">
            <div className="flex w-[81px] flex-col gap-2">
              <select
                type="text"
                name="countrycode"
                id="countryCode"
                className="w-full p-3 bg-[#2D2D2D] border border-gray-950 rounded-md text-white focus:ring-2 focus:ring-yellow focus:outline-none"
                {...register("countryCode", { required: true })}
              >
                {countryCode.map((item, index) => {
                  return (
                    <option key={index} value={item.code}>
                      {item.code} - {item.country}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex w-[calc(100%-90px)] flex-col gap-2">
              <input
                type="tel"
                name="phoneNo"
                id="phonenumber"
                placeholder="12345 67890"
                className="w-full p-3  bg-[#2D2D2D] border border-gray-950 rounded-md text-white focus:ring-2 focus:ring-yellow focus:outline-none"
                {...register("phoneNo", {
                  required: {
                    value: true,
                    message: "Please enter phone Number *",
                  },
                  maxLength: {
                    value: 10,
                    message: "Enter a valid Phone Number *",
                  },
                  minLength: {
                    value: 8,
                    message: "Enter a valid Phone Number *",
                  },
                })}
              />
              {errors.phoneNo && (
                <span className=" text-[#E94756]">
                  {errors.phoneNo.message}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="lable-style text-white">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="2"
            placeholder="Enter your message here"
            className="w-full p-3  bg-[#2D2D2D] border border-gray-950 rounded-md text-white focus:ring-2 focus:ring-white focus:outline-none"
            {...register("message", { required: true })}
          />
          {errors.message && (
            <span className=" text-[#E94756]">Enter your message *</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-yellow hover:bg-yellow rounded-md text-black font-semibold shadow-lg hover:shadow-purple-400/50 transition-all duration-200 hover:scale-95"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

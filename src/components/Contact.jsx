import React, { useRef } from "react";

function Contact() {
  const nameRef = useRef();
  const emaliRef = useRef();
  const messageRef = useRef();

  const formDone = () => {
    ref.current.submit();
    ref.current.value = "";
  };
  return (
    <div
      name="contact"
      className=" w-full min-h-screen bg-[#0a192f]  flex justify-center items-center p-4 lg:pt-16"
    >
      <form
        action={`https://getform.io/f/${import.meta.env.VITE_ENDPOINT}`}
        method="POST"
        className=" max-w-[600px] w-full flex flex-col"
      >
        <div className=" pb-8 text-gray-300">
          <p className=" text-4xl font-bold inline border-b-4 border-blue-600">
            Contact
          </p>
          <p className=" py-4">
            Submit the form below or shoot me an email- amit2002paul@gmail.com
          </p>
        </div>
        <input
          className=" bg-[#ccd6f6] p-2 rounded-md text-black outline-none"
          type="text"
          name="name"
          placeholder="Name"
          required={true}
          ref={ref}
        />
        <input
          className=" bg-[#ccd6f6] my-6 p-2 rounded-md text-black outline-none"
          type="email"
          name="email"
          placeholder="Email"
          required={true}
          ref={ref}
        />
        <textarea
          className=" p-2 bg-[#ccd6f6] rounded-md text-black outline-none"
          name="message"
          placeholder="Message"
          required={true}
          rows={10}
          ref={ref}
        ></textarea>
        <button
          type="submit"
          onClick={formDone}
          className=" text-white border-2 rounded-md hover:bg-blue-600 hover:border-blue-600 px-4 py-3 my-8 mx-auto flex items-center justify-center duration-300"
        >
          Let's collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;

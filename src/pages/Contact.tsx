import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      Swal.fire({
        icon: "success",
        title: "Message sent!",
        text: "Thank you for reaching out 💙",
        confirmButtonColor: "#4f46e5",
      });

      formRef.current.reset();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong. Please try again.",
        confirmButtonColor: "#4f46e5",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-10">
          Wanna get in touch?
        </h1>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your name"
            required
            className="w-full px-5 py-4 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your email"
            required
            className="w-full px-5 py-4 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <textarea
            name="message"
            placeholder="Your message"
            required
            rows={6}
            className="w-full px-5 py-4 border border-black-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full md:w-auto px-10 py-4 font-medium rounded-full shadow-lg transition-all duration-300 flex items-center justify-center gap-2
              ${
                isLoading
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-600 hover:bg-indigo-700 text-white"
              }`}
          >
            {isLoading ? (
              <>
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzIyrdeWtOJMxKsPPTTCtKf-n-Pc1n35pQKWmYzxizTDiNwWwEre3k30dYqx9hlePZl7A/exec"; // Replace with your actual URL

const NewsletterSignup: React.FC = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const formik = useFormik({
    initialValues: { name: "", email: "" },
    validationSchema: Yup.object({
      name: Yup.string().min(2, "Too short").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
    }),
    onSubmit: async (values) => {
      setStatus("loading");
      try {
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          setStatus("success");
          formik.resetForm();
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    },
  });

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border rounded-md"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full p-2 border rounded-md"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md disabled:opacity-50"
          disabled={formik.isSubmitting || status === "loading"}
        >
          {status === "loading" ? "Submitting..." : "Subscribe"}
        </button>
        {status === "success" && <p className="text-green-500">Thanks for subscribing!</p>}
        {status === "error" && <p className="text-red-500">Something went wrong. Try again.</p>}
      </form>
    </div>
  );
};

export default NewsletterSignup;

import { ChangeEvent, FormEvent, useState } from "react";
import adressIcon from "../assets/images/icons/placeholder.png";
import emailIcon from "../assets/images/icons/email.png";
import phoneIcon from "../assets/images/icons/phone.png";
import { toast } from "react-hot-toast";

// Types
interface FormData {
  name: string;
  email: string;
  message: string;
}

interface ContactCardProps {
  icon: string;
  title: string;
  content: React.ReactNode;
}

interface FormFieldProps {
  label: string;
  id: keyof FormData;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

// Component
const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Email validation function using regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Handlers
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:8000/api/contacts/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      console.log(res.ok);

      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Server error. Please try later.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-intro">
          We’d love to hear from you! Reach out below or send a message.
        </p>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-cards">
            <ContactCard
              icon={adressIcon}
              title="Address"
              content={
                <>
                  123 Moroccan Street,
                  <br />
                  Marrakech, Morocco
                </>
              }
            />
            <ContactCard
              icon={emailIcon}
              title="Email"
              content={<a href="mailto:info@example.com">info@example.com</a>}
            />
            <ContactCard
              icon={phoneIcon}
              title="Phone"
              content={<a href="tel:+212123456789">+212 123 456 789</a>}
            />
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            {errorMessage && (
              <p className="text-red-600 mb-2">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-600 mb-2">{successMessage}</p>
            )}

            <form onSubmit={handleSubmit}>
              <FormField
                label="Name"
                id="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && (
                <p className="text-red-500 text-sm -mt-10">{errors.name}</p>
              )}

              <FormField
                label="Email"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message}</p>
                )}
              </div>

              <button type="submit" className="btn btn-secondary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// Reusable ContactCard
const ContactCard = ({ icon, title, content }: ContactCardProps) => (
  <div className="contact-card">
    <img src={icon} alt={`${title} Icon`} />
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

// Reusable FormField
const FormField = ({ label, id, type, value, onChange }: FormFieldProps) => (
  <div className="form-group" style={{ marginBottom: "5px" }}>
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={`Your ${label}`}
    />
  </div>
);

export default ContactSection;

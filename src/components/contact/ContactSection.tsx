// src/components/contact/ContactSection.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { ContactFormData } from "../../types/contact.types";
import { sendContactMessage } from "../../api/endpoints/contactApi";

// Components
import ContactCard from "./ContactCard";
import FormField from "./FormField";

// Assets
import addressIcon from "../../assets/images/icons/placeholder.png";
import emailIcon from "../../assets/images/icons/email.png";
import phoneIcon from "../../assets/images/icons/phone.png";

const ContactSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await sendContactMessage(data);
      toast.success("Message sent successfully!");
      reset(); // Reset form after successful submission
    } catch (error: any) {
      console.error("Contact submission error:", error);
      if (error.response?.data) {
        // Handle specific API errors if needed
        const apiErrors = error.response.data;
        if (apiErrors.email) {
          toast.error(apiErrors.email[0]);
        } else if (apiErrors.name) {
          toast.error(apiErrors.name[0]);
        } else if (apiErrors.message) {
          toast.error(apiErrors.message[0]);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      } else {
        toast.error("Server error. Please try later.");
      }
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2>Contact Us</h2>
        <p className="contact-intro">
          We'd love to hear from you! Reach out below or send a message.
        </p>

        <div className="contact-content">
          {/* Contact Info Cards */}
          <div className="contact-cards">
            <ContactCard
              icon={addressIcon}
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
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormField
                label="Name"
                id="name"
                type="text"
                register={register("name", { 
                  required: "Name is required" 
                })}
                error={errors.name?.message}
              />

              <FormField
                label="Email"
                id="email"
                type="email"
                register={register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter a valid email address"
                  }
                })}
                error={errors.email?.message}
              />

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  rows={5}
                  {...register("message", { 
                    required: "Message is required" 
                  })}
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>

              <button 
                type="submit" 
                className="btn btn-secondary"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
import { useState } from "react";
import { toast } from "react-hot-toast";

const Subscribe = () => {
  const [email, setEmail] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Email validation function using regex
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  // Handle email input change
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate the email format
    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("http://localhost:8000/api/subscribers/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("Subscription successful!");
        setEmail("");
      } else {
        const errorData = await response.json();
        console.log(errorData.email);

        if (errorData.email) {
          toast.error(`You are already subscribed`);
        } else {
          toast.error("Something went wrong. Please try again.");
        }
      }
    } catch (error) {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="subscribe" className="subscription-section">
      <div className="container">
        <h2>Stay Updated!</h2>
        <p>
          Subscribe to our newsletter to get the latest updates on our events
          and new features.
        </p>
        <form className="subscription-form" onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email address"
            required
          />
          <button
            type="submit"
            className="btn btn-secondary"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;

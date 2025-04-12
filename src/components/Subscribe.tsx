import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { subscribe } from "../api/endpoints/subscriptionApi";
import { SubscribePayload } from "../api/types";

const Subscribe = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<SubscribePayload>();

  const onSubmit = async (data: SubscribePayload) => {
    try {
      await subscribe(data);
      toast.success("Subscription successful!");
      reset(); // reset form to default values
    } catch (error: any) {
      const errorMsg = error?.response?.data?.email;
      if (errorMsg) {
        toast.error("You are already subscribed.");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
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

        <form
          className=" w-full sm:w-auto flex flex-row items-start gap-4 justify-center"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full sm:w-auto flex flex-col ">
            <input
              type="email"
              placeholder="Enter your email address"
              className={`px-4 py-2 rounded-md border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <span className="text-sm text-red-500 mt-1 text-start">
                {errors.email.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-secondary"
          >
            {isSubmitting ? "Subscribing..." : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Subscribe;

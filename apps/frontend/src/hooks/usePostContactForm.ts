import { ContactFormParams, sendContactForm } from "@/api/contactForm";
import { useMutation } from "@tanstack/react-query";

export const usePostContactForm = () => {
  return useMutation({
    mutationFn: sendContactForm,
  });
};

import axios from "axios";

export interface ContactFormParams {
  fullName: string;
  email: string;
  subject: string;
  body: string;
}

const API_URI = import.meta.env.VITE_CONTACT_FORM_API_URI;

export const sendContactForm = async (params: ContactFormParams) => {
  const endpoint = "send";

  try {
    const response = await axios.post(`${API_URI}/${endpoint}`, params, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error while submitting contact form:", error);
    throw new Error("Unable to submit contact form");
  }
};

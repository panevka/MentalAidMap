import { ContactFormParams } from "@/api/contactForm";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePostContactForm } from "@/hooks/usePostContactForm";
import CompleteFormSvgUrl from "@assets/undraw_contact-us_kcoa.svg";
import { FormEvent, useState } from "react";

const ContactPage = () => {
  const usePost = usePostContactForm();
  const [formState, setFormState] = useState<ContactFormParams>({
    fullName: "",
    email: "",
    subject: "",
    body: "",
  });

  const handleChange = (fieldName: keyof ContactFormParams, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    usePost.mutate(formState);
  };

  return (
    <div className="bg-[#F7F4FB] flex flex-1 flex-col">
      <div className="flex flex-1 flex-wrap">
        <div className="flex flex-col flex-1 justify-center items-center p-5 min-w-80">
          <img src={CompleteFormSvgUrl} className="w-full" />
        </div>
        <div className="flex flex-col flex-1 justify-center items-center p-5 min-w-80">
          <h1 className="font-poppins my-2 text-4xl text-[#2B3A67] font-black tracking-tight text-center sm:text-6xl lg:text-6xl lg:leading-snug xl:text-left xl:text-7xl 2xl:text-8xl 2xl:leading-normal">
            Skontaktuj się z nami
          </h1>
          <form className="w-full flex flex-col gap-3" onSubmit={handleSubmit}>
            <Input
              className="h-10"
              placeholder="Imię i nazwisko"
              onChange={(e) => handleChange("fullName", e.target.value)}
            />
            <Input
              className="h-10"
              type="email"
              placeholder="E-mail"
              onChange={(e) => handleChange("email", e.target.value)}
            />
            <Input
              className="h-10"
              type="text"
              placeholder="Temat"
              onChange={(e) => handleChange("subject", e.target.value)}
            />
            <Textarea
              className="h-40"
              placeholder="Wiadomość"
              value={formState?.body}
              onChange={(e) => handleChange("body", e.target.value)}
            />
            <Button type="submit" className="bg-[#2B3A67]">
              Wyślij
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

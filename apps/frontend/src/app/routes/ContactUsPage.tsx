import { ContactFormParams } from "@/api/contactForm";
import { usePostContactForm } from "@/hooks/usePostContactForm";
import { Clock, Github, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const ContactUsPage = () => {
  const [contactForm, setContactForm] = useState<ContactFormParams>({
    fullName: "",
    email: "",
    subject: "",
    body: "",
  });

  const { isPending, mutate } = usePostContactForm();
  const handleChange = (fieldName: keyof ContactFormParams, value: string) => {
    setContactForm((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutate(contactForm, {
      onSuccess: () =>
        alert("Dzięki za wiadomość! Skontaktujemy się z Tobą wkrótce."),
    });

    setContactForm({ fullName: "", email: "", subject: "", body: "" });
  };

  return (
    <div className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Skontaktuj się z nami
          </h1>
          <p className="text-xl text-gray-600">
            Masz pytania lub sugestie? Napisz do nas.
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Imię i nazwisko *
                </label>
                <input
                  type="text"
                  required
                  value={contactForm.fullName}
                  onChange={(e) =>
                    setContactForm({
                      ...contactForm,
                      fullName: e.target.value,
                    })
                  }
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="Wpisz swoje imię i nazwisko"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-2">
                  Adres e-mail *
                </label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                  placeholder="Wpisz swój adres e-mail"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Temat *
              </label>
              <input
                type="text"
                required
                value={contactForm.subject}
                onChange={(e) => handleChange("subject", e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300"
                placeholder="O czym chciałbyś napisać?"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Wiadomość *
              </label>
              <textarea
                required
                rows={6}
                value={contactForm.body}
                onChange={(e) => handleChange("body", e.target.value)}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-purple-500 focus:outline-none transition-all duration-300 resize-none"
                placeholder="Napisz, w czym możemy Ci pomóc..."
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isPending}
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-12 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center mx-auto min-w-[200px]"
              >
                {isPending ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Wysyłanie...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send className="h-5 w-5 mr-2" />
                    Wyślij
                  </div>
                )}
              </button>
            </div>
          </form>

          {/* Contact info */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Otwórz zgłoszenie
                </h3>
                <p className="text-gray-600">
                  <a
                    href="https://github.com/panevka/MentalAidMap/issues/new/choose"
                    target="_blank"
                    className="underline"
                  >
                    Repozytorium GitHub
                  </a>
                </p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Napisz do nas
                </h3>
                <p className="text-gray-600">mentalaidmap@gmail.com</p>
              </div>
              <div>
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  Czas odpowiedzi
                </h3>
                <p className="text-gray-600">Do kilku dni</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;

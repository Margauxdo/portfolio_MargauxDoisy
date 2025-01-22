import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/components/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isCaptchaVerified, setIsCaptchaVerified] = useState(false);

  // Gère les changements dans les champs de formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Gère la vérification du reCAPTCHA
  const handleCaptcha = (value) => {
    setIsCaptchaVerified(!!value); // Définit l'état à "true" si le CAPTCHA est validé
  };

  // Gère la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs obligatoires
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Vérification reCAPTCHA
    if (!isCaptchaVerified) {
      alert("Veuillez vérifier le CAPTCHA avant de soumettre.");
      return;
    }

    // Construction du lien mailto
    const mailtoLink = `mailto:margauxdoisy@gmail.com?subject=Message de ${formData.firstName} ${formData.lastName}&body=Nom : ${formData.firstName} ${formData.lastName}%0AEmail : ${formData.email}%0AMessage : ${formData.message}`;
    window.location.href = mailtoLink;

    // Réinitialisation du formulaire
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    });
    setIsCaptchaVerified(false);
  };

  return (
    <div className="mainContact">
      <form onSubmit={handleSubmit}>
        <label>
          Prénom : <span>*</span>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Nom : <span>*</span>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          E-mail : <span>*</span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message :
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <ReCAPTCHA
          sitekey="6Ldi078qAAAAAMhk68dCGyyLofC9q6DuDJAg1Oz5" // Clé reCAPTCHA v2
          onChange={handleCaptcha}
        />
        <button type="submit" disabled={!isCaptchaVerified}>
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

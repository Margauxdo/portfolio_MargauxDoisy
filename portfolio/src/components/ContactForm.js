import React, { useState } from "react";
import'../styles/components/ContactForm.css';

const ContactForm = () => {
    
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation des données (vérifie si tous les champs sont remplis)
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    // Envoyer les données à l'adresse e-mail spécifiée
    try {
      const response = await fetch("URL_DE_VOTRE_API", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      // Si la requête est réussie, afficher un message de succès
      if (response.ok) {
        alert("Votre message a été envoyé avec succès !");
        // Réinitialiser le formulaire après l'envoi
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
        });
      } else {
        // Si la requête a échoué, afficher un message d'erreur
        alert("Une erreur s'est produite lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi du message :", error);
    }
  };

  return (

    
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
        />
      </label>
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;

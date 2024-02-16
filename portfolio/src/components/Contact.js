import React, { useState } from 'react';
import '../styles/components/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter la logique pour envoyer les données du formulaire à votre backend
        console.log('Données du formulaire:', formData);
        // Réinitialiser les champs du formulaire après la soumission
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        });
      };
    
      return (
        <div>



            <div className='containContact'>
                <div className='containRight'>
                
        <div className='textContact'>
         
          <p>Vous souhaitez me contacter ? Vous recherchez un développeur créatif / front end ?</p>
          <p>Vous pouvez dès maintenant m’envoyer un message grâce à ce formulaire de contact. Si le formulaire ne fonctionne pas, vous pouvez me contacter via ce mail : <a href="mailto:margauxdoisy@gmail.com">margauxdoisy@gmail.com</a></p>
        </div>
        </div>
        <div className='containLeft'>  
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="firstName">Prénom :</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="lastName">Nom :</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email :</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message :</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button className='submitContact' type="submit">Envoyer</button>
          </form>
        </div>
            </div>
      
                </div>
      );
    }

export default Contact;

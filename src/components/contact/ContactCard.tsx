// src/components/contact/ContactCard.tsx
import React from "react";
import { ContactCardProps } from "../../types/contact.types";

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, content }) => (
  <div className="contact-card">
    <img src={icon} alt={`${title} Icon`} />
    <div>
      <h3>{title}</h3>
      <p>{content}</p>
    </div>
  </div>
);

export default ContactCard;

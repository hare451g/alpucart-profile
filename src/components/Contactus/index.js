import React from 'react';

import IosMailOutline from 'react-ionicons/lib/IosMailOutline';
import { ContactUsBackground, MailToLink } from './styled';

function Contactus(props) {
  return (
    <ContactUsBackground>
      <h1>Contact Us</h1>

      <MailToLink href="mailto://nadhira.hadidharma@gmail.com">
        <IosMailOutline fontSize="60px" color="#43853d" /> Nadhira
      </MailToLink>
      <MailToLink href="mailto://rezdkiariw@gmail.com">
        <IosMailOutline fontSize="60px" color="#43853d" />
        Redzki Ari
      </MailToLink>
    </ContactUsBackground>
  );
}

export default Contactus;

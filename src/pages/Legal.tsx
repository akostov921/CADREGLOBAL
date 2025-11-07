import React from "react";

const Legal = () => {
  return (
    <main className="container mx-auto px-6 py-20 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-playfair mb-6">Legal</h1>

      <section className="mb-10">
        <h2 className="text-2xl mb-3">Terms of Service</h2>
        <p className="text-muted-foreground mb-3">
          These Terms of Service govern your use of Cadré Global’s website and services. By using the site
          you agree to these terms. Services are provided at our discretion and may be modified or withdrawn.
        </p>
        <p className="text-muted-foreground mb-3">
          Use of the site does not create an advisory, fiduciary or other professional relationship. All requests
          and engagements are subject to additional written agreement. We reserve the right to refuse service.
        </p>
        <p className="text-muted-foreground">
          For full terms, contact us at <a className="underline" href="mailto:contact@cadreglobal.net">contact@cadreglobal.net</a>.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl mb-3">Privacy Policy</h2>
        <p className="text-muted-foreground mb-3">
          We collect personal information necessary to provide our services (name, email, phone, company, message).
          Information is processed securely and used only for service delivery and communication. We do not sell personal data.
        </p>
        <p className="text-muted-foreground mb-3">
          Users may request access, correction, or deletion of their personal data by contacting <a className="underline" href="mailto:contact@cadreglobal.net">contact@cadreglobal.net</a>.
        </p>
        <p className="text-muted-foreground">
          For more detailed privacy terms or compliance requests, please contact our data protection officer at the address above.
        </p>
      </section>

      <section>
        <h2 className="text-2xl mb-3">Acknowledgement</h2>
        <p className="text-muted-foreground">
          This page provides an overview only and does not constitute legal advice. Please consult legal counsel for binding agreements.
        </p>
      </section>
    </main>
  );
};

export default Legal;
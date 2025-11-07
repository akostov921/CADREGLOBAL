import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
const PrivacyPolicy = () => {
  return <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 pt-8 pb-12 max-w-4xl">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-playfair font-light tracking-wider text-foreground">
            Cadré Global
          </h1>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="bg-card/30 border border-border/50 rounded-lg p-8 md:p-12">
          <h1 className="text-5xl font-playfair font-light mb-2 text-foreground tracking-wide">
            Privacy Policy
          </h1>
          <p className="text-sm text-foreground/60 font-light tracking-wide mb-6">
            Precision. Discretion. Accountability.
          </p>
          <div className="h-px w-24 bg-accent mb-8"></div>

          <div className="space-y-6 text-foreground/90 leading-relaxed font-sans">
            <p className="text-lg">
              Cadré Global ("we," "us," "our," or "the Company") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, share, and protect your personal data when you apply for membership, request services, or interact with us in any capacity.
            </p>

            <p>
              By accessing or using our services, you consent to the collection and processing of your personal information in accordance with this Privacy Policy.
            </p>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">1. Information We Collect</h2>
              <p className="mb-2">We collect personal information in the following categories:</p>
              
              <h3 className="text-xl font-playfair font-light mb-2 text-foreground">1.1 Information You Provide Voluntarily</h3>
              <ul className="list-disc ml-6 space-y-1 mb-3">
                <li>Full name</li>
                <li>Email address, phone number, billing address</li>
                <li>Payment details (processed securely via authorized payment providers)</li>
                <li>Travel preferences, document details (passport / ID), guest names</li>
                <li>Lifestyle preferences relevant to fulfilling your requests</li>
              </ul>

              <h3 className="text-xl font-playfair font-light mb-2 text-foreground">1.2 Automatically Collected Information</h3>
              <ul className="list-disc ml-6 space-y-1 mb-3">
                <li>IP address</li>
                <li>Browser type, device type, session data</li>
                <li>Website interaction analytics (page visits, click behavior)</li>
              </ul>

              <h3 className="text-xl font-playfair font-light mb-2 text-foreground">1.3 Third-Party Information</h3>
              <p>We may receive confirmation details from vendors (flight confirmations, accommodation details, etc.) solely for the purpose of executing your requests.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">2. How We Use Your Information</h2>
              <p className="mb-2">We use your data to:</p>
              <ul className="list-disc ml-6 space-y-1 mb-2">
                <li>Process membership applications</li>
                <li>Fulfill and manage concierge / lifestyle / travel requests</li>
                <li>Coordinate bookings with private aviation, hotels, transfers, and lifestyle partners</li>
                <li>Communicate updates related to requests, bookings, or membership</li>
                <li>Detect fraud or unauthorized activity</li>
                <li>Improve our services and internal processes</li>
              </ul>
              <p className="mb-2">We do not sell your data for marketing purposes. We do not use your data for profiling or automated decision-making.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">3. Legal Basis for Processing (GDPR applicable)</h2>
              <p className="mb-2">Where applicable (EU / EEA clients), processing is based on:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Your consent (Art. 6(1)(a))</li>
                <li>Contract necessity to deliver requested services (Art. 6(1)(b))</li>
                <li>Legitimate business interests such as fraud prevention and operational efficiency (Art. 6(1)(f))</li>
              </ul>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">4. Sharing of Information</h2>
              <p className="mb-2">We only share personal information with:</p>
              <ul className="list-disc ml-6 space-y-1 mb-2">
                <li>Approved and vetted service providers (private jet operators, hotels, security firms, drivers, event hosts)</li>
                <li>Payment processors</li>
                <li>Legal authorities (only if required by law)</li>
              </ul>
              <p className="mb-2">We do not share your information with vendors unless it is required to complete a request you initiated.</p>
              <p>All vendors are bound by confidentiality requirements.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">5. Data Retention</h2>
              <p className="mb-2">We retain personal data only for as long as necessary to:</p>
              <ul className="list-disc ml-6 space-y-1 mb-2">
                <li>Fulfill requested services</li>
                <li>Comply with legal or tax obligations</li>
                <li>Maintain records of transactions and bookings</li>
              </ul>
              <p>Upon membership termination, data not required for legal compliance will be deleted.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">6. Data Security</h2>
              <p className="mb-2">We use administrative, technical, and physical safeguards to protect your data, including:</p>
              <ul className="list-disc ml-6 space-y-1 mb-2">
                <li>Encrypted data transmission (SSL)</li>
                <li>Restricted access to personal information</li>
                <li>Vendor confidentiality and non-disclosure requirements</li>
              </ul>
              <p>No system can be 100% secure; however, we apply industry-standard security measures to reduce risks.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">7. Your Rights</h2>
              <p className="mb-2">Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc ml-6 space-y-1 mb-2">
                <li>Access your personal data</li>
                <li>Request correction or deletion</li>
                <li>Withdraw consent</li>
                <li>Request a copy of stored data</li>
                <li>Restrict or object to processing</li>
              </ul>
              <p>To exercise rights, contact: <a href="mailto:contact@cadreglobal.net" className="text-accent hover:underline">contact@cadreglobal.net</a></p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">8. International Transfers</h2>
              <p className="mb-2">When sharing data with global service providers, we ensure adequate protections through:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Standard Contractual Clauses (SCCs)</li>
                <li>Vendor NDAs</li>
                <li>GDPR compliance (when applicable)</li>
              </ul>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">9. Children's Privacy</h2>
              <p>Cadré Global does not accept membership or collect personal data from individuals under 18 years old.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">10. Changes to This Privacy Policy</h2>
              <p>We may update this policy from time to time. If significant changes occur, we will notify active members via email.</p>
            </section>

            
          </div>
        </div>
      </div>
    </div>;
};
export default PrivacyPolicy;
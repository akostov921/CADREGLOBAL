import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
const TermsOfService = () => {
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
            Terms of Service
          </h1>
          <p className="text-sm text-foreground/60 font-light tracking-wide mb-6">
            Precision. Discretion. Accountability.
          </p>
          <div className="h-px w-24 bg-accent mb-8"></div>

          <div className="space-y-6 text-foreground/90 leading-relaxed font-sans">
            <p className="text-lg">
              By submitting a membership application, accessing services, or engaging with Cadré Global ("we," "us," or "the Company"), you ("Member," "Client,") agree to the following Terms of Service.
            </p>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">1. Membership Eligibility & Application</h2>
              <p className="mb-2">1.1 All membership applications are subject to internal review.</p>
              <p className="mb-2">1.2 Cadré Global reserves the sole and exclusive right to accept, decline, suspend, or terminate any membership application or active membership for any reason, without obligation to disclose reasoning.</p>
              <p>1.3 Membership grants access to request services; it does not guarantee fulfillment of any specific request.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">2. Nature of Services</h2>
              <p className="mb-2">2.1 Cadré Global acts as a facilitator, coordinator, and agent on behalf of the Member.</p>
              <p className="mb-2">2.2 We do not own, operate, or control aircraft, vehicles, hotels, or any third-party service providers.</p>
              <p>2.3 All travel, accommodation, transportation, and lifestyle services are rendered by independent third-party vendors and are subject to their terms, conditions, and liability.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">3. Service Fees, Commissions & Costs</h2>
              <p className="mb-2">3.1 Membership fees grant access to our network and coordination services.</p>
              <p className="mb-2">3.2 Service fees, commissions, handling fees, and vendor charges are billed separately.</p>
              <p>3.3 Prices, rates, and commission structures may change at any time with 30 days notice.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">4. Payments</h2>
              <p className="mb-2">4.1 Membership fees are billed in advance and are non-refundable.</p>
              <p className="mb-2">4.2 For any booking or request requiring funds, payment must be authorized before execution.</p>
              <p>4.3 Failure to maintain an active payment method may result in suspension of service.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">5. Cancellations & Refunds</h2>
              <p className="mb-2">5.1 Membership may be canceled with 30 days written notice, sent to:</p>
              <p className="mb-2 ml-6 text-accent">support@cadreglobal.net</p>
              <p className="mb-2">5.2 Membership fees are non-refundable, regardless of usage.</p>
              <p>5.3 Third-party bookings are subject to their own cancellation and refund rules, which may include 100% penalties.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">6. Privacy, Confidentiality & NDAs</h2>
              <p className="mb-2">6.1 All Member information is handled in accordance with our Privacy Policy.</p>
              <p className="mb-2">6.2 We may share Member information only with approved vendors strictly for fulfilling requested services.</p>
              <p>6.3 Cadré Global may request a signed NDA before releasing proprietary processes or sensitive vendor information.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">7. Limitation of Liability</h2>
              <p className="mb-2">To the maximum extent permitted by law:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Cadré Global is not liable for the actions, errors, omissions, or negligence of third-party service providers.</li>
                <li>Cadré Global is not responsible for delays, cancellations, accidents, injuries, losses, or damages resulting from travel, accommodations, transportation, or third-party services.</li>
                <li>Member agrees to hold Cadré Global harmless from all claims, disputes, or expenses arising from services coordinated through third parties.</li>
                <li>You assume all risks associated with travel, experiences, events, and third-party services.</li>
              </ul>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">8. Member Conduct</h2>
              <p className="mb-2">8.1 Members must treat Cadré Global staff and vendors respectfully.</p>
              <p>8.2 We may terminate membership immediately, without refund, for abusive conduct, fraud, chargebacks, or illegal activity.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">9. Intellectual Property</h2>
              <p>All branding, content, methodologies, and proprietary processes remain the intellectual property of Cadré Global and may not be copied, reproduced, shared, or used externally without written consent.</p>
            </section>

            <section className="py-px">
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">10. Governing Law & Dispute Resolution</h2>
              <p>10.1 All disputes will be resolved exclusively through binding arbitration, not court litigation.</p>
            </section>

            <section>
              <h2 className="text-2xl font-playfair font-light mb-3 text-accent">11. Non-Circumvention</h2>
              <p className="mb-2">11.1 The Member agrees that all suppliers, vendors, partners, and service providers introduced, presented, or otherwise made accessible through Cadré Global ("Introduced Parties") are confidential business relationships of Cadré Global.</p>
              
              <p className="mb-2">11.2 The Member shall not, directly or indirectly, for a period of five (5) years from the date of introduction:</p>
              <ul className="list-disc ml-6 space-y-1 mb-2">
                <li>Bypass, avoid, compete with, or circumvent Cadré Global in any transaction with Introduced Parties;</li>
                <li>Initiate contact, negotiate, or conduct business independently with Introduced Parties;</li>
                <li>Attempt to obtain pricing, discounts, commissions, or access to services without going through Cadré Global.</li>
              </ul>

              <p className="mb-2">11.3 If the Member engages or transacts with any Introduced Party without Cadré Global's written authorization, the Member agrees to pay Cadré Global:</p>
              <p className="mb-2 ml-6">a liquidated damage fee equal to 30% of the total contract value or projected annual spend with that Introduced Party.</p>
              <p className="mb-2 ml-6">This fee is due immediately upon invoice.</p>

              <p className="mb-2">11.4 The Member acknowledges that:</p>
              <ul className="list-disc ml-6 space-y-1 mb-2">
                <li>Introduced Parties are a protected business asset of Cadré Global;</li>
                <li>Cadré Global invests resources, relationships, and negotiation leverage to secure access;</li>
                <li>Circumvention causes immediate, irreparable harm.</li>
              </ul>

              <p className="mb-2">11.5 Cadré Global reserves the right to terminate membership immediately, without refund, if a Member violates this clause, and may pursue legal action for damages, injunctive relief, and recovery of costs and attorney fees.</p>
              <p>Attempted circumvention is treated the same as successful circumvention.</p>
            </section>
          </div>
        </div>
      </div>
    </div>;
};
export default TermsOfService;
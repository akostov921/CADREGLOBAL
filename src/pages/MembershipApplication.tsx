import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
const membershipSchema = z.object({
  fullName: z.string().trim().min(2, "Full name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  mobilePhone: z.string().trim().min(10, "Valid mobile phone is required").max(20),
  company: z.string().trim().min(2, "Company name is required").max(200),
  jobTitle: z.string().trim().min(2, "Job title is required").max(200),
  address: z.string().trim().min(10, "Address is required").max(500),
  agreeToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms of service"
  })
});
type MembershipFormData = z.infer<typeof membershipSchema>;
const MembershipApplication = () => {
  const navigate = useNavigate();
  const {
    toast
  } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<MembershipFormData>>({});
  const [errors, setErrors] = useState<Partial<Record<keyof MembershipFormData, string>>>({});
  const handleChange = (field: keyof MembershipFormData, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    try {
      // Validate form data
      const validatedData = membershipSchema.parse(formData);

      // Send email notification
      const {
        supabase
      } = await import("@/integrations/supabase/client");
      const {
        error
      } = await supabase.functions.invoke("send-contact-email", {
        body: {
          type: "membership_application",
          data: {
            name: validatedData.fullName,
            email: validatedData.email,
            phone: validatedData.mobilePhone,
            company: validatedData.company,
            jobTitle: validatedData.jobTitle,
            address: validatedData.address
          }
        }
      });
      if (error) throw error;
      toast({
        title: "Application Submitted",
        description: "Your membership application has been received. Redirecting to subscription..."
      });

      // Navigate to subscription page
      setTimeout(() => {
        navigate("/subscription");
      }, 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof MembershipFormData, string>> = {};
        error.errors.forEach(err => {
          if (err.path[0]) {
            newErrors[err.path[0] as keyof MembershipFormData] = err.message;
          }
        });
        setErrors(newErrors);
        toast({
          title: "Validation Error",
          description: "Please check the form for errors.",
          variant: "destructive"
        });
      } else {
        toast({
          title: "Submission Error",
          description: "Failed to submit application. Please try again.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleMailtoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const to = "contact@cadreglobal.net";
    const subject = encodeURIComponent(`Membership Application — ${form.name || form.email}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
  };
  return <div className="min-h-screen bg-[#0A0A1F] text-foreground">
      <Header />
      
      <main className="pt-24 pb-20 bg-gradient-to-b from-secondary to-background">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-12">
            
            
            <p className="text-muted-foreground max-w-2xl mx-auto"> Cadre Global's exclusive network  of elite members.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-12">
            <div className="space-y-8 border-l-2 border-primary pl-8">
              <h2 className="text-3xl font-light tracking-wide text-foreground">Application </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="fullName" className="text-foreground text-base">Full Name *</Label>
                  <Input id="fullName" value={formData.fullName || ""} onChange={e => handleChange("fullName", e.target.value)} className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors" placeholder="John Smith" />
                  {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="email" className="text-foreground text-base">Email Address *</Label>
                  <Input id="email" type="email" value={formData.email || ""} onChange={e => handleChange("email", e.target.value)} className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors" placeholder="john@example.com" />
                  {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="mobilePhone" className="text-foreground text-base">Mobile Phone *</Label>
                  <Input id="mobilePhone" type="tel" value={formData.mobilePhone || ""} onChange={e => handleChange("mobilePhone", e.target.value)} className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors" placeholder="+1 (555) 123-4567" />
                  {errors.mobilePhone && <p className="text-sm text-destructive">{errors.mobilePhone}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="company" className="text-foreground text-base">Company Name *</Label>
                  <Input id="company" value={formData.company || ""} onChange={e => handleChange("company", e.target.value)} className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors" placeholder="ABC Corporation" />
                  {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                </div>

                <div className="space-y-3">
                  <Label htmlFor="jobTitle" className="text-foreground text-base">Job Title *</Label>
                  <Input id="jobTitle" value={formData.jobTitle || ""} onChange={e => handleChange("jobTitle", e.target.value)} className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors" placeholder="CEO, Director, Manager..." />
                  {errors.jobTitle && <p className="text-sm text-destructive">{errors.jobTitle}</p>}
                </div>

                <div className="space-y-3 md:col-span-2">
                  <Label htmlFor="address" className="text-foreground text-base">Address *</Label>
                  <Textarea id="address" value={formData.address || ""} onChange={e => handleChange("address", e.target.value)} className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground min-h-[100px] px-0 focus:border-primary focus-visible:ring-0 transition-colors resize-none" placeholder="Street, City, State, Postal Code, Country" />
                  {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
                </div>
              </div>
            </div>

            {/* Terms of Service */}
            <div className="space-y-8 border-l-2 border-primary pl-8">
              <h2 className="text-3xl font-light tracking-wide text-foreground">
                Terms of Service
              </h2>
              
              <div className="bg-muted/20 border border-border/30 rounded-lg p-6 max-h-[400px] overflow-y-auto space-y-6 text-sm text-muted-foreground">
                <div>
                  <h3 className="text-foreground font-semibold text-lg mb-4">Cadré Global – Membership Terms of Service</h3>
                  
                  <p className="mb-4">
                    By submitting a membership application, accessing services, or engaging with Cadré Global ("we," "us," or "the Company"), you ("Member," "Client,") agree to the following Terms of Service.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">1. Membership Eligibility & Application</h4>
                      <p className="mb-1">1.1 All membership applications are subject to internal review.</p>
                      <p className="mb-1">1.2 Cadré Global reserves the sole and exclusive right to accept, decline, suspend, or terminate any membership application or active membership for any reason, without obligation to disclose reasoning.</p>
                      <p>1.3 Membership grants access to request services; it does not guarantee fulfillment of any specific request.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">2. Nature of Services</h4>
                      <p className="mb-1">2.1 Cadré Global acts as a facilitator, coordinator, and agent on behalf of the Member.</p>
                      <p className="mb-1">2.2 We do not own, operate, or control aircraft, vehicles, hotels, or any third-party service providers.</p>
                      <p>2.3 All travel, accommodation, transportation, and lifestyle services are rendered by independent third-party vendors and are subject to their terms, conditions, and liability.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">3. Service Fees, Commissions & Costs</h4>
                      <p className="mb-1">3.1 Membership fees grant access to our network and coordination services.</p>
                      <p className="mb-1">3.2 Service fees, commissions, handling fees, and vendor charges are billed separately.</p>
                      <p>3.3 Prices, rates, and commission structures may change at any time with 30 days notice.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">4. Payments</h4>
                      <p className="mb-1">4.1 Membership fees are billed in advance and are non-refundable.</p>
                      <p className="mb-1">4.2 For any booking or request requiring funds, payment must be authorized before execution.</p>
                      <p>4.3 Failure to maintain an active payment method may result in suspension of service.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">5. Cancellations & Refunds</h4>
                      <p className="mb-1">5.1 Membership may be canceled with 30 days written notice, sent to: support@cadreglobal.net</p>
                      <p className="mb-1">5.2 Membership fees are non-refundable, regardless of usage.</p>
                      <p>5.3 Third-party bookings are subject to their own cancellation and refund rules, which may include 100% penalties.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">6. Privacy, Confidentiality & NDAs</h4>
                      <p className="mb-1">6.1 All Member information is handled in accordance with our Privacy Policy.</p>
                      <p className="mb-1">6.2 We may share Member information only with approved vendors strictly for fulfilling requested services.</p>
                      <p>6.3 Cadré Global may request a signed NDA before releasing proprietary processes or sensitive vendor information.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">7. Limitation of Liability</h4>
                      <p className="mb-2">To the maximum extent permitted by law:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Cadré Global is not liable for the actions, errors, omissions, or negligence of third-party service providers.</li>
                        <li>Cadré Global is not responsible for delays, cancellations, accidents, injuries, losses, or damages resulting from travel, accommodations, transportation, or third-party services.</li>
                        <li>Member agrees to hold Cadré Global harmless from all claims, disputes, or expenses arising from services coordinated through third parties.</li>
                        <li>You assume all risks associated with travel, experiences, events, and third-party services.</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">8. Member Conduct</h4>
                      <p className="mb-1">8.1 Members must treat Cadré Global staff and vendors respectfully.</p>
                      <p>8.2 We may terminate membership immediately, without refund, for abusive conduct, fraud, chargebacks, or illegal activity.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">9. Intellectual Property</h4>
                      <p>All branding, content, methodologies, and proprietary processes remain the intellectual property of Cadré Global and may not be copied, reproduced, shared, or used externally without written consent.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">10. Governing Law & Dispute Resolution</h4>
                      <p>10.1 All disputes will be resolved exclusively through binding arbitration, not court litigation.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">11. Non-Circumvention</h4>
                      <p className="mb-2">11.1 The Member agrees that all suppliers, vendors, partners, and service providers introduced, presented, or otherwise made accessible through Cadré Global ("Introduced Parties") are confidential business relationships of Cadré Global.</p>
                      <p className="mb-2">11.2 The Member shall not, directly or indirectly, for a period of five (5) years from the date of introduction:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Bypass, avoid, compete with, or circumvent Cadré Global in any transaction with Introduced Parties;</li>
                        <li>Initiate contact, negotiate, or conduct business independently with Introduced Parties;</li>
                        <li>Attempt to obtain pricing, discounts, commissions, or access to services without going through Cadré Global.</li>
                      </ul>
                      <p className="mb-2">11.3 If the Member engages or transacts with any Introduced Party without Cadré Global's written authorization, the Member agrees to pay Cadré Global a liquidated damage fee equal to 30% of the total contract value or projected annual spend with that Introduced Party. This fee is due immediately upon invoice.</p>
                      <p className="mb-2">11.4 The Member acknowledges that:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Introduced Parties are a protected business asset of Cadré Global;</li>
                        <li>Cadré Global invests resources, relationships, and negotiation leverage to secure access;</li>
                        <li>Circumvention causes immediate, irreparable harm.</li>
                      </ul>
                      <p>11.5 Cadré Global reserves the right to terminate membership immediately, without refund, if a Member violates this clause, and may pursue legal action for damages, injunctive relief, and recovery of costs and attorney fees. Attempted circumvention is treated the same as successful circumvention.</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-border/30 pt-6">
                  <h3 className="text-foreground font-semibold text-lg mb-4">Privacy Policy</h3>
                  
                  <p className="mb-4">
                    Cadré Global ("we," "us," "our," or "the Company") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, store, share, and protect your personal data when you apply for membership, request services, or interact with us in any capacity.
                  </p>

                  <p className="mb-4">
                    By accessing or using our services, you consent to the collection and processing of your personal information in accordance with this Privacy Policy.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-foreground font-semibold mb-2">1. Information We Collect</h4>
                      <p className="mb-2">We collect personal information in the following categories:</p>
                      <p className="font-medium mb-1">1.1 Information You Provide Voluntarily</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Full name</li>
                        <li>Email address, phone number, billing address</li>
                        <li>Payment details (processed securely via authorized payment providers)</li>
                        <li>Travel preferences, document details (passport / ID), guest names</li>
                        <li>Lifestyle preferences relevant to fulfilling your requests</li>
                      </ul>
                      <p className="font-medium mb-1">1.2 Automatically Collected Information</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>IP address</li>
                        <li>Browser type, device type, session data</li>
                        <li>Website interaction analytics (page visits, click behavior)</li>
                      </ul>
                      <p className="font-medium mb-1">1.3 Third-Party Information</p>
                      <p>We may receive confirmation details from vendors (flight confirmations, accommodation details, etc.) solely for the purpose of executing your requests.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">2. How We Use Your Information</h4>
                      <p className="mb-2">We use your data to:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Process membership applications</li>
                        <li>Fulfill and manage concierge / lifestyle / travel requests</li>
                        <li>Coordinate bookings with private aviation, hotels, transfers, and lifestyle partners</li>
                        <li>Communicate updates related to requests, bookings, or membership</li>
                        <li>Detect fraud or unauthorized activity</li>
                        <li>Improve our services and internal processes</li>
                      </ul>
                      <p>We do not sell your data for marketing purposes. We do not use your data for profiling or automated decision-making.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">3. Legal Basis for Processing (GDPR applicable)</h4>
                      <p className="mb-2">Where applicable (EU / EEA clients), processing is based on:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Your consent (Art. 6(1)(a))</li>
                        <li>Contract necessity to deliver requested services (Art. 6(1)(b))</li>
                        <li>Legitimate business interests such as fraud prevention and operational efficiency (Art. 6(1)(f))</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">4. Sharing of Information</h4>
                      <p className="mb-2">We only share personal information with:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Approved and vetted service providers (private jet operators, hotels, security firms, drivers, event hosts)</li>
                        <li>Payment processors</li>
                        <li>Legal authorities (only if required by law)</li>
                      </ul>
                      <p className="mb-1">We do not share your information with vendors unless it is required to complete a request you initiated.</p>
                      <p>All vendors are bound by confidentiality requirements.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">5. Data Retention</h4>
                      <p className="mb-2">We retain personal data only for as long as necessary to:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Fulfill requested services</li>
                        <li>Comply with legal or tax obligations</li>
                        <li>Maintain records of transactions and bookings</li>
                      </ul>
                      <p>Upon membership termination, data not required for legal compliance will be deleted.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">6. Data Security</h4>
                      <p className="mb-2">We use administrative, technical, and physical safeguards to protect your data, including:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Encrypted data transmission (SSL)</li>
                        <li>Restricted access to personal information</li>
                        <li>Vendor confidentiality and non-disclosure requirements</li>
                      </ul>
                      <p>No system can be 100% secure; however, we apply industry-standard security measures to reduce risks.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">7. Your Rights</h4>
                      <p className="mb-2">Depending on your jurisdiction, you may have the right to:</p>
                      <ul className="list-disc pl-6 space-y-1 mb-2">
                        <li>Access your personal data</li>
                        <li>Request correction or deletion</li>
                        <li>Withdraw consent</li>
                        <li>Request a copy of stored data</li>
                        <li>Restrict or object to processing</li>
                      </ul>
                      <p>To exercise rights, contact: contact@cadreglobal.net</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">8. International Transfers</h4>
                      <p className="mb-2">When sharing data with global service providers, we ensure adequate protections through:</p>
                      <ul className="list-disc pl-6 space-y-1">
                        <li>Standard Contractual Clauses (SCCs)</li>
                        <li>Vendor NDAs</li>
                        <li>GDPR compliance (when applicable)</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">9. Children's Privacy</h4>
                      <p>Cadré Global does not accept membership or collect personal data from individuals under 18 years old.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">10. Changes to This Privacy Policy</h4>
                      <p>We may update this policy from time to time. If significant changes occur, we will notify active members via email.</p>
                    </div>

                    <div>
                      <h4 className="text-foreground font-semibold mb-2">11. Contact Us</h4>
                      <p className="mb-1">For privacy inquiries or data access requests:</p>
                      <p className="mb-1">Cadré Global Privacy Office</p>
                      <p className="mb-1">contact@cadreglobal.net</p>
                      <p> www.cadreglobal.net</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 pt-4">
                <Checkbox id="agreeToTerms" checked={formData.agreeToTerms || false} onCheckedChange={checked => handleChange("agreeToTerms", checked as boolean)} className="mt-1 border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent" />
                <div className="space-y-1">
                  <Label htmlFor="agreeToTerms" className="text-foreground font-normal cursor-pointer leading-relaxed text-base">
                    I have read and agree to the Terms of Service *
                  </Label>
                  {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms}</p>}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4 pt-8 border-t border-border/20">
              <Button type="button" variant="outline" size="lg" onClick={() => navigate("/")} className="min-w-[120px]">
                Cancel
              </Button>
              <Button type="submit" variant="default" disabled={isSubmitting} className="min-w-[200px] bg-primary text-primary-foreground hover:bg-primary/90" size="lg">
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </div>
          </form>

          <form onSubmit={handleMailtoSubmit} className="space-y-4 mt-12">
            <input name="name" value={form.name} onChange={onChange} placeholder="Full name" required className="w-full rounded-md px-4 py-2 bg-input/60" />
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" type="email" required className="w-full rounded-md px-4 py-2 bg-input/60" />
            <input name="company" value={form.company} onChange={onChange} placeholder="Company" className="w-full rounded-md px-4 py-2 bg-input/60" />
            <textarea name="message" value={form.message} onChange={onChange} placeholder="Tell us about your membership interest" rows={6} className="w-full rounded-md px-4 py-2 bg-input/60" />

            <div className="flex items-center gap-3">
              <button type="submit" className="bg-accent text-accent-foreground px-4 py-2 rounded-md">Submit Application</button>
              <button type="button" onClick={() => setForm({ name: "", email: "", company: "", message: "" })} className="text-muted-foreground">Clear</button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>;
};
export default MembershipApplication;
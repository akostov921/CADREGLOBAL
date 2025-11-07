import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  type: "newsletter" | "request_access" | "plan_selection" | "membership_application";
  data: {
    email?: string;
    name?: string;
    plan?: string;
    phone?: string;
    company?: string;
    jobTitle?: string;
    address?: string;
  };
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.error("RESEND_API_KEY not found");
      throw new Error("Email service not configured");
    }

    const resend = new Resend(resendApiKey);
    
    const { type, data }: EmailRequest = await req.json();
    
    console.log("Sending email:", { type, data });

    let subject = "";
    let htmlContent = "";

    switch (type) {
      case "newsletter":
        subject = "New Newsletter Subscription - Cadré Global";
        htmlContent = `
          <h2>New Newsletter Subscription</h2>
          <p><strong>Email:</strong> ${data.email}</p>
        `;
        break;

      case "request_access":
        subject = "New Access Request - Cadré Global";
        htmlContent = `
          <h2>New Access Request</h2>
          <p>A user has requested access to Cadré Global services.</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        `;
        break;

      case "plan_selection":
        subject = `New ${data.plan} Plan Selection - Cadré Global`;
        htmlContent = `
          <h2>New Plan Selection</h2>
          <p><strong>Plan:</strong> ${data.plan}</p>
          <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
        `;
        break;

      case "membership_application":
        subject = "New Membership Application - Cadré Global";
        htmlContent = `
          <h2>New Membership Application</h2>
          <p><strong>Full Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Mobile Phone:</strong> ${data.phone}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Job Title:</strong> ${data.jobTitle}</p>
          <p><strong>Address:</strong> ${data.address}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        `;
        break;

      default:
        throw new Error("Invalid email type");
    }

    const emailResponse = await resend.emails.send({
      from: "Cadré Global <onboarding@resend.dev>",
      to: ["contact@cadreglobal.net"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, data: emailResponse }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);

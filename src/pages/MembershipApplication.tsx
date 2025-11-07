<form
  name="membership-application"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
  action="/membership/success"
  className="space-y-12"
  onSubmit={(e) => {
    // optional: client-side validation with Zod before submit
    const parsed = membershipSchema.safeParse(formData);
    if (!parsed.success) {
      e.preventDefault();
      const errs: Record<string, string> = {};
      parsed.error.errors.forEach(er => { if (er.path[0]) errs[er.path[0] as string] = er.message; });
      setErrors(errs as any);
      toast({ title: "Validation Error", description: "Please check the form.", variant: "destructive" });
      return;
    }
    // If valid, allow normal POST (Netlify captures & emails)
    setIsSubmitting(true);
  }}
>
  {/* Netlify fields */}
  <input type="hidden" name="form-name" value="membership-application" />
  <input type="hidden" name="bot-field" />

  {/* --- YOUR FIELDS (add name=) --- */}
  <div className="space-y-8 border-l-2 border-primary pl-8">
    <h2 className="text-3xl font-light tracking-wide text-foreground">Application</h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-3 md:col-span-2">
        <Label htmlFor="fullName" className="text-foreground text-base">Full Name *</Label>
        <Input
          id="fullName"
          name="full_name"
          value={formData.fullName || ""}
          onChange={(e) => handleChange("fullName", e.target.value)}
          placeholder="John Smith"
          className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors"
          required
        />
        {errors.fullName && <p className="text-sm text-destructive">{errors.fullName}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="email" className="text-foreground text-base">Email Address *</Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email || ""}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="john@example.com"
          className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors"
          required
        />
        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="mobilePhone" className="text-foreground text-base">Mobile Phone *</Label>
        <Input
          id="mobilePhone"
          name="mobile_phone"
          type="tel"
          value={formData.mobilePhone || ""}
          onChange={(e) => handleChange("mobilePhone", e.target.value)}
          placeholder="+1 (555) 123-4567"
          className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors"
          required
        />
        {errors.mobilePhone && <p className="text-sm text-destructive">{errors.mobilePhone}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="company" className="text-foreground text-base">Company Name *</Label>
        <Input
          id="company"
          name="company"
          value={formData.company || ""}
          onChange={(e) => handleChange("company", e.target.value)}
          placeholder="ABC Corporation"
          className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors"
          required
        />
        {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
      </div>

      <div className="space-y-3">
        <Label htmlFor="jobTitle" className="text-foreground text-base">Job Title *</Label>
        <Input
          id="jobTitle"
          name="job_title"
          value={formData.jobTitle || ""}
          onChange={(e) => handleChange("jobTitle", e.target.value)}
          placeholder="CEO, Director, Manager..."
          className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground h-12 px-0 focus:border-primary focus-visible:ring-0 transition-colors"
          required
        />
        {errors.jobTitle && <p className="text-sm text-destructive">{errors.jobTitle}</p>}
      </div>

      <div className="space-y-3 md:col-span-2">
        <Label htmlFor="address" className="text-foreground text-base">Address *</Label>
        <Textarea
          id="address"
          name="address"
          value={formData.address || ""}
          onChange={(e) => handleChange("address", e.target.value)}
          placeholder="Street, City, State, Postal Code, Country"
          className="bg-transparent border-0 border-b-2 border-border/40 rounded-none text-foreground min-h-[100px] px-0 focus:border-primary focus-visible:ring-0 transition-colors resize-none"
          required
        />
        {errors.address && <p className="text-sm text-destructive">{errors.address}</p>}
      </div>
    </div>
  </div>

  {/* Terms */}
  <div className="space-y-8 border-l-2 border-primary pl-8">
    {/* ... your TOS content unchanged ... */}
    <div className="flex items-start gap-4 pt-4">
      <Checkbox
        id="agreeToTerms"
        checked={formData.agreeToTerms || false}
        onCheckedChange={(checked) => handleChange("agreeToTerms", checked as boolean)}
        className="mt-1 border-border data-[state=checked]:bg-accent data-[state=checked]:border-accent"
      />
      <div className="space-y-1">
        <Label htmlFor="agreeToTerms" className="text-foreground font-normal cursor-pointer leading-relaxed text-base">
          I have read and agree to the Terms of Service *
        </Label>
        {/* Ensure this is included in submission */}
        <input type="hidden" name="agree_tos" value={formData.agreeToTerms ? "yes" : "no"} />
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


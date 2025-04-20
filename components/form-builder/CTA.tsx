import { useState } from "react";
import { ArrowRight, SendHorizonal, ShieldCheck } from "lucide-react";
import Toast from "@/components/ui/toast";

const CTA = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setShowToast(true);
      setFormData({ name: "", email: "", company: "", message: "" });
      setIsSubmitting(false);

      // Auto-hide after 3 seconds
      setTimeout(() => setShowToast(false), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-0 bg-gray-50">
      {showToast && (
        <Toast
          message="Message sent successfully!"
          description="We'll get back to you shortly."
          onClose={() => setShowToast(false)}
        />
      )}      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto glass-card overflow-hidden shadow-card">
          <div className="flex flex-col lg:flex-row">
            {/* Left side - Contact form */}
            <div className="lg:w-1/2 p-8 md:p-12">
              <div className="max-w-md">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Enhance Your EHS Compliance Today
                </h2>
                <p className="text-gray-600 mb-8">
                  Ready to streamline your EHS operations? Contact us to learn how Safify Forms
                  can transform your compliance processes.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-safify-500 focus:border-safify-500 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-safify-500 focus:border-safify-500 outline-none transition-all"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-safify-500 focus:border-safify-500 outline-none transition-all"
                      placeholder="Your company"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-safify-500 focus:border-safify-500 outline-none transition-all"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-safify-500 text-white font-medium rounded-lg hover-scale shadow-blue flex items-center justify-center gap-2 disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>Processing...</>
                    ) : (
                      <>
                        Send Message
                        <SendHorizonal className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Right side - CTA banner */}
            <div className="lg:w-1/2 bg-safify-500 p-8 md:p-12 flex items-center">
              <div className="text-white">
                <div className="inline-flex items-center py-1.5 px-3 bg-white/20 rounded-full text-white text-sm font-medium backdrop-blur-sm mb-6">
                  <ShieldCheck className="w-4 h-4 mr-2" />
                  <span>Trusted EHS Solution</span>
                </div>

                <h2 className="text-3xl font-bold mb-6">
                  Start Your Free Trial Today
                </h2>
                <p className="text-white/90 mb-8 text-lg">
                  Join thousands of EHS professionals who have transformed their compliance processes with Safify Forms.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>14-day free trial with all features unlocked</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>No credit card required to get started</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-white shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>Free onboarding and implementation support</span>
                  </div>
                </div>

                <div className="mt-10">
                  <a
                    href="#get-started"
                    className="px-8 py-3 bg-white text-safify-500 font-medium rounded-lg hover-scale shadow-subtle inline-flex items-center gap-2"
                  >
                    Get Started for Free
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

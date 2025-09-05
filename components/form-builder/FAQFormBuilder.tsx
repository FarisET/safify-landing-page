import Accordion from "@/components/accordion";

export default function FAQFormBuilder() {
  const faqs = [
    {
      id: "1",
      question: "Is Safify a GRC Application?",
      answer: "Partially. Standard GRCs lack on-field dynamic data collection tools for operations like Form Builders and focus on control tracking with manual evidence linking to achive compliance. Safify offers a hybrid solution as an operations tool with standard task assignment, scheduling and data collection; Coupled with compliance integration via regulatory clause linking. The outcome is the catering of the market gap: evidence-based compliance tracking with on-field data collection"
    },
    {
      id: "2", 
      question: "Do I need coding skills to use Form Builder?",
      answer: "No coding skills required! Our builder interface makes it easy for anyone to create professional forms. Simply select form elements, customize fields, set validation rules, and publish your forms in minutes."
    },
    {
      id: "3",
      question: "How are custom forms built?",
      answer: "With Safify's Form Builder: A dynamic select tool offering 10+ data types, logic builder, live mobile preview, back-tracking and more"
    },
    {
      id: "4",
      question: "What types of forms can I create?",
      answer: "You can create various types of forms including safety incident reports, equipment inspections, compliance checklists, risk assessments, training records, audit forms, and custom industry-specific forms. The platform supports text fields, dropdowns, checkboxes, file uploads, signatures, and more."
    },
   
  ];

  return (
    <section className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto h-24 w-px bg-gradient-to-b from-blue-500/20 to-transparent"></div>
      </div>

      <div className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:py-24">
          {/* Section header */}
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="h2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Safify Form Builder
            </p>
          </div>

          {/* FAQ items */}
          <div className="mx-auto mt-16 max-w-3xl">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Accordion
                  key={faq.id}
                  title={faq.question}
                  id={faq.id}
                  active={index === 0} // First item open by default
                >
                  {faq.answer}
                </Accordion>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Accordion from "@/components/accordion";

export default function FAQFormBuilder() {
  const faqs = [
    {
      id: "1",
      question: "Is Safify a GRC Application?",
      answer: "Partially. Standard GRCs lack on-field dynamic data collection tools like Form Builders for operations and focus on control tracking with evidence collection to achive compliance. Safify offers a hybrid solution as an operations tool with standard task assignment, scheduling and data collection; Coupled with compliance tracking via regulatory clause linking. The outcome is the catering of the market gap: Evidence-based compliance tracking with on-field data collection"
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
    <section id="industries" className="py-20 px-4 md:px-0">
      <div className="px-8 mx-auto">
      </div>

      <div className="relative">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20 lg:py-24">
          {/* Section header */}
          {/* <div className="mx-auto max-w-3xl md:text-center">
            <h2 className="h2 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Safify
            </p>
          </div> */}
          <div className="md:text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-medium mb-3">Frequently Asked Questions</p>
          <h2 className="text-xl text-gray-600">
          Everything you need to know about Safify
          </h2>
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

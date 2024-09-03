import React, { useState } from 'react';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      question: 'What is Tailwind CSS?',
      answer: 'Tailwind CSS is a utility-first CSS framework for rapid UI development.',
    },
    {
      question: 'How does React work?',
      answer: 'React creates a virtual DOM and efficiently updates and renders components.',
    },
    {
      question: 'Is Tailwind CSS a replacement for CSS?',
      answer: 'Tailwind CSS is not a replacement but rather a utility-first approach to writing CSS.',
    },
  ];

  return (
    <div id='FAQ' className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12 border-b border-zinc-500">
      <h2 className="text-2xl sm:text-3xl text-center mb-8">Frequently Asked Questions</h2>
      <div className="w-full max-w-2xl">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-zinc-500 pb-4 mb-4">
            <h3
              className="text-lg sm:text-xl cursor-pointer flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span>{openIndex === index ? '-' : '+'}</span>
            </h3>
            {openIndex === index && <p className="mt-2 text-sm sm:text-base">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
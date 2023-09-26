// src/FAQ.js
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What can I create with copy.ai',
      answer: 'We have copywriting tools for everything you need to start'
    },
    {
      question: 'How much does it cost',
      answer: 'Our copywriting tools have a free plan',
    },
    // Add more FAQ items here
    {
      question: 'What language does it support',
      answer: 'With the Pro plan, you can create content in the following 25+ languages:',
    },
    {
      question: 'Can I get a demo of the product',
      answer: 'Of course! We are currently running 3 live demos a week.use{"\n"}',
            
    },
    {
      question: 'Where can I learn more about copywriting and enterpreneurship',
      answer: 'Check out google.com'
    }

  ]);

  const toggleFAQ = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].isOpen = !newFaqs[index].isOpen;
    setFaqs(newFaqs);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      {faqs.map((faq, index) => (
        <div key={index} className={`faq-item ${faq.isOpen ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          {faq.isOpen && <div className="faq-answer">{faq.answer}</div>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;

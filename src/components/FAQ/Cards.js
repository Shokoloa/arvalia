import React from 'react';

function FAQuestions({ data }) {

    return (
        <div id="faq-panel">
            {data.map((faq, index) => {
                return (
                    <article className="faq-accordion" key={index}>
                        <input className="tgg-title" type="checkbox" id={`tgg-title-${index}`} />
                        <div className="faq-accordion-title">
                            <label htmlFor={`tgg-title-${index}`}>
                                <h6>{faq.question}</h6>
                                <span className="faq-arrow"></span>
                            </label>
                        </div>
                        <div className="faq-accordion-content">
                            <p>{faq.answer}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

export default FAQuestions;
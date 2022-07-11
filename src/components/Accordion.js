import React from 'react'
import AccordionItem from './AccordionItem'

const Accordion = () => {

    const faq = [
        {
            question: 'What do the abbreviations mean?',
            answer: `R-rank P-points W-win D-draw L-losses GD-goaldifference.`
        },
        {
            question: 'How does the head to head section work?',
            answer: 'If you want to change teams, click on one of the team names in the table. The number below the logo shows how many wins each team has against the other.'
        },
        {
            question: 'Data source:',
            answer: `https://rapidapi.com/api-sports/api/api-football/`
        }
    ];

    const renderedItems = faq.map(item => {
        return <AccordionItem item={item} key={item.question}/>
    })

  return (
    <div className="accordion-list">{renderedItems}</div>
  )
}

export default Accordion;

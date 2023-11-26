import React from 'react'
import './Features.css'
import Feature from '../../components/feature/Feature'

const featuresData = [
  {
    title:'Advancements in Language Understanding',
    text:" Discuss the potential for further advancements in GPT-3's language understanding capabilities. Highlight ongoing research and developments aimed at enhancing its comprehension of complex queries, idiomatic expressions, and contextual nuances."
  },
  {
    title:'Improved Context Retention',
    text:"Explain how future iterations of GPT-3 may have improved context retention, allowing for more coherent and consistent conversations. Discuss the potential for GPT-3 to retain longer-term memory and refer back to earlier parts of a conversation more effectively."
  },
  {
    title:'Enhanced Training Methodologies',
    text:" Highlight the possibility of refining GPT-3's training methodologies to incorporate more diverse and reliable datasets. Discuss the potential impact of such improvements on the model's accuracy, generalization, and reduction of biases."
  },
  {
    title:'Domain-Specific Expertise',
    text:"Highlight the potential for GPT-3 to be fine-tuned and specialized for specific domains or industries. Discuss the advantages of domain-specific expertise in areas such as healthcare, finance, customer support, and research, where GPT-3 can provide tailored and accurate responses."
  }

]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id='features'>
      <div className='gpt3__features-heading'> 
        <h1 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className='gpt3__features-container'>
        {featuresData.map((item,index) =>(
           <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>
    </div>
  )
}

export default Features
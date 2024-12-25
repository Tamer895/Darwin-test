import React, {useState, useRef} from 'react';
import { CSSTransition } from 'react-transition-group';
import './AccordionItem.css';

function AccordionItem({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`container accordion-component px-5 py-3 mb-1 ease-in-out duration-300 bg-white`}>
      <button
        className="w-full text-left p-4 bg-gray-100"
        onClick={toggleAccordion}
      >
        <div className="flex justify-between items-center">
          <span className='text-lg font-regular'>{title}</span>
          <span className='text-2xl flex-center'>{isOpen ? <span class="material-symbols-rounded">
remove
</span> : <span class="material-symbols-rounded">
add
</span>}</span>
        </div>
      </button>


      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px',
        }}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
      >
        <div className="pb-4 px-4 text-sm text-gray">{content}</div>
      </div>
    </div>
  );
}

export default function AccordionComponent(props) {
  return (
    <div className="w-full">
      {props.items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>

  );
}

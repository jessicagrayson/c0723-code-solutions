import './Styles.css';
import { useState } from 'react';

// parent component w/ topics array as a prop
export default function AccordionComponent({ topics }) {
  // initializes useState
  const [chosenTopic, setChosenTopic] = useState();

  // toggles topic based on index - if open topic is clicked - will close, if a closed topic is clicked - will open
  const handleClick = (index) => {
    if (chosenTopic === index) {
      setChosenTopic(null);
    } else {
      setChosenTopic(index);
    }
  };

  // creates list of Topic components by mapping thru topics array and creates a Topic for each w/ its properties as props
  const topicComponents = topics.map((topic, index) => (
    <Topic
      key={topic.id}
      title={topic.title}
      content={topic.content}
      isOpen={chosenTopic === index}
      handleClick={() => handleClick(index)}
    />
  ));
  // renders Topic components in a div
  return <div>{topicComponents}</div>;
}

// child component - contains button w/ title and <p> with text
function Topic({ title, content, isOpen, handleClick }) {
  return (
    <div className="topicContainer">
      <button className="topicButton" onClick={handleClick}>
        {title}
      </button>
      {isOpen && <p className="topicContent">{content}</p>}
    </div>
  );
}

import { useState } from 'react';

export default function RotatingBanner({ items }) {
  const [currentIndex, setCurrentIndex] = { useState }(0);

  function handlePrevClick() {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  }

  function handleNextClick() {
    setCurrentIndex((currentIndex + 1) % items.length);
  }

  function handleIndicatorClick(i) {
    setCurrentIndex(i);
  }

  return (
    <div>
      <Banner item={items[currentIndex]} />
      <PrevButton onPrevClick={handlePrevClick} />
      <Indicators
        count={items.length}
        current={currentIndex}
        onClick={handleIndicatorClick}
      />
      <NextButton onNextClick={handleNextClick} />
    </div>
  );
}

function Banner({ item }) {
  return <div>{item}</div>;
}

function PrevButton({ onPrevClick }) {
  return <button onClick={onPrevClick}>Prev</button>;
}

function NextButton({ onNextClick }) {
  return <button onClick={onNextClick}>Next</button>;
}

function Indicators({ count, current, onIndicatorClick }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(
      <button
        key={i}
        onClick={() => onIndicatorClick(i)}
        style={{ backgroundColor: current === i ? 'lightblue' : undefined }}>
        {i}
      </button>
    );
  }
  return <div>{buttons}</div>;
}

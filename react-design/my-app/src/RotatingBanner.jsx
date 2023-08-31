import './Styles.css';

export default function RollingBanner({ items }) {
  return (
    <div>
      <Banner item={items[0]} />
      <PrevButton />
      <Indicators count={items.length} />
      <NextButton />
    </div>
  );
}

function Banner({ item }) {
  return <div>{item}</div>;
}

function PrevButton() {
  return <button className="toggle">Prev</button>;
}

function NextButton() {
  return <button className="toggle">Next</button>;
}

function Indicators({ count }) {
  const buttons = [];
  for (let i = 0; i < count; i++) {
    buttons.push(<button className="indicator">{i}</button>);
  }
  return <div>{buttons}</div>;
}

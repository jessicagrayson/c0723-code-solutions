import { FaHamburger } from 'react-icons/fa';
import './Styles.css';
import { useState } from 'react';

export default function AppDrawer({ header, items, onSelect }) {
  const [isOpen, setIsOpen] = useState();

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function displayItem(item) {
    setIsOpen(!isOpen);
    onSelect(item);
  }

  return (
    <div>
      <FaHamburger onClick={toggleOpen} className="menu-icon" />
      <Backdrop isDrawn={isOpen} onClick={toggleOpen} />
      <Menu isOpen={isOpen}>
        <h3 className="menu-heading">{header}</h3>
        <ul className="menu-items">
          {items.map((item) => (
            <li
              key={item}
              className="menu-item"
              onClick={() => displayItem(item)}>
              {item}
            </li>
          ))}
        </ul>
      </Menu>
    </div>
  );
}

function Menu({ isOpen, children }) {
  const className = isOpen ? 'menu-drawer is-open' : 'menu-drawer';
  return <div className={className}>{children}</div>;
}

function Backdrop({ isDrawn, onClick }) {
  const className = isDrawn ? 'menu-shade is-drawn' : 'menu-shade';
  return <div className={className} onClick={onClick} />;
}

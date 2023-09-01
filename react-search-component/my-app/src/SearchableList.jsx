import { useState } from 'react';
import './Styles.css';

// parent component
export default function SearchableList({ list }) {
  // initializes useState
  const [searchTerms, setSearchTerms] = useState('');

  // filters out strings that do not match search terms
  const filteredList = list.filter((quote) =>
    quote.toLowerCase().includes(searchTerms.toLowerCase())
  );

  // returns page structure
  return (
    <div className="container">
      <Searchbar setSearchTerms={setSearchTerms} />
      <QuotesList list={filteredList} />
    </div>
  );
}

// child components
function QuotesList({ list }) {
  // list array becomes a ul of li items
  const quotesList = list.map((quote, index) => <li key={index}>{quote}</li>);

  if (!list.length) {
    return <p> No items match the filter.</p>;
  }
  return <ul className="list">{quotesList}</ul>;
}

// handles onChange event
function Searchbar({ setSearchTerms }) {
  const handleSearchChange = (event) => {
    setSearchTerms(event.target.value);
  };

  // returns the form and input
  return (
    <form className="searchForm">
      <label>
        <div className="searchBarContainer">
          <input
            className="searchBar"
            type="text"
            name="search"
            placeholder="search"
            onChange={handleSearchChange}></input>
        </div>
      </label>
    </form>
  );
}

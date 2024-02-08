// import React, { useState } from 'react';
// import searchIcon from '../assets/search-icon.svg';
// import { useContext } from 'react';
// import { CryptoContext } from '../context/CryptoContext';

// const Search = () => {
//   const [searchText, setSearchText] = useState('');
//   let {getSearchResult} = useContext(CryptoContext)

//   let handleInput = (e) => {
//     e.preventDefault()
//     let query = e.target.value
//     setSearchText(query);
//     getSearchResult(query)
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(query); // Output search text to console
//     // You can perform additional actions here, like sending the search text to an API, etc.
//   };

//   return (
//     <>
//     <form
//       className="w-96 relative flex items-center ml-7 font-nunito"
//       onSubmit={handleSubmit} // Call handleSubmit when the form is submitted
//     >
//       <input
//         onChange={handleInput}
//         value={searchText}
//         className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
//         type="text"
//         name="search"
//         placeholder="Search here..."
//       />
//       <button className="absolute right-1 cursor-pointer" type="submit">
//         <img src={searchIcon} alt="search" className="w-full h-auto" />
//       </button>
//     </form>
//      {
//       searchText.length > 0 ? <ul className='absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md'>
//         <li>bitcoin</li>
//         <li>ethereum</li>
//       </ul> : null
//      } 
//     </>
//   );
// };

// export default Search;


import React, { useState, useContext } from 'react';
import searchIcon from '../assets/search-icon.svg';
import { CryptoContext } from '../context/CryptoContext';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { getSearchResult } = useContext(CryptoContext);

  const handleInput = (e) => {
    const query = e.target.value;
    setSearchText(query);
    if (query.trim() !== '') {
      getSearchResult(query).then((results) => {
        setSearchResults(results.coins); // Assuming results.coins is an array of search results
      });
    } else {
      setSearchResults([]); // Clear search results if search text is empty
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchText); // Output search text to console
    // You can perform additional actions here, like sending the search text to an API, etc.
  };

  return (
    <>
      <form
        className="w-96 relative flex items-center ml-7 font-nunito"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleInput}
          value={searchText}
          className="w-full rounded bg-gray-200 placeholder:text-gray-100 pl-2 required outline-0 border border-transparent focus:border-cyan"
          type="text"
          name="search"
          placeholder="Search here..."
        />
        <button className="absolute right-1 cursor-pointer" type="submit">
          <img src={searchIcon} alt="search" className="w-full h-auto" />
        </button>
      </form>
      {searchResults.length > 0 && (
        <ul className="absolute top-11 right-0 w-full h-96 rounded overflow-x-hidden py-2 bg-gray-200 bg-opacity-60 backdrop-blur-md">
          {searchResults.map((result) => (
            <li key={result.id}>{result.name}</li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Search;

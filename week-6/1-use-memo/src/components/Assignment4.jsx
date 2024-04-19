import React, { useState, useMemo, useCallback } from 'react';

function Assignment4() {
  // Sample data array
  const data = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Date' },
    { id: 5, name: 'Elderberry' },
    { id: 6, name: 'Fig' },
    { id: 7, name: 'Grape' },
    // Add more items if you want
  ];

  // State for the search query
  const [searchQuery, setSearchQuery] = useState('');

  // Memoized filtered list
  const filteredData = useMemo(() => {
    // Filter the data based on the search query
    return data.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));
  }, [data, searchQuery]);

  // Memoized click handler
  const handleItemClick = useCallback((item) => {
    console.log('Item clicked:', item.name);
  }, []);

  // Render the component
  return (
    <div>
      <h1>List Filter with useMemo and useCallback</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for an item..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Filtered list */}
      <ul>
        {filteredData.map((item) => (
          <li key={item.id} onClick={() => handleItemClick(item)}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignment4;

import React from 'react'

const Input = ({ value, setInputText, handleSearch }) => {
  return (
    <div className="w-fit mx-auto flex gap-2 mb-4">
      <input
        className="input input-primary input-sm"
        placeholder="Search your Recipies"
        value={value}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};

export default Input
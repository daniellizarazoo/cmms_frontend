import { useState } from "react";

const SearchEngine = ({ placeHolder, onChange }) => {
    const [searchText, setSearchText] = useState('');

    const onChangeText = (e) => {
        const newValue = e.target.value;
        setSearchText(newValue);
        onChange(newValue);
    }

    return (
        <div>
            <input
                style={{
                    width: '100%',
                    height: '2.5em',
                    padding: '0.4em',
                    fontSize: '1.2em',
                    fontFamily: 'Lucida Sans',
                    marginBottom: '2%',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#2C4166',
                    color: 'white',
                    boxSizing: 'border-box',
                }}
                placeholder={placeHolder}
                onChange={onChangeText}
                value={searchText}
            />
            <style>
                {`
                    input::placeholder {
                        color: #8595B4; /* Your desired placeholder color */
                        opacity: 1; /* Ensure placeholder color is not transparent */
                    }
                `}
            </style>
        </div>
    );
};

export default SearchEngine;
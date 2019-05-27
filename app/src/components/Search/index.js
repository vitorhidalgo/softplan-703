import React from 'react';

import './search.css';

const Search = () => (
    <div id="search">
        <IconSearch />
        <form action="">
            <input type="search" name="" id="" placeholder="Buscar"/>
        </form>
    </div>
);

function IconSearch(props) {
    const fill = props.fill;
    
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill={fill} d="M.3 31.7a1.131 1.131 0 0 1-.3-.8c0-.1.2-.3.5-.7a15.361 15.361 0 0 1 1.3-1.4c.5-.6 1.2-1.2 1.9-1.9l2.2-2.2 2.2-2.2 2-2c.6-.6 1.2-1.1 1.6-1.6l.857-.856A10.951 10.951 0 0 1 10 11 11.012 11.012 0 0 1 21 0a10.925 10.925 0 0 1 7.778 3.222A10.924 10.924 0 0 1 32 11a10.924 10.924 0 0 1-3.222 7.778A10.925 10.925 0 0 1 21 22a10.951 10.951 0 0 1-7.042-2.556L1.7 31.7a.909.909 0 0 1-.7.3.779.779 0 0 1-.7-.3zM12 11a9.01 9.01 0 0 0 9 9 9.011 9.011 0 0 0 9-9 9.01 9.01 0 0 0-9-9 9.01 9.01 0 0 0-9 9z"/></svg>
    )
}

export default Search;
import React from 'react';
import PropTypes from 'prop-types';

const Search = ({term, data, update, }) => {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filter = data.filter( post => {
            return post.name.toLowerCase().includes(value);
        });

        update({
            products: filter,
            term: value
        })
    };

    return (
        <div className="searchbar from-group">
            <input
                value={term}
                type="text"
                className="form-control"
                placeholder="Search"
                onChange={dataSearch}
            />
        </div>
    )
}

Search.propTypes = {
    term: PropTypes.string,
    data: PropTypes.array.isRequired,
    update: PropTypes.func.isRequired
}

export default Search
import React from 'react';

export default ({term, data, update, }) => {
    const dataSearch = e => {
        const value = e.target.value.toLowerCase();

        const filter = data.filter( post => {
            //console.log(post.name)
            return post.name.toLowerCase().includes(value);
        });
        
        update({
            posts: filter,
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
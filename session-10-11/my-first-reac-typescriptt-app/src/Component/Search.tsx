import React from 'react';
const Search = () =>{
    const handelChange=(e:any)=>{
        return console.log(e.target.value);
    }

    return (<div>
         <label htmlFor="search">Search</label>
         <input id="search" onChange={handelChange} />
    </div>)
}
export default Search;
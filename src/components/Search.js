import React,{useState} from 'react';

const Search = () => {
    const[search,setSearch]=useState("");
    const searchHandler = event =>{
        setSearch=event.target.value
    }
    return (
        <div>
            
        </div>
    );
};

export default Search;
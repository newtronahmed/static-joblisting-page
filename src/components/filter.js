import React,{useContext} from 'react';
import {FilterContext} from '../context/filterContext';

const Filter = () => {
	const {filter,removeFilter} = useContext(FilterContext);
  return (
  	<div className="container">
    <div className="filterContainer">
    	{filter.map(fil=>{
    		return <div className='btn-group'><button className='btn' id='filterbtn' style={{backgroundColor:'hsl(180, 52%, 96%)'}} >{fil}</button><button className='btn btn-default mx-1' id='crossbtn' onClick={()=>removeFilter(fil)}>x</button></div>
    	})}
    </div>
    </div>
  )
}

export default Filter;
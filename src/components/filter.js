import React,{useContext} from 'react';
import {FilterContext} from '../context/filterContext';

const Filter = () => {
	const {filter,removeFilter} = useContext(FilterContext);
  return (
  	<div className="container">
    <div className="filterContainer">
    	{filter.map(fil=>{
    		return <div className='btn-group'><button className='btn btn-default' id='filterbtn' >{fil}</button><button className='btn btn-default' id='crossbtn' onClick={()=>removeFilter(fil)}>x</button></div>
    	})}
    </div>
    </div>
  )
}

export default Filter;
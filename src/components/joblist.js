import React,{useContext} from 'react';
import Job from './job';
import {FilterContext} from '../context/filterContext';
import FilterComponent from './filter.js';


function JobList(){
	const {newData,filter} = useContext(FilterContext);
	const job = newData.map(d=>{
		return ( <Job company={d.company}
		 role={d.role} isNew={d.new} featured={d.featured} level={d.level} 
		 location={d.location} logo={d.logo} position={d.position} contract={d.contract}
		  languages={d.languages} tools={d.tools} postedAt={d.postedAt} key={d.id} ></Job>)
	})
	
	return (
		<div>
		 	{filter.length >0 &&<FilterComponent />}
		 <div className="jobList">
		 	{job}
		 </div>	
		</div>
		)
}
export default JobList;
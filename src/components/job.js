 import React ,{useContext} from 'react';
 import styled from 'styled-components'
 import {FilterContext} from '../context/filterContext';

 const JobComponent = styled.div`
border-radius:3px;

padding:1.5rem;
box-shadow: 0  4px 4px rgba(0, 0, 0, 0.2);
margin:2rem 1rem;
background:#fff;
border-left : ${({featured})=>{
	return featured ? '5px solid hsl(180, 29%, 50%)' : '0px';
}} ;



`;

const NewBadge = styled.div`
background-color: hsl(180, 29%, 50%);
color:white;
border-radius:15px;
font-size:15px;
padding:2.5px 5px;
font-weight:bold;
margin-left: 5px;
text-align:center;
`
const FeaturedBadge = styled.div`
background-color:hsl(180, 14%, 20%);
color:white;
font-size:15px;
border-radius:15px;
padding:2.5px 5px;
font-weight:bold;
margin-left:5px;
text-align:center;

`
const Description = styled.div`
background-color:hsl(180, 52%, 96%);
margin:4px;
display:flex;
align-items:center;
color:hsl(180, 29%, 50%);
font-weight:bold;
padding:0px 5px;
cursor:pointer;
`


const Job = ({company,role,position,level,postedAt,contract,languages,tools,location,logo,isNew,featured}) => {
 const {addFilter} = useContext(FilterContext)

  return (
    <div className ="container">
        <JobComponent className='job' featured={featured} >
        <div className ="insideJob" style={{position:'relative'}}>
        	<div  className='avatar' >
               <img src={logo} alt='logo' style={{width:'100%'}}/>
            </div>
        	<div style={{marginLeft:'10px'}} >
        		<div className ='pad' style={{display:'flex'}}>
        			<div style={{color:'hsl(180, 29%, 50%)',fontWeight:'bold'}}>{company}</div>
        			<div>{isNew ?<NewBadge>NEW!</NewBadge>:''}</div>
        			<div>{featured ? <FeaturedBadge>FEATURED</FeaturedBadge> : ''}</div>
        		</div>
        		<div style={{fontWeight:'bold',margin:'3px 0px'}}>{position}</div>
        		<div style={{display:'flex',color:'rgba(0,0,0,0.4)',flexWrap:'wrap'}}>
        			<div style={{marginRight:'10px'}}>{postedAt} <span >&bull;</span></div>
        			<div style={{marginRight:'10px'}}>{contract} <span >&bull;</span></div>
        			<div style={{marginRight:'10px'}}>{location} </div>
        		</div>
        	</div>
            

        </div>
                <div className="hr"></div>
    		<div style={{display:'flex',flexWrap:'wrap',alignContent:'center',marginLeft:'10px'}} >
    		{languages.map(lang=>{ return <Description onClick={()=>addFilter(lang)}>{lang} </Description>})}
    		{tools.map(tool=>{ return <Description onClick={()=>addFilter(tool)}>{tool} </Description>})}
    		{<Description onClick={()=>addFilter(role)}>{role}</Description>}
    		{<Description onClick={()=>addFilter(level)}>{level}</Description>}
    	</div>
        </JobComponent>
    </div>
  )
}

export default Job;
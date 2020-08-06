import React  from 'react';
import './App.css'
import styled from 'styled-components';
import JobList from './components/joblist'
import Header from './components/header'
import FilterContextProvider from './context/filterContext'
const Container = styled.div`
background-color:hsl(180, 52%, 96%);
font-size: 15px;
box-sizing: border-box; 
`

function App (){
	return (

      <FilterContextProvider>
      	<Container>
	      	<Header />
	      	<JobList />
      	</Container>
      </FilterContextProvider>
    )
}

export default App;
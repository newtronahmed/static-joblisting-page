import React from 'react';
import styled from 'styled-components';
function Header (){
	const Svg = styled.div`
  border-radius: 3px;
  height:100px;
  background-size:cover;
	`
	return (
        <Svg className='image' />
    )
}

export default Header;
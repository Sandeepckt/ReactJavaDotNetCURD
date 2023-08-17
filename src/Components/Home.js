import React from 'react';
import MyCheckbox from './MyCheckbox';
import Conditional from './Conditional';
import {MyForm} from './MyForm';

function Home()
{
    return(
        <>
        <h1>Welcome to Home</h1>
        <MyCheckbox/>
        <Conditional/>
        <MyForm/>
        </>
    )
    
}

export default Home;
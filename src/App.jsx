import FoodItem from './components/FoodItem'
import { useState } from 'react';
import Search from './components/Search'
import Nav from './components/Nav'
import Container from './components/Container'
import InnerContainer from './components/InnerContainer'
import FoodDetail from './components/FoodDetail'
import './App.css'
function App() {
 const[foodData,setData]=useState([]);
 const[FoodId,setfoodid]=useState("658615");
  return (
    <div className="App">
      <Nav/>
       <Search foodData={foodData} setData={setData}/>
       <Container>
        <InnerContainer>
        <FoodItem setfoodid={setfoodid} foodData={foodData}/>
        </InnerContainer>
        <InnerContainer>
          <FoodDetail FoodId={FoodId}/>
        </InnerContainer>
       </Container>
    </div>
  )
}

export default App

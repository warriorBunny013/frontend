
import './App.css';
import Navbar from './components/Navbar.js';
import Home from './components/Home.js';
import FilterNav from './components/FilterNav';
import Card from './components/Card';
import Groups from './components/Groups';
import data from './data';
import { useState } from 'react';
function App() {
  const [item,setItem]=useState(data);
  const filterItem=(categItem)=>{
    const updatedItems=data.filter((curElem)=>{
      return curElem.category===categItem;
    });
    setItem(updatedItems);
  }
  return (
    <>
      <Navbar/>
      <Home/>
      <FilterNav filterItem={filterItem} setItem={setItem}/>
   
      <div className='d-flex align-items-end justify-content-around border-bottom'>
        <div className='row no-gutters'>
          <div className='col-12 col-sm-12 col-md-8'>
            {item.map((data,key)=>{
              return <Card key={key} image={data.image} type={data.type} category={data.category} heading={data.heading} paragraph={data.paragraph} profile={data.profile} name={data.name} date={data.date} place={data.place} views={data.views}/>
            })}
          </div>
          <div className='col-4 col-md-4' >
            <Groups/>
            </div>
        </div>
       
    </div>

      
    </>
  );
}

export default App;

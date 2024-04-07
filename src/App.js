import logo from './logo.svg';
import './App.css';
import { useState } from 'react';



function App() {
  let [clothes,setClothes] = useState(['top','bottom','others'])
  let [modal,setModal] = useState(false);
  return (
    <div className="App">
      <div className='topNav'>
        <h4>STORE</h4>
        <button onClick={()=>{
          let copy = [...clothes];
          copy = copy.sort();
          setClothes(copy);
        }}>abc</button>
        {
          [1,2,3].map(function(){
            return(
              <div>하이</div>
            )
          })
        }
      </div>
      <div className='mainSlide'>
      {
        modal === true ? <Modal clothes={clothes}/> : null
      }
      </div>
      <div className='mainBox'>
        
        {
          clothes.map(function(e,i){
            return(
              <div className='box1'>
                <h4 className='box1MainText'>{clothes[i]}</h4>
                <button onClick={()=>{setModal(!modal)}}>MODAL</button>
              </div>
            )
          })
        }
        {/* <div className='box2'>
          <h4 className='box2MainText'>{clothes[1]}</h4>
          <button onClick={()=>{setModal(!modal)}}>MODAL</button>
        </div>
        <div className='box3'>
          <h4 className='box3MainText'>{clothes[2]}</h4> 
          <button onClick={()=>{setModal(!modal)}}>MODAL</button>
        </div> */}
        {

        }
      </div>
    </div>
  );
}
function Modal(props){
  return(
    <div className='modal1'>
      {props.clothes[0]}
    </div>
  )
}
// function Modal2(){
//   return(
//     <div className='modal2'></div>
//   )
// }
// function Modal3(){  
//   return(
//     <div className='modal3'></div>
//   )
// }
export default App;

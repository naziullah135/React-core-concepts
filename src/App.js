import React,{useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    {name:'Photoshop',price:'$90.99'},
    {name:'Illustrator',price:'$96.99'},
    {name:'PremierPro',price:'$120.99'}
  ]
  const friends = [
    {name:'Arafat',phone:'01850848684'},
    {name:'Ahmed Ali',phone:'01752976802'},
    {name:'Mizan',phone:'01571134044'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter></Counter>
        <p>This is a component</p>
        <h1>Products List</h1>
        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>
        <Products product={products[2]}></Products>
        <h1>Person List</h1>
        <Person name='Zaheed Sabor' job='Google Engineer'></Person>
        <Person name='Jhankar Mahbub' job='Web Developer'></Person>
        <Person name='Kamrul Hasan' job='English Professor'></Person>
        <h1>Friends List</h1>
        {
          friends.map(fnd =><Friends friend={fnd}></Friends>)
        }
        <Users></Users>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle ={
    color: 'red',
    border: '2px solid yellow ',
    width:'400px',
    margin: '10px',
    padding:'20px'
  }
  return <div style={personStyle}>
    <h2>Name: {props.name}</h2>
    <p>Proffesion: {props.job}</p>
  </div>
}
function Products(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor: 'gray',
    height:'250px',
    width:'250px',
    margin:'20px',
    float: 'left'
  }
  const {name,price} = props.product;
  console.log(props.product)
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}
function Friends(props){
  const friendsStyle ={
    color: 'yellow',
    border: '2px solid yellow ',
    width:'400px',
    margin: '10px',
    padding:'20px'
}
const {name,phone} = props.friend;
return (
  <div style={friendsStyle}>
    <h2>{name}</h2>
    <h2>{phone}</h2>
  </div>
)
}
function Counter(){
  const [count,setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={()=>setCount(count-1)}>Decrease</button>
      <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])

  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

export default App;

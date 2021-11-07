import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import React, { useState } from 'react';

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Post a new question" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {
  const [showbox, setShowbox] = useState(false);
  const arr = props.data;

  function swap() {
    setShowbox(!showbox);
  }

  const listItems = arr.map((val, index) =>
    <li key={index}
    ><b onClick={swap}> > {val}</b>
    <p></p>
    {(showbox) && <input
      type = "text"
      placeholder="Respond to the question" 
    />}
    </li>
    
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
    
  );
}
const contacts = ["Example Question. Post your own above!"];

ReactDOM.render(
  <div
        class="container"
        style={{
          backgroundSize: "cover",
          height: "100vh",
          color: "#f5f5f5"
        }}
      >
    <ContactManager data={contacts} />,
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

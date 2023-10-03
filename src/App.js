import './App.css';
import React from 'react';

//Задание 1 
function Profile() {
  return (
    <img
      src="https://i.imgur.com/lICfvbD.jpg"
      alt="Aklilu Lemma"
    />
  );
}

export default Profile; 


//Задание 2
export default function Profile() {
  return (
    <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />
  );
}


//Задание 3
function Profile() {
  return (
    <img
      src="https://i.imgur.com/QIrZWGIs.jpg"
      alt="Alan L. Hart"
    />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile /> 
      <Profile /> 
      <Profile /> 
    </section>
  );
}


//Задание 4
function Congratulations() {
  return (
    <h1>Good job!</h1>
  );
}

export { Congratulations };


//Задание 5
const person = {
  name: 'Брендан Эйх',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name} – создатель языка программирования JS</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}


//Задание 6
const person = {
  name: 'Gregorio Y. Zara',
  avatar: 'https://i.imgur.com/7vQD0fPs.jpg',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src={person.avatar} 
        alt={person.name} 
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}


//Задание 7
import { getImageUrl } from './utils.js';

function Avatar({ person, size }) {
  const imageSize = size < 90 ? 's' : 'b'; 

  return (
    <img
      className="avatar"
      src={getImageUrl(person, imageSize)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <Avatar
      size={40}
      person={{ 
        name: 'Gregorio Y. Zara', 
        imageId: '7vQD0fP'
      }}
    />
  );
}


//Задание 8
function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? '✔' : '❌'}
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  );
}


//Задание 9
export default function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === 'black') {
      bodyStyle.backgroundColor = 'white';
    } else {
      bodyStyle.backgroundColor = 'black';
    }
  }

  return (
    <button onClick={handleClick}>
      Toggle the lights
    </button>
  );
}


//Задание 10
export default function Signup() {
  function handleSubmit(event) {
    event.preventDefault(); 
    alert('Submitting!');
  }

  return (
    <form>
      <input />
      <button type="submit">Send</button>
    </form>
  );
}


//Задание 11
export default function Toolbar() {
  return (
    <div className="Toolbar" onClick={(event) => {
      event.stopPropagation(); 
      alert('You clicked on the toolbar!');
    }}>
      <button onClick={(event) => {
        event.stopPropagation(); 
        alert('Playing!');
      }}>
        Play Movie
      </button>
      <button onClick={(event) => {
        event.stopPropagation(); 
        alert('Uploading!');
      }}>
        Upload Image
      </button>
    </div>
  );
}




//Задание 12
import React, { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  function handleReset() {
    setFirstName('');
    setLastName('');
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>Hi, {firstName} {lastName}</h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}


//Задание 13
import { useState } from 'react';

export default function FeedbackForm() {
  const [isSent, setIsSent] = useState(false);
  const [message, setMessage] = useState('');

  if (isSent) {
    return <h1>Thank you!</h1>;
  } else {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Sending: "${message}"`);
          setIsSent(true);
        }}
      >
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <button type="submit">Send</button>
      </form>
    );
  }
}


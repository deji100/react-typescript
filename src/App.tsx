import React from 'react';
import { Greet } from './components/greet';
import { Person } from './components/person';
import { Persons } from './components/persons';

function App() {
  let persons = [
    {first_name: "Jide",
     last_name: "Dosumu" 
    },
    {first_name: "Segun",
     last_name: "Oshodi"
    },
    {first_name: "Deji",
     last_name: "Adeyemi"
    }
  ]
  return (
    <>
      <Greet name="Adedeji" count={1} isLoggedIn={false}/>
      <Person first_name='Faruq' last_name='Adeyemi' />
      <Persons names={persons} />
    </>
  )    
}

export default App;

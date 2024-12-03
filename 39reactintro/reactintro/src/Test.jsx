import React from 'react';

const Test = () => {
  const users = [
    { name: "Arzu", age: 20 },
    { name: "Amin", age: 18 }
  ];

  return (
    
    <>
     <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>

    <ul>
        {users.map((user, index) => (
          <li key={index}>{user.age}</li>
        ))}
  
    </ul>
    </>
   
  );
};

export default Test;

import React, { useState, useEffect } from 'react';
// Import React, useState and useEffect  Hooks from react.

//This is our function component named SideEffects
function cleanup_useeffect() {
  const [count, setCount] = useState(0);
  //This is a declaration of our useState hook.
  //Where 'count' is a state variable. 'setCount' is a function to set the value.
  // useState is a hook with 0 as an initial value of state variable 'count'
  
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);

    //Here, our clean-up function will check the count.
    //If count > 5 is true than it will reset the count.
    return () => count > 5 ? setCount(0) : console.log("Count is less than or equal to 5");
  }, [count]);

  return (
    <div>
      <p>COUNTER: {count}</p>
    </div>
  );
}
export default cleanup_useeffect; // Exported our function component 'cleanup_useeffect'

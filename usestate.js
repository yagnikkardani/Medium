import React, { useState } from 'react';
// Import React and useState Hook from react.

//This is our function component named Counter
function Counter() {
  const [count, setCount] = useState(0);
  //This is a declaration of our useState hook.
  //Where 'count' is a state variable. 'setCount' is a function to set the value.
  // useState is a hook with an argument '0' as an initial value of state variable 'count'
  return (
    <div>
      <p>COUNTER: {count}</p>
      {/* Here, 'count' is our state variable with initial value set to 0 */}

      <button onClick={() => setCount(count + 1)}> + </button>
      {/* Here, we have used setCount function to increment the count by 1 */}

      <button onClick={() => setCount(count - 1)}> - </button>
      {/* Here, we have used setCount function to decrement the count by 1 */}
    </div>
  );
}
export default Counter; // Exported our function component 'Counter'

import React, { useState, useEffect } from 'react';
// Import React, useState and useEffect  Hooks from react.

//This is our function component named SideEffects
function SideEffects() {
  const [count, setCount] = useState(0);
  const [effectType, setEffectType] = useState("");
  //This is a declaration of our useState hook.
  //Where 'effectType' is a state variable. 'setEffectType' is a function to set the value.
  // useState is a hook with empty string "" as an initial value of state variable 'effectType'

  useEffect( () => setEffectType("Only one time on Component Mount (On First Render of this component)"), [] );
  useEffect( () => setEffectType("On Component Mount (On first render of this component) / On Count Update"), [ count ] );
  useEffect( () => setEffectType("On Component Mount (On first render of this component) / Update anything in this component") );
  useEffect( () => () => setEffectType("On Component Mount (On first render of this component) / On count update / On component Unmount"), [ count ] );
  useEffect( () => () => setEffectType("On Component Mount (On first render of this component) / Unsmount"), [] );
  
  useEffect(() => {
    let timer = setTimeout(() => {
    setCount((count) => count + 1);
  }, 5000);

  return () => clearTimeout(timer) 
  // This is a clean-up function of this useEffect
  }, []);

  return (
    <div>
      <p>COUNTER: {count}</p>
      <p>EFFECT TYPE: {effectType}</p>
      {/* Here, 'effectType' is our state variable */}
      <button onClick={() => setCount(count + 1)}> + </button>
      <button onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}
export default SideEffects; // Exported our function component 'Counter'

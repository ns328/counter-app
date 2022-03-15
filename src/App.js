import React, { useState } from "react";

function App() {
  const [count, setCount]= useState(0);
  return (
    <div className="container mx-4 my-4">
     <div className="card text-center mx-5 my-5">
       <div className="card-body">
         <h1>Counter</h1>
         <div className="mx-5">
           <h2 className="mx-5">{count}</h2>
           <button className="btn btn-success mx-5" 
           onClick={() => setCount(count + 1)}>+</button>
           <button className="btn btn-danger mx-5" 
           onClick={() => setCount(count - 1)}
           disabled={count === 0}>-</button>
         </div>
       </div>
     </div>
    </div>
  );
}

export default App;

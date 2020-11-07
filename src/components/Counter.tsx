import  React, { useEffect, useState }  from 'react';
  
export interface countProps{
    description:string;
};

export default function({description}:countProps){
  useEffect(() => {
      let currentRender=true
     setTimeout(()=>{if(currentRender) console.log(description);
        else console.log('counter false')},3000)
    
      return () => {
          currentRender =false
      }
  }, [description]);

     const [count,SetCount]=useState(2)
  return(
      <>
      <div>my count is:{count}</div>
      <button onClick={()=>SetCount(prev=>prev+1)}>+</button>
      <button onClick={()=>SetCount((prev)=>prev-1)}>-</button>
      </>
  )
}

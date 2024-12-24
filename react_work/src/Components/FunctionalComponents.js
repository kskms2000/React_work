import React from 'react';

//normal functional components with proper Syntax
export function SayHello(){
    return(
        <h1> Saying Hello</h1>
    );
}

//Arrow function usage
//export const SayHello = () => <h1>Saying Hello</h1> //directly expoeting the name to the other files and we have to use the exact name to import in other files


//export default SayHello//expoert default will directly export the function and we can import the function in other files with any name  

import React from "react";

function Greet(){
    // return(
    //     <div>
    //         <h1>Hello World</h1>
    //     </div>
    // )

    return React.createElement('div',null,React.createElement('h1',null,'Hello World1'))
}

export default Greet
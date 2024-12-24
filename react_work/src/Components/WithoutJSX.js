import React from "react";

function Greet(){
    return(
        <div>
            <h1>Hello World</h1>
        </div>
    )


    //for react if we want to return html without JSX then we have to use React.createelement method for that other wise if we just use () then it will directly converts to react and return the HTML code to render.
    //return React.createElement('div',null,React.createElement('h1',null,'Hello World1'))
}

export default Greet
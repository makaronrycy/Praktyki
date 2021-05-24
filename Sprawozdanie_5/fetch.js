import React from "react";
export default class FetchGuitar extends React.Component{
    state={
        loading:true
    };
    async componentMount(){
        const url = "http://127.0.0.1:8000/guitar";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

    }

    render(){
        return(
            <div>
                {this.state.loading ? <div>loading...</div>: <div>person..</div>}
            </div>
        )
    }




}
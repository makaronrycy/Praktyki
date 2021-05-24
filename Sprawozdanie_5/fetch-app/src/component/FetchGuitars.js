import React from "react";

export default class FetchGuitars extends React.Component{
    state={
        loading:true,
        guitars:[],
    };
    async componentDidMount(){
        const url ="http://127.0.0.1:8000/guitar/"
        await fetch(url)
            .then(res =>res.json())
            .then((result)=>{
                this.setState({
                    loading:false,
                    guitars:result
                })
            
            });   
    }
    render(){
        return(
            <div>
                {this.state.loading || !this.state.guitars ?(
                    <div>loading</div>
                ) : (
                    <div>
                    {this.state.guitars.map(guitar => <div>{guitar.name} {guitar.series}</div>)}
                    </div>
                )
            }
            </div>
        )
    }
}
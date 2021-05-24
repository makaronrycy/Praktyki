import React from "react";

export default class FetchGuitar extends React.Component {
    state = {
      loading: true,
      guitar: []
    };
  
    async componentDidMount() {
      const url = "http://localhost:8000/guitar/";
      fetch(url).then(response => response.json())
      .then(data =>{
          this.setState({
              loading: false,
              guitar: data
          })
      })
    }
  
    render() {
      if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.guitar) {
        return <div>didn't get a guitar</div>;
      }
  
      return (
        <div>
            {this.state.guitar.map(record => <p><a href={"https://www."+record.brand+".com"}>Marka: {record.brand} Seria: {record.series} Typ: {record.type} Średnia cena: {record.average_price} zł Typ ciała: {record.body_type}</a> </p>)}
        </div>
      );
    }
  }
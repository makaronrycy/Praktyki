import React from "react";

export default class FetchSoda extends React.Component {
    state = {
      loading: true,
      soda: []
    };
  
    async componentDidMount() {
      const url = "http://localhost:8000/soda/";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ soda: data, loading: false });
    }
  
    render() {
      if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.soda) {
        return <div>didn't get a soda</div>;
      }
  
      return (
        <div>
        {this.state.soda.map(record => <p><a href={"https://www."+record.brand+".com"}>Marka: {record.brand} Typ: {record.type}  Średnia cena: {record.average_price} zł</a> </p>)}
    </div>
      );
    }
}
import React from "react";

export default class FetchCars extends React.Component {
    state = {
      loading: true,
      cars: []
    };
  
    async componentDidMount() {
      const url = "http://localhost:8000/car/";
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ cars: data, loading: false });
    }
  
    render() {
      if (this.state.loading) {
        return <div>loading...</div>;
      }
  
      if (!this.state.cars) {
        return <div>didn't get a car</div>;
      }
  
      return (
        <div>
            {this.state.cars.map(record => <p><a href={"https://www."+record.brand+".com"}>Marka: {record.brand} Seria: {record.series} Typ: {record.type} Średnia cena: {record.average_price} zł Maksymalna Prędkość: {record.max_speed}km/h</a> </p>)}
        </div>
      );
    }
  }
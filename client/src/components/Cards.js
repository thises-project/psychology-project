import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
export default class Cards extends Component {
  render() {
    return (
      <div className="container">
        <CardDeck className="text-center d-flex justify-content-between">
          <Card>
            <Card.Img
              variant="top"
              src={process.env.PUBLIC_URL + "./Images/pic1.png"}
              rel="noopener noreferrer"
            />
            <Card.Body>
              <Card.Text>SOME TEXT</Card.Text>
              <button
                className="btn btn-info btn-sm"
                // onClick={() => {
                //   if (localStorage.length >= 1) {
                //     window.location = "/AddItems";
                //   } else if (localStorage.length < 1) {
                //     window.location = "/login";
                //   }
                // }}
              >
                Ask Now
              </button>
            </Card.Body>
          </Card>
        </CardDeck>
      </div>
    );
  }
}

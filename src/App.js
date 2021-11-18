import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./App.css";
import {
  Hasil,
  ListCategories,
  NavbarComponent,
  Menus,
} from "./components/Index";
import { API_URL } from "./utils/Constants";
import axios from "axios";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      categoriPilihan: "Makanan",
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.categoriPilihan)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  changeCategory = (value) => {
    this.setState({
      categoriPilihan: value,
      menus: []
    });

    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const { menus, categoriPilihan } = this.state;
    return (
      <div className="App">
        <NavbarComponent />
        <div className="mt-2">
          <Container fluid>
            <Row>
              <ListCategories
                changeCategory={this.changeCategory}
                categoriPilihan={categoriPilihan}
              />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />

                <Row>
                  {menus &&
                    menus.map((menu) => <Menus key={menu.id} menu={menu} />)}
                </Row>
              </Col>
              <Hasil />
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

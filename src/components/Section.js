import React from "react";
import styled from "styled-components";
import Item from "./Item";
import Form from "./Form";
import Jumbotron from "./Jumbotron";
import Alert from "./Alert";

const SectionStyle = styled.div`
  margin: 20px auto;
  max-width: 800px;
`;

class Section extends React.Component {
  state = {
    name: "",
    quantity: "",
    section: "",
    notes: "",
    items: [],
    error: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    if (
      !this.state.name ||
      !this.state.quantity ||
      this.state.quantity < 1 ||
      !this.state.section
    ) {
      this.setState({ error: true });
      return;
    }

    var itemsUpdated = this.state.items;

    itemsUpdated.push({
      name: this.state.name,
      quantity: this.state.quantity,
      section: this.state.section,
      notes: this.state.notes
    });

    this.setState({
      name: "",
      quantity: "",
      section: "",
      notes: "",
      items: itemsUpdated,
      error: false
    });
  };

  render() {
    return (
      <>
        <Jumbotron
          title="get ya grocery on"
          subtitle={<img src="apple.png" alt="apple" style={{height: 70}}/>}
        />
        <SectionStyle>
          <span>
            {this.state.error ? (
              <Alert type="danger">
                something's wrong with your form... be sure to include name,
                quantity and section!
              </Alert>
            ) : (
              ""
            )}
          </span>
          <div className="row">
            <div className="col-5">
              <h3 style={{ textAlign: "center" }}>add to your list</h3>
              <Form
                name={this.state.name}
                quantity={this.state.quantity}
                section={this.state.section}
                notes={this.state.notes}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>
            <div className="col-7">
              {this.state.items.length ? (
                <>
                  <h3 style={{ textAlign: "center" }}>get shoppin!</h3>
                  <ul className="list-group list-group-flush">
                    {this.state.items.map(item => (
                      <Item
                        key={item.name}
                        name={item.name}
                        section={item.section}
                        quantity={item.quantity}
                        notes={item.notes}
                      />
                    ))}
                  </ul>
                </>
              ) : (
                <h3 style={{ textAlign: "center" }}>
                  looks like you're all stocked up!
                </h3>
              )}
            </div>
          </div>
        </SectionStyle>
      </>
    );
  }
}

export default Section;

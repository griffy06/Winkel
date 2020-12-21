import axios from 'axios';

import React, { Component } from 'react'
import {
    Jumbotron,
    Button,
    Container,
    Row,
} from 'reactstrap';
import { connect } from 'react-redux'

const sectionStyle = {
    width: "100%",
    height: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    marginTop: "2rem",
};

const JumbotronStyle = {
    background: "F5F5F5",
    marginTop: "3.5rem",
    width: "80%",
    borderRadius: "20px",
    padding: "15px",
    textAlign: "center"
};

const imageStyle = {
    height: "8rem"
}

const buttonStyle = {
    border: "None",
    borderRadius: "20px",
    background: "white",
    color: "black",
    float: 'right'
}
const buttonStyle1 = {
    border: "None",
    borderRadius: "20px",
    background: "hotpink",
    color: "white",
    float: 'left'
}

class DisplayItem extends Component {

    render() {
        return (
            this.props.id < 4 ?
                <div>
                    <Jumbotron style={JumbotronStyle}>
                        <Button href="#" style={buttonStyle1}>&#9825;</Button>
                        <Button href={"/toydescription/" + this.props.item._id} style={buttonStyle}>View</Button>
                        <img src={require(`../${this.props.item.image}`).default} style={imageStyle}></img>
                        <br /><br /><h5>{this.props.item.name}</h5>
                        <h5 style={{ color: 'hotpink' }}>
                            &#8377;{this.props.item.price}
                        </h5><br />
                    </Jumbotron>
                </div> : null
        )

    }
}

export class StuffedAnimalsSection extends Component {
    state = {
        Items: [],
    }

    componentDidMount() {
        axios.get('api/items')
            .then(res => {
                this.setState({ Items: res.data })
            });
    }
    render() {
        var idx = 0
        return (
            <Container style={sectionStyle}>
                <h3>Stuffed Animals</h3><hr />
                <Row style={{ marginLeft: '3.5rem' }}>
                    {
                        this.state.Items.map((item, i) => {
                            return (<div>
                                {   (item.category === "stuffed animal") ?
                                    <DisplayItem item={item} key={i} id={idx++} /> : null
                                }
                            </div>)
                        })
                    }
                </Row>

            </Container>
        )
    }
}

export default connect()(StuffedAnimalsSection);
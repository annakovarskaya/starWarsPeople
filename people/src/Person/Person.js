import React, { Component } from 'react';
import './Person.css';
import PropTypes from 'prop-types';

class Person extends Component {
    render() {
        return (
            <div className="card"  style={{width: "20rem"}}>
                <div className="card-block">
                    <img className="card-img-top" src="http://www.meioemensagem.com.br/wp-content/uploads/2017/05/star-wars-275x170.jpg" alt="Top avatar"/>
                    <h4 className="card-title">{this.props.name}</h4>
                    <p className="card-text"><b>Height:</b> {this.props.height}</p>
                    <p className="card-text"><b>Hair color:</b> {this.props.haircolor}</p>
                    <p className="card-text"><b>Eye color:</b> {this.props.eyecolor}</p>
                    <p className="card-text"><b>Skin color:</b> {this.props.skincolor}</p>
                    <p className="card-text"><b>Birth year:</b> {this.props.birthyear}</p>
                    <p className="card-text"><b>Gender:</b> {this.props.gender}</p>
                </div>
            </div>
        );
    }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number,
  haircolor: PropTypes.string,
  eyecolor: PropTypes.string,
  skincolor: PropTypes.string,
  birthyear: PropTypes.string,
  gender: PropTypes.string
}

export default Person;

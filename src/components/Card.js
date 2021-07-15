import React from 'react'
import propTypes from 'prop-types'
import 'animate.css/animate.min.css'

import './Cards.css'

export default function Card(props) {
    return (
        <div className="card text-center bg-dark animate__animated animate__bounce">
            <div style={{ "overflow": "hidden" }}>
                <img src={props.image} className="card-img-top" alt=""></img>
            </div>
            <div className="card-body text-light">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">
                    {props.text || "No description"}
                </p>
                <a href={props.url} className="btn btn-outline-secondary rounded-0">
                    Go to this website
                </a>
            </div>
        </div>
    )
}

Card.propTypes = {
    title: propTypes.string.isRequired,
    url: propTypes.string,
    image: propTypes.string,
    text: propTypes.string
}
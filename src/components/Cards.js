import React from 'react'
import Card from './Card'
import image1 from '../assets/vue.jpg'

const cards = [
    {
        id: 1, title: 'Vue', image: image1, url:'www.vue.com', text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 2, title: 'Angular', image: image1, url: 'www.angular.com',  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        id: 3, title: 'React', image: image1, url: 'www.react.com',  text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
]

export default function Cards() {
    return (
        <div className="container d-flex justify-content-center h-100 align-items-center">
            <div className="row">
                {
                    cards.map((card) => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} image={card.image} text={card.text} url={card.url} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

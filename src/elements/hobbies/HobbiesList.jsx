import React, { Component } from "react";
import HobbiesDetails from './HobbiesDetails'

const HobbiesListContent = [
    {
        id: 'jeuxvideos',
        image: 'image-4',
        imageDetail: '',
        category: '',
        title: 'Jeux vidéos',
    },
    {
        id: 'guitare',
        image: 'image-5',
        imageDetail: '',
        category: '',
        title: 'Musique',

    },
    {
        id: 'Concerts / Festivals',
        image: 'image-6',
        imageDetail: '',
        category: '',
        title: 'Concerts / Festivals',
    },
    {
        id: 'Voyages',
        image: 'image-7',
        imageDetail: '',
        category: '',
        title: 'Voyages',
    },
    {
        id: 'Sports',
        image: 'image-8',
        imageDetail: '',
        category: '',
        title: 'Sports',
    },    
    {
        id: 'Cuisine',
        image: 'image-9',
        imageDetail: '',
        category: '',
        title: 'Cuisine',
    }
]

export default function HobbiesList(props) {
    const {column , styevariation } = props
    const list = HobbiesListContent.slice(0 , props.item)
    const [open, setOpen] = React.useState()
    const handleClickOpen = (id) => {
        setOpen(id)
      };
      const handleClose = () => {
        setOpen()
      };
    return(
        <React.Fragment> 
            {list.map((value , index) => (
                <div className={`${column}`} key={index}>
                    <div className={`portfolio ${styevariation}`}>
                        <div className="thumbnail-inner">
                            <div className={`thumbnail ${value.image}`}></div>
                            <div className={`bg-blr-image ${value.image}`}></div>
                        </div>
                        <div className="content">
                            <div className="inner">
                                <p>{value.category}</p>
                                <h4><a onClick={() => handleClickOpen(value.id)}>{value.title}</a></h4>
                                <div className="portfolio-button">
                                    <a 
                                        className="rn-btn"
                                        onClick={() => handleClickOpen(value.id)}
                                    >En savoir plus</a>
                                    {
                                        open === value.id && 
                                        <HobbiesDetails
                                            handleClose={handleClose}
                                            id={value.id}
                                            image={value.image}
                                            title={value.title}
                                            content={value.content}
                                            link={value.link}
                                        />

                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
           
        </React.Fragment>
    )
}

import React, { Component } from "react";
import PortfolioDetails from './PortfolioDetails'


const PortfolioListContent = [
    {
        id: 'alcoometre',
        image: 'image-2',
        imageDetail: '',
        category: '',
        title: 'Alcoomètre',
        link:'https://alcoometre.fr/results'
    },
    {
        id: 'biomedecine',
        image: 'image-1',
        imageDetail: '',
        category: '',
        title: 'Agence de la biomédecine',
        link:'https://www.dondorganes.fr/'

    },
    {
        id: 'vtc',
        image: 'image-3',
        imageDetail: '',
        category: '',
        title: 'Campus VTC',
        link:'https://campus-vtc.com/'
    }
]

export default function  PortfolioList(props) {
    const {column , styevariation } = props
    const list = PortfolioListContent.slice(0 , props.item)
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
                                        <PortfolioDetails
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

import React, { Component } from "react";
import PortfolioDetails from './PortfolioDetails'


const PortfolioListContent = [
    {
        id: 'alcoometre',
        image: 'image-2',
        imageDetail: '',
        category: '',
        title: 'Alcoomètre',
        description: 'L\'objectif de ce projet était de remanier ce site, lors de mon alternance chez DDB.',
        description2: 'En partenariat avec Alcool Info Service, la mission était de mettre en place la possibilité pour les utilisateurs d\'estimer si leur consommation d\'alcool était trop élevée, et d\'informer les utilisateurs de dangers et conséquence d\'une consommation trop élevée.',
        description3: 'Mon rôle sur ce projet était de diriger la refonte de ce site avec la production de visuels et maquettes et de recetter les changements pour s\'assurer que les tenants et aboutissants du projet respectaient bien les contraintes techniques et fonctionnelles du projet. ',
        link:'https://alcoometre.fr/results'
    },
    {
        id: 'biomedecine',
        image: 'image-1',
        imageDetail: '',
        category: '',
        title: 'Agence de la biomédecine',
        description: 'J\'ai eu l\'opportunité de remplir le rôle de Webmaster pour cette agence, lors de mon alternance chez DDB. ',
        description2: 'Il s\'agissait d\'une mission particulière par rapport à mes expériences passées: c\'était la première fois qu\'un de mes projets touchait au domaine de la médecine. Il s\'agissait aussi d\'un sujet sensible: il y avait plus de contraintes tant sur le plan fonctionnel qu\'éditorial.',
        description3: 'En tant que webmaster, mon rôle fut d\'assurer les tests et recettes applicatifs, de rédiger du contenu ainsi que des Newsletters, de gérer la FAQ et faciliter la communication entre les équipes techniques et fonctionnelles.' ,
        link:'https://www.dondorganes.fr/'

    },
    {
        id: 'vtc',
        image: 'image-3',
        imageDetail: '',
        category: '',
        title: 'Campus VTC',
        description: 'Il s\'agissait d\'un projet auquel j\'ai participé durant mon alternance chez DDB',
        description2: 'Le site Campus VTC est le résultat d\'une reflexion concernant l\'accès à l\'information sur les différentes formations des nouveaux conducteurs Uber.',
        description3: 'Mon rôle à été de proposer une solution au problème d\'Uber, de préparer des visuels et, après validation, les transmettre aux équipes techniques.',
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
                                            description={value.description}
                                            description2={value.description2}
                                            description3={value.description3}
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

import React, { Component } from "react"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
export default function Career(props) {

    return(
        <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          date="Septembre 2014"
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Étudiant, 1ère année</h3>
          <h4 className="vertical-timeline-element-subtitle">Paris, La Défense</h4>
          <p>
            Étudiant première année à l'IIM: Institut de l'Internet et du Multimédia, Pôle Lénonard Devinci
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2016"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">The Talk</h3>
          <h4 className="vertical-timeline-element-subtitle">Projet Étudiant</h4>
          <p>
            Rédaction et interviews sur le sujet de la communication digitale <br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(233, 30, 99)' }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Société générale</h3>
          <h4 className="vertical-timeline-element-subtitle">Projet Étudiant</h4>
          <p>
            - Réalisation d'un site interactif en interne pour l'entreprise <br />
            - Responsable de la création éditoriale <br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Septembre 2017"
          contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}

          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">Bachelor Chef de projet Multimédia </h3>
          <h4 className="vertical-timeline-element-subtitle">Option Communication Digitale</h4>
          <p>
            Bac +3: Diplôme reconnu par l'état
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Netino by Webhelp</h3>
          <h4 className="vertical-timeline-element-subtitle">Stage: Assistant chargé de clientèle</h4>
          <p>
              Stage de 6 mois: Leader modération en France. <br />
              - Modération: Facebook / Instagram <br />
              - Community management <br />
              - Réponse de nuveau 1 et 2 <br />
              - Bilans mensuels <br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017-2018"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}


        >
          <h3 className="vertical-timeline-element-title">Lesieur / Puget</h3>
          <h4 className="vertical-timeline-element-subtitle">Alternance: Chef de Projet Digital Junior</h4>
          <p>
            - Mise en place d'une plateforme d'e-learning <br />
            - RFI / RFP Social Media et e-learning <br />
            - Webmastering <br />
            - Relation avec Agences <br />
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<WorkIcon />}
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}

        >
          <h3 className="vertical-timeline-element-title">DDB</h3>
          <h4 className="vertical-timeline-element-subtitle">Alternance: Assistant Chef de projet Digital</h4>
          <p>
            - Refonte du site Alcoometre.fr <br />
            - Production des visuels et des maquettes <br />
            - Recettes produit <br />
            - Production de campagnes Display (Uber et intermarché)<br />
            - Webmastering sur dondorganes.fr<br />
            - Production de newsletter pour Aviva <br />
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Septembre 2019"
          contentStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(16, 204, 82)' }}

          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title"> Master </h3>
          <h4 className="vertical-timeline-element-subtitle">Communication Digitale, Stratégie Social Media</h4>
          <p>
            Bac +5: Diplôme reconnu par l'état
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    )
}

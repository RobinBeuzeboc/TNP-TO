import React ,{ Component }from "react";
import { FiCast , FiLayers , FiUsers , FiMonitor } from "react-icons/fi";

const ServiceList = [
    { 
        icon: <FiMonitor />,
        title: 'Chef de projet Junior',
        description: 'Mon domaine d\'expertise favori: j\'ai déjà eu l\'opportunité de me faire les dents sur le sujet, j\'aimerais aller plus loin.'
    },
    {
        icon: <FiLayers />,
        title: 'Community management',
        description: 'J\'ai eu l\occasion de travailler dans ce domaine et d\'étendre mes compétences à tous les réseaux sociaux.'
    },
    {
        icon: <FiCast />,
        title: 'Analyses de données',
        description: 'Je sais travailler avec Google Analytics et Google Data Studio. Je sais interpréter et utiliser les données.'
    },
    {
        icon: <FiUsers />,
        title: 'Communication',
        description: 'J\'ai pour habitude de travailler en anglais. J\'ai un niveau débutant en espagnol, vestige de mes études.'
    },
    {
        icon: <FiUsers />,
        title: 'Com\' inter agences',
        description: 'J\'ai déjà eu à communiquer professionnellement avec des acteurs extérieurs pour mener mes projets à bien.'
    },
    { 
        icon: <FiMonitor />,
        title: 'Webmastering',
        description: 'J\'ai pu faire mes armes sur le sujet par le biais de projets étudiants. J\'en garde une expérience positive'
    }
]


class Services extends Component{
    render(){
        const {column } = this.props;
        const ServiceContent = ServiceList.slice(0 , this.props.item);
        
        return(
            <React.Fragment>
                <div className="row">
                    {ServiceContent.map( (val , i) => (
                        <div className={`${column}`} key={i}>
                                <div className="service service__style--2">
                                    <div className="icon">
                                        {val.icon}
                                    </div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </React.Fragment>
        )
    }
}
export default Services;

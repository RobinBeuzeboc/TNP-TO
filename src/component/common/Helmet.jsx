import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>Thibaut Neu - Portfolio</title>
                    <meta name="description" content="Thibaut Neu - Portfolio" />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;

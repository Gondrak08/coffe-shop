import React from 'react'
import BackgroundImg from 'gatsby-background-image'

export default function hero({img, styleClass, title, children}) {
    return (
        <BackgroundImg className={styleClass} fluid={img}>
            <h1 className="title
                text-white 
                text-uppercase 
                text-center display-4 
                font-weight-bold">
             {title}
             </h1>
            {children}
        </BackgroundImg>
    );
}
hero.defaultProps={
    title:"default title",
    styleClass:"default-background",
}
import React, { Component, } from 'react'
import Title from '../title'
import Img from "gatsby-image"


export default class Menu extends Component {
   constructor(props){
       super(props);
       this.state={
           items:props.items.edges,
           coffeeItems:props.items.edges,
       }
   }

    render() {
        if(this.state.items.length > 0) {
            
            return (
                <div>
                    <section className="menu py-5">
                        <div className="container">
                            <Title title="melhores do menu"/>
                            {/* categories */}
                            {/* items */}
                            
                            <div className="row">
                                {this.state.coffeeItems.map(({node}) =>{
                                    return(
                                        <div key={node.id} className="col-11 col-md-6 my-3 d-flex mx-auto">
                                            <div>
                                                <Img fixed={node.image.fixed} />
                                            </div>

                                        </div>
                                    )
                                }
                                )}

                            </div>
                        </div>
                    </section>


                </div>
            )
        }
        else {
            return(
                <section className="menu py-5">
                    <div className="container">
                        <Title title="Nosso Menú"/>
                        <div className="row">
                            <div className="col-10 col-sm-6 mx-auto text-center capitalize">
                                <h1>não há nada para mostrar</h1>
                            </div>
                        </div>
                    </div>
                </section>
            )
        }
    }
}

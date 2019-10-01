import React from 'react'
import {Link} from 'gatsby'
import Title from '../title';

export default function info() {
    return (
        <section className="py-5">
            <div className="container">
                <Title title="nossa história" />
                 <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                           Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed hic ipsa minus voluptates nostrum ut repellat ducimus autem consequatur tempore laudantium voluptate, cupiditate earum animi beatae veritatis repudiandae praesentium commodi rerum facilis dolorem. Voluptatum iure reiciendis itaque blanditiis sit, quasi harum excepturi quidem reprehenderit inventore perspiciatis laboriosam officia molestias veniam!
                        </p>
                        <Link to="/about/">
                            <button className="btn text-uppercase btn-yellow">
                                about page
                            </button>
                        </Link>
                    </div>
                  </div>
            </div>
        </section>
    )
}

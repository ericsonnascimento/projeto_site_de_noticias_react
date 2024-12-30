import React from "react"
import "./styles.css"

export class Article extends React.Component {
    render() {
        return (
            <article id="article">
                <img src={this.props.thumbnail} alt={ this.props.tittle } />

                <div className="article-infos"> 
                    <h2>{ this.props.tittle }</h2>
                    <h3>{ this.props.provide }</h3>

                    <p>{ this.props.description }</p>
                </div>
            </article>
        )
    }
}
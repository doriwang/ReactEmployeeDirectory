import React from "react"

const styles = {
    jumbotron: {
        backgroundColor: "#000080",
        color: "white",
        textAlign: "center",
        height: 180,
        borderBottomColor: "#FF4500",
        borderBottomWidth: 5,
        borderStyle: "solid"
    },
    h1: {
        marginTop: -30
    }
}

function Jumbotron(props) {
    return (
        <div className="jumbotron col-lg-12 col-sm-12" style={ styles.jumbotron }>
            <div className="container" >
                <h1 className="display-4 h1" style={ styles.h1 }>{ props.header }</h1>
                <p className="lead">{ props.subheader }</p>
            </div>
        </div>
    )
}

export default Jumbotron
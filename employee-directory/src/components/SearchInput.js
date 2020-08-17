import React from "react"

function Search(props) {

    const styles = {
        input: {
            textAlign: "center"
        }
    }
    return (
        <div className="input" style={ styles.input }>
            <input
                type="text"
                placeholder="Search"
                value={ props.search }
                onChange={ props.handleInputChange }
            >
            </input>
        </div>
    )
}

export default Search
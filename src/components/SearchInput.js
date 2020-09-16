import React from "react"

function Search(props) {

    const styles = {
        input: {
            textAlign: "center"
        }
    }
    return (
        <div className="col-lg-12 col-sm-12">
            <div className="input" style={ styles.input }>
                <input
                    type="text"
                    placeholder="Search"
                    value={ props.search }
                    onChange={ props.handleInputChange }
                >
                </input>
            </div>
        </div>
    )
}

export default Search
import React from "react"

function Search(props) {

    const initResults = props.results
    let filteredResults = initResults.filter(initResult => initResult.name.first.includes(props.search))

    console.log(filteredResults)

    return (
        <div>
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
import React from "react"
import TableHead from "./ResultsTableHead"
import TableBody from "./ResultsTableBody"

const styles = {
    table: {
        marginTop: 30
    }
}

function ResultsTable(props) {

    const initResults = props.results
    let filteredResults = initResults.filter(initResult => initResult.name.first.toLowerCase().includes(props.search.toLowerCase()))

    console.log(filteredResults)

    if (props.handleInputChange) {
        return (
            <table className="table table-striped" style={ styles.table }>
                <TableHead />
                <TableBody
                    filtered={ filteredResults }
                />
            </table>
        )
    }
}

export default ResultsTable
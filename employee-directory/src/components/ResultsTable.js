import React from "react"
import TableHead from "./ResultsTableHead"
import TableBody from "./InitResultsTableBody"
import FilteredTableBody from "./FilteredResultsTableBody"

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
                <FilteredTableBody
                    data={ props.results }
                    filtered={ filteredResults }
                />
            </table>
        )
    } else {
        return (
            <table className="table table-striped">
                <TableHead />
                <TableBody
                    data={ props.results }
                />
            </table>
        )
    }
}

export default ResultsTable
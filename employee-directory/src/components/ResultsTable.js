import React from "react"
import TableHead from "./ResultsTableHead"
import TableBody from "./InitResultsTableBody"
// import FilteredTableBody from "./FilteredResultsTableBody"

function ResultsTable(props) {

    // if (props.handleInputChange) {
    //     return (
    //         <table className="table table-striped">
    //             <TableHead />
    //             <FilteredTableBody filteredResults={ props.handleInputResults } />
    //         </table>
    //     )
    // } else {
    return (
        <table className="table table-striped">
            <TableHead />
            <TableBody data={ props.results } />
        </table>
    )
}
// }

export default ResultsTable
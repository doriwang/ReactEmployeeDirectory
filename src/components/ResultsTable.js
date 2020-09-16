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
            <div className="col-sm-12">
                <table className="table table-striped table-responsive-sm" style={ styles.table }>
                    <TableHead />
                    <TableBody
                        filtered={ filteredResults }
                    />
                </table>
            </div>
        )
    }
}

export default ResultsTable
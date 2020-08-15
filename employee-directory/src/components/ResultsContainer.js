import React, { Component } from "react";
import API from "../utils/API"
import ResultsTable from "./ResultsTable"
import Search from "./SearchInput"

class ResultsContainer extends Component {
    state = {
        results: [],
        search: ""
    }

    componentDidMount() {
        this.getEmployees()
    }

    getEmployees = () => {
        API.getEmployee()
            .then(res => { this.setState({ results: res.data.results }) }).catch(error => console.log(error))
    }

    componentDidUpdate() {
        console.log(this.state.results)
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value })
    }

    render() {
        return (
            <div className="container">
                <Search
                    search={ this.state.search }
                    results={ this.state.results }
                    handleInputChange={ this.handleInputChange } />
                <ResultsTable
                    results={ this.state.results }
                // handleInputResults={ this.handleInputResults }
                // handleInputChange={ this.handleInputChange }
                />
            </div>
        )
    }
}

export default ResultsContainer
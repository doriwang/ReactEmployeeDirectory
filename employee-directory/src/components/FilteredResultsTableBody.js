import React from "react"

function FilteredTableBody(props) {
    return (
        <tbody>
            { props.filtered.map(employee => (
                <tr key={ employee.cell }>
                    <td>
                        <img src={ employee.picture.thumbnail } alt="profile-img"></img>
                    </td>
                    <td>{ employee.name.first } { employee.name.last }</td>
                    <td>{ employee.phone }</td>
                    <td>{ employee.email }</td>
                    <td>{ new Intl.DateTimeFormat('en-US').format(new Date(employee.dob.date.split("T")[0])) }</td>
                </tr>
            )) }
        </tbody>
    )
}

export default FilteredTableBody
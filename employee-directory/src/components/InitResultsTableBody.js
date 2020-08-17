import React from "react"

function TableBody(props) {
    return (
        <tbody>
            { props.data.map(employee => (
                <tr key={ employee.cell }>
                    <td>
                        <img src={ employee.picture.thumbnail } alt="profile-img"></img>
                    </td>
                    <td>{ employee.name.first } { employee.name.last }</td>
                    <td>{ employee.phone }</td>
                    <td>{ employee.email }</td>
                    <td>{ employee.dob.date.split("T")[0] }</td>
                </tr>
            )) }
        </tbody>
    )
}

export default TableBody


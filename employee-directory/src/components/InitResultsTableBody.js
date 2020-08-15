import React from "react"
// import Moment from "moment"

function TableBody(props) {

    // const formatDate = employee => {
    //     Moment(employee).format("MM DD YYYY")
    // }

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
                    {/* <td>{ formatDate(employee.dob.date) }</td> */ }
                    {/* <td>  { new Intl.DateTimeFormat("en-GB", {
                        year: "numeric",
                        month: "long",
                        day: "2-digit"
                    }).format(employee.dob.date) }</td> */}
                    {/* <td>{ employee.dob.date.toLocaleDateString() }</td> */ }
                    <td>{ employee.dob.date }</td>
                </tr>
            )) }
        </tbody>
    )
}

export default TableBody


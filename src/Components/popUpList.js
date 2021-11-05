import React, { Component } from 'react'

export default class table extends Component {
    render() {
        return (
            <div className="tableBody">
                <ul className="myTable">


    {this.props.list.map((list, index) => {
        return (

    <tr key={index}>
        <li>Item Name: {list.name}</li>
    </tr>

        )
    })}



            </ul>
            </div>
        )
    }
}

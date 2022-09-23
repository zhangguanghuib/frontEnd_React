import React, { Component } from "react";

export default class App extends Component {
    state = {
        list: [
            {
                id: 1,
                text: "1111"
            },
            {
                id: 2,
                text: "2222"
            },
            {
                id: 3,
                text: "3333"
            }
        ]
    }

    render() {
        return (
            <div>
                <ul>
                    {
                        this.state.list.map(
                            (item, index) => {
                                 return <li key={index}>{item.text}--{index}</li>
                            }
                        )
                    }
                </ul>
            </div>
        )
    }
}
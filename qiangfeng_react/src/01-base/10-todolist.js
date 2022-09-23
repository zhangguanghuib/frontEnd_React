
import React, { Component } from "react";

export default class App extends Component {

    a = 100

    myref = React.createRef();

    state = {
        list: [{
            id: 1,
            mytext: "aaa"
        },
        {
            id: 2,
            mytext: "bbb"
        },
        {
            id: 3,
            mytext: "ccc"
        }]
    };

    render() {
        return (<div>
            {
                <div>
                    <input ref={this.myref}></input>

                    <button onClick={this.handleClick2}>add2</button>

                    <ul>
                        {
                            this.state.list.map(item => {
                                return <li key={item.id}>{item.mytext}</li>
                            })
                        }
                    </ul>
                </div>
            }
        </div>)
    }

    handleClick2 = ()=>{
        console.log("click2", this.myref.current.value);
        let newList = [...this.state.list];

        newList.push({
            id: Math.random()*10000000,
            mytext: this.myref.current.value
        });

        this.setState({
            list:newList
        });
    }
}
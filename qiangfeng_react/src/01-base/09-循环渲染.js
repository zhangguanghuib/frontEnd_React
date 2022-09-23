import React, {Component} from "react"

export default class App extends Component{

    state ={
        list:["1111", "2222", "3333"]
    }

    render(){
        return(
            <div>
                <ul>
                    {
                        this.state.list.map(item=><li key={item}>{item}</li>)
                    }
                </ul>
            </div>
        )
    }
}

var list = ["aa", "bb", "cc"];

var newList = list.map(item=>`<li>${item}</li>`)
console.log(newList.join(" "));
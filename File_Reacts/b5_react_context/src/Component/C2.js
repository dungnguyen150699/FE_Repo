import React, { Component } from 'react'
import * as Context from '../App'

export default class C2 extends Component {
    render() {
        const context = Context.context;
        return (
            <div>
                <context.Consumer>
                   {(value) => <h3>{value}</h3>}
               </context.Consumer>
            </div>
        )
    }
}

import React, { Component } from 'react';


class Lab1 extends Component {
    state = {
        first : false,
        second : true
    }
    render(){
        const {first,second} = this.state;
        return(
            <main className='container'>
                <section>
                    <button disabled={first}>First</button>
                    <button disabled={second}>Second</button>
                </section>
            </main>
        )
    }

}
export default Lab1;

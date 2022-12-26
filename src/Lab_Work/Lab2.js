import React, { Component } from 'react';

class Lab2 extends Component {
    state = {
        heading : 'react is busy...',
        content : 'Loading...'
        }
        constructor(){
            super();
            setTimeout(() => {
                this.setState({
    heading : 'react is loaded',
    content : 'Finished'
                })
            },3000);
        }
            render(){
                const{heading,content} = this.state;
                return(
                    <div className='container'>
                
                        <h1>{heading}
                        </h1>
                        <h5>{content}</h5>
                    </div>
                )
            }
        }


export default Lab2;

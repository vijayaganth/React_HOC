import React, { Component } from 'react'

const withCounter = (WrappedComponent, increamentNumber) => {   
    
    class withCounter extends Component {

        constructor(props) {
            super(props)
    
            this.state = {
                count: 0
            }
        }
    
        increamentCount = () => {
            this.setState( prevState => {
                return { count: prevState.count + increamentNumber}
            })
        }

        render() {
            const { count } = this.state;

            return (
                <div>
                    <WrappedComponent 
                        count={count} 
                        increamentCount={this.increamentCount}
                        {...this.props}
                    />
                </div>
            )
        }
    }
    return withCounter
}

export default withCounter;
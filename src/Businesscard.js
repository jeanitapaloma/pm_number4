import React,{Component} from 'react';

class Businesscard extends Component{
    render()
    {
        return (
            <div>
                <h1>Welcome to Businesscard! </h1>
                <h1>Name: {this.props.FName} {this.props.LName}</h1>
                <h1>Address: {this.props.Address}</h1>
                <h1>Email: {this.props.Email}</h1>
                <h1>Phone Number: {this.props.PhoneNum}</h1>
                
            </div>
        )
    }
}
export default Businesscard;
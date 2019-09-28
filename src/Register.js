import React,{Component} from 'react';
import Businesscard from './Businesscard';

class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            FName:'',
            LName:'',
            Address:'',
            Email:'',
            PhoneNum:'',
            register: false,

            
        }       
    }
    registerHandler=(e)=>{
        const{FName,LName,PhoneNum,Address,Email}=this.state;
        if(FName!=='' && LName!=="" && Address!==''&&Email!==''&&PhoneNum!==''){
            this.setState( {register:true});
        
        }
        else {
            alert('Fill up the field completely! ');
        }
    }

    render(){
        if (!this.state.register){
          
        return(
            <div className='form-group'>
                First Name: <input type="text" placeholder="Enter Firstname.." onChange={e=>this.setState({FName:e.target.value})}></input>
                Last Name: <input type="text" placeholder="Enter lastname.." onChange={e=>this.setState({LName:e.target.value})}   ></input>
                Address : <input type="text" placeholder="Enter Address.." onChange={e=>this.setState({Address:e.target.value})}   ></input>
                Email : <input type="email" placeholder="Enter email.." onChange={e=>this.setState({Email:e.target.value})}   ></input>
                Phone Number: <input type="number" placeholder="Enter phone number.." onChange={e=>this.setState({PhoneNum:e.target.value})}   ></input>
                <button type="button" onClick={e=>this.registerHandler(e)}>
                    Register
                </button>
             </div>
             )
        }
        else{
            return(
                <Businesscard FName={this.state.FName} LName={this.state.LName} Address={this.state.Address} Email={this.state.Email}  PhoneNum={this.state.PhoneNum}/>
            )
        } 
    }
}
export default Register;

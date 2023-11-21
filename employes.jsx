import React, { Component } from "react";
import Composant1 from "./composant1";
import Composant3 from "./composant3";
import 'bootstrap/dist/css/bootstrap.min.css';

class Employes extends Component{
    constructor(props){
        super(props);
        this.state = {
            employes : []
        }
    }
    fetchEmpl = () => {
        fetch("http://localhost:8000/employes")
        .then((res)=>{return res.json()})
        .then((emp)=>{this.setState({employes : emp})})
    }
    componentDidMount(){
        this.fetchEmpl();
    }
    render(){
        const {employes} = this.state
        return(
            <>
            <Composant1 variable={employes} />
            <br/>
            <Composant3 variable={employes} />
            </>
        )
    }
}
export default Employes;
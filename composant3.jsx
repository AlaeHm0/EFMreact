import React from "react";
class Composant3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            dep : "",
            fEmp : [],
            searched : false
        }
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.rechercher();
    }
    rechercher = () =>{
        const {dep} = this.state;
        if(dep){
            const employes = this.props.variable
            const tab = employes.filter((emp)=> emp.département.nomDep === dep)
            this.setState({fEmp : tab , searched : true})
        }
    }
    render(){
        const {dep, fEmp, searched} = this.state
        return(
            <>
            <form onSubmit={this.handleSubmit}>
            <h1>Recherche par Departement :</h1>
            <label>Entrer le nom du departement </label>
            <input 
            type="text"
            value={dep}
            onChange={(e)=>{this.setState({dep : e.target.value})}}
            />
            <button type="submit">Chercher</button>
            </form>
            {
                    searched && fEmp.length > 0 ? (
                        <div>
                            <h1>Resultat</h1>
                            <ul>
                                {fEmp.map((emp, i) => (
                                    <li key={i}>
                                        Nom : {emp.nomEmp} Prenom : {emp.prenomEmp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ) : searched && fEmp.length === 0 ? (
                        <p>Aucun résultat trouvé.</p>
                    ) : null
                }
            </>
        )
    }
}
export default Composant3;
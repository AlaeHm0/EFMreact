import React from "react";
export default class Composant1 extends React.Component{
    render(){
        const tab = this.props.variable;
        return(
            <>
            <h1>Liste des Employes</h1>
            <table className="table table-bordered">
                <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>Poste</th>
                    <th>Departement</th>
                </tr>

            {
                tab.map((emp, i)=>(
                    <tr key={i}>
                        <td>{emp.nomEmp}</td>
                        <td>{emp.prenomEmp}</td>
                        <td>{emp.poste}</td>
                        <td>{emp.département.nomDep}</td>
                    </tr>
                ))
            }
            </table>
            </>
        )
    }
}
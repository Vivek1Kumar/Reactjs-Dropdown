import React from 'react';

export default function superHero(props){
		return (  
			<div>
				<table className="table table-bordered">
			    <thead>
			      <tr>
			        <th>Name</th>
			        <th>Strength</th>
			        <th>Intelligence</th>
			        <th>Speed</th>
			      </tr>
			    </thead>
			    <tbody>
			    {
			    	props.superhero.map(row =>(
			    		<tr>
			               <td>{row.name}</td>
			               <td>{row.strength}</td>
			               <td>{row.intelligence}</td>	
			               <td>{row.speed}</td>		        
			            </tr>
			       	))
			    }
			    </tbody>
		    </table>	
		</div>
		)
    }


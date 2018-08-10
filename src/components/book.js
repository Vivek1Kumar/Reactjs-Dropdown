import React from 'react';

export default function book(props){
		return (  
			<div>
				<table className="table table-bordered">
			    <thead>
			      <tr>
			        <th>Language</th>
			        <th>Edition</th>
			        <th>Author</th>
			      </tr>
			    </thead>
			    <tbody>
			    {
			    	props.books.map(row =>(
			    		<tr>
			               <td>{row.language}</td>
			               <td>{row.edition}</td>
			               <td>{row.author}</td>	
			            </tr>
			       	))
			    }
			    </tbody>
		    </table>	
		</div>
		)
    }


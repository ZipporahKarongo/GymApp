import React from 'react'
import { FaTrash } from 'react-icons/fa'


const ViewClients = ({isLoading, error, data, onDelete}) => {
  if (error) return <div>{error}</div>;

  return (
    <div className='myviewclients'>
      {/* if (isError) return <div>Error!</div>; */}

      {isLoading ? (
        <p>Loading ...</p>
      ) : (


      <table className="table">

            <thead>
                <tr>

                    <th>Client id</th>
                    <th>Full Name</th>
                    <th>ID No</th>
                    <th>Status</th>
                    <th>Gender</th>
                    <th>Phone no</th>

                </tr>
            </thead>
            <tbody>
            {
                data.map((mydata)=>{
                    return(
                        <tr key={mydata.client_id}>
                            <td>{mydata.client_id}</td>
                            <td>{mydata.first_name} {mydata.last_name}</td>
                            <td>{mydata.id_no}</td>
                            <td>{mydata.status}</td>
                            <td>{mydata.gender}</td>
                            <td>{mydata.phone_no}</td>
                            <td><FaTrash style={{ color: 'red', cursor:'pointer'}} onClick={() => onDelete(mydata.client_id)}/></td>
                        </tr>
                    )
                })
            }
            </tbody>
        </table>
         )}

        {/* first code for displaying the data from the api */}
      {/* <ul>
        { data.map((mydata) => (
            <p key={mydata.client_id}>{mydata.client_id} {mydata.first_name} {mydata.phone_no}</p>
        

          ))}
      </ul> */}

    </div>
  )
}

export default ViewClients
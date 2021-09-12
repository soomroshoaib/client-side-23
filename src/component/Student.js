import React from 'react'
import { useQuery, gql , useMutation } from "@apollo/client";

 const Student = () => {

    const Get_student = gql`
    query GetAllstudent {
      students {
        name
        email
        age
      }
    }
  `;

  const ADD_STUDENT = gql`
  mutation Addstudent ($id: Int!, $email: String!, $age: Int!, $name: String!) {
    addStudent(
       input:{id: $id, name: $name, email: $email, age: $age}
    ) {
      id
      name
    }
  }
`;


const { loading, error, data } = useQuery(Get_student);
const [addstd] = useMutation(ADD_STUDENT);
if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error :(</h1>;
    const {students} = data

    return (
        <div>
            <h1>Student List </h1>

            <table border='2'>
                
                    <tr border='1'>
                        <td>name</td>
                        <td>age</td>
                        <td>emaik</td>


                    </tr>
                   
                        {
                            students.map(std=>{
                                return(
                                    <tr>
                                        
                                        <td> {std.name}</td>
                                        <td> {std.email} </td>
                                        <td> {std.age}</td>
                                         
                                        
                                        
                                    </tr>
                                )
                            })
                        }
                
            </table>
            <button onClick={()=>{
                addstd({
                    variables: {
                        id: 8, email: "khan67@gmna.com",  age: 97, name: "shahzaib ali",

                    }
                    
                })
            }}>
                Add_student
            </button>
        </div>
    )
}

export default Student
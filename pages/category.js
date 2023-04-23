import React from 'react';
import { gql } from "graphql-request";
import client from ".././helpers/request";


const ADD_USER = gql`
mutation CreateCategory($data: CategoryCreateInput!) {
    createCategory(data: $data) {
      name
      valid
      id
    }
  }
`;

const Category = () => {

    const addUser = async (e, id) => {
        console.log("lemon", id);
        e.preventDefault();
    
        const variables = {
          data: {
            name: "demo488",
            valid: true
          },
        };

        try {
            const data = await client.request(ADD_USER, variables);
        } catch (error) {
            console.log('error',error)
        }
    
  
    

        // fetchData();
      };

    return (
        <div>
            in Category
            
      <form>
        <h2> add new post </h2>
        <label for="first"> title </label>
        <input
          type="text"
          id="first"
          value={'kkk'}
          name="first"
       
        />

        <button type="submit" onClick={(e) => addUser(e)}>
          Submit
        </button>
      </form>
        </div>
    );
}

export default Category;

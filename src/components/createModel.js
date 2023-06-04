
import React from 'react'

import { keystoneContext } from "../../src/keystone/context";
import AddUserForm from "./AddUserForm";
const CreateModel = () => {



  async function handleSubmit() {
    "use server"

  
      // console.log(formData);
      const user = await keystoneContext.query.User.createOne({
        data: {
          email:'mayanksunny1234000@gmail.com',
          "password":"1234567899"
        },
      });

      console.log(user)
      
    console.log('clone')

      return user

   }
  return (
    <div>
      
      <AddUserForm  handleSubmit={handleSubmit}  />

      </div>
  )
}

export default CreateModel
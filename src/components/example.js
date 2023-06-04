
import React from "react";
import AddUserForm from "./AddUserForm";
import { keystoneContext } from "../src/keystone/context";

const Example = () => {
  async function add() {
    console.log("add");
   
 "use server"
    try {
      // console.log(formData);
      const user = await keystoneContext.withSession({}).query.Project.createOne({
        data: {
          name: 'dd',
       
          projectType: 'dd',
          status: 'ddd',
          projectDiscription: 'dddd'
        },
      });

      console.log(user)

      return user

    } catch (error) {
    //   console.log("user", user);
    }
  }

  return (
    <div>
      <AddUserForm add={add} />
    </div>
  );
};

export default Example;

'use server';

import { keystoneContext } from "../../src/keystone/context";
 
export async function addItem(id) {

    console.log('addding')
    
      // console.log(formData);
      const user = await keystoneContext.query.User.createOne({
        data: {
          email:'mayanksunny123400099@gmail.com',
          "password":"1234567899"
        },
      });

      console.log(user)
      
    console.log('clone')

      return user
//   await addItemToDb(id);
//   // Marks all product pages for revalidating
//   revalidatePath('/product/[id]');
}
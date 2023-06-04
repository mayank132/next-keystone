'use server';

 
 async function addItem(id) {


    console.log('added')
//   await addItemToDb(id);
//   // Marks all product pages for revalidating
//   revalidatePath('/product/[id]');
}

export default addItem




// 'use server';

// import { keystoneContext } from "../src/keystone/context";

// const addUser = async ( id) => {



//     console.log("lemon", id);
//     // e.preventDefault();

//     const user = await keystoneContext.query.User.createOne({
//       data: {
//         email: 'mayanksunny78655@gmail.com',
//         password: "9999999999999",
//       },
//       query: 'id name posts { id title }',
//     });


//     console.log('k',user)
//     // const variables = {
//     //   data: {
//     //     author: {
//     //       connect: {
//     //         id: userId,
//     //       },
//     //     },
//     //     title: title,
//     //   },
//     // };

//     // try {
//     //   const data = await client.request(ADD_USER, variables);
//     //   fetchData();
//     // } catch (error) {
//     //   console.log("error", error);
//     // }
//   };


//   export default addUser
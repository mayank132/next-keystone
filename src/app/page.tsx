//@ts-nocheck comment at the top of the file.

import { useContext } from "react";
// import { User_data } from "../context/context";
import Link from "next/link";
const path = require('path')

// import type {
//   NextPage,
//   GetServerSideProps,
//   InferGetServerSidePropsType,
// } from "next";
// import Head from "next/head";
// import { gql } from "graphql-request";
// import client from "../helpers/request";
// import { keystoneContext } from "../src/keystone/context";
// import { collectGenerateParams } from "next/dist/build/utils";


const Home = () => {
//   const { user, setUser } = useContext(User_data);



  return (  
    <div>
         <p>
            see all your  <Link href={`/timeenteries`}> time enteries </Link>
          </p>
          <p>
            {" "}
            {/* edit <Link href={`/users/edit/${user.id}`}>{user.name}</Link> */}
          </p>
    </div>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { User_data } from "../context/context";
import Link from "next/link";

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
  const { user, setUser } = useContext(User_data);



  useEffect(() => {}, []);

  return (
    <div>
      {user && (
        <>
        <h2> welcome {user.name} </h2>
          <p>
            see all your posts <Link href={`/users/${user.id}`}>{user.name}</Link>
          </p>
          <p>
            {" "}
            edit <Link href={`/users/edit/${user.id}`}>{user.name}</Link>
          </p>
        </>
      )}
    </div>
  );
};

export default Home;

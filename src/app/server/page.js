"use client"
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";
export default function Page({ data}) {


    console.log(data)

     return <h6>{data}</h6>
  }
   
  // This gets called on every request
  export async function getServerSideProps() {
    // Fetch data from external API

   
    // Pass data to the page via props
    return { props: { data:"mm" } };
  }
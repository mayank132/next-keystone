import { gql } from "graphql-request";
import client from "../../helpers/request";
import Link from "next/link";
import { keystoneContext } from "../../src/keystone/context";
import {
  NextPage,
  GetServerSideProps,
  InferGetServerSidePropsType,
} from "next";

export default function Users({ data,session }) {
  console.log("seeing", data,session);
  return (
    <div>
      <h1> List of all users are here</h1>
      {data.map((item, key) => (
        <>
          <p>
            {" "}
            {key + 1} {item.name}{" "}
          </p>
          <p>
            see all posts <Link href={`/users/${item.id}`}>{item.name}</Link>
          </p>
          <p>
            {" "}
            edit <Link href={`/users/edit/${item.id}`}>{item.name}</Link>
          </p>
        </>
      ))}
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const context = await keystoneContext.withRequest(req, res);

  const users = await context.query.User.findMany({
    query: "id name",
  });

  const session = await context.sessionStrategy.get({ context });

  console.log("home", session);

  return {
    props: {
      data: users,
      session:session
    },
  };
};

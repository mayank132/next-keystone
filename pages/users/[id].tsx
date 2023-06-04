//@ts-nocheck comment at the top of the file.
'use server';
import { gql } from "graphql-request";
import client from "../../helpers/request";
import Link from "next/link";
import { useEffect, useState } from "react";
import { keystoneContext } from "../../src/keystone/context";

const GET_USER = gql`
  query User($id: ID!) {
    user(where: { id: $id }) {
      id
      name
      posts {

        title
        id
      }
    }
  }
`;

const ADD_USER = gql`
  mutation Mutation($data: PostCreateInput!) {
    createPost(data: $data) {
      author {
        name
      }
    }
  }
`;





export default async function SpecificUser({ userId }) {
  console.log("all posts", userId);
  const [data, setData] = useState([]);

  const [title, setTitle] = useState("");




  useEffect(() => {
    // fetchData();
  }, []);

  return (
    <div>
      <h1> all posts of {data.name}</h1>

      <form method="post">
      <input name="name" defaultValue={'jj'} />
      <button type="submit">submit</button>
    </form>

      <div className="grid grid-cols-4 gap-4">
        {data.posts &&
          data.posts.map((item, key) => {
            return (
              <div>
                <h2>
                  {" "}
                  {key + 1} title: {item.title}{" "}
                </h2>
              </div>
            );
          })}
      </div>

      <form>
        <h2> add new post </h2>
        <label for="first"> title </label>
        <input
          type="text"
          id="first"
          value={title}
          name="first"
          onChange={(e) => setTitle(e.target.value)}
        />

        <button type="submit" onClick={(e) => addUser(e)}>
          Submit
        </button>
      </form>
    </div>
  );
}
//get list of all companies:
export async function getStaticPaths({ req, res }) {
  const context = await keystoneContext.withRequest(req, res);

  const users = await context.query.User.findMany({
    query: "id name",
  });

  const paths = users.map((item) => ({
    params: {
      id: item.id,
    },
  }));

  return { paths, fallback: false };
}

//fetch just one company... you're doing it right
export async function getStaticProps({ params }) {
  const { id } = params;
  return {
    props: {
      userId: id,
    },
  };
}

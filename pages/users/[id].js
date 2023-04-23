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
      isAdmin
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

export default function SpecificUser({ userId }) {
  console.log("all posts", userId);
  const [data, setData] = useState([]);

  const [title, setTitle] = useState("");

  const addUser = async (e, id) => {
    console.log("lemon", id);
    e.preventDefault();

    const variables = {
      data: {
        author: {
          connect: {
            id: userId,
          },
        },
        title: title,
      },
    };

    try {
      const data = await client.request(ADD_USER, variables);
      fetchData();
    } catch (error) {
      console.log("error", error);
    }


  };

  async function fetchData() {
    console.log("kkkkkkkkkkkkkkkkkkk");
    const variables = {
      id: userId,
    };

    // You can await here
    const data = await client.request(GET_USER, variables);

    console.log("userdata", data);

    setData(data.user);
    // ...
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1> all posts of {data.name}</h1>
      {data.posts &&
        data.posts.map((item, key) => {
          return (
            <>
              <h2>
                {" "}
                {key + 1} title: {item.title}{" "}
              </h2>
            </>
          );
        })}

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

import { gql } from "graphql-request";
import { useMutation, useQuery } from "graphql-request";
import { useState, useEffect } from "react";
import client from "../../../helpers/request";
import { useRouter } from "next/router";
import Link from "next/link";
import { keystoneContext } from "../../../src/keystone/context";
import { useContext } from "react";
import { User_data } from "../../../context/context";

// Define mutation
const INCREMENT_COUNTER = gql`
  mutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {
    updateUser(where: $where, data: $data) {
      id
      name
    }
  }
`;

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

export default function SpecificUser({ userId }) {
  const [name, setName] = useState("");

  const router = useRouter()

  const   {setUser}  = useContext(User_data)

  async function fetchData() {
    console.log("kkkkkkkkkkkkkkkkkkk");
    const variables = {
      id: userId,
    };

    // You can await here
    const data = await client.request(GET_USER, variables);

    console.log("userdata", data);

    setName(data.user.name);
    setUser(data.user)
    // ...
  }

  useEffect(() => {
    fetchData();
  }, []);

  // if (loading) return "Submitting...";

  // console.log("seeing", data1);
  // if (error) return `Submission error! ${error.message}`;

  const updateUser = async (e, id) => {
    console.log("lemon", id);
    e.preventDefault();

    const variables = {
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    };

    const data = await client.request(INCREMENT_COUNTER, variables);

    console.log("data", data);

    fetchData();
    
    router.push('/')

  };

  console.log("in edit user");

  return (
    <div>
      <form>
        <label for="first">First name:</label>
        <input
          type="text"
          id="first"
          value={name}
          name="first"
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit" onClick={(e) => updateUser(e, userId)}>
          Submit
        </button>
        {}
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

  console.log("data", users);

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

  // console.log("checking id", id);
  // const { data } = await client.query({
  //   query: gql`
  //     query User($id: ID!) {
  //       user(where: { id: $id }) {
  //         id
  //         name
  //         posts {
  //           title
  //           id
  //         }
  //       }
  //     }
  //   `,
  //   variables: { id },
  // });
  return {
    props: {
      userId: id,
    },
  };
}

import React from "react";
import { gql } from "graphql-request";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import client from "../helpers/request";
import { useRouter } from "next/router";
import { useContext } from "react";
import { User_data } from "../context/context";
import Link from "next/link";

// import { keystoneContext } from ".././src/keystone/context";

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

const GET_AUTHENTICATED_USER = gql`
  query AuthenticatedItem {
    authenticatedItem {
      ... on User {
        email
        name
        id
      }
    }
  }
`;

const GET_CATEGORY = gql`
  query Categories {
    categories {
      name
      valid
    }
  }
`;

const Navbar = ({ context }) => {
  const { user, setUser } = useContext(User_data);

  const router = useRouter();

  const logout = async () => {
    // const session = await context.sessionStrategy.get({ context });

    console.log("home", context);
  };

  const getUserData = async (id) => {
    const data = await client.request(GET_AUTHENTICATED_USER);

    console.log("s", data);

    return data;
  };

  const getCategoryData = async (id) => {
    const data = await client.request(GET_CATEGORY);
  };

  useEffect(() => {
    const data = getUserData();

    data.then((res) => {
      if (res.authenticatedItem) {
        setUser(res.authenticatedItem);
      }

      if (!res.authenticatedItem) {
        router.push("/login");
      }
    });
  }, []);

  console.log("in navigation");

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            {" "}
            Blog website{" "}
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item"> 
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
            </ul>
            <form class="d-flex">
              <h3 className="me-4"> {user && user.name} </h3>
 

              {user && (
                <button
                  type="button"
                  class="btn btn-warning "
                  onClick={() => {
                    router.push("/logout");
                  }}
                >
                  {" "}
                  logout{" "}
                </button>
              )}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

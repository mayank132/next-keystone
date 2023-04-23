import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { keystoneContext } from ".././src/keystone/context";

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");

    setTimeout(() => {
      router.reload();
    }, 500);
  }, []);
};

export default Logout;

export const getServerSideProps = async ({ req, res }) => {
  const context = await keystoneContext.withRequest(req, res);

  const users = await context.query.User.findMany({
    query: "id name",
  });

  await context.sessionStrategy.end({ context });

  return {
    props: {
      data: users,
    },
  };
};

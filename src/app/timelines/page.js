//@ts-nocheck comment at the top of the file.
"use client"
import { gql } from "graphql-request";
import client from "../../../helpers/request";
import Link from "next/link";
import { keystoneContext } from "../../keystone/context";

// import {addItem} from "../../actions"
// import Example  from "../../components/example"

export default function Users({ data, session }) {
  console.log("seeing", data, session);

  // let [isPending, startTransition] = useTransition();

  console.log('data',data)
  
  return (
    <div>
      <h1> List of all timeenteries </h1>

  
      <div className="p-5 bg-white drop-shadow-md rounded-xl rounded mt-8">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded">
          <thead className="capitalize bg-[#F8F7F7] font-semibold text-[1em] text-[#140F49]">
            <tr>
              <th scope="col" className="px-6 py-3 text-center">
                Project
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Task
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                date
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                createdBy
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Duration
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Activities
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Reviewed By
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Remark
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                status
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                Edit
              </th>
            </tr>
          </thead>
          <tbody className="rounded">
            {data?.length === 0 && "no Time entries"}
            {data?.length > 0 &&
              data.map((item, index) => {
                if (item.key === 0) {
                } else {
                  return (
                    <tr
                      key={item.id}
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white text-center"
                      >
                        {item?.id}
                      </th>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
        <div className="my-5 flex items-center justify-center"></div>
      </div>
    </div>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  const context = await keystoneContext.withRequest(req, res);

  console.log(req.body);

  console.log(req.method);

  const session = await context.sessionStrategy.get({ context });

  const users = await context.query.TimeEntery.findMany({
    where: {
      userName: {
        id: {
          equals: session.itemId,
        },
      },
    },
    orderBy: [
      {
        date: "asc",
      },
    ],
    query: "id",
  });

  console.log("home", session);

  return {
    props: {
      data: users,
    },
  };
};




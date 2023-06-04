"use client"
import React from 'react'

// import { keystoneContext } from "../../src/keystone/context";
// import CreateModel from "../../components/createModel"
import {addItem} from "../../actions"
import { useTransition } from 'react';

const Projects =  () => {


    let [isPending, startTransition] = useTransition();

    // const projects = await keystoneContext.query.Project.findMany({
    //     query: 'id name startDate endDate status projectDiscription projectType'
    // })

    return (

        <div className='p-5'>

            {/* <CreateModel /> */}
            <button onClick={() => startTransition(() => addItem(1))}>
      Add To Cart
    </button>
        </div>
    )
}

export default Projects
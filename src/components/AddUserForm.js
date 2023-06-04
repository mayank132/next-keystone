"use client"

const AddUserForm= ({ handleSubmit }) => {
    // const router = useRouter();


    const createProject = async () => {
        try {
            await handleSubmit();
            // toast.success('Project Created');
            // console.log("Completed");
            // form.reset();
            // router.push('/projects');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
                <button
                    type="submit"
                    className={`text-md font-normal  first-line: text-white px-4 bg-secondary rounded-md py-2 border-none`}
                    onClick={()=>handleSubmit()}
                >
                    Create
                </button>
    
        </div>
    )
}

export default AddUserForm
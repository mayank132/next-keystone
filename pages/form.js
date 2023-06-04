

export default function Form() {
    async function handleSubmit() {
      'use server';
      console.log('su')
      // ...
    }
   
    async function submitImage() {
      'use server';
      console.log('im')
      // ...
    }
   
    return (
      <form action={handleSubmit}>
        <input type="text" name="name" />
        <input type="image" formAction={submitImage} />
        <button type="submit">Submit</button>
      </form>
    );
  }
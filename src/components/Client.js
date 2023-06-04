'use client';
 
function ExampleClientComponent({ updateItem }) {
  async function action(formData) {

    await updateItem(formData);
  }
 
  return (
    <form action={action}>
      <input type="text" name="name" />
      <button type="submit">Update Item</button>
    </form>
  );
}

export default ExampleClientComponent
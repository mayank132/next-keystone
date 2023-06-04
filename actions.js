'use server';
 
export async function addItem(id) {
  await addItemToDb(id);
  // Marks all product pages for revalidating
  revalidatePath('/product/[id]');
}
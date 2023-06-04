'use client';
 
import { useTransition } from 'react';
 
function ExampleClientComponent({ id }) {
  let [isPending, startTransition] = useTransition();
 
  return (
    <button onClick={() => startTransition(() => addItem(id))}>
      Add To Cart
    </button>
  );
}
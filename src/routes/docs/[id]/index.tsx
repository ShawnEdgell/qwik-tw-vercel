// src/routes/docs/[id]/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const loc = useLocation();
  const id = loc.params.id;
  return (
    <>
      <h1>Doc ID: {id}</h1>
      <p>This is a dynamic docs page for {id}.</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "Document",
  meta: [
    {
      name: "description",
      content: "Dynamic document page",
    },
  ],
};

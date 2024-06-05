// src/routes/about/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>About Us</h1>
      <p>This is the about page.</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "About Us",
  meta: [
    {
      name: "description",
      content: "About us page description",
    },
  ],
};

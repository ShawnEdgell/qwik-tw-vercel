// src/routes/about/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Lorem } from "../../components/lorem/lorem";

export default component$(() => {
  return (
    <>
      <h1>About Us</h1>
      <p>This is the about page.</p>
      <Lorem />
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

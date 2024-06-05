// src/routes/contact/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Lorem } from "../../components/lorem/lorem";

export default component$(() => {
  return (
    <>
      <h1>Contact Us</h1>
      <p>This is the contact page.</p>
      <Lorem />
    </>
  );
});

export const head: DocumentHead = {
  title: "Contact Us",
  meta: [
    {
      name: "description",
      content: "Contact page description",
    },
  ],
};

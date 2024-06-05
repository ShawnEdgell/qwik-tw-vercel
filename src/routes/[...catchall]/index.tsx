// src/routes/[...catchall]/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </>
  );
});

export const head: DocumentHead = {
  title: "404 Not Found",
  meta: [
    {
      name: "description",
      content: "Page not found",
    },
  ],
};

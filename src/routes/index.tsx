// src/routes/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="mx-auto text-center">
      <h1>Welcome to Qwik</h1>
      <p>Can't wait to see what you build with Qwik!</p>
      <a
        href="/about"
        class="inline-block rounded-md bg-blue-500 px-6 py-3 font-semibold text-white no-underline shadow-md transition duration-300 hover:bg-blue-700"
      >
        Learn More
      </a>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};

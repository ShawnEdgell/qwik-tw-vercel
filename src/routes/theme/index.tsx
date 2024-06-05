// src/routes/contact/index.tsx
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Theme } from "../../components/theme/theme";

export default component$(() => {
  return (
    <>
      <h1>Theme</h1>
      <input
        type="checkbox"
        value="dark"
        class="toggle theme-controller mb-6"
      />
      <Theme />
    </>
  );
});

export const head: DocumentHead = {
  title: "Theme",
  meta: [
    {
      name: "description",
      content: "Theme page description",
    },
  ],
};

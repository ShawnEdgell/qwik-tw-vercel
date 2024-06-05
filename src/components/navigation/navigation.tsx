// src/components/navigation/navigation.tsx
import { component$ } from "@builder.io/qwik";

export const Navigation = component$(() => {
  return (
    <nav class="space-x-4 bg-blue-300 py-4 text-center">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
});

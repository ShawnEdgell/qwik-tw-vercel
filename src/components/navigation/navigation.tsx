// src/components/navigation/navigation.tsx
import { component$ } from "@builder.io/qwik";

export const Navigation = component$(() => {
  return (
    <nav class="space-x-6 bg-blue-300 py-5 text-center">
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </nav>
  );
});

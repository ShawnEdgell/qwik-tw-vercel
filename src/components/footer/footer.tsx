// src/components/footer/footer.tsx
import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-red-300 py-32 text-center">
      <p>© 2024 Your Company</p>
    </footer>
  );
});

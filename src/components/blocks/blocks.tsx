import { component$ } from "@builder.io/qwik";

export const Blocks = component$(() => {
  return (
    <div class="my-16 flex justify-center gap-2">
      <div class="bg-primary h-10 w-10"></div>
      <div class="bg-secondary h-10 w-10"></div>
      <div class="bg-accent h-10 w-10"></div>
      <div class="bg-neutral h-10 w-10"></div>
      <div class="bg-base-300 h-10 w-10"></div>
    </div>
  );
});

import { component$ } from "@builder.io/qwik";

export const Theme = component$(() => {
  return (
    <div class="flex w-full flex-col">
      <div class="divider">Default</div>
      <div class="divider divider-neutral">Neutral</div>
      <div class="divider divider-primary">Primary</div>
      <div class="divider divider-secondary">Secondary</div>
      <div class="divider divider-accent">Accent</div>
      <div class="divider divider-success">Success</div>
      <div class="divider divider-warning">Warning</div>
      <div class="divider divider-info">Info</div>
      <div class="divider divider-error">Error</div>
    </div>
  );
});

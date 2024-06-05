// src/routes/layout.tsx
import { component$, Slot } from "@builder.io/qwik";
import { Navigation } from "../components/navigation/navigation";
import { Footer } from "../components/footer/footer";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col">
      <header class="fixed top-0 z-10 w-full">
        <Navigation />
      </header>
      <main class="mt-16 flex w-full flex-1 flex-col items-center justify-center">
        <Slot />
      </main>
      <footer class="w-full">
        <Footer />
      </footer>
    </div>
  );
});

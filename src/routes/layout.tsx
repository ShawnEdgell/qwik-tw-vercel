// src/routes/layout.tsx
import { component$, Slot } from "@builder.io/qwik";
import { Navigation } from "../components/navigation/navigation";
import { Footer } from "../components/footer/footer";
import type { RequestHandler } from "@builder.io/qwik-city";

// Define string literal types for themes
type Theme = "light" | "dark";

interface LayoutProps {
  theme: Theme; // Use the defined type for theme
}

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$<LayoutProps>(({ theme }) => {
  return (
    <div>
      <div
        class={`flex min-h-screen flex-col items-center overscroll-none ${theme === "dark" ? "dark" : ""}`}
      >
        <header class="fixed top-0 z-10 w-full">
          <Navigation />
        </header>
        <main
          class={`prose mt-16 flex w-full flex-1 flex-col items-center justify-center px-4 py-16 ${theme === "dark" ? "dark" : ""}`}
        >
          <Slot />
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
});

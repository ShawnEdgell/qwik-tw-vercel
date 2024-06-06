import { component$, useSignal, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

export const Navigation = component$(() => {
  const isOpen = useSignal(false);

  const toggleMenu = $(() => {
    isOpen.value = !isOpen.value;
  });

  const closeMenu = $(() => {
    isOpen.value = false;
  });

  return (
    <div class="relative">
      <div class="navbar relative z-20 bg-white py-3">
        <div class="flex-none lg:hidden"></div>
        <div class="flex-1">
          <Link href="/" class="btn btn-ghost text-2xl">
            Qwik
          </Link>
        </div>
        <div class="flex-none">
          <button
            class="btn btn-square btn-ghost lg:hidden"
            onClick$={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-8 w-8 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
          <div class="mr-6 hidden space-x-6 lg:block">
            <Link href="/about" class="hover:text-primary">
              About
            </Link>
            <Link href="/contact" class="hover:text-primary">
              Contact
            </Link>
          </div>
        </div>
      </div>

      <div
        class={`fixed inset-0 z-10 transition-opacity duration-300 ${
          isOpen.value ? "bg-black opacity-50" : "pointer-events-none opacity-0"
        }`}
        onClick$={closeMenu}
      ></div>

      <div
        class={`absolute right-0 w-full bg-white text-center transition-transform duration-300 ${
          isOpen.value ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{ top: "100%", zIndex: "15" }}
      >
        <div
          class="py-1"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <Link
            href="/"
            class="block px-4 py-2 text-2xl"
            role="menuitem"
            onClick$={closeMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            class="block px-4 py-2 text-2xl"
            role="menuitem"
            onClick$={closeMenu}
          >
            About
          </Link>
          <Link
            href="/contact"
            class="block px-4 py-2 text-2xl"
            role="menuitem"
            onClick$={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
});

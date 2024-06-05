// src/components/navigation/navigation.tsx
import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// Define constants for button styles and link attributes
const buttonStyles = "md:hover:text-primary";
const links = [
  { href: "/", text: "Home" },
  { href: "/about", text: "About" },
  { href: "/contact", text: "Contact" },
  { href: "/theme", text: "Theme" },
];

export const Navigation = component$(() => {
  return (
    <ul class="bg-base-300 flex w-full justify-center gap-6 py-5">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} class={buttonStyles}>
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  );
});

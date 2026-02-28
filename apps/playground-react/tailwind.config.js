import { bridgeUIPreset } from "@bridge-ui/styles/preset";

/** @type {import('tailwindcss').Config} */
export default {
  presets: [bridgeUIPreset],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
};

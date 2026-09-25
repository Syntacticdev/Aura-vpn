/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      boxShadow: {
        xs: "0 1px 2px 1px rgb(0 0 0 / 0.01)",
        "card-lg": "0px 4px 1px rgba(0, 0, 0, 0.2)"
      },
      colors: {
        primary: "rgb(var(--color-values) / <alpha-value>)",
        "surface-dim": "rgb(210, 217, 244)",
        "surface-variant": "rgb(94, 94, 94)",
        "primary-fixed": "rgb(226, 226, 226)",
        "tertiary-fixed-variant": "rgb(0, 82, 54)",
        "c_primary": "rgb(37, 99, 235)",
        "muted": "rgb(241, 245, 249)"
      },
      fontFamily: {
        hanken: ["HankenGrotesk_400Regular"],
        "hanken-light": ["HankenGrotesk_300Light"],
        "hanken-medium": ["HankenGrotesk_500Medium"],
        "hanken-semibold": ["HankenGrotesk_600SemiBold"],
        "hanken-bold": ["HankenGrotesk_700Bold"],
        jetbrainsMono: ["JetBrainsMono_400Regular"],
        "jetbrainsMono-light": ["JetBrainsMono_300Light"],
        "jetbrainsMono-medium": ["JetBrainsMono_500Medium"],
        "jetbrainsMono-semibold": ["JetBrainsMono_600SemiBold"],
        "jetbrainsMono-bold": ["JetBrainsMono_700Bold"],
      },
    },
  },
  plugins: [],
};

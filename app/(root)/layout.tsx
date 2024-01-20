import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

export const metadata: Metadata = {
  title: "Image Harbor : Your destination to 2,000,000 free Stock Images!",
  description: "Your destination to 2,000,000 free Stock Images.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          baseTheme: [dark],
          card: {
            backgroundColor: "#222222",
          },
          formButtonPrimary: {
            fontSize: 14,
            textTransform: "none",
            backgroundColor: "#586aea",
            "&:hover, &:focus, &:active": {
              backgroundColor: "#4350ad",
            },
          },
        },
      }}
    >
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}

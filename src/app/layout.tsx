import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthKitProvider } from "@farcaster/auth-kit";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Farcaster App",
  description: "A Farcaster app built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const config = {
    domain: "your-domain.com",
    siweUri: "https://your-domain.com/login",
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL || "https://mainnet.optimism.io",
    relay: "https://relay.farcaster.xyz",
    // Add any other required configuration options
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthKitProvider config={config}>{children}</AuthKitProvider>
      </body>
    </html>
  );
}

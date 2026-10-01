import type { Metadata, ReactNode } from "react";
import "./globals.css";
export const metadata: Metadata = { title: "Relay — Support Inbox", description: "A shared inbox for thoughtful customer support." };
export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }


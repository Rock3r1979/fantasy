import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ReactNode } from "react";
export function SiteLayout({ children }: { children: ReactNode }) { return <><Header /><main>{children}</main><Footer /></>; }

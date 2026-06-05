import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }
export const formatPct = (v:number)=>`${v.toFixed(0)}%`;
export const formatMoney = (v:number)=>`${v.toFixed(1)}M`;

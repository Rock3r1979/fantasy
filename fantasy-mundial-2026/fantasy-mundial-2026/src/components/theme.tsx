"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
export function ThemeToggle(){const [dark,setDark]=useState(false);useEffect(()=>{document.documentElement.classList.toggle("dark",dark);document.body.style.background=dark?"#171614":"#f7f6f2";document.body.style.color=dark?"#cdccca":"#28251d";},[dark]);return <button aria-label="Cambiar tema" onClick={()=>setDark(v=>!v)} className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white/80 transition hover:bg-white">{dark?<Sun className="h-5 w-5"/>:<Moon className="h-5 w-5"/>}</button>}

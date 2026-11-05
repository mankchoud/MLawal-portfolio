// src/app/components/ThemeProvider.tsx (Version Corrigée)
"use client";

import * as React from "react";
// On importe le type 'ThemeProviderProps' directement depuis le paquet principal,
// et non plus depuis un sous-dossier.
import { ThemeProvider as NextThemesProvider, type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
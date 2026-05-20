import { createContext, useContext } from "react";

export const SurfaceContext = createContext<number>(3);

export function useSurface(): number {
  return useContext(SurfaceContext);
}

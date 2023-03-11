import { useContext } from "react";
import { AuthenticateContext } from "@/authenticate/contexts";

export default function useAuthenticateContext() {
  const context = useContext(AuthenticateContext);
  return context;
}

import { LoginEmailForm } from "@/authenticate/types";

interface AuthenticateContext {
  authUser: LoginEmailForm | null;
  loginUser: (credentials: LoginEmailForm) => void;
  logoutUser: () => void;
}

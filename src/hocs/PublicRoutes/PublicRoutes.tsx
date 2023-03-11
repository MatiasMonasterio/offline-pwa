import { Navigate } from "react-router-dom";
import { useAuthenticateContext } from "@/authenticate/hooks";

interface Props {
  children: React.ReactNode;
}

export default function PublicRoutes({ children }: Props) {
  const { authUser } = useAuthenticateContext();
  return <>{!authUser ? children : <Navigate to="/" replace />}</>;
}

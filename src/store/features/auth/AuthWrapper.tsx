import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetMeQuery } from "./authApi.slice";
import { logOut, setCredentials } from "./auth.slice";

interface AuthWrapperProps {
  children: React.ReactNode;
}

const AuthWrapper = ({ children }: AuthWrapperProps) => {
    const dispatch = useDispatch();
    
  // This hook runs automatically on mount
  // It sends the Secure Cookie to the /auth/me endpoint
  const { data, isLoading, isError, isSuccess } = useGetMeQuery();

  useEffect(() => {
    if (isSuccess && data) {
      // Session is valid, update local Redux state
      dispatch(setCredentials(data));
    } else if (isError) {
      // Session is invalid or expired
      dispatch(logOut());
    }
  }, [isSuccess, isError, data, dispatch]);

  if (isLoading) {
    // Show a loading spinner or a blank screen to prevent "UI flicker"
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Initializing App...</p>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;

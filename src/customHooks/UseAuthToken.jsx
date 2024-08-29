import { useEffect, useState } from "react";

export default function useAuthToken() {
  const [token, setToken] = useState(() =>
    JSON.parse(localStorage.getItem("token"))
  );

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem("token"));
    setToken(storedToken);
  }, []);

  return token;
}

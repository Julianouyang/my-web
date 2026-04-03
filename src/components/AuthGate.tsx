import { useEffect, useState } from "react";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import type { User } from "firebase/auth";
import { auth, googleProvider } from "../lib/firebase";

const ALLOWED_EMAIL = "oyjl616@gmail.com";

interface AuthGateProps {
  children: React.ReactNode;
}

export default function AuthGate({ children }: AuthGateProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    return onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
      if (u && u.email !== ALLOWED_EMAIL) {
        setError("Access denied");
        signOut(auth);
      } else {
        setError(null);
      }
    });
  }, []);

  const handleLogin = async () => {
    try {
      setError(null);
      const result = await signInWithPopup(auth, googleProvider);
      if (result.user.email !== ALLOWED_EMAIL) {
        setError("Access denied");
        await signOut(auth);
      }
    } catch (e: any) {
      setError(e.message || "Login failed");
    }
  };

  if (loading) {
    return (
      <div className="py-12 text-center" style={{ color: "var(--color-muted)" }}>
        Loading...
      </div>
    );
  }

  if (!user || user.email !== ALLOWED_EMAIL) {
    return (
      <div className="py-12 text-center">
        <p className="mb-4 text-lg" style={{ color: "var(--color-muted)" }}>
          This post is private.
        </p>
        <button
          onClick={handleLogin}
          className="rounded-lg px-6 py-2.5 font-medium text-white transition-colors"
          style={{ background: "var(--color-accent)" }}
        >
          Sign in with Google
        </button>
        {error && (
          <p className="mt-4 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }

  return <>{children}</>;
}

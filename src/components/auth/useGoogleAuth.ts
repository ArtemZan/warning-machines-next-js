import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export function useGoogleAuth() {
    const router = useRouter();
    const { loginWithGoogleCredential } = useAuth();
  
    const handleGoogleCredential = (credential: string) => {
      loginWithGoogleCredential(credential);
      router.push('/');
    };

    return { handleGoogleCredential };
}
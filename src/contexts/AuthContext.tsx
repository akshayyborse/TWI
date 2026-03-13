import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthContextType {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    signOut: () => Promise<void>;
    loginDemo: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
    user: null,
    session: null,
    isLoading: true,
    signOut: async () => { },
    loginDemo: async () => { },
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session);
            setUser(session?.user ?? null);
            setIsLoading(false);
        });

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            setUser(session?.user ?? null);
            setIsLoading(false);
        });

        return () => subscription.unsubscribe();
    }, []);

    const signOut = async () => {
        await supabase.auth.signOut();
    };

    const loginDemo = async () => {
        const fakeUser = {
            id: "demo-user-123",
            aud: "authenticated",
            role: "authenticated",
            email: "demo@twilook.com",
            app_metadata: { provider: "email", providers: ["email"] },
            user_metadata: { full_name: "Demo User" },
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString(),
        } as User;

        setUser(fakeUser);
        setSession({
            access_token: "demo-token",
            refresh_token: "demo-refresh-token",
            expires_in: 3600,
            token_type: "bearer",
            user: fakeUser,
        });
    };

    return (
        <AuthContext.Provider value={{ user, session, isLoading, signOut, loginDemo }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};

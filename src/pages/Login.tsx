import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/contexts/AuthContext";

const Login = () => {
    const navigate = useNavigate();
    const { loginDemo } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // DEMO LOGIN BYPASS
        if (email === "demo@twilook.com" && password === "password123") {
            await loginDemo();
            toast.success("Successfully logged in to DEMO account!");
            navigate("/");
            setLoading(false);
            return;
        }

        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                toast.error(error.message);
            } else {
                toast.success("Successfully logged in!");
                navigate("/");
            }
        } catch (error: any) {
            toast.error(error.message || "An error occurred during login");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Login | TWILOOK</title>
                <meta name="description" content="Log in to your TWILOOK account" />
            </Helmet>

            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-1 flex items-center justify-center pt-32 pb-16 px-6">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center space-y-2">
                            <h1 className="font-display text-4xl font-medium tracking-tight">
                                Welcome Back
                            </h1>
                            <p className="text-muted-foreground text-sm">
                                Enter your details to access your account
                            </p>
                        </div>

                        <form onSubmit={handleLogin} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="name@example.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        className="h-12"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between">
                                        <Label htmlFor="password">Password</Label>
                                        <Link
                                            to="#"
                                            className="text-xs text-muted-foreground hover:text-foreground transition-colors"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        className="h-12"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-foreground text-background hover:bg-primary text-sm tracking-fashion font-medium transition-colors"
                                disabled={loading}
                            >
                                {loading ? "LOGGING IN..." : "LOG IN"}
                            </Button>
                        </form>

                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                                Don't have an account?{" "}
                                <Link
                                    to="/register"
                                    className="text-foreground hover:text-primary transition-colors font-medium underline underline-offset-4"
                                >
                                    Sign up
                                </Link>
                            </p>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Login;

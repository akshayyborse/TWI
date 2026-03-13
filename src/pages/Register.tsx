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

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: {
                        full_name: name,
                    },
                },
            });

            if (error) {
                toast.error(error.message);
            } else {
                if (data.session) {
                    toast.success("Registration successful!");
                    navigate("/");
                } else {
                    toast.success(
                        "Registration successful! Please check your email to confirm your account."
                    );
                    navigate("/login");
                }
            }
        } catch (error: any) {
            toast.error(error.message || "An error occurred during registration");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Helmet>
                <title>Create Account | TWILOOK</title>
                <meta name="description" content="Create a new TWILOOK account" />
            </Helmet>

            <div className="min-h-screen flex flex-col">
                <Header />

                <main className="flex-1 flex items-center justify-center pt-32 pb-16 px-6">
                    <div className="w-full max-w-md space-y-8">
                        <div className="text-center space-y-2">
                            <h1 className="font-display text-4xl font-medium tracking-tight">
                                Create Account
                            </h1>
                            <p className="text-muted-foreground text-sm">
                                Join TWILOOK to experience premium fashion
                            </p>
                        </div>

                        <form onSubmit={handleRegister} className="space-y-6">
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required
                                        className="h-12"
                                    />
                                </div>
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
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={6}
                                        className="h-12"
                                    />
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full h-12 bg-foreground text-background hover:bg-primary text-sm tracking-fashion font-medium transition-colors"
                                disabled={loading}
                            >
                                {loading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
                            </Button>
                        </form>

                        <div className="text-center">
                            <p className="text-sm text-muted-foreground">
                                Already have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-foreground hover:text-primary transition-colors font-medium underline underline-offset-4"
                                >
                                    Log in
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

export default Register;

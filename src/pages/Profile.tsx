import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { User as UserIcon, Package, MapPin, CreditCard, Settings } from "lucide-react";

const Profile = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [activeTab, setActiveTab] = useState("personal");

    // Mock Form State
    const [formData, setFormData] = useState({
        fullName: user?.user_metadata?.full_name || "",
        email: user?.email || "",
        phone: "+1 (555) 123-4567",
        streetAddress: "123 Fashion Ave",
        city: "New York",
        state: "NY",
        zipCode: "10001",
        country: "United States",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API Call
        setTimeout(() => {
            setLoading(false);
            toast.success("Profile updated successfully!");
        }, 1000);
    };

    if (!user) {
        // If somehow landed here unauthenticated (in real app, a ProtectedRoute would handle this)
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="mb-4">You need to log in to view this page.</p>
                    <Button onClick={() => navigate("/login")}>Go to Login</Button>
                </div>
            </div>
        );
    }

    const SidebarButton = ({ id, label, icon: Icon }: { id: string, label: string, icon: any }) => (
        <button
            onClick={() => setActiveTab(id)}
            className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium transition-colors ${activeTab === id
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }`}
        >
            <Icon size={18} />
            {label}
        </button>
    );

    return (
        <>
            <Helmet>
                <title>My Account | TWILOOK</title>
                <meta name="description" content="Manage your TWILOOK account settings and profile." />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-slate-50">
                <Header />

                <main className="flex-1 pt-32 pb-16 px-6 lg:px-12 container mx-auto max-w-6xl">
                    <div className="mb-8">
                        <h1 className="font-display text-4xl font-medium tracking-tight">My Account</h1>
                        <p className="text-muted-foreground mt-2">Manage your profile information and preferences.</p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Sidebar */}
                        <aside className="w-full md:w-64 shrink-0">
                            <div className="bg-white border rounded-none shadow-sm overflow-hidden flex flex-col">
                                <SidebarButton id="personal" label="Personal Info" icon={UserIcon} />
                                <SidebarButton id="address" label="Addresses" icon={MapPin} />
                                <SidebarButton id="orders" label="Order History" icon={Package} />
                                <SidebarButton id="payment" label="Payment Methods" icon={CreditCard} />
                                <SidebarButton id="settings" label="Settings" icon={Settings} />
                            </div>
                        </aside>

                        {/* Main Content */}
                        <div className="flex-1">
                            <div className="bg-white border shadow-sm p-6 lg:p-8">

                                {activeTab === "personal" && (
                                    <div>
                                        <h2 className="text-xl font-medium mb-1">Personal Information</h2>
                                        <p className="text-sm text-muted-foreground mb-6">Update your basic profile details.</p>
                                        <Separator className="mb-8" />

                                        <form onSubmit={handleSave} className="space-y-6 max-w-xl">
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="fullName">Full Name</Label>
                                                    <Input id="fullName" value={formData.fullName} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">Phone Number</Label>
                                                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} />
                                                </div>
                                            </div>

                                            <div className="space-y-2">
                                                <Label htmlFor="email">Email Address</Label>
                                                <Input id="email" type="email" value={formData.email} onChange={handleChange} disabled className="bg-muted/50 cursor-not-allowed" />
                                                <p className="text-xs text-muted-foreground">Contact support to change your email address.</p>
                                            </div>

                                            <div className="pt-4">
                                                <Button type="submit" disabled={loading} className="w-full sm:w-auto px-8 bg-foreground text-background hover:bg-primary tracking-fashion">
                                                    {loading ? "SAVING..." : "SAVE CHANGES"}
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {activeTab === "address" && (
                                    <div>
                                        <h2 className="text-xl font-medium mb-1">Shipping Addresses</h2>
                                        <p className="text-sm text-muted-foreground mb-6">Manage your delivery locations.</p>
                                        <Separator className="mb-8" />

                                        <form onSubmit={handleSave} className="space-y-6 max-w-2xl">
                                            <div className="space-y-2">
                                                <Label htmlFor="streetAddress">Street Address</Label>
                                                <Input id="streetAddress" value={formData.streetAddress} onChange={handleChange} required />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                                <div className="space-y-2">
                                                    <Label htmlFor="city">City</Label>
                                                    <Input id="city" value={formData.city} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="state">State / Province</Label>
                                                    <Input id="state" value={formData.state} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="zipCode">ZIP / Postal Code</Label>
                                                    <Input id="zipCode" value={formData.zipCode} onChange={handleChange} required />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="country">Country</Label>
                                                    <Input id="country" value={formData.country} onChange={handleChange} required />
                                                </div>
                                            </div>

                                            <div className="pt-4">
                                                <Button type="submit" disabled={loading} className="w-full sm:w-auto px-8 bg-foreground text-background hover:bg-primary tracking-fashion">
                                                    {loading ? "SAVING..." : "UPDATE DEFAULT ADDRESS"}
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                )}

                                {activeTab === "orders" && (
                                    <div>
                                        <h2 className="text-xl font-medium mb-6">Order History</h2>
                                        <Separator className="mb-8" />
                                        <div className="text-center py-12 text-muted-foreground border border-dashed rounded-lg">
                                            <Package className="mx-auto mb-4 opacity-50" size={48} />
                                            <p>You haven't placed any orders yet.</p>
                                            <Button variant="outline" className="mt-4" onClick={() => navigate("/products")}>Start Shopping</Button>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "payment" && (
                                    <div>
                                        <h2 className="text-xl font-medium mb-6">Payment Methods</h2>
                                        <Separator className="mb-8" />
                                        <div className="text-center py-12 text-muted-foreground border border-dashed rounded-lg">
                                            <CreditCard className="mx-auto mb-4 opacity-50" size={48} />
                                            <p>No saved payment methods.</p>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "settings" && (
                                    <div>
                                        <h2 className="text-xl font-medium mb-6">Account Settings</h2>
                                        <Separator className="mb-8" />
                                        <div className="space-y-6 max-w-xl">
                                            <div className="space-y-2">
                                                <Label htmlFor="currentPassword">Current Password</Label>
                                                <Input id="currentPassword" type="password" placeholder="••••••••" />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="newPassword">New Password</Label>
                                                <Input id="newPassword" type="password" placeholder="••••••••" />
                                            </div>
                                            <Button variant="outline">Update Password</Button>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default Profile;

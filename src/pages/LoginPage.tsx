import { Label } from "../components/ui/Label";
import { Shield, Sword } from "lucide-react";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <div className="min-h-screen bg-background bg-mystic-pattern flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-border/50 bg-card/95 backdrop-blur">
        <CardHeader className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="p-3 bg-primary/20 rounded-full">
              <Shield className="h-10 w-10 text-primary" />
            </div>
          </div>
          <CardTitle className="text-3xl font-display text-gradient-gold">
            Aegis Vault
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Welcome back, adventurer
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="hero@realm.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-input border-border"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-foreground">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-input border-border"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              variant="mystic"
              //   disabled={isSubmitting}
            >
              <Sword className="mr-2 h-4 w-4" />
              Enter the Hoard
            </Button>
          </form>

          <div className="mt-6 text-center">
            <button
              type="button"
              //   onClick={() => setIsLogin(!isLogin)}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              New to the realm? Create an account
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;

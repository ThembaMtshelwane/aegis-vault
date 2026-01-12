import { Label } from "../components/ui/Label";
import { ArrowLeft, ScrollText, Shield } from "lucide-react";
import { Button } from "../components/ui/Button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card";
import { Input } from "../components/ui/Input";
import { Link, useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRegisterUserMutation } from "../store/features/auth/authApi.slice";
import type { ApiError } from "../types/error.types";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}
const SignUpPage = () => {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
      const res = await registerUser(data).unwrap();
      console.log("Registration successful", res);
      navigate("/shop");
    } catch (error) {
      console.log("error  ", error);
      setErrorMessage((error as ApiError).data.message);
      console.log((error as ApiError).data.message);
    }
  };

  return (
    <div className=" min-h-screen bg-background bg-mystic-pattern flex items-center justify-center p-4">
      <Card className="relative w-full max-w-md border-border/50 bg-card/95 backdrop-blur">
        <Link
          to="/"
          className="absolute top-5 left-5 block py-3 font-display text-sm tracking-wide text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft />
        </Link>
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
          {errorMessage && (
            <div className="mb-4 p-3 bg-red-100 text-red-800 rounded">
              {errorMessage}
            </div>
          )}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                First Name
              </Label>
              <Input
                {...register("firstName")}
                id="firstName"
                type="text"
                placeholder="John"
                className="bg-input border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Last Name
              </Label>
              <Input
                id="lastName"
                type="text"
                placeholder="Doe"
                {...register("lastName")}
                className="bg-input border-border"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="hero@realm.com"
                {...register("email")}
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
                {...register("password")}
                className="bg-input border-border"
              />
            </div>

            <Button
              type="submit"
              className="w-full"
              variant="mystic"
              disabled={isLoading}
            >
              <ScrollText className="mr-2 h-4 w-4" />
              Join the Guild
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Link
              to="/login"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              New to the realm? Create an account
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignUpPage;

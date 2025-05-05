'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoginSchema, loginSchema } from "@/schema/loginSchema"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useState } from "react"
import Cookies from "js-cookie"

export default function AuthForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  const [authError, setAuthError] = useState<string>("")

  const onSubmit = async (data: LoginSchema) => {
    setAuthError("") // Clear previous errors
    
    // Basic authentication check
    if (data.email === "admin@test.com" && data.password === "admin") {
      Cookies.set("user", JSON.stringify(data), {
        expires: 7,
        secure: true,
        sameSite: "strict",
      })
      // Add redirect
      window.location.href = "/dashboard"
    } else {
      setAuthError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-background text-foreground">
      <Card className="w-full max-w-md shadow-xl rounded-xl bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Auth Error Message */}
            {authError && (
              <p className="text-destructive text-sm text-center mb-4">
                {authError}
              </p>
            )}

            {/* Existing form fields */}
            <div>
              <Label htmlFor="email" className="mb-2">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Label htmlFor="password" className="mb-2">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-destructive text-sm mt-1">{errors.password.message}</p>
              )}
            </div>
            
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link
              href="/signup"
              className="underline-offset-4 hover:underline text-primary"
            >
              Sign Up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
"use client";

import * as z from "zod"
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

import { LoginSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form"

import CardWrapper from "@/components/auth/card-wrapper";
import { Button } from "@/components/ui/button";
import login from "@/actions/login";
import { SubmitButton } from "@/app/login/submit-button";

const LoginForm = ({
    searchParams,
}: {
    searchParams: { message: string };
}) => {

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    return (
        <CardWrapper
            headerLabel="Bienvenido"
            backButtonHref="/register"
            backButtonLabel="Aun no tienes un Cuenta?"
            showSocial
        >
            <Form {...form}>
                <form
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="jhonmacfee@example.com"
                                            type="email"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="******"
                                            type="password"
                                        />
                                    </FormControl>
                                    <Button
                                        size="sm"
                                        variant="link"
                                        asChild
                                        className="px-0 font-normal"
                                    >
                                        <Link href="/auth/reset">
                                            Cambiar contraseña?
                                        </Link>
                                    </Button>
                                </FormItem>
                            )}
                        />
                    </div>
                    {searchParams.message && (
                        <div className="text-sm font-medium text-destructive">
                            {searchParams.message}
                        </div>
                    )}
                    <SubmitButton
                        formAction={login}
                        className="w-full"
                        pendingText="Iniciando sesión..."
                    >
                        Login
                    </SubmitButton>
                </form>
            </Form>
        </CardWrapper>
    );
};
export default LoginForm;
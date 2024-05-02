"use client";

import * as z from "zod"
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import CardWrapper from "@/components/auth/card-wrapper";
import { Input } from "@/components/ui/input";
import { useState, useTransition } from "react";
import { SubmitButton } from "@/app/register/submit-button";
import SignUp from "@/actions/register";

const RegisterForm = ({
    searchParams,
}: {
    searchParams: { message: string };
}) => {

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        },
    });

    return (
        <CardWrapper
            headerLabel="Crear una Cuenta Nueva"
            backButtonHref="/login"
            backButtonLabel="Ya tienes un Cuenta?"
            showSocial
        >
            <Form {...form}>
                <form
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="jhonmacfee"
                                            type="name"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
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
                        formAction={SignUp}
                        className="w-full"
                        pendingText="Iniciando sesión..."
                    >
                        Registrarse
                    </SubmitButton>
                </form>
            </Form>
        </CardWrapper>
    );
};

export default RegisterForm;
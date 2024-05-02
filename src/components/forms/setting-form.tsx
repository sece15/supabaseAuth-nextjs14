"use client";

import * as z from "zod"
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { EditUserProfileSchema, ResetSchema } from "@/schemas";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Loader2 } from 'lucide-react'

import { Button } from "@/components/ui/button";
import FormError from "@/components/forms/form-error";
import FormSuccess from "@/components/forms/form-success";
import { updateUser } from "@/actions/update-user";

type Props = {
  user: any
}

const SettingForm = ({ user }: Props) => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof EditUserProfileSchema>>({
    mode: 'onChange',
    resolver: zodResolver(EditUserProfileSchema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
    },
  })
  // captura los valores del form , y los pasa al back 
  const onSubmit = (values: z.infer<typeof EditUserProfileSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      updateUser(values)
        .then((data) => {
          setError(data?.error);
          //TODO:Add when we add 2FA
          setSuccess(data?.success);
        });
    });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Nombre</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Name"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled={true}
                  placeholder="Email"
                  type="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormError message={error} />
        <FormSuccess message={success} />
        <Button
          type="submit"
          className="self-start hover:bg-[#2F006B] hover:text-white "
        >
          Guardar Información
        </Button>
      </form>
    </Form>
  );
};

export default SettingForm;
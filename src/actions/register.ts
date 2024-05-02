"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
export default async function SignUp(formData: FormData) {

    const origin = headers().get("origin");
    const data = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        password: formData.get('password') as string,
    }
    const supabase = createClient();
    const { error } = await supabase.auth.signUp({
        ...data,
        options: {
            emailRedirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        return redirect("/login?message=No se pudo autenticar el usuario");
    }

    return redirect("/login?message=Verifique el correo electrónico para continuar con el proceso de inicio de sesión");
};
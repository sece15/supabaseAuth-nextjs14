"use server"
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { Provider } from '@supabase/supabase-js'

export default async function Oauth(provider: Provider) {

    if (!provider) {
        return redirect('/login?message=No provider selected')
    }

    const origin = headers().get("origin");
    const supabase = createClient();

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: provider,
        options: {
            redirectTo: `${origin}/auth/callback`,
        },
    });

    if (error) {
        return redirect("/login?message=No se pudo autenticar el usuario");
    }

    return redirect(data.url)
};
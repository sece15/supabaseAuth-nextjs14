'use server'
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function SignIn(formData: FormData) {

    const data = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
    }
    // const email = formData.get("email") as string;
    // const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword(data);

    if (error) {
        return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/protected");
};
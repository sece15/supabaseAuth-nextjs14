"use client";
import { Provider } from "@supabase/supabase-js";
import GithubIcon from "../icons/github-icon";
import Oauth from "@/actions/oauth";
import { Button } from "@/components/ui/button";
import GoogleIcon from "../icons/google-icon";

type OAuthProvider = {
    name: Provider;
    displayName: string;
    icon?: JSX.Element;
};

const Social = () => {

    const oAuthProviders: OAuthProvider[] = [
        {
            name: "github",
            displayName: "GitHub",
            icon: <GithubIcon />,
        },
        {
            name: "google",
            displayName: "Google",
            icon: <GoogleIcon />,
        },
    ];
    return (
        <>
            {oAuthProviders.map((provider) => (
                <Button
                    className="w-full flex items-center justify-center gap-2 mx-1"
                    variant="outline"
                    key={provider.name}
                    onClick={async () => {
                        await Oauth(provider.name);
                    }}
                >
                    {provider.icon}
                    {provider.displayName}
                </Button>
            ))}
        </>
    );
};

export default Social;
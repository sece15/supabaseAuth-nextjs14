import Link from "next/link";
import RegisterForm from "@/components/forms/register-form";
import BackIcon from "@/components/icons/back-icon";

export default function Login({
    searchParams,
}: {
    searchParams: { message: string };
}) {

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
            <Link
                href="/"
                className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
            >
                <BackIcon />
                Back
            </Link>
            <RegisterForm searchParams={searchParams} />
        </div>
    );
}

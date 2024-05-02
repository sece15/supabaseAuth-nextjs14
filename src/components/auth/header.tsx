import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

const font = Poppins({
    subsets: ["latin"],
    weight: ["600"]
});

interface HeaderProps {
    label: string;
};

const Header = ({ label }: HeaderProps) => {
    return (
        <div className="flex flex-col justify-center gap-y-4 items-center w-full">
            <Link className={cn("text-3xl font-semibold", font.className)} href="/">
                <div className="flex justify-center text-center items-center mt-2">
                    <Image
                        src="/vercel.svg"
                        height={24}
                        width={24}
                        alt="Logo"
                    />
                </div> {/* Añadimos un margen superior a Auth */}
                <div className="text-center items-center mt-2">Fruti.</div> {/* Dividimos Tecse y Auth en diferentes elementos */}
            </Link>
            <p className="text-muted-foreground text-sm">
                {label}
            </p>
        </div>
    );
}

export default Header;
"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ReactNode } from "react";

interface BackButtonPriceProps {
    href: string;
    icon: ReactNode; // Ahora el icono será de tipo ReactNode
}

const BackIconButton = ({ href, icon }: BackButtonPriceProps) => {
    return (
        <Button
            variant="link"
            className="font-normal w-full"
            size="sm"
            asChild
        >
            <Link href={href}>
                {icon}
            </Link>
        </Button>
    );
}

export default BackIconButton;

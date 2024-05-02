"use client";

// import { FaUser } from "react-icons/fa";
// import { ExitIcon } from "@radix-ui/react-icons";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    Avatar,
    AvatarFallback,
    AvatarImage
} from "@/components/ui/avatar"
// import useCurrentUser from "@/hooks/use-current-user";
import { LogoutButton } from "@/components/auth/logout-button";

export const UserButton = () => {

    // const user = useCurrentUser();

    return (
        <DropdownMenu >
            <DropdownMenuTrigger className="outline-none">
                <Avatar>
                    {/* <AvatarImage src={user?.image || ""} /> */}
                    <AvatarFallback className="bg-cyan-400">
                        {/* <FaUser className="text-white" /> */}
                    </AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-40">
                <LogoutButton>
                    <DropdownMenuItem>
                        {/* <ExitIcon className="h-4 w-4 mr-2" /> */}
                        Salir
                    </DropdownMenuItem>
                </LogoutButton>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
import CardWrapper from "@/components/auth/card-wrapper";
import { AlertTriangle } from "lucide-react";

export const ErrorCard = () => {
    return (
        <CardWrapper
            headerLabel="Uppps!! Algo Salio Mal!"
            backButtonHref="/auth/login"
            backButtonLabel="Volver al Login"

        >
            <div className="w-full flex justify-center items-center">
                <AlertTriangle className="text-destructive" />
            </div>
        </CardWrapper>
    )
}
"use client";

import CardWrapper from "@/components/auth/card-wrapper";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { newVerification } from "@/actions/new-verification";
import FormError from "@/components/forms/form-error";
import FormSuccess from "@/components/forms/form-success";

const NewVerificationForm = () => {

    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    //USAMOS EL SEARCHPARAMS PARA SACAR EL TOKEN DE LOS PARAMETROS DE LA URL QUE ENVIAMOS EN SENDVERIFICATIONEMAIL
    const searchParams = useSearchParams();
    //GUARDAMOS EL TOKEN CONSEGUIDO EN SEARCHPARAMS
    const token = searchParams.get("token")

    const onSubmit = useCallback(() => {
        if (!token) {
            setError("Missing Token!!!");
            return;
        };

        newVerification(token)
            .then((data) => {
                setSuccess(data.successs);
                setError(data.error);
            })
            .catch(() => {
                setError("Something went wron!!!")
            })
    }, [token]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit])

    return (

        <CardWrapper
            headerLabel="Confimación de Email"
            backButtonLabel="Volver atrás"
            backButtonHref="/auth/login"
        >
            <div className="flex items-center w-full justify-center">
                {!success && !error && (
                    <BeatLoader />
                )}
                <FormError message={error} />
                <FormSuccess message={success} />
            </div>
        </CardWrapper>
    )
}
export default NewVerificationForm;
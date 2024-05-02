import { CheckCircle2Icon } from "lucide-react";

interface FormSuccessProps {
    message: string | undefined;

}

const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) {
        return null
    }
    return (
        <div className="flex bg-emerald-500/15  p-3 rounded-md items-center gap-x-2 text-sm text-emerald-500">
            <CheckCircle2Icon className="w-4 h-4" />
            <p>{message}</p>
        </div>
    );
}

export default FormSuccess;
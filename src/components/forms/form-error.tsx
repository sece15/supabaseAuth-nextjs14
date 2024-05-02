import { AlertTriangleIcon } from "lucide-react";

interface FormErrorProps {
    message: string | undefined;

}
const FormError = ({ message }: FormErrorProps) => {
    if (!message) {
        return null
    }
    return (
        <div className="flex bg-destructive/15 p-3 rounded-md items-center gap-x-2 text-sm text-destructive">
            <AlertTriangleIcon className="w-4 h-4" />
            <p>{message}</p>
        </div>
    );
}

export default FormError;
"use client";

import { useFormStatus } from 'react-dom';
// import "../../../_style/_ui/AuthBtn/_auth.btn.scss"

const AuthBtn = ({ btnText, btnType, className }: { btnText: string, btnType?: "button" | "submit" | "reset" | undefined, className?: string }) => {
    const { pending } = useFormStatus();

    return (
        <button type={btnType ? btnType : "button"} className={className} disabled={pending}>{pending ? "Обрабатывается..." : btnText}</button>
    )
}

export default AuthBtn
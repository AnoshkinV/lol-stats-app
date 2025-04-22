import { css } from "@emotion/css";
import { ReactNode } from "react";

interface PageWrapperProps {
    children: ReactNode
}

export const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
            <div className={css({
                width: "70%",
                height: "100%",
                padding: "48px 68px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 20
            })}>
                {children}
            </div>
    )
}

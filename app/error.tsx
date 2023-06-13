'use client';

import React, { useEffect } from "react";

import EmptyState from "@/app/components/EmptyState";

interface ErrorStateProps {
    error: Error
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <EmptyState
            title="О нееееет"
            subtitle="Что-то пошло не так!"
        />
    );
}

export default ErrorState;
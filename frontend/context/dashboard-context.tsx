"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface IUploadedFile {
    url: string;
}

type NullableUploadedFile = IUploadedFile | null;
type ButtonState = "ready" | "loading" | "success";

export interface IDashboardContext {
    medicalRecord: NullableUploadedFile;
    setMedicalRecord: (file: NullableUploadedFile) => void;
    guidelinesFile: NullableUploadedFile;
    setGuidelinesFile: (file: NullableUploadedFile) => void;
    medicalProgress: ButtonState;
	setMedicalProgress: (state: ButtonState) => void;
    guidelinesProgress: ButtonState;
	setGuidelinesProgress: (state: ButtonState) => void;
}

const INITIAL_STATE: IDashboardContext = {
    medicalRecord: null,
    setMedicalRecord: () => {},
    guidelinesFile: null,
    setGuidelinesFile: () => {},
    medicalProgress: "ready",
    setMedicalProgress: () => {},
    guidelinesProgress: "ready",
    setGuidelinesProgress: () => {}
};

export const DashboardContext = createContext(INITIAL_STATE);

export function DashboardProvider({ children }: { children: ReactNode }) { 
    const [medicalRecord, setMedicalRecord] = useState<IUploadedFile | null>(null);
    const [guidelinesFile, setGuidelinesFile] = useState<IUploadedFile | null>(null);
    const [medicalProgress, setMedicalProgress] = useState<ButtonState>("ready");
    const [guidelinesProgress, setGuidelinesProgress] = useState<ButtonState>("ready");

    const value = {
		medicalRecord, setMedicalRecord,
		guidelinesFile, setGuidelinesFile,
		medicalProgress, setMedicalProgress,
		guidelinesProgress, setGuidelinesProgress,
	}; 

    return (
        <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>
    );
}

export function useDashboard() { 
    const context = useContext(DashboardContext);
    return context;
}


"use client";

import { ProgressButton } from "@/components/progress-button";
import ProgressSpinner from "@/components/progress-spinner";
import { useDashboard } from "@/context/dashboard-context";
import { FaCheck } from "react-icons/fa";

export default function MedicalRecordUpload() {
    const {
		medicalRecord,
		setMedicalRecord,
		medicalProgress,
		setMedicalProgress 
	} = useDashboard();

    const handleClick = () => {
        setMedicalProgress("uploading");
        setTimeout(() => {
            setMedicalRecord({ url: "/assets/medical-record.pdf" });
            setMedicalProgress("success");
        }, 3000);
    }

    return(
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <ProgressButton
                state={medicalProgress}
                onClick={handleClick}
                stateClasses={{
                    "ready": "bg-blue-500 border-blue-500 text-white"
                }}
            >
                {medicalProgress == "ready" && (
                    <span>Simulate Medical Record Upload</span>
                )}

                {medicalProgress == "uploading" && (
                    <span className="text-grey-600 flex flex-row gap-1 items-center">
                        <ProgressSpinner />
                        <span>Uploading Medical Record...</span>
                    </span>
                )}
                  
                {medicalProgress == "success" && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Medical Record Uploaded</span>
                    </span>
                )}
            </ProgressButton>
        </div>
    )
}

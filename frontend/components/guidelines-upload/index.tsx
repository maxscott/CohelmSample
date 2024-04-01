"use client";

import { ProgressButton }from "@/components/progress-button";
import ProgressSpinner from "@/components/progress-spinner";
import { useDashboard} from "@/context/dashboard-context";
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify';

export default function GuidelinesUpload() {
    const {
		guidelinesFile,
		setGuidelinesFile,
		guidelinesProgress,
		setGuidelinesProgress,
		medicalProgress,
	} = useDashboard();

    const handleClick = () => {
		if (medicalProgress !== "success") {
			toast.error("Please upload the medical file first.");
			return;
		}

        setGuidelinesProgress("uploading");

        setTimeout(() => {
            setGuidelinesFile({ url: "/assets/guidelines.pdf" });
            setGuidelinesProgress("success");
        }, 3000);
    }

    return(
        <div className="w-1/2 h-64 border border-4 border-gray-200 border-dashed rounded flex flex-row items-center justify-center">
            <ProgressButton
                state={guidelinesProgress}
                onClick={handleClick}
				stateClasses={{ "ready": "bg-orange-500 border-orange-500 text-white" }}
            >
                {guidelinesProgress === "ready" && (<span>Simulate Guidelines Upload</span>)}

                {guidelinesProgress == "uploading" && (
                    <span className="text-grey-600 flex flex-row gap-1 items-center">
                        <ProgressSpinner />
                        <span>Uploading Guidelines...</span>
                    </span>
                )}

                {guidelinesProgress === "success" && (
                    <span className="text-green-600 flex flex-row gap-1 items-center">
                        <FaCheck />
                        <span>Guidelines File Uploaded</span>
                    </span>
                )}
            </ProgressButton>
        </div>
    )
}

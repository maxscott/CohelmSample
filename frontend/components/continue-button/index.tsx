"use client";

import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useDashboard } from "@/context/dashboard-context";
import CaseService from "@/api/case-service";

const caseService = new CaseService();

export default function ContinueButton() {
	const router = useRouter();
	const { guidelinesProgress, medicalProgress } = useDashboard();

	const canContinue = 
		guidelinesProgress === "success" &&
		medicalProgress === "success";

	const handleContinue = async () => {
		if (!canContinue) return;

		const caseBody = await caseService.createCase("submitted");

		router.push(`/dashboard/case/${caseBody.case_id}`);
	}

	const conditionalStyles = canContinue ?
		"bg-green-600 text-white" :
		"bg-gray-300 text-gray-500";

	return <button
		disabled={!canContinue}
		className={classNames("font-medium py-2 px-4 rounded", conditionalStyles)}
		onClick={handleContinue}
	>
		{canContinue ? "Continue" : "Complete all steps to continue"}
	</button>;
}

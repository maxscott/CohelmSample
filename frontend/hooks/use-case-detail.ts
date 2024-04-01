import { useCallback, useEffect, useState } from "react";
import { CaseDetail as CaseDetailType } from "@/types";
import CaseService from "@/api/case-service";

const caseService = new CaseService();

export default function useCaseDetail(caseId: string) {
	const [caseDetail, setCaseDetail] = useState<CaseDetailType | null>(null)
	const [caseError, setCaseError] = useState<string | null>(null);

	const getCaseDetail = useCallback(async () => {
		try {
			const caseDetail = await caseService.getCaseById(caseId);

			if (!caseDetail) {
				throw new Error("Case not found!");
			}

			setCaseDetail(caseDetail);
		} catch (e) {
			if (e instanceof Error) {
				setCaseError(e.message);
			} else {
				setCaseError("An unknown error occurred while fetching the case");
			}
		}
	}, [caseId]);

	useEffect(() => {
		getCaseDetail();
	}, [getCaseDetail])

	return { caseDetail, caseError };
}

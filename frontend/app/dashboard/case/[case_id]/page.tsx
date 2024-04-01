import CaseDetail from "@/components/case-detail";
import {Suspense} from "react"


export default function CaseRoot() {
	return (
		<Suspense fallback={<div>Loading Page...</div>}>
			<CaseDetail />
		</Suspense>
	);
}

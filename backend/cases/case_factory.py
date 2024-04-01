from datetime import datetime


class CaseFactory:
    def create_submitted_case(self, case_id):
        return {
            "case_id": case_id,
            "created_at": datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
            "status": "submitted",
            "procedure_name": "Facet Joint Injection",
            "cpt_codes": [
                "64490",
                "64491",
                "64492",
                "64493",
                "64494",
                "64495"
                ],
            "summary": None,
            "is_met": False,
            "is_complete": False,
            "steps": [],
        }

from uuid import uuid4 as uuid

from cases.case_factory import CaseFactory


class CaseRepository:
    def __init__(self, case_factory=CaseFactory()):
        self.case_factory = case_factory
        self.cases = []

    def create_case(self, status: str | None = "submitted"):
        case = self.case_factory.create_submitted_case(str(uuid()))
        self.cases.append(case)
        return case

    def add_case(self, case):
        self.cases.append(case)

    def get_cases(self):
        return self.cases

    def get_case(self, case_id):
        for case in self.cases:
            if case["case_id"] == case_id:
                return case
        return None

    def update_case(self, case):
        for i, c in enumerate(self.cases):
            if c["case_id"] == case["case_id"]:
                self.cases[i] = case
                return case
        return None

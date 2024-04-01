import unittest

from cases.case_repository import CaseRepository


class TestCaseRepository(unittest.TestCase):
    def setUp(self):
        self.repo = CaseRepository()

    def test_get_case(self):
        case = self.repo.create_case("status1")
        self.assertEqual(self.repo.get_case(case["case_id"]), case)

    def test_get_case_not_found(self):
        self.assertIsNone(self.repo.get_case("not_real_id"))

    def test_get_cases(self):
        case1 = self.repo.create_case("status1")
        case2 = self.repo.create_case("status2")
        self.assertEqual(self.repo.get_cases(), [case1, case2])

    def test_update_case(self):
        case = self.repo.create_case("id1")
        case["status"] = "status2"
        self.assertEqual(self.repo.update_case(case), case)
        self.assertEqual(self.repo.get_case(case["case_id"]), case)

import unittest

from fastapi.testclient import TestClient

from app import create_container


class TestCaseController(unittest.TestCase):
    def setUp(self):
        container = create_container()
        self.client = TestClient(container["app"])
        self.repo = container["case_repository"]

    def test_get_case(self):
        case = self.repo.create_case("submitted")

        response = self.client.get(f"/api/cases/{case['case_id']}")
        assert response.status_code == 200
        assert response.json() == case

    def test_get_cases(self):
        cases = [self.repo.create_case("submitted") for _ in range(5)]

        response = self.client.get("/api/cases")
        assert response.status_code == 200
        assert response.json() == cases

    def test_create_case(self):
        case_data = {"status": "submitted"}
        response = self.client.post("/api/cases", json=case_data)
        assert response.status_code == 200
        assert response.json()["status"] == case_data["status"]

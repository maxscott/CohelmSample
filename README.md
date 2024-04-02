# Cohelm Takehome: NextJS + Python (FastAPI)

## Loom Videos
- [App Overview + Backend Walkthrough](https://www.loom.com/share/fd0c990a56cd46b2a3d3061d4673dea0?sid=fcda5f1c-9f28-4c84-a99c-f2c0b882e0a4)
- [Frontend Walkthough](https://www.loom.com/share/bdff2f4d3824457abbeb4a3c544dc5cd?sid=5383268b-5a7c-476a-ae03-920cc07bce07)


## Running the NextJS App
```bash
cd frontend
npm install
npm run dev
```

## Running the Python App
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```
This starts the REST API on port 8000.

## Running the Python Tests (example)
```bash
cd backend
python -m unittest discover -s tests
```
This starts the NextJS app on port 3000 (which expects the REST API running on port 8000).

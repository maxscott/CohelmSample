# Cohelm Takehome: NextJS + Python (FastAPI)

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

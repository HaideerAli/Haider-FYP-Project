FROM python:3.12-slim
WORKDIR /app
COPY backend/requirements.txt .
RUN apt-get update && apt-get install -y curl && rm -rf /var/lib/apt/lists/*
RUN pip install --no-cache-dir -r requirements.txt
COPY backend ./backend
EXPOSE 8000
# Use the PORT env var provided by Render (fallback to 8000 locally)
CMD ["sh", "-c", "uvicorn backend.main:app --host 0.0.0.0 --port ${PORT:-8000}"]

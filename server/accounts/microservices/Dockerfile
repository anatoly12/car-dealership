# Dockerfile
FROM python:3.10-slim

WORKDIR /app

COPY sentiment_analyzer.py .
COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 5000

CMD ["python", "sentiment_analyzer.py"]
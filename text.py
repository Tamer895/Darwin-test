from transformers import pipeline

# Загрузка модели
generator = pipeline("text-generation", model="gpt2")

# Генерация текста
result = generator("Привет! Как твои дела?", max_length=50, num_return_sequences=1)

# Вывод результата
print(result[0]['generated_text'])

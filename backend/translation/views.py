from django.http import JsonResponse
import os
from django.conf import settings

def translations(request, lang_code, ns):
    translations_dir = os.path.join(settings.BASE_DIR, 'translation_files')
    file_path = os.path.join(translations_dir, f'{lang_code}', f'{ns}.json')

    if os.path.exists(file_path):
        with open(file_path, 'r', encoding='utf-8') as f:
            data = f.read()
            return JsonResponse(data, safe=False)
    else:
        return JsonResponse({'error': 'Translations not found'}, status=404)

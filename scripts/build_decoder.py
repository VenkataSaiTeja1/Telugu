import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

# Initial known mapping table deduced from Telugu literature & grammar:
GLYPH_MAP = {
    # Independent vowels / syllables
    'Ѓ': 'ఈ',
    'Ǒ': 'భో',
    'ǐ': 'బో',
    'Җ': 'భూ',
    'Ļ': 'దీ',
    'ƅ': 'నే',
    'œ': 'చె',
    'й': 'గు',
    'з': 'కు',
    'ы': 'పు',
    'ц': 'తు',
    'ü': 'రా',
    'ú': 'మా',
    'Ā': 'వా',
    'Ĥ': 'వి',
    'Ć': 'కి',
    'Đ': 'టి',
    'Ē': 'డి',
    'ĕ': 'తి',
    'ė': 'ది',
    'ę': 'ని',
    'ъ': 'ను',
    'у': 'డు',
    'я': 'ము',
    'ѕ': 'వు',
    'ѓ': 'లు',
    'ğ': 'యి',
    'Ġ': 'రీ',
    'ħ': 'సీ',
    'ä': 'గా',
    'â': 'కా',
    'ó': 'దా',
    'ô': 'ధా',
    'Ę': 'ధి',
    'ł': 'మీ',
    'ё': 'రు',
    'э': 'బు',
    'ѐ': 'యు',
    'ʛ': 'ప్ర',
    'ð': 'ణా',
    'ƃ': 'దే',
    'Ź': 'జే',
    'с': 'టు',
    'Ĩ': 'హి',
    'ž': 'డే',
    'č': 'జిం',
    'ҕ': 'పూ',
    'ĥ': 'శి',
    'þ': 'లా',
    'Ǎ': 'నో',
    'Ʃ': 'నొ',
    'Ī': 'కీ',
    'ǖ': 'లో',
    'Ƚ': 'తి',   # or dependent marker
    'ĆȽ': 'క్తి',
    'ȼ': 'ర్ణ',
    'రȱ': 'ర్ఘ',
    'తɌ': 'త్వ',
    'రɆ': 'ర్మ',
    'õɁ': 'న్నా',
    'šɁ': 'న్నె',
    'ɇ': '్య',
}

def decode_text(text):
    if not text:
        return text
    res = text
    # First replace multi-character sequences
    for k in sorted(GLYPH_MAP.keys(), key=lambda x: -len(x)):
        if len(k) > 1:
            res = res.replace(k, GLYPH_MAP[k])
    # Then single characters
    for k in sorted(GLYPH_MAP.keys(), key=lambda x: -len(x)):
        if len(k) == 1:
            res = res.replace(k, GLYPH_MAP[k])
    return res

if __name__ == '__main__':
    with open('questions_raw.json', 'r', encoding='utf-8') as f:
        questions = json.load(f)
    
    # Test on first 5 questions
    for q in questions[:5]:
        print(f"--- Q{q['id']} ---")
        print("ORIGINAL STEM:\n", q['stem'])
        print("DECODED STEM:\n", decode_text(q['stem']))
        print("OPTIONS:")
        for opt in q['options']:
            print(f"  {opt['number']}: {decode_text(opt['text'])}")
        print("CORRECT:", q['correctOption'], decode_text(q['correctText']))

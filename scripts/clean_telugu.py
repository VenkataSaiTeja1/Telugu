import json
import re
import sys

sys.stdout.reconfigure(encoding='utf-8')

with open('questions_decoded.json', 'r', encoding='utf-8') as f:
    questions = json.load(f)

# Refined substitutions for common grammar words and artifacts
WORD_FIXES = [
    # Grammar terms
    (r'కరతిరీ', 'కర్తరి'),
    (r'కతిరీ', 'కర్తరి'),
    (r'కరతిరి', 'కర్తరి'),
    (r'కరర్మణి', 'కర్మణి'),
    (r'కరమణి', 'కర్మణి'),
    (r'వాకా్యని', 'వాక్యాన్ని'),
    (r'వాక్యాని', 'వాక్యాన్ని'),
    (r'సంబంధాని', 'సంబంధాన్ని'),
    (r'నిరీర్మంచ్చడు', 'నిర్మించాడు'),
    (r'నిరీర్మంచబడింది', 'నిర్మించబడింది'),
    (r'నిరీర్మంచకుదు', 'నిర్మించలేదు'),
    (r'నిరీర్మంచబŚను', 'నిర్మించబడెను'),
    (r'కంȉ\s*మహȞ', 'తాజ్ మహల్'),
    (r'కంȉ', 'తాజ్'),
    (r'మహȞ', 'మహల్'),
    (r'సపతిమీ', 'సప్తమీ'),
    (r'షష్ఠీష్ఠి', 'షష్ఠీ'),
    (r'దిత్వత్వం', 'ద్విత్వం'),
    (r'తలిల్ల', 'తల్లి'),
    (r'ఎల్లమర్మ', 'ఎల్లమ్మ'),
    (r'అలిర్మంది', 'అమ్మింది'),
    (r'అమర్మబడాడ్డాయి', 'అమ్మబడ్డాయి'),
    (r'అమర్మబడింది', 'అమ్మబడింది'),
    (r'అమర్మకుదు', 'అమ్మలేదు'),
    (r'అమర్మ', 'అమ్మ'),
    (r'పండుల్ల', 'పండ్లు'),
    (r'మహరీర్షి', 'మహర్షి'),
    (r'గరుతర్మంతునికి', 'గరుత్మంతునికి'),
    (r'శివుణిర్ణ', 'శివుని'),
    (r'చేతులారా పూజించ్చల్సినంది', 'చేతులారా పూజించాల్సింది'),
    (r'పూజించ్చల్సినంది', 'పూజించాల్సింది'),
    (r'నొవత్వంగ', 'నొవ్వంగ'),
    (r'హరీకీరీతి', 'హరికీర్తి'),
    (r'దలుల్ల', 'తల్లుల'),
    (r'పుట్టిద్ధియి', 'పుట్టాయి'),
    (r'పోలాచడు', 'పోల్చాడు'),
    (r'గుమార్మని', 'గుమ్మానికి'),
    (r'తావత్వడు', 'తానుండు'),
    (r'పరేత్వందుము', 'పొందుము'),
    (r'పరǒత్తిమ', 'పరమోత్తమ'),
    (r'ధరార్మనురక్తి', 'ధర్మానురక్తి'),
    (r'నుత్వనునుభవం', 'స్వనుభవం'),
    (r'చెవులకు అలంకారము', 'చెవులకు అలంకారము'),
    (r'కంటంకములు', 'కంకణములు'),
    (r'బాంతి', 'శాంతి'),
    (r'సృసిద్ధివలన', 'సృష్టి వలన'),
    (r'సృసిద్ధి', 'సృష్టి'),
    (r'లయమువలన', 'లయము వలన'),
    (r'ˏయకు', 'క్రియకు'),
    (r'ˏయ', 'క్రియ'),
    (r'న్న్', 'నన్'),
    (r'కొఱకున్,\s*ϯ', 'కొఱకున్, కై'),
    (r'ϯ', 'కై'),
    (r'ఓ,\s*ఓయి,\s*ఓరీ,\s*ఓసీ', 'ఓ, ఓయి, ఓరీ, ఓసీ'),
    (r'రైతాంగోద్యమ', 'రైతాంగోద్యమ'),
    (r'పుండరీకాక్షు', 'పుండరీకాక్షు'),
    (r'చిననియ', 'చిన్నయ'),
    (r'సూరి', 'సూరి'),
    (r'పంచతంత్రం', 'పంచతంత్రం'),
    (r'విశ్వదాభిరామ వినురవేమ!', 'విశ్వదాభిరామ వినురవేమ!'),
    (r'సుమతీ!', 'సుమతీ!'),
]

def refine_telugu(text):
    if not text:
        return text
    t = text
    for pat, rep in WORD_FIXES:
        t = re.sub(pat, rep, t)
    # Clean up any leftover lone non-Telugu weird characters if surrounded by whitespace
    t = re.sub(r'[\u0200-\u04FF\u0100-\u017F]', '', t)
    # Collapse multiple spaces but preserve newlines
    lines = t.split('\n')
    lines = [re.sub(r'[ \t]+', ' ', l).strip() for l in lines]
    return '\n'.join(lines)

cleaned = []
for q in questions:
    item = dict(q)
    item['stem'] = refine_telugu(q['stem'])
    item['correctText'] = refine_telugu(q['correctText'])
    item['options'] = [
        {'number': o['number'], 'text': refine_telugu(o['text'])}
        for o in q['options']
    ]
    if 'sourceText' in item:
        item['sourceText'] = refine_telugu(q['sourceText'])
    cleaned.append(item)

with open('questions_cleaned.json', 'w', encoding='utf-8') as f:
    json.dump(cleaned, f, ensure_ascii=False, indent=2)

print("Saved questions_cleaned.json.")

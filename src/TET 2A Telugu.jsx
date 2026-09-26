import React, { useMemo, useState, useEffect } from "react";

// TET 2A Telugu — source-derived question bank.
// Question text/options are preserved from the PDF text extraction without rephrasing.
// Source anomalies are retained: question 92 is absent; printed 59 and 174 occur twice.

export const TOPICS = [
  {
    "id": 1,
    "name": "పద్య అవగాహన / పద్యార్థం",
    "questionCount": 42
  },
  {
    "id": 2,
    "name": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "questionCount": 14
  },
  {
    "id": 3,
    "name": "తెలుగు సాహిత్య అవగాహన",
    "questionCount": 24
  },
  {
    "id": 4,
    "name": "కవులు, రచయితలు మరియు రచనలు",
    "questionCount": 10
  },
  {
    "id": 5,
    "name": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "questionCount": 59
  },
  {
    "id": 6,
    "name": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "questionCount": 20
  },
  {
    "id": 7,
    "name": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "questionCount": 60
  },
  {
    "id": 8,
    "name": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "questionCount": 30
  },
  {
    "id": 9,
    "name": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "questionCount": 39
  },
  {
    "id": 10,
    "name": "పదార్థాలు మరియు పర్యాయపదాలు",
    "questionCount": 21
  },
  {
    "id": 11,
    "name": "పర్యాయపదాలు",
    "questionCount": 10
  },
  {
    "id": 12,
    "name": "నానార్థాలు",
    "questionCount": 20
  },
  {
    "id": 13,
    "name": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "questionCount": 30
  },
  {
    "id": 14,
    "name": "ప్రకృతి – వికృతులు",
    "questionCount": 20
  },
  {
    "id": 15,
    "name": "జాతీయాలు",
    "questionCount": 20
  },
  {
    "id": 16,
    "name": "సామెతలు",
    "questionCount": 30
  },
  {
    "id": 17,
    "name": "పొడుపుకథలు / పదబంధాలు",
    "questionCount": 20
  },
  {
    "id": 18,
    "name": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "questionCount": 20
  },
  {
    "id": 19,
    "name": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "questionCount": 10
  },
  {
    "id": 20,
    "name": "సంధులు",
    "questionCount": 30
  },
  {
    "id": 21,
    "name": "సమాసాలు",
    "questionCount": 18
  },
  {
    "id": 22,
    "name": "ఛందస్సు",
    "questionCount": 22
  },
  {
    "id": 23,
    "name": "అలంకారాలు",
    "questionCount": 20
  },
  {
    "id": 24,
    "name": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "questionCount": 10
  },
  {
    "id": 25,
    "name": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "questionCount": 9
  },
  {
    "id": 26,
    "name": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "questionCount": 21
  }
];

export const QUESTION_BANK = [
  {
    "id": 1,
    "printedNumber": 1,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "1. \nఅమёఁŕĤ āసɓяనఁ йండలяనఁ äш \n \nవలయяన Ʃపɂ ĻĤŷ ŬలѐఁøĔ \n \nѐёదûфɇల Ɗъ పǔపâర \n \nకలన üĔంм గంధంэ వలనఁ äш \n \nЃ పదɇం ఆôరంä œѕలз అలంâరя",
    "options": [
      {
        "number": 1,
        "text": "āసɓʦవణం"
      },
      {
        "number": 2,
        "text": "зండలяѓ"
      },
      {
        "number": 3,
        "text": "ñటంకяѓ"
      },
      {
        "number": 4,
        "text": "కవచяѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "āసɓʦవణం",
    "difficulty": "Not identified in source",
    "sourceText": "1. \nఅమёఁŕĤ āసɓяనఁ йండలяనఁ äш \n \nవలయяన Ʃపɂ ĻĤŷ ŬలѐఁøĔ \n \nѐёదûфɇల Ɗъ పǔపâర \n \nకలన üĔంм గంధంэ వలనఁ äш \n \nЃ పదɇం ఆôరంä œѕలз అలంâరя \n \n1) \nāసɓʦవణం \n \n2) \nзండలяѓ \n \n3) \nñటంకяѓ \n \n4) \nకవచяѓ"
  },
  {
    "id": 2,
    "printedNumber": 2,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "2. \nŷцþరంగ ĥѕę ҕčంపžę, \n \nǍё ƩవɌంగ హĠĪĠȽ ъуవžę \n \nదయѐ సతɇంэ ǖъä దలపžę  \n \nగѓగ ƅĐĆ దѓɊల కуы Źс \n \n \nЃ పదɇం ఆôరంä ŷцþü ғčంçĢɏంė",
    "options": [
      {
        "number": 1,
        "text": "హĠę"
      },
      {
        "number": 2,
        "text": "తĢɊę"
      },
      {
        "number": 3,
        "text": "ĥѕĔȼ"
      },
      {
        "number": 4,
        "text": "తం˛ę"
      }
    ],
    "correctOption": 3,
    "correctText": "ĥѕĔȼ",
    "difficulty": "Not identified in source",
    "sourceText": "2. \nŷцþరంగ ĥѕę ҕčంపžę, \n \nǍё ƩవɌంగ హĠĪĠȽ ъуవžę \n \nదయѐ సతɇంэ ǖъä దలపžę  \n \nగѓగ ƅĐĆ దѓɊల కуы Źс \n \n \nЃ పదɇం ఆôరంä ŷцþü ғčంçĢɏంė \n \n1) \nహĠę \n \n2) \nతĢɊę \n \n3) \nĥѕĔȼ \n \n4) \nతం˛ę"
  },
  {
    "id": 3,
    "printedNumber": 3,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "3. \nపరĨతя Ɠѐ šవɌу \n \nపరమ Ĩцండйъ Җతపంచకяనзం \n \nబరĨతŦ పరమధరɆя \n \nపరĨцనз šшё Ǝш పƌɌంшяī! \nЃ పదɇంǖ పరǒతȽమ ధరɆం",
    "options": [
      {
        "number": 1,
        "text": "Җతదయ"
      },
      {
        "number": 2,
        "text": "పరĨతя"
      },
      {
        "number": 3,
        "text": "ధüɆъరĆȽ"
      },
      {
        "number": 4,
        "text": "ŋɌûъభవం"
      }
    ],
    "correctOption": 2,
    "correctText": "పరĨతя",
    "difficulty": "Not identified in source",
    "sourceText": "3. \nపరĨతя Ɠѐ šవɌу \n \nపరమ Ĩцండйъ Җతపంచకяనзం \n \nబరĨతŦ పరమధరɆя \n \nపరĨцనз šшё Ǝш పƌɌంшяī! \nЃ పదɇంǖ పరǒతȽమ ధరɆం \n1) \nҖతదయ \n2) \nపరĨతя \n \n3) \nధüɆъరĆȽ \n \n4) \nŋɌûъభవం"
  },
  {
    "id": 4,
    "printedNumber": 4,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "4. \nఅకȮ తĢɊ œŪɊ þతɆజ ŧĆȮన \n \nöъ ŢకȮఁ జనш పదɆనయన! \n \nపరమǓĈϯన బĢĞę ęంˠయ \n \nʭమ మĘకľడఁ గѓగఁ Źѐ \n \nЃ పదɇం ఆôరంä పరమǓйలϯన తపɂęė",
    "options": [
      {
        "number": 1,
        "text": "ఇంˠయ øధ"
      },
      {
        "number": 2,
        "text": "ఇంˠయబలం"
      },
      {
        "number": 3,
        "text": "Ǜదర ͏మ"
      },
      {
        "number": 4,
        "text": "јцల ľడ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఇంˠయ øధ",
    "difficulty": "Not identified in source",
    "sourceText": "4. \nఅకȮ తĢɊ œŪɊ þతɆజ ŧĆȮన \n \nöъ ŢకȮఁ జనш పదɆనయన! \n \nపరమǓĈϯన బĢĞę ęంˠయ \n \nʭమ మĘకľడఁ గѓగఁ Źѐ \n \nЃ పదɇం ఆôరంä పరమǓйలϯన తపɂęė \n \n1) \nఇంˠయ øధ \n \n2) \nఇంˠయబలం \n \n3) \nǛదర ͏మ \n \n4) \nјцల ľడ"
  },
  {
    "id": 5,
    "printedNumber": 5,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "5. \nóɌరబంధяనз దѓыѓ గĒయѓ \n \nవŪš ǍĐƖӐగల ęయцѓ \n \nధరɆŦġఁĈ పѓక ధъɇǪ юĤǖన \n \nĤశɌóĝüమ ĤъరƐమ! \n \n \nЃ పదɇంǖ йúɆęɁ Ļęǉ ǎþȳу",
    "options": [
      {
        "number": 1,
        "text": "తѓыѓ"
      },
      {
        "number": 2,
        "text": "Ǎё"
      },
      {
        "number": 3,
        "text": "юĤ"
      },
      {
        "number": 4,
        "text": "గĒయѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ǎё",
    "difficulty": "Not identified in source",
    "sourceText": "5. \nóɌరబంధяనз దѓыѓ గĒయѓ \n \nవŪš ǍĐƖӐగల ęయцѓ \n \nధరɆŦġఁĈ పѓక ధъɇǪ юĤǖన \n \nĤశɌóĝüమ ĤъరƐమ! \n \n \nЃ పదɇంǖ йúɆęɁ Ļęǉ ǎþȳу \n1) \nతѓыѓ \n2) \nǍё \n \n3) \nюĤ \n \n4) \nగĒయѓ"
  },
  {
    "id": 6,
    "printedNumber": 6,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "6. \nపంу వలనఁ эŘȸఁ బరగ ʛపంచя \n \nపంу వలనఁ эŘȸ పరя ęహя \n \nపంу ƊŪġంŐ ʝĄɊшఁĒలǖన \n \nĤశɌóĝüమ ĤъరƐమ! \n \n \nЃ పదɇం ఆôరంä ఇహపüѓ Ļęవలన ыìȸğ",
    "options": [
      {
        "number": 1,
        "text": "āంĕ వలన"
      },
      {
        "number": 2,
        "text": "సృĦȸవలన"
      },
      {
        "number": 3,
        "text": "పంу వలన"
      },
      {
        "number": 4,
        "text": "లయяవలన"
      }
    ],
    "correctOption": 3,
    "correctText": "పంу వలన",
    "difficulty": "Not identified in source",
    "sourceText": "6. \nపంу వలనఁ эŘȸఁ బరగ ʛపంచя \n \nపంу వలనఁ эŘȸ పరя ęహя \n \nపంу ƊŪġంŐ ʝĄɊшఁĒలǖన \n \nĤశɌóĝüమ ĤъరƐమ! \n \n \nЃ పదɇం ఆôరంä ఇహపüѓ Ļęవలన ыìȸğ \n1) \nāంĕ వలన \n2) \nసృĦȸవలన \n \n3) \nపంу వలన \n \n4) \nలయяవలన"
  },
  {
    "id": 7,
    "printedNumber": 7,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "7. \nతలъంу Ĥషя ఫĔĆę  \n \nŬలయంä ǋకъంу వృĥȳకяనзȕ \n \nతలǉక యనక ѐంуъ \n \nఖѓనз ęѓŬలɊ Ĥషя గదü јమĹ! \n \nపదɇం ఆôరంä ęѓŬలɊ Ĥషం కలĀу",
    "options": [
      {
        "number": 1,
        "text": "వృĥȳకం"
      },
      {
        "number": 2,
        "text": "ఫĔ"
      },
      {
        "number": 3,
        "text": "ఖйу"
      },
      {
        "number": 4,
        "text": "ఖѓу"
      }
    ],
    "correctOption": 4,
    "correctText": "ఖѓу",
    "difficulty": "Not identified in source",
    "sourceText": "7. \nతలъంу Ĥషя ఫĔĆę  \n \nŬలయంä ǋకъంу వృĥȳకяనзȕ \n \nతలǉక యనక ѐంуъ \n \nఖѓనз ęѓŬలɊ Ĥషя గదü јమĹ! \n \nపదɇం ఆôరంä ęѓŬలɊ Ĥషం కలĀу \n1) \nవృĥȳకం \n \n2) \nఫĔ \n \n3) \nఖйу \n \n4) \nఖѓу"
  },
  {
    "id": 8,
    "printedNumber": 8,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "8. \nŷцలз Ƨడѕ óనя \n \nҖతల õчలз Ƨడѕ ƬంకĞ ధరǖ \n \nĽĕѐ ƥడŬĀɌĠĆ \n \nõĕĆ úనంэ ƥడѕ నయяగ јమĹ! \n \nЃ పదɇం ఆôరంä ŷцలз అలంâరя",
    "options": [
      {
        "number": 1,
        "text": "âరɇя"
      },
      {
        "number": 2,
        "text": "óనя"
      },
      {
        "number": 3,
        "text": "కంకణя"
      },
      {
        "number": 4,
        "text": "ఉంగరя"
      }
    ],
    "correctOption": 2,
    "correctText": "óనя",
    "difficulty": "Not identified in source",
    "sourceText": "8. \nŷцలз Ƨడѕ óనя \n \nҖతల õчలз Ƨడѕ ƬంకĞ ధరǖ \n \nĽĕѐ ƥడŬĀɌĠĆ \n \nõĕĆ úనంэ ƥడѕ నయяగ јమĹ! \n \nЃ పదɇం ఆôరంä ŷцలз అలంâరя \n1) \nâరɇя \n \n2) \nóనя \n \n3) \nకంకణя \n \n4) \nఉంగరя"
  },
  {
    "id": 9,
    "printedNumber": 9,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "9. \nతяలя Ɛయę Ǎёъ \n \nĤమцలǉ ŕĢĞ Ɠħ Ŭతబу ŝĢĤȕ \n \nగమలяѓ Ǝę Ɩలзъ \n \nĨమôяу Ǝę ü˞ Ōనя јమĹ! \n \nఇė Ǝę Ɩలъ వɇరȾమę కĤ అõɁу",
    "options": [
      {
        "number": 1,
        "text": "కపɂѓ"
      },
      {
        "number": 2,
        "text": "ŷపѓ"
      },
      {
        "number": 3,
        "text": "ñమరѓ"
      },
      {
        "number": 4,
        "text": "Ľєɋ"
      }
    ],
    "correctOption": 3,
    "correctText": "ñమరѓ",
    "difficulty": "Not identified in source",
    "sourceText": "9. \nతяలя Ɛయę Ǎёъ \n \nĤమцలǉ ŕĢĞ Ɠħ Ŭతబу ŝĢĤȕ \n \nగమలяѓ Ǝę Ɩలзъ \n \nĨమôяу Ǝę ü˞ Ōనя јమĹ! \n \nఇė Ǝę Ɩలъ వɇరȾమę కĤ అõɁу \n \n1) \nకపɂѓ \n \n2) \nŷపѓ \n \n3) \nñమరѓ \n \n4) \nĽєɋ"
  },
  {
    "id": 10,
    "printedNumber": 10,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "10. \nమండలపĕ సяఖంэన \n \nŦంϻన ʛôę Ǝక Ŧలйట ŧలɊȕ \n \nƘండంత మదыżъй \n \nƥండя ƎзంĒనсɊ ǉмర јమĹ! \n \nüоవదȿ సమёȾϻన ఇతу ఉండకǎƁ üజɇం వɇరȾమõɁу కĤ",
    "options": [
      {
        "number": 1,
        "text": "АęзĒ"
      },
      {
        "number": 2,
        "text": "Аõɇధɇʄу"
      },
      {
        "number": 3,
        "text": "మం˞"
      },
      {
        "number": 4,
        "text": "ƺāĘâĠ"
      }
    ],
    "correctOption": 3,
    "correctText": "మం˞",
    "difficulty": "Not identified in source",
    "sourceText": "10. \nమండలపĕ సяఖంэన \n \nŦంϻన ʛôę Ǝక Ŧలйట ŧలɊȕ \n \nƘండంత మదыżъй \n \nƥండя ƎзంĒనсɊ ǉмర јమĹ! \n \nüоవదȿ సమёȾϻన ఇతу ఉండకǎƁ üజɇం వɇరȾమõɁу కĤ \n1) \nАęзĒ \n \n2) \nАõɇధɇʄу \n \n3) \nమం˞ \n \n4) \nƺāĘâĠ"
  },
  {
    "id": 11,
    "printedNumber": 11,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "11. \nబంäё зదవ Ťటȸз \n \nసంగరяన øġǎз సరјడవйƿ \n \nనంగĒ Ŭచȳя þడз \n \nŬంగĢǉ ŕĢĞ వలш Ĥъü јమĹ! \n \nకĤ ఇకȮĒ ъంĒ öĠǎѿడదõɁу",
    "options": [
      {
        "number": 1,
        "text": "øధѓ"
      },
      {
        "number": 2,
        "text": "ѐóɀѓ"
      },
      {
        "number": 3,
        "text": "âüɇѓ"
      },
      {
        "number": 4,
        "text": "ఇѓɊ"
      }
    ],
    "correctOption": 2,
    "correctText": "ѐóɀѓ",
    "difficulty": "Not identified in source",
    "sourceText": "11. \nబంäё зదవ Ťటȸз \n \nసంగరяన øġǎз సరјడవйƿ \n \nనంగĒ Ŭచȳя þడз \n \nŬంగĢǉ ŕĢĞ వలш Ĥъü јమĹ! \n \nకĤ ఇకȮĒ ъంĒ öĠǎѿడదõɁу \n1) \nøధѓ \n2) \nѐóɀѓ \n \n3) \nâüɇѓ \n \n4) \nఇѓɊ"
  },
  {
    "id": 12,
    "printedNumber": 12,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "12. \nసǋȰĦȹ ħĠѐ Ʃసйъ \n \nసǋȰĦȹŧ ĪĠȽ Ťంм సంцĦȸę õ \n \nసǋȰĦȹŧ Ưన ҁёȳъ \n \nసǋȰĦȹŧ öపяలъ జంы зúü! \n \nЃ పదɇం ƯకȮ ʛôన ఉƃȿశం",
    "options": [
      {
        "number": 1,
        "text": "సజȵъలǉ ƓɁహం"
      },
      {
        "number": 2,
        "text": "шరȵъల ăంగతɇం"
      },
      {
        "number": 3,
        "text": "ăщజъల ľడనం"
      },
      {
        "number": 4,
        "text": "âలం Ĥѓవ"
      }
    ],
    "correctOption": 1,
    "correctText": "సజȵъలǉ ƓɁహం",
    "difficulty": "Not identified in source",
    "sourceText": "12. \nసǋȰĦȹ ħĠѐ Ʃసйъ \n \nసǋȰĦȹŧ ĪĠȽ Ťంм సంцĦȸę õ \n \nసǋȰĦȹŧ Ưన ҁёȳъ \n \nసǋȰĦȹŧ öపяలъ జంы зúü! \n \nЃ పదɇం ƯకȮ ʛôన ఉƃȿశం \n \n1) \nసజȵъలǉ ƓɁహం \n \n2) \nшరȵъల ăంగతɇం \n \n3) \năщజъల ľడనం \n \n4) \nâలం Ĥѓవ"
  },
  {
    "id": 13,
    "printedNumber": 13,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "13. \nɖùĞĽ మǍహё \n \nǿùగɇదûసɌùѕ ăరసõюȕ \n \nǖ ùĤంœద; Ľзȕ \n \nЍభవя Ʋసంగмండ వјధ зúü! \n \nЃ పదɇం ňĠę ĪĠȽјȽంė",
    "options": [
      {
        "number": 1,
        "text": "లɞƃĤ"
      },
      {
        "number": 2,
        "text": "మĄĤїȼѕ"
      },
      {
        "number": 3,
        "text": "శంకёу"
      },
      {
        "number": 4,
        "text": "గణపĕ"
      }
    ],
    "correctOption": 2,
    "correctText": "మĄĤїȼѕ",
    "difficulty": "Not identified in source",
    "sourceText": "13. \nɖùĞĽ మǍహё \n \nǿùగɇదûసɌùѕ ăరసõюȕ \n \nǖ ùĤంœద; Ľзȕ \n \nЍభవя Ʋసంగмండ వјధ зúü! \n \nЃ పదɇం ňĠę ĪĠȽјȽంė \n \n1) \nలɞƃĤ \n \n2) \nమĄĤїȼѕ \n \n3) \nశంకёу \n \n4) \nగణపĕ"
  },
  {
    "id": 14,
    "printedNumber": 14,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "14. \nధనపĕ సиϻ ѐంĒѐ \n \nšనయంä ĥѕу ĝɕŦతȽఁగ వలůȕ \n \nదనĀĠ ŎంతకĢĈన \n \nదనùగɇŦ తనзäక తథɇя јమĹ! \n \nధనపĕ ƓɁĨцϻõ ĝɕŦĕȽనė",
    "options": [
      {
        "number": 1,
        "text": "Ĥїȼѕ"
      },
      {
        "number": 2,
        "text": "ĥѕу"
      },
      {
        "number": 3,
        "text": "ఇంѬу"
      },
      {
        "number": 4,
        "text": "ʝహɆ"
      }
    ],
    "correctOption": 2,
    "correctText": "ĥѕу",
    "difficulty": "Not identified in source",
    "sourceText": "14. \nధనపĕ సиϻ ѐంĒѐ \n \nšనయంä ĥѕу ĝɕŦతȽఁగ వలůȕ \n \nదనĀĠ ŎంతకĢĈన \n \nదనùగɇŦ తనзäక తథɇя јమĹ! \n \nధనపĕ ƓɁĨцϻõ ĝɕŦĕȽనė \n \n1) \nĤїȼѕ \n \n2) \nĥѕу \n \n3) \nఇంѬу \n \n4) \nʝహɆ"
  },
  {
    "id": 15,
    "printedNumber": 15,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "15. \nఎండŬъŎ Āన ęంу హరɎя ęмȳ \n \nƌğ ŬъŎ పగѓ Ąğęмȳ \n \nøధ ŬъŎ јఖя బљళЇ œలйü \n \nĀసȽవяɆ õరɊĀĠ úట \nЃ పదɇంǖ అĞత సంǉĂęɁ ఇŷȳė",
    "options": [
      {
        "number": 1,
        "text": "Ŭѓй తüɌత įకĐ"
      },
      {
        "number": 2,
        "text": "ఎండ తüɌత Āన"
      },
      {
        "number": 3,
        "text": "ęʘ తüɌత Ŧళзవ"
      },
      {
        "number": 4,
        "text": "పę తüɌత Ĥˊంĕ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఎండ తüɌత Āన",
    "difficulty": "Not identified in source",
    "sourceText": "15. \nఎండŬъŎ Āన ęంу హరɎя ęмȳ \n \nƌğ ŬъŎ పగѓ Ąğęмȳ \n \nøధ ŬъŎ јఖя బљళЇ œలйü \n \nĀసȽవяɆ õరɊĀĠ úట \nЃ పదɇంǖ అĞత సంǉĂęɁ ఇŷȳė \n1) \nŬѓй తüɌత įకĐ \n2) \nఎండ తüɌత Āన \n \n3) \nęʘ తüɌత Ŧళзవ \n \n4) \nపę తüɌత Ĥˊంĕ"
  },
  {
    "id": 16,
    "printedNumber": 16,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "16. \nǓйలంşనɁ Ɛమన ǓĈ ǓĈ \n \nĥїɇలంşనɁ ħదɀపɂ ħదɀҗĠȽ \n \nйёѕలంşనɁ ɖňరйёу йёу \n \nమతяలంşనɁ Ɛóంత మతŦ మతя \n \nЃ పదɇúôరంä Ǔйలǖ ƘపɂĀё",
    "options": [
      {
        "number": 1,
        "text": "ħదȿపɂ"
      },
      {
        "number": 2,
        "text": "Ɛమన"
      },
      {
        "number": 3,
        "text": "Ɛóంĕ"
      },
      {
        "number": 4,
        "text": "ňరйёу"
      }
    ],
    "correctOption": 2,
    "correctText": "Ɛమన",
    "difficulty": "Not identified in source",
    "sourceText": "16. \nǓйలంşనɁ Ɛమన ǓĈ ǓĈ \n \nĥїɇలంşనɁ ħదɀపɂ ħదɀҗĠȽ \n \nйёѕలంşనɁ ɖňరйёу йёу \n \nమతяలంşనɁ Ɛóంత మతŦ మతя \n \nЃ పదɇúôరంä Ǔйలǖ ƘపɂĀё \n1) \nħదȿపɂ \n \n2) \nƐమన \n \n3) \nƐóంĕ \n \n4) \nňరйёу"
  },
  {
    "id": 17,
    "printedNumber": 17,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "17. \nబљళ âవɇяలъ పĠĆంపä వмȳ \n \n \nబљళ శబȿచయя బѓకవмȳ \n \nసహనƮకȮటబɄ çల కషȸంэü \n \nĤశɌóĝüమ ! ĤъరƐమ! \n \nЃ పదɇం ఆôరంä అతɇంత కషȸЇనė",
    "options": [
      {
        "number": 1,
        "text": "ఓёɂ కѓйట"
      },
      {
        "number": 2,
        "text": "Ĥదɇ కѓйట"
      },
      {
        "number": 3,
        "text": "Ĥనయం కѓйట"
      },
      {
        "number": 4,
        "text": "âరɇజయం"
      }
    ],
    "correctOption": 1,
    "correctText": "ఓёɂ కѓйట",
    "difficulty": "Not identified in source",
    "sourceText": "17. \nబљళ âవɇяలъ పĠĆంపä వмȳ \n \n \nబљళ శబȿచయя బѓకవмȳ \n \nసహనƮకȮటబɄ çల కషȸంэü \n \nĤశɌóĝüమ ! ĤъరƐమ! \n \nЃ పదɇం ఆôరంä అతɇంత కషȸЇనė \n \n1) \nఓёɂ కѓйట \n \n2) \nĤదɇ కѓйట \n \n3) \nĤనయం కѓйట \n \n4) \nâరɇజయం"
  },
  {
    "id": 18,
    "printedNumber": 18,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "18. \nċĆȮѐనɁ Ɛళ ħంహంэЂనъ \n \nబకȮзకȮ కఱċ øధ ŷѐ \n \nబĢĞ Ǝę Ɛళ బంతంэ œలɊш \n \nĤశɌóĝüమ ĤъరƐమ \n \nబలŌనЇన ħంĄęɁ ఇė ѿî కёјȽంė",
    "options": [
      {
        "number": 1,
        "text": "öя"
      },
      {
        "number": 2,
        "text": "Ɓѓ"
      },
      {
        "number": 3,
        "text": "зకȮ"
      },
      {
        "number": 4,
        "text": "įమ"
      }
    ],
    "correctOption": 3,
    "correctText": "зకȮ",
    "difficulty": "Not identified in source",
    "sourceText": "18. \nċĆȮѐనɁ Ɛళ ħంహంэЂనъ \n \nబకȮзకȮ కఱċ øధ ŷѐ \n \nబĢĞ Ǝę Ɛళ బంతంэ œలɊш \n \nĤశɌóĝüమ ĤъరƐమ \n \nబలŌనЇన ħంĄęɁ ఇė ѿî కёјȽంė \n1) \nöя \n \n2) \nƁѓ \n \n3) \nзకȮ \n \n4) \nįమ"
  },
  {
    "id": 19,
    "printedNumber": 19,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "19. \nవఱЀన ŷъ шనɁз \n \nకёЍనъ బంщజъల కడŲఁగзł \n \nపёలз మరɆя ůపɂз \n \nĚġĆĆ దళĀğతనя Ťటȸз јమĹ! \n \nకёѕ వċȳనӐу ňĠ దగȰరз Ŭళɋѿడш",
    "options": [
      {
        "number": 1,
        "text": "мìȸѓ"
      },
      {
        "number": 2,
        "text": "ƓɁĨцѓ"
      },
      {
        "number": 3,
        "text": "సęɁĨцѓ"
      },
      {
        "number": 4,
        "text": "శѪѕѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "мìȸѓ",
    "difficulty": "Not identified in source",
    "sourceText": "19. \nవఱЀన ŷъ шనɁз \n \nకёЍనъ బంщజъల కడŲఁగзł \n \nపёలз మరɆя ůపɂз \n \nĚġĆĆ దళĀğతనя Ťటȸз јమĹ! \n \nకёѕ వċȳనӐу ňĠ దగȰరз Ŭళɋѿడш \n1) \nмìȸѓ \n2) \nƓɁĨцѓ \n \n3) \nసęɁĨцѓ \n \n4) \nశѪѕѓ"
  },
  {
    "id": 20,
    "printedNumber": 20,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "20. \nñъ юčంపę యరȾя \n \núనవపĕ Źё Ƙంత మĔ ҖగతǶ \n \näనల Ľగల ҁĠȳన \n \nƃęయ Ưё ŹёనсɊ ĕరяగ јమĹ! \n \nЃ పదɇం ఆôరంä ñъ ĕనзంî óċన ƷяɆ ňĠĆ \nŷёцంė.",
    "options": [
      {
        "number": 1,
        "text": "Ɩуз"
      },
      {
        "number": 2,
        "text": "üо"
      },
      {
        "number": 3,
        "text": "సĕ"
      },
      {
        "number": 4,
        "text": "బంщѕ"
      }
    ],
    "correctOption": 2,
    "correctText": "üо",
    "difficulty": "Not identified in source",
    "sourceText": "20. \nñъ юčంపę యరȾя \n \núనవపĕ Źё Ƙంత మĔ ҖగతǶ \n \näనల Ľగల ҁĠȳన \n \nƃęయ Ưё ŹёనсɊ ĕరяగ јమĹ! \n \nЃ పదɇం ఆôరంä ñъ ĕనзంî óċన ƷяɆ ňĠĆ \nŷёцంė. \n1) \nƖуз \n2) \nüо \n \n3) \nసĕ \n \n4) \nబంщѕ"
  },
  {
    "id": 21,
    "printedNumber": 21,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "21. \nకలɊęజяŪలɊ గరకంтŚђйъ \n \nĽё పలɊŦђй ęజяäъ \n \nదĢɊ ñšёйъ దనѐę జనɆంэ \n \nĤశɌóĝüమ ĤъరƐమ! \n \nЃ పదɇం ఆôరంä మęĦ ఆž అబదɀя ęజం ňĠĆ ŝѓјȽంė",
    "options": [
      {
        "number": 1,
        "text": "йёѕ"
      },
      {
        "number": 2,
        "text": "ఈశɌёу"
      },
      {
        "number": 3,
        "text": "зúёу"
      },
      {
        "number": 4,
        "text": "âలం"
      }
    ],
    "correctOption": 2,
    "correctText": "ఈశɌёу",
    "difficulty": "Not identified in source",
    "sourceText": "21. \nకలɊęజяŪలɊ గరకంтŚђйъ \n \nĽё పలɊŦђй ęజяäъ \n \nదĢɊ ñšёйъ దనѐę జనɆంэ \n \nĤశɌóĝüమ ĤъరƐమ! \n \nЃ పదɇం ఆôరంä మęĦ ఆž అబదɀя ęజం ňĠĆ ŝѓјȽంė \n \n1) \nйёѕ \n \n2) \nఈశɌёу \n \n3) \nзúёу \n \n4) \nâలం"
  },
  {
    "id": 22,
    "printedNumber": 22,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "22. \nఅమёఁŕĤ āసɓяనఁ йండలяనఁ äш \n \nవలయяన Ʃపɂ ĻĤŷ ŬలѐఁøĔ \n \nѐёదûфɇల Ɗъ పǔపâర \n \nకలన üĔంм గంధంэ వలనఁ äш \n \nЃ పదɇం ఆôరంä ƃĄęĆ అలంâరя âęė",
    "options": [
      {
        "number": 1,
        "text": "పǔపâరం"
      },
      {
        "number": 2,
        "text": "ఆభరణం"
      },
      {
        "number": 3,
        "text": "గంధం"
      },
      {
        "number": 4,
        "text": "వసɓం"
      }
    ],
    "correctOption": 3,
    "correctText": "గంధం",
    "difficulty": "Not identified in source",
    "sourceText": "22. \nఅమёఁŕĤ āసɓяనఁ йండలяనఁ äш \n \nవలయяన Ʃపɂ ĻĤŷ ŬలѐఁøĔ \n \nѐёదûфɇల Ɗъ పǔపâర \n \nకలన üĔంм గంధంэ వలనఁ äш \n \nЃ పదɇం ఆôరంä ƃĄęĆ అలంâరя âęė \n \n1) \nపǔపâరం \n \n2) \nఆభరణం \n \n3) \nగంధం \n \n4) \nవసɓం"
  },
  {
    "id": 23,
    "printedNumber": 23,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "23. \nŷцþరంగ ĥѕę ҕčంపžę \n \nǍё ƩవɌంగ హĠĪĠȽ ъуవžę \n \nదయѐ సతɇంэ ǖъä దలపžę  \n \nగѓగ ƅĐĆ దѓɊల కуы Źс \n \nమęĦ ňĐę అలవёȳƺĀĢ",
    "options": [
      {
        "number": 1,
        "text": "దయ, సతɇం"
      },
      {
        "number": 2,
        "text": "ęʘ, ఆǔగɇం"
      },
      {
        "number": 3,
        "text": "іʞత, Ǝపనం"
      },
      {
        "number": 4,
        "text": "Ĥనయం, ĤƄయత"
      }
    ],
    "correctOption": 1,
    "correctText": "దయ, సతɇం",
    "difficulty": "Not identified in source",
    "sourceText": "23. \nŷцþరంగ ĥѕę ҕčంపžę \n \nǍё ƩవɌంగ హĠĪĠȽ ъуవžę \n \nదయѐ సతɇంэ ǖъä దలపžę  \n \nగѓగ ƅĐĆ దѓɊల కуы Źс \n \nమęĦ ňĐę అలవёȳƺĀĢ \n \n1) \nదయ, సతɇం \n \n2) \nęʘ, ఆǔగɇం \n \n3) \nіʞత, Ǝపనం \n \n4) \nĤనయం, ĤƄయత"
  },
  {
    "id": 24,
    "printedNumber": 24,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "24. \nపరĨతя Ɠѐ šవɌу \n \nపరమ Ĩцండйъ Җతపంచకяనзం \n \nబరĨతŦ పరమధరɆя \n \nపరĨцనз šшё Ǝш పƌɌంшяī! \n‘పంచҖతяѓ’ అъ అరȾя ŝĢƆ పదం",
    "options": [
      {
        "number": 1,
        "text": "Җతపంచకం"
      },
      {
        "number": 2,
        "text": "పరమ Ĩцంу"
      },
      {
        "number": 3,
        "text": "పƌɌంшяī"
      },
      {
        "number": 4,
        "text": "పరమధరɆం"
      }
    ],
    "correctOption": 1,
    "correctText": "Җతపంచకం",
    "difficulty": "Not identified in source",
    "sourceText": "24. \nపరĨతя Ɠѐ šవɌу \n \nపరమ Ĩцండйъ Җతపంచకяనзం \n \nబరĨతŦ పరమధరɆя \n \nపరĨцనз šшё Ǝш పƌɌంшяī! \n‘పంచҖతяѓ’ అъ అరȾя ŝĢƆ పదం \n1) \nҖతపంచకం \n2) \nపరమ Ĩцంу \n \n3) \nపƌɌంшяī \n \n4) \nపరమధరɆం"
  },
  {
    "id": 25,
    "printedNumber": 25,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "25. \nఅకȮ తĢɊ œŪɊ þతɆజ ŧĆȮన \n \nöъ ŢకȮఁ జనш పదɆనయన! \n \nపరమǓĈϯన బĢĞę ęంˠయ \n \nʭమ మĘకľడఁ గѓగఁ Źѐ \n \n‘పదɆనయన’ అనä",
    "options": [
      {
        "number": 1,
        "text": "పదɆяల వంĐ కъɁѓ గలė"
      },
      {
        "number": 2,
        "text": "కѓవల వంĐ కъɁѓ గలė"
      },
      {
        "number": 3,
        "text": "సంŢంగల వంĐ కъɁѓ గలė"
      },
      {
        "number": 4,
        "text": "మŪɊల వంĐ కъɁѓ గలė"
      }
    ],
    "correctOption": 1,
    "correctText": "పదɆяల వంĐ కъɁѓ గలė",
    "difficulty": "Not identified in source",
    "sourceText": "25. \nఅకȮ తĢɊ œŪɊ þతɆజ ŧĆȮన \n \nöъ ŢకȮఁ జనш పదɆనయన! \n \nపరమǓĈϯన బĢĞę ęంˠయ \n \nʭమ మĘకľడఁ గѓగఁ Źѐ \n \n‘పదɆనయన’ అనä \n \n1) \nపదɆяల వంĐ కъɁѓ గలė \n \n2) \nకѓవల వంĐ కъɁѓ గలė \n \n3) \nసంŢంగల వంĐ కъɁѓ గలė \n \n4) \nమŪɊల వంĐ కъɁѓ గలė"
  },
  {
    "id": 26,
    "printedNumber": 26,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "26. \nóɌరబంధяనз దѓыѓ గĒయѓ \n \nవŪš ǍĐƖӐగల ęయцѓ \n \nధరɆŦġఁĈ పѓక ధъɇǪ юĤǖన \n \nĤశɌóĝüమ ĤъరƐమ! \n \nǖకంǖ ĻęɁ ʉĨంċ úìɊĒƁ ధъɇడѕñу",
    "options": [
      {
        "number": 1,
        "text": "ధరɆя"
      },
      {
        "number": 2,
        "text": "ęయమం"
      },
      {
        "number": 3,
        "text": "ùష"
      },
      {
        "number": 4,
        "text": "Ĥనయం"
      }
    ],
    "correctOption": 1,
    "correctText": "ధరɆя",
    "difficulty": "Not identified in source",
    "sourceText": "26. \nóɌరబంధяనз దѓыѓ గĒయѓ \n \nవŪš ǍĐƖӐగల ęయцѓ \n \nధరɆŦġఁĈ పѓక ధъɇǪ юĤǖన \n \nĤశɌóĝüమ ĤъరƐమ! \n \nǖకంǖ ĻęɁ ʉĨంċ úìɊĒƁ ధъɇడѕñу \n1) \nధరɆя \n2) \nęయమం \n \n3) \nùష \n \n4) \nĤనయం"
  },
  {
    "id": 27,
    "printedNumber": 27,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "27. \nపంу వలనఁ эŘȸఁ బరగ ʛపంచя \n \nపంу వలనఁ эŘȸ పరя ęహя \n \nపంу ƊŪġంŐ ʝĄɊшఁĒలǖన \n \nĤశɌóĝüమ ĤъరƐమ! \n \nపదɇం ఆôరంä ఫలя ƊŪġగన Āё",
    "options": [
      {
        "number": 1,
        "text": "హĠ"
      },
      {
        "number": 2,
        "text": "హёу"
      },
      {
        "number": 3,
        "text": "ʝహɆ"
      },
      {
        "number": 4,
        "text": "ʛĄɊшу"
      }
    ],
    "correctOption": 4,
    "correctText": "ʛĄɊшу",
    "difficulty": "Not identified in source",
    "sourceText": "27. \nపంу వలనఁ эŘȸఁ బరగ ʛపంచя \n \nపంу వలనఁ эŘȸ పరя ęహя \n \nపంу ƊŪġంŐ ʝĄɊшఁĒలǖన \n \nĤశɌóĝüమ ĤъరƐమ! \n \nపదɇం ఆôరంä ఫలя ƊŪġగన Āё \n1) \nహĠ \n2) \nహёу \n \n3) \nʝహɆ \n \n4) \nʛĄɊшу"
  },
  {
    "id": 28,
    "printedNumber": 28,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "28. \nతలъంу Ĥషя ఫĔĆę  \n \nŬలయంä ǋకъంу వృĥȳకяనзȕ \n \nతలǉక యనక ѐంуъ \n \nఖѓనз ęѓŬలɊ Ĥషя గదü јమĹ! \n \nతలǖ Ĥషя కĢĈనė",
    "options": [
      {
        "number": 1,
        "text": "цŦɆద"
      },
      {
        "number": 2,
        "text": "బĢɊ"
      },
      {
        "number": 3,
        "text": "వృĥȳకя"
      },
      {
        "number": 4,
        "text": "ఫĔ"
      }
    ],
    "correctOption": 4,
    "correctText": "ఫĔ",
    "difficulty": "Not identified in source",
    "sourceText": "28. \nతలъంу Ĥషя ఫĔĆę  \n \nŬలయంä ǋకъంу వృĥȳకяనзȕ \n \nతలǉక యనక ѐంуъ \n \nఖѓనз ęѓŬలɊ Ĥషя గదü јమĹ! \n \nతలǖ Ĥషя కĢĈనė \n1) \nцŦɆద \n \n2) \nబĢɊ \n \n3) \nవృĥȳకя \n \n4) \nఫĔ"
  },
  {
    "id": 29,
    "printedNumber": 29,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "29. \nŷцలз Ƨడѕ óనя \n \nҖతల õчలз Ƨడѕ ƬంకĞ ధరǖ \n \nĽĕѐ ƥడŬĀɌĠĆ \n \nõĕĆ úనంэ ƥడѕ నయяగ јమĹ! \n \nЃ పదɇం ఆôరంä ధరǖ öలзలз అలంâరя",
    "options": [
      {
        "number": 1,
        "text": "ʛజలъ âöуట"
      },
      {
        "number": 2,
        "text": "Җషణяѓ ధĠంмట"
      },
      {
        "number": 3,
        "text": "అబదɀя þడзంуట"
      },
      {
        "number": 4,
        "text": "ధüɆęɁ ęĠȵంмట"
      }
    ],
    "correctOption": 3,
    "correctText": "అబదɀя þడзంуట",
    "difficulty": "Not identified in source",
    "sourceText": "29. \nŷцలз Ƨడѕ óనя \n \nҖతల õчలз Ƨడѕ ƬంకĞ ధరǖ \n \nĽĕѐ ƥడŬĀɌĠĆ \n \nõĕĆ úనంэ ƥడѕ నయяగ јమĹ! \n \nЃ పదɇం ఆôరంä ధరǖ öలзలз అలంâరя \n1) \nʛజలъ âöуట \n \n2) \nҖషణяѓ ధĠంмట \n \n3) \nఅబదɀя þడзంуట \n \n4) \nధüɆęɁ ęĠȵంмట"
  },
  {
    "id": 30,
    "printedNumber": 30,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "30. \nతяలя Ɛయę Ǎёъ \n \nĤమцలǉ ŕĢĞ Ɠħ Ŭతబу ŝĢĤȕ \n \nగమలяѓ Ǝę Ɩలзъ \n \nĨమôяу Ǝę ü˞ Ōనя јమĹ! \n \nЃ పదɇంǖ Ĩమôяу అంż",
    "options": [
      {
        "number": 1,
        "text": "Ĩమవంцу"
      },
      {
        "number": 2,
        "text": "ϯþసం"
      },
      {
        "number": 3,
        "text": "చంѬу"
      },
      {
        "number": 4,
        "text": "మంмƖండ"
      }
    ],
    "correctOption": 3,
    "correctText": "చంѬу",
    "difficulty": "Not identified in source",
    "sourceText": "30. \nతяలя Ɛయę Ǎёъ \n \nĤమцలǉ ŕĢĞ Ɠħ Ŭతబу ŝĢĤȕ \n \nగమలяѓ Ǝę Ɩలзъ \n \nĨమôяу Ǝę ü˞ Ōనя јమĹ! \n \nЃ పదɇంǖ Ĩమôяу అంż \n \n1) \nĨమవంцу \n \n2) \nϯþసం \n \n3) \nచంѬу \n \n4) \nమంмƖండ"
  },
  {
    "id": 31,
    "printedNumber": 31,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "31. \nమండలపĕ సяఖంэన \n \nŦంϻన ʛôę Ǝక Ŧలйట ŧలɊȕ \n \nƘండంత మదыżъй \n \nƥండя ƎзంĒనсɊ ǉмర јమĹ! \n \nЃ పదɇంǖ ƆưȮనɁ జంцѕ",
    "options": [
      {
        "number": 1,
        "text": "గజం"
      },
      {
        "number": 2,
        "text": "హĠణం"
      },
      {
        "number": 3,
        "text": "నకȮ"
      },
      {
        "number": 4,
        "text": "ħంహం"
      }
    ],
    "correctOption": 1,
    "correctText": "గజం",
    "difficulty": "Not identified in source",
    "sourceText": "31. \nమండలపĕ సяఖంэన \n \nŦంϻన ʛôę Ǝక Ŧలйట ŧలɊȕ \n \nƘండంత మదыżъй \n \nƥండя ƎзంĒనсɊ ǉмర јమĹ! \n \nЃ పదɇంǖ ƆưȮనɁ జంцѕ \n1) \nగజం \n \n2) \nహĠణం \n \n3) \nనకȮ \n \n4) \nħంహం"
  },
  {
    "id": 32,
    "printedNumber": 32,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "32. \nబంäё зదవ Ťటȸз \n \nసంగరяన øġǎз సరјడవйƿ \n \nసంగĒ Ŭచȳя þడз \n \nŬంగĢǉ ŕĢĞ వలш Ĥъü јమĹ! \n \nకĤ ňĠǉ ƓɁహం పęĆ üదõɁу",
    "options": [
      {
        "number": 1,
        "text": "җфу"
      },
      {
        "number": 2,
        "text": "బంщѕ"
      },
      {
        "number": 3,
        "text": "Ąју"
      },
      {
        "number": 4,
        "text": "ĤҐషзу"
      }
    ],
    "correctOption": 1,
    "correctText": "җфу",
    "difficulty": "Not identified in source",
    "sourceText": "32. \nబంäё зదవ Ťటȸз \n \nసంగరяన øġǎз సరјడవйƿ \n \nసంగĒ Ŭచȳя þడз \n \nŬంగĢǉ ŕĢĞ వలш Ĥъü јమĹ! \n \nకĤ ňĠǉ ƓɁహం పęĆ üదõɁу \n1) \nҗфу \n2) \nబంщѕ \n \n3) \nĄју \n \n4) \nĤҐషзу"
  },
  {
    "id": 33,
    "printedNumber": 33,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "33. \nసǋȰĦȹ ħĠѐ Ʃసйъ \n \nసǋȰĦȹŧ ĪĠȽ Ťంм సంцĦȸę õ \n \nసǋȰĦȹŧ Ưన ҁёȳъ \n \nసǋȰĦȹŧ öపяలъ జంы зúü! \n \nЃ పదɇం ఆôరంä సజȵన ăంగతɇం Ļęę వృėɀ ŷјȽంė",
    "options": [
      {
        "number": 1,
        "text": "ధనం"
      },
      {
        "number": 2,
        "text": "ыణɇం"
      },
      {
        "number": 3,
        "text": "యశјɏ"
      },
      {
        "number": 4,
        "text": "éȷనం"
      }
    ],
    "correctOption": 3,
    "correctText": "యశјɏ",
    "difficulty": "Not identified in source",
    "sourceText": "33. \nసǋȰĦȹ ħĠѐ Ʃసйъ \n \nసǋȰĦȹŧ ĪĠȽ Ťంм సంцĦȸę õ \n \nసǋȰĦȹŧ Ưన ҁёȳъ \n \nసǋȰĦȹŧ öపяలъ జంы зúü! \n \nЃ పదɇం ఆôరంä సజȵన ăంగతɇం Ļęę వృėɀ ŷјȽంė \n \n1) \nధనం \n \n2) \nыణɇం \n \n3) \nయశјɏ \n \n4) \néȷనం"
  },
  {
    "id": 34,
    "printedNumber": 34,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "34. \nɖùĞĽ మǍహё \n \nǿùగɇదûసɌùѕ ăరసõюȕ \n \nǖ ùĤంœద; Ľзȕ \n \nЍభవя Ʋసంймండ వјధ зúü! \n \nЃ పదɇంǖ సంǐధన పదం",
    "options": [
      {
        "number": 1,
        "text": "దû సɌùѕî"
      },
      {
        "number": 2,
        "text": "ăరసõюу"
      },
      {
        "number": 3,
        "text": "зúü"
      },
      {
        "number": 4,
        "text": "ɖùĞĽ"
      }
    ],
    "correctOption": 3,
    "correctText": "зúü",
    "difficulty": "Not identified in source",
    "sourceText": "34. \nɖùĞĽ మǍహё \n \nǿùగɇదûసɌùѕ ăరసõюȕ \n \nǖ ùĤంœద; Ľзȕ \n \nЍభవя Ʋసంймండ వјధ зúü! \n \nЃ పదɇంǖ సంǐధన పదం \n \n1) \nదû సɌùѕî \n \n2) \năరసõюу \n \n3) \nзúü \n \n4) \nɖùĞĽ"
  },
  {
    "id": 35,
    "printedNumber": 35,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "35. \nధనపĕ సиϻ ѐంĒѐ \n \nšనయంä ĥѕу ĝɕŦతȽఁగ వలůȕ \n \nదనĀĠ ŎంతకĢĈన \n \nదనùగɇŦ తనзäక తథɇя јమĹ! \n \nЃ పదɇంǖ మзటం",
    "options": [
      {
        "number": 1,
        "text": "ధనపĕ"
      },
      {
        "number": 2,
        "text": "ĥѕу"
      },
      {
        "number": 3,
        "text": "јమĹ"
      },
      {
        "number": 4,
        "text": "తథɇя"
      }
    ],
    "correctOption": 3,
    "correctText": "јమĹ",
    "difficulty": "Not identified in source",
    "sourceText": "35. \nధనపĕ సиϻ ѐంĒѐ \n \nšనయంä ĥѕу ĝɕŦతȽఁగ వలůȕ \n \nదనĀĠ ŎంతకĢĈన \n \nదనùగɇŦ తనзäక తథɇя јమĹ! \n \nЃ పదɇంǖ మзటం  \n \n1) \nధనపĕ \n \n2) \nĥѕу \n \n3) \nјమĹ \n \n4) \nతథɇя"
  },
  {
    "id": 36,
    "printedNumber": 36,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "36. \nఎండŬъŎ Āన ęంу హరɎя ęмȳ \n \nƌğ ŬъŎ పగѓ Ąğęмȳ \n \nøధ ŬъŎ јఖя బљళЇ œలйü \n \nĀసȽవяɆ õరɊĀĠ úట \nЃ పదɇం ఆôరంä కషȸం Ŭъక వŷȳė",
    "options": [
      {
        "number": 1,
        "text": "јకృĕ"
      },
      {
        "number": 2,
        "text": "ƌğ"
      },
      {
        "number": 3,
        "text": "јఖం"
      },
      {
        "number": 4,
        "text": "సć"
      }
    ],
    "correctOption": 3,
    "correctText": "јఖం",
    "difficulty": "Not identified in source",
    "sourceText": "36. \nఎండŬъŎ Āన ęంу హరɎя ęмȳ \n \nƌğ ŬъŎ పగѓ Ąğęмȳ \n \nøధ ŬъŎ јఖя బљళЇ œలйü \n \nĀసȽవяɆ õరɊĀĠ úట \nЃ పదɇం ఆôరంä కషȸం Ŭъక వŷȳė \n1) \nјకృĕ \n2) \nƌğ \n \n3) \nјఖం \n \n4) \nసć"
  },
  {
    "id": 37,
    "printedNumber": 37,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "37. \nǓйలంşనɁ Ɛమన ǓĈ ǓĈ \n \nĥїɇలంşనɁ ħదɀపɂ ħదɀҗĠȽ \n \nйёѕలంşనɁ ɖňరйёу йёу \n \nమతяలంşనɁ Ɛóంత మతŦ మతя \nЃ పదɇం ఆôరంä ĥїɇలంш œపɂదĈన Āё",
    "options": [
      {
        "number": 1,
        "text": "ňёу"
      },
      {
        "number": 2,
        "text": "йёѕ"
      },
      {
        "number": 3,
        "text": "ħదȿపɂ"
      },
      {
        "number": 4,
        "text": "Ɛమన"
      }
    ],
    "correctOption": 3,
    "correctText": "ħదȿపɂ",
    "difficulty": "Not identified in source",
    "sourceText": "37. \nǓйలంşనɁ Ɛమన ǓĈ ǓĈ \n \nĥїɇలంşనɁ ħదɀపɂ ħదɀҗĠȽ \n \nйёѕలంşనɁ ɖňరйёу йёу \n \nమతяలంşనɁ Ɛóంత మతŦ మతя \nЃ పదɇం ఆôరంä ĥїɇలంш œపɂదĈన Āё \n1) \nňёу  \n \n2) \nйёѕ  \n \n3) \nħదȿపɂ \n \n4) \nƐమన"
  },
  {
    "id": 38,
    "printedNumber": 38,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "38. \nబљళ âవɇяలъ పĠĆంపä వмȳ \n \n \nబљళ శబȿచయя బѓకవмȳ \n \nసహనƮకȮటబɄ çల కషȸంэü \n \nĤశɌóĝüమ ! ĤъరƐమ! \n \n‘బљళ âవɇяѓ పĠĆంపవмȳ’ అనä ùవం",
    "options": [
      {
        "number": 1,
        "text": "ƖęɁ âĀɇѓ చшవవмȳ"
      },
      {
        "number": 2,
        "text": "అƅక âĀɇѓ చшవవмȳ"
      },
      {
        "number": 3,
        "text": "âĀɇѓ చшవƎя"
      },
      {
        "number": 4,
        "text": "ƖęɁâĀɇѓ üయవмȳ"
      }
    ],
    "correctOption": 2,
    "correctText": "అƅక âĀɇѓ చшవవмȳ",
    "difficulty": "Not identified in source",
    "sourceText": "38. \nబљళ âవɇяలъ పĠĆంపä వмȳ \n \n \nబљళ శబȿచయя బѓకవмȳ \n \nసహనƮకȮటబɄ çల కషȸంэü \n \nĤశɌóĝüమ ! ĤъరƐమ! \n \n‘బљళ âవɇяѓ పĠĆంపవмȳ’ అనä ùవం \n \n1) \nƖęɁ âĀɇѓ చшవవмȳ \n \n2) \nఅƅక âĀɇѓ చшవవмȳ \n \n3) \nâĀɇѓ చшవƎя \n \n4) \nƖęɁâĀɇѓ üయవмȳ"
  },
  {
    "id": 39,
    "printedNumber": 39,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "39. \nċĆȮѐనɁ Ɛళ ħంహంэЂనъ \n \nబకȮзకȮ కఱċ øధ ŷѐ \n \nబĢĞ Ǝę Ɛళ బంతంэ œలɊш \n \nĤశɌóĝüమ! ĤъరƐమ! \n \nబలя ƎనӐу ఇė œలɊш",
    "options": [
      {
        "number": 1,
        "text": "పంతం"
      },
      {
        "number": 2,
        "text": "పęతనం"
      },
      {
        "number": 3,
        "text": "అĝమతం"
      },
      {
        "number": 4,
        "text": "Ĥѓవ"
      }
    ],
    "correctOption": 1,
    "correctText": "పంతం",
    "difficulty": "Not identified in source",
    "sourceText": "39. \nċĆȮѐనɁ Ɛళ ħంహంэЂనъ \n \nబకȮзకȮ కఱċ øధ ŷѐ \n \nబĢĞ Ǝę Ɛళ బంతంэ œలɊш \n \nĤశɌóĝüమ! ĤъరƐమ! \n \nబలя ƎనӐу ఇė œలɊш \n1) \nపంతం \n \n2) \nపęతనం \n \n3) \nఅĝమతం \n \n4) \nĤѓవ"
  },
  {
    "id": 40,
    "printedNumber": 40,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "40. \nవఱЀన ŷъ шనɁз \n \nకёЍనъ బంщజъల కడŲఁగзł \n \nపёలз మరɆя ůపɂз \n \nĚġĆĆ దళĀğతనя Ťటȸз јమĹ! \n \nЃ పదɇం ఆôరంä రహăɇęɁ ňĠĆ œపɂѿడш",
    "options": [
      {
        "number": 1,
        "text": "ƓɁĨцѓ"
      },
      {
        "number": 2,
        "text": "పёѓ"
      },
      {
        "number": 3,
        "text": "Ǜదёѓ"
      },
      {
        "number": 4,
        "text": "ĚĠĆĀĠĆ"
      }
    ],
    "correctOption": 2,
    "correctText": "పёѓ",
    "difficulty": "Not identified in source",
    "sourceText": "40. \nవఱЀన ŷъ шనɁз \n \nకёЍనъ బంщజъల కడŲఁగзł \n \nపёలз మరɆя ůపɂз \n \nĚġĆĆ దళĀğతనя Ťటȸз јమĹ! \n \nЃ పదɇం ఆôరంä రహăɇęɁ ňĠĆ œపɂѿడш \n1) \nƓɁĨцѓ \n2) \nపёѓ \n \n3) \nǛదёѓ \n \n4) \nĚĠĆĀĠĆ"
  },
  {
    "id": 41,
    "printedNumber": 41,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "41. \nñъ юčంపę యరȾя \n \núనవపĕ Źё Ƙంత మĔ ҖగతǶ \n \näనల Ľగల ҁĠȳన \n \nƃęయ Ưё ŹёనсɊ ĕరяగ јమĹ! \n \nƁšĴగలǉ ǎĢȳనė",
    "options": [
      {
        "number": 1,
        "text": "పёѓ"
      },
      {
        "number": 2,
        "text": "Ǜదёѓ"
      },
      {
        "number": 3,
        "text": "ǖĝ"
      },
      {
        "number": 4,
        "text": "јцѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ǖĝ",
    "difficulty": "Not identified in source",
    "sourceText": "41. \nñъ юčంపę యరȾя \n \núనవపĕ Źё Ƙంత మĔ ҖగతǶ \n \näనల Ľగల ҁĠȳన \n \nƃęయ Ưё ŹёనсɊ ĕరяగ јమĹ! \n \nƁšĴగలǉ ǎĢȳనė \n1) \nపёѓ \n2) \nǛదёѓ \n \n3) \nǖĝ \n \n4) \nјцѓ"
  },
  {
    "id": 42,
    "printedNumber": 42,
    "topic": "పద్య అవగాహన / పద్యార్థం",
    "stem": "42. \nకలɊęజяŪలɊ గరకంтŚђйъ \n \nĽё పలɊŦђй ęజяäъ \n \nదĢɊ ñšёйъ దనѐę జనɆంэ \n \nĤశɌóĝüమ ĤъరƐమ! \n \n \nЃ పదɇం ఆôరంä మన ысȸక ŝĢħన Āё",
    "options": [
      {
        "number": 1,
        "text": "Ѝшɇу"
      },
      {
        "number": 2,
        "text": "ǁɇĕїȮу"
      },
      {
        "number": 3,
        "text": "తĢɊ"
      },
      {
        "number": 4,
        "text": "Ѐవం"
      }
    ],
    "correctOption": 3,
    "correctText": "తĢɊ",
    "difficulty": "Not identified in source",
    "sourceText": "42. \nకలɊęజяŪలɊ గరకంтŚђйъ \n \nĽё పలɊŦђй ęజяäъ \n \nదĢɊ ñšёйъ దనѐę జనɆంэ \n \nĤశɌóĝüమ ĤъరƐమ! \n \n \nЃ పదɇం ఆôరంä మన ысȸక ŝĢħన Āё \n \n1) \nЍшɇу \n \n2) \nǁɇĕїȮу \n \n3) \nతĢɊ \n \n4) \nЀవం"
  },
  {
    "id": 43,
    "printedNumber": 43,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "43. \n \nఅĝనవ Āగъ āసъѓ ɖ Ĉуй üమҗĠȽ ùĂ \nసంసȮరణз ғъƖę రచనǖɊ ĀɇవĄĠకùషъ \nʛǓĈంచవмȳనటంǉ ఆщęక కĤతɌం Ţదȿమѓы ĕĠĈంė. \nʛజѓ úìɊž ùషз, âĀɇǖɊ ùషз ఉనɁ వɇñɇăęɁ \nƥలĈంċ âవɇùషъ ʛజలз దగȰరä Ĺјз üĀలę \nıĤతమంñ కృĦ ŷāё. \n \n రచనǖɊ ĀɇవĄĠక ùష ʛǓĈంచవచȳనటంǉ వċȳన úёɂ",
    "options": [
      {
        "number": 1,
        "text": "ఆщęక కĤతɌం ĕǔగĞంచటం"
      },
      {
        "number": 2,
        "text": "ఆщęక కĤతɌం మѓыĕరగటం"
      },
      {
        "number": 3,
        "text": "ʿįన కĤతɌం మѓы ĕరగటం"
      },
      {
        "number": 4,
        "text": "ʿįన కĤతɌం ĤమĠɍంచటం"
      }
    ],
    "correctOption": 2,
    "correctText": "ఆщęక కĤతɌం మѓыĕరగటం",
    "difficulty": "Not identified in source",
    "sourceText": "43. \n \nఅĝనవ Āగъ āసъѓ ɖ Ĉуй üమҗĠȽ ùĂ \nసంసȮరణз ғъƖę రచనǖɊ ĀɇవĄĠకùషъ \nʛǓĈంచవмȳనటంǉ ఆщęక కĤతɌం Ţదȿమѓы ĕĠĈంė. \nʛజѓ úìɊž ùషз, âĀɇǖɊ ùషз ఉనɁ వɇñɇăęɁ \nƥలĈంċ âవɇùషъ ʛజలз దగȰరä Ĺјз üĀలę \nıĤతమంñ కృĦ ŷāё. \n \n రచనǖɊ ĀɇవĄĠక ùష ʛǓĈంచవచȳనటంǉ వċȳన úёɂ \n \n1) \nఆщęక కĤతɌం ĕǔగĞంచటం \n \n2) \nఆщęక కĤతɌం మѓыĕరగటం \n \n3) \nʿįన కĤతɌం మѓы ĕరగటం \n \n4) \nʿįన కĤతɌం ĤమĠɍంచటం"
  },
  {
    "id": 44,
    "printedNumber": 44,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "44. \n \nüయΗѓ јøɄüѕ äё øలɇంǖ ĀĠ Ɗనúమ \nఅĀɌĠ јʝహɆణɇ āħɓ äĠǉ కĢħ అవôõѓ ŷјȽంžĀё. \nఅవôన Ĥదɇ అపĠĞతЇన ఆదరం ƪంшҎ ఉనɁ âలంǖ \nüయΗѓ అవôన Ĥదɇ Ѝы ఆకĠɎцలûɇё. \n \n \nüయΗѓ Āё ňĠǉ కĢħ అవôనం ŷјȽంžĀё",
    "options": [
      {
        "number": 1,
        "text": "ñతయɇ"
      },
      {
        "number": 2,
        "text": "Ɗనúమ"
      },
      {
        "number": 3,
        "text": "øøğ"
      },
      {
        "number": 4,
        "text": "ŢదõనɁ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ɗనúమ",
    "difficulty": "Not identified in source",
    "sourceText": "44. \n \nüయΗѓ јøɄüѕ äё øలɇంǖ ĀĠ Ɗనúమ \nఅĀɌĠ јʝహɆణɇ āħɓ äĠǉ కĢħ అవôõѓ ŷјȽంžĀё. \nఅవôన Ĥదɇ అపĠĞతЇన ఆదరం ƪంшҎ ఉనɁ âలంǖ \nüయΗѓ అవôన Ĥదɇ Ѝы ఆకĠɎцలûɇё. \n \n \nüయΗѓ Āё ňĠǉ కĢħ అవôనం ŷјȽంžĀё \n \n1) \nñతయɇ \n \n2) \nƊనúమ \n \n3) \nøøğ \n \n4) \nŢదõనɁ"
  },
  {
    "id": 45,
    "printedNumber": 45,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "45. \n \nఆంʙăĨñɇęɁ җуыѕɌѓ ఆёâయѓä \nవృėɀƪంėంċన úస ప˞క ùరĕ 1924 ǖ ʿరంĝంపబĒ \nఇపɂĐĪ ʇమం తపɂзంî Ŭѓవడటం ఆంʙéĕĆ గరɌâరణం. \nŋɓల ƺసం ʿరంĝంచబĒõ ఆంѭలందĠĆ ఆదరɍöʖЇన \nగృహలɝ ప˞క ăĨñɇęĆ œӐƺదĈన Ɠవ ŷħంė. \n \n \nగదɇúôరంä ఆంʙéĕĆ గరɌâరణЇన ప˞క",
    "options": [
      {
        "number": 1,
        "text": "āరద"
      },
      {
        "number": 2,
        "text": "ùరĕ"
      },
      {
        "number": 3,
        "text": "ʛĕభ"
      },
      {
        "number": 4,
        "text": "éɌల"
      }
    ],
    "correctOption": 2,
    "correctText": "ùరĕ",
    "difficulty": "Not identified in source",
    "sourceText": "45. \n \nఆంʙăĨñɇęɁ җуыѕɌѓ ఆёâయѓä \nవృėɀƪంėంċన úస ప˞క ùరĕ 1924 ǖ ʿరంĝంపబĒ \nఇపɂĐĪ ʇమం తపɂзంî Ŭѓవడటం ఆంʙéĕĆ గరɌâరణం. \nŋɓల ƺసం ʿరంĝంచబĒõ ఆంѭలందĠĆ ఆదరɍöʖЇన \nగృహలɝ ప˞క ăĨñɇęĆ œӐƺదĈన Ɠవ ŷħంė. \n \n \nగదɇúôరంä ఆంʙéĕĆ గరɌâరణЇన ప˞క \n1) \nāరద \n2) \nùరĕ \n \n3) \nʛĕభ \n \n4) \néɌల"
  },
  {
    "id": 46,
    "printedNumber": 46,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "46. \n \nɖѐцѓ బĢŹపĢɊ లɞâంతం, óమüо \nыండńâʄу, úధవŢėȿ эċȳ јందరüమāħɓ, \nцమɆలŋñüమҗĠȽ, шҝɌĠ üĞŨĒȺ ʛభృцѓ \néĹǓదɇమ కѕѓä ʛãɇĕ ƪంóё. óమüо ĀĠ \nõటâęɁ ˥Ĵї ʛюతɌం ęƒĘంċంė. \n \nЃ Ɔü ఆôరంä éĹǓదɇమ కѕѓä ʛãɇĕ ƪందęĀё",
    "options": [
      {
        "number": 1,
        "text": "шҝɌĠ üĞŨĒȺ"
      },
      {
        "number": 2,
        "text": "úధవ Ţėȿ эċȳ јందర üమāħɓ"
      },
      {
        "number": 3,
        "text": "цమɆల ŋñüమ җĠȽ"
      },
      {
        "number": 4,
        "text": "ŭĐȸ లɞనరħంహం"
      }
    ],
    "correctOption": 4,
    "correctText": "ŭĐȸ లɞనరħంహం",
    "difficulty": "Not identified in source",
    "sourceText": "46. \n \nɖѐцѓ బĢŹపĢɊ లɞâంతం, óమüо \nыండńâʄу, úధవŢėȿ эċȳ јందరüమāħɓ, \nцమɆలŋñüమҗĠȽ, шҝɌĠ üĞŨĒȺ ʛభృцѓ \néĹǓదɇమ కѕѓä ʛãɇĕ ƪంóё. óమüо ĀĠ \nõటâęɁ ˥Ĵї ʛюతɌం ęƒĘంċంė. \n \nЃ Ɔü ఆôరంä éĹǓదɇమ కѕѓä ʛãɇĕ ƪందęĀё \n \n1) \nшҝɌĠ üĞŨĒȺ \n \n2) \núధవ Ţėȿ эċȳ јందర üమāħɓ \n \n3) \nцమɆల ŋñüమ җĠȽ \n \n4) \nŭĐȸ లɞనరħంహం"
  },
  {
    "id": 47,
    "printedNumber": 47,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "47. \n \nఆщęâంʙ కĤñĤâసంǖ éĹǓదɇమం కĤñɌęɁ \năúъɇలз దగȰరä ŝċȳంė. ĞĈĢన సమûǖɊ కĤతɌం \nరċంచę Ɩందё ƃశ భзȽలъ ăɌతంΒɇదɇమం కѕలъ \nŷħంė. ɖ йరéడ üఘవ శరɆ సంöదకతɌం వĨంċన éĹయ \nĬñѓ చėĤƁ ఆõĐ ఉదɇమ, కĤñ సɌҙపం చకȮä \nǐధపуцంė. \n \néĹǓదɇమం కĤñɌęɁ ňĠĆ దగȰరä ŝċȳంė",
    "options": [
      {
        "number": 1,
        "text": "ƃశభзȽలз"
      },
      {
        "number": 2,
        "text": "ʛĕùవంцలз"
      },
      {
        "number": 3,
        "text": "ăúъɇలз"
      },
      {
        "number": 4,
        "text": "ăĨñɇĝúъలз"
      }
    ],
    "correctOption": 3,
    "correctText": "ăúъɇలз",
    "difficulty": "Not identified in source",
    "sourceText": "47. \n \nఆщęâంʙ కĤñĤâసంǖ éĹǓదɇమం కĤñɌęɁ \năúъɇలз దగȰరä ŝċȳంė. ĞĈĢన సమûǖɊ కĤతɌం \nరċంచę Ɩందё ƃశ భзȽలъ ăɌతంΒɇదɇమం కѕలъ \nŷħంė. ɖ йరéడ üఘవ శరɆ సంöదకతɌం వĨంċన éĹయ \nĬñѓ చėĤƁ ఆõĐ ఉదɇమ, కĤñ సɌҙపం చకȮä \nǐధపуцంė. \n \néĹǓదɇమం కĤñɌęɁ ňĠĆ దగȰరä ŝċȳంė  \n1) \nƃశభзȽలз \n2) \nʛĕùవంцలз \n \n3) \năúъɇలз \n \n4) \năĨñɇĝúъలз"
  },
  {
    "id": 48,
    "printedNumber": 48,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "48. \n \n ŝలంäణǖ ăంసȭĕక ϴతõɇęĆ ǋహదం ŷħన \núడöĐ హъమంతüѕ, ఆėüо ňరభʘüѕ, јరవరం \nʛñపŨĒȺäరѓ ĤóɇĤషయకంä ŬъకబĒѕనɁ ʿంతంǖ \nకѕలъ ΗతɏĨంçё. ƼలƖండ కѕల రచనలъ, ఆâüలъ \nƓకĠంċ ʛకĐంċన јరవరం ʛñపŨĒȺäё ѐవзలз \nйёцѓɇѓ. \n \nЃ Ɔü ఆôరంä ѐవзలз йёцѓɇѓ",
    "options": [
      {
        "number": 1,
        "text": "úడöĐ హъమంతüѕ"
      },
      {
        "number": 2,
        "text": "ఆėüо ňరభʘ üѕ"
      },
      {
        "number": 3,
        "text": "јరవరం ʛñపŨĒȺ"
      },
      {
        "number": 4,
        "text": "Ɩమýɉо లɜణüѕ"
      }
    ],
    "correctOption": 3,
    "correctText": "јరవరం ʛñపŨĒȺ",
    "difficulty": "Not identified in source",
    "sourceText": "48. \n \n ŝలంäణǖ ăంసȭĕక ϴతõɇęĆ ǋహదం ŷħన \núడöĐ హъమంతüѕ, ఆėüо ňరభʘüѕ, јరవరం \nʛñపŨĒȺäరѓ ĤóɇĤషయకంä ŬъకబĒѕనɁ ʿంతంǖ \nకѕలъ ΗతɏĨంçё. ƼలƖండ కѕల రచనలъ, ఆâüలъ \nƓకĠంċ ʛకĐంċన јరవరం ʛñపŨĒȺäё ѐవзలз \nйёцѓɇѓ. \n \nЃ Ɔü ఆôరంä ѐవзలз йёцѓɇѓ \n1) \núడöĐ హъమంతüѕ \n2) \nఆėüо ňరభʘ üѕ \n \n3) \nјరవరం ʛñపŨĒȺ \n \n4) \nƖమýɉо లɜణüѕ"
  },
  {
    "id": 49,
    "printedNumber": 49,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "49. \n \nĚంగģ – â҉Ġ కѕѓ పĠణతదశǖ üħన మĄâవɇం \nǿందరనందя. Ļęƅ ͏ǒపęషతȽę Ŧçȳё ɖ ఉనɁవ \nలɞõüయణ. అశɌƽїę ǿందరనంóęɁ ƌãúʖంä \nʉĨంċ ʿįన కĤతɌంǖę వరȼõపĐషȸతъ, ఆщęక \nùవċʺలǖę ǿందüɇęɁ ŋɌకĠంċ Ń âవɇం రċంçё. \nāంతం, శృంäరం, కёణ రăѓ ఇంшǖ చకȮä \nęరɌĨంచబîȺğ. \n \nఉనɁవ లɞõüయణ ‘ǿందరనందя’ъ ఇþ ŦмȳзõɁё.",
    "options": [
      {
        "number": 1,
        "text": "ʛణǓపęషцȽ"
      },
      {
        "number": 2,
        "text": "͏ǒపęషцȽ"
      },
      {
        "number": 3,
        "text": "పĠణǓపęషцȽ"
      },
      {
        "number": 4,
        "text": "ʛథǒపęషцȽ"
      }
    ],
    "correctOption": 2,
    "correctText": "͏ǒపęషцȽ",
    "difficulty": "Not identified in source",
    "sourceText": "49. \n \nĚంగģ – â҉Ġ కѕѓ పĠణతదశǖ üħన మĄâవɇం \nǿందరనందя. Ļęƅ ͏ǒపęషతȽę Ŧçȳё ɖ ఉనɁవ \nలɞõüయణ. అశɌƽїę ǿందరనంóęɁ ƌãúʖంä \nʉĨంċ ʿįన కĤతɌంǖę వరȼõపĐషȸతъ, ఆщęక \nùవċʺలǖę ǿందüɇęɁ ŋɌకĠంċ Ń âవɇం రċంçё. \nāంతం, శృంäరం, కёణ రăѓ ఇంшǖ చకȮä \nęరɌĨంచబîȺğ. \n \nఉనɁవ లɞõüయణ ‘ǿందరనందя’ъ ఇþ ŦмȳзõɁё. \n1) \nʛణǓపęషцȽ \n \n2) \n͏ǒపęషцȽ \n \n3) \nపĠణǓపęషцȽ \n \n4) \nʛథǒపęషцȽ"
  },
  {
    "id": 50,
    "printedNumber": 50,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "50. \n \nùవకĤతɌమనä ǿందరɇం, ͏మ, яఖɇంä ĤశɌúనవ \n͏మ తలыƖăȽğ. ùవకĤతɌంǖ ʛకృĕ, ʛణయం, ʛǐధం \nʿôనɇం వĨăȽğ. ఆñɆʦయ ńĕ ùవకĤతɌంǖ ʿôనɇం \nవĨంċంė. ùవం Ǝę కĤతɌяంсంó? అę ʛĥɁంċ \nùవకĤతɌమనɁ Ɔёъ Ɩందё కѕѓ ఆƕĚంçё. \n \nЃ గదɇం ఆôరంä ùవకĤతɌం ʿôనɇం వĨంచęė",
    "options": [
      {
        "number": 1,
        "text": "ʛకృĕ"
      },
      {
        "number": 2,
        "text": "ʛణయం"
      },
      {
        "number": 3,
        "text": "ĤపɊవం"
      },
      {
        "number": 4,
        "text": "ʛǐధం"
      }
    ],
    "correctOption": 3,
    "correctText": "ĤపɊవం",
    "difficulty": "Not identified in source",
    "sourceText": "50. \n \nùవకĤతɌమనä ǿందరɇం, ͏మ, яఖɇంä ĤశɌúనవ \n͏మ తలыƖăȽğ. ùవకĤతɌంǖ ʛకృĕ, ʛణయం, ʛǐధం \nʿôనɇం వĨăȽğ. ఆñɆʦయ ńĕ ùవకĤతɌంǖ ʿôనɇం \nవĨంċంė. ùవం Ǝę కĤతɌяంсంó? అę ʛĥɁంċ \nùవకĤతɌమనɁ Ɔёъ Ɩందё కѕѓ ఆƕĚంçё. \n \nЃ గదɇం ఆôరంä ùవకĤతɌం ʿôనɇం వĨంచęė \n1) \nʛకృĕ \n \n2) \nʛణయం \n \n3) \nĤపɊవం \n \n4) \nʛǐధం"
  },
  {
    "id": 51,
    "printedNumber": 51,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "51. \n \nċనɁ ĚలɊలз ŬšɁల అంż ఎంǉ ఇషȸం. ɖüమచంѬę \nఅంతĐ Āž øలɇంǖ చందúమ âĀలę ǎё ŢżȸĀడంż \nచంʘĜంబం ఎంత ఆకరɎĸయǒ ŝѓјȽంė. అсవంĐ \nచందúమ Ŭѓϱన – ŬšɁలъ మన కѕల âĀɇǖɊ ఎంǉ \nఅшɅతంä వĠȼçё. \n \nЃ Ɔü ఆôరంä ఆకరɎĸయంä ఉనɁė.",
    "options": [
      {
        "number": 1,
        "text": "ఇషȸం"
      },
      {
        "number": 2,
        "text": "చంʘĜంబం"
      },
      {
        "number": 3,
        "text": "âవɇం"
      },
      {
        "number": 4,
        "text": "ŬšɁల"
      }
    ],
    "correctOption": 2,
    "correctText": "చంʘĜంబం",
    "difficulty": "Not identified in source",
    "sourceText": "51. \n \nċనɁ ĚలɊలз ŬšɁల అంż ఎంǉ ఇషȸం. ɖüమచంѬę \nఅంతĐ Āž øలɇంǖ చందúమ âĀలę ǎё ŢżȸĀడంż \nచంʘĜంబం ఎంత ఆకరɎĸయǒ ŝѓјȽంė. అсవంĐ \nచందúమ Ŭѓϱన – ŬšɁలъ మన కѕల âĀɇǖɊ ఎంǉ \nఅшɅతంä వĠȼçё. \n \nЃ Ɔü ఆôరంä ఆకరɎĸయంä ఉనɁė. \n \n1) \nఇషȸం \n \n2) \nచంʘĜంబం \n \n3) \nâవɇం \n \n4) \nŬšɁల"
  },
  {
    "id": 52,
    "printedNumber": 52,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "52. \n \nöలకడĢ గరɅంǖ ъంĒ ыĐȸన ŬšɁల ఉŢɂనþ \nĤజృంĝంċ ėзȮలĽɁ яంœĕȽంė. చంʘĜంబం ఆėƑїę \nöъыþä కęɂҠȽ ఉంė. అంшǖę మచȳ Ĥїȼѕþä \nకъɁలз కęɂҠȽ అలĠјȽనɁė. ఇంшǖę ùవõకృĕ óę \nĤసȽӇĕ ఎంత Ƙపɂä ఉంė. \n \nЃ Ɔü ఆôరంä öల సяʘంǖ ыĐȸ అంతì ĀɇĚంċంė",
    "options": [
      {
        "number": 1,
        "text": "įకĐ"
      },
      {
        "number": 2,
        "text": "Ľё"
      },
      {
        "number": 3,
        "text": "ŬšɁల"
      },
      {
        "number": 4,
        "text": "ఉӐ"
      }
    ],
    "correctOption": 3,
    "correctText": "ŬšɁల",
    "difficulty": "Not identified in source",
    "sourceText": "52. \n \nöలకడĢ గరɅంǖ ъంĒ ыĐȸన ŬšɁల ఉŢɂనþ \nĤజృంĝంċ ėзȮలĽɁ яంœĕȽంė. చంʘĜంబం ఆėƑїę \nöъыþä కęɂҠȽ ఉంė. అంшǖę మచȳ Ĥїȼѕþä \nకъɁలз కęɂҠȽ అలĠјȽనɁė. ఇంшǖę ùవõకృĕ óę \nĤసȽӇĕ ఎంత Ƙపɂä ఉంė. \n \nЃ Ɔü ఆôరంä öల సяʘంǖ ыĐȸ అంతì ĀɇĚంċంė \n1) \nįకĐ \n \n2) \nĽё \n \n3) \nŬšɁల \n \n4) \nఉӐ"
  },
  {
    "id": 53,
    "printedNumber": 53,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "53. \n \nపరవјȽ ċనɁయҠĠ తĞళõуǖę œంగȞ పсȸ \nčþɊǖę ɖ ŢరంэҐёǖ జęɆంçу. మʼјǖę \nపచȳయɇపɂ కÿāలǖ ŝѓй పంĒцĒä పęŷāу. ‘ҠĠ’ \nఅƅė ఈయన Ĝёш. ҠĠ అంż పంĒцу అę అరȾం. ŝѓй, \nతĞళ, సంసȭత, ఆంగɊ ùషలǖ ňё పంĒцѓ. \n \n \nɖ ŢరంэҐё ఇకȮడ ఉంė",
    "options": [
      {
        "number": 1,
        "text": "మʼј čþɊ"
      },
      {
        "number": 2,
        "text": "మщЉ čþɊ"
      },
      {
        "number": 3,
        "text": "œంగȞ పсȸ čþɊ"
      },
      {
        "number": 4,
        "text": "ƺయంబҎȽё čþɊ"
      }
    ],
    "correctOption": 3,
    "correctText": "œంగȞ పсȸ čþɊ",
    "difficulty": "Not identified in source",
    "sourceText": "53. \n \nపరవјȽ ċనɁయҠĠ తĞళõуǖę œంగȞ పсȸ \nčþɊǖę ɖ ŢరంэҐёǖ జęɆంçу. మʼјǖę \nపచȳయɇపɂ కÿāలǖ ŝѓй పంĒцĒä పęŷāу. ‘ҠĠ’ \nఅƅė ఈయన Ĝёш. ҠĠ అంż పంĒцу అę అరȾం. ŝѓй, \nతĞళ, సంసȭత, ఆంగɊ ùషలǖ ňё పంĒцѓ. \n \n \nɖ ŢరంэҐё ఇకȮడ ఉంė \n1) \nమʼј čþɊ \n2) \nమщЉ čþɊ \n \n3) \nœంగȞ పсȸ čþɊ \n \n4) \nƺయంబҎȽё čþɊ"
  },
  {
    "id": 54,
    "printedNumber": 54,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "54. \n \nసంసȭతంǖ ĤїȼశరɆ పంచతంʖం ĤశɌĤãɇĕ äంċన \nʉంథం. óęɁ అъసĠంċ అƅక ʉంòѓ వçȳğ. ĀĐǖ \nలɞõüయణ పంĒцĒ Ĩǉపƃశం ఒకĐ. Ļę ఆôరంä \nċనɁయ ҠĠ Ľĕ చంˠకъ ŝѓйǖ రċంçу. ఇė ʭంĖక \nవచనంǖ ăйцంė. \n \nЃ Ɔü ఆôరంä ċనɁయҠĠ Ľĕ చంˠకз ఆôరం",
    "options": [
      {
        "number": 1,
        "text": "పంచతంʖం"
      },
      {
        "number": 2,
        "text": "Ĩǉపƃశం"
      },
      {
        "number": 3,
        "text": "ఋюĬత"
      },
      {
        "number": 4,
        "text": "ĈĠзúёę ͏మĬñѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ĩǉపƃశం",
    "difficulty": "Not identified in source",
    "sourceText": "54. \n \nసంసȭతంǖ ĤїȼశరɆ పంచతంʖం ĤశɌĤãɇĕ äంċన \nʉంథం. óęɁ అъసĠంċ అƅక ʉంòѓ వçȳğ. ĀĐǖ \nలɞõüయణ పంĒцĒ Ĩǉపƃశం ఒకĐ. Ļę ఆôరంä \nċనɁయ ҠĠ Ľĕ చంˠకъ ŝѓйǖ రċంçу. ఇė ʭంĖక \nవచనంǖ ăйцంė. \n \nЃ Ɔü ఆôరంä ċనɁయҠĠ Ľĕ చంˠకз ఆôరం \n \n1) \nపంచతంʖం \n \n2) \nĨǉపƃశం \n \n3) \nఋюĬత \n \n4) \nĈĠзúёę ͏మĬñѓ"
  },
  {
    "id": 55,
    "printedNumber": 55,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "55. \n \nċనɁయҠĠ అɕరйచȴя, ఆంʙâదంబĠ, పóɇంʙ \nĀɇకరణя, ҠʺంʙĀɇకరణя, శబȿలɕణ సంʉహя, \nøలĀɇకరణя, Ľĕచంˠక ƮదЋన ʉంòѓ üāу. ఈయన \nరచõЎĢ öఠзĔȼ ఆకсȸзƅþ ʿįన âవɇùషǖ ఉంсంė. \nĽĕచంˠక øలĀɇకరðѓ లɕɹ-లɕణ ʉంòѓä \nʛħėɀƪంóğ. \n \nˏంė Āęǖ ċనɁయҠĠ రచన âęė",
    "options": [
      {
        "number": 1,
        "text": "Ҡʺంʙ Āɇకరణం"
      },
      {
        "number": 2,
        "text": "పóɇంʙ Āɇకరణం"
      },
      {
        "number": 3,
        "text": "గóɇంʙ Āɇకరణం"
      },
      {
        "number": 4,
        "text": "ఆంʙ âదంబĠ"
      }
    ],
    "correctOption": 3,
    "correctText": "గóɇంʙ Āɇకరణం",
    "difficulty": "Not identified in source",
    "sourceText": "55. \n \nċనɁయҠĠ అɕరйచȴя, ఆంʙâదంబĠ, పóɇంʙ \nĀɇకరణя, ҠʺంʙĀɇకరణя, శబȿలɕణ సంʉహя, \nøలĀɇకరణя, Ľĕచంˠక ƮదЋన ʉంòѓ üāу. ఈయన \nరచõЎĢ öఠзĔȼ ఆకсȸзƅþ ʿįన âవɇùషǖ ఉంсంė. \nĽĕచంˠక øలĀɇకరðѓ లɕɹ-లɕణ ʉంòѓä \nʛħėɀƪంóğ. \n \nˏంė Āęǖ ċనɁయҠĠ రచన âęė \n \n1) \nҠʺంʙ Āɇకరణం \n \n2) \nపóɇంʙ Āɇకరణం \n \n3) \nగóɇంʙ Āɇకరణం \n \n4) \nఆంʙ âదంబĠ"
  },
  {
    "id": 56,
    "printedNumber": 56,
    "topic": "గద్య పఠనం మరియు సాహిత్య అవగాహన",
    "stem": "56. \n \núనవıĤతంǖ Ľĕ అƅė çþ яఖɇЇన Ĥషయం. \nʛĕ మęĦĪ సంöదన ఎంతяఖɇǒ పǔపâరం ѿî \nఅంƁяఖɇం ǖభం ఉండѿడш. ǖభం వలɊ తనзäę, \nఇతёలз äę ʛǓజనం ఉండш. మనం ǖభం Ǝзంî \nĞѪలз సĄయం ŷûĢ. \n \n \n \n \nЃ Ɔü ఆôరంä మęĦ ıĤతంǖ అĕяఖɇЇనė",
    "options": [
      {
        "number": 1,
        "text": "ధరɆం"
      },
      {
        "number": 2,
        "text": "సతɇం"
      },
      {
        "number": 3,
        "text": "Ľĕ"
      },
      {
        "number": 4,
        "text": "Ɠవ"
      }
    ],
    "correctOption": 3,
    "correctText": "Ľĕ",
    "difficulty": "Not identified in source",
    "sourceText": "56. \n \núనవıĤతంǖ Ľĕ అƅė çþ яఖɇЇన Ĥషయం. \nʛĕ మęĦĪ సంöదన ఎంతяఖɇǒ పǔపâరం ѿî \nఅంƁяఖɇం ǖభం ఉండѿడш. ǖభం వలɊ తనзäę, \nఇతёలз äę ʛǓజనం ఉండш. మనం ǖభం Ǝзంî \nĞѪలз సĄయం ŷûĢ. \n \n \n \n \nЃ Ɔü ఆôరంä మęĦ ıĤతంǖ అĕяఖɇЇనė \n \n1) \nధరɆం \n \n2) \nసతɇం \n \n3) \nĽĕ \n \n4) \nƓవ"
  },
  {
    "id": 57,
    "printedNumber": 57,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "57. \n \nశతకపóɇలǖ మзటం ʛôనЇనė. ఈ పóɇǖɊ ʛĕ \nపదɇం ċవర మзటం ఉంсంė. ఇĤ яకȽâѓ, అంż ఏ \nపóɇęకƃ సɌతంʖ ùవంǉ ఉంсంė. మలɊҖöņయం, \nċతȽశతకం, తĠƘండ నృħంహశతకం, భకȽċంñమĔ శతకం, \nĤశɌõƂశɌర శతకం ƮదЋనĤ ŝѓй ăĨతɇంǖ ƺƖలɊѓä \nఉõɁğ. \n \nశతకపóɇѓ",
    "options": [
      {
        "number": 1,
        "text": "яĆȽûѓ"
      },
      {
        "number": 2,
        "text": "яకȽâѓ"
      },
      {
        "number": 3,
        "text": "яకȽéѓ"
      },
      {
        "number": 4,
        "text": "яకȽĀѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "яకȽâѓ",
    "difficulty": "Not identified in source",
    "sourceText": "57. \n \nశతకపóɇలǖ మзటం ʛôనЇనė. ఈ పóɇǖɊ ʛĕ \nపదɇం ċవర మзటం ఉంсంė. ఇĤ яకȽâѓ, అంż ఏ \nపóɇęకƃ సɌతంʖ ùవంǉ ఉంсంė. మలɊҖöņయం, \nċతȽశతకం, తĠƘండ నృħంహశతకం, భకȽċంñమĔ శతకం, \nĤశɌõƂశɌర శతకం ƮదЋనĤ ŝѓй ăĨతɇంǖ ƺƖలɊѓä \nఉõɁğ. \n \nశతకపóɇѓ \n1) \nяĆȽûѓ \n2) \nяకȽâѓ \n \n3) \nяకȽéѓ \n \n4) \nяకȽĀѓ"
  },
  {
    "id": 58,
    "printedNumber": 59,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "59. \n \nɖâళహŋȽశɌü అƅ మзటంǉ ఉనɁ పదɇం ґరȵĐ కĤ \nరċంċన ɖâళహŋȽశɌర శతకంǖė. ňё పదĄరవ శñĜȿĆ \nœంėన కĤ. ɖ కృషȼƃవüయల ఆăȾనంǖ అషȸėగȰజ కѕలǖ \nఒకĒä ఉంĒ అƅక సñȮüѓ ƪంóу. âళహħȽ \núĄతɆɹяъ ʛబంధЎĢǖ రċంçу. üоలъ, üజƓవъ \nęరħంçу. \n \nɖâళహŋȽశɌర శతకంǖę మзటం",
    "options": [
      {
        "number": 1,
        "text": "ɖâళ హƓȽశɌర"
      },
      {
        "number": 2,
        "text": "ɖâళహŋȽశɌü"
      },
      {
        "number": 3,
        "text": "ɖâళహŋɓశɌü"
      },
      {
        "number": 4,
        "text": "ɖâєƏశɌü"
      }
    ],
    "correctOption": 2,
    "correctText": "ɖâళహŋȽశɌü",
    "difficulty": "Not identified in source",
    "sourceText": "59. \n \nɖâళహŋȽశɌü అƅ మзటంǉ ఉనɁ పదɇం ґరȵĐ కĤ \nరċంċన ɖâళహŋȽశɌర శతకంǖė. ňё పదĄరవ శñĜȿĆ \nœంėన కĤ. ɖ కృషȼƃవüయల ఆăȾనంǖ అషȸėగȰజ కѕలǖ \nఒకĒä ఉంĒ అƅక సñȮüѓ ƪంóу. âళహħȽ \núĄతɆɹяъ ʛబంధЎĢǖ రċంçу. üоలъ, üజƓవъ \nęరħంçу. \n \nɖâళహŋȽశɌర శతకంǖę మзటం \n1) \nɖâళ హƓȽశɌర \n \n2) \nɖâళహŋȽశɌü \n \n3) \nɖâళహŋɓశɌü \n \n4) \nɖâєƏశɌü"
  },
  {
    "id": 59,
    "printedNumber": 59,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "59. \n \nతĠƘండ Ŭంగúంబ 18వ శñĜȿĆ œంėన కవğ˞. \nċҎȽё čþɊ తĠƘండ ʭమęĀħ. øలɇం ъంŷ \nభగవదɅзȽüѓ. ňё నృħంహ శతకంǉ öс ĥవõటకం, \nõరħంహĤþసకథ అƅ యɕäõѓ, üజǓäమృతం అƅ \nėɌపద âవɇం, ɖ Ɛంకìచల మĄతɆɹం, అĂȸంగ Ǔగăరం, \nĀĥషȹ üúయణమƅ పదɇâĀɇѓ రċంçё. \n \nŬంగúంబ యɕäనం",
    "options": [
      {
        "number": 1,
        "text": "üజǓäమృతం"
      },
      {
        "number": 2,
        "text": "üúయణం"
      },
      {
        "number": 3,
        "text": "ĥవõటకం"
      },
      {
        "number": 4,
        "text": "Āĥషȹ üúయణం"
      }
    ],
    "correctOption": 3,
    "correctText": "ĥవõటకం",
    "difficulty": "Not identified in source",
    "sourceText": "59. \n \nతĠƘండ Ŭంగúంబ 18వ శñĜȿĆ œంėన కవğ˞. \nċҎȽё čþɊ తĠƘండ ʭమęĀħ. øలɇం ъంŷ \nభగవదɅзȽüѓ. ňё నృħంహ శతకంǉ öс ĥవõటకం, \nõరħంహĤþసకథ అƅ యɕäõѓ, üజǓäమృతం అƅ \nėɌపద âవɇం, ɖ Ɛంకìచల మĄతɆɹం, అĂȸంగ Ǔగăరం, \nĀĥషȹ üúయణమƅ పదɇâĀɇѓ రċంçё. \n \nŬంగúంబ యɕäనం \n \n1) \nüజǓäమృతం \n \n2) \nüúయణం \n \n3) \nĥవõటకం \n \n4) \nĀĥషȹ üúయణం"
  },
  {
    "id": 60,
    "printedNumber": 60,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "60. \n \nñమరыѕɌ âండяǉ మదыżъйъ బంĘంçలę \nఆǖċంŷĀу, ėĠůనыѕɌ Ɩనǉ వʎяъ ƺѐటз \nʛయĕɁంŷĀу, ఒకȮ Ɓš Ƭсȸǉ ఉӐసяʘы ĽĐę ĕయɇä \núüȳలъзƅĀĒǉъ, җёȯలъ మంċ úటలǉ \núüȳలę ʛయĕɁంŷ Āё ѿî җёȯలǉ సúъలѕñё. \n \n \nగదɇúôరంä җёȯę మంċ úటలǉ úüȳలъзƅ Āу",
    "options": [
      {
        "number": 1,
        "text": "éȷę"
      },
      {
        "number": 2,
        "text": "эėɀమంцу"
      },
      {
        "number": 3,
        "text": "మĄцɆу"
      },
      {
        "number": 4,
        "text": "җёȯу"
      }
    ],
    "correctOption": 4,
    "correctText": "җёȯу",
    "difficulty": "Not identified in source",
    "sourceText": "60. \n \nñమరыѕɌ âండяǉ మదыżъйъ బంĘంçలę \nఆǖċంŷĀу, ėĠůనыѕɌ Ɩనǉ వʎяъ ƺѐటз \nʛయĕɁంŷĀу, ఒకȮ Ɓš Ƭсȸǉ ఉӐసяʘы ĽĐę ĕయɇä \núüȳలъзƅĀĒǉъ, җёȯలъ మంċ úటలǉ \núüȳలę ʛయĕɁంŷ Āё ѿî җёȯలǉ సúъలѕñё. \n \n \nగదɇúôరంä җёȯę మంċ úటలǉ úüȳలъзƅ Āу \n1) \néȷę \n \n2) \nэėɀమంцу \n \n3) \nమĄцɆу \n \n4) \nҗёȯу"
  },
  {
    "id": 61,
    "printedNumber": 61,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "61. \n \nƅĐ Ĥóɇ ĤôనంǖҒ ŝѓй Āచకంǖ ఎǍɁƖęɁ \nƐమన పóɇѓ కęɂҠȽƅ ఉõɁğ. œƆɂ ăమరȾɹяనɁ ñతల \nతరం ĀĠ ĀరɀకɇĥĜüలз పĠĞతЇǎğ తమ మనవళɋѿ, \nమనవüళɋѿ ǐĘంŷ అవâశం Ǝę шħȾĕǖ ѿî ƅĐ øలѓ \nƐమన పóɇѓ కంఠసȾం ŷయగѓйцõɁё. సЉన అరȾం \nŝĢయకǎğõ Ɛమన పóɇѓ మననం ŷјȽõɁё. \n \n \nЃ Ɔü ఆôరంä ňĠ పóɇѓ ఎǍɁƖęɁ ŝѓйĀచకంǖ \nకęĚјȽõɁğ.",
    "options": [
      {
        "number": 1,
        "text": "బşȿన"
      },
      {
        "number": 2,
        "text": "Ɛమన"
      },
      {
        "number": 3,
        "text": "ǎతన"
      },
      {
        "number": 4,
        "text": "úరదŬంకయɇ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ɛమన",
    "difficulty": "Not identified in source",
    "sourceText": "61. \n \nƅĐ Ĥóɇ ĤôనంǖҒ ŝѓй Āచకంǖ ఎǍɁƖęɁ \nƐమన పóɇѓ కęɂҠȽƅ ఉõɁğ. œƆɂ ăమరȾɹяనɁ ñతల \nతరం ĀĠ ĀరɀకɇĥĜüలз పĠĞతЇǎğ తమ మనవళɋѿ, \nమనవüళɋѿ ǐĘంŷ అవâశం Ǝę шħȾĕǖ ѿî ƅĐ øలѓ \nƐమన పóɇѓ కంఠసȾం ŷయగѓйцõɁё. సЉన అరȾం \nŝĢయకǎğõ Ɛమన పóɇѓ మననం ŷјȽõɁё. \n \n \nЃ Ɔü ఆôరంä ňĠ పóɇѓ ఎǍɁƖęɁ ŝѓйĀచకంǖ \nకęĚјȽõɁğ. \n1) \nబşȿన \n2) \nƐమన \n \n3) \nǎతన \n \n4) \núరదŬంకయɇ"
  },
  {
    "id": 62,
    "printedNumber": 62,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "62. \n \n1829 తంéҝĠǖę üúüѕ ఇరవŧɇęĞƃళɋĀу. \nబљǓйɇу. ęంî మüɇదјȽу. మüđ ĀɇకరðęɁ \nరċంçу. ‘ŝĢమఖȣ’ ъ మüđǖĆ అъవėంçу. ఇతę \nఇంĬɊї ùĂ éȷనం ఆశȳరɇకరЇనė. âƎıǖ ŰîɆషȸё పęĆ \nęంî అరɐతѓనɁĀу. \n \n \n \n \nüúüѕ రċంċన Āɇకరణం",
    "options": [
      {
        "number": 1,
        "text": "ఇంĬɊї Āɇకరణం"
      },
      {
        "number": 2,
        "text": "మüđ Āɇకరణం"
      },
      {
        "number": 3,
        "text": "సంసȭత Āɇకరణం"
      },
      {
        "number": 4,
        "text": "ŝѓй Āɇకరణం"
      }
    ],
    "correctOption": 2,
    "correctText": "మüđ Āɇకరణం",
    "difficulty": "Not identified in source",
    "sourceText": "62. \n \n1829 తంéҝĠǖę üúüѕ ఇరవŧɇęĞƃళɋĀу. \nబљǓйɇу. ęంî మüɇదјȽу. మüđ ĀɇకరðęɁ \nరċంçу. ‘ŝĢమఖȣ’ ъ మüđǖĆ అъవėంçу. ఇతę \nఇంĬɊї ùĂ éȷనం ఆశȳరɇకరЇనė. âƎıǖ ŰîɆషȸё పęĆ \nęంî అరɐతѓనɁĀу. \n \n \n \n \nüúüѕ రċంċన Āɇకరణం \n1) \nఇంĬɊї Āɇకరణం \n2) \nమüđ Āɇకరణం \n \n3) \nసంసȭత Āɇకరణం \n \n4) \nŝѓй Āɇకరణం"
  },
  {
    "id": 63,
    "printedNumber": 63,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "63. \n \nపóɇęɁ йంŚѓ įѓȳƖę ǎƋþä రċంċన ùవకĤ \nɖõయę јøɄüѕ. ǿభѬę ʛణయ ûʖ, ఫలѺĕ, \núతృĬñѓ ùవకĤñāఖз œంėనĤ. ăɌతంʺɇనంతరం \nఆయన రċంċన âĀɇǖɊ ‘Ɛదõ Āјƃవя’, జనɆҖĞ \nసంʛóయ పదɀĕǖęĤ. ıĤñъభĀѓ äనం ŷāక ɖ õయę \nఅంతёɆиЋ  రċంċన âవɇం Ɛదõ Āјƃవя. \nజనɆҖǒహపĐమ ŷత ñъ జęɆంċన ƪėŪ ŋమ \nమĨమలъ, అందచంóలъ, ఆ ŋమǉ తనзనɁ ňడüę \nబంôęɁ “జనɆҖĞ”ǖ వĠȼంçё. \n \n \nõయę јøɄüѕ ăɌతంʺɇనంతర రచన",
    "options": [
      {
        "number": 1,
        "text": "úతృĬñѓ"
      },
      {
        "number": 2,
        "text": "ƐదõĀјƃవя"
      },
      {
        "number": 3,
        "text": "ǿభѬę ʛణయûʖ"
      },
      {
        "number": 4,
        "text": "ఫలѺĕ"
      }
    ],
    "correctOption": 2,
    "correctText": "ƐదõĀјƃవя",
    "difficulty": "Not identified in source",
    "sourceText": "63. \n \nపóɇęɁ йంŚѓ įѓȳƖę ǎƋþä రċంċన ùవకĤ \nɖõయę јøɄüѕ. ǿభѬę ʛణయ ûʖ, ఫలѺĕ, \núతృĬñѓ ùవకĤñāఖз œంėనĤ. ăɌతంʺɇనంతరం \nఆయన రċంċన âĀɇǖɊ ‘Ɛదõ Āјƃవя’, జనɆҖĞ \nసంʛóయ పదɀĕǖęĤ. ıĤñъభĀѓ äనం ŷāక ɖ õయę \nఅంతёɆиЋ  రċంċన âవɇం Ɛదõ Āјƃవя. \nజనɆҖǒహపĐమ ŷత ñъ జęɆంċన ƪėŪ ŋమ \nమĨమలъ, అందచంóలъ, ఆ ŋమǉ తనзనɁ ňడüę \nబంôęɁ “జనɆҖĞ”ǖ వĠȼంçё. \n \n \nõయę јøɄüѕ ăɌతంʺɇనంతర రచన \n \n1) \núతృĬñѓ \n \n2) \nƐదõĀјƃవя \n \n3) \nǿభѬę ʛణయûʖ \n \n4) \nఫలѺĕ"
  },
  {
    "id": 64,
    "printedNumber": 64,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "64. \n \nఅĝనవ Āగъ āసъѓ ɖ Ĉуй üమҗĠȽ ùĂ \nసంసȮరణз ғъƖę రచనǖɊ ĀɇవĄĠకùషъ \nʛǓĈంచవмȳనటంǉ ఆщęక కĤతɌం Ţదȿమѓы ĕĠĈంė. \nʛజѓ úìɊž ùషз, âĀɇǖɊ ùషз ఉనɁ వɇñɇăęɁ \nƥలĈంċ âవɇùషъ ʛజలз దగȰరä Ĺјз üĀలę \nıĤతమంñ కృĦ ŷāё. \n \n Ѓ Ɔüǖ Ĉуй ĀĠę ఇþ సంǐĘంçё",
    "options": [
      {
        "number": 1,
        "text": "అĝనవ āసъу"
      },
      {
        "number": 2,
        "text": "అĝనవ ĀĬіу"
      },
      {
        "number": 3,
        "text": "అĝనవ Āగъāసъу"
      },
      {
        "number": 4,
        "text": "అĝనవ ĤƑɌశɌёу"
      }
    ],
    "correctOption": 3,
    "correctText": "అĝనవ Āగъāసъу",
    "difficulty": "Not identified in source",
    "sourceText": "64. \n \nఅĝనవ Āగъ āసъѓ ɖ Ĉуй üమҗĠȽ ùĂ \nసంసȮరణз ғъƖę రచనǖɊ ĀɇవĄĠకùషъ \nʛǓĈంచవмȳనటంǉ ఆщęక కĤతɌం Ţదȿమѓы ĕĠĈంė. \nʛజѓ úìɊž ùషз, âĀɇǖɊ ùషз ఉనɁ వɇñɇăęɁ \nƥలĈంċ âవɇùషъ ʛజలз దగȰరä Ĺјз üĀలę \nıĤతమంñ కృĦ ŷāё. \n \n Ѓ Ɔüǖ Ĉуй ĀĠę ఇþ సంǐĘంçё \n \n1) \nఅĝనవ āసъу \n \n2) \nఅĝనవ ĀĬіу \n \n3) \nఅĝనవ Āగъāసъу \n \n4) \nఅĝనవ ĤƑɌశɌёу"
  },
  {
    "id": 65,
    "printedNumber": 65,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "65. \n \nüయΗѓ јøɄüѕ äё øలɇంǖ ĀĠ Ɗనúమ \nఅĀɌĠ јʝహɆణɇ āħɓ äĠǉ కĢħ అవôõѓ ŷјȽంžĀё. \nఅవôన Ĥదɇ అపĠĞతЇన ఆదరం ƪంшҎ ఉనɁ âలంǖ \nüయΗѓ అవôన Ĥదɇ Ѝы ఆకĠɎцలûɇё. \n \n \nఈ ĤదɇЍы üయΗѓĀё ఆకĠɎцలûɇё",
    "options": [
      {
        "number": 1,
        "text": "Ĥѓవల Ĥదɇ"
      },
      {
        "number": 2,
        "text": "ăĨతɇ Ĥదɇ"
      },
      {
        "number": 3,
        "text": "ăంసȭĕక Ĥదɇ"
      },
      {
        "number": 4,
        "text": "అవôన Ĥదɇ"
      }
    ],
    "correctOption": 4,
    "correctText": "అవôన Ĥదɇ",
    "difficulty": "Not identified in source",
    "sourceText": "65. \n \nüయΗѓ јøɄüѕ äё øలɇంǖ ĀĠ Ɗనúమ \nఅĀɌĠ јʝహɆణɇ āħɓ äĠǉ కĢħ అవôõѓ ŷјȽంžĀё. \nఅవôన Ĥదɇ అపĠĞతЇన ఆదరం ƪంшҎ ఉనɁ âలంǖ \nüయΗѓ అవôన Ĥదɇ Ѝы ఆకĠɎцలûɇё. \n \n \nఈ ĤదɇЍы üయΗѓĀё ఆకĠɎцలûɇё \n \n1) \nĤѓవల Ĥదɇ \n \n2) \năĨతɇ Ĥదɇ \n \n3) \năంసȭĕక Ĥదɇ \n \n4) \nఅవôన Ĥదɇ"
  },
  {
    "id": 66,
    "printedNumber": 66,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "66. \n \nఆంʙăĨñɇęɁ җуыѕɌѓ ఆёâయѓä \nవృėɀƪంėంċన úస ప˞క ùరĕ 1924 ǖ ʿరంĝంపబĒ \nఇపɂĐĪ ʇమం తపɂзంî Ŭѓవడటం ఆంʙéĕĆ గరɌâరణం. \nŋɓల ƺసం ʿరంĝంచబĒõ ఆంѭలందĠĆ ఆదరɍöʖЇన \nగృహలɝ ప˞క ăĨñɇęĆ œӐƺదĈన Ɠవ ŷħంė. \n \n \nЃ Ɔü ఆôరంä గృహలɝ ప˞క ňĠ ƺసం ʿరంĝంచబĒంė",
    "options": [
      {
        "number": 1,
        "text": "øలѓ"
      },
      {
        "number": 2,
        "text": "వృшɀѓ"
      },
      {
        "number": 3,
        "text": "ŋɓѓ"
      },
      {
        "number": 4,
        "text": "వǓజъѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ŋɓѓ",
    "difficulty": "Not identified in source",
    "sourceText": "66. \n \nఆంʙăĨñɇęɁ җуыѕɌѓ ఆёâయѓä \nవృėɀƪంėంċన úస ప˞క ùరĕ 1924 ǖ ʿరంĝంపబĒ \nఇపɂĐĪ ʇమం తపɂзంî Ŭѓవడటం ఆంʙéĕĆ గరɌâరణం. \nŋɓల ƺసం ʿరంĝంచబĒõ ఆంѭలందĠĆ ఆదరɍöʖЇన \nగృహలɝ ప˞క ăĨñɇęĆ œӐƺదĈన Ɠవ ŷħంė. \n \n \nЃ Ɔü ఆôరంä గృహలɝ ప˞క ňĠ ƺసం ʿరంĝంచబĒంė  \n1) \nøలѓ \n2) \nవృшɀѓ \n \n3) \nŋɓѓ \n \n4) \nవǓజъѓ"
  },
  {
    "id": 67,
    "printedNumber": 67,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "67. \n \nɖѐцѓ బĢŹపĢɊ లɞâంతం, óమüо \nыండńâʄу, úధవŢėȿ эċȳ јందరüమāħɓ, \nцమɆలŋñüమҗĠȽ, шҝɌĠ üĞŨĒȺ ʛభృцѓ \néĹǓదɇమ కѕѓä ʛãɇĕ ƪంóё. óమüо ĀĠ \nõటâęɁ ˥Ĵї ʛюతɌం ęƒĘంċంė. \n \n \nЃ Ɔü ఆôరంä ˥Ĵї ʛюతɌం ňĠõటâęɁ ęƒĘంċంė",
    "options": [
      {
        "number": 1,
        "text": "బĢŹపĢɊ లɞâంతం"
      },
      {
        "number": 2,
        "text": "óమüо ыండńâʄу"
      },
      {
        "number": 3,
        "text": "цమɆల ŋñüమ җĠȽ"
      },
      {
        "number": 4,
        "text": "шҝɌĠ üĞŨĒȺ"
      }
    ],
    "correctOption": 2,
    "correctText": "óమüо ыండńâʄу",
    "difficulty": "Not identified in source",
    "sourceText": "67. \n \nɖѐцѓ బĢŹపĢɊ లɞâంతం, óమüо \nыండńâʄу, úధవŢėȿ эċȳ јందరüమāħɓ, \nцమɆలŋñüమҗĠȽ, шҝɌĠ üĞŨĒȺ ʛభృцѓ \néĹǓదɇమ కѕѓä ʛãɇĕ ƪంóё. óమüо ĀĠ \nõటâęɁ ˥Ĵї ʛюతɌం ęƒĘంċంė. \n \n \nЃ Ɔü ఆôరంä ˥Ĵї ʛюతɌం ňĠõటâęɁ ęƒĘంċంė \n \n1) \nబĢŹపĢɊ లɞâంతం  \n \n2) \nóమüо ыండńâʄу \n \n3) \nцమɆల ŋñüమ җĠȽ \n \n4) \nшҝɌĠ üĞŨĒȺ"
  },
  {
    "id": 68,
    "printedNumber": 68,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "68. \n \nఆщęâంʙ కĤñĤâసంǖ éĹǓదɇమం కĤñɌęɁ \năúъɇలз దగȰరä ŝċȳంė. ĞĈĢన సమûǖɊ కĤతɌం \nరċంచę Ɩందё ƃశ భзȽలъ ăɌతంΒɇదɇమం కѕలъ \nŷħంė. ɖ йరéడ üఘవ శరɆ సంöదకతɌం వĨంċన éĹయ \nĬñѓ చėĤƁ ఆõĐ ఉదɇమ, కĤñ సɌҙపం చకȮä \nǐధపуцంė. \n \nɖ йరéడ üఘవ శరɆ äё ĻęĆ సంöదకతɌం వĨంçё",
    "options": [
      {
        "number": 1,
        "text": "éĹయ Ŵûѓ"
      },
      {
        "number": 2,
        "text": "éĹయ Ĭñѓ"
      },
      {
        "number": 3,
        "text": "éĹయ ĬüɌĔ"
      },
      {
        "number": 4,
        "text": "éĹయ ϱüɌĔ"
      }
    ],
    "correctOption": 2,
    "correctText": "éĹయ Ĭñѓ",
    "difficulty": "Not identified in source",
    "sourceText": "68. \n \nఆщęâంʙ కĤñĤâసంǖ éĹǓదɇమం కĤñɌęɁ \năúъɇలз దగȰరä ŝċȳంė. ĞĈĢన సమûǖɊ కĤతɌం \nరċంచę Ɩందё ƃశ భзȽలъ ăɌతంΒɇదɇమం కѕలъ \nŷħంė. ɖ йరéడ üఘవ శరɆ సంöదకతɌం వĨంċన éĹయ \nĬñѓ చėĤƁ ఆõĐ ఉదɇమ, కĤñ సɌҙపం చకȮä \nǐధపуцంė. \n \nɖ йరéడ üఘవ శరɆ äё ĻęĆ సంöదకతɌం వĨంçё  \n1) \néĹయ Ŵûѓ \n2) \néĹయ Ĭñѓ \n \n3) \néĹయ ĬüɌĔ \n \n4) \néĹయ ϱüɌĔ"
  },
  {
    "id": 69,
    "printedNumber": 69,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "69. \n \nŝలంäణǖ ăంసȭĕక ϴతõɇęĆ ǋహదం ŷħన \núడöĐ హъమంతüѕ, ఆėüо ňరభʘüѕ, јరవరం \nʛñపŨĒȺäరѓ ĤóɇĤషయకంä ŬъకబĒѕనɁ ʿంతంǖ \nకѕలъ ΗతɏĨంçё. ƼలƖండ కѕల రచనలъ, ఆâüలъ \nƓకĠంċ ʛకĐంċన јరవరం ʛñపŨĒȺäё ѐవзలз \nйёцѓɇѓ. \n \n\n \nЃ Ɔü ఆôరంä úడöĐ హъమంతüѕ, јరవరం \nʛñపŨĒȺ వంĐ Āё ఈ Ĥషయంǖ ŬъకబĒ ఉనɁ  ʿంత \nకѕలъ ΗతɏĨంçё.",
    "options": [
      {
        "number": 1,
        "text": "Ĥóɇ Ĥషయం"
      },
      {
        "number": 2,
        "text": "వɇవăయ Ĥషయం"
      },
      {
        "number": 3,
        "text": "కళల Ĥషయం"
      },
      {
        "number": 4,
        "text": "ఆщęకత Ĥషయం"
      }
    ],
    "correctOption": 1,
    "correctText": "Ĥóɇ Ĥషయం",
    "difficulty": "Not identified in source",
    "sourceText": "69. \n \nŝలంäణǖ ăంసȭĕక ϴతõɇęĆ ǋహదం ŷħన \núడöĐ హъమంతüѕ, ఆėüо ňరభʘüѕ, јరవరం \nʛñపŨĒȺäరѓ ĤóɇĤషయకంä ŬъకబĒѕనɁ ʿంతంǖ \nకѕలъ ΗతɏĨంçё. ƼలƖండ కѕల రచనలъ, ఆâüలъ \nƓకĠంċ ʛకĐంċన јరవరం ʛñపŨĒȺäё ѐవзలз \nйёцѓɇѓ. \n \n\n \nЃ Ɔü ఆôరంä úడöĐ హъమంతüѕ, јరవరం \nʛñపŨĒȺ వంĐ Āё ఈ Ĥషయంǖ ŬъకబĒ ఉనɁ  ʿంత \nకѕలъ ΗతɏĨంçё. \n1) \nĤóɇ Ĥషయం \n2) \nవɇవăయ Ĥషయం \n \n3) \nకళల Ĥషయం \n \n4) \nఆщęకత Ĥషయం"
  },
  {
    "id": 70,
    "printedNumber": 70,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "70. \n \nĚంగģ – â҉Ġ కѕѓ పĠణతదశǖ üħన మĄâవɇం \nǿందరనందя. Ļęƅ ͏ǒపęషతȽę Ŧçȳё ɖ ఉనɁవ \nలɞõüయణ. అశɌƽїę ǿందరనంóęɁ ƌãúʖంä \nʉĨంċ ʿįన కĤతɌంǖę వరȼõపĐషȸతъ, ఆщęక \nùవċʺలǖę ǿందüɇęɁ ŋɌకĠంċ Ń âవɇం రċంçё. \nāంతం, శృంäరం, కёణ రăѓ ఇంшǖ చకȮä \nęరɌĨంచబîȺğ. \n \n \nǿందరనందя ǖ ęరɌĨంచబడę రసя",
    "options": [
      {
        "number": 1,
        "text": "āంతం"
      },
      {
        "number": 2,
        "text": "శృంäరం"
      },
      {
        "number": 3,
        "text": "Ąసɇя"
      },
      {
        "number": 4,
        "text": "కёణ"
      }
    ],
    "correctOption": 3,
    "correctText": "Ąసɇя",
    "difficulty": "Not identified in source",
    "sourceText": "70. \n \nĚంగģ – â҉Ġ కѕѓ పĠణతదశǖ üħన మĄâవɇం \nǿందరనందя. Ļęƅ ͏ǒపęషతȽę Ŧçȳё ɖ ఉనɁవ \nలɞõüయణ. అశɌƽїę ǿందరనంóęɁ ƌãúʖంä \nʉĨంċ ʿįన కĤతɌంǖę వరȼõపĐషȸతъ, ఆщęక \nùవċʺలǖę ǿందüɇęɁ ŋɌకĠంċ Ń âవɇం రċంçё. \nāంతం, శృంäరం, కёణ రăѓ ఇంшǖ చకȮä \nęరɌĨంచబîȺğ. \n \n \nǿందరనందя ǖ ęరɌĨంచబడę రసя \n1) \nāంతం \n \n2) \nశృంäరం \n \n3) \nĄసɇя \n \n4) \nకёణ"
  },
  {
    "id": 71,
    "printedNumber": 71,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "71. \n \nùవకĤతɌమనä ǿందరɇం, ͏మ, яఖɇంä ĤశɌúనవ \n͏మ తలыƖăȽğ. ùవకĤతɌంǖ ʛకృĕ, ʛణయం, ʛǐధం \nʿôనɇం వĨăȽğ. ఆñɆʦయ ńĕ ùవకĤతɌంǖ ʿôనɇం \nవĨంċంė. ùవం Ǝę కĤతɌяంсంó? అę ʛĥɁంċ \nùవకĤతɌమనɁ Ɔёъ Ɩందё కѕѓ ఆƕĚంçё. \n \n \nఈ ńĕĆ ùవ కĤతɌం ʿôనɇం వĨంċంė",
    "options": [
      {
        "number": 1,
        "text": "ఆñɆʦయ"
      },
      {
        "number": 2,
        "text": "ఆñɆనంద"
      },
      {
        "number": 3,
        "text": "ఆƐāతɆక"
      },
      {
        "number": 4,
        "text": "ఆనంóʦయ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆñɆʦయ",
    "difficulty": "Not identified in source",
    "sourceText": "71. \n \nùవకĤతɌమనä ǿందరɇం, ͏మ, яఖɇంä ĤశɌúనవ \n͏మ తలыƖăȽğ. ùవకĤతɌంǖ ʛకృĕ, ʛణయం, ʛǐధం \nʿôనɇం వĨăȽğ. ఆñɆʦయ ńĕ ùవకĤతɌంǖ ʿôనɇం \nవĨంċంė. ùవం Ǝę కĤతɌяంсంó? అę ʛĥɁంċ \nùవకĤతɌమనɁ Ɔёъ Ɩందё కѕѓ ఆƕĚంçё. \n \n \nఈ ńĕĆ ùవ కĤతɌం ʿôనɇం వĨంċంė \n1) \nఆñɆʦయ \n \n2) \nఆñɆనంద \n \n3) \nఆƐāతɆక \n \n4) \nఆనంóʦయ"
  },
  {
    "id": 72,
    "printedNumber": 72,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "72. \n \nċనɁ ĚలɊలз ŬšɁల అంż ఎంǉ ఇషȸం ɖüమచంѬę \nఅంతĐ Āž øలɇంǖ చందúమ âĀలę ǎё ŢżȸĀడంż \nచంʘĜంబం ఎంత ఆకరɎĸయǒ ŝѓјȽంė. అсవంĐ \nచందúమ Ŭѓϱన – ŬšɁలъ మన కѕల âĀɇǖɊ ఎంǉ \nఅшɄతంä వĠȼçё. \n \nЃ Ɔü ఆôరంä ňĠĆ ŬšɁలంż అతɇంత మзȮవ",
    "options": [
      {
        "number": 1,
        "text": "ŢదȿĀё"
      },
      {
        "number": 2,
        "text": "Ǟúёѓ"
      },
      {
        "number": 3,
        "text": "ċనɁĚలɊѓ"
      },
      {
        "number": 4,
        "text": "éȷъѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ċనɁĚలɊѓ",
    "difficulty": "Not identified in source",
    "sourceText": "72. \n \nċనɁ ĚలɊలз ŬšɁల అంż ఎంǉ ఇషȸం ɖüమచంѬę \nఅంతĐ Āž øలɇంǖ చందúమ âĀలę ǎё ŢżȸĀడంż \nచంʘĜంబం ఎంత ఆకరɎĸయǒ ŝѓјȽంė. అсవంĐ \nచందúమ Ŭѓϱన – ŬšɁలъ మన కѕల âĀɇǖɊ ఎంǉ \nఅшɄతంä వĠȼçё. \n \nЃ Ɔü ఆôరంä ňĠĆ ŬšɁలంż అతɇంత మзȮవ \n \n1) \nŢదȿĀё \n \n2) \nǞúёѓ \n \n3) \nċనɁĚలɊѓ \n \n4) \néȷъѓ"
  },
  {
    "id": 73,
    "printedNumber": 73,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "73. \n \nöలకడĢ గరɅంǖ ъంĒ ыĐȸన ŬšɁల ఉŢɂనþ \nĤజృంĝంċ ėзȮలĽɁ яంœĕȽంė. చంʘĜంబం ఆėƑїę \nöъыþä కęɂҠȽ ఉంė. అంшǖę మచȳ Ĥїȼѕþä \nకъɁలз కęɂҠȽ అలĠјȽనɁė. ఇంшǖę ùవõకృĕ óę \nĤసȽӇĕ ఎంత Ƙపɂä ఉంė. \n \nЃ Ɔü ఆôరంä ఆėƑїę öъɂþä కęĚంŷė",
    "options": [
      {
        "number": 1,
        "text": "ǁɇతɏɳ"
      },
      {
        "number": 2,
        "text": "రజę"
      },
      {
        "number": 3,
        "text": "చంѬу"
      },
      {
        "number": 4,
        "text": "సяʘం"
      }
    ],
    "correctOption": 3,
    "correctText": "చంѬу",
    "difficulty": "Not identified in source",
    "sourceText": "73. \n \nöలకడĢ గరɅంǖ ъంĒ ыĐȸన ŬšɁల ఉŢɂనþ \nĤజృంĝంċ ėзȮలĽɁ яంœĕȽంė. చంʘĜంబం ఆėƑїę \nöъыþä కęɂҠȽ ఉంė. అంшǖę మచȳ Ĥїȼѕþä \nకъɁలз కęɂҠȽ అలĠјȽనɁė. ఇంшǖę ùవõకృĕ óę \nĤసȽӇĕ ఎంత Ƙపɂä ఉంė. \n \nЃ Ɔü ఆôరంä ఆėƑїę öъɂþä కęĚంŷė \n1) \nǁɇతɏɳ \n \n2) \nరజę \n \n3) \nచంѬу \n \n4) \nసяʘం"
  },
  {
    "id": 74,
    "printedNumber": 74,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "74. \n \nపరవјȽ ċనɁయҠĠ తĞళõуǖę œంగȞ పсȸ \nčþɊǖę ɖ ŢరంэҐёǖ జęɆంçу. మʼјǖę \nపచȳయɇపɂ కÿāలǖ ŝѓй పంĒцĒä పęŷāу. ‘ҠĠ’ \nఅƅė ఈయన Ĝёш. ҠĠ అంż పంĒцу అę అరȾం. ŝѓй, \nతĞళ, సంసȭత, ఆంగɊ ùషలǖ ňё పంĒцѓ. \n \n“ҠĠ” అంż",
    "options": [
      {
        "number": 1,
        "text": "öమёу"
      },
      {
        "number": 2,
        "text": "పవъу"
      },
      {
        "number": 3,
        "text": "öవъу"
      },
      {
        "number": 4,
        "text": "పంĒцу"
      }
    ],
    "correctOption": 4,
    "correctText": "పంĒцу",
    "difficulty": "Not identified in source",
    "sourceText": "74. \n \nపరవјȽ ċనɁయҠĠ తĞళõуǖę œంగȞ పсȸ \nčþɊǖę ɖ ŢరంэҐёǖ జęɆంçу. మʼјǖę \nపచȳయɇపɂ కÿāలǖ ŝѓй పంĒцĒä పęŷāу. ‘ҠĠ’ \nఅƅė ఈయన Ĝёш. ҠĠ అంż పంĒцу అę అరȾం. ŝѓй, \nతĞళ, సంసȭత, ఆంగɊ ùషలǖ ňё పంĒцѓ. \n \n“ҠĠ” అంż \n1) \nöమёу \n2) \nపవъу \n \n3) \nöవъу \n \n4) \nపంĒцу"
  },
  {
    "id": 75,
    "printedNumber": 75,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "75. \n \nసంసȭతంǖ ĤїȼశరɆ పంచతంʖం ĤశɌĤãɇĕ äంċన \nʉంథం. óęɁ అъసĠంċ అƅక ʉంòѓ వçȳğ. ĀĐǖ \nలɞõüయణ పంĒцĒ Ĩǉపƃశం ఒకĐ. Ļę ఆôరంä \nċనɁయ ҠĠ Ľĕ చంˠకъ ŝѓйǖ రċంçу. ఇė ʭంĖక \nవచనంǖ ăйцంė. \n \nЃ Ɔü ఆôరంä ĤశɌĤãɇĕ äంċన ʉంథం",
    "options": [
      {
        "number": 1,
        "text": "పంçయతనం"
      },
      {
        "number": 2,
        "text": "పంచñం˞కం"
      },
      {
        "number": 3,
        "text": "పంచతంʖం"
      },
      {
        "number": 4,
        "text": "పంచ ʿంతం"
      }
    ],
    "correctOption": 3,
    "correctText": "పంచతంʖం",
    "difficulty": "Not identified in source",
    "sourceText": "75. \n \nసంసȭతంǖ ĤїȼశరɆ పంచతంʖం ĤశɌĤãɇĕ äంċన \nʉంథం. óęɁ అъసĠంċ అƅక ʉంòѓ వçȳğ. ĀĐǖ \nలɞõüయణ పంĒцĒ Ĩǉపƃశం ఒకĐ. Ļę ఆôరంä \nċనɁయ ҠĠ Ľĕ చంˠకъ ŝѓйǖ రċంçу. ఇė ʭంĖక \nవచనంǖ ăйцంė. \n \nЃ Ɔü ఆôరంä ĤశɌĤãɇĕ äంċన ʉంథం \n \n1) \nపంçయతనం \n \n2) \nపంచñం˞కం \n \n3) \nపంచతంʖం \n \n4) \nపంచ ʿంతం"
  },
  {
    "id": 76,
    "printedNumber": 76,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "76. \n \nċనɁయҠĠ అɕరйచȴя, ఆంʙâదంబĠ, పóɇంʙ \nĀɇకరణя, ҠʺంʙĀɇకరణя, శబȿలɕణ సంʉహя, \nøలĀɇకరణя, Ľĕచంˠక ƮదЋన ʉంòѓ üāу. ఈయన \nరచõЎĢ öఠзĔȼ ఆకсȸзƅþ ʿįన âవɇùషǖ ఉంсంė. \nĽĕచంˠక øలĀɇకరðѓ లɕɹ-లɕణ ʉంòѓä \nʛħėɀƪంóğ. \n \nċనɁయҠĠ రచõ ЎĢ",
    "options": [
      {
        "number": 1,
        "text": "ʿįన âవɇùష"
      },
      {
        "number": 2,
        "text": "నňన âవɇùష"
      },
      {
        "number": 3,
        "text": "ʿįన చంғùష"
      },
      {
        "number": 4,
        "text": "నňన పదɇùష"
      }
    ],
    "correctOption": 1,
    "correctText": "ʿįన âవɇùష",
    "difficulty": "Not identified in source",
    "sourceText": "76. \n \nċనɁయҠĠ అɕరйచȴя, ఆంʙâదంబĠ, పóɇంʙ \nĀɇకరణя, ҠʺంʙĀɇకరణя, శబȿలɕణ సంʉహя, \nøలĀɇకరణя, Ľĕచంˠక ƮదЋన ʉంòѓ üāу. ఈయన \nరచõЎĢ öఠзĔȼ ఆకсȸзƅþ ʿįన âవɇùషǖ ఉంсంė. \nĽĕచంˠక øలĀɇకరðѓ లɕɹ-లɕణ ʉంòѓä \nʛħėɀƪంóğ. \n \nċనɁయҠĠ రచõ ЎĢ \n \n1) \nʿįన âవɇùష \n \n2) \nనňన âవɇùష  \n \n3) \nʿįన చంғùష \n \n4) \nనňన పదɇùష"
  },
  {
    "id": 77,
    "printedNumber": 77,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "77. \n \núనవıĤతంǖ Ľĕ అƅė çþ яఖɇЇన Ĥషయం. \nʛĕ మęĦĪ సంöదన ఎంతяఖɇǒ పǔపâరం ѿî \nఅంƁяఖɇం ǖభం ఉండѿడш. ǖభం వలɊ తనзäę, \nఇతёలз äę ʛǓజనం ఉండш. మనం ǖభం Ǝзంî \nĞѪలз సĄయం ŷûĢ. \n \n \n \n \nЃ Ɔü ఆôరంä మనǖ ఉండѿడదę",
    "options": [
      {
        "number": 1,
        "text": "ǖభం"
      },
      {
        "number": 2,
        "text": "Ľĕ"
      },
      {
        "number": 3,
        "text": "సంöదన"
      },
      {
        "number": 4,
        "text": "ʇమĥɕణ"
      }
    ],
    "correctOption": 1,
    "correctText": "ǖభం",
    "difficulty": "Not identified in source",
    "sourceText": "77. \n \núనవıĤతంǖ Ľĕ అƅė çþ яఖɇЇన Ĥషయం. \nʛĕ మęĦĪ సంöదన ఎంతяఖɇǒ పǔపâరం ѿî \nఅంƁяఖɇం ǖభం ఉండѿడш. ǖభం వలɊ తనзäę, \nఇతёలз äę ʛǓజనం ఉండш. మనం ǖభం Ǝзంî \nĞѪలз సĄయం ŷûĢ. \n \n \n \n \nЃ Ɔü ఆôరంä మనǖ ఉండѿడదę \n1) \nǖభం \n2) \nĽĕ \n \n3) \nసంöదన \n \n4) \nʇమĥɕణ"
  },
  {
    "id": 78,
    "printedNumber": 78,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "78. \n \nశతకపóɇలǖ మзటం ʛôనЇనė. ఈ పóɇǖɊ ʛĕ \nపదɇం ċవర మзటం ఉంсంė. ఇĤ яకȽâѓ, అంż ఏ \nపóɇęకƃ సɌతంʖ ùవంǉ ఉంсంė. మలɊҖöņయం, \nċతȽశతకం, తĠƘండ నృħంహశతకం, భకȽċంñమĔ శతకం, \nĤశɌõƂశɌర శతకం ƮదЋనĤ ŝѓй ăĨతɇంǖ ƺƖలɊѓä \nఉõɁğ. \n \nЃ Ɔüǖ Ǝę శతకం",
    "options": [
      {
        "number": 1,
        "text": "భకȽċంñమĔ"
      },
      {
        "number": 2,
        "text": "ĤశɌõƂశɌర"
      },
      {
        "number": 3,
        "text": "Ʋంక üƊశɌర"
      },
      {
        "number": 4,
        "text": "తరƘండ నృħంహ"
      }
    ],
    "correctOption": 3,
    "correctText": "Ʋంక üƊశɌర",
    "difficulty": "Not identified in source",
    "sourceText": "78. \n \nశతకపóɇలǖ మзటం ʛôనЇనė. ఈ పóɇǖɊ ʛĕ \nపదɇం ċవర మзటం ఉంсంė. ఇĤ яకȽâѓ, అంż ఏ \nపóɇęకƃ సɌతంʖ ùవంǉ ఉంсంė. మలɊҖöņయం, \nċతȽశతకం, తĠƘండ నృħంహశతకం, భకȽċంñమĔ శతకం, \nĤశɌõƂశɌర శతకం ƮదЋనĤ ŝѓй ăĨతɇంǖ ƺƖలɊѓä \nఉõɁğ. \n \nЃ Ɔüǖ Ǝę శతకం \n1) \nభకȽċంñమĔ \n2) \nĤశɌõƂశɌర \n \n3) \nƲంక üƊశɌర \n \n4) \nతరƘండ నృħంహ"
  },
  {
    "id": 79,
    "printedNumber": 79,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "79. \n \nɖâళహŋȽశɌü అƅ మзటంǉ ఉనɁ పదɇం ґరȵĐ కĤ \nరċంċన ɖâళహŋȽశɌర శతకంǖė. ňё పదĄరవ శñĜȿĆ \nœంėన కĤ. ɖ కృషȼƃవüయల ఆăȾనంǖ అషȸėగȰజ కѕలǖ \nఒకĒä ఉంĒ అƅక సñȮüѓ ƪంóу. âళహħȽ \núĄతɆɹяъ ʛబంధЎĢǖ రċంçу. üоలъ, üజƓవъ \nęరħంçу. \n \nɖకృషȼƃవüయల ఆăȾనంǖ కѕѓ",
    "options": [
      {
        "number": 1,
        "text": "అషȸėâɂѓё"
      },
      {
        "number": 2,
        "text": "అషȸėగȰéѓ"
      },
      {
        "number": 3,
        "text": "అషȸІరѕѓ"
      },
      {
        "number": 4,
        "text": "అషȸగéѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "అషȸėగȰéѓ",
    "difficulty": "Not identified in source",
    "sourceText": "79. \n \nɖâళహŋȽశɌü అƅ మзటంǉ ఉనɁ పదɇం ґరȵĐ కĤ \nరċంċన ɖâళహŋȽశɌర శతకంǖė. ňё పదĄరవ శñĜȿĆ \nœంėన కĤ. ɖ కృషȼƃవüయల ఆăȾనంǖ అషȸėగȰజ కѕలǖ \nఒకĒä ఉంĒ అƅక సñȮüѓ ƪంóу. âళహħȽ \núĄతɆɹяъ ʛబంధЎĢǖ రċంçу. üоలъ, üజƓవъ \nęరħంçу. \n \nɖకృషȼƃవüయల ఆăȾనంǖ కѕѓ \n1) \nఅషȸėâɂѓё  \n \n2) \nఅషȸėగȰéѓ \n \n3) \nఅషȸІరѕѓ \n \n4) \nఅషȸగéѓ"
  },
  {
    "id": 80,
    "printedNumber": 80,
    "topic": "తెలుగు సాహిత్య అవగాహన",
    "stem": "80. \n \nతĠƘండ Ŭంగúంబ 18వ శñĜȿĆ œంėన కవğ˞. \nċҎȽё čþɊ తĠƘండ ʭమęĀħ. øలɇం ъంŷ \nభగవదɅзȽüѓ. ňё నృħంహ శతకంǉ öс ĥవõటకం, \nõరħంహĤþసకథ అƅ యɕäõѓ, üజǓäమృతం అƅ \nėɌపద âవɇం, ɖ Ɛంకìచల మĄతɆɹం, అĂȸంగ Ǔగăరం, \nĀĥషȹ üúయణమƅ పదɇâĀɇѓ రċంçё. \n \nŬంగúంబ ఈ దశ ъంŷ భగవదɅзȽüѓ",
    "options": [
      {
        "number": 1,
        "text": "యవɌన"
      },
      {
        "number": 2,
        "text": "Āరɀకɇ"
      },
      {
        "number": 3,
        "text": "Ǟúర"
      },
      {
        "number": 4,
        "text": "øలɇ"
      }
    ],
    "correctOption": 4,
    "correctText": "øలɇ",
    "difficulty": "Not identified in source",
    "sourceText": "80. \n \nతĠƘండ Ŭంగúంబ 18వ శñĜȿĆ œంėన కవğ˞. \nċҎȽё čþɊ తĠƘండ ʭమęĀħ. øలɇం ъంŷ \nభగవదɅзȽüѓ. ňё నృħంహ శతకంǉ öс ĥవõటకం, \nõరħంహĤþసకథ అƅ యɕäõѓ, üజǓäమృతం అƅ \nėɌపద âవɇం, ɖ Ɛంకìచల మĄతɆɹం, అĂȸంగ Ǔగăరం, \nĀĥషȹ üúయణమƅ పదɇâĀɇѓ రċంçё. \n \nŬంగúంబ ఈ దశ ъంŷ భగవదɅзȽüѓ \n \n1) \nయవɌన \n \n2) \nĀరɀకɇ \n \n3) \nǞúర \n \n4) \nøలɇ"
  },
  {
    "id": 81,
    "printedNumber": 81,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "81. \n \nñమరыѕɌ âండяǉ మదыżъйъ బంĘంçలę \nఆǖċంŷĀу, ėĠůనыѕɌ Ɩనǉ వʎяъ ƺѐటз \nʛయĕɁంŷĀу, ఒకȮ Ɓš Ƭсȸǉ ఉӐసяʘы ĽĐę ĕయɇä \núüȳలъзƅĀĒǉъ, җёȯలъ మంċ úటలǉ \núüȳలę ʛయĕɁంŷ Āё ѿî җёȯలǉ సúъలѕñё. \n \nЃ గదɇం ఆôరంä ėĠůన ыѕɌ Ɩనǉ ƺయƎęė",
    "options": [
      {
        "number": 1,
        "text": "వʎం"
      },
      {
        "number": 2,
        "text": "అదȿం"
      },
      {
        "number": 3,
        "text": "œకȮ"
      },
      {
        "number": 4,
        "text": "âయ"
      }
    ],
    "correctOption": 1,
    "correctText": "వʎం",
    "difficulty": "Not identified in source",
    "sourceText": "81. \n \nñమరыѕɌ âండяǉ మదыżъйъ బంĘంçలę \nఆǖċంŷĀу, ėĠůనыѕɌ Ɩనǉ వʎяъ ƺѐటз \nʛయĕɁంŷĀу, ఒకȮ Ɓš Ƭсȸǉ ఉӐసяʘы ĽĐę ĕయɇä \núüȳలъзƅĀĒǉъ, җёȯలъ మంċ úటలǉ \núüȳలę ʛయĕɁంŷ Āё ѿî җёȯలǉ సúъలѕñё. \n \nЃ గదɇం ఆôరంä ėĠůన ыѕɌ Ɩనǉ ƺయƎęė \n1) \nవʎం \n \n2) \nఅదȿం \n \n3) \nœకȮ \n \n4) \nâయ"
  },
  {
    "id": 82,
    "printedNumber": 82,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "82. \n \nƅĐ Ĥóɇ ĤôనంǖҒ ŝѓй Āచకంǖ ఎǍɁƖęɁ \nƐమన పóɇѓ కęɂҠȽƅ ఉõɁğ. œƆɂ ăమరȾɹяనɁ ñతల \nతరం ĀĠ ĀరɀకɇĥĜüలз పĠĞతЇǎğ తమ మనవళɋѿ, \nమనవüళɋѿ ǐĘంŷ అవâశం Ǝę шħȾĕǖ ѿî ƅĐ øలѓ \nƐమన పóɇѓ కంఠసȾం ŷయగѓйцõɁё. సЉన అరȾం \nŝĢయకǎğõ Ɛమన పóɇѓ మననం ŷјȽõɁё. \n \nƐమనపóɇѓ œƆɂ ăమరȾɹяనɁ ñతల తరం ఎకȮడ \nపĠĞతЇంė.",
    "options": [
      {
        "number": 1,
        "text": "ôĠɆక ĥĜరం"
      },
      {
        "number": 2,
        "text": "ఆôɇĕɆక ĥĜరం"
      },
      {
        "number": 3,
        "text": "Āరɀకɇ ĥĜరం"
      },
      {
        "number": 4,
        "text": "ĻąĥĜరం"
      }
    ],
    "correctOption": 3,
    "correctText": "Āరɀకɇ ĥĜరం",
    "difficulty": "Not identified in source",
    "sourceText": "82. \n \nƅĐ Ĥóɇ ĤôనంǖҒ ŝѓй Āచకంǖ ఎǍɁƖęɁ \nƐమన పóɇѓ కęɂҠȽƅ ఉõɁğ. œƆɂ ăమరȾɹяనɁ ñతల \nతరం ĀĠ ĀరɀకɇĥĜüలз పĠĞతЇǎğ తమ మనవళɋѿ, \nమనవüళɋѿ ǐĘంŷ అవâశం Ǝę шħȾĕǖ ѿî ƅĐ øలѓ \nƐమన పóɇѓ కంఠసȾం ŷయగѓйцõɁё. సЉన అరȾం \nŝĢయకǎğõ Ɛమన పóɇѓ మననం ŷјȽõɁё. \n \nƐమనపóɇѓ œƆɂ ăమరȾɹяనɁ ñతల తరం ఎకȮడ \nపĠĞతЇంė. \n1) \nôĠɆక ĥĜరం \n2) \nఆôɇĕɆక ĥĜరం \n \n3) \nĀరɀకɇ ĥĜరం \n \n4) \nĻąĥĜరం"
  },
  {
    "id": 83,
    "printedNumber": 83,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "83. \n \n1829 తంéҝĠǖę üúüѕ ఇరవŧɇęĞƃళɋĀу. \nబљǓйɇу. ęంî మüɇదјȽу. మüđ ĀɇకరðęɁ \nరċంçу. ‘ŝĢమఖȣ’ ъ మüđǖĆ అъవėంçу. ఇతę \nఇంĬɊї ùĂ éȷనం ఆశȳరɇకరЇనė. âƎıǖ ŰîɆషȸё పęĆ \nęంî అరɐతѓనɁĀу. \n \n \n \n \n1829 ǖ üúüѕ వయјɏ",
    "options": [
      {
        "number": 1,
        "text": "ఇరవŧɇęĞė"
      },
      {
        "number": 2,
        "text": "яపɂğ"
      },
      {
        "number": 3,
        "text": "ఇరవûɇё"
      },
      {
        "number": 4,
        "text": "яపɂėŨంу"
      }
    ],
    "correctOption": 1,
    "correctText": "ఇరవŧɇęĞė",
    "difficulty": "Not identified in source",
    "sourceText": "83. \n \n1829 తంéҝĠǖę üúüѕ ఇరవŧɇęĞƃళɋĀу. \nబљǓйɇу. ęంî మüɇదјȽу. మüđ ĀɇకరðęɁ \nరċంçу. ‘ŝĢమఖȣ’ ъ మüđǖĆ అъవėంçу. ఇతę \nఇంĬɊї ùĂ éȷనం ఆశȳరɇకరЇనė. âƎıǖ ŰîɆషȸё పęĆ \nęంî అరɐతѓనɁĀу. \n \n \n \n \n1829 ǖ üúüѕ వయјɏ \n1) \nఇరవŧɇęĞė \n2) \nяపɂğ \n \n3) \nఇరవûɇё \n \n4) \nяపɂėŨంу"
  },
  {
    "id": 84,
    "printedNumber": 84,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "84. \n \nపóɇęɁ йంŚѓ įѓȳƖę ǎƋþä రċంċన ùవకĤ \nɖõయę јøɄüѕ. ǿభѬę ʛణయ ûʖ, ఫలѺĕ, \núతృĬñѓ ùవకĤñāఖз œంėనĤ. ăɌతంʺɇనంతరం \nఆయన రċంċన âĀɇǖɊ ‘Ɛదõ Āјƃవя’, జనɆҖĞ \nసంʛóయ పదɀĕǖęĤ. ıĤñъభĀѓ äనం ŷāక ɖ õయę \nఅంతёɆиЋ  రċంċన âవɇం Ɛదõ Āјƃవя. \nజనɆҖǒహపĐమ ŷత ñъ జęɆంċన ƪėŪ ŋమ \nమĨమలъ, అందచంóలъ, ఆ ŋమǉ తనзనɁ ňడüę \nబంôęɁ “జనɆҖĞ”ǖ వĠȼంçё. \nõయę јøɄüѕ ƪėŪ ŋమ మĨమѓ, అందచంóѓ \nవĠȼంċన రచన",
    "options": [
      {
        "number": 1,
        "text": "జనɆҖĞ"
      },
      {
        "number": 2,
        "text": "ఫలѺĕ"
      },
      {
        "number": 3,
        "text": "ƐదõĀјƃవя"
      },
      {
        "number": 4,
        "text": "úతృĬñѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "జనɆҖĞ",
    "difficulty": "Not identified in source",
    "sourceText": "84. \n \nపóɇęɁ йంŚѓ įѓȳƖę ǎƋþä రċంċన ùవకĤ \nɖõయę јøɄüѕ. ǿభѬę ʛణయ ûʖ, ఫలѺĕ, \núతృĬñѓ ùవకĤñāఖз œంėనĤ. ăɌతంʺɇనంతరం \nఆయన రċంċన âĀɇǖɊ ‘Ɛదõ Āјƃవя’, జనɆҖĞ \nసంʛóయ పదɀĕǖęĤ. ıĤñъభĀѓ äనం ŷāక ɖ õయę \nఅంతёɆиЋ  రċంċన âవɇం Ɛదõ Āјƃవя. \nజనɆҖǒహపĐమ ŷత ñъ జęɆంċన ƪėŪ ŋమ \nమĨమలъ, అందచంóలъ, ఆ ŋమǉ తనзనɁ ňడüę \nబంôęɁ “జనɆҖĞ”ǖ వĠȼంçё. \nõయę јøɄüѕ ƪėŪ ŋమ మĨమѓ, అందచంóѓ \nవĠȼంċన రచన \n \n1) \nజనɆҖĞ \n \n2) \nఫలѺĕ \n \n3) \nƐదõĀјƃవя \n \n4) \núతృĬñѓ"
  },
  {
    "id": 85,
    "printedNumber": 85,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "85. \n“అమɆఒĒ” Ŵయం రచğత",
    "options": [
      {
        "number": 1,
        "text": "Ĝ. Ĥ. నరħంĄüѕ"
      },
      {
        "number": 2,
        "text": "సతɇం శంకరమంċ"
      },
      {
        "number": 3,
        "text": "గĠŦళɋ సతɇõüయణ"
      },
      {
        "number": 4,
        "text": "ċѓѿĠ ƃవыʖ"
      }
    ],
    "correctOption": 1,
    "correctText": "Ĝ. Ĥ. నరħంĄüѕ",
    "difficulty": "Not identified in source",
    "sourceText": "85. \n“అమɆఒĒ” Ŵయం రచğత  \n \n1) \nĜ. Ĥ. నరħంĄüѕ \n \n2) \nసతɇం శంకరమంċ \n \n3) \nగĠŦళɋ సతɇõüయణ \n \n4) \nċѓѿĠ ƃవыʖ"
  },
  {
    "id": 86,
    "printedNumber": 86,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "86. \n“తృĚȽ”  కòęక రచğత",
    "options": [
      {
        "number": 1,
        "text": "î ॥ üҝĠ భరóɌజ"
      },
      {
        "number": 2,
        "text": "సతɇం శంకరమంċ"
      },
      {
        "number": 3,
        "text": "ŬšɁలకంĐ üఘవయɇ"
      },
      {
        "number": 4,
        "text": "కంшѿĠ ňƌశĢంగం"
      }
    ],
    "correctOption": 2,
    "correctText": "సతɇం శంకరమంċ",
    "difficulty": "Not identified in source",
    "sourceText": "86. \n“తృĚȽ”  కòęక రచğత \n \n1) \nî ॥ üҝĠ భరóɌజ \n \n2) \nసతɇం శంకరమంċ \n \n3) \nŬšɁలకంĐ üఘవయɇ \n \n4) \nకంшѿĠ ňƌశĢంగం"
  },
  {
    "id": 87,
    "printedNumber": 87,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "87. \n‘úƖĻȿ ŝలɊƧరతనం’ Ŵయ రచğత",
    "options": [
      {
        "number": 1,
        "text": "Ĝ. Ĥ నరħంĄüѕ"
      },
      {
        "number": 2,
        "text": "зјమ ధరɆనɁ"
      },
      {
        "number": 3,
        "text": "గĠŦళɋ సతɇõüయణ"
      },
      {
        "number": 4,
        "text": "సతɇం శంకరమంċ"
      }
    ],
    "correctOption": 3,
    "correctText": "గĠŦళɋ సతɇõüయణ",
    "difficulty": "Not identified in source",
    "sourceText": "87. \n‘úƖĻȿ ŝలɊƧరతనం’ Ŵయ రచğత \n1) \nĜ. Ĥ నరħంĄüѕ \n2) \nзјమ ధరɆనɁ \n \n3) \nగĠŦళɋ సతɇõüయణ \n \n4) \nసతɇం శంకరమంċ"
  },
  {
    "id": 88,
    "printedNumber": 88,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "88. \n‘సమయҠɃĠȽ’ కథ రċంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "సతɇం శంకరమంċ"
      },
      {
        "number": 2,
        "text": "ċѓѿĠ ƃవыʖ"
      },
      {
        "number": 3,
        "text": "î॥ üҝĠ భరóɌజ"
      },
      {
        "number": 4,
        "text": "కంшѿĠ ňƌశĢంగం"
      }
    ],
    "correctOption": 4,
    "correctText": "కంшѿĠ ňƌశĢంగం",
    "difficulty": "Not identified in source",
    "sourceText": "88. \n‘సమయҠɃĠȽ’ కథ రċంċనĀё \n \n1) \nసతɇం శంకరమంċ \n \n2) \nċѓѿĠ ƃవыʖ \n \n3) \nî॥ üҝĠ భరóɌజ \n \n4) \nకంшѿĠ ňƌశĢంగం"
  },
  {
    "id": 89,
    "printedNumber": 89,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "89. \n‘మమâరం’ öఠం రచğత",
    "options": [
      {
        "number": 1,
        "text": "üҝĠ భరóɌజ"
      },
      {
        "number": 2,
        "text": "ŬšɁలకంĐ üఘవయɇ"
      },
      {
        "number": 3,
        "text": "ċѓѿĠ ƃవыʖ"
      },
      {
        "number": 4,
        "text": "సతɇం శంకరమంċ"
      }
    ],
    "correctOption": 3,
    "correctText": "ċѓѿĠ ƃవыʖ",
    "difficulty": "Not identified in source",
    "sourceText": "89. \n‘మమâరం’ öఠం రచğత \n1) \nüҝĠ భరóɌజ \n2) \nŬšɁలకంĐ üఘవయɇ \n \n3) \nċѓѿĠ ƃవыʖ \n \n4) \nసతɇం శంకరమంċ"
  },
  {
    "id": 90,
    "printedNumber": 90,
    "topic": "కవులు, రచయితలు మరియు రచనలు",
    "stem": "90. \n‘ƊѓƖѓы’ öఠం కĤ",
    "options": [
      {
        "number": 1,
        "text": "Ĝ.Ĥ. నరħంĄüѕ"
      },
      {
        "number": 2,
        "text": "зјమ ధరɆనɁ"
      },
      {
        "number": 3,
        "text": "గĠŦళɋ సతɇõüయణ"
      },
      {
        "number": 4,
        "text": "ɖ ɖ"
      }
    ],
    "correctOption": 2,
    "correctText": "зјమ ధరɆనɁ",
    "difficulty": "Not identified in source",
    "sourceText": "90. \n‘ƊѓƖѓы’ öఠం కĤ \n1) \nĜ.Ĥ. నరħంĄüѕ \n2) \nзјమ ధరɆనɁ \n \n3) \nగĠŦళɋ సతɇõüయణ \n \n4) \nɖ ɖ"
  },
  {
    "id": 91,
    "printedNumber": 91,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "91. \n‘˞జట’ సɌపɁం öఠం కవğ˞",
    "options": [
      {
        "number": 1,
        "text": "çవĢ బంäరమɆ"
      },
      {
        "number": 2,
        "text": "ƖలకқĠ సɌҙపüĔ"
      },
      {
        "number": 3,
        "text": "కవğ˞ ƮలɊ"
      },
      {
        "number": 4,
        "text": "яшȿ  పళę"
      }
    ],
    "correctOption": 3,
    "correctText": "కవğ˞ ƮలɊ",
    "difficulty": "Not identified in source",
    "sourceText": "91. \n‘˞జట’ సɌపɁం öఠం కవğ˞ \n1) \nçవĢ బంäరమɆ \n \n2) \nƖలకқĠ సɌҙపüĔ \n \n3) \nకవğ˞ ƮలɊ \n \n4) \nяшȿ  పళę"
  },
  {
    "id": 93,
    "printedNumber": 93,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "93. \n‘బцз గంప’ öఠం రచğ˞",
    "options": [
      {
        "number": 1,
        "text": "Ě. సతɇవĕ"
      },
      {
        "number": 2,
        "text": "Ěంగģ øþƃĤ"
      },
      {
        "number": 3,
        "text": "ĀħŨĒȺ ŋñƃĤ"
      },
      {
        "number": 4,
        "text": "җĢంĐ చంʘకళ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ěంగģ øþƃĤ",
    "difficulty": "Not identified in source",
    "sourceText": "93. \n‘బцз గంప’ öఠం రచğ˞ \n1) \nĚ. సతɇవĕ \n \n2) \nĚంగģ øþƃĤ \n \n3) \nĀħŨĒȺ ŋñƃĤ \n \n4) \nҗĢంĐ చంʘకళ"
  },
  {
    "id": 94,
    "printedNumber": 94,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "94. \n‘ıవę’ öఠం రచğత",
    "options": [
      {
        "number": 1,
        "text": "ʛñప зúȜ"
      },
      {
        "number": 2,
        "text": "Ĥ. చంʘƑఖరüѕ"
      },
      {
        "number": 3,
        "text": "ఎȣ. గంగపɂ"
      },
      {
        "number": 4,
        "text": "ŉþ ň˅о"
      }
    ],
    "correctOption": 1,
    "correctText": "ʛñప зúȜ",
    "difficulty": "Not identified in source",
    "sourceText": "94. \n‘ıవę’ öఠం రచğత \n \n1) \nʛñప зúȜ  \n \n2) \nĤ. చంʘƑఖరüѕ \n \n3) \nఎȣ. గంగపɂ  \n \n4) \nŉþ ň˅о"
  },
  {
    "id": 95,
    "printedNumber": 95,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "95. \n‘ఉపõɇసకళ’ öఠం రċంċనė",
    "options": [
      {
        "number": 1,
        "text": "ĀħŨĒȺ ŋñƃĤ"
      },
      {
        "number": 2,
        "text": "Ĥ. చంʘ Ƒఖరüѕ"
      },
      {
        "number": 3,
        "text": "җĢంĐ చంʘకళ"
      },
      {
        "number": 4,
        "text": "ŉþ ň˅о"
      }
    ],
    "correctOption": 3,
    "correctText": "җĢంĐ చంʘకళ",
    "difficulty": "Not identified in source",
    "sourceText": "95. \n‘ఉపõɇసకళ’ öఠం రċంċనė  \n1) \nĀħŨĒȺ ŋñƃĤ \n \n2) \nĤ. చంʘ Ƒఖరüѕ \n \n3) \nҗĢంĐ చంʘకళ \n \n4) \nŉþ ň˅о"
  },
  {
    "id": 96,
    "printedNumber": 96,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "96. \n‘ѐదɀĤŹత’ öఠం కĤ",
    "options": [
      {
        "number": 1,
        "text": "Ѝ. ħ. Ĥ. ŨĒȺ"
      },
      {
        "number": 2,
        "text": "ఎంҋɊĠ јôకȜ"
      },
      {
        "number": 3,
        "text": "ƅతల ʛñȖ зúȜ"
      },
      {
        "number": 4,
        "text": "ƃĤˣయ"
      }
    ],
    "correctOption": 4,
    "correctText": "ƃĤˣయ",
    "difficulty": "Not identified in source",
    "sourceText": "96. \n‘ѐదɀĤŹత’ öఠం కĤ \n1) \nЍ. ħ. Ĥ. ŨĒȺ \n2) \nఎంҋɊĠ јôకȜ \n \n3) \nƅతల ʛñȖ зúȜ \n \n4) \nƃĤˣయ"
  },
  {
    "id": 97,
    "printedNumber": 97,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "97. \n‘ఆతɆకథ’ öఠం కĤ",
    "options": [
      {
        "number": 1,
        "text": "ñľ ధüɆüѕ"
      },
      {
        "number": 2,
        "text": "జంôɇల öపయɇ āħɓ"
      },
      {
        "number": 3,
        "text": "ƖలకқĠ సɌҙపüĔ"
      },
      {
        "number": 4,
        "text": "ఎంҋɊĠ јôకȜ"
      }
    ],
    "correctOption": 1,
    "correctText": "ñľ ధüɆüѕ",
    "difficulty": "Not identified in source",
    "sourceText": "97. \n‘ఆతɆకథ’ öఠం కĤ \n \n1) \nñľ ధüɆüѕ \n \n2) \nజంôɇల öపయɇ āħɓ \n \n3) \nƖలకқĠ సɌҙపüĔ \n \n4) \nఎంҋɊĠ јôకȜ"
  },
  {
    "id": 98,
    "printedNumber": 98,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "98. \n‘ఆзపచȳǙకం’ öఠం రచğత",
    "options": [
      {
        "number": 1,
        "text": "žĤȎ  ĢĤంȄ సȸȕ"
      },
      {
        "number": 2,
        "text": "ఆāĀė ʛâశüѕ"
      },
      {
        "number": 3,
        "text": "ñľ ధüɆüѕ"
      },
      {
        "number": 4,
        "text": "ɖöద јʝహɆణɇāħɓ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఆāĀė ʛâశüѕ",
    "difficulty": "Not identified in source",
    "sourceText": "98. \n‘ఆзపచȳǙకం’ öఠం రచğత \n \n1) \nžĤȎ  ĢĤంȄ సȸȕ \n \n2) \nఆāĀė ʛâశüѕ \n \n3) \nñľ ధüɆüѕ  \n \n4) \nɖöద јʝహɆణɇāħɓ"
  },
  {
    "id": 99,
    "printedNumber": 99,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "99. \n‘అɕరం’ öఠం కĤ",
    "options": [
      {
        "number": 1,
        "text": "ƖంžғĒ లɞõüయణ"
      },
      {
        "number": 2,
        "text": "üĤҒతల ͏మĆǚȜ"
      },
      {
        "number": 3,
        "text": "ƅతల ʛñȖ зúȜ"
      },
      {
        "number": 4,
        "text": "ƃĤˣయ"
      }
    ],
    "correctOption": 3,
    "correctText": "ƅతల ʛñȖ зúȜ",
    "difficulty": "Not identified in source",
    "sourceText": "99. \n‘అɕరం’ öఠం కĤ  \n \n1) \nƖంžғĒ లɞõüయణ \n \n2) \nüĤҒతల ͏మĆǚȜ \n \n3) \nƅతల ʛñȖ зúȜ \n \n4) \nƃĤˣయ"
  },
  {
    "id": 100,
    "printedNumber": 100,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "100. “ఆంʙЍభవం” öఠం కĤ",
    "options": [
      {
        "number": 1,
        "text": "ƃň ˣయ"
      },
      {
        "number": 2,
        "text": "ƅతల ʛñȖ зúȜ"
      },
      {
        "number": 3,
        "text": "ƖంžғĒ లɞõüయణ"
      },
      {
        "number": 4,
        "text": "üĤҒతల ͏మĆǚȜ"
      }
    ],
    "correctOption": 4,
    "correctText": "üĤҒతల ͏మĆǚȜ",
    "difficulty": "Not identified in source",
    "sourceText": "100. “ఆంʙЍభవం” öఠం కĤ \n1) \nƃň ˣయ \n2) \nƅతల ʛñȖ зúȜ \n \n3) \nƖంžғĒ లɞõüయణ \n \n4) \nüĤҒతల ͏మĆǚȜ"
  },
  {
    "id": 101,
    "printedNumber": 101,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "101. “ҠĆȽјధ” öఠం రచğత",
    "options": [
      {
        "number": 1,
        "text": "ĀħŨĒȺ ŋñƃĤ"
      },
      {
        "number": 2,
        "text": "ŉþ ň˅о"
      },
      {
        "number": 3,
        "text": "җĢంĐ చంʘకళ"
      },
      {
        "number": 4,
        "text": "ఎȣ గంగపɂ"
      }
    ],
    "correctOption": 1,
    "correctText": "ĀħŨĒȺ ŋñƃĤ",
    "difficulty": "Not identified in source",
    "sourceText": "101. “ҠĆȽјధ” öఠం రచğత  \n1) \nĀħŨĒȺ ŋñƃĤ \n \n2) \nŉþ ň˅о \n \n3) \nҗĢంĐ చంʘకళ \n \n4) \nఎȣ గంగపɂ"
  },
  {
    "id": 102,
    "printedNumber": 102,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "102. “జĢయъ Āþ øй” öఠం కĤ",
    "options": [
      {
        "number": 1,
        "text": "ఉమȜ ఆņĂ"
      },
      {
        "number": 2,
        "text": "Ѝ ħ Ĥ ŨĒȺ"
      },
      {
        "number": 3,
        "text": "ƅతల ʛñȖ зúȜ"
      },
      {
        "number": 4,
        "text": "కёణ ɖ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ѝ ħ Ĥ ŨĒȺ",
    "difficulty": "Not identified in source",
    "sourceText": "102. “జĢయъ Āþ øй” öఠం కĤ \n \n1) \nఉమȜ ఆņĂ \n \n2) \nЍ ħ Ĥ ŨĒȺ \n \n3) \nƅతల ʛñȖ зúȜ \n \n4) \nకёణ ɖ"
  },
  {
    "id": 103,
    "printedNumber": 103,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "103. “ʛకృĕ సంƃశం” öఠం కĤ",
    "options": [
      {
        "number": 1,
        "text": "కёణɖ"
      },
      {
        "number": 2,
        "text": "Ѝ. ħ. Ĥ. ŨĒȺ"
      },
      {
        "number": 3,
        "text": "ƅతల ʛñȖ зúȜ"
      },
      {
        "number": 4,
        "text": "îకȸȜ ఉమȜ ఆņĂ"
      }
    ],
    "correctOption": 3,
    "correctText": "ƅతల ʛñȖ зúȜ",
    "difficulty": "Not identified in source",
    "sourceText": "103. “ʛకృĕ సంƃశం” öఠం కĤ \n1) \nకёణɖ \n \n2) \nЍ. ħ. Ĥ. ŨĒȺ \n \n3) \nƅతల ʛñȖ зúȜ \n \n4) \nîకȸȜ ఉమȜ ఆņĂ"
  },
  {
    "id": 104,
    "printedNumber": 104,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "104. “కపɂతĢɊ Ţģɋ” öఠం రచğ˞",
    "options": [
      {
        "number": 1,
        "text": "җĢంĐ చంʘకళ"
      },
      {
        "number": 2,
        "text": "పవę ęరɆల ʛùవĕ"
      },
      {
        "number": 3,
        "text": "çవĢ బంäరమɆ"
      },
      {
        "number": 4,
        "text": "ĀħŨĒȺ ŋñƃĤ"
      }
    ],
    "correctOption": 4,
    "correctText": "ĀħŨĒȺ ŋñƃĤ",
    "difficulty": "Not identified in source",
    "sourceText": "104. “కపɂతĢɊ Ţģɋ” öఠం రచğ˞ \n1) \nҗĢంĐ చంʘకళ  \n2) \nపవę ęరɆల ʛùవĕ \n \n3) \nçవĢ బంäరమɆ \n \n4) \nĀħŨĒȺ ŋñƃĤ"
  },
  {
    "id": 105,
    "printedNumber": 105,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "105. “ĨǉзȽѓ” öఠం రచğత",
    "options": [
      {
        "number": 1,
        "text": "ŉþ ň˅о"
      },
      {
        "number": 2,
        "text": "üĤҒతల ͏మĆǚȜ"
      },
      {
        "number": 3,
        "text": "йఱɉం éїĀ"
      },
      {
        "number": 4,
        "text": "üళɋపĢɊ అనంతకృషȼశరɆ"
      }
    ],
    "correctOption": 1,
    "correctText": "ŉþ ň˅о",
    "difficulty": "Not identified in source",
    "sourceText": "105. “ĨǉзȽѓ” öఠం రచğత \n1) \nŉþ ň˅о  \n2) \nüĤҒతల ͏మĆǚȜ \n \n3) \nйఱɉం éїĀ \n \n4) \nüళɋపĢɊ అనంతకృషȼశరɆ"
  },
  {
    "id": 106,
    "printedNumber": 106,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "106. “õûʖ” రచğత",
    "options": [
      {
        "number": 1,
        "text": "эѓј Ɛంకట రమణయɇ"
      },
      {
        "number": 2,
        "text": "ŉþ ň˅о"
      },
      {
        "number": 3,
        "text": "˞ыరƅę ƼĚచంȓ"
      },
      {
        "number": 4,
        "text": "žĤȎ ĢĤంȄ సȸȕ"
      }
    ],
    "correctOption": 1,
    "correctText": "эѓј Ɛంకట రమణయɇ",
    "difficulty": "Not identified in source",
    "sourceText": "106. “õûʖ” రచğత \n \n1) \nэѓј Ɛంకట రమణయɇ \n \n2) \nŉþ ň˅о \n \n3) \n˞ыరƅę ƼĚచంȓ  \n \n4) \nžĤȎ ĢĤంȄ సȸȕ"
  },
  {
    "id": 107,
    "printedNumber": 107,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "107. ఎఱɉనз గల Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "ʛబంధ పరƊశɌ ёу"
      },
      {
        "number": 2,
        "text": "ఆėకĤ"
      },
      {
        "number": 3,
        "text": "Ǜమûč"
      },
      {
        "number": 4,
        "text": "భకȽకĤ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఆėకĤ",
    "difficulty": "Not identified in source",
    "sourceText": "107. ఎఱɉనз గల Ĝёш \n \n1) \nʛబంధ పరƊశɌ ёу \n \n2) \nఆėకĤ \n \n3) \nǛమûč \n \n4) \nభకȽకĤ"
  },
  {
    "id": 108,
    "printedNumber": 108,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "108. ‘శంюóју’  ňĠ Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "ననɁయ"
      },
      {
        "number": 2,
        "text": "ఎఱɉన"
      },
      {
        "number": 3,
        "text": "ĕకȮన"
      },
      {
        "number": 4,
        "text": "ɖõчу"
      }
    ],
    "correctOption": 2,
    "correctText": "ఎఱɉన",
    "difficulty": "Not identified in source",
    "sourceText": "108. ‘శంюóју’  ňĠ Ĝёш \n \n1) \nననɁయ \n \n2) \nఎఱɉన \n \n3) \nĕకȮన \n \n4) \nɖõчу"
  },
  {
    "id": 109,
    "printedNumber": 109,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "109. ‘ఆంʙǑоу’ ňĠ Ĝёш?",
    "options": [
      {
        "number": 1,
        "text": "üజüజ నƌంѬу"
      },
      {
        "number": 2,
        "text": "ɖకృషȼƃవüయѓ"
      },
      {
        "number": 3,
        "text": "మъమħėɀ"
      },
      {
        "number": 4,
        "text": "ΗలయƐúŨĒȺ"
      }
    ],
    "correctOption": 3,
    "correctText": "మъమħėɀ",
    "difficulty": "Not identified in source",
    "sourceText": "109. ‘ఆంʙǑоу’ ňĠ Ĝёш? \n1) \nüజüజ నƌంѬу \n2) \nɖకృషȼƃవüయѓ \n \n3) \nమъమħėɀ \n \n4) \nΗలయƐúŨĒȺ"
  },
  {
    "id": 110,
    "printedNumber": 110,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "110. ĆంėĀęǖ ɖకృషȼƃవüయల Ĝёш âęė",
    "options": [
      {
        "number": 1,
        "text": "ăĨĹసమüంగణ ăరɌǵమ"
      },
      {
        "number": 2,
        "text": "җёüయరగండу"
      },
      {
        "number": 3,
        "text": "కĤñĤāరద చʇవĠȽ"
      },
      {
        "number": 4,
        "text": "ఆంʙǑоу"
      }
    ],
    "correctOption": 1,
    "correctText": "ăĨĹసమüంగణ ăరɌǵమ",
    "difficulty": "Not identified in source",
    "sourceText": "110. ĆంėĀęǖ ɖకృషȼƃవüయల Ĝёш âęė  \n \n1) \năĨĹసమüంగణ ăరɌǵమ \n \n2) \nҗёüయరగండу \n \n3) \nకĤñĤāరద చʇవĠȽ \n \n4) \nఆంʙǑоу"
  },
  {
    "id": 111,
    "printedNumber": 111,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "111. కĤƑఖర îకȸȜ ఉమȜ ఆņĂ Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "పంĒȌ, ǶņɌ"
      },
      {
        "number": 2,
        "text": "కĤñ Ĥāరద"
      },
      {
        "number": 3,
        "text": "కĤ చʇవĠȽ"
      },
      {
        "number": 4,
        "text": "కĤ ƺĆల"
      }
    ],
    "correctOption": 2,
    "correctText": "కĤñ Ĥāరద",
    "difficulty": "Not identified in source",
    "sourceText": "111. కĤƑఖర îకȸȜ ఉమȜ ఆņĂ Ĝёш \n1) \nపంĒȌ, ǶņɌ \n2) \nకĤñ Ĥāరద \n \n3) \nకĤ చʇవĠȽ \n \n4) \nకĤ ƺĆల"
  },
  {
    "id": 112,
    "printedNumber": 112,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "112. йఱɉం éїĀ Ĝёш âęė",
    "options": [
      {
        "number": 1,
        "text": "కĤ ƺĆల"
      },
      {
        "number": 2,
        "text": "కĤ ăరɌǵమ"
      },
      {
        "number": 3,
        "text": "కĤñĤāరద"
      },
      {
        "number": 4,
        "text": "మщర ɖõథ"
      }
    ],
    "correctOption": 3,
    "correctText": "కĤñĤāరద",
    "difficulty": "Not identified in source",
    "sourceText": "112. йఱɉం éїĀ Ĝёш âęė \n1) \nకĤ ƺĆల \n2) \nకĤ ăరɌǵమ \n \n3) \nకĤñĤāరద \n \n4) \nమщర ɖõథ"
  },
  {
    "id": 113,
    "printedNumber": 113,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "113. ƃѕలపĢɊ Ɛంకటకృషȼāħɓ Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "కĤ ƺĆల"
      },
      {
        "number": 2,
        "text": "మщరకĤ"
      },
      {
        "number": 3,
        "text": "కÿʛғరȼ"
      },
      {
        "number": 4,
        "text": "కÿరతɁ"
      }
    ],
    "correctOption": 4,
    "correctText": "కÿరతɁ",
    "difficulty": "Not identified in source",
    "sourceText": "113. ƃѕలపĢɊ Ɛంకటకృషȼāħɓ Ĝёш \n1) \nకĤ ƺĆల \n \n2) \nమщరకĤ \n \n3) \nకÿʛғరȼ \n \n4) \nకÿరతɁ"
  },
  {
    "id": 114,
    "printedNumber": 114,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "114. కĤăరɌǵяу ఎవĠ Ĝёш?",
    "options": [
      {
        "number": 1,
        "text": "ǎతన"
      },
      {
        "number": 2,
        "text": "ఎʡన"
      },
      {
        "number": 3,
        "text": "ĕకȮన"
      },
      {
        "number": 4,
        "text": "ɖõчу"
      }
    ],
    "correctOption": 1,
    "correctText": "ǎతన",
    "difficulty": "Not identified in source",
    "sourceText": "114. కĤăరɌǵяу ఎవĠ Ĝёш? \n1) \nǎతన \n \n2) \nఎʡన \n \n3) \nĕకȮన \n \n4) \nɖõчу"
  },
  {
    "id": 115,
    "printedNumber": 115,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "115. ననɁయ Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "ఆėకĤ"
      },
      {
        "number": 2,
        "text": "ఆంʙǑоу"
      },
      {
        "number": 3,
        "text": "మщరకĤ"
      },
      {
        "number": 4,
        "text": "Ǜమûč"
      }
    ],
    "correctOption": 2,
    "correctText": "ఆంʙǑоу",
    "difficulty": "Not identified in source",
    "sourceText": "115. ననɁయ Ĝёш \n \n1) \nఆėకĤ \n \n2) \nఆంʙǑоу \n \n3) \nమщరకĤ \n \n4) \nǛమûč"
  },
  {
    "id": 116,
    "printedNumber": 116,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "116. Āగъāసъу ఎవĠ Ĝёш?",
    "options": [
      {
        "number": 1,
        "text": "ɖõчу"
      },
      {
        "number": 2,
        "text": "ననɁయ"
      },
      {
        "number": 3,
        "text": "ĕకȮన"
      },
      {
        "number": 4,
        "text": "ఎʡన"
      }
    ],
    "correctOption": 4,
    "correctText": "ఎʡన",
    "difficulty": "Not identified in source",
    "sourceText": "116. Āగъāసъу ఎవĠ Ĝёш? \n1) \nɖõчу \n \n2) \nననɁయ \n \n3) \nĕకȮన \n \n4) \nఎʡన"
  },
  {
    "id": 117,
    "printedNumber": 117,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "117. కĤరతɁ, నవѐగ వచన కĤñ చʇవĠȽ ňĠ Ĝёшѓ",
    "options": [
      {
        "number": 1,
        "text": "తęŎళɋ భరĔ"
      },
      {
        "number": 2,
        "text": "ɖöద јʝహɆణɇ āħɓ"
      },
      {
        "number": 3,
        "text": "ఆāĀė ʛâశüѕ"
      },
      {
        "number": 4,
        "text": "ఎంҋɊĠ јôకȜ"
      }
    ],
    "correctOption": 1,
    "correctText": "తęŎళɋ భరĔ",
    "difficulty": "Not identified in source",
    "sourceText": "117. కĤరతɁ, నవѐగ వచన కĤñ చʇవĠȽ ňĠ Ĝёшѓ \n1) \nతęŎళɋ భరĔ \n2) \nɖöద јʝహɆణɇ āħɓ \n \n3) \nఆāĀė ʛâశüѕ \n \n4) \nఎంҋɊĠ јôకȜ"
  },
  {
    "id": 118,
    "printedNumber": 118,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "118. ‘కёణɖ’ ఎవĠ కలం Ɔё?",
    "options": [
      {
        "number": 1,
        "text": "జంôɇల öపయɇ āħɓ"
      },
      {
        "number": 2,
        "text": "ñľ ధüɆüѕ"
      },
      {
        "number": 3,
        "text": "ƖలకқĠ సɌҙపüĔ"
      },
      {
        "number": 4,
        "text": "üĤҒతѓ ͏మĆǚȜ"
      }
    ],
    "correctOption": 2,
    "correctText": "ñľ ధüɆüѕ",
    "difficulty": "Not identified in source",
    "sourceText": "118. ‘కёణɖ’ ఎవĠ కలం Ɔё? \n \n1) \nజంôɇల öపయɇ āħɓ \n \n2) \nñľ ధüɆüѕ \n \n3) \nƖలకқĠ సɌҙపüĔ \n \n4) \nüĤҒతѓ ͏మĆǚȜ"
  },
  {
    "id": 119,
    "printedNumber": 119,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "119. కవğ̂ ĕలక ĜёóంĆцüѓ",
    "options": [
      {
        "number": 1,
        "text": "ƮలɊ"
      },
      {
        "number": 2,
        "text": "ƖలకқĠ సɌҙపüĔ"
      },
      {
        "number": 3,
        "text": "çవĢ బంäరమɆ"
      },
      {
        "number": 4,
        "text": "ఓþȰ"
      }
    ],
    "correctOption": 2,
    "correctText": "ƖలకқĠ సɌҙపüĔ",
    "difficulty": "Not identified in source",
    "sourceText": "119. కవğ̂ ĕలక ĜёóంĆцüѓ \n \n1) \nƮలɊ \n \n2) \nƖలకқĠ సɌҙపüĔ \n \n3) \nçవĢ బంäరమɆ \n \n4) \nఓþȰ"
  },
  {
    "id": 120,
    "printedNumber": 120,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "120. ఆంʙ ŢȜɊ బȂ అę ఎవĠę ĚѓăȽё?",
    "options": [
      {
        "number": 1,
        "text": "ƖలకқĠ సɌҙపüĔ"
      },
      {
        "number": 2,
        "text": "ĀħŨĒȺ ŋñƃĤ"
      },
      {
        "number": 3,
        "text": "Ě. సతɇవĕ"
      },
      {
        "number": 4,
        "text": "җĢంĐ చంʘకళ"
      }
    ],
    "correctOption": 3,
    "correctText": "Ě. సతɇవĕ",
    "difficulty": "Not identified in source",
    "sourceText": "120. ఆంʙ ŢȜɊ బȂ అę ఎవĠę ĚѓăȽё? \n \n1) \nƖలకқĠ సɌҙపüĔ \n \n2) \nĀħŨĒȺ ŋñƃĤ \n \n3) \nĚ. సతɇవĕ \n \n4) \nҗĢంĐ చంʘకళ"
  },
  {
    "id": 121,
    "printedNumber": 121,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "121. ƃň ˣయ ňĠ కలం Ɔё",
    "options": [
      {
        "number": 1,
        "text": "î ॥ ఉమȜ ఆņĂ"
      },
      {
        "number": 2,
        "text": "Ѝ. ħ. Ĥ ŨĒȺ"
      },
      {
        "number": 3,
        "text": "ƒȂ ãé љƓɏȕ"
      },
      {
        "number": 4,
        "text": "çవĢ బంäరమɆ"
      }
    ],
    "correctOption": 4,
    "correctText": "çవĢ బంäరమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "121. ƃň ˣయ ňĠ కలం Ɔё \n1) \nî ॥ ఉమȜ ఆņĂ \n2) \nЍ. ħ. Ĥ ŨĒȺ \n \n3) \nƒȂ ãé љƓɏȕ \n \n4) \nçవĢ బంäరమɆ"
  },
  {
    "id": 122,
    "printedNumber": 122,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "122. ĕకȮన Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "ఆėకĤ"
      },
      {
        "number": 2,
        "text": "కĤăరɌǵమ"
      },
      {
        "number": 3,
        "text": "ʛబంధపరƊశɌёу"
      },
      {
        "number": 4,
        "text": "కĤʝహɆ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆėకĤ",
    "difficulty": "Not identified in source",
    "sourceText": "122. ĕకȮన Ĝёш \n1) \nఆėకĤ \n \n2) \nకĤăరɌǵమ \n \n3) \nʛబంధపరƊశɌёу \n \n4) \nకĤʝహɆ"
  },
  {
    "id": 123,
    "printedNumber": 123,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "123. ‘ఉభయకĤĞѪу’ అę ňĠę అంìё",
    "options": [
      {
        "number": 1,
        "text": "ĕకȮన"
      },
      {
        "number": 2,
        "text": "ఎʡన"
      },
      {
        "number": 3,
        "text": "ɖõчу"
      },
      {
        "number": 4,
        "text": "ǎతన"
      }
    ],
    "correctOption": 2,
    "correctText": "ఎʡన",
    "difficulty": "Not identified in source",
    "sourceText": "123. ‘ఉభయకĤĞѪу’ అę ňĠę అంìё \n \n1) \nĕకȮన \n \n2) \nఎʡన \n \n3) \nɖõчу \n \n4) \nǎతన"
  },
  {
    "id": 124,
    "printedNumber": 124,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "124. ‘పదకĤñ Ěñమљу’ ňĠ Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "ƐяలĀడ ŁమకĤ"
      },
      {
        "number": 2,
        "text": "ñళɋöక అనɁúçёɇу"
      },
      {
        "number": 3,
        "text": "óశరĖ"
      },
      {
        "number": 4,
        "text": "కёణɖ"
      }
    ],
    "correctOption": 3,
    "correctText": "óశరĖ",
    "difficulty": "Not identified in source",
    "sourceText": "124. ‘పదకĤñ Ěñమљу’ ňĠ Ĝёш \n1) \nƐяలĀడ ŁమకĤ \n \n2) \nñళɋöక అనɁúçёɇу \n \n3) \nóశరĖ \n \n4) \nకёణɖ"
  },
  {
    "id": 125,
    "printedNumber": 125,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "125. ‘ҞలöĔ’ ňĠ కలం Ɔё",
    "options": [
      {
        "number": 1,
        "text": "î॥ Ҡరɇƃవర సంıȠ ƃȠ"
      },
      {
        "number": 2,
        "text": "˞ыరƅę Ƽľచంȓ"
      },
      {
        "number": 3,
        "text": "ǐనం õగҖషణం"
      },
      {
        "number": 4,
        "text": "కలవƖలъ సóనంద"
      }
    ],
    "correctOption": 4,
    "correctText": "కలవƖలъ సóనంద",
    "difficulty": "Not identified in source",
    "sourceText": "125. ‘ҞలöĔ’ ňĠ కలం Ɔё \n1) \nî॥ Ҡరɇƃవర సంıȠ ƃȠ \n2) \n˞ыరƅę Ƽľచంȓ \n \n3) \nǐనం õగҖషణం \n \n4) \nకలవƖలъ సóనంద"
  },
  {
    "id": 126,
    "printedNumber": 126,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "126. äనకÿħంщ ňĠ Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "üĤҒతల ͏మĆǚȜ"
      },
      {
        "number": 2,
        "text": "ñళɋöక అనɁమయɇ"
      },
      {
        "number": 3,
        "text": "çవĢ బంäరమɆ"
      },
      {
        "number": 4,
        "text": "üళɋపĢɊ అనంతకృషȼశరɆ"
      }
    ],
    "correctOption": 1,
    "correctText": "üĤҒతల ͏మĆǚȜ",
    "difficulty": "Not identified in source",
    "sourceText": "126. äనకÿħంщ ňĠ Ĝёш \n1) \nüĤҒతల ͏మĆǚȜ \n2) \nñళɋöక అనɁమయɇ \n \n3) \nçవĢ బంäరమɆ \n \n4) \nüళɋపĢɊ అనంతకృషȼశరɆ"
  },
  {
    "id": 127,
    "printedNumber": 127,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "127. üళɋపĢɊ అనంతకృషȼశరɆ äĠ Ĝёш",
    "options": [
      {
        "number": 1,
        "text": "సంĬత కÿరతɁ"
      },
      {
        "number": 2,
        "text": "కÿʛғరȼ"
      },
      {
        "number": 3,
        "text": "కĤ చʇవĠȽ"
      },
      {
        "number": 4,
        "text": "కĤñ Ĥāరద"
      }
    ],
    "correctOption": 1,
    "correctText": "సంĬత కÿరతɁ",
    "difficulty": "Not identified in source",
    "sourceText": "127. üళɋపĢɊ అనంతకృషȼశరɆ äĠ Ĝёш \n \n1) \nసంĬత కÿరతɁ \n \n2) \nకÿʛғరȼ \n \n3) \nకĤ చʇవĠȽ \n \n4) \nకĤñ Ĥāరద"
  },
  {
    "id": 128,
    "printedNumber": 128,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "128. ĤóɇĠȾ శతకం రċంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "గĠĆöĐ మþɊవôę"
      },
      {
        "number": 2,
        "text": "йండɊపĢɊ నరɏమɆ"
      },
      {
        "number": 3,
        "text": "Ɩంҋё ňరüఘĀçёɇѓ"
      },
      {
        "number": 4,
        "text": "úċüо ĥవüమüо"
      }
    ],
    "correctOption": 2,
    "correctText": "йండɊపĢɊ నరɏమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "128. ĤóɇĠȾ శతకం రċంċనĀё \n \n1) \nగĠĆöĐ మþɊవôę \n \n2) \nйండɊపĢɊ నరɏమɆ \n \n3) \nƖంҋё ňరüఘĀçёɇѓ \n \n4) \núċüо ĥవüమüо"
  },
  {
    "id": 129,
    "printedNumber": 129,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "129. Ĥóɇశతకం రచğత",
    "options": [
      {
        "number": 1,
        "text": "గĠĆöĐ మþɊవôę"
      },
      {
        "number": 2,
        "text": "Ţёúళɋ яšపɂ"
      },
      {
        "number": 3,
        "text": "úċüо ĥవüమüо"
      },
      {
        "number": 4,
        "text": "йండɊపĢɊ నరɏమɆ"
      }
    ],
    "correctOption": 3,
    "correctText": "úċüо ĥవüమüо",
    "difficulty": "Not identified in source",
    "sourceText": "129. Ĥóɇశతకం రచğత \n \n1) \nగĠĆöĐ మþɊవôę \n \n2) \nŢёúళɋ яšపɂ \n \n3) \núċüо ĥవüమüо \n \n4) \nйండɊపĢɊ నరɏమɆ"
  },
  {
    "id": 130,
    "printedNumber": 130,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "130. మхలҗట శతక కరȽ",
    "options": [
      {
        "number": 1,
        "text": "Ţёúళɋ яšపɂ"
      },
      {
        "number": 2,
        "text": "పĆȮ అపɂల నరɏయɇ"
      },
      {
        "number": 3,
        "text": "úċüо ĥవüమüо"
      },
      {
        "number": 4,
        "text": "йండɊపĢɊ నరɏమɆ"
      }
    ],
    "correctOption": 4,
    "correctText": "йండɊపĢɊ నరɏమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "130. మхలҗట శతక కరȽ \n1) \nŢёúళɋ яšపɂ \n2) \nపĆȮ అపɂల నరɏయɇ \n \n3) \núċüо ĥవüమüо \n \n4) \nйండɊపĢɊ నరɏమɆ"
  },
  {
    "id": 131,
    "printedNumber": 131,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "131. õüయణ శతకకరȽ",
    "options": [
      {
        "number": 1,
        "text": "óశరĖ"
      },
      {
        "number": 2,
        "text": "కంచరɊƼపనɁ"
      },
      {
        "number": 3,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 4,
        "text": "బŦɆరǎతõúцɇу"
      }
    ],
    "correctOption": 1,
    "correctText": "óశరĖ",
    "difficulty": "Not identified in source",
    "sourceText": "131. õüయణ శతకకరȽ \n \n1) \nóశరĖ \n \n2) \nకంచరɊƼపనɁ \n \n3) \núరద Ŭంకయɇ \n \n4) \nబŦɆరǎతõúцɇу"
  },
  {
    "id": 132,
    "printedNumber": 132,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "132. ‘ŝѓйғѓ’ శతకకరȽ",
    "options": [
      {
        "number": 1,
        "text": "õరɊ ċరంıĤ"
      },
      {
        "number": 2,
        "text": "కёణɖ"
      },
      {
        "number": 3,
        "text": "Ɛమన"
      },
      {
        "number": 4,
        "text": "úరద Ŭంకయɇ"
      }
    ],
    "correctOption": 2,
    "correctText": "కёణɖ",
    "difficulty": "Not identified in source",
    "sourceText": "132. ‘ŝѓйғѓ’ శతకకరȽ \n1) \nõరɊ ċరంıĤ \n2) \nకёణɖ \n \n3) \nƐమన \n \n4) \núరద Ŭంకయɇ"
  },
  {
    "id": 133,
    "printedNumber": 133,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "133. ‘ŝѓйøల’ శతక కరȽ",
    "options": [
      {
        "number": 1,
        "text": "Ɛమన"
      },
      {
        "number": 2,
        "text": "కёణɖ"
      },
      {
        "number": 3,
        "text": "పĆȮ అపɂల నరħంహం"
      },
      {
        "number": 4,
        "text": "úరదŬంకయɇ"
      }
    ],
    "correctOption": 3,
    "correctText": "పĆȮ అపɂల నరħంహం",
    "difficulty": "Not identified in source",
    "sourceText": "133. ‘ŝѓйøల’ శతక కరȽ \n1) \nƐమన \n2) \nకёణɖ \n \n3) \nపĆȮ అపɂల నరħంహం \n \n4) \núరదŬంకయɇ"
  },
  {
    "id": 134,
    "printedNumber": 134,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "134. ‘зúü, зúń’ శతâల కరȽ",
    "options": [
      {
        "number": 1,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 2,
        "text": "కёణɖ"
      },
      {
        "number": 3,
        "text": "పĆȮ అపɂల నరħంహం"
      },
      {
        "number": 4,
        "text": "õరɊ ċరంıĤ"
      }
    ],
    "correctOption": 4,
    "correctText": "õరɊ ċరంıĤ",
    "difficulty": "Not identified in source",
    "sourceText": "134. ‘зúü, зúń’ శతâల కరȽ \n1) \núరద Ŭంకయɇ \n \n2) \nకёణɖ \n \n3) \nపĆȮ అపɂల నరħంహం \n \n4) \nõరɊ ċరంıĤ"
  },
  {
    "id": 135,
    "printedNumber": 135,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "135. ‘âģâంø సపȽశĕ’ రచğత",
    "options": [
      {
        "number": 1,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 2,
        "text": "కంచరɊ ƼపనɁ"
      },
      {
        "number": 3,
        "text": "ĕకȮన"
      },
      {
        "number": 4,
        "text": "ǎцқĠ ňరʝహɆం"
      }
    ],
    "correctOption": 1,
    "correctText": "úరద Ŭంకయɇ",
    "difficulty": "Not identified in source",
    "sourceText": "135. ‘âģâంø సపȽశĕ’ రచğత \n1) \núరద Ŭంకయɇ \n \n2) \nకంచరɊ ƼపనɁ \n \n3) \nĕకȮన \n \n4) \nǎцқĠ ňరʝహɆం"
  },
  {
    "id": 136,
    "printedNumber": 136,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "136. ‘ùసȮర’ శతక కరȽ",
    "options": [
      {
        "number": 1,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 2,
        "text": "కంచరɊ ƼపనɁ"
      },
      {
        "number": 3,
        "text": "ǎцқĠ ňరʝహɆం"
      },
      {
        "number": 4,
        "text": "Ɛమన"
      }
    ],
    "correctOption": 2,
    "correctText": "కంచరɊ ƼపనɁ",
    "difficulty": "Not identified in source",
    "sourceText": "136. ‘ùసȮర’ శతక కరȽ \n \n1) \núరద Ŭంకయɇ \n \n2) \nకంచరɊ ƼపనɁ \n \n3) \nǎцқĠ ňరʝహɆం \n \n4) \nƐమన"
  },
  {
    "id": 137,
    "printedNumber": 137,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "137. ‘óశరĺ’ శతకం రċంċనė",
    "options": [
      {
        "number": 1,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 2,
        "text": "కంచరɊ ƼపనɁ"
      },
      {
        "number": 3,
        "text": "ǎцқĠ ňరʝహɆం"
      },
      {
        "number": 4,
        "text": "పĆȮ అపɂల నరħంహం"
      }
    ],
    "correctOption": 3,
    "correctText": "ǎцқĠ ňరʝహɆం",
    "difficulty": "Not identified in source",
    "sourceText": "137. ‘óశరĺ’ శతకం రċంċనė \n1) \núరద Ŭంకయɇ \n \n2) \nకంచరɊ ƼపనɁ \n \n3) \nǎцқĠ ňరʝహɆం \n \n4) \nపĆȮ అపɂల నరħంహం"
  },
  {
    "id": 138,
    "printedNumber": 138,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "138. ‘వరదüజ శతకం’ రċంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "గĠĆöĐ మþɊవôę"
      },
      {
        "number": 2,
        "text": "úċüо ĥవüమüо"
      },
      {
        "number": 3,
        "text": "йండɊపĢɊ నరɏమɆ"
      },
      {
        "number": 4,
        "text": "కంచరɊ ƼపనɁ"
      }
    ],
    "correctOption": 4,
    "correctText": "కంచరɊ ƼపనɁ",
    "difficulty": "Not identified in source",
    "sourceText": "138. ‘వరదüజ శతకం’ రċంċనĀё \n1) \nగĠĆöĐ మþɊవôę \n2) \núċüо ĥవüమüо \n \n3) \nйండɊపĢɊ నరɏమɆ \n \n4) \nకంచరɊ ƼపనɁ"
  },
  {
    "id": 139,
    "printedNumber": 139,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "139. ‘јùĦతరñɁవģ’ రċంċనė",
    "options": [
      {
        "number": 1,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 2,
        "text": "йవɌల œనɁу"
      },
      {
        "number": 3,
        "text": "ґరȵĐ"
      },
      {
        "number": 4,
        "text": "ఏъй లɜణకĤ"
      }
    ],
    "correctOption": 1,
    "correctText": "úరద Ŭంకయɇ",
    "difficulty": "Not identified in source",
    "sourceText": "139. ‘јùĦతరñɁవģ’ రċంċనė \n \n1) \núరద Ŭంకయɇ \n \n2) \nйవɌల œనɁу \n \n3) \nґరȵĐ \n \n4) \nఏъй లɜణకĤ"
  },
  {
    "id": 140,
    "printedNumber": 140,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "140. ‘నగé’ శతక కరȽ",
    "options": [
      {
        "number": 1,
        "text": "мâȮ ƺĐ ňరభʘమɆ"
      },
      {
        "number": 2,
        "text": "ఏъй లɜణకĤ"
      },
      {
        "number": 3,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 4,
        "text": "గదȿల āంҘȞ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఏъй లɜణకĤ",
    "difficulty": "Not identified in source",
    "sourceText": "140. ‘నగé’ శతక కరȽ  \n \n1) \nмâȮ ƺĐ ňరభʘమɆ \n \n2) \nఏъй లɜణకĤ \n \n3) \núరద Ŭంకయɇ \n \n4) \nగదȿల āంҘȞ"
  },
  {
    "id": 141,
    "printedNumber": 141,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "141. ‘ĨǉĆȽ’ శతకం రċంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "йవɌల œనɁу"
      },
      {
        "number": 2,
        "text": "గదȿల āంҘȞ"
      },
      {
        "number": 3,
        "text": "ఏъй లɜణకĤ"
      },
      {
        "number": 4,
        "text": "мâȮƺĐ ňరభʘమɆ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఏъй లɜణకĤ",
    "difficulty": "Not identified in source",
    "sourceText": "141. ‘ĨǉĆȽ’ శతకం రċంċనĀё \n \n1) \nйవɌల œనɁу \n \n2) \nగదȿల āంҘȞ \n \n3) \nఏъй లɜణకĤ \n \n4) \nмâȮƺĐ ňరభʘమɆ"
  },
  {
    "id": 142,
    "printedNumber": 142,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "142. ‘ఆంʙ ыʖ’ శతక కరȽ",
    "options": [
      {
        "number": 1,
        "text": "мâȮ ƺĐ ňరభʘమɆ"
      },
      {
        "number": 2,
        "text": "గదȿల āంҘȞ"
      },
      {
        "number": 3,
        "text": "ŕంîúȕ ఇăɆğȞ"
      },
      {
        "number": 4,
        "text": "కёణɖ"
      }
    ],
    "correctOption": 4,
    "correctText": "కёణɖ",
    "difficulty": "Not identified in source",
    "sourceText": "142. ‘ఆంʙ ыʖ’ శతక కరȽ \n1) \nмâȮ ƺĐ ňరభʘమɆ \n2) \nగదȿల āంҘȞ \n \n3) \nŕంîúȕ ఇăɆğȞ \n \n4) \nకёణɖ"
  },
  {
    "id": 143,
    "printedNumber": 143,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "143. Ğʖăహ˰ శతకం రċంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "йండɊపĢɊ నరɏమɆ"
      },
      {
        "number": 2,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 3,
        "text": "కంచరɊ ƼపనɁ"
      },
      {
        "number": 4,
        "text": "Ɩంҋё ňరüఘĀçёɇѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "йండɊపĢɊ నరɏమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "143. Ğʖăహ˰ శతకం రċంċనĀё \n1) \nйండɊపĢɊ నరɏమɆ \n \n2) \núరద Ŭంకయɇ \n \n3) \nకంచరɊ ƼపనɁ \n \n4) \nƖంҋё ňరüఘĀçёɇѓ"
  },
  {
    "id": 144,
    "printedNumber": 144,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "144. ɖâళహŋȽశɌర శతకకరȽ",
    "options": [
      {
        "number": 1,
        "text": "ґరȵĐ"
      },
      {
        "number": 2,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 3,
        "text": "ఏъй లɜణకĤ"
      },
      {
        "number": 4,
        "text": "ǎцқĠ ňరʞƔɆంʘ ăɌĞ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఏъй లɜణకĤ",
    "difficulty": "Not identified in source",
    "sourceText": "144. ɖâళహŋȽశɌర శతకకరȽ \n \n1) \nґరȵĐ \n \n2) \núరద Ŭంకయɇ \n \n3) \nఏъй లɜణకĤ \n \n4) \nǎцқĠ ňరʞƔɆంʘ ăɌĞ"
  },
  {
    "id": 145,
    "printedNumber": 145,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "145. üƊశɌర úĄతɆɹం రచğత",
    "options": [
      {
        "number": 1,
        "text": "ґరȵĐ"
      },
      {
        "number": 2,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 3,
        "text": "ఏъй లɜణ కĤ"
      },
      {
        "number": 4,
        "text": "˞ыరƅę üమăɌĞ"
      }
    ],
    "correctOption": 2,
    "correctText": "úరద Ŭంకయɇ",
    "difficulty": "Not identified in source",
    "sourceText": "145. üƊశɌర úĄతɆɹం రచğత \n1) \nґరȵĐ \n \n2) \núరద Ŭంకయɇ \n \n3) \nఏъй లɜణ కĤ \n \n4) \n˞ыరƅę üమăɌĞ"
  },
  {
    "id": 146,
    "printedNumber": 146,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "146. ùవĢంగ శతకం రċంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "ґరȵĐ"
      },
      {
        "number": 2,
        "text": "ɖమĕ óరɊ јందń మĔ"
      },
      {
        "number": 3,
        "text": "ǎцқĠ ňరʝƔɆంʘ ăɌĞ"
      },
      {
        "number": 4,
        "text": "˞ыరƅę üమăɌĞ"
      }
    ],
    "correctOption": 1,
    "correctText": "ґరȵĐ",
    "difficulty": "Not identified in source",
    "sourceText": "146. ùవĢంగ శతకం రċంċనĀё \n1) \nґరȵĐ \n2) \nɖమĕ óరɊ јందń మĔ \n \n3) \nǎцқĠ ňరʝƔɆంʘ ăɌĞ \n \n4) \n˞ыరƅę üమăɌĞ"
  },
  {
    "id": 147,
    "printedNumber": 147,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "147. ‘зӐăĞ శతకం’ రċంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "˞ыరƅę üమăɌĞ"
      },
      {
        "number": 2,
        "text": "ఏъй లɜణ కĤ"
      },
      {
        "number": 3,
        "text": "úరద Ŭంకయɇ"
      },
      {
        "number": 4,
        "text": "ґరȵĐ"
      }
    ],
    "correctOption": 3,
    "correctText": "úరద Ŭంకయɇ",
    "difficulty": "Not identified in source",
    "sourceText": "147. ‘зӐăĞ శతకం’ రċంċనĀё \n1) \n˞ыరƅę üమăɌĞ \n2) \nఏъй లɜణ కĤ \n \n3) \núరద Ŭంకయɇ \n \n4) \nґరȵĐ"
  },
  {
    "id": 148,
    "printedNumber": 148,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "148. ‘హĠహరõథ శతకం’ రċంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "î॥ ఉమȜ ఆņĂ"
      },
      {
        "number": 2,
        "text": "ґరȵĐ"
      },
      {
        "number": 3,
        "text": "ƒȂ మహమɆȓ љƓɏȕ"
      },
      {
        "number": 4,
        "text": "äžపĢɊ ŋñüమ җĠȽ"
      }
    ],
    "correctOption": 1,
    "correctText": "î॥ ఉమȜ ఆņĂ",
    "difficulty": "Not identified in source",
    "sourceText": "148. ‘హĠహరõథ శతకం’ రċంċనĀё \n \n1) \nî॥ ఉమȜ ఆņĂ \n \n2) \nґరȵĐ \n \n3) \nƒȂ మహమɆȓ љƓɏȕ \n \n4) \näžపĢɊ ŋñüమ җĠȽ"
  },
  {
    "id": 149,
    "printedNumber": 149,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "149. ఇĕĄసం అనä .... అę అరȾం",
    "options": [
      {
        "number": 1,
        "text": "ఇþ జĠĈంė"
      },
      {
        "number": 2,
        "text": "ఎþ జĠĈంė"
      },
      {
        "number": 3,
        "text": "ఎӐу జĠĈంė"
      },
      {
        "number": 4,
        "text": "ఏĞ జĠĈంė"
      }
    ],
    "correctOption": 2,
    "correctText": "ఎþ జĠĈంė",
    "difficulty": "Not identified in source",
    "sourceText": "149. ఇĕĄసం అనä .... అę అరȾం \n \n1) \nఇþ జĠĈంė \n \n2) \nఎþ జĠĈంė \n \n3) \nఎӐу జĠĈంė \n \n4) \nఏĞ జĠĈంė"
  },
  {
    "id": 150,
    "printedNumber": 150,
    "topic": "కవులు, రచయితలు, బిరుదులు మరియు శతకాలు",
    "stem": "150. ఇĕĄస లɕణం âęė",
    "options": [
      {
        "number": 1,
        "text": "ƥĢɊĐ కథ"
      },
      {
        "number": 2,
        "text": "అĂȸదశ వరȼనలз అĘక ʿôనɇత"
      },
      {
        "number": 3,
        "text": "ғరɌవృñȽంత కథలǉ ѿĒ ఉంсంė"
      },
      {
        "number": 4,
        "text": "ʉంథసȽం âకяంш ఆіҙపంǖ ఉంсంė"
      }
    ],
    "correctOption": 3,
    "correctText": "ғరɌవృñȽంత కథలǉ ѿĒ ఉంсంė",
    "difficulty": "Not identified in source",
    "sourceText": "150. ఇĕĄస లɕణం âęė \n \n1) \nƥĢɊĐ కథ \n \n2) \nఅĂȸదశ వరȼనలз అĘక ʿôనɇత \n \n3) \nғరɌవృñȽంత కథలǉ ѿĒ ఉంсంė \n \n4) \nʉంథసȽం âకяంш ఆіҙపంǖ ఉంсంė"
  },
  {
    "id": 151,
    "printedNumber": 151,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "151. చцĠɌధ ыёĂüȾలъ ǐĘంŷĤ",
    "options": [
      {
        "number": 1,
        "text": "కòęకѓ"
      },
      {
        "number": 2,
        "text": "శతâѓ"
      },
      {
        "number": 3,
        "text": "ఇĕĄăѓ"
      },
      {
        "number": 4,
        "text": "Ŵûѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "Ŵûѓ",
    "difficulty": "Not identified in source",
    "sourceText": "151. చцĠɌధ ыёĂüȾలъ ǐĘంŷĤ \n1) \nకòęకѓ \n2) \nశతâѓ \n \n3) \nఇĕĄăѓ \n \n4) \nŴûѓ"
  },
  {
    "id": 152,
    "printedNumber": 152,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "152. కòకథõęĆ అĘక ʿôనɇం కĢĈనė",
    "options": [
      {
        "number": 1,
        "text": "శతకం"
      },
      {
        "number": 2,
        "text": "Ŵయం"
      },
      {
        "number": 3,
        "text": "Ǝఖ"
      },
      {
        "number": 4,
        "text": "ఇĕĄసం"
      }
    ],
    "correctOption": 1,
    "correctText": "శతకం",
    "difficulty": "Not identified in source",
    "sourceText": "152. కòకథõęĆ అĘక ʿôనɇం కĢĈనė \n \n1) \nశతకం \n \n2) \nŴయం \n \n3) \nƎఖ \n \n4) \nఇĕĄసం"
  },
  {
    "id": 153,
    "printedNumber": 153,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "153. üúయణం, మĄùరñѓ ఈ ƺవз œంėనĤ",
    "options": [
      {
        "number": 1,
        "text": "ఇĕĄăѓ"
      },
      {
        "number": 2,
        "text": "ʛబంôѓ"
      },
      {
        "number": 3,
        "text": "ыüðѓ"
      },
      {
        "number": 4,
        "text": "ఖండâĀɇѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "ʛబంôѓ",
    "difficulty": "Not identified in source",
    "sourceText": "153. üúయణం, మĄùరñѓ ఈ ƺవз œంėనĤ \n1) \nఇĕĄăѓ \n2) \nʛబంôѓ \n \n3) \nыüðѓ \n \n4) \nఖండâĀɇѓ"
  },
  {
    "id": 154,
    "printedNumber": 154,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "154. వɇĆȽıĤతంǖ ఒక яఖɇసęɁƐāęɁ Ǝó సంఘటనల మధɇ \nసంబంôęɁ зɊపȽంä కÿతɆకంä ċ˞ంŷ వచన ʛˏయ",
    "options": [
      {
        "number": 1,
        "text": "నవల"
      },
      {
        "number": 2,
        "text": "కòęక"
      },
      {
        "number": 3,
        "text": "Āɇసం"
      },
      {
        "number": 4,
        "text": "Ǝఖ"
      }
    ],
    "correctOption": 3,
    "correctText": "Āɇసం",
    "difficulty": "Not identified in source",
    "sourceText": "154. వɇĆȽıĤతంǖ ఒక яఖɇసęɁƐāęɁ Ǝó సంఘటనల మధɇ \nసంబంôęɁ зɊపȽంä కÿతɆకంä ċ˞ంŷ వచన ʛˏయ  \n1) \nనవల \n2) \nకòęక \n \n3) \nĀɇసం \n \n4) \nƎఖ"
  },
  {
    "id": 155,
    "printedNumber": 155,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "155. శతకం ఏ పóɇęĆ అƃ సɌతంʖùవంǉ ఉండటం వలన \nశతకపóɇలъ .... అంìё",
    "options": [
      {
        "number": 1,
        "text": "గజȞɏ"
      },
      {
        "number": 2,
        "text": "ʛహసõѓ"
      },
      {
        "number": 3,
        "text": "яకȽâѓ"
      },
      {
        "number": 4,
        "text": "ఖంĒకѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "ఖంĒకѓ",
    "difficulty": "Not identified in source",
    "sourceText": "155. శతకం ఏ పóɇęĆ అƃ సɌతంʖùవంǉ ఉండటం వలన \nశతకపóɇలъ .... అంìё \n1) \nగజȞɏ \n \n2) \nʛహసõѓ \n \n3) \nяకȽâѓ \n \n4) \nఖంĒకѓ"
  },
  {
    "id": 156,
    "printedNumber": 156,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "156. ఏЀõ ఒక ĤషûęɁ ĹјƖę óę ғüɌపüలъ చĠȳҠȽ, \nĤƑɊషðతɆకంä ĤసȽĠంċ üయడƊ ....",
    "options": [
      {
        "number": 1,
        "text": "õటకం"
      },
      {
        "number": 2,
        "text": "Ǝఖ"
      },
      {
        "number": 3,
        "text": "నవల"
      },
      {
        "number": 4,
        "text": "Āɇసం"
      }
    ],
    "correctOption": 1,
    "correctText": "õటకం",
    "difficulty": "Not identified in source",
    "sourceText": "156. ఏЀõ ఒక ĤషûęɁ ĹјƖę óę ғüɌపüలъ చĠȳҠȽ, \nĤƑɊషðతɆకంä ĤసȽĠంċ üయడƊ .... \n1) \nõటకం \n \n2) \nƎఖ \n \n3) \nనవల \n \n4) \nĀɇసం"
  },
  {
    "id": 157,
    "printedNumber": 157,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "157. Āɇసం ʛôన లɕణం âęė",
    "options": [
      {
        "number": 1,
        "text": "కథనя"
      },
      {
        "number": 2,
        "text": "яĈంы"
      },
      {
        "number": 3,
        "text": "ఉǎóȱతం"
      },
      {
        "number": 4,
        "text": "Ĥషయ ĤసȽరణ"
      }
    ],
    "correctOption": 2,
    "correctText": "яĈంы",
    "difficulty": "Not identified in source",
    "sourceText": "157. Āɇసం ʛôన లɕణం âęė \n \n1) \nకథనя \n \n2) \nяĈంы \n \n3) \nఉǎóȱతం \n \n4) \nĤషయ ĤసȽరణ"
  },
  {
    "id": 158,
    "printedNumber": 158,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "158. జలɇъ Āþøй öఠం ఈ ʛˏయз œంėనė",
    "options": [
      {
        "number": 1,
        "text": "శతకం"
      },
      {
        "number": 2,
        "text": "ఖండâవɇం"
      },
      {
        "number": 3,
        "text": "ʛబంధం"
      },
      {
        "number": 4,
        "text": "ఇĕĄసం"
      }
    ],
    "correctOption": 3,
    "correctText": "ʛబంధం",
    "difficulty": "Not identified in source",
    "sourceText": "158. జలɇъ Āþøй öఠం ఈ ʛˏయз œంėనė \n1) \nశతకం \n \n2) \nఖండâవɇం \n \n3) \nʛబంధం \n \n4) \nఇĕĄసం"
  },
  {
    "id": 159,
    "printedNumber": 159,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "159. మĄâĀɇలъంĒ రăతɆక ఘìȸలъ Ǝó ఒŲ కò వјȽѕ \nకĢĈన సɌతంʖ ఘìȸęɁ Ĺјзę üħంė ........",
    "options": [
      {
        "number": 1,
        "text": "శతకం"
      },
      {
        "number": 2,
        "text": "గజȞ"
      },
      {
        "number": 3,
        "text": "ఖండâవɇం"
      },
      {
        "number": 4,
        "text": "ёøğ"
      }
    ],
    "correctOption": 4,
    "correctText": "ёøğ",
    "difficulty": "Not identified in source",
    "sourceText": "159. మĄâĀɇలъంĒ రăతɆక ఘìȸలъ Ǝó ఒŲ కò వјȽѕ \nకĢĈన సɌతంʖ ఘìȸęɁ Ĺјзę üħంė ........ \n1) \nశతకం \n2) \nగజȞ \n \n3) \nఖండâవɇం \n \n4) \nёøğ"
  },
  {
    "id": 160,
    "printedNumber": 160,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "160. úʺగðలǉ äనǓగɇంä ఉంžė",
    "options": [
      {
        "number": 1,
        "text": "వచనకĤత"
      },
      {
        "number": 2,
        "text": "శతక పదɇం"
      },
      {
        "number": 3,
        "text": "ఆщęక పదɇం"
      },
      {
        "number": 4,
        "text": "Ŵయం"
      }
    ],
    "correctOption": 1,
    "correctText": "వచనకĤత",
    "difficulty": "Not identified in source",
    "sourceText": "160. úʺగðలǉ äనǓగɇంä ఉంžė \n \n1) \nవచనకĤత \n \n2) \nశతక పదɇం \n \n3) \nఆщęక పదɇం \n \n4) \nŴయం"
  },
  {
    "id": 161,
    "printedNumber": 161,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "161. ыüƀĕĄăలъంĒ ఏЀõ ċనɁ కòంāęɁ ʉĨంċ అĂȸదశ \nవరȼనలǉ Ţంċ, ǎĦంċ సɌతంʖ âవɇంä üƓė",
    "options": [
      {
        "number": 1,
        "text": "ʛబంధం"
      },
      {
        "number": 2,
        "text": "ఖండâవɇం"
      },
      {
        "number": 3,
        "text": "ఇĕĄసం"
      },
      {
        "number": 4,
        "text": "ыüణం"
      }
    ],
    "correctOption": 2,
    "correctText": "ఖండâవɇం",
    "difficulty": "Not identified in source",
    "sourceText": "161. ыüƀĕĄăలъంĒ ఏЀõ ċనɁ కòంāęɁ ʉĨంċ అĂȸదశ \nవరȼనలǉ Ţంċ, ǎĦంċ సɌతంʖ âవɇంä üƓė \n \n1) \nʛబంధం \n \n2) \nఖండâవɇం \n \n3) \nఇĕĄసం \n \n4) \nыüణం"
  },
  {
    "id": 162,
    "printedNumber": 162,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "162. సమసȽ ăĨĹ ʛˏయల సúĄరం",
    "options": [
      {
        "number": 1,
        "text": "నవల"
      },
      {
        "number": 2,
        "text": "õటకం"
      },
      {
        "number": 3,
        "text": "Āɇసం"
      },
      {
        "number": 4,
        "text": "ʛబంధం"
      }
    ],
    "correctOption": 3,
    "correctText": "Āɇసం",
    "difficulty": "Not identified in source",
    "sourceText": "162. సమసȽ ăĨĹ ʛˏయల సúĄరం \n \n1) \nనవల \n \n2) \nõటకం \n \n3) \nĀɇసం \n \n4) \nʛబంధం"
  },
  {
    "id": 163,
    "printedNumber": 163,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "163. ĆంėĀęǖ õటక లɕణం âęė",
    "options": [
      {
        "number": 1,
        "text": "సమసȽ ăĨĹ ʛˏయల సúĄరం"
      },
      {
        "number": 2,
        "text": "నсలŷత ʛదĠɍంచబžė"
      },
      {
        "number": 3,
        "text": "Ąవ,ùవ ʛదరɍనз అవâశం Ǝш"
      },
      {
        "number": 4,
        "text": "õѓй ъంċ పė వరз అంâѓ ఉంìğ"
      }
    ],
    "correctOption": 4,
    "correctText": "õѓй ъంċ పė వరз అంâѓ ఉంìğ",
    "difficulty": "Not identified in source",
    "sourceText": "163. ĆంėĀęǖ õటక లɕణం âęė \n1) \nసమసȽ ăĨĹ ʛˏయల సúĄరం \n2) \nనсలŷత ʛదĠɍంచబžė \n \n3) \nĄవ,ùవ ʛదరɍనз అవâశం Ǝш \n \n4) \nõѓй ъంċ పė వరз అంâѓ ఉంìğ"
  },
  {
    "id": 164,
    "printedNumber": 164,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "164. సంùషణలз, అĝనûęĆ, నсల Ąవ ùవ ʛదరɍనз \nఅవâశం ఉనɁ ʛˏయ",
    "options": [
      {
        "number": 1,
        "text": "నవల"
      },
      {
        "number": 2,
        "text": "ఇĕĄసం"
      },
      {
        "number": 3,
        "text": "ʛబంధం"
      },
      {
        "number": 4,
        "text": "õటకం"
      }
    ],
    "correctOption": 3,
    "correctText": "ʛబంధం",
    "difficulty": "Not identified in source",
    "sourceText": "164. సంùషణలз, అĝనûęĆ, నсల Ąవ ùవ ʛదరɍనз \nఅవâశం ఉనɁ ʛˏయ \n1) \nనవల \n \n2) \nఇĕĄసం \n \n3) \nʛబంధం \n \n4) \nõటకం"
  },
  {
    "id": 165,
    "printedNumber": 165,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "165. ఛంǋęయúѓ Ǝзంî లûతɆకంä ăŴ కĤత",
    "options": [
      {
        "number": 1,
        "text": "పదɇం"
      },
      {
        "number": 2,
        "text": "గజȞ"
      },
      {
        "number": 3,
        "text": "వచనకĤత"
      },
      {
        "number": 4,
        "text": "ఖండâవɇం"
      }
    ],
    "correctOption": 2,
    "correctText": "గజȞ",
    "difficulty": "Not identified in source",
    "sourceText": "165. ఛంǋęయúѓ Ǝзంî లûతɆకంä ăŴ కĤత \n \n1) \nపదɇం \n \n2) \nగజȞ \n \n3) \nవచనకĤత \n \n4) \nఖండâవɇం"
  },
  {
    "id": 166,
    "printedNumber": 166,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "166. వచన కĤతз ƷబйలėȿనсɊä ఇĤ ఉపకĠăȽğ",
    "options": [
      {
        "number": 1,
        "text": "ఛంǋ ęయúѓ"
      },
      {
        "number": 2,
        "text": "అంñɇъ ʿస వంĐ అలంâüѓ"
      },
      {
        "number": 3,
        "text": "ĆɊషȸ సúăѓ"
      },
      {
        "number": 4,
        "text": "Ĥషయʛôనం Ǝę వరȼన"
      }
    ],
    "correctOption": 3,
    "correctText": "ĆɊషȸ సúăѓ",
    "difficulty": "Not identified in source",
    "sourceText": "166. వచన కĤతз ƷబйలėȿనсɊä ఇĤ ఉపకĠăȽğ \n1) \nఛంǋ ęయúѓ \n \n2) \nఅంñɇъ ʿస వంĐ అలంâüѓ \n \n3) \nĆɊషȸ సúăѓ \n \n4) \nĤషయʛôనం Ǝę వరȼన"
  },
  {
    "id": 167,
    "printedNumber": 167,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "167. మహĽѐలъ ʛశɁѓ అడగడం óɌü సúçüęɁ ƓకĠంŷ \nʛˏయ",
    "options": [
      {
        "number": 1,
        "text": "పńɕ"
      },
      {
        "number": 2,
        "text": "ĀǋపĀóѓ"
      },
      {
        "number": 3,
        "text": "яãяć"
      },
      {
        "number": 4,
        "text": "చüȳƼĦȹ"
      }
    ],
    "correctOption": 4,
    "correctText": "చüȳƼĦȹ",
    "difficulty": "Not identified in source",
    "sourceText": "167. మహĽѐలъ ʛశɁѓ అడగడం óɌü సúçüęɁ ƓకĠంŷ \nʛˏయ \n1) \nపńɕ \n2) \nĀǋపĀóѓ \n \n3) \nяãяć \n \n4) \nచüȳƼĦȹ"
  },
  {
    "id": 168,
    "printedNumber": 168,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "168. వɇзȽల వɇĆȽñɌęɁ, ĀĠ అъభĀలъ, ıĤత ĤƑĂలъ \nసɌయంä ĀĠ óɌüƅ ŝѓјзƅ ʛˏయ",
    "options": [
      {
        "number": 1,
        "text": "పńɕ"
      },
      {
        "number": 2,
        "text": "చüȳƐėక"
      },
      {
        "number": 3,
        "text": "అĂȸవôనం"
      },
      {
        "number": 4,
        "text": "яãяć"
      }
    ],
    "correctOption": 1,
    "correctText": "పńɕ",
    "difficulty": "Not identified in source",
    "sourceText": "168. వɇзȽల వɇĆȽñɌęɁ, ĀĠ అъభĀలъ, ıĤత ĤƑĂలъ \nసɌయంä ĀĠ óɌüƅ ŝѓјзƅ ʛˏయ \n1) \nపńɕ \n2) \nచüȳƐėక \n \n3) \nఅĂȸవôనం \n \n4) \nяãяć"
  },
  {
    "id": 169,
    "printedNumber": 169,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "169. వɇĆȽ తన ıĤñъభĀѓ, అĝʿûలъ కలǐħ తనз ñƅ \nüјƖƅ ăĨĹ ʛˏయ",
    "options": [
      {
        "number": 1,
        "text": "ఆతɆకథ"
      },
      {
        "number": 2,
        "text": "ıĤత చĠʖ"
      },
      {
        "number": 3,
        "text": "ƃశ చĠʖ"
      },
      {
        "number": 4,
        "text": "ăĨĹ చĠʖ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆతɆకథ",
    "difficulty": "Not identified in source",
    "sourceText": "169. వɇĆȽ తన ıĤñъభĀѓ, అĝʿûలъ కలǐħ తనз ñƅ \nüјƖƅ ăĨĹ ʛˏయ \n \n1) \nఆతɆకథ \n \n2) \nıĤత చĠʖ \n \n3) \nƃశ చĠʖ \n \n4) \năĨĹ చĠʖ"
  },
  {
    "id": 170,
    "printedNumber": 170,
    "topic": "సాహిత్య ప్రక్రియలు మరియు కావ్య రూపాలు",
    "stem": "170. అమɆ ͏మъ, ƘపɂతõęɁ ŝĢయŹƓ ఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "అమɆ ఒĒ"
      },
      {
        "number": 2,
        "text": "మమâరం"
      },
      {
        "number": 3,
        "text": "ƊѓƖѓы"
      },
      {
        "number": 4,
        "text": "తృĚȽ"
      }
    ],
    "correctOption": 2,
    "correctText": "మమâరం",
    "difficulty": "Not identified in source",
    "sourceText": "170. అమɆ ͏మъ, ƘపɂతõęɁ ŝĢయŹƓ ఉƃȿశం కĢĈన öఠం \n \n1) \nఅమɆ ఒĒ \n \n2) \nమమâరం \n \n3) \nƊѓƖѓы \n \n4) \nతృĚȽ"
  },
  {
    "id": 171,
    "printedNumber": 171,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "171. “ăĐమъїల సంǉషƊ ęజЇన సంǉషం” అę ŝĢయŹƓ \nఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "మమâరం"
      },
      {
        "number": 2,
        "text": "తృĚȽ"
      },
      {
        "number": 3,
        "text": "సమయҠɃĠȽ"
      },
      {
        "number": 4,
        "text": "ҋ ҋ బసవనɁ"
      }
    ],
    "correctOption": 3,
    "correctText": "సమయҠɃĠȽ",
    "difficulty": "Not identified in source",
    "sourceText": "171. “ăĐమъїల సంǉషƊ ęజЇన సంǉషం” అę ŝĢయŹƓ \nఉƃȿశం కĢĈన öఠం \n \n1) \nమమâరం \n \n2) \nతృĚȽ \n \n3) \nసమయҠɃĠȽ \n \n4) \nҋ ҋ బసవనɁ"
  },
  {
    "id": 172,
    "printedNumber": 172,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "172. ĤóɇёȾǖɊ Ђĕక Ĥѓవѓ Ţంƪంėంċ, ĀĠę ఉతȽమ ǲёѓä \nĹĠȳėóȿలƅ ఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "సమయҠɃĠȽ"
      },
      {
        "number": 2,
        "text": "తృĚȽ"
      },
      {
        "number": 3,
        "text": "јùĦñѓ"
      },
      {
        "number": 4,
        "text": "úƖĻȿ ŝలɊƧరతనం"
      }
    ],
    "correctOption": 4,
    "correctText": "úƖĻȿ ŝలɊƧరతనం",
    "difficulty": "Not identified in source",
    "sourceText": "172. ĤóɇёȾǖɊ Ђĕక Ĥѓవѓ Ţంƪంėంċ, ĀĠę ఉతȽమ ǲёѓä \nĹĠȳėóȿలƅ ఉƃȿశం కĢĈన öఠం \n1) \nసమయҠɃĠȽ \n2) \nతృĚȽ \n \n3) \nјùĦñѓ \n \n4) \núƖĻȿ ŝలɊƧరతనం"
  },
  {
    "id": 173,
    "printedNumber": 173,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "173. “ĀడగĢĈన ʛĕƿట úతృùషƅ Āడóం”  అę œపɂడం \nఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "సమయҠɃĠȽ"
      },
      {
        "number": 2,
        "text": "తృĚȽ"
      },
      {
        "number": 3,
        "text": "ƊѓƖѓы"
      },
      {
        "number": 4,
        "text": "మమâరం"
      }
    ],
    "correctOption": 1,
    "correctText": "సమయҠɃĠȽ",
    "difficulty": "Not identified in source",
    "sourceText": "173. “ĀడగĢĈన ʛĕƿట úతృùషƅ Āడóం”  అę œపɂడం \nఉƃȿశం కĢĈన öఠం \n \n1) \nసమయҠɃĠȽ \n \n2) \nతృĚȽ \n \n3) \nƊѓƖѓы \n \n4) \nమమâరం"
  },
  {
    "id": 174,
    "printedNumber": 174,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "174. ăɌతంʺɇęĆ яంш ęమɁéцల పĠħȾĕę, ఆõĐ ĀĠ \nఆâంɕъ ŝĢయŹƓ ఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ƊѓƖѓы"
      },
      {
        "number": 2,
        "text": "ధరɆęరȼయం"
      },
      {
        "number": 3,
        "text": "మమâరం"
      },
      {
        "number": 4,
        "text": "తృĚȽ"
      }
    ],
    "correctOption": 2,
    "correctText": "ధరɆęరȼయం",
    "difficulty": "Not identified in source",
    "sourceText": "174. ăɌతంʺɇęĆ яంш ęమɁéцల పĠħȾĕę, ఆõĐ ĀĠ \nఆâంɕъ ŝĢయŹƓ ఉƃȿశం కĢĈన öఠం \n1) \nƊѓƖѓы \n2) \nధరɆęరȼయం \n \n3) \nమమâరం \n \n4) \nతృĚȽ"
  },
  {
    "id": 175,
    "printedNumber": 174,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "174. úధవవరɆ ధరɆęరĕę ŝĢయŹƓ öఠం",
    "options": [
      {
        "number": 1,
        "text": "ƊѓƖѓы"
      },
      {
        "number": 2,
        "text": "ధరɆęరȼయం"
      },
      {
        "number": 3,
        "text": "సమయҠɃĠȽ"
      },
      {
        "number": 4,
        "text": "మమâరం\n175. éనపద కళల పటɊ అవäహన కĢĈంŷ ఉƃȿశం కĢĈన öఠం"
      },
      {
        "number": 1,
        "text": "ఎంత మంċĀరúɆ!"
      },
      {
        "number": 2,
        "text": "Ɗѓ Ɩѓы"
      },
      {
        "number": 3,
        "text": "ҋ ҋ బసవనɁ"
      },
      {
        "number": 4,
        "text": "ధరɆęరȼయం"
      }
    ],
    "correctOption": 3,
    "correctText": "సమయҠɃĠȽ",
    "difficulty": "Not identified in source",
    "sourceText": "174. úధవవరɆ ధరɆęరĕę ŝĢయŹƓ öఠం \n1) \nƊѓƖѓы \n2) \nధరɆęరȼయం \n \n3) \nసమయҠɃĠȽ \n \n4) \nమమâరం \n \n175. éనపద కళల పటɊ అవäహన కĢĈంŷ ఉƃȿశం కĢĈన öఠం \n1) \nఎంత మంċĀరúɆ! \n \n2) \nƊѓ Ɩѓы \n \n3) \nҋ ҋ బసవనɁ \n \n4) \nధరɆęరȼయం"
  },
  {
    "id": 176,
    "printedNumber": 176,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "176. ĤóɇёȾǖɊ ఉĄశĆȽę Ţంŷ ఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "అɕరం"
      },
      {
        "number": 2,
        "text": "ċęɁ ĥіѕ"
      },
      {
        "number": 3,
        "text": "పదɇపĠమళం"
      },
      {
        "number": 4,
        "text": "úûకంబģ"
      }
    ],
    "correctOption": 4,
    "correctText": "úûకంబģ",
    "difficulty": "Not identified in source",
    "sourceText": "176. ĤóɇёȾǖɊ ఉĄశĆȽę Ţంŷ ఉƃȿశం కĢĈన öఠం  \n1) \nఅɕరం \n \n2) \nċęɁ ĥіѕ \n \n3) \nపదɇపĠమళం \n \n4) \núûకంబģ"
  },
  {
    "id": 177,
    "printedNumber": 177,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "177. ఆāĀదంǉ яంшз ăйцనɁ ĈĠజъల ʦమ ıవõęɁ \nœపɂడం ఉƃȿశంä కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ఎద"
      },
      {
        "number": 2,
        "text": "కపɂతĢɊ Ţģɋ"
      },
      {
        "number": 3,
        "text": "ҋҋ బసవనɁ"
      },
      {
        "number": 4,
        "text": "úûకంబģ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఎద",
    "difficulty": "Not identified in source",
    "sourceText": "177. ఆāĀదంǉ яంшз ăйцనɁ ĈĠజъల ʦమ ıవõęɁ \nœపɂడం ఉƃȿశంä కĢĈన öఠం  \n \n1) \nఎద \n \n2) \nకపɂతĢɊ Ţģɋ \n \n3) \nҋҋ బసవనɁ \n \n4) \núûకంబģ"
  },
  {
    "id": 178,
    "printedNumber": 178,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "178. çĠʖక కటȸîలъ రĩంмƺవలħన ఆవశɇకతъ ŝĢయŹƓ \nöఠం",
    "options": [
      {
        "number": 1,
        "text": "úతృҖĞ"
      },
      {
        "number": 2,
        "text": "õ ûʖ"
      },
      {
        "number": 3,
        "text": "పయనం"
      },
      {
        "number": 4,
        "text": "õ చшѕ"
      }
    ],
    "correctOption": 2,
    "correctText": "õ ûʖ",
    "difficulty": "Not identified in source",
    "sourceText": "178. çĠʖక కటȸîలъ రĩంмƺవలħన ఆవశɇకతъ ŝĢయŹƓ \nöఠం \n1) \núతృҖĞ \n \n2) \nõ ûʖ \n \n3) \nపయనం \n \n4) \nõ చшѕ"
  },
  {
    "id": 179,
    "printedNumber": 179,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "179. ƃశ అĝవృėɀǖ ʦమıѕల öʖ ĪలకЇనė ĀĠ కĂȸęɁ йĠȽంċ, \nĀĠ ʦమъ ǠరĤంçలƅ ఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "úతృҖĞ"
      },
      {
        "number": 2,
        "text": "ċరúĢనɇం"
      },
      {
        "number": 3,
        "text": "సంƃశం"
      },
      {
        "number": 4,
        "text": "పయనం"
      }
    ],
    "correctOption": 3,
    "correctText": "సంƃశం",
    "difficulty": "Not identified in source",
    "sourceText": "179. ƃశ అĝవృėɀǖ ʦమıѕల öʖ ĪలకЇనė ĀĠ కĂȸęɁ йĠȽంċ, \nĀĠ ʦమъ ǠరĤంçలƅ ఉƃȿశం కĢĈన öఠం  \n1) \núతృҖĞ \n2) \nċరúĢనɇం \n \n3) \nసంƃశం \n \n4) \nపయనం"
  },
  {
    "id": 180,
    "printedNumber": 180,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "180. సనɁâё Љцѓ, Љцѿņѓ పž వలస కĂȸలъ ŝĢయŹయడం \nఉƃȿశంä కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "õûʖ"
      },
      {
        "number": 2,
        "text": "úతృҖĞ"
      },
      {
        "number": 3,
        "text": "ƊĢమѓы"
      },
      {
        "number": 4,
        "text": "పయనం"
      }
    ],
    "correctOption": 4,
    "correctText": "పయనం",
    "difficulty": "Not identified in source",
    "sourceText": "180. సనɁâё Љцѓ, Љцѿņѓ పž వలస కĂȸలъ ŝĢయŹయడం \nఉƃȿశంä కĢĈన öఠం \n \n1) \nõûʖ \n \n2) \núతృҖĞ \n \n3) \nƊĢమѓы \n \n4) \nపయనం"
  },
  {
    "id": 181,
    "printedNumber": 181,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "181. ıĤతంǖ ఎшరƋɇ øôకరЇన సంఘటనЂõ సంǉషకరЇన \nసంఘటЂõ ŋɌకĠంచîęĆ ħదɀంä ఉంîలę œƆɂ öఠం",
    "options": [
      {
        "number": 1,
        "text": "ƊĢ మѓы"
      },
      {
        "number": 2,
        "text": "ċరúĢనɇం"
      },
      {
        "number": 3,
        "text": "õûʖ"
      },
      {
        "number": 4,
        "text": "సంƃశం"
      }
    ],
    "correctOption": 1,
    "correctText": "ƊĢ మѓы",
    "difficulty": "Not identified in source",
    "sourceText": "181. ıĤతంǖ ఎшరƋɇ øôకరЇన సంఘటనЂõ సంǉషకరЇన \nసంఘటЂõ ŋɌకĠంచîęĆ ħదɀంä ఉంîలę œƆɂ öఠం \n \n1) \nƊĢ మѓы \n \n2) \nċరúĢనɇం \n \n3) \nõûʖ \n \n4) \nసంƃశం"
  },
  {
    "id": 182,
    "printedNumber": 182,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "182. ‘ċరúĢనɇం’ öఠం ʛôన ఉƃȿశం",
    "options": [
      {
        "number": 1,
        "text": "éȷõęɁ Ţంచడం"
      },
      {
        "number": 2,
        "text": "úనవతɌం Ţంచడం"
      },
      {
        "number": 3,
        "text": "అసúనతѓ Ţంచడం"
      },
      {
        "number": 4,
        "text": "ĤǍదం పంచడం"
      }
    ],
    "correctOption": 2,
    "correctText": "úనవతɌం Ţంచడం",
    "difficulty": "Not identified in source",
    "sourceText": "182. ‘ċరúĢనɇం’ öఠం ʛôన ఉƃȿశం \n \n1) \néȷõęɁ Ţంచడం \n \n2) \núనవతɌం Ţంచడం \n \n3) \nఅసúనతѓ Ţంచడం \n \n4) \nĤǍదం పంచడం"
  },
  {
    "id": 183,
    "printedNumber": 183,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "183. ఆతɆకథъ పĠచయం ŷûలƅ ఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ƊĢమѓѕ"
      },
      {
        "number": 2,
        "text": "ċరúĢనɇం"
      },
      {
        "number": 3,
        "text": "õĐ చшѕ"
      },
      {
        "number": 4,
        "text": "సమదృĦȸ"
      }
    ],
    "correctOption": 3,
    "correctText": "õĐ చшѕ",
    "difficulty": "Not identified in source",
    "sourceText": "183. ఆతɆకథъ పĠచయం ŷûలƅ ఉƃȿశం కĢĈన öఠం \n1) \nƊĢమѓѕ \n2) \nċరúĢనɇం \n \n3) \nõĐ చшѕ \n \n4) \nసమదృĦȸ"
  },
  {
    "id": 184,
    "printedNumber": 184,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "184. ŝѓй ùష ʛƁɇకతъ, ఘనతъ, úщüɇęɁ \nŝĢయŹయడంǉöс ùĂĝúõęɁ Ţంƪంėంŷ ఉƃȿశం \nకĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "అɕరం"
      },
      {
        "number": 2,
        "text": "సంƃశం"
      },
      {
        "number": 3,
        "text": "õĐ చшѕ"
      },
      {
        "number": 4,
        "text": "юవనĤజయం"
      }
    ],
    "correctOption": 4,
    "correctText": "юవనĤజయం",
    "difficulty": "Not identified in source",
    "sourceText": "184. ŝѓй ùష ʛƁɇకతъ, ఘనతъ, úщüɇęɁ \nŝĢయŹయడంǉöс ùĂĝúõęɁ Ţంƪంėంŷ ఉƃȿశం \nకĢĈన öఠం \n1) \nఅɕరం \n \n2) \nసంƃశం \n \n3) \nõĐ చшѕ \n \n4) \nюవనĤజయం"
  },
  {
    "id": 185,
    "printedNumber": 185,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "185. ‘úనవతɌƊ ıĤత పరúరȾం’ అę œపɂడం ఉƃȿశంä కĢĈన \nöఠం",
    "options": [
      {
        "number": 1,
        "text": "బцз గంప"
      },
      {
        "number": 2,
        "text": "ıవę"
      },
      {
        "number": 3,
        "text": "కõɇіలȮం"
      },
      {
        "number": 4,
        "text": "ҠĆȽјధ"
      }
    ],
    "correctOption": 1,
    "correctText": "బцз గంప",
    "difficulty": "Not identified in source",
    "sourceText": "185. ‘úనవతɌƊ ıĤత పరúరȾం’ అę œపɂడం ఉƃȿశంä కĢĈన \nöఠం \n \n1) \nబцз గంప \n \n2) \nıవę \n \n3) \nకõɇіలȮం \n \n4) \nҠĆȽјధ"
  },
  {
    "id": 186,
    "printedNumber": 186,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "186. సúజంǖę шüçüѓ, సంఘసంసȮరణЃ అవäహనన \nకĢɂంċ ĤóɇёȾలъ ϴతనɇపరచడం ఉƃȿశంä కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ıవę"
      },
      {
        "number": 2,
        "text": "కõɇіలȮం"
      },
      {
        "number": 3,
        "text": "ఉపõɇసకళ"
      },
      {
        "number": 4,
        "text": "ŷéĠనøలɇం"
      }
    ],
    "correctOption": 2,
    "correctText": "కõɇіలȮం",
    "difficulty": "Not identified in source",
    "sourceText": "186. సúజంǖę шüçüѓ, సంఘసంసȮరణЃ అవäహనన \nకĢɂంċ ĤóɇёȾలъ ϴతనɇపరచడం ఉƃȿశంä కĢĈన öఠం \n1) \nıవę \n \n2) \nకõɇіలȮం \n \n3) \nఉపõɇసకళ \n \n4) \nŷéĠనøలɇం"
  },
  {
    "id": 187,
    "printedNumber": 187,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "187. úనѕѓ ŷƓ ʛĕపęĆ, ʛĕ సంకþɂęĆ ĀĠ అంతüతɆ ăĩ \nఅę йёȽŷҠȽ సతɇం ƘపɂతõęɁ œపɂడƊ ఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ʛతɇɕЀĀѓ"
      },
      {
        "number": 2,
        "text": "జలɇъĀþ øй"
      },
      {
        "number": 3,
        "text": "ధరɆǐధ"
      },
      {
        "number": 4,
        "text": "üజధరɆం"
      }
    ],
    "correctOption": 3,
    "correctText": "ధరɆǐధ",
    "difficulty": "Not identified in source",
    "sourceText": "187. úనѕѓ ŷƓ ʛĕపęĆ, ʛĕ సంకþɂęĆ ĀĠ అంతüతɆ ăĩ \nఅę йёȽŷҠȽ సతɇం ƘపɂతõęɁ œపɂడƊ ఉƃȿశం కĢĈన öఠం \n1) \nʛతɇɕЀĀѓ \n2) \nజలɇъĀþ øй \n \n3) \nధరɆǐధ \n \n4) \nüజధరɆం"
  },
  {
    "id": 188,
    "printedNumber": 188,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "188. ŋɓѓ ఆñɆĝúõęɁ ŢంƪంėంмƺĀĢ అę ŝĢయŹƓ \nఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ˣయЇన õనɁз"
      },
      {
        "number": 2,
        "text": "õ చшѕ"
      },
      {
        "number": 3,
        "text": "ఏƃశƊĈõ"
      },
      {
        "number": 4,
        "text": "ఇలɊలకäƅ ....!"
      }
    ],
    "correctOption": 4,
    "correctText": "ఇలɊలకäƅ ....!",
    "difficulty": "Not identified in source",
    "sourceText": "188. ŋɓѓ ఆñɆĝúõęɁ ŢంƪంėంмƺĀĢ అę ŝĢయŹƓ \nఉƃȿశం కĢĈన öఠం \n1) \nˣయЇన õనɁз \n2) \nõ చшѕ \n \n3) \nఏƃశƊĈõ \n \n4) \nఇలɊలకäƅ ....!"
  },
  {
    "id": 189,
    "printedNumber": 189,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "189. Җతదయ, అĨంస, ɕúйణం ƮదЋన ăĕɌక йðలъ \nĤóɇёȾѓ అలవరмƺĀలƅ ఉƃȿశం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "Ĺёɂ"
      },
      {
        "number": 2,
        "text": "ధరɆǐధ"
      },
      {
        "number": 3,
        "text": "ఆతɆకథ"
      },
      {
        "number": 4,
        "text": "úట మĨమ"
      }
    ],
    "correctOption": 1,
    "correctText": "Ĺёɂ",
    "difficulty": "Not identified in source",
    "sourceText": "189. Җతదయ, అĨంస, ɕúйణం ƮదЋన ăĕɌక йðలъ \nĤóɇёȾѓ అలవరмƺĀలƅ ఉƃȿశం కĢĈన öఠం \n \n1) \nĹёɂ \n \n2) \nధరɆǐధ \n \n3) \nఆతɆకథ \n \n4) \núట మĨమ"
  },
  {
    "id": 190,
    "printedNumber": 190,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "190. ŋɓ ϴతనɇం ఇĕవృతȽంä కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ఇలɊకäƅ ...!"
      },
      {
        "number": 2,
        "text": "ˣయЇన õనɁз"
      },
      {
        "number": 3,
        "text": "õ చшѕ"
      },
      {
        "number": 4,
        "text": "ఆзపచȳǙకం"
      }
    ],
    "correctOption": 1,
    "correctText": "ఇలɊకäƅ ...!",
    "difficulty": "Not identified in source",
    "sourceText": "190. ŋɓ ϴతనɇం ఇĕవృతȽంä కĢĈన öఠం \n \n1) \nఇలɊకäƅ ...! \n \n2) \nˣయЇన õనɁз \n \n3) \nõ చшѕ \n \n4) \nఆзపచȳǙకం"
  },
  {
    "id": 191,
    "printedNumber": 191,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "191. ‘ˣయЇన õనɁз’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "సɌయంకృĦ"
      },
      {
        "number": 2,
        "text": "úనవసంబంôѓ"
      },
      {
        "number": 3,
        "text": "ıవన Ĥôనం"
      },
      {
        "number": 4,
        "text": "ҠɃĠȽ"
      }
    ],
    "correctOption": 2,
    "correctText": "úనవసంబంôѓ",
    "difficulty": "Not identified in source",
    "sourceText": "191. ‘ˣయЇన õనɁз’ öఠం ఇĕవృతȽం \n \n1) \nసɌయంకృĦ \n \n2) \núనవసంబంôѓ \n \n3) \nıవన Ĥôనం \n \n4) \nҠɃĠȽ"
  },
  {
    "id": 192,
    "printedNumber": 192,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "192. ‘ϴతనɇం’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "పǔపâరం"
      },
      {
        "number": 2,
        "text": "ƃశభĆȽ"
      },
      {
        "number": 3,
        "text": "ăúčక øధɇత"
      },
      {
        "number": 4,
        "text": "зсంబ సంబంôѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ăúčక øధɇత",
    "difficulty": "Not identified in source",
    "sourceText": "192. ‘ϴతనɇం’ öఠం ఇĕవృతȽం \n1) \nపǔపâరం \n2) \nƃశభĆȽ \n \n3) \năúčక øధɇత \n \n4) \nзсంబ సంబంôѓ"
  },
  {
    "id": 193,
    "printedNumber": 193,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "193. ʛƁɇక అవసüల ĚలɊѓ ŷҘత ఇĕవృతȽం కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "బцз గంప"
      },
      {
        "number": 2,
        "text": "ŷéĠన øలɇం"
      },
      {
        "number": 3,
        "text": "ҠĆȽ јధ"
      },
      {
        "number": 4,
        "text": "ıవę"
      }
    ],
    "correctOption": 4,
    "correctText": "ıవę",
    "difficulty": "Not identified in source",
    "sourceText": "193. ʛƁɇక అవసüల ĚలɊѓ ŷҘత ఇĕవృతȽం కĢĈన öఠం \n \n1) \nబцз గంప \n \n2) \nŷéĠన øలɇం \n \n3) \nҠĆȽ јధ \n \n4) \nıవę"
  },
  {
    "id": 194,
    "printedNumber": 194,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "194. ‘ŷéĠన øలɇం’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "వɇĆȽతɌ Ĥâసం"
      },
      {
        "number": 2,
        "text": "ఆщęక Ĥదɇ ఆవశɇకత"
      },
      {
        "number": 3,
        "text": "ఉతȽమ úనవ йðѓ"
      },
      {
        "number": 4,
        "text": "зсంబ Ĥѓవѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "వɇĆȽతɌ Ĥâసం",
    "difficulty": "Not identified in source",
    "sourceText": "194. ‘ŷéĠన øలɇం’ öఠం ఇĕవృతȽం \n1) \nవɇĆȽతɌ Ĥâసం \n2) \nఆщęక Ĥదɇ ఆవశɇకత \n \n3) \nఉతȽమ úనవ йðѓ \n \n4) \nзсంబ Ĥѓవѓ"
  },
  {
    "id": 195,
    "printedNumber": 195,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "195. ‘üజధరɆం’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "ƃశభĆȽ"
      },
      {
        "number": 2,
        "text": "õయకతɌ లɕðѓ"
      },
      {
        "number": 3,
        "text": "āంĕ ఆవశɇకత"
      },
      {
        "number": 4,
        "text": "зсంబ Ĥѓవѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "õయకతɌ లɕðѓ",
    "difficulty": "Not identified in source",
    "sourceText": "195. ‘üజధరɆం’ öఠం ఇĕవృతȽం \n1) \nƃశభĆȽ \n2) \nõయకతɌ లɕðѓ \n \n3) \nāంĕ ఆవశɇకత \n \n4) \nзсంబ Ĥѓవѓ"
  },
  {
    "id": 196,
    "printedNumber": 196,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "196. ‘జĢయȕ Āþ øȄ’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "āంĕ ఆవశɇకత"
      },
      {
        "number": 2,
        "text": "õయకతɌ లɕðѓ"
      },
      {
        "number": 3,
        "text": "ƃశభĆȽ"
      },
      {
        "number": 4,
        "text": "ఉతȽమ úనవ йðѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ƃశభĆȽ",
    "difficulty": "Not identified in source",
    "sourceText": "196. ‘జĢయȕ Āþ øȄ’ öఠం ఇĕవృతȽం  \n1) \nāంĕ ఆవశɇకత \n \n2) \nõయకతɌ లɕðѓ \n \n3) \nƃశభĆȽ \n \n4) \nఉతȽమ úనవ йðѓ"
  },
  {
    "id": 197,
    "printedNumber": 197,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "197. ‘ఆщęక Ĥదɇ ఆవశɇకత’ ఇĕవృతȽంä  కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ıవę"
      },
      {
        "number": 2,
        "text": "ఉపõɇస కళ"
      },
      {
        "number": 3,
        "text": "బцз గంప"
      },
      {
        "number": 4,
        "text": "కõɇіలȮం"
      }
    ],
    "correctOption": 4,
    "correctText": "కõɇіలȮం",
    "difficulty": "Not identified in source",
    "sourceText": "197. ‘ఆщęక Ĥదɇ ఆవశɇకత’ ఇĕవృతȽంä  కĢĈన öఠం \n1) \nıవę \n \n2) \nఉపõɇస కళ \n \n3) \nబцз గంప \n \n4) \nకõɇіలȮం"
  },
  {
    "id": 198,
    "printedNumber": 198,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "198. ‘ƊĢమѓы’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "ఆతɆůӈȾరɇం"
      },
      {
        "number": 2,
        "text": "సúనతɌం"
      },
      {
        "number": 3,
        "text": "అĕĖǠరవం"
      },
      {
        "number": 4,
        "text": "ùĂĝёċ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆతɆůӈȾరɇం",
    "difficulty": "Not identified in source",
    "sourceText": "198. ‘ƊĢమѓы’ öఠం ఇĕవృతȽం  \n \n1) \nఆతɆůӈȾరɇం \n \n2) \nసúనతɌం \n \n3) \nఅĕĖǠరవం \n \n4) \nùĂĝёċ"
  },
  {
    "id": 199,
    "printedNumber": 199,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "199. ‘úనవ Ĥѓవѓ’ ఇĕవృతȽంä కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ఆĕథɇం"
      },
      {
        "number": 2,
        "text": "ċరúĢనɇం"
      },
      {
        "number": 3,
        "text": "õĐచшѕ"
      },
      {
        "number": 4,
        "text": "ƊĢమѓы"
      }
    ],
    "correctOption": 2,
    "correctText": "ċరúĢనɇం",
    "difficulty": "Not identified in source",
    "sourceText": "199. ‘úనవ Ĥѓవѓ’ ఇĕవృతȽంä కĢĈన öఠం \n1) \nఆĕథɇం \n \n2) \nċరúĢనɇం \n \n3) \nõĐచшѕ \n \n4) \nƊĢమѓы"
  },
  {
    "id": 200,
    "printedNumber": 200,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "200. ƃశభĆȽ, зсంబĤѓవѓ ఇĕవృతȽంä ఉనɁ öఠం",
    "options": [
      {
        "number": 1,
        "text": "õ ûʖ"
      },
      {
        "number": 2,
        "text": "పయనం"
      },
      {
        "number": 3,
        "text": "úతృҖĞ"
      },
      {
        "number": 4,
        "text": "ఆంʙ Ѝభవం"
      }
    ],
    "correctOption": 3,
    "correctText": "úతృҖĞ",
    "difficulty": "Not identified in source",
    "sourceText": "200. ƃశభĆȽ, зсంబĤѓవѓ ఇĕవృతȽంä ఉనɁ öఠం \n1) \nõ ûʖ \n2) \nపయనం \n \n3) \núతృҖĞ \n \n4) \nఆంʙ Ѝభవం"
  },
  {
    "id": 201,
    "printedNumber": 201,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "201. ‘మ˩œсȸ’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "వరȼన"
      },
      {
        "number": 2,
        "text": "సంసȭĕ - సంʛóûѓ"
      },
      {
        "number": 3,
        "text": "Ђĕక Ĥѓవѓ"
      },
      {
        "number": 4,
        "text": "సĄъҖĕ"
      }
    ],
    "correctOption": 4,
    "correctText": "సĄъҖĕ",
    "difficulty": "Not identified in source",
    "sourceText": "201. ‘మ˩œсȸ’ öఠం ఇĕవృతȽం \n \n1) \nవరȼన \n \n2) \nసంసȭĕ - సంʛóûѓ \n \n3) \nЂĕక Ĥѓవѓ \n \n4) \nసĄъҖĕ"
  },
  {
    "id": 202,
    "printedNumber": 202,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "202. ‘úనవ సɌùవం’ ఇĕవృతȽంä కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "úûకంబģ"
      },
      {
        "number": 2,
        "text": "ċęɁ ĥіѕ"
      },
      {
        "number": 3,
        "text": "మ˩œсȸ"
      },
      {
        "number": 4,
        "text": "అɕరం"
      }
    ],
    "correctOption": 1,
    "correctText": "úûకంబģ",
    "difficulty": "Not identified in source",
    "sourceText": "202. ‘úనవ సɌùవం’ ఇĕవృతȽంä కĢĈన öఠం \n \n1) \núûకంబģ \n \n2) \nċęɁ ĥіѕ \n \n3) \nమ˩œсȸ \n \n4) \nఅɕరం"
  },
  {
    "id": 203,
    "printedNumber": 203,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "203. ‘ıవన ЍĤధɇం’ ఇĕవృతȽంä కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "తృĚȽ"
      },
      {
        "number": 2,
        "text": "ఎంత మంċĀరúɆ!"
      },
      {
        "number": 3,
        "text": "సమయҠɃĠȽ"
      },
      {
        "number": 4,
        "text": "ధరɆęరȼయం"
      }
    ],
    "correctOption": 2,
    "correctText": "ఎంత మంċĀరúɆ!",
    "difficulty": "Not identified in source",
    "sourceText": "203. ‘ıవన ЍĤధɇం’ ఇĕవృతȽంä కĢĈన öఠం \n \n1) \nతృĚȽ \n \n2) \nఎంత మంċĀరúɆ! \n \n3) \nసమయҠɃĠȽ \n \n4) \nధరɆęరȼయం"
  },
  {
    "id": 204,
    "printedNumber": 204,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "204. ‘తృĚȽ’ öఠంǖ ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "ıవన ЍĤధɇం"
      },
      {
        "number": 2,
        "text": "సȾలыüణం"
      },
      {
        "number": 3,
        "text": "úనవ Ĥѓవѓ"
      },
      {
        "number": 4,
        "text": "సమయҠɃĠȽ"
      }
    ],
    "correctOption": 3,
    "correctText": "úనవ Ĥѓవѓ",
    "difficulty": "Not identified in source",
    "sourceText": "204. ‘తృĚȽ’ öఠంǖ ఇĕవృతȽం  \n1) \nıవన ЍĤధɇం \n2) \nసȾలыüణం \n \n3) \núనవ Ĥѓవѓ \n \n4) \nసమయҠɃĠȽ"
  },
  {
    "id": 205,
    "printedNumber": 205,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "205. ‘మమâరం’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "úనవ Ĥѓవѓ"
      },
      {
        "number": 2,
        "text": "సమయҠɃĠȽ"
      },
      {
        "number": 3,
        "text": "సĄъҖĕ"
      },
      {
        "number": 4,
        "text": "ùĂĝёċ"
      }
    ],
    "correctOption": 4,
    "correctText": "ùĂĝёċ",
    "difficulty": "Not identified in source",
    "sourceText": "205. ‘మమâరం’ öఠం ఇĕవృతȽం \n1) \núనవ Ĥѓవѓ \n \n2) \nసమయҠɃĠȽ \n \n3) \nసĄъҖĕ \n \n4) \nùĂĝёċ"
  },
  {
    "id": 206,
    "printedNumber": 206,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "206. ‘ҋ ҋ బసవనɁ’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "సంసȭĕ"
      },
      {
        "number": 2,
        "text": "ƃశభĆȽ"
      },
      {
        "number": 3,
        "text": "ùĂĝёċ"
      },
      {
        "number": 4,
        "text": "తĢɊ͏మ"
      }
    ],
    "correctOption": 1,
    "correctText": "సంసȭĕ",
    "difficulty": "Not identified in source",
    "sourceText": "206. ‘ҋ ҋ బసవనɁ’ öఠం ఇĕవృతȽం \n \n1) \nసంసȭĕ  \n \n2) \nƃశభĆȽ \n \n3) \nùĂĝёċ \n \n4) \nతĢɊ͏మ"
  },
  {
    "id": 207,
    "printedNumber": 207,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "207. ‘õ చшѕ’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "సంసȭĕ"
      },
      {
        "number": 2,
        "text": "ҠɃĠȽ"
      },
      {
        "number": 3,
        "text": "ŋɓ ϴతనɇం"
      },
      {
        "number": 4,
        "text": "పüɇవరణం"
      }
    ],
    "correctOption": 2,
    "correctText": "ҠɃĠȽ",
    "difficulty": "Not identified in source",
    "sourceText": "207. ‘õ చшѕ’ öఠం ఇĕవృతȽం \n1) \nసంసȭĕ \n \n2) \nҠɃĠȽ \n \n3) \nŋɓ ϴతనɇం \n \n4) \nపüɇవరణం"
  },
  {
    "id": 208,
    "printedNumber": 208,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "208. ‘ăĨĹ ıవనం’ ఇĕవృతȽంä  కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ఇలɊకäƅ"
      },
      {
        "number": 2,
        "text": "ˣయЇన õనɁз"
      },
      {
        "number": 3,
        "text": "ఆāĀė"
      },
      {
        "number": 4,
        "text": "õ చшѕ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఆāĀė",
    "difficulty": "Not identified in source",
    "sourceText": "208. ‘ăĨĹ ıవనం’ ఇĕవృతȽంä  కĢĈన öఠం \n1) \nఇలɊకäƅ \n2) \nˣయЇన õనɁз \n \n3) \nఆāĀė \n \n4) \nõ చшѕ"
  },
  {
    "id": 209,
    "printedNumber": 209,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "209. ‘అɕరం’ öఠం ఇĕవృతȽం",
    "options": [
      {
        "number": 1,
        "text": "Ўశవ వరȼన"
      },
      {
        "number": 2,
        "text": "Ђĕక Ĥѓవѓ"
      },
      {
        "number": 3,
        "text": "ǽరɇ పüʇúѓ"
      },
      {
        "number": 4,
        "text": "చшѕ Ĥĥషȸత"
      }
    ],
    "correctOption": 4,
    "correctText": "చшѕ Ĥĥషȸత",
    "difficulty": "Not identified in source",
    "sourceText": "209. ‘అɕరం’ öఠం ఇĕవృతȽం \n1) \nЎశవ వరȼన \n2) \nЂĕక Ĥѓవѓ \n \n3) \nǽరɇ పüʇúѓ \n \n4) \nచшѕ Ĥĥషȸత"
  },
  {
    "id": 210,
    "printedNumber": 210,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "210. ‘తĢɊదంѧల Ɠవ’ ఇĕవృతȽంä కĢĈన öఠం",
    "options": [
      {
        "number": 1,
        "text": "ʛతɇɕЀĀѓ"
      },
      {
        "number": 2,
        "text": "ŷéĠన øలɇం"
      },
      {
        "number": 3,
        "text": "బцз గంప"
      },
      {
        "number": 4,
        "text": "ıవę"
      }
    ],
    "correctOption": 1,
    "correctText": "ʛతɇɕЀĀѓ",
    "difficulty": "Not identified in source",
    "sourceText": "210. ‘తĢɊదంѧల Ɠవ’ ఇĕవృతȽంä కĢĈన öఠం \n \n1) \nʛతɇɕЀĀѓ \n \n2) \nŷéĠన øలɇం \n \n3) \nబцз గంప \n \n4) \nıవę"
  },
  {
    "id": 211,
    "printedNumber": 211,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "211. శзంతల, шషɇంцల öʖѓ గల öఠం",
    "options": [
      {
        "number": 1,
        "text": "ఆĕథɇం"
      },
      {
        "number": 2,
        "text": "ధరɆǐధ"
      },
      {
        "number": 3,
        "text": "ʛతɇɕЀĀѓ"
      },
      {
        "number": 4,
        "text": "ƓɁహం"
      }
    ],
    "correctOption": 2,
    "correctText": "ధరɆǐధ",
    "difficulty": "Not identified in source",
    "sourceText": "211. శзంతల, шషɇంцల öʖѓ గల öఠం \n \n1) \nఆĕథɇం \n \n2) \nధరɆǐధ \n \n3) \nʛతɇɕЀĀѓ \n \n4) \nƓɁహం"
  },
  {
    "id": 212,
    "printedNumber": 212,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "212. ħóɀёȾу, ƃవదцȽу öʖѓ ఈ öఠంǖęĤ",
    "options": [
      {
        "number": 1,
        "text": "ƓɁహం"
      },
      {
        "number": 2,
        "text": "Ĺёɂ"
      },
      {
        "number": 3,
        "text": "ధరɆęరȼయం"
      },
      {
        "number": 4,
        "text": "ѐదɀĤŹత"
      }
    ],
    "correctOption": 2,
    "correctText": "Ĺёɂ",
    "difficulty": "Not identified in source",
    "sourceText": "212. ħóɀёȾу, ƃవదцȽу öʖѓ ఈ öఠంǖęĤ \n \n1) \nƓɁహం \n \n2) \nĹёɂ \n \n3) \nధరɆęరȼయం \n \n4) \nѐదɀĤŹత"
  },
  {
    "id": 213,
    "printedNumber": 213,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "213. ఇలɊలకäƅ öఠంǖ తన Ɔёъ మĠȳǎğన Āё",
    "options": [
      {
        "number": 1,
        "text": "సతɇవĕ"
      },
      {
        "number": 2,
        "text": "āరద"
      },
      {
        "number": 3,
        "text": "ʛłల"
      },
      {
        "number": 4,
        "text": "ùసɌర"
      }
    ],
    "correctOption": 2,
    "correctText": "āరద",
    "difficulty": "Not identified in source",
    "sourceText": "213. ఇలɊలకäƅ öఠంǖ తన Ɔёъ మĠȳǎğన Āё \n1) \nసతɇవĕ \n2) \nāరద \n \n3) \nʛłల \n \n4) \nùసɌర"
  },
  {
    "id": 214,
    "printedNumber": 214,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "214. üమపɂపంцѓ, అĈɁǜʺవôъɊ öʖѓ గల õటకం",
    "options": [
      {
        "number": 1,
        "text": "కõɇіలȮం"
      },
      {
        "number": 2,
        "text": "వరĤʇయం"
      },
      {
        "number": 3,
        "text": "ċంñమĔ"
      },
      {
        "number": 4,
        "text": "ĪĠȽƑїѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "కõɇіలȮం",
    "difficulty": "Not identified in source",
    "sourceText": "214. üమపɂపంцѓ, అĈɁǜʺవôъɊ öʖѓ గల õటకం \n \n1) \nకõɇіలȮం \n \n2) \nవరĤʇయం \n \n3) \nċంñమĔ \n \n4) \nĪĠȽƑїѓ"
  },
  {
    "id": 215,
    "printedNumber": 215,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "215. హĠĤѓɊ öఠంǖ యяę  Āహనం шనɁǎцъ తన \nఐüవతంä ʞమపĒన Āё",
    "options": [
      {
        "number": 1,
        "text": "ĥѕу"
      },
      {
        "number": 2,
        "text": "зúరăɌĞ"
      },
      {
        "number": 3,
        "text": "ఇంѬу"
      },
      {
        "number": 4,
        "text": "అĈɁƃѕу"
      }
    ],
    "correctOption": 3,
    "correctText": "ఇంѬу",
    "difficulty": "Not identified in source",
    "sourceText": "215. హĠĤѓɊ öఠంǖ యяę  Āహనం шనɁǎцъ తన \nఐüవతంä ʞమపĒన Āё \n1) \nĥѕу \n2) \nзúరăɌĞ \n \n3) \nఇంѬу \n \n4) \nఅĈɁƃѕу"
  },
  {
    "id": 216,
    "printedNumber": 216,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "216. ‘ʛతɇɕЀĀѓ’ öఠంǖ ǞĥзęĆ ధరɆ ҠąɆలъ \nǐĘంċనĀё",
    "options": [
      {
        "number": 1,
        "text": "ధరɆüо"
      },
      {
        "number": 2,
        "text": "ధరɆĀɇщу"
      },
      {
        "number": 3,
        "text": "úరȮంžѐу"
      },
      {
        "number": 4,
        "text": "ĤāɌĞѪу"
      }
    ],
    "correctOption": 2,
    "correctText": "ధరɆĀɇщу",
    "difficulty": "Not identified in source",
    "sourceText": "216. ‘ʛతɇɕЀĀѓ’ öఠంǖ ǞĥзęĆ ధరɆ ҠąɆలъ \nǐĘంċనĀё \n1) \nధరɆüо \n2) \nధరɆĀɇщу \n \n3) \núరȮంžѐу \n \n4) \nĤāɌĞѪу"
  },
  {
    "id": 217,
    "printedNumber": 217,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "217. ‘ıవę’ öఠంǖ ıవę తĢɊ",
    "options": [
      {
        "number": 1,
        "text": "లĢత"
      },
      {
        "number": 2,
        "text": "సరళ"
      },
      {
        "number": 3,
        "text": "āరద"
      },
      {
        "number": 4,
        "text": "øల"
      }
    ],
    "correctOption": 1,
    "correctText": "లĢత",
    "difficulty": "Not identified in source",
    "sourceText": "217. ‘ıవę’ öఠంǖ ıవę తĢɊ \n1) \nలĢత \n \n2) \nసరళ \n \n3) \nāరద \n \n4) \nøల"
  },
  {
    "id": 218,
    "printedNumber": 218,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "218. బцзగంప öఠంǖ ఈ öʖ óɌü ఉనɁంతǖ తృĚȽä \nıĤంçĢ. ǉĐ ĀĠĆ ŷҘతనంėంçĢ అę రచğ˞ \nŝĢĚంė.",
    "options": [
      {
        "number": 1,
        "text": "ǎలమɆ"
      },
      {
        "number": 2,
        "text": "ఐతమɆ"
      },
      {
        "number": 3,
        "text": "õగమɆ"
      },
      {
        "number": 4,
        "text": "ఎలɊమɆ"
      }
    ],
    "correctOption": 4,
    "correctText": "ఎలɊమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "218. బцзగంప öఠంǖ ఈ öʖ óɌü ఉనɁంతǖ తృĚȽä \nıĤంçĢ. ǉĐ ĀĠĆ ŷҘతనంėంçĢ అę రచğ˞ \nŝĢĚంė. \n1) \nǎలమɆ \n \n2) \nఐతమɆ \n \n3) \nõగమɆ \n \n4) \nఎలɊమɆ"
  },
  {
    "id": 219,
    "printedNumber": 219,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "219. ѐదɀĤŹత öఠంǖ  ѐóɀęɁ ęĀĠంచîęĆ ఇѓɊ వėĢ \nŬģɋǎğన Āё",
    "options": [
      {
        "number": 1,
        "text": "అǙзу"
      },
      {
        "number": 2,
        "text": "ħóɀёȾу"
      },
      {
        "number": 3,
        "text": "చంʘйыȽу"
      },
      {
        "number": 4,
        "text": "ыёǚతȽяу"
      }
    ],
    "correctOption": 2,
    "correctText": "ħóɀёȾу",
    "difficulty": "Not identified in source",
    "sourceText": "219. ѐదɀĤŹత öఠంǖ  ѐóɀęɁ ęĀĠంచîęĆ ఇѓɊ వėĢ \nŬģɋǎğన Āё \n \n1) \nఅǙзу \n \n2) \nħóɀёȾу \n \n3) \nచంʘйыȽу \n \n4) \nыёǚతȽяу"
  },
  {
    "id": 220,
    "printedNumber": 220,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "220. కõɇіలȮం õటకంǖ ‘ñంҕలం ğŷȳāъ ğహ తъɁక \nçవంĒ’ అę పĢĆన öʖ",
    "options": [
      {
        "number": 1,
        "text": "కరటక āħɓ"
      },
      {
        "number": 2,
        "text": "Ĉńశం"
      },
      {
        "number": 3,
        "text": "అĈɁǜʺవôъɊ"
      },
      {
        "number": 4,
        "text": "эచȳమɆ"
      }
    ],
    "correctOption": 3,
    "correctText": "అĈɁǜʺవôъɊ",
    "difficulty": "Not identified in source",
    "sourceText": "220. కõɇіలȮం õటకంǖ ‘ñంҕలం ğŷȳāъ ğహ తъɁక \nçవంĒ’ అę పĢĆన öʖ \n1) \nకరటక āħɓ \n \n2) \nĈńశం \n \n3) \nఅĈɁǜʺవôъɊ \n \n4) \nэచȳమɆ"
  },
  {
    "id": 221,
    "printedNumber": 221,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "221. ǔశయɇ, చంʘమɆ, ňర, јļȜ öʖѓ ఈ öఠం ǖęĤ",
    "options": [
      {
        "number": 1,
        "text": "úతృҖĞ"
      },
      {
        "number": 2,
        "text": "õ చшѕ"
      },
      {
        "number": 3,
        "text": "ˣయЇన õనɁз"
      },
      {
        "number": 4,
        "text": "õûʖ"
      }
    ],
    "correctOption": 1,
    "correctText": "úతృҖĞ",
    "difficulty": "Not identified in source",
    "sourceText": "221. ǔశయɇ, చంʘమɆ, ňర, јļȜ öʖѓ ఈ öఠం ǖęĤ \n1) \núతృҖĞ \n2) \nõ చшѕ \n \n3) \nˣయЇన õనɁз \n \n4) \nõûʖ"
  },
  {
    "id": 222,
    "printedNumber": 222,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "222. ‘పయనం’ öఠంǖ గంగనɁ зсంøęĆ ఆʦయం కĢɂంċన öʖ",
    "options": [
      {
        "number": 1,
        "text": "üమపɂ"
      },
      {
        "number": 2,
        "text": "õüయణ"
      },
      {
        "number": 3,
        "text": "చంʘƑఖȜ"
      },
      {
        "number": 4,
        "text": "రమణయɇ"
      }
    ],
    "correctOption": 1,
    "correctText": "üమపɂ",
    "difficulty": "Not identified in source",
    "sourceText": "222. ‘పయనం’ öఠంǖ గంగనɁ зсంøęĆ ఆʦయం కĢɂంċన öʖ \n \n1) \nüమపɂ \n \n2) \nõüయణ \n \n3) \nచంʘƑఖȜ \n \n4) \nరమణయɇ"
  },
  {
    "id": 223,
    "printedNumber": 223,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "223. öѕరం, Ɛటäу öʖѓ గల öఠం",
    "options": [
      {
        "number": 1,
        "text": "సమయҠɃĠȽ"
      },
      {
        "number": 2,
        "text": "ఆĕథɇం"
      },
      {
        "number": 3,
        "text": "Ĺёɂ"
      },
      {
        "number": 4,
        "text": "మమâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "ఆĕథɇం",
    "difficulty": "Not identified in source",
    "sourceText": "223. öѕరం, Ɛటäу öʖѓ గల öఠం \n \n1) \nసమయҠɃĠȽ \n \n2) \nఆĕథɇం \n \n3) \nĹёɂ \n \n4) \nమమâరం"
  },
  {
    "id": 224,
    "printedNumber": 224,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "224. úûకంబģ öఠంǖ కంబģĆ మĨమъ కĢĈంċన Āё",
    "options": [
      {
        "number": 1,
        "text": "Ĥʇяу"
      },
      {
        "number": 2,
        "text": "Ĝచȳäу"
      },
      {
        "number": 3,
        "text": "ఆñɆనంшу"
      },
      {
        "number": 4,
        "text": "చంచల"
      }
    ],
    "correctOption": 3,
    "correctText": "ఆñɆనంшу",
    "difficulty": "Not identified in source",
    "sourceText": "224. úûకంబģ öఠంǖ కంబģĆ మĨమъ కĢĈంċన Āё \n \n1) \nĤʇяу \n \n2) \nĜచȳäу \n \n3) \nఆñɆనంшу \n \n4) \nచంచల"
  },
  {
    "id": 225,
    "printedNumber": 225,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "225. ఎద öఠంǖ తనĆ చшѕ Ǝక ǎğõ తన ĚలɊѓ బĒǖƅ \nâзంî ఇంĐ దగȰర ѿî చదవడం ҄ħ ఆనంėంċన öʖ",
    "options": [
      {
        "number": 1,
        "text": "ఐతమɆ"
      },
      {
        "number": 2,
        "text": "ǎలమɆ"
      },
      {
        "number": 3,
        "text": "ఎలɊమɆ"
      },
      {
        "number": 4,
        "text": "āనమɆ"
      }
    ],
    "correctOption": 2,
    "correctText": "ǎలమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "225. ఎద öఠంǖ తనĆ చшѕ Ǝక ǎğõ తన ĚలɊѓ బĒǖƅ \nâзంî ఇంĐ దగȰర ѿî చదవడం ҄ħ ఆనంėంċన öʖ \n1) \nఐతమɆ \n2) \nǎలమɆ \n \n3) \nఎలɊమɆ \n \n4) \nāనమɆ"
  },
  {
    "id": 226,
    "printedNumber": 226,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "226. øలచంѬę ʛĕజȷ öఠంǖ øలచంѬę ǉ ѐóɀęĆ ǎవшȿ \nఅę పĢĆన öʖ",
    "options": [
      {
        "number": 1,
        "text": "ఐతమɆ"
      },
      {
        "number": 2,
        "text": "õగమɆ"
      },
      {
        "number": 3,
        "text": "āనమɆ"
      },
      {
        "number": 4,
        "text": "అనɁమɆ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఐతమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "226. øలచంѬę ʛĕజȷ öఠంǖ øలచంѬę ǉ ѐóɀęĆ ǎవшȿ \nఅę పĢĆన öʖ \n \n1) \nఐతమɆ \n \n2) \nõగమɆ \n \n3) \nāనమɆ \n \n4) \nఅనɁమɆ"
  },
  {
    "id": 227,
    "printedNumber": 227,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "227. øలచంѬę ʛĕజȷ öఠంǖ øలచంѬęǉ “Ľ ǲёషం \nƬంగüþటǖ âш; ѐదɀҖĞǖ ҄Ěంм, పþɁĐ \nňరñɌęɁ ʛదĠɍంм” అనɁ öʖ",
    "options": [
      {
        "number": 1,
        "text": "ఐతమɆ"
      },
      {
        "number": 2,
        "text": "õగమɆ"
      },
      {
        "number": 3,
        "text": "అనɁమɆ"
      },
      {
        "number": 4,
        "text": "çనమɆ"
      }
    ],
    "correctOption": 3,
    "correctText": "అనɁమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "227. øలచంѬę ʛĕజȷ öఠంǖ øలచంѬęǉ “Ľ ǲёషం \nƬంగüþటǖ âш; ѐదɀҖĞǖ ҄Ěంм, పþɁĐ \nňరñɌęɁ ʛదĠɍంм” అనɁ öʖ \n \n1) \nఐతమɆ \n \n2) \nõగమɆ \n \n3) \nఅనɁమɆ \n \n4) \nçనమɆ"
  },
  {
    "id": 228,
    "printedNumber": 228,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "228. ăĐ మъїల సంǉషం ƺసం పęŷయటంǖƅ  ęజЇన \nసంǉషం తృĚȽ ఉõɁయę “తృĚȽ” öఠంǖę ఈ öʖ óɌü \nŝѓјȽంė.",
    "options": [
      {
        "number": 1,
        "text": "ғరȼయɇ"
      },
      {
        "number": 2,
        "text": "üమపɂ"
      },
      {
        "number": 3,
        "text": "గంగనɁ"
      },
      {
        "number": 4,
        "text": "నరసయɇ"
      }
    ],
    "correctOption": 1,
    "correctText": "ғరȼయɇ",
    "difficulty": "Not identified in source",
    "sourceText": "228. ăĐ మъїల సంǉషం ƺసం పęŷయటంǖƅ  ęజЇన \nసంǉషం తృĚȽ ఉõɁయę “తృĚȽ” öఠంǖę ఈ öʖ óɌü \nŝѓјȽంė. \n1) \nғరȼయɇ \n \n2) \nüమపɂ \n \n3) \nగంగనɁ \n \n4) \nనరసయɇ"
  },
  {
    "id": 229,
    "printedNumber": 229,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "229. చంʘзу, ǔమіу, పĢцу öʖѓ ఈ öఠంǖęĤ",
    "options": [
      {
        "number": 1,
        "text": "ఆĕథɇం"
      },
      {
        "number": 2,
        "text": "సమయҠɃĠȽ"
      },
      {
        "number": 3,
        "text": "Ĺёɂ"
      },
      {
        "number": 4,
        "text": "ƓɁహం"
      }
    ],
    "correctOption": 2,
    "correctText": "సమయҠɃĠȽ",
    "difficulty": "Not identified in source",
    "sourceText": "229. చంʘзу, ǔమіу, పĢцу öʖѓ ఈ öఠంǖęĤ \n1) \nఆĕథɇం \n2) \nసమయҠɃĠȽ \n \n3) \nĹёɂ \n \n4) \nƓɁహం"
  },
  {
    "id": 230,
    "printedNumber": 230,
    "topic": "పాఠ్యాంశాలు – ఇతివృత్తాలు, ఉద్దేశాలు మరియు పాత్రలు",
    "stem": "230. మమâరం öఠంǖę öʖѓ",
    "options": [
      {
        "number": 1,
        "text": "సతɇం, ŋత, јйణ, üధ"
      },
      {
        "number": 2,
        "text": "ňర, ǔశయɇ, చంʘమɆ, పదɆజ"
      },
      {
        "number": 3,
        "text": "గంగనɁ, నరసయɇ, ǎలమɆ, üమపɂ"
      },
      {
        "number": 4,
        "text": "ఎలɊమɆ, ǎలమɆ, çనమɆ, ఐతమɆ"
      }
    ],
    "correctOption": 1,
    "correctText": "సతɇం, ŋత, јйణ, üధ",
    "difficulty": "Not identified in source",
    "sourceText": "230. మమâరం öఠంǖę öʖѓ \n1) \nసతɇం, ŋత, јйణ, üధ \n2) \nňర, ǔశయɇ, చంʘమɆ, పదɆజ \n \n3) \nగంగనɁ, నరసయɇ, ǎలమɆ, üమపɂ \n \n4) \nఎలɊమɆ, ǎలమɆ, çనమɆ, ఐతమɆ"
  },
  {
    "id": 231,
    "printedNumber": 231,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "231. అǙకవనంǖ కĂȸలǖ ఉనɁ ŋతз ఓóёɂ úటѓ œĚɂన öʖ",
    "options": [
      {
        "number": 1,
        "text": "˞జట"
      },
      {
        "number": 2,
        "text": "ĤŁషху"
      },
      {
        "number": 3,
        "text": "ఇంʘčѪ"
      },
      {
        "number": 4,
        "text": "зంభకёȼу"
      }
    ],
    "correctOption": 1,
    "correctText": "˞జట",
    "difficulty": "Not identified in source",
    "sourceText": "231. అǙకవనంǖ కĂȸలǖ ఉనɁ ŋతз ఓóёɂ úటѓ œĚɂన öʖ \n \n1) \n˞జట \n \n2) \nĤŁషху \n \n3) \nఇంʘčѪ \n \n4) \nзంభకёȼу"
  },
  {
    "id": 232,
    "printedNumber": 232,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "232. ŝѓй ùĂ మండþలǖ ғరɌమండలంǖ Ǝę čþɊ",
    "options": [
      {
        "number": 1,
        "text": "šқɊё"
      },
      {
        "number": 2,
        "text": "ɖâзళం"
      },
      {
        "number": 3,
        "text": "Ĥజయనగరం"
      },
      {
        "number": 4,
        "text": "Ĥāఖపటȸణం"
      }
    ],
    "correctOption": 1,
    "correctText": "šқɊё",
    "difficulty": "Not identified in source",
    "sourceText": "232. ŝѓй ùĂ మండþలǖ ғరɌమండలంǖ Ǝę čþɊ \n \n1) \nšқɊё \n \n2) \nɖâзళం \n \n3) \nĤజయనగరం \n \n4) \nĤāఖపటȸణం"
  },
  {
    "id": 233,
    "printedNumber": 233,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "233. అĠషడɌరȰంǖ Ǝęė",
    "options": [
      {
        "number": 1,
        "text": "ǒహя"
      },
      {
        "number": 2,
        "text": "āంతя"
      },
      {
        "number": 3,
        "text": "΃ధя"
      },
      {
        "number": 4,
        "text": "ǖభя"
      }
    ],
    "correctOption": 2,
    "correctText": "āంతя",
    "difficulty": "Not identified in source",
    "sourceText": "233. అĠషడɌరȰంǖ Ǝęė \n \n1) \nǒహя \n \n2) \nāంతя \n \n3) \n΃ధя \n \n4) \nǖభя"
  },
  {
    "id": 234,
    "printedNumber": 234,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "234. అĠషడɌüȰęĆ సంబంĘంċ సЉన óęę йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "âమ, ΃ధ, āంత, ǖభ, మద, úతɏüɇѓ"
      },
      {
        "number": 2,
        "text": "āంత, ǖభ, కёణ, ΃ధ, మద, úతɏüɇѓ"
      },
      {
        "number": 3,
        "text": "âమ, ΃ధ, ǖభ, ǒహ,  మద, úతɏüɇѓ"
      },
      {
        "number": 4,
        "text": "కёణ, Āతɏలɇ, āంత,  ΃ధ, మద, úతɏüɇѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "âమ, ΃ధ, ǖభ, ǒహ,  మద, úతɏüɇѓ",
    "difficulty": "Not identified in source",
    "sourceText": "234. అĠషడɌüȰęĆ సంబంĘంċ సЉన óęę йĠȽంచంĒ \n1) \nâమ, ΃ధ, āంత, ǖభ, మద, úతɏüɇѓ \n2) \nāంత, ǖభ, కёణ, ΃ధ, మద, úతɏüɇѓ \n3) \nâమ, ΃ధ, ǖభ, ǒహ,  మద, úతɏüɇѓ \n4) \nకёణ, Āతɏలɇ, āంత,  ΃ధ, మద, úతɏüɇѓ"
  },
  {
    "id": 235,
    "printedNumber": 235,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "235. ‘అĠషడɌరȰం’ అంż",
    "options": [
      {
        "number": 1,
        "text": "ఏу వüȼѓ"
      },
      {
        "number": 2,
        "text": "ఆё ఋцѕѓ"
      },
      {
        "number": 3,
        "text": "ఐш వüȰѓ"
      },
      {
        "number": 4,
        "text": "ఆё шёȰðѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "ఆё шёȰðѓ",
    "difficulty": "Not identified in source",
    "sourceText": "235. ‘అĠషడɌరȰం’ అంż \n \n1) \nఏу వüȼѓ \n \n2) \nఆё ఋцѕѓ \n \n3) \nఐш వüȰѓ \n \n4) \nఆё шёȰðѓ"
  },
  {
    "id": 236,
    "printedNumber": 236,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "236. ˞కరణяలǖ Ǝęė",
    "options": [
      {
        "number": 1,
        "text": "ċంతన"
      },
      {
        "number": 2,
        "text": "మనј"
      },
      {
        "number": 3,
        "text": "కరɆ"
      },
      {
        "number": 4,
        "text": "ĀзȮ"
      }
    ],
    "correctOption": 1,
    "correctText": "ċంతన",
    "difficulty": "Not identified in source",
    "sourceText": "236. ˞కరణяలǖ Ǝęė \n1) \nċంతన \n2) \nమనј \n \n3) \nకరɆ \n \n4) \nĀзȮ"
  },
  {
    "id": 237,
    "printedNumber": 237,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "237. చцƌɌదяల సЉన ʇúęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "యоƌɌదя, ęёకȽя, ఋŴɌదя, ăమƐదя"
      },
      {
        "number": 2,
        "text": "ఋŴɌదя, యоƌɌదя, ăమƐదя, అధరɌణƐదя"
      },
      {
        "number": 3,
        "text": "ăమƐదя, కలɂя, యоƌɌదя, ఋŴɌదя"
      },
      {
        "number": 4,
        "text": "అధరɌణƐదя, ǁɇĕషɇя, ăమƐదя, యоƌɌదя"
      }
    ],
    "correctOption": 2,
    "correctText": "ఋŴɌదя, యоƌɌదя, ăమƐదя, అధరɌణƐదя",
    "difficulty": "Not identified in source",
    "sourceText": "237. చцƌɌదяల సЉన ʇúęɁ йĠȽంచంĒ \n1) \nయоƌɌదя, ęёకȽя, ఋŴɌదя, ăమƐదя \n2) \nఋŴɌదя, యоƌɌదя, ăమƐదя, అధరɌణƐదя \n \n3) \năమƐదя, కలɂя, యоƌɌదя, ఋŴɌదя \n \n4) \nఅధరɌణƐదя, ǁɇĕషɇя, ăమƐదя, యоƌɌదя"
  },
  {
    "id": 238,
    "printedNumber": 238,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "238. పంచúతృҗёȽల ǖ ƎęĀё",
    "options": [
      {
        "number": 1,
        "text": "కనɁతĢɊ"
      },
      {
        "number": 2,
        "text": "йёѕùరɇ"
      },
      {
        "number": 3,
        "text": "తяɆęùరɇ"
      },
      {
        "number": 4,
        "text": "అనɁùరɇ"
      }
    ],
    "correctOption": 3,
    "correctText": "తяɆęùరɇ",
    "difficulty": "Not identified in source",
    "sourceText": "238. పంచúతృҗёȽల ǖ ƎęĀё \n1) \nకనɁతĢɊ \n \n2) \nйёѕùరɇ \n \n3) \nతяɆęùరɇ \n \n4) \nఅనɁùరɇ"
  },
  {
    "id": 239,
    "printedNumber": 239,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "239. పంచగంగѓ",
    "options": [
      {
        "number": 1,
        "text": "ƼóవĠ, కృషȼ, âƐĠ, ŢõɁ, గంగ"
      },
      {
        "number": 2,
        "text": "కృషȼ, గంగ, âƐĠ, ŢõɁ, цంగభʘ"
      },
      {
        "number": 3,
        "text": "âƐĠ, ŢõɁ, గంగ, ƼóవĠ, కృషȼ"
      },
      {
        "number": 4,
        "text": "గంగ, కృషȼ, ƼóవĠ, цంగభʘ, âƐĠ"
      }
    ],
    "correctOption": 4,
    "correctText": "గంగ, కృషȼ, ƼóవĠ, цంగభʘ, âƐĠ",
    "difficulty": "Not identified in source",
    "sourceText": "239. పంచగంగѓ \n1) \nƼóవĠ, కృషȼ, âƐĠ, ŢõɁ, గంగ \n \n2) \nకృషȼ, గంగ, âƐĠ, ŢõɁ, цంగభʘ \n \n3) \nâƐĠ, ŢõɁ, గంగ, ƼóవĠ, కృషȼ \n \n4) \nగంగ, కృషȼ, ƼóవĠ, цంగభʘ, âƐĠ"
  },
  {
    "id": 240,
    "printedNumber": 240,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "240. షటȳʇవёȽలǖ ƎęĀё",
    "options": [
      {
        "number": 1,
        "text": "ధరɆüо"
      },
      {
        "number": 2,
        "text": "హĠశȳంѬу"
      },
      {
        "number": 3,
        "text": "నѓу"
      },
      {
        "number": 4,
        "text": "ыёзцɏу"
      }
    ],
    "correctOption": 1,
    "correctText": "ధరɆüо",
    "difficulty": "Not identified in source",
    "sourceText": "240. షటȳʇవёȽలǖ ƎęĀё  \n \n1) \nధరɆüо \n \n2) \nహĠశȳంѬу \n \n3) \nనѓу \n \n4) \nыёзцɏу"
  },
  {
    "id": 241,
    "printedNumber": 241,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "241. Ćంė ĀĐǖ Ɛóంäలǖęė",
    "options": [
      {
        "number": 1,
        "text": "ఋŴɌదя"
      },
      {
        "number": 2,
        "text": "Āɇకరణя"
      },
      {
        "number": 3,
        "text": "ăమƐదя"
      },
      {
        "number": 4,
        "text": "యоƌɌదя"
      }
    ],
    "correctOption": 2,
    "correctText": "Āɇకరణя",
    "difficulty": "Not identified in source",
    "sourceText": "241. Ćంė ĀĐǖ Ɛóంäలǖęė \n1) \nఋŴɌదя \n \n2) \nĀɇకరణя \n \n3) \năమƐదя \n \n4) \nయоƌɌదя"
  },
  {
    "id": 242,
    "printedNumber": 242,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "242. ĥɕ, ఛందјɏ, Āɇకరణя, ęёకȽя, ǁɇĕషя, కలɂя అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "Ɛదяѓ"
      },
      {
        "number": 2,
        "text": "కరణяѓ"
      },
      {
        "number": 3,
        "text": "Ɛóంäѓ"
      },
      {
        "number": 4,
        "text": "ыüðѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "Ɛóంäѓ",
    "difficulty": "Not identified in source",
    "sourceText": "242. ĥɕ, ఛందјɏ, Āɇకరణя, ęёకȽя, ǁɇĕషя, కలɂя అƅĤ \n1) \nƐదяѓ \n2) \nకరణяѓ \n \n3) \nƐóంäѓ \n \n4) \nыüðѓ"
  },
  {
    "id": 243,
    "printedNumber": 243,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "243. అషȸėâɂలзలǖ ƎęĀё",
    "options": [
      {
        "number": 1,
        "text": "అĈɁ"
      },
      {
        "number": 2,
        "text": "వёху"
      },
      {
        "number": 3,
        "text": "Āѐƃѕу"
      },
      {
        "number": 4,
        "text": "õరшу"
      }
    ],
    "correctOption": 4,
    "correctText": "õరшу",
    "difficulty": "Not identified in source",
    "sourceText": "243. అషȸėâɂలзలǖ ƎęĀё \n \n1) \nఅĈɁ \n \n2) \nవёху \n \n3) \nĀѐƃѕу \n \n4) \nõరшу"
  },
  {
    "id": 244,
    "printedNumber": 244,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "244. ŝѓй ùĂėǍతɏవంä ňĠ జయంĕę జёызంìя",
    "options": [
      {
        "number": 1,
        "text": "Ĉуй ƐంకటüమҗĠȽ"
      },
      {
        "number": 2,
        "text": "కంшѿĠ ňƌశĢంగం"
      },
      {
        "number": 3,
        "text": "йరéడ అöɂüѕ"
      },
      {
        "number": 4,
        "text": "Ɩమ˅о లɜణüѕ"
      }
    ],
    "correctOption": 1,
    "correctText": "Ĉуй ƐంకటüమҗĠȽ",
    "difficulty": "Not identified in source",
    "sourceText": "244. ŝѓй ùĂėǍతɏవంä ňĠ జయంĕę జёызంìя \n \n1) \nĈуй ƐంకటüమҗĠȽ \n \n2) \nకంшѿĠ ňƌశĢంగం \n \n3) \nйరéడ అöɂüѕ \n \n4) \nƖమ˅о లɜణüѕ"
  },
  {
    "id": 245,
    "printedNumber": 245,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "245. ƥĢ ŝѓй ఇĕĄసం",
    "options": [
      {
        "number": 1,
        "text": "ఆంʙమĄùరతం"
      },
      {
        "number": 2,
        "text": "úరȮంžయыüణం"
      },
      {
        "number": 3,
        "text": "ƃňùగవతం"
      },
      {
        "number": 4,
        "text": "ĥవыüణం"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆంʙమĄùరతం",
    "difficulty": "Not identified in source",
    "sourceText": "245. ƥĢ ŝѓй ఇĕĄసం \n \n1) \nఆంʙమĄùరతం \n \n2) \núరȮంžయыüణం \n \n3) \nƃňùగవతం \n \n4) \nĥవыüణం"
  },
  {
    "id": 246,
    "printedNumber": 246,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "246. ƥĢŝѓй నవల",
    "options": [
      {
        "number": 1,
        "text": "úలపĢɊ"
      },
      {
        "number": 2,
        "text": "øĠషȸё öరɌĹశం"
      },
      {
        "number": 3,
        "text": "üజƑఖర చĠʖ"
      },
      {
        "number": 4,
        "text": "цలŋదళం"
      }
    ],
    "correctOption": 3,
    "correctText": "üజƑఖర చĠʖ",
    "difficulty": "Not identified in source",
    "sourceText": "246. ƥĢŝѓй నవల \n1) \núలపĢɊ \n2) \nøĠషȸё öరɌĹశం \n \n3) \nüజƑఖర చĠʖ \n \n4) \nцలŋదళం"
  },
  {
    "id": 247,
    "printedNumber": 247,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "247. ʛపంచ úతృùĂ ėǍతɏవం ఈ ǔоన జёызంìё",
    "options": [
      {
        "number": 1,
        "text": "ůŢȸంబё - 5"
      },
      {
        "number": 2,
        "text": "నవంబё - 14"
      },
      {
        "number": 3,
        "text": "҆ȕ - 5"
      },
      {
        "number": 4,
        "text": "ěʝవĠ - 21"
      }
    ],
    "correctOption": 4,
    "correctText": "ěʝవĠ - 21",
    "difficulty": "Not identified in source",
    "sourceText": "247. ʛపంచ úతృùĂ ėǍతɏవం ఈ ǔоన జёызంìё \n1) \nůŢȸంబё - 5 \n \n2) \nనవంబё - 14 \n \n3) \n҆ȕ - 5 \n \n4) \něʝవĠ - 21"
  },
  {
    "id": 248,
    "printedNumber": 248,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "248. ŝѓйǖ éȷనľఠ ыరăȮరం ƪంėన ƮదĐకĤ",
    "options": [
      {
        "number": 1,
        "text": "ĤశɌõథ సతɇõüయణ"
      },
      {
        "number": 2,
        "text": "ƃѕలపĢɊ కృషȼāħɓ"
      },
      {
        "number": 3,
        "text": "üҝĠ భరóɌజ"
      },
      {
        "number": 4,
        "text": "йʡం éїĀ"
      }
    ],
    "correctOption": 1,
    "correctText": "ĤశɌõథ సతɇõüయణ",
    "difficulty": "Not identified in source",
    "sourceText": "248. ŝѓйǖ éȷనľఠ ыరăȮరం ƪంėన ƮదĐకĤ \n \n1) \nĤశɌõథ సతɇõüయణ \n \n2) \nƃѕలపĢɊ కృషȼāħɓ \n \n3) \nüҝĠ భరóɌజ \n \n4) \nйʡం éїĀ"
  },
  {
    "id": 249,
    "printedNumber": 249,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "249. Ćంė ĀĐǖ నవరñɁలǖ ŷరęė",
    "options": [
      {
        "number": 1,
        "text": "వʎం"
      },
      {
        "number": 2,
        "text": "బంäరం"
      },
      {
        "number": 3,
        "text": "яతɇం"
      },
      {
        "number": 4,
        "text": "మరకతం"
      }
    ],
    "correctOption": 2,
    "correctText": "బంäరం",
    "difficulty": "Not identified in source",
    "sourceText": "249. Ćంė ĀĐǖ నవరñɁలǖ ŷరęė \n1) \nవʎం \n \n2) \nబంäరం \n \n3) \nяతɇం \n \n4) \nమరకతం"
  },
  {
    "id": 250,
    "printedNumber": 250,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "250. మనј, ĀзȮ, కరɆ – ňĐę .... అంìё",
    "options": [
      {
        "number": 1,
        "text": "˞âþѓ"
      },
      {
        "number": 2,
        "text": "˞కరɆѓ"
      },
      {
        "number": 3,
        "text": "˞కరðѓ"
      },
      {
        "number": 4,
        "text": "˞җёȽѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "˞కరðѓ",
    "difficulty": "Not identified in source",
    "sourceText": "250. మనј, ĀзȮ, కరɆ – ňĐę .... అంìё \n1) \n˞âþѓ \n2) \n˞కరɆѓ \n \n3) \n˞కరðѓ \n \n4) \n˞җёȽѓ"
  },
  {
    "id": 251,
    "printedNumber": 251,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "251. ёмల సంఖɇ",
    "options": [
      {
        "number": 1,
        "text": "ఐш"
      },
      {
        "number": 2,
        "text": "ఏу"
      },
      {
        "number": 3,
        "text": "ƥĞɆė"
      },
      {
        "number": 4,
        "text": "ఆё"
      }
    ],
    "correctOption": 4,
    "correctText": "ఆё",
    "difficulty": "Not identified in source",
    "sourceText": "251. ёмల సంఖɇ  \n1) \nఐш \n2) \nఏу \n \n3) \nƥĞɆė \n \n4) \nఆё"
  },
  {
    "id": 252,
    "printedNumber": 252,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "252. ėâɂలзల సంఖɇ",
    "options": [
      {
        "number": 1,
        "text": "ఎęĞė మంė"
      },
      {
        "number": 2,
        "text": "నѓйё"
      },
      {
        "number": 3,
        "text": "పšɁంу మంė"
      },
      {
        "number": 4,
        "text": "яйȰё"
      }
    ],
    "correctOption": 1,
    "correctText": "ఎęĞė మంė",
    "difficulty": "Not identified in source",
    "sourceText": "252. ėâɂలзల సంఖɇ \n \n1) \nఎęĞė మంė \n \n2) \nనѓйё \n \n3) \nపšɁంу మంė \n \n4) \nяйȰё"
  },
  {
    "id": 253,
    "printedNumber": 253,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "253. “కషȸపĒ వంîё ĕనకǎƁ ఎþ?” ఈ úట ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "ғరȼయɇ వంటĀళɋз వĒȺంŷ సందరɅం"
      },
      {
        "number": 2,
        "text": "వంటĀєɋ ғరȼయɇз వĒȺంŷ సందరɅం"
      },
      {
        "number": 3,
        "text": "వనǑజõల జõలз ғరȼయɇ వĒȺంŷ సందరɅం"
      },
      {
        "number": 4,
        "text": "వంటĀєɋ జõలз వĒȺంŷ సందరɅం"
      }
    ],
    "correctOption": 1,
    "correctText": "ғరȼయɇ వంటĀళɋз వĒȺంŷ సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "253. “కషȸపĒ వంîё ĕనకǎƁ ఎþ?” ఈ úట ఈ సందరɅం ǖęė \n \n1) \nғరȼయɇ వంటĀళɋз వĒȺంŷ సందరɅం \n \n2) \nవంటĀєɋ ғరȼయɇз వĒȺంŷ సందరɅం \n \n3) \nవనǑజõల జõలз ғరȼయɇ వĒȺంŷ సందరɅం \n \n4) \nవంటĀєɋ జõలз వĒȺంŷ సందరɅం"
  },
  {
    "id": 254,
    "printedNumber": 254,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "254. “వంటâѓ ఇþ తûё ŷğјȽõɁъ” ఈ úటѓ ఈ \nసందరɅం ǖęĤ",
    "options": [
      {
        "number": 1,
        "text": "ғరȼయɇ వనǑజõల Ģјȸ వంటĀళɋз ĤęĚంŷ\nసందరɅం"
      },
      {
        "number": 2,
        "text": "ғరȼయɇ వనǑజõల Ģјȸ జõలз ĤęĚంŷ సందరɅం"
      },
      {
        "number": 3,
        "text": "ғరȼయɇ వనǑజõల Ģјȸ ʭమŢదȿలз ĤęĚంŷ\nసందరɅం"
      },
      {
        "number": 4,
        "text": "ғరȼయɇ వనǑజõల Ģјȸ ùరɇз ĤęĚంŷ సందరɅం"
      }
    ],
    "correctOption": 2,
    "correctText": "ғరȼయɇ వనǑజõల Ģјȸ జõలз ĤęĚంŷ సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "254. “వంటâѓ ఇþ తûё ŷğјȽõɁъ” ఈ úటѓ ఈ \nసందరɅం ǖęĤ \n \n1) \nғరȼయɇ వనǑజõల Ģјȸ వంటĀళɋз ĤęĚంŷ \nసందరɅం \n \n2) \nғరȼయɇ వనǑజõల Ģјȸ జõలз ĤęĚంŷ సందరɅం \n \n3) \nғరȼయɇ వనǑజõల Ģјȸ ʭమŢదȿలз ĤęĚంŷ \nసందరɅం \n \n4) \nғరȼయɇ వనǑజõల Ģјȸ ùరɇз ĤęĚంŷ సందరɅం"
  },
  {
    "id": 255,
    "printedNumber": 255,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "255. “Ğʖú ! బయĐĆü! మǔ ఉƃȿశం Ǝш” ఈ úటѓ ఈ \nసందరɅం ǖęĤ",
    "options": [
      {
        "number": 1,
        "text": "ǔమіу, పĢцę ͏మǉ ĚĢċన సందరɅం"
      },
      {
        "number": 2,
        "text": "పĢцу, ǔమіę ƓɁహం ƺĠ ĚĢċన సందరɅం"
      },
      {
        "number": 3,
        "text": "ǔమіу (ĚĢɊ), పĢцę (ఎѓక) కపటంǉ ĚĢċన\nసందరɅం"
      },
      {
        "number": 4,
        "text": "పĢцу, ǔమіę కపటంǉ ĚĢċన సందరɅం"
      }
    ],
    "correctOption": 3,
    "correctText": "ǔమіу (ĚĢɊ), పĢцę (ఎѓక) కపటంǉ ĚĢċన\nసందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "255. “Ğʖú ! బయĐĆü! మǔ ఉƃȿశం Ǝш” ఈ úటѓ ఈ \nసందరɅం ǖęĤ \n1) \nǔమіу, పĢцę ͏మǉ ĚĢċన సందరɅం \n2) \nపĢцу, ǔమіę ƓɁహం ƺĠ ĚĢċన సందరɅం \n \n3) \nǔమіу (ĚĢɊ), పĢцę (ఎѓక) కపటంǉ ĚĢċన \nసందరɅం \n \n4) \nపĢцу, ǔమіę కపటంǉ ĚĢċన సందరɅం"
  },
  {
    "id": 256,
    "printedNumber": 256,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "256. “ఎంϾõ పంцలమɆäĠ эǁȵĔȼ” ఈ úటѓ ఈ సందరɅం \nǖęĤ",
    "options": [
      {
        "number": 1,
        "text": "కĤ తన ǜó йĠంċ œĚɂన సందరɅం"
      },
      {
        "number": 2,
        "text": "కĤ తన అనɁʿశన йĠంċ œĚɂన సందరɅం"
      },
      {
        "number": 3,
        "text": "కĤ తన ęʼభంగం йĠంċ œĚɂన సందరɅం"
      },
      {
        "number": 4,
        "text": "కĤ అɕüలǉ తన అъబంధం йĠంċ œĚɂన సందరɅం"
      }
    ],
    "correctOption": 4,
    "correctText": "కĤ అɕüలǉ తన అъబంధం йĠంċ œĚɂన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "256. “ఎంϾõ పంцలమɆäĠ эǁȵĔȼ” ఈ úటѓ ఈ సందరɅం \nǖęĤ \n \n1) \nకĤ తన ǜó йĠంċ œĚɂన సందరɅం \n \n2) \nకĤ తన అనɁʿశన йĠంċ œĚɂన సందరɅం \n \n3) \nకĤ తన ęʼభంగం йĠంċ œĚɂన సందరɅం \n \n4) \nకĤ అɕüలǉ తన అъబంధం йĠంċ œĚɂన సందరɅం"
  },
  {
    "id": 257,
    "printedNumber": 257,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "257. “ఎʡä øйందę ŢъɁ పсȸзంż, అమɆ అзȮన ŷёȳзంė” \nఈ Āకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "కĤ తన అనɁʿశన йĠంċ œĚɂన సందరɅం"
      },
      {
        "number": 2,
        "text": "కĤ తన öఠāల ʛƐశం йĠంċ œĚɂన సందరɅం"
      },
      {
        "number": 3,
        "text": "కĤ తన ŷĕǖ కలం ĹјзనɁ సందరɅం"
      },
      {
        "number": 4,
        "text": "కĤ తన కల йĠంċ œĚɂన సందరɅం"
      }
    ],
    "correctOption": 1,
    "correctText": "కĤ తన అనɁʿశన йĠంċ œĚɂన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "257. “ఎʡä øйందę ŢъɁ పсȸзంż, అమɆ అзȮన ŷёȳзంė” \nఈ Āకɇం ఈ సందరɅం ǖęė \n1) \nకĤ తన అనɁʿశన йĠంċ œĚɂన సందరɅం \n2) \nకĤ తన öఠāల ʛƐశం йĠంċ œĚɂన సందరɅం \n \n3) \nకĤ తన ŷĕǖ కలం ĹјзనɁ సందరɅం \n \n4) \nకĤ తన కల йĠంċ œĚɂన సందరɅం"
  },
  {
    "id": 258,
    "printedNumber": 258,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "258. “మĄʛҖ! ఈ కంబģ వలɊ õз ʿణĄę తపɂ, āంĕäę, \nјఖంäę Ǝш” ఈ Āకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "ఆñɆనంшу కంబģę йĠంċ üоǉ úìɊĒన\nసందరɅం"
      },
      {
        "number": 2,
        "text": "Ĝచȳäу కంబģę üоз ఇċȳన సందరɅంǖęė"
      },
      {
        "number": 3,
        "text": "చంచల కంబģ йĠంċ üоǉ úìɊĒన సందరɅం"
      },
      {
        "number": 4,
        "text": "üо కంబģ йĠంċ ఆñɆనంшęǉ úìɊĒన సందరɅం"
      }
    ],
    "correctOption": 2,
    "correctText": "Ĝచȳäу కంబģę üоз ఇċȳన సందరɅంǖęė",
    "difficulty": "Not identified in source",
    "sourceText": "258. “మĄʛҖ! ఈ కంబģ వలɊ õз ʿణĄę తపɂ, āంĕäę, \nјఖంäę Ǝш” ఈ Āకɇం ఈ సందరɅం ǖęė \n1) \nఆñɆనంшу కంబģę йĠంċ üоǉ úìɊĒన \nసందరɅం \n2) \nĜచȳäу కంబģę üоз ఇċȳన సందరɅంǖęė \n \n3) \nచంచల కంబģ йĠంċ üоǉ úìɊĒన సందరɅం \n \n4) \nüо కంబģ йĠంċ ఆñɆనంшęǉ úìɊĒన సందరɅం"
  },
  {
    "id": 259,
    "printedNumber": 259,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "259. “ăɌł, ł కంబģ łƌ ఉంмƺంĒ” ఈ Āకɇం ఈ సందరɅం \nǖęė",
    "options": [
      {
        "number": 1,
        "text": "Ĝచȳäу కంబģę üоз ఇŷȳ సందరɅం"
      },
      {
        "number": 2,
        "text": "చంచల కంబģę üоз ఇŷȳ సందరɅం"
      },
      {
        "number": 3,
        "text": "üо కంబģę ఆñɆనంшęĆ  ఇŷȳ సందరɅం"
      },
      {
        "number": 4,
        "text": "ఆñɆనంшу కంబģę üоз ఇŷȳ సందరɅం"
      }
    ],
    "correctOption": 3,
    "correctText": "üо కంబģę ఆñɆనంшęĆ  ఇŷȳ సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "259. “ăɌł, ł కంబģ łƌ ఉంмƺంĒ” ఈ Āకɇం ఈ సందరɅం \nǖęė \n1) \nĜచȳäу కంబģę üоз ఇŷȳ సందరɅం \n \n2) \nచంచల కంబģę üоз ఇŷȳ సందరɅం \n \n3) \nüо కంబģę ఆñɆనంшęĆ  ఇŷȳ సందరɅం \n \n4) \nఆñɆనంшу కంబģę üоз ఇŷȳ సందరɅం"
  },
  {
    "id": 260,
    "printedNumber": 260,
    "topic": "సాహిత్య / సాంస్కృతిక సాధారణ అంశాలు",
    "stem": "260. “õ ʝцзǖ ăɌరȾం Ǝш, ƅъ ƋėƺĠ ʝతకటం Ǝш” ఈ \nĀకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "మġɉœсȸ పటȸణంǖ కɊэɄలйĠంċ œƆɂ సందరɅం"
      },
      {
        "number": 2,
        "text": "మġɉœсȸ తనЃన ęవħంŷ âĆ йĠంċ œƆɂ సందరɅం"
      },
      {
        "number": 3,
        "text": "మġɉœсȸ ʭమ పంçğĹ ̫ħŚంȌ йĠంċ œƆɂ\nసందరɅం"
      },
      {
        "number": 4,
        "text": "మġɉœсȸ తన సɌùవం йĠంċ œӐзƅ సందరɅం"
      }
    ],
    "correctOption": 4,
    "correctText": "మġɉœсȸ తన సɌùవం йĠంċ œӐзƅ సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "260. “õ ʝцзǖ ăɌరȾం Ǝш, ƅъ ƋėƺĠ ʝతకటం Ǝш” ఈ \nĀకɇం ఈ సందరɅం ǖęė \n1) \nమġɉœсȸ పటȸణంǖ కɊэɄలйĠంċ œƆɂ సందరɅం \n \n2) \nమġɉœсȸ తనЃన ęవħంŷ âĆ йĠంċ œƆɂ సందరɅం \n \n3) \nమġɉœсȸ ʭమ పంçğĹ ̫ħŚంȌ йĠంċ œƆɂ \nసందరɅం \n \n4) \nమġɉœсȸ తన సɌùవం йĠంċ œӐзƅ సందరɅం"
  },
  {
    "id": 261,
    "printedNumber": 261,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "261. “İ...!  ఈ õĐ సúజంǖ ƖంతమంėĆ ƃశభĆȽ, Ёరɇం, \năహసం Ǝѕ” ఈ Āకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "јļȜ Аనɇంǖ ŷరзంî తĢɊదంѧѓ అуȺзనɁ\nసందరɅం"
      },
      {
        "number": 2,
        "text": "ňü Аనɇంǖ ŷరîęĆ తన తĢɊదంѧలǉ úìɊĒన\nసందరɅం"
      },
      {
        "number": 3,
        "text": "పదɆజ ňü ʦóɀంజĢ సభǖ úìɊĒన సందరɅం"
      },
      {
        "number": 4,
        "text": "ňü Аనɇంǖ ňరమరణం ƪంėన సందరɅం"
      }
    ],
    "correctOption": 1,
    "correctText": "јļȜ Аనɇంǖ ŷరзంî తĢɊదంѧѓ అуȺзనɁ\nసందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "261. “İ...!  ఈ õĐ సúజంǖ ƖంతమంėĆ ƃశభĆȽ, Ёరɇం, \năహసం Ǝѕ” ఈ Āకɇం ఈ సందరɅం ǖęė \n \n1) \nјļȜ Аనɇంǖ ŷరзంî తĢɊదంѧѓ అуȺзనɁ \nసందరɅం \n \n2) \nňü Аనɇంǖ ŷరîęĆ తన తĢɊదంѧలǉ úìɊĒన \nసందరɅం \n \n3) \nపదɆజ ňü ʦóɀంజĢ సభǖ úìɊĒన సందరɅం \n \n4) \nňü Аనɇంǖ ňరమరణం ƪంėన సందరɅం"
  },
  {
    "id": 262,
    "printedNumber": 262,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "262. “ఇకȮడ ѿî łё ЉцþɊŴ బతకంĒ” ఈ Āకɇం ఈ సందరɅం \nǖęė",
    "options": [
      {
        "number": 1,
        "text": "కంĚĢ Ɩìȸలǖ ఎшЉన మęĦ గంగనɁǉ úìɊĒన\nసందరɅం"
      },
      {
        "number": 2,
        "text": "వలస వċȳన గంగనɁǉ üమపɂ úìɊĒన సందరɅం"
      },
      {
        "number": 3,
        "text": "üమపɂ ఇంĐǖ õగనɁ గంగనɁǉ úìɊĒన సందరɅం"
      },
      {
        "number": 4,
        "text": "వలస వċȳన గంగనɁǉ ఒక నĒవయј మęĦ úìɊĒన\nసందరɅం"
      }
    ],
    "correctOption": 2,
    "correctText": "వలస వċȳన గంగనɁǉ üమపɂ úìɊĒన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "262. “ఇకȮడ ѿî łё ЉцþɊŴ బతకంĒ” ఈ Āకɇం ఈ సందరɅం \nǖęė \n1) \nకంĚĢ Ɩìȸలǖ ఎшЉన మęĦ గంగనɁǉ úìɊĒన \nసందరɅం \n \n2) \nవలస వċȳన గంగనɁǉ üమపɂ úìɊĒన సందరɅం \n \n3) \nüమపɂ ఇంĐǖ õగనɁ గంగనɁǉ úìɊĒన సందరɅం \n \n4) \n వలస వċȳన గంగనɁǉ ఒక నĒవయј మęĦ úìɊĒన \nసందరɅం"
  },
  {
    "id": 263,
    "printedNumber": 263,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "263. “నĢȿзȮѓగѓȰ ǖకяన ėకȮĠѐనɁ యёంధĹ јцంу” ఈ \nĀకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "Ǝత వయјǖ వలస Ŭģɋన ŝѓй కĤత йĠంċ œĚɂన\nసందరɅం"
      },
      {
        "number": 2,
        "text": "ధరɆƃవత йĠంċ కĤ œĚɂన సందరɅం"
      },
      {
        "number": 3,
        "text": "కషȸıĤ Ѐనɇం йĠంċ కĤ œĚɂన సందరɅం"
      },
      {
        "number": 4,
        "text": "రкõథ నృöѓĒ йĠంċ కĤ œĚɂన సందరɅం"
      }
    ],
    "correctOption": 3,
    "correctText": "కషȸıĤ Ѐనɇం йĠంċ కĤ œĚɂన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "263. “నĢȿзȮѓగѓȰ ǖకяన ėకȮĠѐనɁ యёంధĹ јцంу” ఈ \nĀకɇం ఈ సందరɅం ǖęė \n1) \nƎత వయјǖ వలస Ŭģɋన ŝѓй కĤత йĠంċ œĚɂన \nసందరɅం \n2) \nధరɆƃవత йĠంċ కĤ œĚɂన సందరɅం \n \n3) \nకషȸıĤ Ѐనɇం йĠంċ కĤ œĚɂన సందరɅం \n \n4) \nరкõథ నృöѓĒ йĠంċ కĤ œĚɂన సందరɅం"
  },
  {
    "id": 264,
    "printedNumber": 264,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "264. “ఏ šట? ĽŬట? јцŚట ?” ఈ Āకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "шషɇంцу శзంతలъ ęంу సభǖ ęüకĠంċన\nసందరɅం"
      },
      {
        "number": 2,
        "text": "శзంతల шషɇంцęǉ зúёę йĠంċ పĢĆన\nసందరɅం"
      },
      {
        "number": 3,
        "text": "ఆâశĀĔ шషɇంцęǉ పĢĆన సందరɅం"
      },
      {
        "number": 4,
        "text": "కణɌమహĠɎ శзంతలǉ úìɊĒన సందరɅం"
      }
    ],
    "correctOption": 1,
    "correctText": "шషɇంцу శзంతలъ ęంу సభǖ ęüకĠంċన\nసందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "264. “ఏ šట? ĽŬట? јцŚట ?” ఈ Āకɇం ఈ సందరɅం ǖęė \n \n1) \nшషɇంцу శзంతలъ ęంу సభǖ ęüకĠంċన \nసందరɅం \n \n2) \nశзంతల шషɇంцęǉ зúёę йĠంċ పĢĆన \nసందరɅం \n \n3) \nఆâశĀĔ шషɇంцęǉ పĢĆన సందరɅం \n \n4) \nకణɌమహĠɎ శзంతలǉ úìɊĒన సందరɅం"
  },
  {
    "id": 265,
    "printedNumber": 265,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "265. “ňу Ľзъ శзంతలз ˥యనందъంу, Ɠ \nƖę భĠğంы మతę, శзంతల సతɇя వŪȮ .....” ఈ Āకɇం ఈ \nసందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "సĝзѓ шషɇంцęǉ శзంతల йĠంċ œĚɂన సందరɅం"
      },
      {
        "number": 2,
        "text": "శзంతల шషɇంцęǉ зúёę йĠంċ œĚɂన\nసందరɅం"
      },
      {
        "number": 3,
        "text": "కణɌమహĠɎ шషɇంцęǉ శзంతల йĠంċ œĚɂన\nసందరɅం"
      },
      {
        "number": 4,
        "text": "ėవɇĀĔ шషɇంцęǉ శзంతల йĠంċ œĚɂన సందరɅం"
      }
    ],
    "correctOption": 4,
    "correctText": "ėవɇĀĔ шషɇంцęǉ శзంతల йĠంċ œĚɂన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "265. “ňу Ľзъ శзంతలз ˥యనందъంу, Ɠ \nƖę భĠğంы మతę, శзంతల సతɇя వŪȮ .....” ఈ Āకɇం ఈ \nసందరɅం ǖęė \n \n1) \nసĝзѓ шషɇంцęǉ శзంతల йĠంċ œĚɂన సందరɅం \n \n2) \nశзంతల шషɇంцęǉ зúёę йĠంċ œĚɂన \nసందరɅం \n \n3) \nకణɌమహĠɎ шషɇంцęǉ శзంతల йĠంċ œĚɂన \nసందరɅం \n \n \n4) \nėవɇĀĔ шషɇంцęǉ శзంతల йĠంċ œĚɂన సందరɅం"
  },
  {
    "id": 266,
    "printedNumber": 266,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "266. “తపɂబѓక నйš ôĠɆзలз” ఈ Āకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "శзంతలъ ęüకĠҠȽ шషɇంцу úìɊĒన సందరɅం"
      },
      {
        "number": 2,
        "text": "‘ęъɁ ఎёగъ’ అę తనǉ œĚɂన шషɇంцęǉ శзంతల\núìɊĒన సందరɅం"
      },
      {
        "number": 3,
        "text": "శзంతలъ ęüకĠంċన шషɇంцęǉ సĝзѓ\núìɊĒన సందరɅం"
      },
      {
        "number": 4,
        "text": "‘ęъɁ šёగъ’ అę శзంతలǉ œĚɂన шషɇంцęǉ\nకణɌమహĠɎ úìɊĒన సందరɅం"
      }
    ],
    "correctOption": 2,
    "correctText": "‘ęъɁ ఎёగъ’ అę తనǉ œĚɂన шషɇంцęǉ శзంతల\núìɊĒన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "266. “తపɂబѓక నйš ôĠɆзలз” ఈ Āకɇం ఈ సందరɅం ǖęė \n \n1) \nశзంతలъ ęüకĠҠȽ шషɇంцу úìɊĒన సందరɅం \n \n2) \n‘ęъɁ ఎёగъ’ అę తనǉ œĚɂన шషɇంцęǉ శзంతల \núìɊĒన సందరɅం \n \n3) \nశзంతలъ ęüకĠంċన шషɇంцęǉ సĝзѓ \núìɊĒన సందరɅం \n \n4) \n‘ęъɁ šёగъ’ అę శзంతలǉ œĚɂన шషɇంцęǉ \nకణɌమహĠɎ úìɊĒన సందరɅం"
  },
  {
    "id": 267,
    "printedNumber": 267,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "267. “అƃĞటúɆ! అమɆäరɊ ƆరɊǉ úŲĞĐ పę!” ఈ Āకɇం ఈ \nసందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "ఇþɊѓ తన Ɔёъ తన ĚలɊలъ అĒĈన సందరɅం"
      },
      {
        "number": 2,
        "text": "ఇþɊѓ తన Ɔёъ పĆȮంĐĀĠę అĒĈన సందరɅం"
      },
      {
        "number": 3,
        "text": "ఇþɊѓ తన Ɔёъ పęమęĦę అĒĈన సందరɅం"
      },
      {
        "number": 4,
        "text": "ఇþɊѓ తన Ɔёъ ƓɁĨцలъ అĒĈన సందరɅం"
      }
    ],
    "correctOption": 3,
    "correctText": "ఇþɊѓ తన Ɔёъ పęమęĦę అĒĈన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "267. “అƃĞటúɆ! అమɆäరɊ ƆరɊǉ úŲĞĐ పę!” ఈ Āకɇం ఈ \nసందరɅం ǖęė \n1) \nఇþɊѓ తన Ɔёъ తన ĚలɊలъ అĒĈన సందరɅం \n2) \nఇþɊѓ తన Ɔёъ పĆȮంĐĀĠę అĒĈన సందరɅం \n \n3) \nఇþɊѓ తన Ɔёъ పęమęĦę అĒĈన సందరɅం \n \n4) \nఇþɊѓ తన Ɔёъ ƓɁĨцలъ అĒĈన సందరɅం"
  },
  {
    "id": 268,
    "printedNumber": 268,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "268. “ъѕɌ āరదĤ. ъѕɌ మన ҠȮǖɊ ŘȕȽ âɊјǖ ఫȣȸ వçȳѕ” ఈ \nĀకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "ఇþɊѓ తన Ɔёъ తĢɊę అĒĈన సందరɅం"
      },
      {
        "number": 2,
        "text": "ఇþɊĢǉ ఆŦ భరȽ úìɊĒన సందరɄం"
      },
      {
        "number": 3,
        "text": "ఇþɊĢǉ ఉöôɇѐѓ úìɊĒన సందరɅం"
      },
      {
        "number": 4,
        "text": "ఇþɊѓ తన ƓɁĨцüĢę కĢħన సందరɅం"
      }
    ],
    "correctOption": 4,
    "correctText": "ఇþɊѓ తన ƓɁĨцüĢę కĢħన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "268. “ъѕɌ āరదĤ. ъѕɌ మన ҠȮǖɊ ŘȕȽ âɊјǖ ఫȣȸ వçȳѕ” ఈ \nĀకɇం ఈ సందరɅం ǖęė \n1) \nఇþɊѓ తన Ɔёъ తĢɊę అĒĈన సందరɅం \n \n2) \nఇþɊĢǉ ఆŦ భరȽ úìɊĒన సందరɄం \n \n3) \nఇþɊĢǉ ఉöôɇѐѓ úìɊĒన సందరɅం \n \n4) \nఇþɊѓ తన ƓɁĨцüĢę కĢħన సందరɅం"
  },
  {
    "id": 269,
    "printedNumber": 269,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "269. “అƃంż అþ ѕõɁѕ” ఈ Āకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "పė ǔоల తüɌత కęĚంċన ఎలɊమɆǉ రచğ˞\núìɊĒన సందరɅం"
      },
      {
        "number": 2,
        "text": "ఎలɊమɆ Ţģɋ҄ыల సందరɅంǖ తం˛ úìɊĒన\nసందరɅం"
      },
      {
        "number": 3,
        "text": "పėǔоల తüɌత కĢħన రచğ˞ǉ ఎలɊమɆ úìɊĒన\nసందరɅం"
      },
      {
        "number": 4,
        "text": "Ţģɋõу ఎలɊమɆǉ ఆŦ భరȽ úìɊĒన  సందరɅం"
      }
    ],
    "correctOption": 1,
    "correctText": "పė ǔоల తüɌత కęĚంċన ఎలɊమɆǉ రచğ˞\núìɊĒన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "269. “అƃంż అþ ѕõɁѕ” ఈ Āకɇం ఈ సందరɅం ǖęė \n \n1) \nపė ǔоల తüɌత కęĚంċన ఎలɊమɆǉ రచğ˞ \núìɊĒన సందరɅం \n \n2) \nఎలɊమɆ Ţģɋ҄ыల సందరɅంǖ తం˛ úìɊĒన \nసందరɅం \n \n3) \nపėǔоల తüɌత కĢħన రచğ˞ǉ ఎలɊమɆ úìɊĒన \nసందరɅం \n \n4) \nŢģɋõу ఎలɊమɆǉ ఆŦ భరȽ úìɊĒన  సందరɅం"
  },
  {
    "id": 270,
    "printedNumber": 270,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "270. “ĀĒŲం эėɀ ыżȸǍ ఇంĐĆ üవడƊ ăలъƖƅ” ఈ Āకɇం ఈ \nసందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "రచğ˞ తన భరȽ йĠంċ ఎలɊమɆз œĚɂన సందరɅం"
      },
      {
        "number": 2,
        "text": "ఎలɊమɆ తన భరȽ йĠంċ రచğ˞Ć œĚɂన సందరɅం"
      },
      {
        "number": 3,
        "text": "రచğ˞ǉ ఎలɊమɆ తన తం˛ йĠంċ œĚɂన సందరɅం"
      },
      {
        "number": 4,
        "text": "ఎలɊమɆ తన Ɩуз йĠంċ రచğ˞Ć œĚɂన సందరɅం"
      }
    ],
    "correctOption": 2,
    "correctText": "ఎలɊమɆ తన భరȽ йĠంċ రచğ˞Ć œĚɂన సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "270. “ĀĒŲం эėɀ ыżȸǍ ఇంĐĆ üవడƊ ăలъƖƅ” ఈ Āకɇం ఈ \nసందరɅం ǖęė \n1) \nరచğ˞ తన భరȽ йĠంċ ఎలɊమɆз œĚɂన సందరɅం \n \n2) \nఎలɊమɆ తన భరȽ йĠంċ రచğ˞Ć œĚɂన సందరɅం \n \n3) \nరచğ˞ǉ ఎలɊమɆ తన తం˛ йĠంċ œĚɂన సందరɅం \n \n4) \nఎలɊమɆ తన Ɩуз йĠంċ రచğ˞Ć œĚɂన సందరɅం"
  },
  {
    "id": 271,
    "printedNumber": 271,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "271. “అనɁ! зúర ! ĽయĐȸ సцɂѪంу గѓగ ú ŲĞĐ గడమ \nůыమ!” ఈ Āకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "ధరɆĀɇщу తన తĢɊదంѧలъ зశలం అĒĈనыу\nĀёసúôం œĚɂన  సందరɅం"
      },
      {
        "number": 2,
        "text": "Ǟĥзу తన తĢɊదంѧъ కĢħన సందరɅం"
      },
      {
        "number": 3,
        "text": "ఇþɊѓ Ǟĥзęǉ úìɊĒన సందరɅం"
      },
      {
        "number": 4,
        "text": "ధరɆĀɇщу ùరɇ ĚలɊѓ Ǟĥзęǉ úìɊĒన సందరɅం"
      }
    ],
    "correctOption": 1,
    "correctText": "ధరɆĀɇщу తన తĢɊదంѧలъ зశలం అĒĈనыу\nĀёసúôం œĚɂన  సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "271. “అనɁ! зúర ! ĽయĐȸ సцɂѪంу గѓగ ú ŲĞĐ గడమ \nůыమ!” ఈ Āకɇం ఈ సందరɅం ǖęė \n1) \nధరɆĀɇщу తన తĢɊదంѧలъ зశలం అĒĈనыу \nĀёసúôం œĚɂన  సందరɅం \n2) \nǞĥзу తన తĢɊదంѧъ కĢħన సందరɅం \n \n3) \nఇþɊѓ Ǟĥзęǉ úìɊĒన సందరɅం \n \n4) \nధరɆĀɇщу ùరɇ ĚలɊѓ Ǟĥзęǉ úìɊĒన సందరɅం"
  },
  {
    "id": 272,
    "printedNumber": 272,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "272. “üజɇం ƺసǒ రమĔ ƺసǒ \n \nపదĤ ƺసǒ – ǲёషం ƺసǒ” ఈ Āకɇం ఈ సందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "āంĕ ʛయñɁѓ ŷƓ సందరɅం"
      },
      {
        "number": 2,
        "text": "ħóɀёȾу ఇంĐę వదĢన సందరɅం"
      },
      {
        "number": 3,
        "text": "అǙзу పāȳñȽపం ʛకĐంċన సందరɅం"
      },
      {
        "number": 4,
        "text": "ѐదɀం జరగîęĆ âరðѓ œƆɂ సందరɅం"
      }
    ],
    "correctOption": 4,
    "correctText": "ѐదɀం జరగîęĆ âరðѓ œƆɂ సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "272. “üజɇం ƺసǒ రమĔ ƺసǒ \n \nపదĤ ƺసǒ – ǲёషం ƺసǒ” ఈ Āకɇం ఈ సందరɅం ǖęė \n1) \nāంĕ ʛయñɁѓ ŷƓ సందరɅం \n2) \nħóɀёȾу ఇంĐę వదĢన సందరɅం \n \n3) \nఅǙзу పāȳñȽపం ʛకĐంċన సందరɅం \n \n4) \nѐదɀం జరగîęĆ âరðѓ œƆɂ సందరɅం"
  },
  {
    "id": 273,
    "printedNumber": 273,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "273. “ఆž šమళɋз అంగЍకలɇం ʛăėంచడం \nగంцƎƓ čంకĚలɊలз âєɋ నĠŲయడం” ఈ Āకɇం ఈ \nసందరɅం ǖęė",
    "options": [
      {
        "number": 1,
        "text": "ѐదɀమంż ఏĞǄ œƆɂ సందరɅం"
      },
      {
        "number": 2,
        "text": "ѐదɀҝɇహం йĠంċ œƆɂ సందరɅం"
      },
      {
        "number": 3,
        "text": "ѐóɀęĆ âరðѓ œƆɂ సందరɅం"
      },
      {
        "number": 4,
        "text": "పāȳñȽపం йĠంċ œƆɂ సందరɅం"
      }
    ],
    "correctOption": 1,
    "correctText": "ѐదɀమంż ఏĞǄ œƆɂ సందరɅం",
    "difficulty": "Not identified in source",
    "sourceText": "273. “ఆž šమళɋз అంగЍకలɇం ʛăėంచడం \nగంцƎƓ čంకĚలɊలз âєɋ నĠŲయడం” ఈ Āకɇం ఈ \nసందరɅం ǖęė \n \n1) \nѐదɀమంż ఏĞǄ œƆɂ సందరɅం \n \n2) \nѐదɀҝɇహం йĠంċ œƆɂ సందరɅం \n \n3) \nѐóɀęĆ âరðѓ œƆɂ సందరɅం \n \n4) \nపāȳñȽపం йĠంċ œƆɂ సందరɅం"
  },
  {
    "id": 274,
    "printedNumber": 274,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "274. “అė కüɆ .... అúɆ!” ƃāęɁ âöуҎ, ƃశ ʛజĢɁ \nâöуҎ, ƃశ ʛజĢɁ రĩంŷ ఉǋɇగమúɆ! అė కరɆ ఎþ \nఅѕцంė?” అę అనɁė",
    "options": [
      {
        "number": 1,
        "text": "ňర"
      },
      {
        "number": 2,
        "text": "јļȜ"
      },
      {
        "number": 3,
        "text": "üéüѕ"
      },
      {
        "number": 4,
        "text": "ǔశయɇ"
      }
    ],
    "correctOption": 2,
    "correctText": "јļȜ",
    "difficulty": "Not identified in source",
    "sourceText": "274. “అė కüɆ .... అúɆ!” ƃāęɁ âöуҎ, ƃశ ʛజĢɁ \nâöуҎ, ƃశ ʛజĢɁ రĩంŷ ఉǋɇగమúɆ! అė కరɆ ఎþ \nఅѕцంė?” అę అనɁė \n \n1) \nňర \n \n2) \nјļȜ \n \n3) \nüéüѕ \n \n4) \nǔశయɇ"
  },
  {
    "id": 275,
    "printedNumber": 275,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "275. úతృҖĞ öఠంǖ “ƅъ ƌы Аనɇంǖ ŷĠǎñనúɆ! మంċ \nıñĢăȽరట” అę ఉñɏహంǉ తĢɊĆ œĚɂనĀё",
    "options": [
      {
        "number": 1,
        "text": "ňర"
      },
      {
        "number": 2,
        "text": "јļȜ"
      },
      {
        "number": 3,
        "text": "üéüѕ"
      },
      {
        "number": 4,
        "text": "ǔశయɇ"
      }
    ],
    "correctOption": 1,
    "correctText": "ňర",
    "difficulty": "Not identified in source",
    "sourceText": "275. úతృҖĞ öఠంǖ “ƅъ ƌы Аనɇంǖ ŷĠǎñనúɆ! మంċ \nıñĢăȽరట” అę ఉñɏహంǉ తĢɊĆ œĚɂనĀё \n \n1) \nňర \n \n2) \nјļȜ \n \n3) \nüéüѕ \n \n4) \nǔశయɇ"
  },
  {
    "id": 276,
    "printedNumber": 276,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "276. úతృҖĞ öఠంǖ “õ Āళɋంñ Ąğä ఉõɁё. ĀళɋĆ \nఅęɁǿకüɇѓ ఉంžþ ŷయగĢäъ. õ зсంబ ఋðęɁ ఈ \nĤధంä ĹёȳзంсõɁъ ” అę సంతృĚȽä ęʘǖ éёзనɁė",
    "options": [
      {
        "number": 1,
        "text": "јļȜ"
      },
      {
        "number": 2,
        "text": "üéüѕ"
      },
      {
        "number": 3,
        "text": "ǔశయɇ"
      },
      {
        "number": 4,
        "text": "ňర"
      }
    ],
    "correctOption": 4,
    "correctText": "ňర",
    "difficulty": "Not identified in source",
    "sourceText": "276. úతృҖĞ öఠంǖ “õ Āళɋంñ Ąğä ఉõɁё. ĀళɋĆ \nఅęɁǿకüɇѓ ఉంžþ ŷయగĢäъ. õ зсంబ ఋðęɁ ఈ \nĤధంä ĹёȳзంсõɁъ ” అę సంతృĚȽä ęʘǖ éёзనɁė \n1) \nјļȜ \n2) \nüéüѕ \n \n3) \nǔశయɇ \n \n4) \nňర"
  },
  {
    "id": 277,
    "printedNumber": 277,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "277. úతృҖĞ öఠంǖ “õ ĜడȺ బĕĆన õѓйǔоѓ మన \nఋణం ĹёȳƺవడƊ âш, ƃశ Ɠవǖ మరĔంċ జъల йంŚǖɊ \nęĢċ ǎûу ” అę ňё ňĠǉ అõɁё",
    "options": [
      {
        "number": 1,
        "text": "ňర - చంʘమɆǉ"
      },
      {
        "number": 2,
        "text": "јļȜ - పదɆǉ"
      },
      {
        "number": 3,
        "text": "చంʘమɆ - ǔశయɇǉ"
      },
      {
        "number": 4,
        "text": "పదɆ - üéüѕǉ"
      }
    ],
    "correctOption": 3,
    "correctText": "చంʘమɆ - ǔశయɇǉ",
    "difficulty": "Not identified in source",
    "sourceText": "277. úతృҖĞ öఠంǖ “õ ĜడȺ బĕĆన õѓйǔоѓ మన \nఋణం ĹёȳƺవడƊ âш, ƃశ Ɠవǖ మరĔంċ జъల йంŚǖɊ \nęĢċ ǎûу ” అę ňё ňĠǉ అõɁё \n \n1) \nňర - చంʘమɆǉ \n \n2) \nјļȜ - పదɆǉ \n \n3) \nచంʘమɆ - ǔశయɇǉ \n \n4) \nపదɆ - üéüѕǉ"
  },
  {
    "id": 278,
    "printedNumber": 278,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "278. “ňళɋ йĠంċ œĚɂ మన Ţంзల Ɩటȸంǖ ňళɋз బస ఏüɂс \nŷğంм” అę పయనం öఠంǖ ыరúğంċంė",
    "options": [
      {
        "number": 1,
        "text": "üమపɂ - õగనɁъ"
      },
      {
        "number": 2,
        "text": "õగనɁ - üమపɂъ"
      },
      {
        "number": 3,
        "text": "ŬంకటăɌĞ - గంగనɁъ"
      },
      {
        "number": 4,
        "text": "గంగనɁ - õగనɁъ"
      }
    ],
    "correctOption": 1,
    "correctText": "üమపɂ - õగనɁъ",
    "difficulty": "Not identified in source",
    "sourceText": "278. “ňళɋ йĠంċ œĚɂ మన Ţంзల Ɩటȸంǖ ňళɋз బస ఏüɂс \nŷğంм” అę పయనం öఠంǖ ыరúğంċంė \n1) \nüమపɂ - õగనɁъ \n2) \nõగనɁ - üమపɂъ \n \n3) \nŬంకటăɌĞ - గంగనɁъ \n \n4) \nగంగనɁ - õగనɁъ"
  },
  {
    "id": 279,
    "printedNumber": 279,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "279. పయనం öఠంǖ “మన ఊё ఇìɊ పచȳä ఉంż ఇంత Ґరం \nవŷȳ పę ఏяంė ? ” అę",
    "options": [
      {
        "number": 1,
        "text": "గంగనɁ üమపɂǉ అõɁу"
      },
      {
        "number": 2,
        "text": "Ŭంకటలɝ üమపɂǉ అనɁė"
      },
      {
        "number": 3,
        "text": "Ŭంకటలɝ õగనɁǉ అనɁė"
      },
      {
        "number": 4,
        "text": "గంగనɁ Ŭంకటలɝǉ అõɁу"
      }
    ],
    "correctOption": 4,
    "correctText": "గంగనɁ Ŭంకటలɝǉ అõɁу",
    "difficulty": "Not identified in source",
    "sourceText": "279. పయనం öఠంǖ “మన ఊё ఇìɊ పచȳä ఉంż ఇంత Ґరం \nవŷȳ పę ఏяంė ? ” అę \n1) \nగంగనɁ üమపɂǉ అõɁу \n2) \nŬంకటలɝ üమపɂǉ అనɁė \n \n3) \nŬంకటలɝ õగనɁǉ అనɁė \n \n4) \nగంగనɁ Ŭంకటలɝǉ అõɁу"
  },
  {
    "id": 280,
    "printedNumber": 280,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "280. юవనĤజయం öఠంǖ “కĠšцȽకǎğ ŧѓక కѓйన \nėęŧȕ” Ļę అరɀవంతంä ғĠంచంĒ అę",
    "options": [
      {
        "number": 1,
        "text": "üయѓ Ţదȿనǉ అõɁу"
      },
      {
        "number": 2,
        "text": "üయѓ üమభѬĒǉ అõɁу"
      },
      {
        "number": 3,
        "text": "üయѓ భсȸҗĠȽǉ అõɁу"
      },
      {
        "number": 4,
        "text": "üయѓ Ҡరనǉ అõɁу"
      }
    ],
    "correctOption": 3,
    "correctText": "üయѓ భсȸҗĠȽǉ అõɁу",
    "difficulty": "Not identified in source",
    "sourceText": "280. юవనĤజయం öఠంǖ “కĠšцȽకǎğ ŧѓక కѓйన \nėęŧȕ” Ļę అరɀవంతంä ғĠంచంĒ అę  \n1) \nüయѓ Ţదȿనǉ అõɁу \n \n2) \nüయѓ üమభѬĒǉ అõɁу \n \n3) \nüయѓ భсȸҗĠȽǉ అõɁу \n \n4) \nüయѓ Ҡరనǉ అõɁу"
  },
  {
    "id": 281,
    "printedNumber": 281,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "281. ɖకృషȼƃవüయѓ “äĒదƋŚȳం గదనɁ ఘనసంపõɁ” అę \nసమసɇ ғĠంచమę ňĠĆ œöɂё",
    "options": [
      {
        "number": 1,
        "text": "ґరȵĐ"
      },
      {
        "number": 2,
        "text": "మలɊన"
      },
      {
        "number": 3,
        "text": "ĕమɆన"
      },
      {
        "number": 4,
        "text": "Ҡరన"
      }
    ],
    "correctOption": 3,
    "correctText": "ĕమɆన",
    "difficulty": "Not identified in source",
    "sourceText": "281. ɖకృషȼƃవüయѓ “äĒదƋŚȳం గదనɁ ఘనసంపõɁ” అę \nసమసɇ ғĠంచమę ňĠĆ œöɂё \n1) \nґరȵĐ \n \n2) \nమలɊన \n \n3) \nĕమɆన \n \n4) \nҠరన"
  },
  {
    "id": 282,
    "printedNumber": 282,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "282. సమయҠɃĠȽ öఠంǖ “ǔమіу œсȸėĈ సɌéĕ эėɀǉ \nకపటంǉ Ğʖú! బయటĆü! మǔ ఉƃȿశం Ǝш” అę ňĠǉ \nఅõɁу",
    "options": [
      {
        "number": 1,
        "text": "చంʘзу"
      },
      {
        "number": 2,
        "text": "Ɛటäу"
      },
      {
        "number": 3,
        "text": "పĢцу"
      },
      {
        "number": 4,
        "text": "ċʖзу"
      }
    ],
    "correctOption": 3,
    "correctText": "పĢцу",
    "difficulty": "Not identified in source",
    "sourceText": "282. సమయҠɃĠȽ öఠంǖ “ǔమіу œсȸėĈ సɌéĕ эėɀǉ \nకపటంǉ Ğʖú! బయటĆü! మǔ ఉƃȿశం Ǝш” అę ňĠǉ \nఅõɁу  \n \n1) \nచంʘзу \n \n2) \nƐటäу \n \n3) \nపĢцу \n \n4) \nċʖзу"
  },
  {
    "id": 283,
    "printedNumber": 283,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "283. “ఇంక âƓపǄɊ వјȽంėƎ ... పకȮన ఉనɁ పŪɊз ǎğంė úз \nపŪɊ ʛజలǉƅ కó పę” అę సతɇం మమâరం öఠంǖ ňĠǉ \nఅõɁу",
    "options": [
      {
        "number": 1,
        "text": "ĚలɊѓ"
      },
      {
        "number": 2,
        "text": "ŋత"
      },
      {
        "number": 3,
        "text": "üо"
      },
      {
        "number": 4,
        "text": "అమɆమɆ"
      }
    ],
    "correctOption": 3,
    "correctText": "üо",
    "difficulty": "Not identified in source",
    "sourceText": "283. “ఇంక âƓపǄɊ వјȽంėƎ ... పకȮన ఉనɁ పŪɊз ǎğంė úз \nపŪɊ ʛజలǉƅ కó పę” అę సతɇం మమâరం öఠంǖ ňĠǉ \nఅõɁу \n1) \nĚలɊѓ \n \n2) \nŋత \n \n3) \nüо \n \n4) \nఅమɆమɆ"
  },
  {
    "id": 284,
    "printedNumber": 284,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "284. ధరɆęరȼయం öఠంǖ “õɇయҗёȽల Ĺёɂъ ʛюѕ \núరȳవмȳ шఃćంచవшȿ” అę ఓóĠȳన Āё",
    "options": [
      {
        "number": 1,
        "text": "ʛజѓ"
      },
      {
        "number": 2,
        "text": "Аęзѓ"
      },
      {
        "number": 3,
        "text": "మంѪѓ"
      },
      {
        "number": 4,
        "text": "తĢɊదంѧѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "మంѪѓ",
    "difficulty": "Not identified in source",
    "sourceText": "284. ధరɆęరȼయం öఠంǖ “õɇయҗёȽల Ĺёɂъ ʛюѕ \núరȳవмȳ шఃćంచవшȿ” అę ఓóĠȳన Āё \n1) \nʛజѓ \n2) \nАęзѓ \n \n3) \nమంѪѓ \n \n4) \nతĢɊదంѧѓ"
  },
  {
    "id": 285,
    "printedNumber": 285,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "285. úûకంబģ öఠంǖ వృదɀǓĈ “ăɌъభవంǖ తపɂ Ľз ఈ \nĤషయం ǐధపడш” అం҉ ę҉ȸĠȳ ňĠǉ అõɁу.",
    "options": [
      {
        "number": 1,
        "text": "ఆñɆనంшу"
      },
      {
        "number": 2,
        "text": "చంĶదцȽу"
      },
      {
        "number": 3,
        "text": "చంచల"
      },
      {
        "number": 4,
        "text": "Ǚùవĕ"
      }
    ],
    "correctOption": 2,
    "correctText": "చంĶదцȽу",
    "difficulty": "Not identified in source",
    "sourceText": "285. úûకంబģ öఠంǖ వృదɀǓĈ “ăɌъభవంǖ తపɂ Ľз ఈ \nĤషయం ǐధపడш” అం҉ ę҉ȸĠȳ ňĠǉ అõɁу. \n \n1) \nఆñɆనంшу \n \n2) \nచంĶదцȽу \n \n3) \nచంచల \n \n4) \nǙùవĕ"
  },
  {
    "id": 286,
    "printedNumber": 286,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "286. ˣయĞѪęĆ öఠం “మనమంñ ఏõǆ, ఎంǉ јҐరы \nėగంñలǖ, ఏǋ అసɂషȸЇన సɌపɁǖకంǖ ఇėవరŲ \nకѓјзనɁсɊ అъҖĕ œంóъ ƅъ” అę సంıవƃȠ ňĠǉ \nఅõɁу",
    "options": [
      {
        "number": 1,
        "text": "నరħంహҗĠȽ"
      },
      {
        "number": 2,
        "text": "õüయణ üо"
      },
      {
        "number": 3,
        "text": "õగüо"
      },
      {
        "number": 4,
        "text": "నృħంĄüѕ"
      }
    ],
    "correctOption": 2,
    "correctText": "õüయణ üо",
    "difficulty": "Not identified in source",
    "sourceText": "286. ˣయĞѪęĆ öఠం “మనమంñ ఏõǆ, ఎంǉ јҐరы \nėగంñలǖ, ఏǋ అసɂషȸЇన సɌపɁǖకంǖ ఇėవరŲ \nకѓјзనɁсɊ అъҖĕ œంóъ ƅъ” అę సంıవƃȠ ňĠǉ \nఅõɁу \n \n1) \nనరħంహҗĠȽ \n \n2) \nõüయణ üо \n \n3) \nõగüо \n \n4) \nనృħంĄüѕ"
  },
  {
    "id": 287,
    "printedNumber": 287,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "287. “óహమğƁ œёѕǖ Ľєɋ ǋħళɋǉ ʺĈ మŇɋవċȳ õ Ľడన \nѿưȳę Ĥˊంĕ Ĺјзం҉ ఉంž Āё” అనɁė",
    "options": [
      {
        "number": 1,
        "text": "úĞĒœсȸ"
      },
      {
        "number": 2,
        "text": "üĤœсȸ"
      },
      {
        "number": 3,
        "text": "మėȿœсȸ"
      },
      {
        "number": 4,
        "text": "మġɉœсȸ"
      }
    ],
    "correctOption": 4,
    "correctText": "మġɉœсȸ",
    "difficulty": "Not identified in source",
    "sourceText": "287. “óహమğƁ œёѕǖ Ľєɋ ǋħళɋǉ ʺĈ మŇɋవċȳ õ Ľడన \nѿưȳę Ĥˊంĕ Ĺјзం҉ ఉంž Āё” అనɁė \n \n1) \núĞĒœсȸ \n \n2) \nüĤœсȸ \n \n3) \nమėȿœсȸ \n \n4) \nమġɉœсȸ"
  },
  {
    "id": 288,
    "printedNumber": 288,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "288. “Ľవదȿ ఈ కంబģ ఉందƅ భయం ʛజǖɊ ఉంż çѓ” అę \nనѕɌҎ üо దగȰర ъంĒ ĹјзనɁė",
    "options": [
      {
        "number": 1,
        "text": "చంĶదцȽу"
      },
      {
        "number": 2,
        "text": "ఆñɆనంшу"
      },
      {
        "number": 3,
        "text": "చంచల"
      },
      {
        "number": 4,
        "text": "Ĥʇяу"
      }
    ],
    "correctOption": 2,
    "correctText": "ఆñɆనంшу",
    "difficulty": "Not identified in source",
    "sourceText": "288. “Ľవదȿ ఈ కంబģ ఉందƅ భయం ʛజǖɊ ఉంż çѓ” అę \nనѕɌҎ üо దగȰర ъంĒ ĹјзనɁė \n1) \nచంĶదцȽу \n2) \nఆñɆనంшу \n \n3) \nచంచల \n \n4) \nĤʇяу"
  },
  {
    "id": 289,
    "printedNumber": 289,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "289. ఇలɊలకäƅ öఠంǖ “õ ƆƌĞĐ ..... õ ƆƌĞĐ!” అę ŝగ \nఆǖċంċంė",
    "options": [
      {
        "number": 1,
        "text": "јĄħę"
      },
      {
        "number": 2,
        "text": "āరద"
      },
      {
        "number": 3,
        "text": "ʛłల"
      },
      {
        "number": 4,
        "text": "āంత"
      }
    ],
    "correctOption": 2,
    "correctText": "āరద",
    "difficulty": "Not identified in source",
    "sourceText": "289. ఇలɊలకäƅ öఠంǖ “õ ƆƌĞĐ ..... õ ƆƌĞĐ!” అę ŝగ \nఆǖċంċంė \n1) \nјĄħę \n \n2) \nāరద \n \n3) \nʛłల \n \n4) \nāంత"
  },
  {
    "id": 290,
    "printedNumber": 290,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "290. ఆāĀė ʛâశüѕъ “ĒöȜȸ ŦంȌ з ĚĢċ úసȸరɊ సęɁĘǖ \nʛశɁз ʛశɁŧ జĀэ ùĞę పĢŎȕ” అƅ సమసɇ ఇċȳంė",
    "options": [
      {
        "number": 1,
        "text": "ħ. Ĥ. јబɄనɁ"
      },
      {
        "number": 2,
        "text": "జంôɇల öపయɇ āħɓ"
      },
      {
        "number": 3,
        "text": "నంҋĠ üమకృషȼúçёɇѓ"
      },
      {
        "number": 4,
        "text": "Ĝ. ҆గపɂ"
      }
    ],
    "correctOption": 3,
    "correctText": "నంҋĠ üమకృషȼúçёɇѓ",
    "difficulty": "Not identified in source",
    "sourceText": "290. ఆāĀė ʛâశüѕъ “ĒöȜȸ ŦంȌ з ĚĢċ úసȸరɊ సęɁĘǖ \nʛశɁз ʛశɁŧ జĀэ ùĞę పĢŎȕ” అƅ సమసɇ ఇċȳంė \n \n1) \nħ. Ĥ. јబɄనɁ \n \n2) \nజంôɇల öపయɇ āħɓ \n \n3) \nనంҋĠ üమకృషȼúçёɇѓ \n \n4) \nĜ. ҆గపɂ"
  },
  {
    "id": 291,
    "printedNumber": 291,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "291. úûకంబģ öఠంǖ “ăɌł!  ł కంబģę łƌ ఉంмƺంĒ, \nĻęవలɊ మంċ ఆǖచనǉ మంċ ŷయవచȳę” üо ňĠǉ \nఅõɁё",
    "options": [
      {
        "number": 1,
        "text": "ఆñɆనంшу"
      },
      {
        "number": 2,
        "text": "చంĶదцȽу"
      },
      {
        "number": 3,
        "text": "Ĥʇяу"
      },
      {
        "number": 4,
        "text": "చంచల"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆñɆనంшу",
    "difficulty": "Not identified in source",
    "sourceText": "291. úûకంబģ öఠంǖ “ăɌł!  ł కంబģę łƌ ఉంмƺంĒ, \nĻęవలɊ మంċ ఆǖచనǉ మంċ ŷయవచȳę” üо ňĠǉ \nఅõɁё \n1) \nఆñɆనంшу \n \n2) \nచంĶదцȽу \n \n3) \nĤʇяу \n \n4) \nచంచల"
  },
  {
    "id": 292,
    "printedNumber": 292,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "292. బцз గంప öఠంǖ “ఏĞ ƎదúɆ .... జэɄƃяంė? ఒక \nగంటƓы గంపšĕȽన ŢсȸƖę Ũంу ňщѓ ĕĠĈƁ õ ѿĢ \nõз వŷȳసȽė.” అę రచğతǉ అనɁė.",
    "options": [
      {
        "number": 1,
        "text": "ǎలమɆ"
      },
      {
        "number": 2,
        "text": "ఎలɊమɆ"
      },
      {
        "number": 3,
        "text": "ǎచమɆ"
      },
      {
        "number": 4,
        "text": "üజమɆ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఎలɊమɆ",
    "difficulty": "Not identified in source",
    "sourceText": "292. బцз గంప öఠంǖ “ఏĞ ƎదúɆ .... జэɄƃяంė? ఒక \nగంటƓы గంపšĕȽన ŢсȸƖę Ũంу ňщѓ ĕĠĈƁ õ ѿĢ \nõз వŷȳసȽė.” అę రచğతǉ అనɁė. \n1) \nǎలమɆ \n2) \nఎలɊమɆ \n \n3) \nǎచమɆ \n \n4) \nüజమɆ"
  },
  {
    "id": 293,
    "printedNumber": 293,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "293. ıవę öఠంǖ “öపъ õĆవɌúɆ!” అę లĢతǉ అనɁė",
    "options": [
      {
        "number": 1,
        "text": "ĤƑɌశɌరం"
      },
      {
        "number": 2,
        "text": "ʛǒėę"
      },
      {
        "number": 3,
        "text": "ĤశɌõథం"
      },
      {
        "number": 4,
        "text": "ఉöôɇѐу"
      }
    ],
    "correctOption": 3,
    "correctText": "ĤశɌõథం",
    "difficulty": "Not identified in source",
    "sourceText": "293. ıవę öఠంǖ “öపъ õĆవɌúɆ!” అę లĢతǉ అనɁė \n1) \nĤƑɌశɌరం \n2) \nʛǒėę \n \n3) \nĤశɌõథం \n \n4) \nఉöôɇѐу"
  },
  {
    "id": 294,
    "printedNumber": 294,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "294. కõɇіలȮం öఠంǖ Ĉńశం “õ దగȰర ƘĐȸâయѓ ĈĐȸâయѓ \nపęĆüవంĒ. ыసȽకం çతపĒƁ Ɛళɋз ыసȽకం అంсзǎĀĢ \nఅþ చėĤăȽъ” అę ňĠǉ అõɁу",
    "options": [
      {
        "number": 1,
        "text": "అĈɁǜʺవôъɊ"
      },
      {
        "number": 2,
        "text": "కరటకāħɓ"
      },
      {
        "number": 3,
        "text": "Ŭంకżశం"
      },
      {
        "number": 4,
        "text": "ŬంకమɆ"
      }
    ],
    "correctOption": 1,
    "correctText": "అĈɁǜʺవôъɊ",
    "difficulty": "Not identified in source",
    "sourceText": "294. కõɇіలȮం öఠంǖ Ĉńశం “õ దగȰర ƘĐȸâయѓ ĈĐȸâయѓ \nపęĆüవంĒ. ыసȽకం çతపĒƁ Ɛళɋз ыసȽకం అంсзǎĀĢ \nఅþ చėĤăȽъ” అę ňĠǉ అõɁу \n \n1) \nఅĈɁǜʺవôъɊ \n \n2) \nకరటకāħɓ \n \n3) \nŬంకżశం \n \n4) \nŬంకమɆ"
  },
  {
    "id": 295,
    "printedNumber": 295,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "295. ‘వóшѓ’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "öమёѓ"
      },
      {
        "number": 2,
        "text": "వకȽѓ"
      },
      {
        "number": 3,
        "text": "Ƨంగѓ"
      },
      {
        "number": 4,
        "text": "మంċĀё"
      }
    ],
    "correctOption": 2,
    "correctText": "వకȽѓ",
    "difficulty": "Not identified in source",
    "sourceText": "295. ‘వóшѓ’ పóęĆ అరȾం \n \n1) \nöమёѓ \n \n2) \nవకȽѓ \n \n3) \nƧంగѓ \n \n4) \nమంċĀё"
  },
  {
    "id": 296,
    "printedNumber": 296,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "296. ‘öħ’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "కъƘę"
      },
      {
        "number": 2,
        "text": "҄ħ"
      },
      {
        "number": 3,
        "text": "వదĢ"
      },
      {
        "number": 4,
        "text": "ŝĢħ"
      }
    ],
    "correctOption": 3,
    "correctText": "వదĢ",
    "difficulty": "Not identified in source",
    "sourceText": "296. ‘öħ’ పóęĆ అరȾం \n \n1) \nకъƘę \n \n2) \n҄ħ \n \n3) \nవదĢ \n \n4) \nŝĢħ"
  },
  {
    "id": 297,
    "printedNumber": 297,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "297. ‘ňċ’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "ňణ"
      },
      {
        "number": 2,
        "text": "Ĥసనకʡ"
      },
      {
        "number": 3,
        "text": "œѕѓ"
      },
      {
        "number": 4,
        "text": "అల"
      }
    ],
    "correctOption": 4,
    "correctText": "అల",
    "difficulty": "Not identified in source",
    "sourceText": "297. ‘ňċ’ పóęĆ అరȾం \n1) \nňణ \n2) \nĤసనకʡ \n \n3) \nœѕѓ \n \n4) \nఅల"
  },
  {
    "id": 298,
    "printedNumber": 298,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "298. ‘šёј’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "яకȮѓ"
      },
      {
        "number": 2,
        "text": "ధɌę"
      },
      {
        "number": 3,
        "text": "Ľడ"
      },
      {
        "number": 4,
        "text": "అకȮј"
      }
    ],
    "correctOption": 1,
    "correctText": "яకȮѓ",
    "difficulty": "Not identified in source",
    "sourceText": "298. ‘šёј’ పóęĆ అరȾం \n \n1) \nяకȮѓ \n \n2) \nధɌę \n \n3) \nĽడ \n \n4) \nఅకȮј"
  },
  {
    "id": 299,
    "printedNumber": 299,
    "topic": "పాఠ్యాంశ సందర్భాలు మరియు సాహిత్య విషయాలు",
    "stem": "299. ‘బѓы’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "Ţёйట"
      },
      {
        "number": 2,
        "text": "తёйట"
      },
      {
        "number": 3,
        "text": "బలя"
      },
      {
        "number": 4,
        "text": "Īу"
      }
    ],
    "correctOption": 3,
    "correctText": "బలя",
    "difficulty": "Not identified in source",
    "sourceText": "299. ‘బѓы’ పóęĆ అరȾం \n1) \nŢёйట \n2) \nతёйట \n \n3) \nబలя \n \n4) \nĪу"
  },
  {
    "id": 300,
    "printedNumber": 300,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "300. ‘ħకȽం’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "తĒħన"
      },
      {
        "number": 2,
        "text": "వĔĆన"
      },
      {
        "number": 3,
        "text": "Ŧరħన"
      },
      {
        "number": 4,
        "text": "ŢĠĈన"
      }
    ],
    "correctOption": 1,
    "correctText": "తĒħన",
    "difficulty": "Not identified in source",
    "sourceText": "300. ‘ħకȽం’ పóęĆ అరȾం \n1) \nతĒħన \n2) \nవĔĆన \n \n3) \nŦరħన \n \n4) \nŢĠĈన"
  },
  {
    "id": 301,
    "printedNumber": 301,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "301. ‘ŬలɊĆ’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "ƃవతѓ"
      },
      {
        "number": 2,
        "text": "గడȺ"
      },
      {
        "number": 3,
        "text": "йనపం"
      },
      {
        "number": 4,
        "text": "ఆѐధం"
      }
    ],
    "correctOption": 2,
    "correctText": "గడȺ",
    "difficulty": "Not identified in source",
    "sourceText": "301. ‘ŬలɊĆ’ పóęĆ అరȾం \n1) \nƃవతѓ \n \n2) \nగడȺ \n \n3) \nйనపం \n \n4) \nఆѐధం"
  },
  {
    "id": 302,
    "printedNumber": 302,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "302. ‘ėɌపя’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "ėŬɌ"
      },
      {
        "number": 2,
        "text": "âంĕ"
      },
      {
        "number": 3,
        "text": "ఏъй"
      },
      {
        "number": 4,
        "text": "öలన"
      }
    ],
    "correctOption": 3,
    "correctText": "ఏъй",
    "difficulty": "Not identified in source",
    "sourceText": "302. ‘ėɌపя’ పóęĆ అరȾం \n1) \nėŬɌ \n \n2) \nâంĕ \n \n3) \nఏъй \n \n4) \nöలన"
  },
  {
    "id": 303,
    "printedNumber": 303,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "303. ‘ఓఘя’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "ఔనɁతɇం"
      },
      {
        "number": 2,
        "text": "öపя"
      },
      {
        "number": 3,
        "text": "ĽĐ ʛĀహం"
      },
      {
        "number": 4,
        "text": "ƐĒ"
      }
    ],
    "correctOption": 3,
    "correctText": "ĽĐ ʛĀహం",
    "difficulty": "Not identified in source",
    "sourceText": "303. ‘ఓఘя’ పóęĆ అరȾం \n \n1) \nఔనɁతɇం \n \n2) \nöపя \n \n3) \nĽĐ ʛĀహం \n \n4) \nƐĒ"
  },
  {
    "id": 304,
    "printedNumber": 304,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "304. ‘āĠక’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "Ƽёవంక"
      },
      {
        "number": 2,
        "text": "ыĢ"
      },
      {
        "number": 3,
        "text": "ħంహం"
      },
      {
        "number": 4,
        "text": "šమĢ"
      }
    ],
    "correctOption": 1,
    "correctText": "Ƽёవంక",
    "difficulty": "Not identified in source",
    "sourceText": "304. ‘āĠక’ పóęĆ అరȾం \n1) \nƼёవంక \n \n2) \nыĢ \n \n3) \nħంహం \n \n4) \nšమĢ"
  },
  {
    "id": 305,
    "printedNumber": 305,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "305. అüȾలъ జతపరచంĒ \n \n1. రúరĞ  \na. Ɛగం \n \n2. వĒ  \n \nb. ùరɇ \n \n3. వలɊభ \n \nc. óóы",
    "options": [
      {
        "number": 1,
        "text": "1 – b\n2 – a\n3 - c"
      },
      {
        "number": 2,
        "text": "1 – a\n2 – b\n3 - c"
      },
      {
        "number": 3,
        "text": "1 – c\n2 – b\n3 - a"
      },
      {
        "number": 4,
        "text": "1 – c\n2 – a\n3 - b"
      }
    ],
    "correctOption": 4,
    "correctText": "1 – c\n2 – a\n3 - b",
    "difficulty": "Not identified in source",
    "sourceText": "305. అüȾలъ జతపరచంĒ \n \n1. రúరĞ  \na. Ɛగం \n \n2. వĒ  \n \nb. ùరɇ \n \n3. వలɊభ \n \nc. óóы \n1) \n1 – b  \n2 – a  \n3 - c \n2) \n1 – a  \n2 – b  \n3 - c \n \n3) \n1 – c  \n2 – b  \n3 - a \n \n4) \n1 – c  \n2 – a  \n3 - b"
  },
  {
    "id": 306,
    "printedNumber": 306,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "306. అüȾలъ జతపరచంĒ \n \n1. సɌħȽ \n \na. іభం \n \n2. Ɣల \n \nb. ఆనందం \n \n3. Ĥభవం \n \nc. సంపద",
    "options": [
      {
        "number": 1,
        "text": "1 – a\n2 – b\n3 - c"
      },
      {
        "number": 2,
        "text": "1 – a\n2 – c\n3 - b"
      },
      {
        "number": 3,
        "text": "1 – b\n2 – c\n3 - a"
      },
      {
        "number": 4,
        "text": "1 – c\n2 – b\n3 – a"
      }
    ],
    "correctOption": 1,
    "correctText": "1 – a\n2 – b\n3 - c",
    "difficulty": "Not identified in source",
    "sourceText": "306. అüȾలъ జతపరచంĒ \n \n1. సɌħȽ \n \na. іభం \n \n2. Ɣల \n \nb. ఆనందం \n \n3. Ĥభవం \n \nc. సంపద \n1) \n1 – a  \n2 – b  \n3 - c \n2) \n1 – a  \n2 – c  \n3 - b \n \n3) \n1 – b  \n2 – c  \n3 - a \n \n4) \n1 – c  \n2 – b  \n3 – a"
  },
  {
    "id": 307,
    "printedNumber": 307,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "307. ‘ǎё’ అƅ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "సంǉషం"
      },
      {
        "number": 2,
        "text": "ыüతనం"
      },
      {
        "number": 3,
        "text": "సҗహం"
      },
      {
        "number": 4,
        "text": "ѐదɀం"
      }
    ],
    "correctOption": 4,
    "correctText": "ѐదɀం",
    "difficulty": "Not identified in source",
    "sourceText": "307. ‘ǎё’ అƅ పóęĆ అరȾం \n \n1) \nసంǉషం \n \n2) \nыüతనం \n \n3) \nసҗహం \n \n4) \nѐదɀం"
  },
  {
    "id": 308,
    "printedNumber": 308,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "308. ‘మĒ ůకȮƎ ǎలమɆз ఏϯక ఆôరం.’ ఈ Āకɇంǖ ‘మĒůకȮ’ \nఅƅ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "ċనɁƪలం"
      },
      {
        "number": 2,
        "text": "మĐȸ"
      },
      {
        "number": 3,
        "text": "సҗహం"
      },
      {
        "number": 4,
        "text": "ҕĒద"
      }
    ],
    "correctOption": 1,
    "correctText": "ċనɁƪలం",
    "difficulty": "Not identified in source",
    "sourceText": "308. ‘మĒ ůకȮƎ ǎలమɆз ఏϯక ఆôరం.’ ఈ Āకɇంǖ ‘మĒůకȮ’ \nఅƅ పóęĆ అరȾం \n \n1) \nċనɁƪలం \n \n2) \nమĐȸ \n \n3) \nసҗహం \n \n4) \nҕĒద"
  },
  {
    "id": 309,
    "printedNumber": 309,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "309. ‘öయక’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "ఆటంకం"
      },
      {
        "number": 2,
        "text": "ҖĞ"
      },
      {
        "number": 3,
        "text": "Ĥడవక"
      },
      {
        "number": 4,
        "text": "బంధం"
      }
    ],
    "correctOption": 3,
    "correctText": "Ĥడవక",
    "difficulty": "Not identified in source",
    "sourceText": "309. ‘öయక’ పóęĆ అరȾం \n1) \nఆటంకం \n2) \nҖĞ \n \n3) \nĤడవక \n \n4) \nబంధం"
  },
  {
    "id": 310,
    "printedNumber": 310,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "310. ‘పĈė’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "Ĥధя"
      },
      {
        "number": 2,
        "text": "öя"
      },
      {
        "number": 3,
        "text": "öĠǎѕ"
      },
      {
        "number": 4,
        "text": "ċйĠంм"
      }
    ],
    "correctOption": 1,
    "correctText": "Ĥధя",
    "difficulty": "Not identified in source",
    "sourceText": "310. ‘పĈė’ పóęĆ అరȾం \n1) \nĤధя \n \n2) \nöя \n \n3) \nöĠǎѕ \n \n4) \nċйĠంм"
  },
  {
    "id": 311,
    "printedNumber": 311,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "311. ‘ĕĢɊక’  పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "అёй"
      },
      {
        "number": 2,
        "text": "ƺĠక"
      },
      {
        "number": 3,
        "text": "Ļపం"
      },
      {
        "number": 4,
        "text": "úరȰం"
      }
    ],
    "correctOption": 3,
    "correctText": "Ļపం",
    "difficulty": "Not identified in source",
    "sourceText": "311. ‘ĕĢɊక’  పóęĆ అరȾం \n \n1) \nఅёй \n \n2) \nƺĠక \n \n3) \nĻపం \n \n4) \núరȰం"
  },
  {
    "id": 312,
    "printedNumber": 312,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "312. ‘ƃవతలз üо శћу’ ఈ Āకɇంǖ శћу అనä",
    "options": [
      {
        "number": 1,
        "text": "Ҡёɇу"
      },
      {
        "number": 2,
        "text": "ఇంѬу"
      },
      {
        "number": 3,
        "text": "చంѬу"
      },
      {
        "number": 4,
        "text": "ĥѕу"
      }
    ],
    "correctOption": 2,
    "correctText": "ఇంѬу",
    "difficulty": "Not identified in source",
    "sourceText": "312. ‘ƃవతలз üо శћу’ ఈ Āకɇంǖ శћу అనä \n1) \nҠёɇу \n \n2) \nఇంѬу \n \n3) \nచంѬу \n \n4) \nĥѕу"
  },
  {
    "id": 313,
    "printedNumber": 313,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "313. ‘శబȿƺశం’ పóęĆ అరȾం",
    "options": [
      {
        "number": 1,
        "text": "ęĀసం"
      },
      {
        "number": 2,
        "text": "అъమĕ"
      },
      {
        "number": 3,
        "text": "ęఘంсѕ"
      },
      {
        "number": 4,
        "text": "ƺĠక"
      }
    ],
    "correctOption": 3,
    "correctText": "ęఘంсѕ",
    "difficulty": "Not identified in source",
    "sourceText": "313. ‘శబȿƺశం’ పóęĆ అరȾం \n1) \nęĀసం \n2) \nఅъమĕ \n \n3) \nęఘంсѕ \n \n4) \nƺĠక"
  },
  {
    "id": 314,
    "printedNumber": 314,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "314. ‘üé! Ľėіభంకర కరం’ - ఈ Āకɇంǖ‘ కరం’ అƅ పóęĆ \nఅరȾం",
    "options": [
      {
        "number": 1,
        "text": "కъɁ"
      },
      {
        "number": 2,
        "text": "మనј"
      },
      {
        "number": 3,
        "text": "͚షȹం"
      },
      {
        "number": 4,
        "text": "ŷğ"
      }
    ],
    "correctOption": 4,
    "correctText": "ŷğ",
    "difficulty": "Not identified in source",
    "sourceText": "314. ‘üé! Ľėіభంకర కరం’ - ఈ Āకɇంǖ‘ కరం’ అƅ పóęĆ \nఅరȾం \n1) \nకъɁ \n2) \nమనј \n \n3) \n͚షȹం \n \n4) \nŷğ"
  },
  {
    "id": 315,
    "printedNumber": 315,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "315. ŷс కĢĈంŷ పъѓ ŷయѿడш. ఈ Āకɇంǖ ŷс అనä \n \na) Īу \n \nb) అనరɀం \n \nc) Ɗѓ",
    "options": [
      {
        "number": 1,
        "text": "a, b úʖƊ"
      },
      {
        "number": 2,
        "text": "b, c úʖƊ"
      },
      {
        "number": 3,
        "text": "a, c úʖƊ"
      },
      {
        "number": 4,
        "text": "a, b, c సЉనĤ"
      }
    ],
    "correctOption": 1,
    "correctText": "a, b úʖƊ",
    "difficulty": "Not identified in source",
    "sourceText": "315. ŷс కĢĈంŷ పъѓ ŷయѿడш. ఈ Āకɇంǖ ŷс అనä \n \na) Īу \n \nb) అనరɀం \n \nc) Ɗѓ \n \n1) \na, b úʖƊ \n \n2) \nb, c úʖƊ \n \n3) \na, c úʖƊ \n \n4) \na, b, c సЉనĤ"
  },
  {
    "id": 316,
    "printedNumber": 316,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "316. ‘ėటѕ’ పóęĆ పüɇయ పóѓ",
    "options": [
      {
        "number": 1,
        "text": "Ёరɇం, Аనɇం"
      },
      {
        "number": 2,
        "text": "తзȮవ, శĆȽ"
      },
      {
        "number": 3,
        "text": "శĆȽ, Ёరɇం"
      },
      {
        "number": 4,
        "text": "Ɠన, Аనɇం"
      }
    ],
    "correctOption": 3,
    "correctText": "శĆȽ, Ёరɇం",
    "difficulty": "Not identified in source",
    "sourceText": "316. ‘ėటѕ’ పóęĆ పüɇయ పóѓ \n \n1) \nЁరɇం, Аనɇం \n \n2) \nతзȮవ, శĆȽ \n \n3) \nశĆȽ, Ёరɇం \n \n4) \nƓన, Аనɇం"
  },
  {
    "id": 317,
    "printedNumber": 317,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "317. ‘అంతరంగం’ పóęĆ పüɇయ పóѓ",
    "options": [
      {
        "number": 1,
        "text": "Ʒరంగం, ǖపల"
      },
      {
        "number": 2,
        "text": "తరంగం, బయట"
      },
      {
        "number": 3,
        "text": "హృదయం, తరంగం"
      },
      {
        "number": 4,
        "text": "హృదయం, మనјɏ"
      }
    ],
    "correctOption": 4,
    "correctText": "హృదయం, మనјɏ",
    "difficulty": "Not identified in source",
    "sourceText": "317. ‘అంతరంగం’ పóęĆ పüɇయ పóѓ \n \n1) \nƷరంగం, ǖపల \n \n2) \nతరంగం, బయట \n \n3) \nహృదయం, తరంగం \n \n4) \nహృదయం, మనјɏ"
  },
  {
    "id": 318,
    "printedNumber": 318,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "318. ‘కలъ’ పóęĆ పüɇయ పóѓ",
    "options": [
      {
        "number": 1,
        "text": "అĈɁ, ęӐ"
      },
      {
        "number": 2,
        "text": "Ĥʇమం, పüʇమం"
      },
      {
        "number": 3,
        "text": "ѐదɀం, ǎё"
      },
      {
        "number": 4,
        "text": "రకȽం, ёĘరం"
      }
    ],
    "correctOption": 3,
    "correctText": "ѐదɀం, ǎё",
    "difficulty": "Not identified in source",
    "sourceText": "318. ‘కలъ’ పóęĆ పüɇయ పóѓ \n1) \nఅĈɁ, ęӐ \n2) \nĤʇమం, పüʇమం \n \n3) \nѐదɀం, ǎё \n \n4) \nరకȽం, ёĘరం"
  },
  {
    "id": 319,
    "printedNumber": 319,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "319. ‘úతంగя’ పóęĆ పüɇయ పóѓ",
    "options": [
      {
        "number": 1,
        "text": "కళʖం, ùరɇ"
      },
      {
        "number": 2,
        "text": "సĕ, óర"
      },
      {
        "number": 3,
        "text": "కĠ, ఏъй"
      },
      {
        "number": 4,
        "text": "తనѐу, зúёу"
      }
    ],
    "correctOption": 3,
    "correctText": "కĠ, ఏъй",
    "difficulty": "Not identified in source",
    "sourceText": "319. ‘úతంగя’ పóęĆ పüɇయ పóѓ \n \n1) \nకళʖం, ùరɇ \n \n2) \nసĕ, óర \n \n3) \nకĠ, ఏъй \n \n4) \nతనѐу, зúёу"
  },
  {
    "id": 320,
    "printedNumber": 320,
    "topic": "పదార్థాలు మరియు పర్యాయపదాలు",
    "stem": "320. ‘అబȿం’ పóęĆ పüɇయ పóѓ \n \na. Śందя \n \nb. సంవతɏరం \n \nc. ఏîė \n \nd. ఎద",
    "options": [
      {
        "number": 1,
        "text": "a, b సЉనĤ"
      },
      {
        "number": 2,
        "text": "b, c సЉనĤ"
      },
      {
        "number": 3,
        "text": "c, d సЉనĤ"
      },
      {
        "number": 4,
        "text": "b úʖƊ సЉనė"
      }
    ],
    "correctOption": 2,
    "correctText": "b, c సЉనĤ",
    "difficulty": "Not identified in source",
    "sourceText": "320. ‘అబȿం’ పóęĆ పüɇయ పóѓ \n \na. Śందя \n \nb. సంవతɏరం \n \nc. ఏîė \n \nd. ఎద \n1) \na, b సЉనĤ \n2) \nb, c సЉనĤ \n \n3) \nc, d సЉనĤ \n \n4) \nb úʖƊ సЉనė"
  },
  {
    "id": 321,
    "printedNumber": 321,
    "topic": "పర్యాయపదాలు",
    "stem": "321.  పüɇయపóలъ జతపరచంĒ",
    "options": [
      {
        "number": 1,
        "text": "ఈĚɏతя\na.  Āన, వృĦȸ"
      },
      {
        "number": 2,
        "text": "పథం\nb.  Βవ, óĠ"
      },
      {
        "number": 3,
        "text": "వరɎం\nc.  ƺĠక, ఆâంɕ"
      },
      {
        "number": 1,
        "text": "1 – a\n2 – b\n3 - c"
      },
      {
        "number": 2,
        "text": "1 – a\n2 – c\n3 - b"
      },
      {
        "number": 3,
        "text": "1 – c\n2 – a\n3 - b"
      },
      {
        "number": 4,
        "text": "1 – c\n2 – b\n3 - a"
      }
    ],
    "correctOption": 4,
    "correctText": "1 – c\n2 – b\n3 - a",
    "difficulty": "Not identified in source",
    "sourceText": "321.  పüɇయపóలъ జతపరచంĒ \n \n1) ఈĚɏతя  \na.  Āన, వృĦȸ \n \n2)పథం \n \nb.  Βవ, óĠ \n \n3) వరɎం \n \nc.  ƺĠక, ఆâంɕ \n1) \n1 – a  \n2 – b  \n3 - c \n2) \n1 – a  \n2 – c  \n3 - b \n \n3) \n1 – c  \n2 – a  \n3 - b \n \n4) \n1 – c  \n2 – b  \n3 - a"
  },
  {
    "id": 322,
    "printedNumber": 322,
    "topic": "పర్యాయపదాలు",
    "stem": "322. అంబరяѓ, వăɓѓ అƅ పüɇయపóѓ కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "తలɂяѓ"
      },
      {
        "number": 2,
        "text": "వసనяѓ"
      },
      {
        "number": 3,
        "text": "శయɇѓ"
      },
      {
        "number": 4,
        "text": "పёыѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "వసనяѓ",
    "difficulty": "Not identified in source",
    "sourceText": "322. అంబరяѓ, వăɓѓ అƅ పüɇయపóѓ కĢĈన పదం \n1) \nతలɂяѓ \n \n2) \nవసనяѓ \n \n3) \nశయɇѓ \n \n4) \nపёыѓ"
  },
  {
    "id": 323,
    "printedNumber": 323,
    "topic": "పర్యాయపదాలు",
    "stem": "323. Ĥâసం, అĝవృėɀ అƅ పüɇయపóѓ కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "వęత"
      },
      {
        "number": 2,
        "text": "Ɓజం"
      },
      {
        "number": 3,
        "text": "ċతȽя"
      },
      {
        "number": 4,
        "text": "ఉనɁĕ"
      }
    ],
    "correctOption": 4,
    "correctText": "ఉనɁĕ",
    "difficulty": "Not identified in source",
    "sourceText": "323. Ĥâసం, అĝవృėɀ అƅ పüɇయపóѓ కĢĈన పదం \n1) \nవęత \n \n2) \nƁజం \n \n3) \nċతȽя \n \n4) \nఉనɁĕ"
  },
  {
    "id": 324,
    "printedNumber": 324,
    "topic": "పర్యాయపదాలు",
    "stem": "324. Ćంė పüɇయపóలъజతపరచంĒ \n \n1. Ųతనం, పñకం \n \na. పħĒ \n \n2. శńరం, ƃహం \n \nb. ŕంî \n \n3. బంäరం, కనకం  \nc. ఒడѓ",
    "options": [
      {
        "number": 1,
        "text": "1 – b\n2 – c\n3 - a"
      },
      {
        "number": 2,
        "text": "1 – a\n2 – c\n3 - b"
      },
      {
        "number": 3,
        "text": "1 – b\n2 – a\n3 - c"
      },
      {
        "number": 4,
        "text": "1 – c\n2 – a\n3 - b"
      }
    ],
    "correctOption": 1,
    "correctText": "1 – b\n2 – c\n3 - a",
    "difficulty": "Not identified in source",
    "sourceText": "324. Ćంė పüɇయపóలъజతపరచంĒ \n \n1. Ųతనం, పñకం \n \na. పħĒ \n \n2. శńరం, ƃహం \n \nb. ŕంî \n \n3. బంäరం, కనకం  \nc. ఒడѓ \n1) \n1 – b  \n2 – c  \n3 - a \n2) \n1 – a  \n2 – c  \n3 - b \n \n3) \n1 – b  \n2 – a  \n3 - c \n \n4) \n1 – c  \n2 – a  \n3 - b"
  },
  {
    "id": 325,
    "printedNumber": 325,
    "topic": "పర్యాయపదాలు",
    "stem": "325. హృదయం, మనјɏ అƅ పüɇయపóѓ కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "Ĥహంగం"
      },
      {
        "number": 2,
        "text": "అంతరంగం"
      },
      {
        "number": 3,
        "text": "âёణɇం"
      },
      {
        "number": 4,
        "text": "Җёహం"
      }
    ],
    "correctOption": 2,
    "correctText": "అంతరంగం",
    "difficulty": "Not identified in source",
    "sourceText": "325. హృదయం, మనјɏ అƅ పüɇయపóѓ కĢĈన పదం \n1) \nĤహంగం \n \n2) \nఅంతరంగం \n \n3) \nâёణɇం \n \n4) \nҖёహం"
  },
  {
    "id": 326,
    "printedNumber": 326,
    "topic": "పర్యాయపదాలు",
    "stem": "326.  ‘నయనం’ పóęĆ పüɇయ పóѓ",
    "options": [
      {
        "number": 1,
        "text": "ƓɁహం, œĢĞ"
      },
      {
        "number": 2,
        "text": "గరɌం, ƪగё"
      },
      {
        "number": 3,
        "text": "సరɌం, సúపȽం"
      },
      {
        "number": 4,
        "text": "కъɁ, ƅʖం"
      }
    ],
    "correctOption": 4,
    "correctText": "కъɁ, ƅʖం",
    "difficulty": "Not identified in source",
    "sourceText": "326.  ‘నయనం’ పóęĆ పüɇయ పóѓ \n1) \nƓɁహం, œĢĞ \n2) \nగరɌం, ƪగё \n \n3) \nసరɌం, సúపȽం \n \n4) \nకъɁ, ƅʖం"
  },
  {
    "id": 327,
    "printedNumber": 327,
    "topic": "పర్యాయపదాలు",
    "stem": "327. ‘Ĥజయం’ అƅ పóęĆ పüɇయ పóѓ",
    "options": [
      {
        "number": 1,
        "text": "ఆశ, ƺĠక"
      },
      {
        "number": 2,
        "text": "Őѓы, జయం"
      },
      {
        "number": 3,
        "text": "మనј, హృదయం"
      },
      {
        "number": 4,
        "text": "јĀసన, పĠమళం"
      }
    ],
    "correctOption": 2,
    "correctText": "Őѓы, జయం",
    "difficulty": "Not identified in source",
    "sourceText": "327. ‘Ĥజయం’ అƅ పóęĆ పüɇయ పóѓ \n \n1) \nఆశ, ƺĠక \n \n2) \nŐѓы, జయం \n \n3) \nమనј, హృదయం \n \n4) \nјĀసన, పĠమళం"
  },
  {
    "id": 328,
    "printedNumber": 328,
    "topic": "పర్యాయపదాలు",
    "stem": "328. ‘రహసɇం’ అƅ పóęĆ పüɇయపóѓ",
    "options": [
      {
        "number": 1,
        "text": "йсȸ, మరɆం"
      },
      {
        "number": 2,
        "text": "ʿంతం, ʛƃశం"
      },
      {
        "number": 3,
        "text": "యతɁం, సõɁహం"
      },
      {
        "number": 4,
        "text": "ఆకృĕ, కలɂన"
      }
    ],
    "correctOption": 1,
    "correctText": "йсȸ, మరɆం",
    "difficulty": "Not identified in source",
    "sourceText": "328. ‘రహసɇం’ అƅ పóęĆ పüɇయపóѓ \n \n1) \nйсȸ, మరɆం \n \n2) \nʿంతం, ʛƃశం \n \n3) \nయతɁం, సõɁహం \n \n4) \nఆకృĕ, కలɂన"
  },
  {
    "id": 329,
    "printedNumber": 329,
    "topic": "పర్యాయపదాలు",
    "stem": "329. కరяǉ అనɁం ĕంìя. హసȽяǖ éతక ƌఖѓంìğ. ఈ \nĀâɇలǖ గల పüɇయపóѓ",
    "options": [
      {
        "number": 1,
        "text": "కరя, హసȽя"
      },
      {
        "number": 2,
        "text": "అనɁం, éతకం"
      },
      {
        "number": 3,
        "text": "అనɁం, ƌఖѓ"
      },
      {
        "number": 4,
        "text": "కరя, éతకం"
      }
    ],
    "correctOption": 1,
    "correctText": "కరя, హసȽя",
    "difficulty": "Not identified in source",
    "sourceText": "329. కరяǉ అనɁం ĕంìя. హసȽяǖ éతక ƌఖѓంìğ. ఈ \nĀâɇలǖ గల పüɇయపóѓ \n \n1) \nకరя, హసȽя \n \n2) \nఅనɁం, éతకం \n \n3) \nఅనɁం, ƌఖѓ \n \n4) \nకరя, éతకం"
  },
  {
    "id": 330,
    "printedNumber": 330,
    "topic": "పర్యాయపదాలు",
    "stem": "330. తĢɊదంѧలз ĚలɊѓ ఆసüä ఉంîĢ. Ţదȿతనంǖ ĚలɊƎ \nఆôరం. ఈ Āâɇలǖę పüɇయపóѓ",
    "options": [
      {
        "number": 1,
        "text": "తĢɊదంѧѓ, Ţదȿతనం"
      },
      {
        "number": 2,
        "text": "ఆసü, ఆôరం"
      },
      {
        "number": 3,
        "text": "తĢɊదంѧѓ, ĚలɊѓ"
      },
      {
        "number": 4,
        "text": "ĚలɊѓ, Ţదȿతనం"
      }
    ],
    "correctOption": 2,
    "correctText": "ఆసü, ఆôరం",
    "difficulty": "Not identified in source",
    "sourceText": "330. తĢɊదంѧలз ĚలɊѓ ఆసüä ఉంîĢ. Ţదȿతనంǖ ĚలɊƎ \nఆôరం. ఈ Āâɇలǖę పüɇయపóѓ \n1) \nతĢɊదంѧѓ, Ţదȿతనం \n2) \nఆసü, ఆôరం \n \n3) \nతĢɊదంѧѓ, ĚలɊѓ \n \n4) \nĚలɊѓ, Ţదȿతనం"
  },
  {
    "id": 331,
    "printedNumber": 331,
    "topic": "నానార్థాలు",
    "stem": "331. Ƽѕ, ఆѕ, Ƅъѕ అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "పüɇయపóѓ"
      },
      {
        "number": 2,
        "text": "ʛకృĕ - Ĥకృцѓ"
      },
      {
        "number": 3,
        "text": "õõüȾѓ"
      },
      {
        "number": 4,
        "text": "öĠùĦకపóѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "పüɇయపóѓ",
    "difficulty": "Not identified in source",
    "sourceText": "331. Ƽѕ, ఆѕ, Ƅъѕ అƅĤ \n1) \nపüɇయపóѓ \n \n2) \nʛకృĕ - Ĥకృцѓ \n \n3) \nõõüȾѓ \n \n4) \nöĠùĦకపóѓ"
  },
  {
    "id": 332,
    "printedNumber": 332,
    "topic": "నానార్థాలు",
    "stem": "332. పёѓ, ఒёѓ అƅ పóలз సúõరȾక పదం",
    "options": [
      {
        "number": 1,
        "text": "ŋɓѓ"
      },
      {
        "number": 2,
        "text": "üɕјѓ"
      },
      {
        "number": 3,
        "text": "ఇతёѓ"
      },
      {
        "number": 4,
        "text": "öమёѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఇతёѓ",
    "difficulty": "Not identified in source",
    "sourceText": "332. పёѓ, ఒёѓ అƅ పóలз సúõరȾక పదం \n \n1) \nŋɓѓ \n \n2) \nüɕјѓ \n \n3) \nఇతёѓ \n \n4) \nöమёѓ"
  },
  {
    "id": 333,
    "printedNumber": 333,
    "topic": "నానార్థాలు",
    "stem": "333. øలɇం, ċనɁతనం పóలз పüɇయపదం",
    "options": [
      {
        "number": 1,
        "text": "వశం"
      },
      {
        "number": 2,
        "text": "Ўశవం"
      },
      {
        "number": 3,
        "text": "తёణం"
      },
      {
        "number": 4,
        "text": "зшరగ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ўశవం",
    "difficulty": "Not identified in source",
    "sourceText": "333. øలɇం, ċనɁతనం పóలз పüɇయపదం \n1) \nవశం \n \n2) \nЎశవం \n \n3) \nతёణం \n \n4) \nзшరగ"
  },
  {
    "id": 334,
    "printedNumber": 334,
    "topic": "నానార్థాలు",
    "stem": "334. ‘పіѕ’ అƅ పóęĆ పüɇయపóѓ",
    "options": [
      {
        "number": 1,
        "text": "అĈɁ, ęӐ"
      },
      {
        "number": 2,
        "text": "శńరం, తъѕ"
      },
      {
        "number": 3,
        "text": "శѪѕ, ĤǔĘ"
      },
      {
        "number": 4,
        "text": "జంцѕ, పసరం"
      }
    ],
    "correctOption": 4,
    "correctText": "జంцѕ, పసరం",
    "difficulty": "Not identified in source",
    "sourceText": "334. ‘పіѕ’ అƅ పóęĆ పüɇయపóѓ \n1) \nఅĈɁ, ęӐ \n2) \nశńరం, తъѕ \n \n3) \nశѪѕ, ĤǔĘ \n \n4) \nజంцѕ, పసరం"
  },
  {
    "id": 335,
    "printedNumber": 335,
    "topic": "నానార్థాలు",
    "stem": "335. ‘мకȮѓ’ పóęĆ పüɇయపóѓ",
    "options": [
      {
        "number": 1,
        "text": "Āనѓ, వüɎѓ"
      },
      {
        "number": 2,
        "text": "నɕʺѓ, ñరѓ"
      },
      {
        "number": 3,
        "text": "ƺĠకѓ, Āంఛѓ"
      },
      {
        "number": 4,
        "text": "పంటѓ, ƪþѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "నɕʺѓ, ñరѓ",
    "difficulty": "Not identified in source",
    "sourceText": "335. ‘мకȮѓ’ పóęĆ పüɇయపóѓ \n1) \nĀనѓ, వüɎѓ \n2) \nనɕʺѓ, ñరѓ \n \n3) \nƺĠకѓ, Āంఛѓ \n \n4) \nపంటѓ, ƪþѓ"
  },
  {
    "id": 336,
    "printedNumber": 336,
    "topic": "నానార్థాలు",
    "stem": "336. ƅъ üħన Ǝఖз ú ƓɁĨцüѓ ఉతȽరం üħంė. ఈ \nĀకɇంǖę పüɇయపóѓ",
    "options": [
      {
        "number": 1,
        "text": "ƅъ, ƓɁĨцüѓ"
      },
      {
        "number": 2,
        "text": "ƅъ, üħన"
      },
      {
        "number": 3,
        "text": "Ǝఖ, ఉతȽరం"
      },
      {
        "number": 4,
        "text": "ƓɁĨцüѓ, üħంė"
      }
    ],
    "correctOption": 3,
    "correctText": "Ǝఖ, ఉతȽరం",
    "difficulty": "Not identified in source",
    "sourceText": "336. ƅъ üħన Ǝఖз ú ƓɁĨцüѓ ఉతȽరం üħంė. ఈ \nĀకɇంǖę పüɇయపóѓ \n \n1) \nƅъ, ƓɁĨцüѓ \n \n2) \nƅъ, üħన \n \n3) \nƎఖ, ఉతȽరం \n \n4) \nƓɁĨцüѓ, üħంė"
  },
  {
    "id": 337,
    "printedNumber": 337,
    "topic": "నానార్థాలు",
    "stem": "337.  ‘язరం’ పóęĆ õõüȾѓ \na. మŪɊыѕɌ \nb. ఉöయం \nc. Ĥనయం \nd. అదȿం",
    "options": [
      {
        "number": 1,
        "text": "a úʖƊ సЉనė"
      },
      {
        "number": 2,
        "text": "b, c సЉనĤ"
      },
      {
        "number": 3,
        "text": "d úʖƊ సЉనė"
      },
      {
        "number": 4,
        "text": "a, d సЉనĤ"
      }
    ],
    "correctOption": 4,
    "correctText": "a, d సЉనĤ",
    "difficulty": "Not identified in source",
    "sourceText": "337.  ‘язరం’ పóęĆ õõüȾѓ \na. మŪɊыѕɌ \nb. ఉöయం \nc. Ĥనయం \nd. అదȿం \n \n1) \na úʖƊ సЉనė \n \n2) \nb, c సЉనĤ \n \n3) \nd úʖƊ సЉనė \n \n4) \na, d సЉనĤ"
  },
  {
    "id": 338,
    "printedNumber": 338,
    "topic": "నానార్థాలు",
    "stem": "338. ‘ఆసవం’ పóęĆ õõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "చʇం, శѪѕ"
      },
      {
        "number": 2,
        "text": "కѓɊ, ғƃš"
      },
      {
        "number": 3,
        "text": "ఆâశం, ఆటంకం"
      },
      {
        "number": 4,
        "text": "œğɇ, Ćరణం"
      }
    ],
    "correctOption": 2,
    "correctText": "కѓɊ, ғƃš",
    "difficulty": "Not identified in source",
    "sourceText": "338. ‘ఆసవం’ పóęĆ õõüȾѓ \n \n1) \nచʇం, శѪѕ \n \n2) \nకѓɊ, ғƃš \n \n3) \nఆâశం, ఆటంకం \n \n4) \nœğɇ, Ćరణం"
  },
  {
    "id": 339,
    "printedNumber": 339,
    "topic": "నానార్థాలు",
    "stem": "339. ‘మతం’ పóęĆ õõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "͏మ, šమɆė"
      },
      {
        "number": 2,
        "text": "ఆâశం, Ҟనɇం"
      },
      {
        "number": 3,
        "text": "ఎёы, బంäరం"
      },
      {
        "number": 4,
        "text": "అĝʿయం, āసɓం"
      }
    ],
    "correctOption": 4,
    "correctText": "అĝʿయం, āసɓం",
    "difficulty": "Not identified in source",
    "sourceText": "339. ‘మతం’ పóęĆ õõüȾѓ \n1) \n͏మ, šమɆė \n2) \nఆâశం, Ҟనɇం \n \n3) \nఎёы, బంäరం \n \n4) \nఅĝʿయం, āసɓం"
  },
  {
    "id": 340,
    "printedNumber": 340,
    "topic": "నానార్థాలు",
    "stem": "340. ‘úట’ పóęĆ õõüȾѓ \na. పѓз \nb. ęంద \nc. ఖడȰя \nd. పĩ",
    "options": [
      {
        "number": 1,
        "text": "a, b, d సЉనĤ"
      },
      {
        "number": 2,
        "text": "a, c úʖƊ సЉనĤ"
      },
      {
        "number": 3,
        "text": "a, b  సЉనĤ"
      },
      {
        "number": 4,
        "text": "అĽɁ సЉనĤ"
      }
    ],
    "correctOption": 3,
    "correctText": "a, b  సЉనĤ",
    "difficulty": "Not identified in source",
    "sourceText": "340. ‘úట’ పóęĆ õõüȾѓ \na. పѓз \nb. ęంద \nc. ఖడȰя \nd. పĩ \n \n1) \na, b, d సЉనĤ \n \n2) \na, c úʖƊ సЉనĤ \n \n3) \na, b  సЉనĤ \n \n4) \nఅĽɁ సЉనĤ"
  },
  {
    "id": 341,
    "printedNumber": 341,
    "topic": "నానార్థాలు",
    "stem": "341. ‘ఆу’ పóęĆ õõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "పѓз, నĠȽంм"
      },
      {
        "number": 2,
        "text": "ōరం, Ĥధం"
      },
      {
        "number": 3,
        "text": "ఆ҄Ć, óĠ"
      },
      {
        "number": 4,
        "text": "ƃశя, üజɇя"
      }
    ],
    "correctOption": 1,
    "correctText": "పѓз, నĠȽంм",
    "difficulty": "Not identified in source",
    "sourceText": "341. ‘ఆу’ పóęĆ õõüȾѓ \n1) \nపѓз, నĠȽంм \n2) \nōరం, Ĥధం \n \n3) \nఆ҄Ć, óĠ \n \n4) \nƃశя, üజɇя"
  },
  {
    "id": 342,
    "printedNumber": 342,
    "topic": "నానార్థాలు",
    "stem": "342. ‘మĕ’ పóęĆ õõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "ыణɇం, õɇయం, ధరɆం"
      },
      {
        "number": 2,
        "text": "ûగం, úట, ыణɇం"
      },
      {
        "number": 3,
        "text": "эėɀ, తలы, ఇచȴ"
      },
      {
        "number": 4,
        "text": "తĢɊ, దయ, ƺĠక"
      }
    ],
    "correctOption": 3,
    "correctText": "эėɀ, తలы, ఇచȴ",
    "difficulty": "Not identified in source",
    "sourceText": "342. ‘మĕ’ పóęĆ õõüȾѓ \n1) \nыణɇం, õɇయం, ధరɆం  \n2) \nûగం, úట, ыణɇం \n \n3) \nэėɀ, తలы, ఇచȴ \n \n4) \nతĢɊ, దయ, ƺĠక"
  },
  {
    "id": 343,
    "printedNumber": 343,
    "topic": "నానార్థాలు",
    "stem": "343. ʛюѕ, ĥѕу అƅ õõüȾѓ కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "ఫలం"
      },
      {
        "number": 2,
        "text": "Ĥюу"
      },
      {
        "number": 3,
        "text": "దళం"
      },
      {
        "number": 4,
        "text": "కъ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ĥюу",
    "difficulty": "Not identified in source",
    "sourceText": "343. ʛюѕ, ĥѕу అƅ õõüȾѓ కĢĈన పదం \n1) \nఫలం \n \n2) \nĤюу \n \n3) \nదళం \n \n4) \nకъ"
  },
  {
    "id": 344,
    "printedNumber": 344,
    "topic": "నానార్థాలు",
    "stem": "344. Ĥధం, ఆ҄Ī, óĠ అƅĤ õõüȾѓä కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "óహం"
      },
      {
        "number": 2,
        "text": "ఎండ"
      },
      {
        "number": 3,
        "text": "éడ"
      },
      {
        "number": 4,
        "text": "âలం"
      }
    ],
    "correctOption": 3,
    "correctText": "éడ",
    "difficulty": "Not identified in source",
    "sourceText": "344. Ĥధం, ఆ҄Ī, óĠ అƅĤ õõüȾѓä కĢĈన పదం \n1) \nóహం \n \n2) \nఎండ \n \n3) \néడ \n \n4) \nâలం"
  },
  {
    "id": 345,
    "printedNumber": 345,
    "topic": "నానార్థాలు",
    "stem": "345. õõüȾలъ జతపరచంĒ \n \n1. ғęక \na. యతɁం, సõɁహం \n \n2. öш \nb.  зшё, ఆĀసం \n \n3. јతüం \nc. ఏ úʖం, ఏ ƖంœЇõ",
    "options": [
      {
        "number": 1,
        "text": "1 –c\n2 – b\n3 - a"
      },
      {
        "number": 2,
        "text": "1 – a\n2 – b\n3 - c"
      },
      {
        "number": 3,
        "text": "1 – b\n2 – c\n3 - a"
      },
      {
        "number": 4,
        "text": "1 – a\n2 – c\n3 - b"
      }
    ],
    "correctOption": 2,
    "correctText": "1 – a\n2 – b\n3 - c",
    "difficulty": "Not identified in source",
    "sourceText": "345. õõüȾలъ జతపరచంĒ \n \n1. ғęక \na. యతɁం, సõɁహం \n \n2. öш \nb.  зшё, ఆĀసం \n \n3. јతüం \nc. ఏ úʖం, ఏ ƖంœЇõ \n1) \n1 –c  \n2 – b  \n3 - a \n2) \n1 – a  \n2 – b  \n3 - c \n \n3) \n1 – b  \n2 – c  \n3 - a \n \n4) \n1 – a  \n2 – c  \n3 - b"
  },
  {
    "id": 346,
    "printedNumber": 346,
    "topic": "నానార్థాలు",
    "stem": "346. õõüȾలъ జతపరచంĒ \n \n1. яę, తĈనė \na. Ěāచం \n \n2. ͏తం, ĚĢɊ  \nb. ăщѕ \n \n3. సҗహం, ęĘ \nc. ęకరం",
    "options": [
      {
        "number": 1,
        "text": "1 – a\n2 – b\n3 - c"
      },
      {
        "number": 2,
        "text": "1 – b\n2 – c\n3 - a"
      },
      {
        "number": 3,
        "text": "1 – c\n2 – a\n3 - b"
      },
      {
        "number": 4,
        "text": "1 – b\n2 –a\n3 - c"
      }
    ],
    "correctOption": 4,
    "correctText": "1 – b\n2 –a\n3 - c",
    "difficulty": "Not identified in source",
    "sourceText": "346. õõüȾలъ జతపరచంĒ \n \n1. яę, తĈనė \na. Ěāచం \n \n2. ͏తం, ĚĢɊ  \nb. ăщѕ \n \n3. సҗహం, ęĘ \nc. ęకరం \n1) \n1 – a  \n2 – b  \n3 - c \n2) \n1 – b  \n2 – c  \n3 - a \n \n3) \n1 – c  \n2 – a  \n3 - b \n \n4) \n1 – b  \n2 –a  \n3 - c"
  },
  {
    "id": 347,
    "printedNumber": 347,
    "topic": "నానార్థాలు",
    "stem": "347. úనѕу, అёȵъу అƅ õõüȾѓ కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "నёу"
      },
      {
        "number": 2,
        "text": "ధరɆం"
      },
      {
        "number": 3,
        "text": "వంశం"
      },
      {
        "number": 4,
        "text": "ఆశ"
      }
    ],
    "correctOption": 1,
    "correctText": "నёу",
    "difficulty": "Not identified in source",
    "sourceText": "347. úనѕу, అёȵъу అƅ õõüȾѓ కĢĈన పదం \n1) \nనёу \n2) \nధరɆం \n \n3) \nవంశం \n \n4) \nఆశ"
  },
  {
    "id": 348,
    "printedNumber": 348,
    "topic": "నానార్థాలు",
    "stem": "348. ùĂ ùäలǖ ˏయ ఒకĐ. ఈ Āకɇంǖ ˏయ అƅ పóęĆ \nõõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "పę ఆరంభя, ŷషȸ"
      },
      {
        "number": 2,
        "text": "సమయం, నѓы"
      },
      {
        "number": 3,
        "text": "ఓёɂ, ҖĞ"
      },
      {
        "number": 4,
        "text": "ఉӐ, âరя"
      }
    ],
    "correctOption": 1,
    "correctText": "పę ఆరంభя, ŷషȸ",
    "difficulty": "Not identified in source",
    "sourceText": "348. ùĂ ùäలǖ ˏయ ఒకĐ. ఈ Āకɇంǖ ˏయ అƅ పóęĆ \nõõüȾѓ \n \n1) \nపę ఆరంభя, ŷషȸ \n \n2) \nసమయం, నѓы \n \n3) \nఓёɂ, ҖĞ \n \n4) \nఉӐ, âరя"
  },
  {
    "id": 349,
    "printedNumber": 349,
    "topic": "నానార్థాలు",
    "stem": "349. ‘ĞѪу’ పóęĆ õõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "నė, Ľё"
      },
      {
        "number": 2,
        "text": "ыణɇం, õɇయం"
      },
      {
        "number": 3,
        "text": "ƓɁĨцу, Ҡёɇу"
      },
      {
        "number": 4,
        "text": "ƃశం, йёȽ"
      }
    ],
    "correctOption": 3,
    "correctText": "ƓɁĨцу, Ҡёɇу",
    "difficulty": "Not identified in source",
    "sourceText": "349. ‘ĞѪу’ పóęĆ õõüȾѓ \n \n1) \nనė, Ľё \n \n2) \nыణɇం, õɇయం \n \n3) \nƓɁĨцу, Ҡёɇу \n \n4) \nƃశం, йёȽ"
  },
  {
    "id": 350,
    "printedNumber": 350,
    "topic": "నానార్థాలు",
    "stem": "350. ‘ јధ’ పóęĆ õõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "అమృతం, јనɁం"
      },
      {
        "number": 2,
        "text": "йĒ, ఇѓɊ"
      },
      {
        "number": 3,
        "text": "ёĘరం, ఎёы"
      },
      {
        "number": 4,
        "text": "ĪĠȽ, Ǡరవం"
      }
    ],
    "correctOption": 1,
    "correctText": "అమృతం, јనɁం",
    "difficulty": "Not identified in source",
    "sourceText": "350. ‘ јధ’ పóęĆ õõüȾѓ \n \n1) \nఅమృతం, јనɁం \n \n2) \nйĒ, ఇѓɊ \n \n3) \nёĘరం, ఎёы \n \n4) \nĪĠȽ, Ǡరవం"
  },
  {
    "id": 351,
    "printedNumber": 351,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "351. Īу, అపâరం, తӐ అƅ õõüȾѓ గల పదం",
    "options": [
      {
        "number": 1,
        "text": "úĢనɇం"
      },
      {
        "number": 2,
        "text": "అవయవం"
      },
      {
        "number": 3,
        "text": "ęంద"
      },
      {
        "number": 4,
        "text": "ƌఖ"
      }
    ],
    "correctOption": 1,
    "correctText": "úĢనɇం",
    "difficulty": "Not identified in source",
    "sourceText": "351. Īу, అపâరం, తӐ అƅ õõüȾѓ గల పదం \n1) \núĢనɇం \n2) \nఅవయవం \n \n3) \nęంద \n \n4) \nƌఖ"
  },
  {
    "id": 352,
    "printedNumber": 352,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "352. అంగం, అవయవం, ùగం అƅ õõüȾѓ గల పదం",
    "options": [
      {
        "number": 1,
        "text": "పĩ"
      },
      {
        "number": 2,
        "text": "йణя"
      },
      {
        "number": 3,
        "text": "శńరం"
      },
      {
        "number": 4,
        "text": "ఆôరం"
      }
    ],
    "correctOption": 3,
    "correctText": "శńరం",
    "difficulty": "Not identified in source",
    "sourceText": "352. అంగం, అవయవం, ùగం అƅ õõüȾѓ గల పదం \n1) \nపĩ  \n \n2) \nйణя \n \n3) \nశńరం \n \n4) \nఆôరం"
  },
  {
    "id": 353,
    "printedNumber": 353,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "353. జలя, పసё అƅ õõüȾѓ గల పదం",
    "options": [
      {
        "number": 1,
        "text": "͚షȹం"
      },
      {
        "number": 2,
        "text": "Ūసɏ"
      },
      {
        "number": 3,
        "text": "రసя"
      },
      {
        "number": 4,
        "text": "øస"
      }
    ],
    "correctOption": 3,
    "correctText": "రసя",
    "difficulty": "Not identified in source",
    "sourceText": "353. జలя, పసё అƅ õõüȾѓ గల పదం \n \n1) \n͚షȹం \n \n2) \nŪసɏ \n \n3) \nరసя \n \n4) \nøస"
  },
  {
    "id": 354,
    "printedNumber": 354,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "354. ‘ƅęకȮడ зశలం’ ఈ Āకɇంǖ ‘зశలం’ అƅ పóęĆ õõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "ƕమం, ƅёɂ"
      },
      {
        "number": 2,
        "text": "Ľడ, ǎĢక"
      },
      {
        "number": 3,
        "text": "Ɠవ, Ĥనయం"
      },
      {
        "number": 4,
        "text": "҄ы, కъɁ"
      }
    ],
    "correctOption": 1,
    "correctText": "ƕమం, ƅёɂ",
    "difficulty": "Not identified in source",
    "sourceText": "354. ‘ƅęకȮడ зశలం’ ఈ Āకɇంǖ ‘зశలం’ అƅ పóęĆ õõüȾѓ \n1) \nƕమం, ƅёɂ \n \n2) \nĽడ, ǎĢక \n \n3) \nƓవ, Ĥనయం \n \n4) \n҄ы, కъɁ"
  },
  {
    "id": 355,
    "printedNumber": 355,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "355. ధనя, âరణం, శøȿరȾం అƅ õõüȾѓ కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "అĘâరం"
      },
      {
        "number": 2,
        "text": "అరɀя"
      },
      {
        "number": 3,
        "text": "âంచనం"
      },
      {
        "number": 4,
        "text": "అవâశం"
      }
    ],
    "correctOption": 2,
    "correctText": "అరɀя",
    "difficulty": "Not identified in source",
    "sourceText": "355. ధనя, âరణం, శøȿరȾం అƅ õõüȾѓ కĢĈన పదం \n1) \nఅĘâరం \n2) \nఅరɀя \n \n3) \nâంచనం \n \n4) \nఅవâశం"
  },
  {
    "id": 356,
    "printedNumber": 356,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "356. ‘సంǉషం’ పóęĆ õõüȾѓ",
    "options": [
      {
        "number": 1,
        "text": "ఆనందం, తృĚȽ, Ёరɇం"
      },
      {
        "number": 2,
        "text": "అъüగం, ఉñɏహం, తహతహ"
      },
      {
        "number": 3,
        "text": "Ľĕ, మృшѕ, þభя"
      },
      {
        "number": 4,
        "text": "ఉöయం, âరణం, ఊĄ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆనందం, తృĚȽ, Ёరɇం",
    "difficulty": "Not identified in source",
    "sourceText": "356. ‘సంǉషం’ పóęĆ õõüȾѓ \n1) \nఆనందం, తృĚȽ, Ёరɇం \n2) \nఅъüగం, ఉñɏహం, తహతహ  \n \n3) \nĽĕ, మృшѕ, þభя \n \n4) \nఉöయం, âరణం, ఊĄ"
  },
  {
    "id": 357,
    "printedNumber": 357,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "357. ƪటȸ, ѐదɀం అƅ õõüȾѓ కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "మэɄ"
      },
      {
        "number": 2,
        "text": "ఉదరя"
      },
      {
        "number": 3,
        "text": "Ĥõɇసя"
      },
      {
        "number": 4,
        "text": "అమృతం"
      }
    ],
    "correctOption": 2,
    "correctText": "ఉదరя",
    "difficulty": "Not identified in source",
    "sourceText": "357. ƪటȸ, ѐదɀం అƅ õõüȾѓ కĢĈన పదం \n \n1) \nమэɄ \n \n2) \nఉదరя \n \n3) \nĤõɇసя \n \n4) \nఅమృతం"
  },
  {
    "id": 358,
    "printedNumber": 358,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "358. ‘Ļęŷ అలంకĠంపబушё’ అƅ ѕɇతɂతȽɹరȾం కĢĈన పóęɁ \nйĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "పǓదя"
      },
      {
        "number": 2,
        "text": "వјధ"
      },
      {
        "number": 3,
        "text": "јకృతం"
      },
      {
        "number": 4,
        "text": "язరం"
      }
    ],
    "correctOption": 4,
    "correctText": "язరం",
    "difficulty": "Not identified in source",
    "sourceText": "358. ‘Ļęŷ అలంకĠంపబушё’ అƅ ѕɇతɂతȽɹరȾం కĢĈన పóęɁ \nйĠȽంచంĒ \n \n1) \nపǓదя \n \n2) \nవјధ \n \n3) \nјకృతం \n \n4) \nязరం"
  },
  {
    "id": 359,
    "printedNumber": 359,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "359. ‘ʘవЇ ѐంуనė’ అƅ ѕɇతɂతȽɹరȾం కĢĈన పóęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "öѓ"
      },
      {
        "number": 2,
        "text": "ఉదకం"
      },
      {
        "number": 3,
        "text": "పǓదя"
      },
      {
        "number": 4,
        "text": "వјధ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఉదకం",
    "difficulty": "Not identified in source",
    "sourceText": "359. ‘ʘవЇ ѐంуనė’ అƅ ѕɇతɂతȽɹరȾం కĢĈన పóęɁ йĠȽంచంĒ \n \n1) \nöѓ \n \n2) \nఉదకం \n \n3) \nపǓదя \n \n4) \nవјధ"
  },
  {
    "id": 360,
    "printedNumber": 360,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "360. ఈ Ćంė పóలъ సЉన ѕɇతɂతȽɹüȾలǉ జత పరచంĒ. \n \n1. ధరɆం \n \na. గృĄęɁ ధĠంŷė \n \n2. ǁɇతɏɳ \n \nb. ıѕĔȼ öశం ъంċ ĤĒĚంŷė \n \n3. ыరంˡ \n \nc. ʛâశя కలė \n \n4. ǒɕం \n \nd. ĤశɌяъ ధĠంмనė",
    "options": [
      {
        "number": 1,
        "text": "1 – d\n2 – b\n3 – a\n4 - c"
      },
      {
        "number": 2,
        "text": "1 – a\n2 – b\n3 – c\n4 -d"
      },
      {
        "number": 3,
        "text": "1 – a\n2 – d\n3 – c\n4 - b"
      },
      {
        "number": 4,
        "text": "1 – d\n2 – c\n3 – a\n4 - b"
      }
    ],
    "correctOption": 4,
    "correctText": "1 – d\n2 – c\n3 – a\n4 - b",
    "difficulty": "Not identified in source",
    "sourceText": "360. ఈ Ćంė పóలъ సЉన ѕɇతɂతȽɹüȾలǉ జత పరచంĒ. \n \n1. ధరɆం \n \na. గృĄęɁ ధĠంŷė \n \n2. ǁɇతɏɳ \n \nb. ıѕĔȼ öశం ъంċ ĤĒĚంŷė \n \n3. ыరంˡ \n \nc. ʛâశя కలė \n \n4. ǒɕం \n \nd. ĤశɌяъ ధĠంмనė \n1) \n1 – d  \n2 – b  \n3 – a  \n4 - c \n2) \n1 – a  \n2 – b  \n3 – c  \n4 -d \n \n3) \n1 – a  \n2 – d  \n3 – c  \n4 - b \n \n4) \n1 – d  \n2 – c  \n3 – a  \n4 - b"
  },
  {
    "id": 361,
    "printedNumber": 361,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "361. ‘юజగя’ పóęĆ ѕɇతɂతȽɹüȾęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "Ūసɏä ŷయబĒనė"
      },
      {
        "number": 2,
        "text": "зĐలяä ǎѕనė"
      },
      {
        "number": 3,
        "text": "తĢɊ కуыǖ ĕёйనė"
      },
      {
        "number": 4,
        "text": "సరɂяల వలన ŁĕƩంшనė"
      }
    ],
    "correctOption": 2,
    "correctText": "зĐలяä ǎѕనė",
    "difficulty": "Not identified in source",
    "sourceText": "361. ‘юజగя’ పóęĆ ѕɇతɂతȽɹüȾęɁ йĠȽంచంĒ \n \n1) \nŪసɏä ŷయబĒనė \n \n2) \nзĐలяä ǎѕనė \n \n3) \nతĢɊ కуыǖ ĕёйనė \n \n4) \nసరɂяల వలన ŁĕƩంшనė"
  },
  {
    "id": 362,
    "printedNumber": 362,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "362. ‘హరɇɕం’ పóęĆ ѕɇతɂతȽɹరȾం йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "మనјъ హĠంмనė"
      },
      {
        "number": 2,
        "text": "çсన ѿѐనė"
      },
      {
        "number": 3,
        "text": "కĚల వరȼя గల కъɁѓ గలė"
      },
      {
        "number": 4,
        "text": "Ūసɏä ŷయబĒనė"
      }
    ],
    "correctOption": 3,
    "correctText": "కĚల వరȼя గల కъɁѓ గలė",
    "difficulty": "Not identified in source",
    "sourceText": "362. ‘హరɇɕం’ పóęĆ ѕɇతɂతȽɹరȾం йĠȽంచంĒ \n1) \nమనјъ హĠంмనė \n2) \nçсన ѿѐనė \n \n3) \nకĚల వరȼя గల కъɁѓ గలė \n \n4) \nŪసɏä ŷయబĒనė"
  },
  {
    "id": 363,
    "printedNumber": 363,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "363. ‘మం˞’ అƅ పóęĆ ѕɇతɂతȽɹüȾęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "ыüణ ыёїу"
      },
      {
        "number": 2,
        "text": "మరణం Ǝę Āу"
      },
      {
        "number": 3,
        "text": "öపం ŷయę Āу"
      },
      {
        "number": 4,
        "text": "రహసɇяన âüɇǖచనя కలĀу"
      }
    ],
    "correctOption": 4,
    "correctText": "రహసɇяన âüɇǖచనя కలĀу",
    "difficulty": "Not identified in source",
    "sourceText": "363. ‘మం˞’ అƅ పóęĆ ѕɇతɂతȽɹüȾęɁ йĠȽంచంĒ \n1) \nыüణ ыёїу \n2) \nమరణం Ǝę Āу \n \n3) \nöపం ŷయę Āу \n \n4) \nరహసɇяన âüɇǖచనя కలĀу"
  },
  {
    "id": 364,
    "printedNumber": 364,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "364. ధüɆęɁ ఆచĠంŷĀу అƅ ѕɇతɂతȽɹరȾం కĢĈనė",
    "options": [
      {
        "number": 1,
        "text": "ôĠɆзу"
      },
      {
        "number": 2,
        "text": "óశరĖ"
      },
      {
        "number": 3,
        "text": "అĕĖ"
      },
      {
        "number": 4,
        "text": "ùసȮёу"
      }
    ],
    "correctOption": 1,
    "correctText": "ôĠɆзу",
    "difficulty": "Not identified in source",
    "sourceText": "364. ధüɆęɁ ఆచĠంŷĀу అƅ ѕɇతɂతȽɹరȾం కĢĈనė \n1) \nôĠɆзу \n \n2) \nóశరĖ \n \n3) \nఅĕĖ \n \n4) \nùసȮёу"
  },
  {
    "id": 365,
    "printedNumber": 365,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "365. ఈ Ćంė పóలъ ĀĐ ыɇతɂతɇüȾలǉ జత పరచంĒ \n \n1. Ҟёу \n \na. శరцȽనంш ыĐȸనė \n \n2. ùసȮёу  \nb. ǽరɇяъ ʛదĠɍంŷĀу  \n \n3. āరద \n \nc. âంĕę కѓగŹѐĀу",
    "options": [
      {
        "number": 1,
        "text": "1 – a\n2 – b\n3 – c"
      },
      {
        "number": 2,
        "text": "1 – c\n2 – b\n3 – a"
      },
      {
        "number": 3,
        "text": "1 – b\n2 – c\n3 – a"
      },
      {
        "number": 4,
        "text": "1 – a\n2 – c\n3 – b"
      }
    ],
    "correctOption": 3,
    "correctText": "1 – b\n2 – c\n3 – a",
    "difficulty": "Not identified in source",
    "sourceText": "365. ఈ Ćంė పóలъ ĀĐ ыɇతɂతɇüȾలǉ జత పరచంĒ \n \n1. Ҟёу \n \na. శరцȽనంш ыĐȸనė \n \n2. ùసȮёу  \nb. ǽరɇяъ ʛదĠɍంŷĀу  \n \n3. āరద \n \nc. âంĕę కѓగŹѐĀу \n1) \n1 – a  \n2 – b  \n3 – c \n2) \n1 – c  \n2 – b  \n3 – a \n \n3) \n1 – b  \n2 – c  \n3 – a \n \n4) \n1 – a  \n2 – c  \n3 – b"
  },
  {
    "id": 366,
    "printedNumber": 366,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "366. ‘నగరం’ అƅ పóęĆ ѕɇతɂతȽɹరȾя",
    "options": [
      {
        "number": 1,
        "text": "మనјę హĠంмనė"
      },
      {
        "number": 2,
        "text": "ʛâĥంмనė"
      },
      {
        "number": 3,
        "text": "సంǉషం కѓగŹѐనė"
      },
      {
        "number": 4,
        "text": "Ɩండల వŪ Ţదȿ Ţదȿ భవనяѓ కలė"
      }
    ],
    "correctOption": 4,
    "correctText": "Ɩండల వŪ Ţదȿ Ţదȿ భవనяѓ కలė",
    "difficulty": "Not identified in source",
    "sourceText": "366. ‘నగరం’ అƅ పóęĆ ѕɇతɂతȽɹరȾя \n \n1) \nమనјę హĠంмనė \n \n2) \nʛâĥంмనė \n \n3) \nసంǉషం కѓగŹѐనė \n \n4) \nƖండల వŪ Ţదȿ Ţదȿ భవనяѓ కలė"
  },
  {
    "id": 367,
    "printedNumber": 367,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "367. ఈ Ćంė పóలъ ĀĐ ѕɇతɂతȽతɇüȾలǉ జత పరచంĒ \n \n1. Ĥదɇъ అĠȾంмĀу \na. హరɆɹం \n \n2. çсన ѿѐనė  \nb. ĤóɇĠȾ \n \n3. మనјъ హĠంмనė \nc.  Ěకం",
    "options": [
      {
        "number": 1,
        "text": "1 – c\n2 – a\n3 – b"
      },
      {
        "number": 2,
        "text": "1 – b\n2 – c\n3 – a"
      },
      {
        "number": 3,
        "text": "1 – c\n2 – b\n3 – a"
      },
      {
        "number": 4,
        "text": "1 – a\n2 – b\n3 – c"
      }
    ],
    "correctOption": 2,
    "correctText": "1 – b\n2 – c\n3 – a",
    "difficulty": "Not identified in source",
    "sourceText": "367. ఈ Ćంė పóలъ ĀĐ ѕɇతɂతȽతɇüȾలǉ జత పరచంĒ \n \n1. Ĥదɇъ అĠȾంмĀу \na. హరɆɹం \n \n2. çсన ѿѐనė  \nb. ĤóɇĠȾ \n \n3. మనјъ హĠంмనė \nc.  Ěకం \n1) \n1 – c  \n2 – a  \n3 – b \n2) \n1 – b  \n2 – c  \n3 – a \n \n3) \n1 – c  \n2 – b  \n3 – a \n \n4) \n1 – a  \n2 – b  \n3 – c"
  },
  {
    "id": 368,
    "printedNumber": 368,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "368. ‘йёѕ దగȰర ʇమ పదɀĕǖ ƅёȳట’ అƅ ѕɇతɌతȽɹరȾం కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "అధɇయనя"
      },
      {
        "number": 2,
        "text": "తపя"
      },
      {
        "number": 3,
        "text": "Ĥѓâу"
      },
      {
        "number": 4,
        "text": "ƅరɂĠ"
      }
    ],
    "correctOption": 1,
    "correctText": "అధɇయనя",
    "difficulty": "Not identified in source",
    "sourceText": "368. ‘йёѕ దగȰర ʇమ పదɀĕǖ ƅёȳట’ అƅ ѕɇతɌతȽɹరȾం కĢĈన పదం \n1) \nఅధɇయనя \n2) \nతపя \n \n3) \nĤѓâу \n \n4) \nƅరɂĠ"
  },
  {
    "id": 369,
    "printedNumber": 369,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "369. ‘అĕĖ’ అƅ పóęĆ ѕɇతɂతȽɹరȾం",
    "options": [
      {
        "number": 1,
        "text": "Ĥదɇъ అĠɀంмĀу"
      },
      {
        "number": 2,
        "text": "ధüɆęɁ ఆచĠంŷĀу"
      },
      {
        "number": 3,
        "text": "ĕĖ ƮదЋన ęయúѓ Ǝзంî వŷȳĀу"
      },
      {
        "number": 4,
        "text": "ҖĞę ధĠంмĀу"
      }
    ],
    "correctOption": 3,
    "correctText": "ĕĖ ƮదЋన ęయúѓ Ǝзంî వŷȳĀу",
    "difficulty": "Not identified in source",
    "sourceText": "369. ‘అĕĖ’ అƅ పóęĆ ѕɇతɂతȽɹరȾం \n \n1) \nĤదɇъ అĠɀంмĀу \n \n2) \nధüɆęɁ ఆచĠంŷĀу \n \n3) \nĕĖ ƮదЋన ęయúѓ Ǝзంî వŷȳĀу \n \n4) \nҖĞę ధĠంмĀу"
  },
  {
    "id": 370,
    "printedNumber": 370,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "370. ‘óశరĖ’ పóęĆ ѕɇతɂతȽɹరȾం",
    "options": [
      {
        "number": 1,
        "text": "ǽరɇяъ ʛదĠɍంŷ Āу"
      },
      {
        "number": 2,
        "text": "âంĕę కѓగŹѐĀу"
      },
      {
        "number": 3,
        "text": "ధüɆęɁ ఆచĠంмĀу"
      },
      {
        "number": 4,
        "text": "దశరчę зúёу"
      }
    ],
    "correctOption": 4,
    "correctText": "దశరчę зúёу",
    "difficulty": "Not identified in source",
    "sourceText": "370. ‘óశరĖ’ పóęĆ ѕɇతɂతȽɹరȾం \n \n1) \nǽరɇяъ ʛదĠɍంŷ Āу \n \n2) \nâంĕę కѓగŹѐĀу \n \n3) \nధüɆęɁ ఆచĠంмĀу \n \n4) \nదశరчę зúёу"
  },
  {
    "id": 371,
    "printedNumber": 371,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "371. ‘ఉదĘ’ అƅ పóęĆ ѕɇతɂతȽɹరȾం.",
    "options": [
      {
        "number": 1,
        "text": "ఉదకяъ ధĠంмనė"
      },
      {
        "number": 2,
        "text": "నలɊę పరɌతя"
      },
      {
        "number": 3,
        "text": "బంäరం గరɅమంш కలė"
      },
      {
        "number": 4,
        "text": "మనјъ హĠంмనė"
      }
    ],
    "correctOption": 1,
    "correctText": "ఉదకяъ ధĠంмనė",
    "difficulty": "Not identified in source",
    "sourceText": "371. ‘ఉదĘ’ అƅ పóęĆ ѕɇతɂతȽɹరȾం. \n \n1) \nఉదకяъ ధĠంмనė \n \n2) \nనలɊę పరɌతя \n \n3) \nబంäరం గరɅమంш కలė \n \n4) \nమనјъ హĠంмనė"
  },
  {
    "id": 372,
    "printedNumber": 372,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "372. ‘ɖకృїȼę ǲѪу అęёшɀу’ ఈ Āకɇంǖ ǲѪу అƅ పóęĆ \nѕɇతɂతȽɹరȾం",
    "options": [
      {
        "number": 1,
        "text": "ʛజలз ʛюѕ"
      },
      {
        "number": 2,
        "text": "ыѪęĆ ыѪу"
      },
      {
        "number": 3,
        "text": "మంċ మనјɏ కలĀу"
      },
      {
        "number": 4,
        "text": "ʛజలъ âöуĀу"
      }
    ],
    "correctOption": 2,
    "correctText": "ыѪęĆ ыѪу",
    "difficulty": "Not identified in source",
    "sourceText": "372. ‘ɖకృїȼę ǲѪу అęёшɀу’ ఈ Āకɇంǖ ǲѪу అƅ పóęĆ \nѕɇతɂతȽɹరȾం \n1) \nʛజలз ʛюѕ \n2) \nыѪęĆ ыѪу \n \n3) \nమంċ మనјɏ కలĀу \n \n4) \nʛజలъ âöуĀу"
  },
  {
    "id": 373,
    "printedNumber": 373,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "373. ҖĞę öĢంмĀу (üо) అƅ ѕɇతɂతȽɹరȾం కĢĈన పóęɁ \nйĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "సõతъу"
      },
      {
        "number": 2,
        "text": "అనку"
      },
      {
        "number": 3,
        "text": "అమёу"
      },
      {
        "number": 4,
        "text": "Җöѓу"
      }
    ],
    "correctOption": 4,
    "correctText": "Җöѓу",
    "difficulty": "Not identified in source",
    "sourceText": "373. ҖĞę öĢంмĀу (üо) అƅ ѕɇతɂతȽɹరȾం కĢĈన పóęɁ \nйĠȽంచంĒ \n1) \nసõతъу \n \n2) \nఅనку \n \n3) \nఅమёу \n \n4) \nҖöѓу"
  },
  {
    "id": 374,
    "printedNumber": 374,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "374. పɕяѓ కలė అƅ ѕɇతɂతȽɹరȾం కĢĈన పదం",
    "options": [
      {
        "number": 1,
        "text": "Ĥúనం"
      },
      {
        "number": 2,
        "text": "పచȳ"
      },
      {
        "number": 3,
        "text": "పĩ"
      },
      {
        "number": 4,
        "text": "цŦɆద"
      }
    ],
    "correctOption": 3,
    "correctText": "పĩ",
    "difficulty": "Not identified in source",
    "sourceText": "374. పɕяѓ కలė అƅ ѕɇతɂతȽɹరȾం కĢĈన పదం \n \n1) \nĤúనం \n \n2) \nపచȳ \n \n3) \nపĩ \n \n4) \nцŦɆద"
  },
  {
    "id": 375,
    "printedNumber": 375,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "375. ‘йёѕъ ǠరĤంçĢ’ ఈ Āకɇంǖ йёѕ పóęĆ ѕɇతɂతȽɹరȾం",
    "options": [
      {
        "number": 1,
        "text": "శѪѕలъ జğంмĀу"
      },
      {
        "number": 2,
        "text": "Ɛóధɇయనం ŷħన Āу"
      },
      {
        "number": 3,
        "text": "Ƽѕలъ రĩంмĀу"
      },
      {
        "number": 4,
        "text": "అéȷనమƅ అంధâరяъ ŸėంмĀу"
      }
    ],
    "correctOption": 4,
    "correctText": "అéȷనమƅ అంధâరяъ ŸėంмĀу",
    "difficulty": "Not identified in source",
    "sourceText": "375. ‘йёѕъ ǠరĤంçĢ’ ఈ Āకɇంǖ йёѕ పóęĆ ѕɇతɂతȽɹరȾం \n1) \nశѪѕలъ జğంмĀу  \n \n2) \nƐóధɇయనం ŷħన Āу \n \n3) \nƼѕలъ రĩంмĀу \n \n4) \nఅéȷనమƅ అంధâరяъ ŸėంмĀу"
  },
  {
    "id": 376,
    "printedNumber": 376,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "376. ‘మరణం ƪంėంపęė’ అƅ ѕɇతɌతȽɹరȾం గల పదం",
    "options": [
      {
        "number": 1,
        "text": "ఉదకя"
      },
      {
        "number": 2,
        "text": "ǒɕం"
      },
      {
        "number": 3,
        "text": "అమృతం"
      },
      {
        "number": 4,
        "text": "öѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "అమృతం",
    "difficulty": "Not identified in source",
    "sourceText": "376. ‘మరణం ƪంėంపęė’ అƅ ѕɇతɌతȽɹరȾం గల పదం \n1) \nఉదకя \n2) \nǒɕం \n \n3) \nఅమృతం \n \n4) \nöѓ"
  },
  {
    "id": 377,
    "printedNumber": 377,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "377. ‘వరɎяలŷ ҖĞę తуыనė’ అƅ ѕɇతɂతȽɹరȾం గల పదం",
    "options": [
      {
        "number": 1,
        "text": "ăగరం"
      },
      {
        "number": 2,
        "text": "అచలя"
      },
      {
        "number": 3,
        "text": "Ɗఘం"
      },
      {
        "number": 4,
        "text": "ఛʖя"
      }
    ],
    "correctOption": 3,
    "correctText": "Ɗఘం",
    "difficulty": "Not identified in source",
    "sourceText": "377. ‘వరɎяలŷ ҖĞę తуыనė’ అƅ ѕɇతɂతȽɹరȾం గల పదం \n1) \năగరం \n2) \nఅచలя \n \n3) \nƊఘం \n \n4) \nఛʖя"
  },
  {
    "id": 378,
    "printedNumber": 378,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "378. ‘ĽĄరя’ పóęĆ ѕɇతɂతȽɹరȾం",
    "options": [
      {
        "number": 1,
        "text": "అĈɁŷ ĞĆȮĢ హĠంపబуనė"
      },
      {
        "number": 2,
        "text": "öనя ŷయబуనė"
      },
      {
        "number": 3,
        "text": "ĽĐę ఇмȳనė"
      },
      {
        "number": 4,
        "text": "బంäరя గరɅమంш కĢĈనė"
      }
    ],
    "correctOption": 1,
    "correctText": "అĈɁŷ ĞĆȮĢ హĠంపబуనė",
    "difficulty": "Not identified in source",
    "sourceText": "378. ‘ĽĄరя’ పóęĆ ѕɇతɂతȽɹరȾం \n \n1) \nఅĈɁŷ ĞĆȮĢ హĠంపబуనė \n \n2) \nöనя ŷయబуనė \n \n3) \nĽĐę ఇмȳనė  \n \n4) \nబంäరя గరɅమంш కĢĈనė"
  },
  {
    "id": 379,
    "printedNumber": 379,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "379. ‘Ĺరం’ అƅ పóęĆ Ĥకృĕ పదం",
    "options": [
      {
        "number": 1,
        "text": "తల"
      },
      {
        "number": 2,
        "text": "ĕర"
      },
      {
        "number": 3,
        "text": "దĠ"
      },
      {
        "number": 4,
        "text": "దѕɌ"
      }
    ],
    "correctOption": 3,
    "correctText": "దĠ",
    "difficulty": "Not identified in source",
    "sourceText": "379. ‘Ĺరం’ అƅ పóęĆ Ĥకృĕ పదం \n \n1) \nతల \n \n2) \nĕర \n \n3) \nదĠ \n \n4) \nదѕɌ"
  },
  {
    "id": 380,
    "printedNumber": 380,
    "topic": "వ్యుత్పత్తి / పద నిర్మాణార్థాలు",
    "stem": "380. ‘తంʖం’ అƅ పóęĆ Ĥకృĕ పదం",
    "options": [
      {
        "number": 1,
        "text": "ċతȽёѕ"
      },
      {
        "number": 2,
        "text": "తంʖ"
      },
      {
        "number": 3,
        "text": "తంц"
      },
      {
        "number": 4,
        "text": "కండ"
      }
    ],
    "correctOption": 3,
    "correctText": "తంц",
    "difficulty": "Not identified in source",
    "sourceText": "380. ‘తంʖం’ అƅ పóęĆ Ĥకృĕ పదం \n \n1) \nċతȽёѕ \n \n \n2) \nతంʖ \n \n3) \nతంц \n \n4) \nకండ"
  },
  {
    "id": 381,
    "printedNumber": 381,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "381. Ćంė ĀĐę జతపరచంĒ \n \n1. ǋĦ  \n \na. øన \n \n2. చంĒâ \n \nb. ǋħ \n \n3. ùండ \n \nc. చంĒ",
    "options": [
      {
        "number": 1,
        "text": "1- c\n2 – b\n3 - a"
      },
      {
        "number": 2,
        "text": "1- b\n2 – a\n3 - c"
      },
      {
        "number": 3,
        "text": "1- b\n2 – c\n3 - a"
      },
      {
        "number": 4,
        "text": "1- a\n2 – c\n3 - b"
      }
    ],
    "correctOption": 3,
    "correctText": "1- b\n2 – c\n3 - a",
    "difficulty": "Not identified in source",
    "sourceText": "381. Ćంė ĀĐę జతపరచంĒ \n \n1. ǋĦ  \n \na. øన \n \n2. చంĒâ \n \nb. ǋħ \n \n3. ùండ \n \nc. చంĒ \n1) \n1- c  \n2 – b  \n3 - a \n2) \n1- b  \n2 – a  \n3 - c \n \n3) \n1- b  \n2 – c  \n3 - a \n \n4) \n1- a  \n2 – c  \n3 - b"
  },
  {
    "id": 382,
    "printedNumber": 382,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "382. Ćంė Ĥకృĕ పóలъ జతపరచంĒ \n \n1. ѐĆȽ \n \na.  వంగడం \n \n2. వంశం \n \nb.  ƛకȮя \n \n3. సɌచȴя \n \nc.  čцȽ",
    "options": [
      {
        "number": 1,
        "text": "1- c\n2 – b\n3 - a"
      },
      {
        "number": 2,
        "text": "1- a\n2 – b\n3 - c"
      },
      {
        "number": 3,
        "text": "1- a\n2 – c\n3 - b"
      },
      {
        "number": 4,
        "text": "1- c\n2 – a\n3 - b"
      }
    ],
    "correctOption": 4,
    "correctText": "1- c\n2 – a\n3 - b",
    "difficulty": "Not identified in source",
    "sourceText": "382. Ćంė Ĥకృĕ పóలъ జతపరచంĒ \n \n1. ѐĆȽ \n \na.  వంగడం \n \n2. వంశం \n \nb.  ƛకȮя \n \n3. సɌచȴя \n \nc.  čцȽ \n1) \n1- c  \n2 – b  \n3 - a \n2) \n1- a  \n2 – b  \n3 - c \n \n3) \n1- a  \n2 – c  \n3 - b \n \n4) \n1- c  \n2 – a  \n3 - b"
  },
  {
    "id": 383,
    "printedNumber": 383,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "383. ‘âё’ అƅ పóęĆ ʛకృĕ పదం",
    "options": [
      {
        "number": 1,
        "text": "âరɇం"
      },
      {
        "number": 2,
        "text": "âలం"
      },
      {
        "number": 3,
        "text": "âంɕ"
      },
      {
        "number": 4,
        "text": "âక"
      }
    ],
    "correctOption": 2,
    "correctText": "âలం",
    "difficulty": "Not identified in source",
    "sourceText": "383. ‘âё’ అƅ పóęĆ ʛకృĕ పదం \n1) \nâరɇం \n2) \nâలం \n \n3) \nâంɕ \n \n4) \nâక"
  },
  {
    "id": 384,
    "printedNumber": 384,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "384. Ćంė ʛకృĕ Ĥకృцలъ జతపరచంĒ \n \n1. కత  \n \na. కథ \n \n2. ыѕɌ \n \nb.  ыషɂం \n \n3. ǐనя \n \nc.  Ǒజనం",
    "options": [
      {
        "number": 1,
        "text": "1- a\n2 – b\n3 -c"
      },
      {
        "number": 2,
        "text": "1- a\n2 – c\n3 -b"
      },
      {
        "number": 3,
        "text": "1- c\n2 – b\n3 -a"
      },
      {
        "number": 4,
        "text": "1- c\n2 – a\n3 - b"
      }
    ],
    "correctOption": 1,
    "correctText": "1- a\n2 – b\n3 -c",
    "difficulty": "Not identified in source",
    "sourceText": "384. Ćంė ʛకృĕ Ĥకృцలъ జతపరచంĒ \n \n1. కత  \n \na. కథ \n \n2. ыѕɌ \n \nb.  ыషɂం \n \n3. ǐనя \n \nc.  Ǒజనం  \n1) \n1- a  \n2 – b  \n3 -c \n2) \n1- a  \n2 – c  \n3 -b \n \n3) \n1- c  \n2 – b  \n3 -a \n \n4) \n1- c  \n2 – a  \n3 - b"
  },
  {
    "id": 385,
    "printedNumber": 385,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "385. Ćంė ĀĐę జతపరచంĒ \n \n1. వšɁ  \n \na.  వరȼం \n \n2. ăయం \n \nb.  సĄయం \n \n3. ఎద  \n \nc. హృదయం",
    "options": [
      {
        "number": 1,
        "text": "1- b\n2 – c\n3 - a"
      },
      {
        "number": 2,
        "text": "1- b\n2 – a\n3 - c"
      },
      {
        "number": 3,
        "text": "1- a\n2 – c\n3 - b"
      },
      {
        "number": 4,
        "text": "1- a\n2 – b\n3 – c"
      }
    ],
    "correctOption": 4,
    "correctText": "1- a\n2 – b\n3 – c",
    "difficulty": "Not identified in source",
    "sourceText": "385. Ćంė ĀĐę జతపరచంĒ \n \n1. వšɁ  \n \na.  వరȼం \n \n2. ăయం \n \nb.  సĄయం \n \n3. ఎద  \n \nc. హృదయం \n1) \n1- b  \n2 – c  \n3 - a \n2) \n1- b  \n2 – a  \n3 - c \n \n3) \n1- a  \n2 – c  \n3 - b \n \n4) \n1- a  \n2 – b  \n3 – c"
  },
  {
    "id": 386,
    "printedNumber": 386,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "386. సЉన ʛకృĕ – Ĥకృцలъ йĠȽంచంĒ \n \na. Ļపя - ėŬɌ \n \nb. పĩ - పĆȮ \n \nc. җĢక - Ʈలక",
    "options": [
      {
        "number": 1,
        "text": "a, b úʖƊ సЉనĤ"
      },
      {
        "number": 2,
        "text": "c úʖƊ సЉనė"
      },
      {
        "number": 3,
        "text": "a, b, c సЉనĤ"
      },
      {
        "number": 4,
        "text": "a, c úʖƊ సЉనĤ"
      }
    ],
    "correctOption": 3,
    "correctText": "a, b, c సЉనĤ",
    "difficulty": "Not identified in source",
    "sourceText": "386. సЉన ʛకృĕ – Ĥకృцలъ йĠȽంచంĒ \n \na. Ļపя - ėŬɌ \n \nb. పĩ - పĆȮ \n \nc. җĢక - Ʈలక \n \n1) \na, b úʖƊ సЉనĤ \n \n2) \nc úʖƊ సЉనė \n \n3) \na, b, c సЉనĤ \n \n4) \na, c úʖƊ సЉనĤ"
  },
  {
    "id": 387,
    "printedNumber": 387,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "387. ‘ыరя’ అƅ పóęĆ Ĥకృĕ పóęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "Ĥşȿ"
      },
      {
        "number": 2,
        "text": "చсȸ"
      },
      {
        "number": 3,
        "text": "పşȿం"
      },
      {
        "number": 4,
        "text": "Ηѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "Ηѓ",
    "difficulty": "Not identified in source",
    "sourceText": "387. ‘ыరя’ అƅ పóęĆ Ĥకృĕ పóęɁ йĠȽంచంĒ \n \n1) \nĤşȿ \n \n2) \nచсȸ \n \n3) \nపşȿం \n \n4) \nΗѓ"
  },
  {
    "id": 388,
    "printedNumber": 388,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "388. ‘సంబరя’ అƅ పóęĆ ʛకృĕ పóęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "సంƃహя"
      },
      {
        "number": 2,
        "text": "సంʞమя"
      },
      {
        "number": 3,
        "text": "సంǉషя"
      },
      {
        "number": 4,
        "text": "సяʘя"
      }
    ],
    "correctOption": 2,
    "correctText": "సంʞమя",
    "difficulty": "Not identified in source",
    "sourceText": "388. ‘సంబరя’ అƅ పóęĆ ʛకృĕ పóęɁ йĠȽంచంĒ \n1) \nసంƃహя \n \n2) \nసంʞమя \n \n3) \nసంǉషя \n \n4) \nసяʘя"
  },
  {
    "id": 389,
    "printedNumber": 389,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "389. ‘ħంహం’ పóęĆ Ĥకృĕ",
    "options": [
      {
        "number": 1,
        "text": "ఎద"
      },
      {
        "number": 2,
        "text": "ϯత"
      },
      {
        "number": 3,
        "text": "ƪతȽя"
      },
      {
        "number": 4,
        "text": "ħంగя"
      }
    ],
    "correctOption": 4,
    "correctText": "ħంగя",
    "difficulty": "Not identified in source",
    "sourceText": "389. ‘ħంహం’ పóęĆ Ĥకృĕ \n1) \nఎద \n2) \nϯత \n \n3) \nƪతȽя \n \n4) \nħంగя"
  },
  {
    "id": 390,
    "printedNumber": 390,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "390. ‘ధరɆం’ పóęĆ Ĥకృĕ",
    "options": [
      {
        "number": 1,
        "text": "Ĥతం"
      },
      {
        "number": 2,
        "text": "ఆసü"
      },
      {
        "number": 3,
        "text": "దమɆం"
      },
      {
        "number": 4,
        "text": "ñనం"
      }
    ],
    "correctOption": 3,
    "correctText": "దమɆం",
    "difficulty": "Not identified in source",
    "sourceText": "390. ‘ధరɆం’ పóęĆ Ĥకృĕ \n \n1) \nĤతం \n \n2) \nఆసü \n \n3) \nదమɆం \n \n4) \nñనం"
  },
  {
    "id": 391,
    "printedNumber": 391,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "391. ఆకసంǖ హĠĤѓɊъ ҄ħ ĚలɊѓ ఆనంėăȽё. ఈ Āకɇంǖ \nఆసకం పóęĆ ʛకృĕ",
    "options": [
      {
        "number": 1,
        "text": "Ǒజనం"
      },
      {
        "number": 2,
        "text": "Ļపం"
      },
      {
        "number": 3,
        "text": "ఆâశం"
      },
      {
        "number": 4,
        "text": "పంĆȽ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఆâశం",
    "difficulty": "Not identified in source",
    "sourceText": "391. ఆకసంǖ హĠĤѓɊъ ҄ħ ĚలɊѓ ఆనంėăȽё. ఈ Āకɇంǖ \nఆసకం పóęĆ ʛకృĕ \n \n1) \nǑజనం \n \n2) \nĻపం \n \n3) \nఆâశం \n \n4) \nపంĆȽ"
  },
  {
    "id": 392,
    "printedNumber": 392,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "392. Ćంė ĀĐę జతపరచంĒ \n \n1. గృహя \n \n \na. ăజя \n \n2. సяʘя  \n \nb.  Ĭя \n \n3. సహజя  \n \nc.  సంʘం",
    "options": [
      {
        "number": 1,
        "text": "1-c\n2 –b\n3 - a"
      },
      {
        "number": 2,
        "text": "1-b\n2 – c\n3 - a"
      },
      {
        "number": 3,
        "text": "1- a\n2 – c\n3 -b"
      },
      {
        "number": 4,
        "text": "1- a\n2 – b\n3 - c"
      }
    ],
    "correctOption": 2,
    "correctText": "1-b\n2 – c\n3 - a",
    "difficulty": "Not identified in source",
    "sourceText": "392. Ćంė ĀĐę జతపరచంĒ \n \n1. గృహя \n \n \na. ăజя \n \n2. సяʘя  \n \nb.  Ĭя \n \n3. సహజя  \n \nc.  సంʘం \n1) \n1-c \n \n2 –b  \n3 - a \n2) \n1-b \n \n2 – c  \n3 - a \n \n3) \n1- a  \n2 – c  \n3 -b \n \n4) \n1- a  \n2 – b  \n3 - c"
  },
  {
    "id": 393,
    "printedNumber": 393,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "393. Ćంė ĀĐę జతపరచంĒ \n \n1. అúĀసɇ  \na.  అమవస \n \n2. ఆరɇ  \n \nb.  అయɇ \n \n3. భĆȽ  \n \nc. బĕȽ",
    "options": [
      {
        "number": 1,
        "text": "1- c\n2 – a\n3 - b"
      },
      {
        "number": 2,
        "text": "1- b\n2 – a\n3 - c"
      },
      {
        "number": 3,
        "text": "1- c\n2 – b\n3 - a"
      },
      {
        "number": 4,
        "text": "1- a\n2 – b\n3 – c"
      }
    ],
    "correctOption": 4,
    "correctText": "1- a\n2 – b\n3 – c",
    "difficulty": "Not identified in source",
    "sourceText": "393. Ćంė ĀĐę జతపరచంĒ \n \n1. అúĀసɇ  \na.  అమవస \n \n2. ఆరɇ  \n \nb.  అయɇ \n \n3. భĆȽ  \n \nc. బĕȽ \n1) \n1- c  \n2 – a  \n3 - b \n2) \n1- b  \n2 – a  \n3 - c \n \n3) \n1- c  \n2 – b  \n3 - a \n \n4) \n1- a  \n2 – b  \n3 – c"
  },
  {
    "id": 394,
    "printedNumber": 394,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "394. ‘ñɇగం’ పóęĆ Ĥకృĕ",
    "options": [
      {
        "number": 1,
        "text": "çగం"
      },
      {
        "number": 2,
        "text": "јగя"
      },
      {
        "number": 3,
        "text": "йణя"
      },
      {
        "number": 4,
        "text": "Ƙనя"
      }
    ],
    "correctOption": 1,
    "correctText": "çగం",
    "difficulty": "Not identified in source",
    "sourceText": "394. ‘ñɇగం’ పóęĆ Ĥకృĕ \n1) \nçగం \n \n2) \nјగя \n \n3) \nйణя \n \n4) \nƘనя"
  },
  {
    "id": 395,
    "printedNumber": 395,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "395. ‘ùష’ పóęĆ Ĥకృĕ",
    "options": [
      {
        "number": 1,
        "text": "బంĕ"
      },
      {
        "number": 2,
        "text": "అంచ"
      },
      {
        "number": 3,
        "text": "øశ"
      },
      {
        "number": 4,
        "text": "øస"
      }
    ],
    "correctOption": 4,
    "correctText": "øస",
    "difficulty": "Not identified in source",
    "sourceText": "395. ‘ùష’ పóęĆ Ĥకృĕ \n \n1) \nబంĕ \n \n2) \nఅంచ \n \n3) \nøశ \n \n4) \nøస"
  },
  {
    "id": 396,
    "printedNumber": 396,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "396. మęĦĆ Ĥదɇ అవసరం. Ĥదɇ పóęĆ Ĥకృĕ",
    "options": [
      {
        "number": 1,
        "text": "ňė"
      },
      {
        "number": 2,
        "text": "చటȸя"
      },
      {
        "number": 3,
        "text": "ėħȸ"
      },
      {
        "number": 4,
        "text": "Ĥşȿ"
      }
    ],
    "correctOption": 4,
    "correctText": "Ĥşȿ",
    "difficulty": "Not identified in source",
    "sourceText": "396. మęĦĆ Ĥదɇ అవసరం. Ĥదɇ పóęĆ Ĥకృĕ \n1) \nňė \n \n2) \nచటȸя \n \n3) \nėħȸ \n \n4) \nĤşȿ"
  },
  {
    "id": 397,
    "printedNumber": 397,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "397. ‘Ļపం’ పóęĆ Ĥకృĕ",
    "options": [
      {
        "number": 1,
        "text": "ûʖ"
      },
      {
        "number": 2,
        "text": "ėŬɌ"
      },
      {
        "number": 3,
        "text": "úĔకɇం"
      },
      {
        "number": 4,
        "text": "ęతɇя"
      }
    ],
    "correctOption": 2,
    "correctText": "ėŬɌ",
    "difficulty": "Not identified in source",
    "sourceText": "397. ‘Ļపం’ పóęĆ Ĥకృĕ \n1) \nûʖ \n2) \nėŬɌ \n \n3) \núĔకɇం \n \n4) \nęతɇя"
  },
  {
    "id": 398,
    "printedNumber": 398,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "398. Ćంė ĀĐę జతపరచంĒ \n \n1. ħĠ  \n \na.  Ɠమя \n \n2. ఆశ  \n \nb.  ఆస \n \n3. ƕమя \n \nc.  ɖ",
    "options": [
      {
        "number": 1,
        "text": "1- c\n2 – b\n3 - a"
      },
      {
        "number": 2,
        "text": "1- a\n2 – b\n3 - c"
      },
      {
        "number": 3,
        "text": "1- b\n2 – a\n3 - c"
      },
      {
        "number": 4,
        "text": "1-c\n2 – a\n3 - b"
      }
    ],
    "correctOption": 1,
    "correctText": "1- c\n2 – b\n3 - a",
    "difficulty": "Not identified in source",
    "sourceText": "398. Ćంė ĀĐę జతపరచంĒ \n \n1. ħĠ  \n \na.  Ɠమя \n \n2. ఆశ  \n \nb.  ఆస \n \n3. ƕమя \n \nc.  ɖ \n1) \n1- c  \n2 – b  \n3 - a \n2) \n1- a  \n2 – b  \n3 - c \n \n3) \n1- b  \n2 – a  \n3 - c \n \n4) \n1-c \n \n2 – a  \n3 - b"
  },
  {
    "id": 399,
    "printedNumber": 399,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "399. ‘ʛకృĕ’ పóęĆ Ĥకృĕ",
    "options": [
      {
        "number": 1,
        "text": "ʛబంధం"
      },
      {
        "number": 2,
        "text": "ʛäఢం"
      },
      {
        "number": 3,
        "text": "ʛùవం"
      },
      {
        "number": 4,
        "text": "పĈė"
      }
    ],
    "correctOption": 4,
    "correctText": "పĈė",
    "difficulty": "Not identified in source",
    "sourceText": "399. ‘ʛకృĕ’ పóęĆ Ĥకృĕ \n \n1) \nʛబంధం \n \n2) \nʛäఢం \n \n3) \nʛùవం \n \n4) \nపĈė"
  },
  {
    "id": 400,
    "printedNumber": 400,
    "topic": "ప్రకృతి – వికృతులు",
    "stem": "400. నగüǖɊ ñమరతంపరä అöȜȸ ŦంсɊ ęĠɆјȽõɁё. ఈ \nĀకɇంǖę éĹయం",
    "options": [
      {
        "number": 1,
        "text": "అöȜȸ ŦంсɊ"
      },
      {
        "number": 2,
        "text": "ęĠɆјȽõɁё"
      },
      {
        "number": 3,
        "text": "నగüǖɊ"
      },
      {
        "number": 4,
        "text": "ñమరతంపర"
      }
    ],
    "correctOption": 4,
    "correctText": "ñమరతంపర",
    "difficulty": "Not identified in source",
    "sourceText": "400. నగüǖɊ ñమరతంపరä అöȜȸ ŦంсɊ ęĠɆјȽõɁё. ఈ \nĀకɇంǖę éĹయం \n \n1) \nఅöȜȸ ŦంсɊ \n \n2) \nęĠɆјȽõɁё \n \n3) \nనగüǖɊ \n \n4) \nñమరతంపర"
  },
  {
    "id": 401,
    "printedNumber": 401,
    "topic": "జాతీయాలు",
    "stem": "401. ŋñüమ āħɓäё తమ ĥїɇలందĠǖ õŲ అʉñంҕలం \nఇçȳё. ఈ Āకɇంǖę éĹయం",
    "options": [
      {
        "number": 1,
        "text": "అʉñంҕలం"
      },
      {
        "number": 2,
        "text": "ŋñüమāħɓ äё"
      },
      {
        "number": 3,
        "text": "ĥїɇలందĠǖ"
      },
      {
        "number": 4,
        "text": "ఈ Āకɇంǖ éĹయం Ǝш"
      }
    ],
    "correctOption": 1,
    "correctText": "అʉñంҕలం",
    "difficulty": "Not identified in source",
    "sourceText": "401. ŋñüమ āħɓäё తమ ĥїɇలందĠǖ õŲ అʉñంҕలం \nఇçȳё. ఈ Āకɇంǖę éĹయం \n \n1) \nఅʉñంҕలం \n \n2) \nŋñüమāħɓ äё \n \n3) \nĥїɇలందĠǖ \n \n4) \nఈ Āకɇంǖ éĹయం Ǝш"
  },
  {
    "id": 402,
    "printedNumber": 402,
    "topic": "జాతీయాలు",
    "stem": "402. ‘Ěуйöс’ అƅė",
    "options": [
      {
        "number": 1,
        "text": "ʞమకపదం"
      },
      {
        "number": 2,
        "text": "ăŦత"
      },
      {
        "number": 3,
        "text": "éĹయం"
      },
      {
        "number": 4,
        "text": "కċకపదం"
      }
    ],
    "correctOption": 3,
    "correctText": "éĹయం",
    "difficulty": "Not identified in source",
    "sourceText": "402. ‘Ěуйöс’ అƅė \n1) \nʞమకపదం \n2) \năŦత \n \n3) \néĹయం \n \n4) \nకċకపదం"
  },
  {
    "id": 403,
    "printedNumber": 403,
    "topic": "జాతీయాలు",
    "stem": "403. éĹయం âęė",
    "options": [
      {
        "number": 1,
        "text": "йస йసѓ"
      },
      {
        "number": 2,
        "text": "మనјǖ яѓɊ"
      },
      {
        "number": 3,
        "text": "ఇంǄɊ ĚĢɊ ňĘǖ ыĢ"
      },
      {
        "number": 4,
        "text": "ŷéĠ ǎѕ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఇంǄɊ ĚĢɊ ňĘǖ ыĢ",
    "difficulty": "Not identified in source",
    "sourceText": "403. éĹయం âęė \n \n1) \nйస йసѓ \n \n2) \nమనјǖ яѓɊ \n \n3) \nఇంǄɊ ĚĢɊ ňĘǖ ыĢ \n \n4) \nŷéĠ ǎѕ"
  },
  {
    "id": 404,
    "printedNumber": 404,
    "topic": "జాతీయాలు",
    "stem": "404. éĹయం âę óęę йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "అంగþёȳ"
      },
      {
        "number": 2,
        "text": "ŬъɁ҄ы"
      },
      {
        "number": 3,
        "text": "ఉйȰöలǉ Ţсȸ"
      },
      {
        "number": 4,
        "text": "ыŘȸу శనగలǖ ఒకżüğ"
      }
    ],
    "correctOption": 4,
    "correctText": "ыŘȸу శనగలǖ ఒకżüğ",
    "difficulty": "Not identified in source",
    "sourceText": "404. éĹయం âę óęę йĠȽంచంĒ \n1) \nఅంగþёȳ \n2) \nŬъɁ҄ы \n \n3) \nఉйȰöలǉ Ţсȸ \n \n4) \nыŘȸу శనగలǖ ఒకżüğ"
  },
  {
    "id": 405,
    "printedNumber": 405,
    "topic": "జాతీయాలు",
    "stem": "405. éĹûలъ йĠȽంచంĒ \n \na. öనకంǖ ыడక \n \nb. ñమరతంపర \n \nc. ఊరంతĐĆ ఒŲ шపɂĐ",
    "options": [
      {
        "number": 1,
        "text": "a, b సЉనĤ"
      },
      {
        "number": 2,
        "text": "c úʖƊ సЉనė"
      },
      {
        "number": 3,
        "text": "b, c సЉనĤ"
      },
      {
        "number": 4,
        "text": "a, b, c సЉనĤ"
      }
    ],
    "correctOption": 1,
    "correctText": "a, b సЉనĤ",
    "difficulty": "Not identified in source",
    "sourceText": "405. éĹûలъ йĠȽంచంĒ \n \na. öనకంǖ ыడక \n \nb. ñమరతంపర \n \nc. ఊరంతĐĆ ఒŲ шపɂĐ \n1) \na, b సЉనĤ \n2) \nc úʖƊ సЉనė \n \n3) \nb, c సЉనĤ \n \n4) \na, b, c సЉనĤ"
  },
  {
    "id": 406,
    "printedNumber": 406,
    "topic": "జాతీయాలు",
    "stem": "406. ఎęɁ అడȺంзѓ ఎшЉõ సంకలɂం ъంċ పకȮз తӐƺƎш అƅ \nసందరɅంǖ ఉపǓĈంŷ éĹయం",
    "options": [
      {
        "number": 1,
        "text": "కъĤӐ"
      },
      {
        "number": 2,
        "text": "అగసȽɹ˂త"
      },
      {
        "number": 3,
        "text": "Ěуй öс"
      },
      {
        "number": 4,
        "text": "భĬరథ ʛయతɁం"
      }
    ],
    "correctOption": 4,
    "correctText": "భĬరథ ʛయతɁం",
    "difficulty": "Not identified in source",
    "sourceText": "406. ఎęɁ అడȺంзѓ ఎшЉõ సంకలɂం ъంċ పకȮз తӐƺƎш అƅ \nసందరɅంǖ ఉపǓĈంŷ éĹయం \n1) \nకъĤӐ \n \n2) \nఅగసȽɹ˂త \n \n3) \nĚуй öс \n \n4) \nభĬరథ ʛయతɁం"
  },
  {
    "id": 407,
    "printedNumber": 407,
    "topic": "జాతీయాలు",
    "stem": "407. œĚɂనúటз ĕёйƎш అƅ అరȾంǖ ఉపǓĈంŷ éĹయం",
    "options": [
      {
        "number": 1,
        "text": "ј˵Āజȷ"
      },
      {
        "number": 2,
        "text": "ɖüమరɕ"
      },
      {
        "number": 3,
        "text": "గతజల Ɠцబంధя"
      },
      {
        "number": 4,
        "text": "ҕĒదǖ ǎħన పĽɁё"
      }
    ],
    "correctOption": 1,
    "correctText": "ј˵Āజȷ",
    "difficulty": "Not identified in source",
    "sourceText": "407. œĚɂనúటз ĕёйƎш అƅ అరȾంǖ ఉపǓĈంŷ éĹయం \n1) \nј˵Āజȷ \n \n2) \nɖüమరɕ \n \n3) \nగతజల Ɠцబంధя \n \n4) \nҕĒదǖ ǎħన పĽɁё"
  },
  {
    "id": 408,
    "printedNumber": 408,
    "topic": "జాతీయాలు",
    "stem": "408. ĤóɇёȾѓ ƅల҄ыѓ ҄јȽõɁё. ఈ Āకɇంǖ éĹయం",
    "options": [
      {
        "number": 1,
        "text": "ƅల ҄ыѓ ҄м"
      },
      {
        "number": 2,
        "text": "ĤóɇёȾѓ"
      },
      {
        "number": 3,
        "text": "҄јȽõɁё"
      },
      {
        "number": 4,
        "text": "ఏĻ âш"
      }
    ],
    "correctOption": 1,
    "correctText": "ƅల ҄ыѓ ҄м",
    "difficulty": "Not identified in source",
    "sourceText": "408. ĤóɇёȾѓ ƅల҄ыѓ ҄јȽõɁё. ఈ Āకɇంǖ éĹయం  \n \n1) \nƅల ҄ыѓ ҄м \n \n2) \nĤóɇёȾѓ \n \n3) \n҄јȽõɁё \n \n4) \nఏĻ âш"
  },
  {
    "id": 409,
    "printedNumber": 409,
    "topic": "జాతీయాలు",
    "stem": "409. ăనబсȸ, ŝలɊяఖం Ɛѐ అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "éĹûѓ"
      },
      {
        "number": 2,
        "text": "ăŦతѓ"
      },
      {
        "number": 3,
        "text": "ƪуы కథѓ"
      },
      {
        "number": 4,
        "text": "కċక పóѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "éĹûѓ",
    "difficulty": "Not identified in source",
    "sourceText": "409. ăనబсȸ, ŝలɊяఖం Ɛѐ అƅĤ \n1) \néĹûѓ \n \n2) \năŦతѓ \n \n3) \nƪуы కథѓ \n \n4) \nకċక పóѓ"
  },
  {
    "id": 410,
    "printedNumber": 410,
    "topic": "జాతీయాలు",
    "stem": "410. ‘ఏ úʖం öуâƎш’ అƅ అరȾంǖ ఉపǓĈంŷ éĹయం",
    "options": [
      {
        "number": 1,
        "text": "ŷéĠǎѕ"
      },
      {
        "number": 2,
        "text": "కъɁల పంуగ"
      },
      {
        "number": 3,
        "text": "œзȮ œదరƎш"
      },
      {
        "number": 4,
        "text": "ñమరతంపర"
      }
    ],
    "correctOption": 3,
    "correctText": "œзȮ œదరƎш",
    "difficulty": "Not identified in source",
    "sourceText": "410. ‘ఏ úʖం öуâƎш’ అƅ అరȾంǖ ఉపǓĈంŷ éĹయం \n1) \nŷéĠǎѕ \n2) \nకъɁల పంуగ \n \n3) \nœзȮ œదరƎш \n \n4) \nñమరతంపర"
  },
  {
    "id": 411,
    "printedNumber": 411,
    "topic": "జాతీయాలు",
    "stem": "411. ĞĆȮĢ కǅర ęయమяలǉ ѿĒన పę అƅ అరȾంǖ \nఉపǓĈంŷ éĹయం",
    "options": [
      {
        "number": 1,
        "text": "కĕȽłద ăя"
      },
      {
        "number": 2,
        "text": "ఎĕȽ ƪуы"
      },
      {
        "number": 3,
        "text": "ñమర తంపర"
      },
      {
        "number": 4,
        "text": "ఏĻ âш"
      }
    ],
    "correctOption": 1,
    "correctText": "కĕȽłద ăя",
    "difficulty": "Not identified in source",
    "sourceText": "411. ĞĆȮĢ కǅర ęయమяలǉ ѿĒన పę అƅ అరȾంǖ \nఉపǓĈంŷ éĹయం \n \n1) \nకĕȽłద ăя \n \n2) \nఎĕȽ ƪуы \n \n3) \nñమర తంపర \n \n4) \nఏĻ âш"
  },
  {
    "id": 412,
    "printedNumber": 412,
    "topic": "జాతీయాలు",
    "stem": "412. ʛĕజȷ పсȸ అƅ అరȾంǖ ఉపǓĈంŷ éĹయం",
    "options": [
      {
        "number": 1,
        "text": "కĕȽłద ăя"
      },
      {
        "number": 2,
        "text": "అతȽłద ƺపం шతȽ łద ҄ĚనсɊ"
      },
      {
        "number": 3,
        "text": "కంకణం óѓȳ"
      },
      {
        "number": 4,
        "text": "ĈĢɊ ǁల öడటం"
      }
    ],
    "correctOption": 3,
    "correctText": "కంకణం óѓȳ",
    "difficulty": "Not identified in source",
    "sourceText": "412. ʛĕజȷ పсȸ అƅ అరȾంǖ ఉపǓĈంŷ éĹయం \n \n1) \nకĕȽłద ăя \n \n2) \nఅతȽłద ƺపం шతȽ łద ҄ĚనсɊ \n \n3) \nకంకణం óѓȳ \n \n4) \nĈĢɊ ǁల öడటం"
  },
  {
    "id": 413,
    "printedNumber": 413,
    "topic": "జాతీయాలు",
    "stem": "413. Ćంė ĀĐǖ éĹయం âęė",
    "options": [
      {
        "number": 1,
        "text": "осɊ яĒŢటȸటం"
      },
      {
        "number": 2,
        "text": "ñమరతంపర"
      },
      {
        "number": 3,
        "text": "కంకణంóѓȳ"
      },
      {
        "number": 4,
        "text": "ыĢę ҄ħ నకȮ Āత Ţсȸ ƖనɁсɊ"
      }
    ],
    "correctOption": 4,
    "correctText": "ыĢę ҄ħ నకȮ Āత Ţсȸ ƖనɁсɊ",
    "difficulty": "Not identified in source",
    "sourceText": "413. Ćంė ĀĐǖ éĹయం âęė \n \n1) \nосɊ яĒŢటȸటం \n \n2) \nñమరతంపర \n \n3) \nకంకణంóѓȳ \n \n4) \nыĢę ҄ħ నకȮ Āత Ţсȸ ƖనɁсɊ"
  },
  {
    "id": 414,
    "printedNumber": 414,
    "topic": "జాతీయాలు",
    "stem": "414. ఎంǉ మǍహరంä అƅ అరȾంǖ ఉపǓĈంм éĹయం",
    "options": [
      {
        "number": 1,
        "text": "öనకంǖ ыడక"
      },
      {
        "number": 2,
        "text": "œзȮ œదరƎш"
      },
      {
        "number": 3,
        "text": "కъɁల పంуగ"
      },
      {
        "number": 4,
        "text": "ñమరతంపర"
      }
    ],
    "correctOption": 3,
    "correctText": "కъɁల పంуగ",
    "difficulty": "Not identified in source",
    "sourceText": "414. ఎంǉ మǍహరంä అƅ అరȾంǖ ఉపǓĈంм éĹయం \n1) \nöనకంǖ ыడక \n2) \nœзȮ œదరƎш \n \n3) \nకъɁల పంуగ \n \n4) \nñమరతంపర"
  },
  {
    "id": 415,
    "printedNumber": 415,
    "topic": "జాతీయాలు",
    "stem": "415. éĹûలъ йĠȽంచంĒ \n \na. కєɋ âయѓ âм \n \nb. œĤ ƺјƖъ \n \nc. కуыǖ ŢсȸƖъ",
    "options": [
      {
        "number": 1,
        "text": "a, b úʖƊ సЉనĤ"
      },
      {
        "number": 2,
        "text": "b, c úʖƊ సЉనĤ"
      },
      {
        "number": 3,
        "text": "a, c úʖƊ సЉనĤ"
      },
      {
        "number": 4,
        "text": "a, b, c సЉనĤ"
      }
    ],
    "correctOption": 4,
    "correctText": "a, b, c సЉనĤ",
    "difficulty": "Not identified in source",
    "sourceText": "415. éĹûలъ йĠȽంచంĒ \n \na. కєɋ âయѓ âм \n \nb. œĤ ƺјƖъ \n \nc. కуыǖ ŢсȸƖъ \n1) \na, b úʖƊ సЉనĤ \n \n2) \nb, c úʖƊ సЉనĤ \n \n3) \na, c úʖƊ సЉనĤ \n \n4) \na, b, c సЉనĤ"
  },
  {
    "id": 416,
    "printedNumber": 416,
    "topic": "జాతీయాలు",
    "stem": "416. ‘ƪందüę ƺĠకѓ’ అƅ అరȾంǖ ఉపǓĈంŷ éĹయం",
    "options": [
      {
        "number": 1,
        "text": "ƘంŝమɆ ƺŨȮѓ"
      },
      {
        "number": 2,
        "text": "ċచȳర Ěуй"
      },
      {
        "number": 3,
        "text": "œìȸ పìȸѓ"
      },
      {
        "number": 4,
        "text": "చшѕ సంధɇѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "ƘంŝమɆ ƺŨȮѓ",
    "difficulty": "Not identified in source",
    "sourceText": "416. ‘ƪందüę ƺĠకѓ’ అƅ అరȾంǖ ఉపǓĈంŷ éĹయం \n \n1) \nƘంŝమɆ ƺŨȮѓ \n \n2) \nċచȳర Ěуй \n \n3) \nœìȸ పìȸѓ \n \n4) \nచшѕ సంధɇѓ"
  },
  {
    "id": 417,
    "printedNumber": 417,
    "topic": "జాతీయాలు",
    "stem": "417. రహసɇంä ఇతёల йĠంċ œӐзƅ సందరɅంǖ ఈ éĹûęɁ \nఉపǓĈăȽё",
    "options": [
      {
        "number": 1,
        "text": "తలяనకѓ"
      },
      {
        "number": 2,
        "text": "œలɊęâј"
      },
      {
        "number": 3,
        "text": "йసйసѓ"
      },
      {
        "number": 4,
        "text": "ċõɁĠ ƪõɁĠ"
      }
    ],
    "correctOption": 3,
    "correctText": "йసйసѓ",
    "difficulty": "Not identified in source",
    "sourceText": "417. రహసɇంä ఇతёల йĠంċ œӐзƅ సందరɅంǖ ఈ éĹûęɁ \nఉపǓĈăȽё \n1) \nతలяనకѓ \n \n2) \nœలɊęâј \n \n3) \nйసйసѓ \n \n4) \nċõɁĠ ƪõɁĠ"
  },
  {
    "id": 418,
    "printedNumber": 418,
    "topic": "జాతీయాలు",
    "stem": "418. అగసȽɹ˂త, ј˵Āజȷ, ɖüమరɕ అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "éĹûѓ"
      },
      {
        "number": 2,
        "text": "ƪуыకథѓ"
      },
      {
        "number": 3,
        "text": "ăŦతѓ"
      },
      {
        "number": 4,
        "text": "పüɇయపóѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "éĹûѓ",
    "difficulty": "Not identified in source",
    "sourceText": "418. అగసȽɹ˂త, ј˵Āజȷ, ɖüమరɕ అƅĤ \n1) \néĹûѓ \n2) \nƪуыకథѓ \n \n3) \năŦతѓ \n \n4) \nపüɇయపóѓ"
  },
  {
    "id": 419,
    "printedNumber": 419,
    "topic": "జాతీయాలు",
    "stem": "419. అంగþёȳ, ŬъɁ҄ы, ఉйȰöలǉ Ţсȸ అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "ăŦతѓ"
      },
      {
        "number": 2,
        "text": "ƪуы కథѓ"
      },
      {
        "number": 3,
        "text": "éĹûѓ"
      },
      {
        "number": 4,
        "text": "õõüȾѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "éĹûѓ",
    "difficulty": "Not identified in source",
    "sourceText": "419. అంగþёȳ, ŬъɁ҄ы, ఉйȰöలǉ Ţсȸ అƅĤ \n1) \năŦతѓ \n2) \nƪуы కథѓ \n \n3) \néĹûѓ \n \n4) \nõõüȾѓ"
  },
  {
    "id": 420,
    "printedNumber": 420,
    "topic": "జాతీయాలు",
    "stem": "420. కంకణం óѓȳ, ĈĢɊ ǁలöడటం, осɊ яĒŢటȸడం అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "ăŦతѓ"
      },
      {
        "number": 2,
        "text": "éĹûѓ"
      },
      {
        "number": 3,
        "text": "ƪуы కథѓ"
      },
      {
        "number": 4,
        "text": "ʛకృĕ - Ĥకృцѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "éĹûѓ",
    "difficulty": "Not identified in source",
    "sourceText": "420. కంకణం óѓȳ, ĈĢɊ ǁలöడటం, осɊ яĒŢటȸడం అƅĤ \n \n1) \năŦతѓ \n \n2) \néĹûѓ \n \n3) \nƪуы కథѓ \n \n4) \nʛకృĕ - Ĥకృцѓ"
  },
  {
    "id": 421,
    "printedNumber": 421,
    "topic": "సామెతలు",
    "stem": "421. ăŦతъ ғĠంచంĒ \n \nƺĐ Ĥదɇѓ ................................",
    "options": [
      {
        "number": 1,
        "text": "ѿĐ ƖరŲ"
      },
      {
        "number": 2,
        "text": "Ɗడѓ కĐȸనсɊ"
      },
      {
        "number": 3,
        "text": "öǉక ǔత"
      },
      {
        "number": 4,
        "text": "âј ƖరŲ"
      }
    ],
    "correctOption": 1,
    "correctText": "ѿĐ ƖరŲ",
    "difficulty": "Not identified in source",
    "sourceText": "421. ăŦతъ ғĠంచంĒ \n \nƺĐ Ĥదɇѓ ................................ \n \n1) \nѿĐ ƖరŲ \n \n2) \nƊడѓ కĐȸనсɊ \n \n3) \nöǉక ǔత \n \n4) \nâј ƖరŲ"
  },
  {
    "id": 422,
    "printedNumber": 422,
    "topic": "సామెతలు",
    "stem": "422. కడవంత йమɆĒâయ కĕȽľటз ǖзవ అƅė",
    "options": [
      {
        "number": 1,
        "text": "ăŦత"
      },
      {
        "number": 2,
        "text": "éĹయం"
      },
      {
        "number": 3,
        "text": "ƪуы కథ"
      },
      {
        "number": 4,
        "text": "శబȿబలɊవం"
      }
    ],
    "correctOption": 1,
    "correctText": "ăŦత",
    "difficulty": "Not identified in source",
    "sourceText": "422. కడవంత йమɆĒâయ కĕȽľటз ǖзవ అƅė \n \n1) \năŦత \n \n2) \néĹయం \n \n3) \nƪуы కథ \n \n4) \nశబȿబలɊవం"
  },
  {
    "id": 423,
    "printedNumber": 423,
    "topic": "సామెతలు",
    "stem": "423. ఆకĢ ёċ ఎёగш, ęʘ јఖం ఎёగш అƅė ఒక",
    "options": [
      {
        "number": 1,
        "text": "éĹయం"
      },
      {
        "number": 2,
        "text": "ƪуы కథ"
      },
      {
        "number": 3,
        "text": "ăŦత"
      },
      {
        "number": 4,
        "text": "ôцѕ"
      }
    ],
    "correctOption": 3,
    "correctText": "ăŦత",
    "difficulty": "Not identified in source",
    "sourceText": "423. ఆకĢ ёċ ఎёగш, ęʘ јఖం ఎёగш అƅė ఒక \n1) \néĹయం \n2) \nƪуы కథ \n \n3) \năŦత \n \n4) \nôцѕ"
  },
  {
    "id": 424,
    "printedNumber": 424,
    "topic": "సామెతలు",
    "stem": "424. ĀâɇęɁ ғĠంచంĒ \n \năŦత Ǝę úట ………………",
    "options": [
      {
        "number": 1,
        "text": "ęóనƊ ʛôనం"
      },
      {
        "number": 2,
        "text": "øల Ѝదɇం"
      },
      {
        "number": 3,
        "text": "ғéĠ వరłయу"
      },
      {
        "number": 4,
        "text": "ఆŦత Ǝę ఇѓɊ"
      }
    ],
    "correctOption": 4,
    "correctText": "ఆŦత Ǝę ఇѓɊ",
    "difficulty": "Not identified in source",
    "sourceText": "424. ĀâɇęɁ ғĠంచంĒ \n \năŦత Ǝę úట ……………… \n \n1) \nęóనƊ ʛôనం \n \n2) \nøల Ѝదɇం \n \n3) \nғéĠ వరłయу \n \n4) \nఆŦత Ǝę ఇѓɊ"
  },
  {
    "id": 425,
    "printedNumber": 425,
    "topic": "సామెతలు",
    "stem": "425. ăŦతъ ғĠంచంĒ \n \nఉంż ఉäė, ƎకǎƁ ...........",
    "options": [
      {
        "number": 1,
        "text": "ఏâħ"
      },
      {
        "number": 2,
        "text": "яŝȽыĀన"
      },
      {
        "number": 3,
        "text": "Ѝзంఠûʖ"
      },
      {
        "number": 4,
        "text": "అతకш"
      }
    ],
    "correctOption": 1,
    "correctText": "ఏâħ",
    "difficulty": "Not identified in source",
    "sourceText": "425. ăŦతъ ғĠంచంĒ \n \nఉంż ఉäė, ƎకǎƁ ........... \n1) \nఏâħ \n2) \nяŝȽыĀన \n \n3) \nЍзంఠûʖ \n \n4) \nఅతకш"
  },
  {
    "id": 426,
    "printedNumber": 426,
    "topic": "సామెతలు",
    "stem": "426. జతపరచంĒ \n \n1. ăŦత \n \na. ఇంటŐలċ రచȳ Őలѕ \n \n2. éĹయం  \nb. నуం కìȸĢ \n \n3. ƪуы కథ \nc. ҄ƓȽ ҄ыѓ, నĤɌƁ నѕɌѓ, йėȿƁ \nйшȿѓ",
    "options": [
      {
        "number": 1,
        "text": "1 -  a\n2 –  b\n3 - c"
      },
      {
        "number": 2,
        "text": "1 -  a\n2 –  c\n3 - b"
      },
      {
        "number": 3,
        "text": "1 - c\n2 –  b\n3 - a"
      },
      {
        "number": 4,
        "text": "1 - a\n2 –  c\n3 - b"
      }
    ],
    "correctOption": 1,
    "correctText": "1 -  a\n2 –  b\n3 - c",
    "difficulty": "Not identified in source",
    "sourceText": "426. జతపరచంĒ \n \n1. ăŦత \n \na. ఇంటŐలċ రచȳ Őలѕ \n \n2. éĹయం  \nb. నуం కìȸĢ \n \n3. ƪуы కథ \nc. ҄ƓȽ ҄ыѓ, నĤɌƁ నѕɌѓ, йėȿƁ \nйшȿѓ \n1) \n1 -  a  \n2 –  b  \n3 - c  \n \n2) \n1 -  a  \n2 –  c  \n3 - b \n \n3) \n1 - c   \n2 –  b  \n3 - a \n \n4) \n1 - a  \n2 –  c  \n3 - b"
  },
  {
    "id": 427,
    "printedNumber": 427,
    "topic": "సామెతలు",
    "stem": "427. జతపరచంĒ \n \n1. తల ఉõɁ కєɋ Ǝęė \n \na. ƪуы కథ \n \n2. అమɆ ǐƁ అడĤ ƖనǐƁ ƖĠĤ \nb.  ăŦత \n \n3. కబంధ హăȽѓ \n  \n \nc.  éĹయం",
    "options": [
      {
        "number": 1,
        "text": "1 -  a\n2 –  b\n3 - c"
      },
      {
        "number": 2,
        "text": "1 -  b\n2 –  c\n3 - a"
      },
      {
        "number": 3,
        "text": "1 -  c\n2 –  b\n3 - a"
      },
      {
        "number": 4,
        "text": "1 -  a\n2 –  c\n3 - b"
      }
    ],
    "correctOption": 1,
    "correctText": "1 -  a\n2 –  b\n3 - c",
    "difficulty": "Not identified in source",
    "sourceText": "427. జతపరచంĒ \n \n1. తల ఉõɁ కєɋ Ǝęė \n \na. ƪуы కథ \n \n2. అమɆ ǐƁ అడĤ ƖనǐƁ ƖĠĤ \nb.  ăŦత \n \n3. కబంధ హăȽѓ \n  \n \nc.  éĹయం \n1) \n1 -  a  \n2 –  b  \n3 - c  \n \n2) \n1 -  b  \n2 –  c  \n3 - a \n \n3) \n1 -  c  \n2 –  b  \n3 - a \n \n4) \n1 -  a  \n2 –  c  \n3 - b"
  },
  {
    "id": 428,
    "printedNumber": 428,
    "topic": "సామెతలు",
    "stem": "428. ăŦతъ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "కъɁ ఉõɁ తల Ǝęė?"
      },
      {
        "number": 2,
        "text": "తం˛ గరగర, తĢɊľм ľм ĜడȺѓ రతɁúĔâɇѓ"
      },
      {
        "number": 3,
        "text": "పєɊ ఉõɁ Ǎё Ǝęė"
      },
      {
        "number": 4,
        "text": "అడగంƃ అమɆğõ అనɁం Ţటȸш"
      }
    ],
    "correctOption": 4,
    "correctText": "అడగంƃ అమɆğõ అనɁం Ţటȸш",
    "difficulty": "Not identified in source",
    "sourceText": "428. ăŦతъ йĠȽంచంĒ \n1) \nకъɁ ఉõɁ తల Ǝęė? \n \n2) \nతం˛ గరగర, తĢɊľм ľм ĜడȺѓ రతɁúĔâɇѓ \n \n3) \nపєɊ ఉõɁ Ǎё Ǝęė \n \n4) \nఅడగంƃ అమɆğõ అనɁం Ţటȸш"
  },
  {
    "id": 429,
    "printedNumber": 429,
    "topic": "సామెతలు",
    "stem": "429. ăŦత йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "âగలâరɇం గంధёɌƎ Ĺüȳё"
      },
      {
        "number": 2,
        "text": "҄ƓȽ ఒకĐ, ŷƓȽ Ũంу, తలѿ ǉకѿ ఒకż Ǆľ"
      },
      {
        "number": 3,
        "text": "āఖѓ ఉõɁ ఆзѓ Ǝęė?"
      },
      {
        "number": 4,
        "text": "అуйѓ ఉõɁ âєɋ Ǝęė?"
      }
    ],
    "correctOption": 1,
    "correctText": "âగలâరɇం గంధёɌƎ Ĺüȳё",
    "difficulty": "Not identified in source",
    "sourceText": "429. ăŦత йĠȽంచంĒ \n \n1) \nâగలâరɇం గంధёɌƎ Ĺüȳё \n \n2) \n҄ƓȽ ఒకĐ, ŷƓȽ Ũంу, తలѿ ǉకѿ ఒకż Ǆľ \n \n3) \nāఖѓ ఉõɁ ఆзѓ Ǝęė? \n \n4) \nఅуйѓ ఉõɁ âєɋ Ǝęė?"
  },
  {
    "id": 430,
    "printedNumber": 430,
    "topic": "సామెతలు",
    "stem": "430. ăŦతలъ йĠȽంచంĒ \n \na. ఏ öс తĚɂõ ăöс తపɂш \n \nb. зకȮ âсз œӐşబɄ \n \nc. йʡం йĒȺЀõ óð తపɂш",
    "options": [
      {
        "number": 1,
        "text": "a, b సЉనĤ"
      },
      {
        "number": 2,
        "text": "b, c సЉనĤ"
      },
      {
        "number": 3,
        "text": "a, c సЉనవ"
      },
      {
        "number": 4,
        "text": "a, b, c సЉనĤ"
      }
    ],
    "correctOption": 4,
    "correctText": "a, b, c సЉనĤ",
    "difficulty": "Not identified in source",
    "sourceText": "430. ăŦతలъ йĠȽంచంĒ \n \na. ఏ öс తĚɂõ ăöс తపɂш \n \nb. зకȮ âсз œӐşబɄ \n \nc. йʡం йĒȺЀõ óð తపɂш \n1) \n a, b సЉనĤ \n \n2) \nb, c సЉనĤ \n \n3) \na, c సЉనవ \n \n4) \na, b, c సЉనĤ"
  },
  {
    "id": 431,
    "printedNumber": 431,
    "topic": "సామెతలు",
    "stem": "431. అñȽ ఒĆంĐ ƺడƎ, అĠŷ зకȮ కరవш, అуј ƥకȮƅల âѓ \nకడగƅల  - అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "ƪуы కథѓ"
      },
      {
        "number": 2,
        "text": "éĹûѓ"
      },
      {
        "number": 3,
        "text": "ăŦతѓ"
      },
      {
        "number": 4,
        "text": "శబȿపలɊĀѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ăŦతѓ",
    "difficulty": "Not identified in source",
    "sourceText": "431. అñȽ ఒĆంĐ ƺడƎ, అĠŷ зకȮ కరవш, అуј ƥకȮƅల âѓ \nకడగƅల  - అƅĤ \n1) \nƪуы కథѓ \n2) \néĹûѓ \n \n3) \năŦతѓ \n \n4) \nశబȿపలɊĀѓ"
  },
  {
    "id": 432,
    "printedNumber": 432,
    "topic": "సామెతలు",
    "stem": "432. శంఖяǖ ǎƓȽäę ..... âш",
    "options": [
      {
        "number": 1,
        "text": "ıలకʡ"
      },
      {
        "number": 2,
        "text": "ĹరȾం"
      },
      {
        "number": 3,
        "text": "ăరథɇం"
      },
      {
        "number": 4,
        "text": "అనంతƺĐ"
      }
    ],
    "correctOption": 2,
    "correctText": "ĹరȾం",
    "difficulty": "Not identified in source",
    "sourceText": "432. శంఖяǖ ǎƓȽäę ..... âш \n \n1) \nıలకʡ \n \n2) \nĹరȾం \n \n3) \năరథɇం \n \n4) \nఅనంతƺĐ"
  },
  {
    "id": 433,
    "printedNumber": 433,
    "topic": "సామెతలు",
    "stem": "433. శతƺĐ దĠʼలз అనంతƺĐ ఉöûѓ - అƅė",
    "options": [
      {
        "number": 1,
        "text": "ăŦత"
      },
      {
        "number": 2,
        "text": "éĹయం"
      },
      {
        "number": 3,
        "text": "ƪуы కథ"
      },
      {
        "number": 4,
        "text": "శబȿ పలɊవం"
      }
    ],
    "correctOption": 1,
    "correctText": "ăŦత",
    "difficulty": "Not identified in source",
    "sourceText": "433. శతƺĐ దĠʼలз అనంతƺĐ ఉöûѓ - అƅė \n \n1) \năŦత \n \n2) \néĹయం \n \n3) \nƪуы కథ \n \n4) \nశబȿ పలɊవం"
  },
  {
    "id": 434,
    "printedNumber": 434,
    "topic": "సామెతలు",
    "stem": "434. ఎంĆ Ţģɋ јĜɄ çѕз వċȳందట, ŬంѥకѓనɁమɆ ఏ ƖŢӈɂõ \nŢуцంė. - అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "éĹûѓ"
      },
      {
        "number": 2,
        "text": "ƪуыకథѓ"
      },
      {
        "number": 3,
        "text": "ăŦతѓ"
      },
      {
        "number": 4,
        "text": "ఏĻ âш"
      }
    ],
    "correctOption": 3,
    "correctText": "ăŦతѓ",
    "difficulty": "Not identified in source",
    "sourceText": "434. ఎంĆ Ţģɋ јĜɄ çѕз వċȳందట, ŬంѥకѓనɁమɆ ఏ ƖŢӈɂõ \nŢуцంė. - అƅĤ \n \n1) \néĹûѓ \n \n2) \nƪуыకథѓ \n \n3) \năŦతѓ \n \n4) \nఏĻ âш"
  },
  {
    "id": 435,
    "printedNumber": 435,
    "topic": "సామెతలు",
    "stem": "435. ăŦతъ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "ఉనɁúటంż ఉѓŎзȮవ"
      },
      {
        "number": 2,
        "text": "ăనబсȸ"
      },
      {
        "number": 3,
        "text": "ñమరతంపర"
      },
      {
        "number": 4,
        "text": "œĤన ఇѓɊ కటȸƖъ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఉనɁúటంż ఉѓŎзȮవ",
    "difficulty": "Not identified in source",
    "sourceText": "435. ăŦతъ йĠȽంచంĒ \n1) \nఉనɁúటంż ఉѓŎзȮవ \n2) \năనబсȸ \n \n3) \nñమరతంపర \n \n4) \nœĤన ఇѓɊ కటȸƖъ"
  },
  {
    "id": 436,
    "printedNumber": 436,
    "topic": "సామెతలు",
    "stem": "436. ఎవё ఎęɁ అõɁ.. ఏł పĐȸంмƺę సందరɅం",
    "options": [
      {
        "number": 1,
        "text": "ǖన Ʋìరం Ѓన పìరం"
      },
      {
        "number": 2,
        "text": "ŤలɊం ƖĐȸన üğþä"
      },
      {
        "number": 3,
        "text": "లంకంత Ɩంప"
      },
      {
        "number": 4,
        "text": "వċȳన Ɔё చċȳõ ǎш"
      }
    ],
    "correctOption": 2,
    "correctText": "ŤలɊం ƖĐȸన üğþä",
    "difficulty": "Not identified in source",
    "sourceText": "436. ఎవё ఎęɁ అõɁ.. ఏł పĐȸంмƺę సందరɅం \n1) \nǖన Ʋìరం Ѓన పìరం \n \n2) \nŤలɊం ƖĐȸన üğþä \n \n3) \nలంకంత Ɩంప \n \n4) \nవċȳన Ɔё చċȳõ ǎш"
  },
  {
    "id": 437,
    "printedNumber": 437,
    "topic": "సామెతలు",
    "stem": "437. ăŦత âę óęę йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "ƐĽɁళɋз చĽɁєɋ ǉϻనсɊ"
      },
      {
        "number": 2,
        "text": "Ĥʉహ ыĦȸ ЂƐదɇం నĦȸ"
      },
      {
        "number": 3,
        "text": "Āన üకడ, ʿణం ǎకడ ఎవĠĪ ŝĢయш"
      },
      {
        "number": 4,
        "text": "కуыǖ మంట"
      }
    ],
    "correctOption": 4,
    "correctText": "కуыǖ మంట",
    "difficulty": "Not identified in source",
    "sourceText": "437. ăŦత âę óęę йĠȽంచంĒ \n \n1) \nƐĽɁళɋз చĽɁєɋ ǉϻనсɊ \n \n2) \nĤʉహ ыĦȸ ЂƐదɇం నĦȸ \n \n3) \nĀన üకడ, ʿణం ǎకడ ఎవĠĪ ŝĢయш \n \n4) \nకуыǖ మంట"
  },
  {
    "id": 438,
    "printedNumber": 438,
    "topic": "సామెతలు",
    "stem": "438. చċȳనĀę ŢģɋĆ వċȳంƃ కటɁం – అƅė ఒక",
    "options": [
      {
        "number": 1,
        "text": "కċక పదం"
      },
      {
        "number": 2,
        "text": "éĹయం"
      },
      {
        "number": 3,
        "text": "ƪуы కథ"
      },
      {
        "number": 4,
        "text": "ăŦత"
      }
    ],
    "correctOption": 4,
    "correctText": "ăŦత",
    "difficulty": "Not identified in source",
    "sourceText": "438. చċȳనĀę ŢģɋĆ వċȳంƃ కటɁం – అƅė ఒక \n1) \nకċక పదం \n \n2) \néĹయం \n \n3) \nƪуы కథ \n \n4) \năŦత"
  },
  {
    "id": 439,
    "printedNumber": 439,
    "topic": "సామెతలు",
    "stem": "439. âŦరɊ ǔĈĆ ǖకమంñ పచȳƅ, âƓ œсȸŲ üళɋ şబɄѓ - అƅĤ",
    "options": [
      {
        "number": 1,
        "text": "ăŦతѓ"
      },
      {
        "number": 2,
        "text": "ƪуы కథѓ"
      },
      {
        "number": 3,
        "text": "éĹûѓ"
      },
      {
        "number": 4,
        "text": "ʞమక పదం"
      }
    ],
    "correctOption": 1,
    "correctText": "ăŦతѓ",
    "difficulty": "Not identified in source",
    "sourceText": "439. âŦరɊ ǔĈĆ ǖకమంñ పచȳƅ, âƓ œсȸŲ üళɋ şబɄѓ - అƅĤ \n1) \năŦతѓ \n2) \nƪуы కథѓ \n \n3) \néĹûѓ \n \n4) \nʞమక పదం"
  },
  {
    "id": 440,
    "printedNumber": 440,
    "topic": "సామెతలు",
    "stem": "440. ǔѓ Ŭģɋ మşȿలǉ Ʈర Ţсȸзందట - అƅė",
    "options": [
      {
        "number": 1,
        "text": "ƪуы కథ"
      },
      {
        "number": 2,
        "text": "éĹయం"
      },
      {
        "number": 3,
        "text": "ăŦత"
      },
      {
        "number": 4,
        "text": "ʞమకపదం"
      }
    ],
    "correctOption": 3,
    "correctText": "ăŦత",
    "difficulty": "Not identified in source",
    "sourceText": "440. ǔѓ Ŭģɋ మşȿలǉ Ʈర Ţсȸзందట - అƅė \n1) \nƪуы కథ \n2) \néĹయం \n \n3) \năŦత \n \n4) \nʞమకపదం"
  },
  {
    "id": 441,
    "printedNumber": 441,
    "topic": "సామెతలు",
    "stem": "441. ăŦత âę óęę йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "œĤ ƺјƖъ"
      },
      {
        "number": 2,
        "text": "ĚĢɊĆ œలäటం, ఎѓకз ʿణ సంకటం"
      },
      {
        "number": 3,
        "text": "ƪĠĈంĐ ыలɊѿర ёċ"
      },
      {
        "number": 4,
        "text": "ĜడȺ వċȳన Ɛళ, ƘуȺ వċȳన Ɛళ"
      }
    ],
    "correctOption": 1,
    "correctText": "œĤ ƺјƖъ",
    "difficulty": "Not identified in source",
    "sourceText": "441. ăŦత âę óęę йĠȽంచంĒ \n \n1) \nœĤ ƺјƖъ \n \n2) \nĚĢɊĆ œలäటం, ఎѓకз ʿణ సంకటం \n \n3) \nƪĠĈంĐ ыలɊѿర ёċ \n \n4) \nĜడȺ వċȳన Ɛళ, ƘуȺ వċȳన Ɛళ"
  },
  {
    "id": 442,
    "printedNumber": 442,
    "topic": "సామెతలు",
    "stem": "442. “çపъ мటȸƎя, చకȮ ŤటȸƎя” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "నɕʺѓ"
      },
      {
        "number": 2,
        "text": "వల"
      },
      {
        "number": 3,
        "text": "తల"
      },
      {
        "number": 4,
        "text": "ఆâశం"
      }
    ],
    "correctOption": 4,
    "correctText": "ఆâశం",
    "difficulty": "Not identified in source",
    "sourceText": "442. “çపъ мటȸƎя, చకȮ ŤటȸƎя” అƅ ƪуыనз Ĥуы \n \n1) \nనɕʺѓ \n \n2) \nవల \n \n3) \nతల \n \n4) \nఆâశం"
  },
  {
    "id": 443,
    "printedNumber": 443,
    "topic": "సామెతలు",
    "stem": "443. “Ũంу Ğşȿలз ఒకż Ґలя” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "язȮ"
      },
      {
        "number": 2,
        "text": "Ļపя"
      },
      {
        "number": 3,
        "text": "яѓɊగʡ"
      },
      {
        "number": 4,
        "text": "çప"
      }
    ],
    "correctOption": 1,
    "correctText": "язȮ",
    "difficulty": "Not identified in source",
    "sourceText": "443. “Ũంу Ğşȿలз ఒకż Ґలя” అƅ ƪуыనз Ĥуы \n \n1) \nязȮ \n \n2) \nĻపя \n \n3) \nяѓɊగʡ \n \n4) \nçప"
  },
  {
    "id": 444,
    "printedNumber": 444,
    "topic": "సామెతలు",
    "stem": "444. “ŝలɊĐ ҖĞǖ \n \nనలɊĐ ĤతȽõѓ \n \nŷĕǉ చѓɊñё \n \nǍĐǉ ఏёñё” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "œѕѓ, కъɁѓ"
      },
      {
        "number": 2,
        "text": "âĈతం, అɕüѓ"
      },
      {
        "number": 3,
        "text": "తలâయ, ఎంʓâయ"
      },
      {
        "number": 4,
        "text": "јనɁం, వకȮ, ఆз"
      }
    ],
    "correctOption": 2,
    "correctText": "âĈతం, అɕüѓ",
    "difficulty": "Not identified in source",
    "sourceText": "444. “ŝలɊĐ ҖĞǖ \n \nనలɊĐ ĤతȽõѓ \n \nŷĕǉ చѓɊñё \n \nǍĐǉ ఏёñё” అƅ ƪуыనз Ĥуы \n1) \nœѕѓ, కъɁѓ \n2) \nâĈతం, అɕüѓ \n \n3) \nతలâయ, ఎంʓâయ \n \n4) \nјనɁం, వకȮ, ఆз"
  },
  {
    "id": 445,
    "printedNumber": 445,
    "topic": "సామెతలు",
    "stem": "445. ŷప అƅ Ĥуыз œంėన ƪуы కథ",
    "options": [
      {
        "number": 1,
        "text": "ıĤĆ ыĐȸంė âĽ చలనం Ǝш"
      },
      {
        "number": 2,
        "text": "ęʘǖ ѿî కъɁѓ җయęė"
      },
      {
        "number": 3,
        "text": "ఊరంతĐĆ ఒŲ шపɂĐ"
      },
      {
        "number": 4,
        "text": "ఇంǄɊ కĢ, ఒంǄɊ కĢ"
      }
    ],
    "correctOption": 2,
    "correctText": "ęʘǖ ѿî కъɁѓ җయęė",
    "difficulty": "Not identified in source",
    "sourceText": "445. ŷప అƅ Ĥуыз œంėన ƪуы కథ  \n \n1) \nıĤĆ ыĐȸంė âĽ చలనం Ǝш \n \n2) \nęʘǖ ѿî కъɁѓ җయęė \n \n3) \nఊరంతĐĆ ఒŲ шపɂĐ \n \n4) \nఇంǄɊ కĢ, ఒంǄɊ కĢ"
  },
  {
    "id": 446,
    "printedNumber": 446,
    "topic": "సామెతలు",
    "stem": "446. ƪуы కథъ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "ыనɁĞĆ ғత – అúĀసɇз ఆరĈంы"
      },
      {
        "number": 2,
        "text": "ăనబсȸ"
      },
      {
        "number": 3,
        "text": "ఇѓɊకĐȸ ҄у, Ţģɋŷħ ҄у"
      },
      {
        "number": 4,
        "text": "అరŷĕǖ Ѝзంఠం ҄ĚనсɊ"
      }
    ],
    "correctOption": 1,
    "correctText": "ыనɁĞĆ ғత – అúĀసɇз ఆరĈంы",
    "difficulty": "Not identified in source",
    "sourceText": "446. ƪуы కథъ йĠȽంచంĒ \n1) \nыనɁĞĆ ғత – అúĀసɇз ఆరĈంы \n2) \năనబсȸ \n \n3) \nఇѓɊకĐȸ ҄у, Ţģɋŷħ ҄у \n \n4) \nఅరŷĕǖ Ѝзంఠం ҄ĚనсɊ"
  },
  {
    "id": 447,
    "printedNumber": 447,
    "topic": "సామెతలు",
    "stem": "447. ƪуыకథъ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "ĚĢɊę చంకŤсȸзę ŢģɋĆ ŬģɋనсɊ"
      },
      {
        "number": 2,
        "text": "ыణɇం ƖĻȿ ыёїу óనంƖĻȿ ĜడȺѓ"
      },
      {
        "number": 3,
        "text": "ыĢĆ ఆకЋƁ గĒȺ ĕంсంó?"
      },
      {
        "number": 4,
        "text": "Ćట Ćట తѓыѓ Ćìё తѓыѓ Ĺħõ, Ɛħõ చӐу\nâѕ"
      }
    ],
    "correctOption": 4,
    "correctText": "Ćట Ćట తѓыѓ Ćìё తѓыѓ Ĺħõ, Ɛħõ చӐу\nâѕ",
    "difficulty": "Not identified in source",
    "sourceText": "447. ƪуыకథъ йĠȽంచంĒ \n1) \nĚĢɊę చంకŤсȸзę ŢģɋĆ ŬģɋనсɊ \n2) \nыణɇం ƖĻȿ ыёїу óనంƖĻȿ ĜడȺѓ \n \n3) \nыĢĆ ఆకЋƁ గĒȺ ĕంсంó? \n \n4) \nĆట Ćట తѓыѓ Ćìё తѓыѓ Ĺħõ, Ɛħõ చӐу \nâѕ"
  },
  {
    "id": 448,
    "printedNumber": 448,
    "topic": "సామెతలు",
    "stem": "448. నలɊĐ ƪదవలɊ ыĐȸంė – పరüо కళɋǖ పĒంė \n \nఅరŷĕ పìɁęĆ వċȳంė – ƼĠంక పìɁన సċȳంė",
    "options": [
      {
        "number": 1,
        "text": "అదȿం"
      },
      {
        "number": 2,
        "text": "Ɔъ"
      },
      {
        "number": 3,
        "text": "Ɓѓ"
      },
      {
        "number": 4,
        "text": "ŷప"
      }
    ],
    "correctOption": 2,
    "correctText": "Ɔъ",
    "difficulty": "Not identified in source",
    "sourceText": "448. నలɊĐ ƪదవలɊ ыĐȸంė – పరüо కళɋǖ పĒంė \n \nఅరŷĕ పìɁęĆ వċȳంė – ƼĠంక పìɁన సċȳంė \n1) \nఅదȿం \n \n2) \nƆъ \n \n3) \nƁѓ \n \n4) \nŷప"
  },
  {
    "id": 449,
    "printedNumber": 449,
    "topic": "సామెతలు",
    "stem": "449. అంцƎę œсȸз అరЍƖమɆѓ \n \nƖమɆ ƖమɆз ƺĐ ыѕɌѓ \n \nఅęɁ ыѕɌǖɊ Ũంž âయѓ",
    "options": [
      {
        "number": 1,
        "text": "ఆâశం, мకȮѓ, Ҡёɇу"
      },
      {
        "number": 2,
        "text": "œсȸ, ыѕɌѓ, âయѓ"
      },
      {
        "number": 3,
        "text": "јనɁం, వకȮ, ఆз"
      },
      {
        "number": 4,
        "text": "Ɓš, ŷప, йуȺ"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆâశం, мకȮѓ, Ҡёɇу",
    "difficulty": "Not identified in source",
    "sourceText": "449. అంцƎę œсȸз అరЍƖమɆѓ \n \nƖమɆ ƖమɆз ƺĐ ыѕɌѓ \n \nఅęɁ ыѕɌǖɊ Ũంž âయѓ \n1) \nఆâశం, мకȮѓ, Ҡёɇу \n \n2) \nœсȸ, ыѕɌѓ, âయѓ \n \n3) \nјనɁం, వకȮ, ఆз \n \n4) \nƁš, ŷప, йуȺ"
  },
  {
    "id": 450,
    "printedNumber": 450,
    "topic": "సామెతలు",
    "stem": "450. ƖƅటӐу నలɊä \n \nĕƅటӐу ఎʡä \n \nöƌƓటӐу ŝలɊä ఉంžė.",
    "options": [
      {
        "number": 1,
        "text": "ñంҕలం"
      },
      {
        "number": 2,
        "text": "పƺĒ"
      },
      {
        "number": 3,
        "text": "Ƭంగరం"
      },
      {
        "number": 4,
        "text": "ƅƌу పంу"
      }
    ],
    "correctOption": 4,
    "correctText": "ƅƌу పంу",
    "difficulty": "Not identified in source",
    "sourceText": "450. ƖƅటӐу నలɊä \n \nĕƅటӐу ఎʡä \n \nöƌƓటӐу ŝలɊä ఉంžė. \n \n1) \nñంҕలం \n \n2) \nపƺĒ \n \n3)  \nƬంగరం \n \n4) \nƅƌу పంу"
  },
  {
    "id": 451,
    "printedNumber": 451,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "451. అంйళం ఆз, అуйనɁర âయ",
    "options": [
      {
        "number": 1,
        "text": "Řంâయ"
      },
      {
        "number": 2,
        "text": "అరĐâయ"
      },
      {
        "number": 3,
        "text": "яలâȮయ"
      },
      {
        "number": 4,
        "text": "వంâయ"
      }
    ],
    "correctOption": 3,
    "correctText": "яలâȮయ",
    "difficulty": "Not identified in source",
    "sourceText": "451. అంйళం ఆз, అуйనɁర âయ \n1) \nŘంâయ \n \n2) \nఅరĐâయ \n \n3) \nяలâȮయ \n \n4) \nవంâయ"
  },
  {
    "id": 452,
    "printedNumber": 452,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "452. అęɁంĐకõɁ Ɛగంä ǎƋė",
    "options": [
      {
        "number": 1,
        "text": "Ɔъ"
      },
      {
        "number": 2,
        "text": "మనјɏ"
      },
      {
        "number": 3,
        "text": "ఉతȽరం"
      },
      {
        "number": 4,
        "text": "Љѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "మనјɏ",
    "difficulty": "Not identified in source",
    "sourceText": "452. అęɁంĐకõɁ Ɛగంä ǎƋė \n1) \nƆъ \n2) \nమనјɏ \n \n3) \nఉతȽరం \n \n4) \nЉѓ"
  },
  {
    "id": 453,
    "printedNumber": 453,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "453. “అğшйё భరȽѓంшё âę θపė âш” అƅ ƪуыనз \nĤуы",
    "options": [
      {
        "number": 1,
        "text": "čƎɊу"
      },
      {
        "number": 2,
        "text": "అĈȰŢĐȸ"
      },
      {
        "number": 3,
        "text": "шŬɌన"
      },
      {
        "number": 4,
        "text": "ŷğ"
      }
    ],
    "correctOption": 4,
    "correctText": "ŷğ",
    "difficulty": "Not identified in source",
    "sourceText": "453. “అğшйё భరȽѓంшё âę θపė âш” అƅ ƪуыనз \nĤуы \n \n1) \nčƎɊу \n \n2) \nఅĈȰŢĐȸ \n \n3) \nшŬɌన \n \n4) \nŷğ"
  },
  {
    "id": 454,
    "printedNumber": 454,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "454. “ఆâశంǖ ఎĈƌ üğ” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "Ĥúనం"
      },
      {
        "number": 2,
        "text": "öѕüğ"
      },
      {
        "number": 3,
        "text": "äĢపటం"
      },
      {
        "number": 4,
        "text": "ƖబɄĠâğ"
      }
    ],
    "correctOption": 2,
    "correctText": "öѕüğ",
    "difficulty": "Not identified in source",
    "sourceText": "454. “ఆâశంǖ ఎĈƌ üğ” అƅ ƪуыనз Ĥуы \n \n1) \nĤúనం \n \n2) \nöѕüğ \n \n3) \näĢపటం \n \n4) \nƖబɄĠâğ"
  },
  {
    "id": 455,
    "printedNumber": 455,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "455. “ఆâశమంñ అంగєɋ” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "నɕʺѓ"
      },
      {
        "number": 2,
        "text": "ŬలâȮయѓ"
      },
      {
        "number": 3,
        "text": "ƮగĢыѕɌ"
      },
      {
        "number": 4,
        "text": "ċంతâయѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "నɕʺѓ",
    "difficulty": "Not identified in source",
    "sourceText": "455. “ఆâశమంñ అంగєɋ” అƅ ƪуыనз Ĥуы \n \n1) \nనɕʺѓ \n \n2) \nŬలâȮయѓ \n \n3) \nƮగĢыѕɌ \n \n4) \nċంతâయѓ"
  },
  {
    "id": 456,
    "printedNumber": 456,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "456. “йంʓę øğ \n \nøğǖ Ĺగ \n \nĹగ łద ƮగȰ” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "ƘడȺĢ"
      },
      {
        "number": 2,
        "text": "ǋů"
      },
      {
        "number": 3,
        "text": "Ļపం"
      },
      {
        "number": 4,
        "text": "Ɓѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "Ļపం",
    "difficulty": "Not identified in source",
    "sourceText": "456. “йంʓę øğ \n \nøğǖ Ĺగ \n \nĹగ łద ƮగȰ” అƅ ƪуыనз Ĥуы \n1) \nƘడȺĢ  \n2) \nǋů \n \n3) \nĻపం \n \n4) \nƁѓ"
  },
  {
    "id": 457,
    "printedNumber": 457,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "457. “ęలబĒƁ ęѓјȽంė \n \nѿмంż ѿмంсంė” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "öя"
      },
      {
        "number": 2,
        "text": "Ľడ"
      },
      {
        "number": 3,
        "text": "ŷప"
      },
      {
        "number": 4,
        "text": "Ɓѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "Ľడ",
    "difficulty": "Not identified in source",
    "sourceText": "457. “ęలబĒƁ ęѓјȽంė \n \nѿмంż ѿмంсంė” అƅ ƪуыనз Ĥуы \n1) \nöя \n \n2) \nĽడ \n \n3) \nŷప \n \n4) \nƁѓ"
  },
  {
    "id": 458,
    "printedNumber": 458,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "458. “పచȳĐ Ɗడǖ ŝలɊĐ зńȳѓ \n \nŝలɊĐ зńȳలǖ నలɊĐ Ƨరѓ” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "ŋñఫలం"
      },
      {
        "number": 2,
        "text": "ǋసâయ"
      },
      {
        "number": 3,
        "text": "ƪటɊâయ"
      },
      {
        "number": 4,
        "text": "Ğరపâయ"
      }
    ],
    "correctOption": 1,
    "correctText": "ŋñఫలం",
    "difficulty": "Not identified in source",
    "sourceText": "458. “పచȳĐ Ɗడǖ ŝలɊĐ зńȳѓ \n \nŝలɊĐ зńȳలǖ నలɊĐ Ƨరѓ” అƅ ƪуыనз Ĥуы \n \n1) \nŋñఫలం \n \n2) \nǋసâయ \n \n3) \nƪటɊâయ \n \n4) \nĞరపâయ"
  },
  {
    "id": 459,
    "printedNumber": 459,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "459. “җత ŝĠƓȽ яñɇల Ɔё” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "Ļపం"
      },
      {
        "number": 2,
        "text": "పєɋ"
      },
      {
        "number": 3,
        "text": "ĤసȽüз"
      },
      {
        "number": 4,
        "text": "ñĐâయ"
      }
    ],
    "correctOption": 2,
    "correctText": "పєɋ",
    "difficulty": "Not identified in source",
    "sourceText": "459. “җత ŝĠƓȽ яñɇల Ɔё” అƅ ƪуыనз Ĥуы \n1) \nĻపం \n \n2) \nపєɋ \n \n3) \nĤసȽüз \n \n4) \nñĐâయ"
  },
  {
    "id": 460,
    "printedNumber": 460,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "460. “చకȮę ƖమɆз ċకȮę గŕȵѓ” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "öя"
      },
      {
        "number": 2,
        "text": "సజȵకంĆ"
      },
      {
        "number": 3,
        "text": "కєɋ"
      },
      {
        "number": 4,
        "text": "Ҡė"
      }
    ],
    "correctOption": 2,
    "correctText": "సజȵకంĆ",
    "difficulty": "Not identified in source",
    "sourceText": "460. “చకȮę ƖమɆз ċకȮę గŕȵѓ” అƅ ƪуыనз Ĥуы \n1) \nöя \n2) \nసజȵకంĆ \n \n3) \nకєɋ \n \n4) \nҠė"
  },
  {
    "id": 461,
    "printedNumber": 461,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "461. “పѓз äę పѓз” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "వకȮపѓз"
      },
      {
        "number": 2,
        "text": "óęమɆ"
      },
      {
        "number": 3,
        "text": "గంట"
      },
      {
        "number": 4,
        "text": "గĠŘ"
      }
    ],
    "correctOption": 1,
    "correctText": "వకȮపѓз",
    "difficulty": "Not identified in source",
    "sourceText": "461. “పѓз äę పѓз” అƅ ƪуыనз Ĥуы \n1) \nవకȮపѓз \n2) \nóęమɆ \n \n3) \nగంట \n \n4) \nగĠŘ"
  },
  {
    "id": 462,
    "printedNumber": 462,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "462. “яళɋъ ҄ħ яంшƖăȽё, \n \nజలяъ ҄ħ éёзంìё” అƅ ƪуыనз Ĥуы",
    "options": [
      {
        "number": 1,
        "text": "öя"
      },
      {
        "number": 2,
        "text": "కєɋ"
      },
      {
        "number": 3,
        "text": "Ŭంѥకѓ"
      },
      {
        "number": 4,
        "text": "œӐѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "œӐѓ",
    "difficulty": "Not identified in source",
    "sourceText": "462. “яళɋъ ҄ħ яంшƖăȽё, \n \nజలяъ ҄ħ éёзంìё” అƅ ƪуыనз Ĥуы \n \n1) \nöя \n \n2) \nకєɋ \n \n3) \nŬంѥకѓ \n \n4) \nœӐѓ"
  },
  {
    "id": 463,
    "printedNumber": 463,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "463. ఙ ఞ ణ న మ అƅ అɕüలз గల Ɔё",
    "options": [
      {
        "number": 1,
        "text": "పёĂѓ"
      },
      {
        "number": 2,
        "text": "అъõħâѓ"
      },
      {
        "number": 3,
        "text": "అంతăȾѓ"
      },
      {
        "number": 4,
        "text": "ఊĂɆѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "అъõħâѓ",
    "difficulty": "Not identified in source",
    "sourceText": "463. ఙ ఞ ణ న మ అƅ అɕüలз గల Ɔё \n \n1) \nపёĂѓ \n \n2) \nఅъõħâѓ \n \n3) \nఅంతăȾѓ \n \n4) \nఊĂɆѓ"
  },
  {
    "id": 464,
    "printedNumber": 464,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "464. ñѓవ (ǯడ) øగంǖ ыżȸ అɕüѓ",
    "options": [
      {
        "number": 1,
        "text": "ఊĂɆѓ"
      },
      {
        "number": 2,
        "text": "ఓĂȹɹѓ"
      },
      {
        "number": 3,
        "text": "җరɀõɇѓ"
      },
      {
        "number": 4,
        "text": "ñలĀɇѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "ñలĀɇѓ",
    "difficulty": "Not identified in source",
    "sourceText": "464. ñѓవ (ǯడ) øగంǖ ыżȸ అɕüѓ \n \n1) \nఊĂɆѓ \n \n2) \nఓĂȹɹѓ \n \n3) \nҗరɀõɇѓ \n \n4) \nñలĀɇѓ"
  },
  {
    "id": 465,
    "printedNumber": 465,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "465. ట ఠ డ ఢ ణ అɕüలз గల Ɔё",
    "options": [
      {
        "number": 1,
        "text": "җరɀõɇѓ"
      },
      {
        "number": 2,
        "text": "కంíɇѓ"
      },
      {
        "number": 3,
        "text": "ñలĀɇѓ"
      },
      {
        "number": 4,
        "text": "దంñɇѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "җరɀõɇѓ",
    "difficulty": "Not identified in source",
    "sourceText": "465. ట ఠ డ ఢ ణ అɕüలз గల Ɔё \n1) \nҗరɀõɇѓ \n2) \nకంíɇѓ \n \n3) \nñలĀɇѓ \n \n4) \nదంñɇѓ"
  },
  {
    "id": 466,
    "printedNumber": 466,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "466. Ćంė Āęǖ దంతɇం âęė",
    "options": [
      {
        "number": 1,
        "text": "ట"
      },
      {
        "number": 2,
        "text": "త"
      },
      {
        "number": 3,
        "text": "ద"
      },
      {
        "number": 4,
        "text": "న"
      }
    ],
    "correctOption": 1,
    "correctText": "ట",
    "difficulty": "Not identified in source",
    "sourceText": "466. Ćంė Āęǖ దంతɇం âęė \n \n1) \nట \n \n2) \nత \n \n3) \nద \n \n4) \nన"
  },
  {
    "id": 467,
    "printedNumber": 467,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "467. గ జ డ ద బ అƅ అɕüѓ",
    "options": [
      {
        "number": 1,
        "text": "ħȾüѓ"
      },
      {
        "number": 2,
        "text": "పёĂѓ"
      },
      {
        "number": 3,
        "text": "ఊĂɆѓ"
      },
      {
        "number": 4,
        "text": "సరÿѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "సరÿѓ",
    "difficulty": "Not identified in source",
    "sourceText": "467. గ జ డ ద బ అƅ అɕüѓ \n1) \nħȾüѓ \n2) \nపёĂѓ \n \n3) \nఊĂɆѓ \n \n4) \nసరÿѓ"
  },
  {
    "id": 468,
    "printedNumber": 468,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "468. దంǉɇషȹం అę ఈ అɕüęɁ ĚѓăȽё",
    "options": [
      {
        "number": 1,
        "text": "ప"
      },
      {
        "number": 2,
        "text": "భ"
      },
      {
        "number": 3,
        "text": "వ"
      },
      {
        "number": 4,
        "text": "య"
      }
    ],
    "correctOption": 3,
    "correctText": "వ",
    "difficulty": "Not identified in source",
    "sourceText": "468. దంǉɇషȹం అę ఈ అɕüęɁ ĚѓăȽё \n1) \nప \n2) \nభ \n \n3) \nవ \n \n4) \nయ"
  },
  {
    "id": 469,
    "printedNumber": 469,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "469. Ćంė Āęǖ అంతăȾęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "ణ"
      },
      {
        "number": 2,
        "text": "ల"
      },
      {
        "number": 3,
        "text": "జ"
      },
      {
        "number": 4,
        "text": "ట"
      }
    ],
    "correctOption": 2,
    "correctText": "ల",
    "difficulty": "Not identified in source",
    "sourceText": "469. Ćంė Āęǖ అంతăȾęɁ йĠȽంచంĒ \n1) \nణ \n \n2) \nల \n \n3) \nజ \n \n4) \nట"
  },
  {
    "id": 470,
    "printedNumber": 470,
    "topic": "పొడుపుకథలు / పదబంధాలు",
    "stem": "470. క ఖ గ ఘ ఙ అƅ అɕüѓ",
    "options": [
      {
        "number": 1,
        "text": "ñలĀɇѓ"
      },
      {
        "number": 2,
        "text": "җరɀõɇѓ"
      },
      {
        "number": 3,
        "text": "కంíɇѓ"
      },
      {
        "number": 4,
        "text": "దంñɇѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "కంíɇѓ",
    "difficulty": "Not identified in source",
    "sourceText": "470. క ఖ గ ఘ ఙ అƅ అɕüѓ \n1) \nñలĀɇѓ \n \n2) \nҗరɀõɇѓ \n \n3) \nకంíɇѓ \n \n4) \nదంñɇѓ"
  },
  {
    "id": 471,
    "printedNumber": 471,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "471. Ćంė Āęǖ ఉĂɆɕరం âęė",
    "options": [
      {
        "number": 1,
        "text": "న"
      },
      {
        "number": 2,
        "text": "శ"
      },
      {
        "number": 3,
        "text": "స"
      },
      {
        "number": 4,
        "text": "హ"
      }
    ],
    "correctOption": 1,
    "correctText": "న",
    "difficulty": "Not identified in source",
    "sourceText": "471. Ćంė Āęǖ ఉĂɆɕరం âęė \n \n1) \nన \n \n2) \nశ \n \n3) \nస \n \n4) \nహ"
  },
  {
    "id": 472,
    "printedNumber": 472,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "472. Ćంė Āęǖ పёĂęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "జ"
      },
      {
        "number": 2,
        "text": "మ"
      },
      {
        "number": 3,
        "text": "ద"
      },
      {
        "number": 4,
        "text": "ట"
      }
    ],
    "correctOption": 4,
    "correctText": "ట",
    "difficulty": "Not identified in source",
    "sourceText": "472. Ćంė Āęǖ పёĂęɁ йĠȽంచంĒ \n1) \nజ \n \n2) \nమ \n \n3) \nద \n \n4) \nట"
  },
  {
    "id": 473,
    "printedNumber": 473,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "473. Ćంė Āęǖ వరȰѐзȮѓ",
    "options": [
      {
        "number": 1,
        "text": "క, ట"
      },
      {
        "number": 2,
        "text": "గ, జ"
      },
      {
        "number": 3,
        "text": "ఛ, ఠ"
      },
      {
        "number": 4,
        "text": "య, ల"
      }
    ],
    "correctOption": 3,
    "correctText": "ఛ, ఠ",
    "difficulty": "Not identified in source",
    "sourceText": "473. Ćంė Āęǖ వరȰѐзȮѓ  \n1) \nక, ట \n2) \nగ, జ \n \n3) \nఛ, ఠ \n \n4) \n య, ల"
  },
  {
    "id": 474,
    "printedNumber": 474,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "474. ఖ ఘ ఛ ఝ ఠ ఢ థ ధ ఫ భ అƅ అɕüѓъ ఈ Ĥధంä ĚѓăȽё",
    "options": [
      {
        "number": 1,
        "text": "అంతăȾѓ"
      },
      {
        "number": 2,
        "text": "వరȰѐзȮѓ"
      },
      {
        "number": 3,
        "text": "సరÿѓ"
      },
      {
        "number": 4,
        "text": "పёĂѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "వరȰѐзȮѓ",
    "difficulty": "Not identified in source",
    "sourceText": "474. ఖ ఘ ఛ ఝ ఠ ఢ థ ధ ఫ భ అƅ అɕüѓъ ఈ Ĥధంä ĚѓăȽё \n \n1) \nఅంతăȾѓ \n \n2) \nవరȰѐзȮѓ \n \n3) \nసరÿѓ \n \n4) \nపёĂѓ"
  },
  {
    "id": 475,
    "printedNumber": 475,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "475. క ъంĒ మ వరз గల హѓɊలъ ఇþ ĚѓăȽё",
    "options": [
      {
        "number": 1,
        "text": "ఊĂɆѓ"
      },
      {
        "number": 2,
        "text": "అంతăȾѓ"
      },
      {
        "number": 3,
        "text": "కంǅĂȹɹѓ"
      },
      {
        "number": 4,
        "text": "సɂüɍѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "సɂüɍѓ",
    "difficulty": "Not identified in source",
    "sourceText": "475. క ъంĒ మ వరз గల హѓɊలъ ఇþ ĚѓăȽё \n \n1) \nఊĂɆѓ \n \n2) \nఅంతăȾѓ \n \n3) \nకంǅĂȹɹѓ \n \n4) \nసɂüɍѓ"
  },
  {
    "id": 476,
    "printedNumber": 476,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "476. పёĂѓ, సరÿѓ âзంî ĞĈĢన హѓɊలъ ఇþ ĚѓăȽё",
    "options": [
      {
        "number": 1,
        "text": "ħȾüѓ"
      },
      {
        "number": 2,
        "text": "ఊĂɆѓ"
      },
      {
        "number": 3,
        "text": "అంతăȾѓ"
      },
      {
        "number": 4,
        "text": "ñలĀɇѓ"
      }
    ],
    "correctOption": 1,
    "correctText": "ħȾüѓ",
    "difficulty": "Not identified in source",
    "sourceText": "476. పёĂѓ, సరÿѓ âзంî ĞĈĢన హѓɊలъ ఇþ ĚѓăȽё \n \n1) \nħȾüѓ \n \n2) \nఊĂɆѓ \n \n3) \nఅంతăȾѓ \n \n4) \nñలĀɇѓ"
  },
  {
    "id": 477,
    "printedNumber": 477,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "477. ఓĂȹɹɕüలз ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "ప, బ"
      },
      {
        "number": 2,
        "text": "త , ద"
      },
      {
        "number": 3,
        "text": "చ, జ"
      },
      {
        "number": 4,
        "text": "క, గ"
      }
    ],
    "correctOption": 1,
    "correctText": "ప, బ",
    "difficulty": "Not identified in source",
    "sourceText": "477. ఓĂȹɹɕüలз ఉóహరణ \n1) \nప, బ \n2) \nత , ద \n \n3) \nచ, జ \n \n4) \nక, గ"
  },
  {
    "id": 478,
    "printedNumber": 478,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "478. ఉ ఊ ప ఫ బ భ మ అɕüలъ ఇþ ĚѓăȽё",
    "options": [
      {
        "number": 1,
        "text": "җరɀõɇѓ"
      },
      {
        "number": 2,
        "text": "ñలĀɇѓ"
      },
      {
        "number": 3,
        "text": "ఓĂȹɹѓ"
      },
      {
        "number": 4,
        "text": "పёĂѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఓĂȹɹѓ",
    "difficulty": "Not identified in source",
    "sourceText": "478. ఉ ఊ ప ఫ బ భ మ అɕüలъ ఇþ ĚѓăȽё \n1) \nҗరɀõɇѓ \n \n2) \nñలĀɇѓ \n \n3) \nఓĂȹɹѓ \n \n4) \nపёĂѓ"
  },
  {
    "id": 479,
    "printedNumber": 479,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "479. కంǅɇĂȹɹలъ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "అ, ఆ"
      },
      {
        "number": 2,
        "text": "ఇ, ఈ"
      },
      {
        "number": 3,
        "text": "ఒ, ఓ"
      },
      {
        "number": 4,
        "text": "శ, స"
      }
    ],
    "correctOption": 3,
    "correctText": "ఒ, ఓ",
    "difficulty": "Not identified in source",
    "sourceText": "479. కంǅɇĂȹɹలъ йĠȽంచంĒ \n \n1) \nఅ, ఆ \n \n2) \nఇ, ఈ \n \n3) \nఒ, ఓ \n \n4) \nశ, స"
  },
  {
    "id": 480,
    "printedNumber": 480,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "480. సరÿѓ అę ňĐę అంìё",
    "options": [
      {
        "number": 1,
        "text": "క చ ట త ప"
      },
      {
        "number": 2,
        "text": "ఙ ఞ ణ న మ"
      },
      {
        "number": 3,
        "text": "శ ష స హ"
      },
      {
        "number": 4,
        "text": "గ జ డ ద బ"
      }
    ],
    "correctOption": 4,
    "correctText": "గ జ డ ద బ",
    "difficulty": "Not identified in source",
    "sourceText": "480. సరÿѓ అę ňĐę అంìё \n1) \nక చ ట త ప \n \n2) \nఙ ఞ ణ న మ \n \n3) \nశ ష స హ \n \n4) \nగ జ డ ద బ"
  },
  {
    "id": 481,
    "printedNumber": 481,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "481. äĢబయĐĆ ఊшҎ పĢŲ అɕüѓ",
    "options": [
      {
        "number": 1,
        "text": "వరȰѐзȮѓ"
      },
      {
        "number": 2,
        "text": "ఊĂɆѓ"
      },
      {
        "number": 3,
        "text": "సరÿѓ"
      },
      {
        "number": 4,
        "text": "దంñɇѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఊĂɆѓ",
    "difficulty": "Not identified in source",
    "sourceText": "481. äĢబయĐĆ ఊшҎ పĢŲ అɕüѓ  \n1) \nవరȰѐзȮѓ \n2) \nఊĂɆѓ \n \n3) \nసరÿѓ \n \n4) \nదంñɇѓ"
  },
  {
    "id": 482,
    "printedNumber": 482,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "482. క చ ట త ప అƅ అɕüѓ",
    "options": [
      {
        "number": 1,
        "text": "సరÿѓ"
      },
      {
        "number": 2,
        "text": "అంతăȾѓ"
      },
      {
        "number": 3,
        "text": "పёĂѓ"
      },
      {
        "number": 4,
        "text": "అъõħకѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "పёĂѓ",
    "difficulty": "Not identified in source",
    "sourceText": "482. క చ ట త ప అƅ అɕüѓ  \n1) \nసరÿѓ \n2) \nఅంతăȾѓ \n \n3) \nపёĂѓ \n \n4) \nఅъõħకѓ"
  },
  {
    "id": 483,
    "printedNumber": 483,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "483. Ćంė Āęǖ దంñɇѓ",
    "options": [
      {
        "number": 1,
        "text": "క ఖ గ ఘ ఙ"
      },
      {
        "number": 2,
        "text": "చ ఛ జ ఝ ఞ"
      },
      {
        "number": 3,
        "text": "ట ఠ డ ఢ ణ"
      },
      {
        "number": 4,
        "text": "త థ ద ధ న"
      }
    ],
    "correctOption": 4,
    "correctText": "త థ ద ధ న",
    "difficulty": "Not identified in source",
    "sourceText": "483. Ćంė Āęǖ దంñɇѓ \n \n1) \nక ఖ గ ఘ ఙ \n \n2) \nచ ఛ జ ఝ ఞ \n \n3) \nట ఠ డ ఢ ణ \n \n4) \nత థ ద ధ న"
  },
  {
    "id": 484,
    "printedNumber": 484,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "484. ఈ సంవతɏరం łё ůలѕలз ఎకȮĒĆ ŬєцõɁё. ఈ \nĀకɇంǖ łё అƅ పదం ఈ ùĂùగం అѕцంė.",
    "options": [
      {
        "number": 1,
        "text": "సరɌõమం"
      },
      {
        "number": 2,
        "text": "õమĀచకం"
      },
      {
        "number": 3,
        "text": "ĤƑషణం"
      },
      {
        "number": 4,
        "text": "ˏయ"
      }
    ],
    "correctOption": 1,
    "correctText": "సరɌõమం",
    "difficulty": "Not identified in source",
    "sourceText": "484. ఈ సంవతɏరం łё ůలѕలз ఎకȮĒĆ ŬєцõɁё. ఈ \nĀకɇంǖ łё అƅ పదం ఈ ùĂùగం అѕцంė. \n \n1) \nసరɌõమం \n \n2) \nõమĀచకం \n \n3) \nĤƑషణం \n \n4) \nˏయ"
  },
  {
    "id": 485,
    "printedNumber": 485,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "485. Ćంė Āęǖ పంచł ĤభĆȽĆ œంėన ʛతɇûęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "Ɩఱз"
      },
      {
        "number": 2,
        "text": "ѕ"
      },
      {
        "number": 3,
        "text": "అంш"
      },
      {
        "number": 4,
        "text": "పĐȸ"
      }
    ],
    "correctOption": 4,
    "correctText": "పĐȸ",
    "difficulty": "Not identified in source",
    "sourceText": "485. Ćంė Āęǖ పంచł ĤభĆȽĆ œంėన ʛతɇûęɁ йĠȽంచంĒ \n \n1) \nƖఱз \n \n2) \nѕ \n \n3) \nఅంш \n \n4) \nపĐȸ"
  },
  {
    "id": 486,
    "printedNumber": 486,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "486. ఒక ƿట Āɇకరణâరɇం ʛవĠȽంċ, మưక ăĠ ʛవĠȽంచక \nǎవîęɁ ఇþ అంìё",
    "options": [
      {
        "number": 1,
        "text": "ęతɇం"
      },
      {
        "number": 2,
        "text": "ęƒధం"
      },
      {
        "number": 3,
        "text": "అъęతɇం"
      },
      {
        "number": 4,
        "text": "ЍకĢɂకం"
      }
    ],
    "correctOption": 4,
    "correctText": "ЍకĢɂకం",
    "difficulty": "Not identified in source",
    "sourceText": "486. ఒక ƿట Āɇకరణâరɇం ʛవĠȽంċ, మưక ăĠ ʛవĠȽంచక \nǎవîęɁ ఇþ అంìё \n1) \nęతɇం \n2) \nęƒధం \n \n3) \nఅъęతɇం \n \n4) \nЍకĢɂకం"
  },
  {
    "id": 487,
    "printedNumber": 487,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "487. ఉనɁవüȼęɁ ƥలĈంċ óę ăȾనంǖ శѪѕþä Ɛưకవరȼం వċȳ \nŷరîęɁ ఇþ అంìё",
    "options": [
      {
        "number": 1,
        "text": "ఆƃశం"
      },
      {
        "number": 2,
        "text": "ఆగమం"
      },
      {
        "number": 3,
        "text": "ఆ͓Ēతం"
      },
      {
        "number": 4,
        "text": "Ѭతం"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆƃశం",
    "difficulty": "Not identified in source",
    "sourceText": "487. ఉనɁవüȼęɁ ƥలĈంċ óę ăȾనంǖ శѪѕþä Ɛưకవరȼం వċȳ \nŷరîęɁ ఇþ అంìё \n \n1) \nఆƃశం \n \n2) \nఆగమం \n \n3) \nఆ͓Ēతం \n \n4) \nѬతం"
  },
  {
    "id": 488,
    "printedNumber": 488,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "488. ఆ͓Ēతం కĢĈన పóęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "అƿȳట"
      },
      {
        "number": 2,
        "text": "ƺĐȸనȕ"
      },
      {
        "number": 3,
        "text": "అపɂడӐу"
      },
      {
        "number": 4,
        "text": "అతɇంత"
      }
    ],
    "correctOption": 3,
    "correctText": "అపɂడӐу",
    "difficulty": "Not identified in source",
    "sourceText": "488. ఆ͓Ēతం కĢĈన పóęɁ йĠȽంచంĒ \n1) \nఅƿȳట \n2) \nƺĐȸనȕ \n \n3) \nఅపɂడӐу \n \n4) \nఅతɇంత"
  },
  {
    "id": 489,
    "printedNumber": 489,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "489. œటɊę నరకవшȿ. ఈ Āకɇంǖ ‘ę’ ʛతɇయం ఈ ĤభĆȽĆ œంėనė",
    "options": [
      {
        "number": 1,
        "text": "తృĹûĤభĆȽ"
      },
      {
        "number": 2,
        "text": "ėɌĹûĤభĆȽ"
      },
      {
        "number": 3,
        "text": "షŊȹĤభĆȽ"
      },
      {
        "number": 4,
        "text": "సపȽłĤభĆȽ"
      }
    ],
    "correctOption": 2,
    "correctText": "ėɌĹûĤభĆȽ",
    "difficulty": "Not identified in source",
    "sourceText": "489. œటɊę నరకవшȿ. ఈ Āకɇంǖ ‘ę’ ʛతɇయం ఈ ĤభĆȽĆ œంėనė \n1) \nతృĹûĤభĆȽ \n2) \nėɌĹûĤభĆȽ \n \n3) \nషŊȹĤభĆȽ \n \n4) \nసపȽłĤభĆȽ"
  },
  {
    "id": 490,
    "printedNumber": 490,
    "topic": "అక్షరాలు, ఉచ్చారణ స్థానం మరియు ధ్వనులు",
    "stem": "490. Ҡʖంǖ œĚɂన Āɇకరణâరɇం తపɂęసĠä జరగడం",
    "options": [
      {
        "number": 1,
        "text": "ęƒధం"
      },
      {
        "number": 2,
        "text": "ЍకĢɂకం"
      },
      {
        "number": 3,
        "text": "బљళం"
      },
      {
        "number": 4,
        "text": "ęతɇం"
      }
    ],
    "correctOption": 4,
    "correctText": "ęతɇం",
    "difficulty": "Not identified in source",
    "sourceText": "490. Ҡʖంǖ œĚɂన Āɇకరణâరɇం తపɂęసĠä జరగడం \n1) \nęƒధం \n \n2) \nЍకĢɂకం \n \n3) \nబљళం \n \n4) \nęతɇం"
  },
  {
    "id": 491,
    "printedNumber": 491,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "491. úయమɆ పదంǖ ‘ț’ వచȳన Ĥôనం",
    "options": [
      {
        "number": 1,
        "text": "ఆగమంä"
      },
      {
        "number": 2,
        "text": "ఆƃశంä"
      },
      {
        "number": 3,
        "text": "ఏâƃశం"
      },
      {
        "number": 4,
        "text": "ЍకĢɂకం"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆగమంä",
    "difficulty": "Not identified in source",
    "sourceText": "491. úయమɆ పదంǖ ‘ț’ వచȳన Ĥôనం \n1) \nఆగమంä \n \n2) \nఆƃశంä \n \n3) \nఏâƃశం \n \n4) \nЍకĢɂకం"
  },
  {
    "id": 492,
    "printedNumber": 492,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "492. Ģంగ వచన ĤభзȽѓ Ǝęė",
    "options": [
      {
        "number": 1,
        "text": "õమĀచకం"
      },
      {
        "number": 2,
        "text": "సరɌõమం"
      },
      {
        "number": 3,
        "text": "అవɇయం"
      },
      {
        "number": 4,
        "text": "ˏయ"
      }
    ],
    "correctOption": 3,
    "correctText": "అవɇయం",
    "difficulty": "Not identified in source",
    "sourceText": "492. Ģంగ వచన ĤభзȽѓ Ǝęė \n \n1) \nõమĀచకం \n \n2) \nసరɌõమం \n \n3) \nఅవɇయం \n \n4) \nˏయ"
  },
  {
    "id": 493,
    "printedNumber": 493,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "493. సంғరȼ అందЇన ыలǉటъ ҄ħంė. ఈ Āకɇంǖ ‘అందЇన’ \nఅƅ పదం ఏ ùĂùగం",
    "options": [
      {
        "number": 1,
        "text": "õమĀచకం"
      },
      {
        "number": 2,
        "text": "ˏయ"
      },
      {
        "number": 3,
        "text": "సరɌõమం"
      },
      {
        "number": 4,
        "text": "ĤƑషణం"
      }
    ],
    "correctOption": 4,
    "correctText": "ĤƑషణం",
    "difficulty": "Not identified in source",
    "sourceText": "493. సంғరȼ అందЇన ыలǉటъ ҄ħంė. ఈ Āకɇంǖ ‘అందЇన’ \nఅƅ పదం ఏ ùĂùగం \n1) \nõమĀచకం \n \n2) \nˏయ \n \n3) \nసరɌõమం \n \n4) \nĤƑషణం"
  },
  {
    "id": 494,
    "printedNumber": 494,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "494. Ѭతя అనä",
    "options": [
      {
        "number": 1,
        "text": "ప âరя"
      },
      {
        "number": 2,
        "text": "న âరя"
      },
      {
        "number": 3,
        "text": "ల âరя"
      },
      {
        "number": 4,
        "text": "హ âరя"
      }
    ],
    "correctOption": 2,
    "correctText": "న âరя",
    "difficulty": "Not identified in source",
    "sourceText": "494. Ѭతя అనä \n1) \nప âరя \n2) \nన âరя \n \n3) \nల âరя \n \n4) \nహ âరя"
  },
  {
    "id": 495,
    "printedNumber": 495,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "495. Ɔёз బшѓ Āžė",
    "options": [
      {
        "number": 1,
        "text": "õమĀచకం"
      },
      {
        "number": 2,
        "text": "సరɌõమం"
      },
      {
        "number": 3,
        "text": "ˏయ"
      },
      {
        "number": 4,
        "text": "ĤƑషణం"
      }
    ],
    "correctOption": 2,
    "correctText": "సరɌõమం",
    "difficulty": "Not identified in source",
    "sourceText": "495. Ɔёз బшѓ Āžė \n \n1) \nõమĀచకం \n \n2) \nసరɌõమం \n \n3) \nˏయ \n \n4) \nĤƑషణం"
  },
  {
    "id": 496,
    "printedNumber": 496,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "496. Ćంė ĀĐę జత పరచంĒ \n \n1. õమĀచకం \na. చėĀъ \n \n2. ĤƑషణం \n \nb. ఆŦ \n \n3. సరɌõమం  \nc. వనజ \n \n4. ˏయ \n \nd. ఎʡę",
    "options": [
      {
        "number": 1,
        "text": "1 – c\n2 – a\n3 – d\n4 - b"
      },
      {
        "number": 2,
        "text": "1 – c\n2 – d\n3 – b\n4 - a"
      },
      {
        "number": 3,
        "text": "1 – d\n2 – c\n3 – b\n4 - a"
      },
      {
        "number": 4,
        "text": "1 – c\n2 – a\n3 – b\n4 - d"
      }
    ],
    "correctOption": 2,
    "correctText": "1 – c\n2 – d\n3 – b\n4 - a",
    "difficulty": "Not identified in source",
    "sourceText": "496. Ćంė ĀĐę జత పరచంĒ \n \n1. õమĀచకం \na. చėĀъ \n \n2. ĤƑషణం \n \nb. ఆŦ \n \n3. సరɌõమం  \nc. వనజ \n \n4. ˏయ \n \nd. ఎʡę \n \n1) \n1 – c  \n2 – a  \n3 – d   \n4 - b \n \n2) \n1 – c   \n2 – d  \n3 – b   \n4 - a \n \n3) \n1 – d  \n2 – c  \n3 – b   \n4 - a \n \n4) \n1 – c   \n2 – a  \n3 – b   \n4 - d"
  },
  {
    "id": 497,
    "printedNumber": 497,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "497. సంĘâరɇం ƖęɁ ƿటɊ ęతɇంä, ƖęɁƿటɊ ęƒధంä, ƖęɁ ƿటɊ \nЍకĢɂకంä, ƖęɁƿటɊ అనɇĤధంä జరగడం",
    "options": [
      {
        "number": 1,
        "text": "ęƒధం"
      },
      {
        "number": 2,
        "text": "ЍకĢɂకం"
      },
      {
        "number": 3,
        "text": "బљళం"
      },
      {
        "number": 4,
        "text": "ęతɇం"
      }
    ],
    "correctOption": 3,
    "correctText": "బљళం",
    "difficulty": "Not identified in source",
    "sourceText": "497. సంĘâరɇం ƖęɁ ƿటɊ ęతɇంä, ƖęɁƿటɊ ęƒధంä, ƖęɁ ƿటɊ \nЍకĢɂకంä, ƖęɁƿటɊ అనɇĤధంä జరగడం \n \n1) \nęƒధం \n \n2) \nЍకĢɂకం \n \n3) \nబљళం \n \n4) \nęతɇం"
  },
  {
    "id": 498,
    "printedNumber": 498,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "498. ғరɌపరసɌüలз మధɇǖ అదనంä ఒక అɕరం ŷరడం",
    "options": [
      {
        "number": 1,
        "text": "ఆƃశం"
      },
      {
        "number": 2,
        "text": "ఏâƃశం"
      },
      {
        "number": 3,
        "text": "ఆగమం"
      },
      {
        "number": 4,
        "text": "కళѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఆగమం",
    "difficulty": "Not identified in source",
    "sourceText": "498. ғరɌపరసɌüలз మధɇǖ అదనంä ఒక అɕరం ŷరడం \n1) \nఆƃశం \n2) \nఏâƃశం \n \n3) \nఆగమం \n \n4) \nకళѓ"
  },
  {
    "id": 499,
    "printedNumber": 499,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "499. Ҡǔɇదయం Ɩరз పóɆѓ Ɛċ ఉõɁğ. ఈ Āకɇంǖ ‘Ɩరз’ \nఅƅ పదం ఈ ĤభĆȽĆ œంшцంė",
    "options": [
      {
        "number": 1,
        "text": "ėɌĹûĤభĆȽ"
      },
      {
        "number": 2,
        "text": "చцńȾĤభĆȽ"
      },
      {
        "number": 3,
        "text": "షŊȹĤభĆȽ"
      },
      {
        "number": 4,
        "text": "సపȽłĤభĆȽ"
      }
    ],
    "correctOption": 2,
    "correctText": "చцńȾĤభĆȽ",
    "difficulty": "Not identified in source",
    "sourceText": "499. Ҡǔɇదయం Ɩరз పóɆѓ Ɛċ ఉõɁğ. ఈ Āకɇంǖ ‘Ɩరз’ \nఅƅ పదం ఈ ĤభĆȽĆ œంшцంė \n1) \nėɌĹûĤభĆȽ \n \n2) \nచцńȾĤభĆȽ \n \n3) \nషŊȹĤభĆȽ \n \n4) \nసపȽłĤభĆȽ"
  },
  {
    "id": 500,
    "printedNumber": 500,
    "topic": "వ్యాకరణం – పదభేదాలు, విభక్తులు మరియు ప్రాథమిక అంశాలు",
    "stem": "500. Ɛటäу øణంǉ పĩę Ɩìȸу. ఈ Āకɇంǖ ‘ǉ’ ఈ ĤభĆȽ",
    "options": [
      {
        "number": 1,
        "text": "ėɌĹûĤభĆȽ"
      },
      {
        "number": 2,
        "text": "చцńȾĤభĆȽ"
      },
      {
        "number": 3,
        "text": "పంచłĤభĆȽ"
      },
      {
        "number": 4,
        "text": "తృĹûĤభĆȽ"
      }
    ],
    "correctOption": 4,
    "correctText": "తృĹûĤభĆȽ",
    "difficulty": "Not identified in source",
    "sourceText": "500. Ɛటäу øణంǉ పĩę Ɩìȸу. ఈ Āకɇంǖ ‘ǉ’ ఈ ĤభĆȽ \n \n1) \nėɌĹûĤభĆȽ \n \n2) \nచцńȾĤభĆȽ \n \n3) \nపంచłĤభĆȽ \n \n4) \nతృĹûĤభĆȽ"
  },
  {
    "id": 501,
    "printedNumber": 501,
    "topic": "సంధులు",
    "stem": "501. పóలమధɇ సంబంôęɁ ŝĢƆė",
    "options": [
      {
        "number": 1,
        "text": "˞కя"
      },
      {
        "number": 2,
        "text": "ĤభĆȽ"
      },
      {
        "number": 3,
        "text": "ఆƃశం"
      },
      {
        "number": 4,
        "text": "ėɌతɌం"
      }
    ],
    "correctOption": 2,
    "correctText": "ĤభĆȽ",
    "difficulty": "Not identified in source",
    "sourceText": "501. పóలమధɇ సంబంôęɁ ŝĢƆė \n1) \n˞కя \n \n2) \nĤభĆȽ \n \n3) \nఆƃశం \n \n4) \nėɌతɌం"
  },
  {
    "id": 502,
    "printedNumber": 502,
    "topic": "సంధులు",
    "stem": "502. ˏయз ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "üо"
      },
      {
        "number": 2,
        "text": "ыѓы"
      },
      {
        "number": 3,
        "text": "చėĀъ"
      },
      {
        "number": 4,
        "text": "అతу"
      }
    ],
    "correctOption": 3,
    "correctText": "చėĀъ",
    "difficulty": "Not identified in source",
    "sourceText": "502. ˏయз ఉóహరణ \n1) \nüо \n2) \nыѓы \n \n3) \nచėĀъ \n \n4) \nఅతу"
  },
  {
    "id": 503,
    "printedNumber": 503,
    "topic": "సంధులు",
    "stem": "503. సంǐధన ʛథúĤభĆȽĆ œంėనė",
    "options": [
      {
        "number": 1,
        "text": "అంшȕ, నȕ"
      },
      {
        "number": 2,
        "text": "ఓ, ఓğ, ఓĠ, ఓħ"
      },
      {
        "number": 3,
        "text": "Ɩఱзȕ, ϯ"
      },
      {
        "number": 4,
        "text": "у, я, ѕ, ѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఓ, ఓğ, ఓĠ, ఓħ",
    "difficulty": "Not identified in source",
    "sourceText": "503. సంǐధన ʛథúĤభĆȽĆ œంėనė \n1) \nఅంшȕ, నȕ \n2) \nఓ, ఓğ, ఓĠ, ఓħ \n \n3) \nƖఱзȕ, ϯ \n \n4) \nу, я, ѕ, ѓ"
  },
  {
    "id": 504,
    "printedNumber": 504,
    "topic": "సంధులు",
    "stem": "504. గёతɆంцęĆ తĢɊ అంш భĆȽ ఉంė. ఈ Āకɇంǖ ‘అంш’ అƅ \nపదం ఈ ĤభĆȽ",
    "options": [
      {
        "number": 1,
        "text": "పంచłĤభĆȽ"
      },
      {
        "number": 2,
        "text": "షŊȹĤభĆȽ"
      },
      {
        "number": 3,
        "text": "సపȽłĤభĆȽ"
      },
      {
        "number": 4,
        "text": "ʛథúĤభĆȽ"
      }
    ],
    "correctOption": 3,
    "correctText": "సపȽłĤభĆȽ",
    "difficulty": "Not identified in source",
    "sourceText": "504. గёతɆంцęĆ తĢɊ అంш భĆȽ ఉంė. ఈ Āకɇంǖ ‘అంш’ అƅ \nపదం ఈ ĤభĆȽ \n \n1) \nపంచłĤభĆȽ \n \n2) \nషŊȹĤభĆȽ \n \n3) \nసపȽłĤభĆȽ \n \n4) \nʛథúĤభĆȽ"
  },
  {
    "id": 505,
    "printedNumber": 505,
    "topic": "సంధులు",
    "stem": "505. ‘మహĠɎ’ సంĘ",
    "options": [
      {
        "number": 1,
        "text": "అతɌసంĘ"
      },
      {
        "number": 2,
        "text": "సవరȼĻరȱసంĘ"
      },
      {
        "number": 3,
        "text": "йణసంĘ"
      },
      {
        "number": 4,
        "text": "యðƃశసంĘ"
      }
    ],
    "correctOption": 3,
    "correctText": "йణసంĘ",
    "difficulty": "Not identified in source",
    "sourceText": "505. ‘మహĠɎ’ సంĘ \n \n1) \nఅతɌసంĘ \n \n2) \nసవరȼĻరȱసంĘ \n \n3) \nйణసంĘ \n \n4) \nయðƃశసంĘ"
  },
  {
    "id": 506,
    "printedNumber": 506,
    "topic": "సంధులు",
    "stem": "506. Ćంė పóలǉ సంщలъ జతపరచంĒ \n \n1. ధɌజŦĕȽ \n \na. йణసంĘ \n \n2. ʿðరȾяѓ \nb. ఉతɌసంĘ \n \n3. üŹశɌĠ \n \nc. అతɌసంĘ \n \n4. కవìзѓ  \nd. సవరȼĻరȱసంĘ",
    "options": [
      {
        "number": 1,
        "text": "1 – b\n2 – c\n3 – a\n4 - d"
      },
      {
        "number": 2,
        "text": "1 – a\n2 –d\n3 – c\n4 - b"
      },
      {
        "number": 3,
        "text": "1 – b\n2 –d\n3 – a\n4 - c"
      },
      {
        "number": 4,
        "text": "1 – c\n2 – a\n3 – b\n4 - d"
      }
    ],
    "correctOption": 3,
    "correctText": "1 – b\n2 –d\n3 – a\n4 - c",
    "difficulty": "Not identified in source",
    "sourceText": "506. Ćంė పóలǉ సంщలъ జతపరచంĒ \n \n1. ధɌజŦĕȽ \n \na. йణసంĘ \n \n2. ʿðరȾяѓ \nb. ఉతɌసంĘ \n \n3. üŹశɌĠ \n \nc. అతɌసంĘ \n \n4. కవìзѓ  \nd. సవరȼĻరȱసంĘ \n \n1) \n1 – b   \n2 – c  \n3 – a  \n4 - d \n \n2) \n1 – a   \n2 –d  \n3 – c  \n4 - b \n \n3) \n1 – b   \n2 –d  \n3 – a  \n4 - c \n \n4) \n1 – c   \n2 – a  \n3 – b  \n4 - d"
  },
  {
    "id": 507,
    "printedNumber": 507,
    "topic": "సంధులు",
    "stem": "507. Ćంė Āęǖ సరÿƃశ సంĘ âęė",
    "options": [
      {
        "number": 1,
        "text": "ƘపɂĀуగó"
      },
      {
        "number": 2,
        "text": "üఁగలу"
      },
      {
        "number": 3,
        "text": "వœȳఁదĢɊ"
      },
      {
        "number": 4,
        "text": "పсȸఁబŘȸъ"
      }
    ],
    "correctOption": 1,
    "correctText": "ƘపɂĀуగó",
    "difficulty": "Not identified in source",
    "sourceText": "507. Ćంė Āęǖ సరÿƃశ సంĘ âęė \n1) \nƘపɂĀуగó \n2) \nüఁగలу \n \n3) \nవœȳఁదĢɊ \n \n4) \nపсȸఁబŘȸъ"
  },
  {
    "id": 508,
    "printedNumber": 508,
    "topic": "సంధులు",
    "stem": "508. నу + ఇѓɊ పóęɁ కĢĚన ҙపం",
    "options": [
      {
        "number": 1,
        "text": "నуĞѓɊ"
      },
      {
        "number": 2,
        "text": "నĐȸѓɊ"
      },
      {
        "number": 3,
        "text": "నĒğѓɊ"
      },
      {
        "number": 4,
        "text": "õğѓɊ"
      }
    ],
    "correctOption": 2,
    "correctText": "నĐȸѓɊ",
    "difficulty": "Not identified in source",
    "sourceText": "508. నу + ఇѓɊ పóęɁ కĢĚన ҙపం \n \n1) \nనуĞѓɊ \n \n2) \nనĐȸѓɊ \n \n3) \nనĒğѓɊ \n \n4) \nõğѓɊ"
  },
  {
    "id": 509,
    "printedNumber": 509,
    "topic": "సంధులు",
    "stem": "509. అతɌసంĘĆ ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "ƊనѓɊу"
      },
      {
        "number": 2,
        "text": "ƷяɆలйм"
      },
      {
        "number": 3,
        "text": "âģâంబ"
      },
      {
        "number": 4,
        "text": "ఏమంĐĤ"
      }
    ],
    "correctOption": 1,
    "correctText": "ƊనѓɊу",
    "difficulty": "Not identified in source",
    "sourceText": "509. అతɌసంĘĆ ఉóహరణ \n1) \nƊనѓɊу \n2) \nƷяɆలйм \n \n3) \nâģâంబ \n \n4) \nఏమంĐĤ"
  },
  {
    "id": 510,
    "printedNumber": 510,
    "topic": "సంధులు",
    "stem": "510. అభɇంతరం - సంĘ",
    "options": [
      {
        "number": 1,
        "text": "సవరȼĻరȱసంĘ"
      },
      {
        "number": 2,
        "text": "యðƃశసంĘ"
      },
      {
        "number": 3,
        "text": "йణసంĘ"
      },
      {
        "number": 4,
        "text": "ఇతɌసంĘ"
      }
    ],
    "correctOption": 2,
    "correctText": "యðƃశసంĘ",
    "difficulty": "Not identified in source",
    "sourceText": "510. అభɇంతరం - సంĘ \n1) \nసవరȼĻరȱసంĘ \n2) \nయðƃశసంĘ \n \n3) \nйణసంĘ \n \n4) \nఇతɌసంĘ"
  },
  {
    "id": 511,
    "printedNumber": 511,
    "topic": "సంధులు",
    "stem": "511. ыసȽâѓ పóęɁ ĤడĻħనҙపం",
    "options": [
      {
        "number": 1,
        "text": "ыసȽ + âѓ"
      },
      {
        "number": 2,
        "text": "ыసȽక + ѓ"
      },
      {
        "number": 3,
        "text": "ыసȽక + ఆѓ"
      },
      {
        "number": 4,
        "text": "ыసȽకя + ѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "ыసȽకя + ѓ",
    "difficulty": "Not identified in source",
    "sourceText": "511. ыసȽâѓ పóęɁ ĤడĻħనҙపం \n1) \nыసȽ + âѓ \n \n2) \nыసȽక + ѓ \n \n3) \nыసȽక + ఆѓ \n \n4) \nыసȽకя + ѓ"
  },
  {
    "id": 512,
    "printedNumber": 512,
    "topic": "సంధులు",
    "stem": "512. ƖѓѕƓħ పóęɁ ĤడĻయంĒ",
    "options": [
      {
        "number": 1,
        "text": "Ɩѓѕ + Ɠħ"
      },
      {
        "number": 2,
        "text": "Ɩѓ + ŷħ"
      },
      {
        "number": 3,
        "text": "Ɩѓѕ + ŷħ"
      },
      {
        "number": 4,
        "text": "Ɩѓѕ + Źħ"
      }
    ],
    "correctOption": 3,
    "correctText": "Ɩѓѕ + ŷħ",
    "difficulty": "Not identified in source",
    "sourceText": "512. ƖѓѕƓħ పóęɁ ĤడĻయంĒ \n1) \nƖѓѕ + Ɠħ \n \n2) \nƖѓ + ŷħ \n \n3) \nƖѓѕ + ŷħ \n \n4) \nƖѓѕ + Źħ"
  },
  {
    "id": 513,
    "printedNumber": 513,
    "topic": "సంధులు",
    "stem": "513. సవరȼĻరȱసంĘ ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "ęїȹǔзȽѓ"
      },
      {
        "number": 2,
        "text": "ыðɇцɆу"
      },
      {
        "number": 3,
        "text": "అĀɌĠ"
      },
      {
        "number": 4,
        "text": "ƎƮగȰѓ"
      }
    ],
    "correctOption": 2,
    "correctText": "ыðɇцɆу",
    "difficulty": "Not identified in source",
    "sourceText": "513. సవరȼĻరȱసంĘ ఉóహరణ \n \n1) \nęїȹǔзȽѓ \n \n2) \nыðɇцɆу \n \n3) \nఅĀɌĠ \n \n4) \nƎƮగȰѓ"
  },
  {
    "id": 514,
    "printedNumber": 514,
    "topic": "సంధులు",
    "stem": "514. âరɇяŪలɊ – సంĘ",
    "options": [
      {
        "number": 1,
        "text": "అతɌసంĘ"
      },
      {
        "number": 2,
        "text": "ఇతɌసంĘ"
      },
      {
        "number": 3,
        "text": "ఉతɌసంĘ"
      },
      {
        "number": 4,
        "text": "ѓ ల న ల సంĘ"
      }
    ],
    "correctOption": 3,
    "correctText": "ఉతɌసంĘ",
    "difficulty": "Not identified in source",
    "sourceText": "514. âరɇяŪలɊ – సంĘ \n1) \nఅతɌసంĘ \n \n2) \nఇతɌసంĘ \n \n3) \nఉతɌసంĘ \n \n4) \nѓ ల న ల సంĘ"
  },
  {
    "id": 515,
    "printedNumber": 515,
    "topic": "సంధులు",
    "stem": "515. іóɀцɆу పóęɁ ĤడĻయంĒ",
    "options": [
      {
        "number": 1,
        "text": "іóɀ + ఆцɆу"
      },
      {
        "number": 2,
        "text": "іదɀ + అцɆу"
      },
      {
        "number": 3,
        "text": "іదɀ + ఆцɆу"
      },
      {
        "number": 4,
        "text": "і + ఆцɆу"
      }
    ],
    "correctOption": 3,
    "correctText": "іదɀ + ఆцɆу",
    "difficulty": "Not identified in source",
    "sourceText": "515. іóɀцɆу పóęɁ ĤడĻయంĒ \n1) \nіóɀ + ఆцɆу \n2) \nіదɀ + అцɆу \n \n3) \nіదɀ + ఆцɆу \n \n4) \nі + ఆцɆу"
  },
  {
    "id": 516,
    "printedNumber": 516,
    "topic": "సంధులు",
    "stem": "516. Ćంė Āęǖ йణసంĘ పదం",
    "options": [
      {
        "number": 1,
        "text": "Ĉńіу"
      },
      {
        "number": 2,
        "text": "పǔపâరం"
      },
      {
        "number": 3,
        "text": "అనɁదяɆѓ"
      },
      {
        "number": 4,
        "text": "üమయɇ"
      }
    ],
    "correctOption": 2,
    "correctText": "పǔపâరం",
    "difficulty": "Not identified in source",
    "sourceText": "516. Ćంė Āęǖ йణసంĘ పదం \n \n1) \nĈńіу \n \n2) \nపǔపâరం \n \n3) \nఅనɁదяɆѓ \n \n4) \nüమయɇ"
  },
  {
    "id": 517,
    "printedNumber": 517,
    "topic": "సంధులు",
    "stem": "517. జరగŲĞ – పóęɁ ĤడĻħన ҙపం",
    "options": [
      {
        "number": 1,
        "text": "జరగ + ŲĞ"
      },
      {
        "number": 2,
        "text": "జరగక + ఇĞ"
      },
      {
        "number": 3,
        "text": "జరగక + ఏĞ"
      },
      {
        "number": 4,
        "text": "జరగз + Ğ"
      }
    ],
    "correctOption": 3,
    "correctText": "జరగక + ఏĞ",
    "difficulty": "Not identified in source",
    "sourceText": "517. జరగŲĞ – పóęɁ ĤడĻħన ҙపం \n \n1) \nజరగ + ŲĞ \n \n2) \nజరగక + ఇĞ \n \n3) \nజరగక + ఏĞ \n \n4) \nజరగз + Ğ"
  },
  {
    "id": 518,
    "printedNumber": 518,
    "topic": "సంధులు",
    "stem": "518. üęė + అę పóęɁ కĢĚన ҙపం",
    "options": [
      {
        "number": 1,
        "text": "üనę"
      },
      {
        "number": 2,
        "text": "üęėę"
      },
      {
        "number": 3,
        "text": "üęదę"
      },
      {
        "number": 4,
        "text": "üదę"
      }
    ],
    "correctOption": 3,
    "correctText": "üęదę",
    "difficulty": "Not identified in source",
    "sourceText": "518. üęė + అę పóęɁ కĢĚన ҙపం \n \n1) \nüనę \n \n2) \nüęėę \n \n3) \nüęదę \n \n4) \nüదę"
  },
  {
    "id": 519,
    "printedNumber": 519,
    "topic": "సంధులు",
    "stem": "519. ‘పėంతѓ’ ఈ సంĘ పదం",
    "options": [
      {
        "number": 1,
        "text": "అతɌసంĘ"
      },
      {
        "number": 2,
        "text": "ఉతɌసంĘ"
      },
      {
        "number": 3,
        "text": "йణసంĘ"
      },
      {
        "number": 4,
        "text": "ఇతɌసంĘ"
      }
    ],
    "correctOption": 4,
    "correctText": "ఇతɌసంĘ",
    "difficulty": "Not identified in source",
    "sourceText": "519. ‘పėంతѓ’ ఈ సంĘ పదం \n1) \nఅతɌసంĘ \n2) \nఉతɌసంĘ \n \n3) \nйణసంĘ \n \n4) \nఇతɌసంĘ"
  },
  {
    "id": 520,
    "printedNumber": 520,
    "topic": "సంధులు",
    "stem": "520. నъఁøħ పóęɁ ĤడĻħన ҙపం",
    "options": [
      {
        "number": 1,
        "text": "నъ + øħ"
      },
      {
        "number": 2,
        "text": "నъȕ + öħ"
      },
      {
        "number": 3,
        "text": "నъ + øħ"
      },
      {
        "number": 4,
        "text": "న + ఉöħ"
      }
    ],
    "correctOption": 2,
    "correctText": "నъȕ + öħ",
    "difficulty": "Not identified in source",
    "sourceText": "520. నъఁøħ పóęɁ ĤడĻħన ҙపం \n1) \nనъ + øħ \n \n2) \nనъȕ + öħ \n \n3) \nనъ + øħ \n \n4) \nన + ఉöħ"
  },
  {
    "id": 521,
    "printedNumber": 521,
    "topic": "సంధులు",
    "stem": "521. ęజяşĢħ – ఈ సంĘ పదం",
    "options": [
      {
        "number": 1,
        "text": "ఉతɌసంĘ"
      },
      {
        "number": 2,
        "text": "సరÿƃశ సంĘ"
      },
      {
        "number": 3,
        "text": "గసడదĀƃశ సంĘ"
      },
      {
        "number": 4,
        "text": "˞క సంĘ"
      }
    ],
    "correctOption": 3,
    "correctText": "గసడదĀƃశ సంĘ",
    "difficulty": "Not identified in source",
    "sourceText": "521. ęజяşĢħ – ఈ సంĘ పదం \n \n1) \nఉతɌసంĘ \n \n2) \nసరÿƃశ సంĘ \n \n3) \nగసడదĀƃశ సంĘ \n \n4) \n˞క సంĘ"
  },
  {
    "id": 522,
    "printedNumber": 522,
    "topic": "సంధులు",
    "stem": "522. అయɇǓɇ – ఈ సంĘ పదя",
    "options": [
      {
        "number": 1,
        "text": "అతɌసంĘ"
      },
      {
        "number": 2,
        "text": "ఆ͓ĒతసంĘ"
      },
      {
        "number": 3,
        "text": "యîగమసంĘ"
      },
      {
        "number": 4,
        "text": "యðƃశసంĘ"
      }
    ],
    "correctOption": 2,
    "correctText": "ఆ͓ĒతసంĘ",
    "difficulty": "Not identified in source",
    "sourceText": "522. అయɇǓɇ – ఈ సంĘ పదя \n1) \nఅతɌసంĘ \n \n2) \nఆ͓ĒతసంĘ \n \n3) \nయîగమసంĘ \n \n4) \nయðƃశసంĘ"
  },
  {
    "id": 523,
    "printedNumber": 523,
    "topic": "సంధులు",
    "stem": "523. зђ, ċђ, కу, నу, ęу శబȿంэల ఱ, డలз అмȳѓ \nపరЇనӐу ఏёɂу సంĘ",
    "options": [
      {
        "number": 1,
        "text": "ఆ͓Ēత సంĘ"
      },
      {
        "number": 2,
        "text": "ėɌёకȽటâరƃశ సంĘ"
      },
      {
        "number": 3,
        "text": "сäగమ సంĘ"
      },
      {
        "number": 4,
        "text": "ѓలనల సంĘ"
      }
    ],
    "correctOption": 2,
    "correctText": "ėɌёకȽటâరƃశ సంĘ",
    "difficulty": "Not identified in source",
    "sourceText": "523. зђ, ċђ, కу, నу, ęу శబȿంэల ఱ, డలз అмȳѓ \nపరЇనӐу ఏёɂу సంĘ \n1) \nఆ͓Ēత సంĘ \n2) \nėɌёకȽటâరƃశ సంĘ \n \n3) \nсäగమ సంĘ \n \n4) \nѓలనల సంĘ"
  },
  {
    "id": 524,
    "printedNumber": 524,
    "topic": "సంధులు",
    "stem": "524. јЉక పóęɁ ĤడĻħన ҙపం",
    "options": [
      {
        "number": 1,
        "text": "јర + ఐక"
      },
      {
        "number": 2,
        "text": "јü + ఐక"
      },
      {
        "number": 3,
        "text": "јర + ఏక"
      },
      {
        "number": 4,
        "text": "јЉ + క"
      }
    ],
    "correctOption": 3,
    "correctText": "јర + ఏక",
    "difficulty": "Not identified in source",
    "sourceText": "524. јЉక పóęɁ ĤడĻħన ҙపం \n1) \nјర + ఐక \n2) \nјü + ఐక \n \n3) \nјర + ఏక \n \n4) \nјЉ + క"
  },
  {
    "id": 525,
    "printedNumber": 525,
    "topic": "సంధులు",
    "stem": "525. సంవతɏüѓ -  సంĘ",
    "options": [
      {
        "number": 1,
        "text": "సవరȼĻరȱసంĘ"
      },
      {
        "number": 2,
        "text": "ѓ,ల,న,ల సంĘ"
      },
      {
        "number": 3,
        "text": "ёäగమసంĘ"
      },
      {
        "number": 4,
        "text": "అతɌసంĘ"
      }
    ],
    "correctOption": 2,
    "correctText": "ѓ,ల,న,ల సంĘ",
    "difficulty": "Not identified in source",
    "sourceText": "525. సంవతɏüѓ -  సంĘ \n \n1) \nసవరȼĻరȱసంĘ \n \n2) \nѓ,ల,న,ల సంĘ \n \n3) \nёäగమసంĘ \n \n4) \nఅతɌసంĘ"
  },
  {
    "id": 526,
    "printedNumber": 526,
    "topic": "సంధులు",
    "stem": "526. దɌందɌ సúసяనз ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "Ũంу ŷцѓ"
      },
      {
        "number": 2,
        "text": "âѓƓцѓ"
      },
      {
        "number": 3,
        "text": "ĀѐыѪу"
      },
      {
        "number": 4,
        "text": "నలɊకѓవ"
      }
    ],
    "correctOption": 2,
    "correctText": "âѓƓцѓ",
    "difficulty": "Not identified in source",
    "sourceText": "526. దɌందɌ సúసяనз ఉóహరణ \n \n1) \nŨంу ŷцѓ \n \n2) \nâѓƓцѓ \n \n3) \nĀѐыѪу \n \n4) \nనలɊకѓవ"
  },
  {
    "id": 527,
    "printedNumber": 527,
    "topic": "సంధులు",
    "stem": "527. అăధɇя  - సúసя",
    "options": [
      {
        "number": 1,
        "text": "అవɇŃùవ సúసం"
      },
      {
        "number": 2,
        "text": "ėɌй సúసం"
      },
      {
        "number": 3,
        "text": "ҙపక సúసం"
      },
      {
        "number": 4,
        "text": "నȋ తцɂёష సúసం"
      }
    ],
    "correctOption": 4,
    "correctText": "నȋ తцɂёష సúసం",
    "difficulty": "Not identified in source",
    "sourceText": "527. అăధɇя  - సúసя \n \n1) \nఅవɇŃùవ సúసం \n \n2) \nėɌй సúసం \n \n3) \nҙపక సúసం \n \n4) \nనȋ తцɂёష సúసం"
  },
  {
    "id": 528,
    "printedNumber": 528,
    "topic": "సంధులు",
    "stem": "528. øలɇ˳డѓ ĤʉహĀకɇం йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "øలɇం ƯకȮ ˳డѓ"
      },
      {
        "number": 2,
        "text": "øలɇం మĠѐ ˳డѓ"
      },
      {
        "number": 3,
        "text": "øలɇЇన ˳డѓ"
      },
      {
        "number": 4,
        "text": "øలɇమంш ˳డѓ"
      }
    ],
    "correctOption": 4,
    "correctText": "øలɇమంш ˳డѓ",
    "difficulty": "Not identified in source",
    "sourceText": "528. øలɇ˳డѓ ĤʉహĀకɇం йĠȽంచంĒ \n1) \nøలɇం ƯకȮ ˳డѓ \n2) \nøలɇం మĠѐ ˳డѓ \n \n3) \nøలɇЇన ˳డѓ \n \n4) \nøలɇమంш ˳డѓ"
  },
  {
    "id": 529,
    "printedNumber": 529,
    "topic": "సంధులు",
    "stem": "529. ĤƑషణ ғరɌపద కరɆôరయ సúăęĆ ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "మృшమщరం"
      },
      {
        "number": 2,
        "text": "కĤ͚їȹу"
      },
      {
        "number": 3,
        "text": "ƎతƮగȰ"
      },
      {
        "number": 4,
        "text": "õѓй Ɛóѓ"
      }
    ],
    "correctOption": 3,
    "correctText": "ƎతƮగȰ",
    "difficulty": "Not identified in source",
    "sourceText": "529. ĤƑషణ ғరɌపద కరɆôరయ సúăęĆ ఉóహరణ  \n \n1) \nమృшమщరం \n \n2) \nకĤ͚їȹу \n \n3) \nƎతƮగȰ \n \n4) \nõѓй Ɛóѓ"
  },
  {
    "id": 530,
    "printedNumber": 530,
    "topic": "సంధులు",
    "stem": "530. óɌరâనగరం ĤʉహĀకɇం",
    "options": [
      {
        "number": 1,
        "text": "óɌరక ƯకȮ నగరం"
      },
      {
        "number": 2,
        "text": "óɌరక అъƆё గల నగరం"
      },
      {
        "number": 3,
        "text": "óɌరక యంш నగరం"
      },
      {
        "number": 4,
        "text": "óɌరకѐъ , నగరяъ"
      }
    ],
    "correctOption": 2,
    "correctText": "óɌరక అъƆё గల నగరం",
    "difficulty": "Not identified in source",
    "sourceText": "530. óɌరâనగరం ĤʉహĀకɇం  \n1) \nóɌరక ƯకȮ నగరం \n2) \nóɌరక అъƆё గల నగరం \n \n3) \nóɌరక యంш నగరం \n \n4) \nóɌరకѐъ , నగరяъ"
  },
  {
    "id": 531,
    "printedNumber": 531,
    "topic": "సమాసాలు",
    "stem": "531. ‘ఏуĻѕѓ’ ఈ సúసం",
    "options": [
      {
        "number": 1,
        "text": "ėɌй సúసం"
      },
      {
        "number": 2,
        "text": "దɌందɌ సúసం"
      },
      {
        "number": 3,
        "text": "ҙపక సúసం"
      },
      {
        "number": 4,
        "text": "బљ̑Ĩ సúసం"
      }
    ],
    "correctOption": 1,
    "correctText": "ėɌй సúసం",
    "difficulty": "Not identified in source",
    "sourceText": "531. ‘ఏуĻѕѓ’ ఈ సúసం \n1) \nėɌй సúసం \n2) \nదɌందɌ సúసం \n \n3) \nҙపక సúసం \n \n4) \nబљ̑Ĩ సúసం"
  },
  {
    "id": 532,
    "printedNumber": 532,
    "topic": "సమాసాలు",
    "stem": "532. ‘ʛĕėనя’ ĤʉహĀకɇя",
    "options": [
      {
        "number": 1,
        "text": "ʛĕ అъ Ɔёగల ėనя"
      },
      {
        "number": 2,
        "text": "ʛĕ Ѐన ėనя"
      },
      {
        "number": 3,
        "text": "ėనя ėనя"
      },
      {
        "number": 4,
        "text": "ʛĕƯకȮ ėనя"
      }
    ],
    "correctOption": 3,
    "correctText": "ėనя ėనя",
    "difficulty": "Not identified in source",
    "sourceText": "532. ‘ʛĕėనя’ ĤʉహĀకɇя \n1) \nʛĕ అъ Ɔёగల ėనя \n \n2) \nʛĕ Ѐన ėనя \n \n3) \nėనя ėనя \n \n4) \nʛĕƯకȮ ėనя"
  },
  {
    "id": 533,
    "printedNumber": 533,
    "topic": "సమాసాలు",
    "stem": "533. పంచł తцɂёష సúăęĆ ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "šలñѓɂ"
      },
      {
        "number": 2,
        "text": "Ƨంగభయం"
      },
      {
        "number": 3,
        "text": "úటƅరɂĠ"
      },
      {
        "number": 4,
        "text": "üజыѪу"
      }
    ],
    "correctOption": 2,
    "correctText": "Ƨంగభయం",
    "difficulty": "Not identified in source",
    "sourceText": "533. పంచł తцɂёష సúăęĆ ఉóహరణ \n1) \nšలñѓɂ \n \n2) \nƧంగభయం \n \n3) \núటƅరɂĠ \n \n4) \nüజыѪу"
  },
  {
    "id": 534,
    "printedNumber": 534,
    "topic": "సమాసాలు",
    "stem": "534. ǽరɇలɝ ఈ సúసం",
    "options": [
      {
        "number": 1,
        "text": "షŊȹతцɂёష సúసం"
      },
      {
        "number": 2,
        "text": "దɌందɌ సúసం"
      },
      {
        "number": 3,
        "text": "ĤƑషణ ғరɌపద కరɆôరయ సúసం"
      },
      {
        "number": 4,
        "text": "ҙపక సúసం"
      }
    ],
    "correctOption": 4,
    "correctText": "ҙపక సúసం",
    "difficulty": "Not identified in source",
    "sourceText": "534. ǽరɇలɝ ఈ సúసం \n \n1) \nషŊȹతцɂёష సúసం \n \n2) \nదɌందɌ సúసం \n \n3) \nĤƑషణ ғరɌపద కరɆôరయ సúసం \n \n4) \nҙపక సúసం"
  },
  {
    "id": 535,
    "printedNumber": 535,
    "topic": "సమాసాలు",
    "stem": "535. Ćంė సúసపóలз సúăలъ జతపరచంĒ \n \n1. నĒƌğ \n \na. షŊȹతцɂёష సúసం \n \n2. õѓйపంзȽѓ \nb.  ĤƑషణ ғరɌపదకరɆôరయ సúసం \n \n3. Ɗѓవăɓѓ \nc. ėɌйసúసం \n \n4. యజȷఫలం  \nd. ʛథúతцɂёష సúసం",
    "options": [
      {
        "number": 1,
        "text": "1 – b\n2 – c\n3 – a\n4 - d"
      },
      {
        "number": 2,
        "text": "1 – d\n2 – b\n3 – a\n4 - c"
      },
      {
        "number": 3,
        "text": "1 – d\n2 – c\n3 – b\n4 - a"
      },
      {
        "number": 4,
        "text": "1 – b\n2 – c\n3 – d\n4 - a"
      }
    ],
    "correctOption": 3,
    "correctText": "1 – d\n2 – c\n3 – b\n4 - a",
    "difficulty": "Not identified in source",
    "sourceText": "535. Ćంė సúసపóలз సúăలъ జతపరచంĒ \n \n1. నĒƌğ \n \na. షŊȹతцɂёష సúసం \n \n2. õѓйపంзȽѓ \nb.  ĤƑషణ ғరɌపదకరɆôరయ సúసం \n \n3. Ɗѓవăɓѓ \nc. ėɌйసúసం \n \n4. యజȷఫలం  \nd. ʛథúతцɂёష సúసం \n1) \n1 – b  \n2 – c  \n3 – a  \n4 - d  \n \n2) \n1 – d  \n2 – b  \n3 – a  \n4 - c \n \n3) \n1 – d  \n2 – c  \n3 – b  \n4 - a \n \n4) \n1 – b  \n2 – c  \n3 – d  \n4 - a"
  },
  {
    "id": 536,
    "printedNumber": 536,
    "topic": "సమాసాలు",
    "stem": "536. øలøĢకѓ ఈ సúసం",
    "options": [
      {
        "number": 1,
        "text": "ėɌйసúసం"
      },
      {
        "number": 2,
        "text": "దɌందɌసúసం"
      },
      {
        "number": 3,
        "text": "బљ̑Ĩసúసం"
      },
      {
        "number": 4,
        "text": "ҙపకసúసం"
      }
    ],
    "correctOption": 2,
    "correctText": "దɌందɌసúసం",
    "difficulty": "Not identified in source",
    "sourceText": "536. øలøĢకѓ ఈ సúసం \n1) \nėɌйసúసం \n2) \nదɌందɌసúసం \n \n3) \nబљ̑Ĩసúసం \n \n4) \nҙపకసúసం"
  },
  {
    "id": 537,
    "printedNumber": 537,
    "topic": "సమాసాలు",
    "stem": "537. ėɌйసúăęĆ ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "అనɁదяɆѓ"
      },
      {
        "number": 2,
        "text": "üజభవనం"
      },
      {
        "number": 3,
        "text": "яǖɊâѓ"
      },
      {
        "number": 4,
        "text": "ƖతȽыసȽకం"
      }
    ],
    "correctOption": 3,
    "correctText": "яǖɊâѓ",
    "difficulty": "Not identified in source",
    "sourceText": "537. ėɌйసúăęĆ ఉóహరణ \n \n1) \nఅనɁదяɆѓ \n \n2) \nüజభవనం \n \n3) \nяǖɊâѓ \n \n4) \nƖతȽыసȽకం"
  },
  {
    "id": 538,
    "printedNumber": 538,
    "topic": "సమాసాలు",
    "stem": "538. ŝలɊöѕరం సúసం",
    "options": [
      {
        "number": 1,
        "text": "దɌందɌ సúసం"
      },
      {
        "number": 2,
        "text": "ĤƑషణ ғరɌపద కరɆôరయ సúసం"
      },
      {
        "number": 3,
        "text": "షŊȹ తцɂёష సúసం"
      },
      {
        "number": 4,
        "text": "ĤƑషణ ఉతȽరపద కరɆôరయ సúసం"
      }
    ],
    "correctOption": 2,
    "correctText": "ĤƑషణ ғరɌపద కరɆôరయ సúసం",
    "difficulty": "Not identified in source",
    "sourceText": "538. ŝలɊöѕరం సúసం \n \n1) \nదɌందɌ సúసం \n \n2) \nĤƑషణ ғరɌపద కరɆôరయ సúసం \n \n3) \nషŊȹ తцɂёష సúసం \n \n4) \nĤƑషణ ఉతȽరపద కరɆôరయ సúసం"
  },
  {
    "id": 539,
    "printedNumber": 539,
    "topic": "సమాసాలు",
    "stem": "539. మృшమщరం ఈ సúసం",
    "options": [
      {
        "number": 1,
        "text": "ĤƑషణ ғరɌపదకరɆôరయ సúసం"
      },
      {
        "number": 2,
        "text": "ĤƑషణ ఉతȽరపదకరɆôరయ సúసం"
      },
      {
        "number": 3,
        "text": "ĤƑషణ ఉభయపదకరɆôరయ సúసం"
      },
      {
        "number": 4,
        "text": "బљ̑Ĩ సúసం"
      }
    ],
    "correctOption": 3,
    "correctText": "ĤƑషణ ఉభయపదకరɆôరయ సúసం",
    "difficulty": "Not identified in source",
    "sourceText": "539. మృшమщరం ఈ సúసం \n \n1) \nĤƑషణ ғరɌపదకరɆôరయ సúసం \n \n2) \nĤƑషణ ఉతȽరపదకరɆôరయ సúసం \n \n3) \nĤƑషణ ఉభయపదకరɆôరయ సúసం \n \n4) \nబљ̑Ĩ సúసం"
  },
  {
    "id": 540,
    "printedNumber": 540,
    "topic": "సమాసాలు",
    "stem": "540. షŊȹ తцɂёష సúăęĆ ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "Ɗѓవăɓѓ"
      },
      {
        "number": 2,
        "text": "õѓйపంзȽѓ"
      },
      {
        "number": 3,
        "text": "ఎйуėйу"
      },
      {
        "number": 4,
        "text": "üజыѪу"
      }
    ],
    "correctOption": 4,
    "correctText": "üజыѪу",
    "difficulty": "Not identified in source",
    "sourceText": "540. షŊȹ తцɂёష సúăęĆ ఉóహరణ \n1) \nƊѓవăɓѓ \n2) \nõѓйపంзȽѓ \n \n3) \nఎйуėйу \n \n4) \nüజыѪу"
  },
  {
    "id": 541,
    "printedNumber": 541,
    "topic": "సమాసాలు",
    "stem": "541. ǙకవĨɁ ĤʉహĀకɇం йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "Ǚకя నంш వĨɁ"
      },
      {
        "number": 2,
        "text": "Ǚకя ƯకȮ వĨɁ"
      },
      {
        "number": 3,
        "text": "ǙకమšĒ వĨɁ"
      },
      {
        "number": 4,
        "text": "Ǚకяъ వĨъ"
      }
    ],
    "correctOption": 3,
    "correctText": "ǙకమšĒ వĨɁ",
    "difficulty": "Not identified in source",
    "sourceText": "541. ǙకవĨɁ ĤʉహĀకɇం йĠȽంచంĒ \n1) \nǙకя నంш వĨɁ \n \n2) \nǙకя ƯకȮ వĨɁ \n \n3) \nǙకమšĒ వĨɁ \n \n4) \nǙకяъ వĨъ"
  },
  {
    "id": 542,
    "printedNumber": 542,
    "topic": "సమాసాలు",
    "stem": "542. అъవరɎం ఈ సúసం",
    "options": [
      {
        "number": 1,
        "text": "ėɌйసúసం"
      },
      {
        "number": 2,
        "text": "ҙపకసúసం"
      },
      {
        "number": 3,
        "text": "బљ̑Ĩసúసం"
      },
      {
        "number": 4,
        "text": "అవɇŃùవ సúసం"
      }
    ],
    "correctOption": 4,
    "correctText": "అవɇŃùవ సúసం",
    "difficulty": "Not identified in source",
    "sourceText": "542. అъవరɎం ఈ సúసం \n \n1) \nėɌйసúసం \n \n2) \nҙపకసúసం \n \n3) \nబљ̑Ĩసúసం \n \n4) \nఅవɇŃùవ సúసం"
  },
  {
    "id": 543,
    "printedNumber": 543,
    "topic": "సమాసాలు",
    "stem": "543. ƽరరణం ĤʉహĀకɇం",
    "options": [
      {
        "number": 1,
        "text": "ƽరя ƯకȮ రణం"
      },
      {
        "number": 2,
        "text": "ƽరЇన రణం"
      },
      {
        "number": 3,
        "text": "ƽరя నంш రణం"
      },
      {
        "number": 4,
        "text": "ƽరя రణя"
      }
    ],
    "correctOption": 2,
    "correctText": "ƽరЇన రణం",
    "difficulty": "Not identified in source",
    "sourceText": "543. ƽరరణం ĤʉహĀకɇం \n1) \nƽరя ƯకȮ రణం \n \n2) \nƽరЇన రణం \n \n3) \nƽరя నంш రణం \n \n4) \nƽరя రణя"
  },
  {
    "id": 544,
    "printedNumber": 544,
    "topic": "సమాసాలు",
    "stem": "544. ‘ĚలɊలʛపంచం’ ఈ సúసం",
    "options": [
      {
        "number": 1,
        "text": "దɌందɌసúసం"
      },
      {
        "number": 2,
        "text": "ėɌйసúసం"
      },
      {
        "number": 3,
        "text": "షŊȹతцɂёషసúసం"
      },
      {
        "number": 4,
        "text": "ĤƑషణ ғరɌపద కరɆôరయ సúసం"
      }
    ],
    "correctOption": 3,
    "correctText": "షŊȹతцɂёషసúసం",
    "difficulty": "Not identified in source",
    "sourceText": "544. ‘ĚలɊలʛపంచం’ ఈ సúసం \n1) \nదɌందɌసúసం \n2) \nėɌйసúసం \n \n3) \nషŊȹతцɂёషసúసం \n \n4) \nĤƑషణ ғరɌపద కరɆôరయ సúసం"
  },
  {
    "id": 545,
    "printedNumber": 545,
    "topic": "సమాసాలు",
    "stem": "545. ‘ǽరɇపüʇమяѓ’ ఈ సúసం",
    "options": [
      {
        "number": 1,
        "text": "ėɌй సúసం"
      },
      {
        "number": 2,
        "text": "సంùవనғరɌపదకరɆôరయ సúసం"
      },
      {
        "number": 3,
        "text": "షŊȹతцɂёష సúసం"
      },
      {
        "number": 4,
        "text": "దɌందɌ సúసం"
      }
    ],
    "correctOption": 4,
    "correctText": "దɌందɌ సúసం",
    "difficulty": "Not identified in source",
    "sourceText": "545. ‘ǽరɇపüʇమяѓ’ ఈ సúసం \n1) \nėɌй సúసం \n2) \nసంùవనғరɌపదకరɆôరయ సúసం \n \n3) \nషŊȹతцɂёష సúసం \n \n4) \nదɌందɌ సúసం"
  },
  {
    "id": 546,
    "printedNumber": 546,
    "topic": "సమాసాలు",
    "stem": "546. ‘మృగƅ˞’ ఈ సúసం",
    "options": [
      {
        "number": 1,
        "text": "ʛథúతцɂёష సúసం"
      },
      {
        "number": 2,
        "text": "షŊȹతцɂёష సúసం"
      },
      {
        "number": 3,
        "text": "బљ̑Ĩ సúసం"
      },
      {
        "number": 4,
        "text": "దɌందɌ సúసం"
      }
    ],
    "correctOption": 3,
    "correctText": "బљ̑Ĩ సúసం",
    "difficulty": "Not identified in source",
    "sourceText": "546. ‘మృగƅ˞’ ఈ సúసం \n \n1) \nʛథúతцɂёష సúసం \n \n2) \nషŊȹతцɂёష సúసం \n \n3) \nబљ̑Ĩ సúసం \n \n4) \nదɌందɌ సúసం"
  },
  {
    "id": 547,
    "printedNumber": 547,
    "topic": "సమాసాలు",
    "stem": "547. స, భ, ర, న, మ, య, వ గðѓ  ఈ పదɇöóęĆ œంėనĤ",
    "options": [
      {
        "number": 1,
        "text": "ఉతɂలúల"
      },
      {
        "number": 2,
        "text": "చంపకúల"
      },
      {
        "number": 3,
        "text": "āҙȿలం"
      },
      {
        "number": 4,
        "text": "మƁȽభం"
      }
    ],
    "correctOption": 4,
    "correctText": "మƁȽభం",
    "difficulty": "Not identified in source",
    "sourceText": "547. స, భ, ర, న, మ, య, వ గðѓ  ఈ పదɇöóęĆ œంėనĤ \n \n1) \nఉతɂలúల \n \n2) \nచంపకúల \n \n3) \nāҙȿలం \n \n4) \nమƁȽభం"
  },
  {
    "id": 548,
    "printedNumber": 548,
    "topic": "సమాసాలు",
    "stem": "548. చంపకúల పదɇంǖ యĕЇ˞ ఈ అɕరంǉ œѓɊцంė",
    "options": [
      {
        "number": 1,
        "text": "10వ"
      },
      {
        "number": 2,
        "text": "11వ"
      },
      {
        "number": 3,
        "text": "13వ"
      },
      {
        "number": 4,
        "text": "14వ"
      }
    ],
    "correctOption": 2,
    "correctText": "11వ",
    "difficulty": "Not identified in source",
    "sourceText": "548. చంపకúల పదɇంǖ యĕЇ˞ ఈ అɕరంǉ œѓɊцంė \n \n1) \n10వ \n \n2) \n11వ \n \n3) \n13వ \n \n4) \n14వ"
  },
  {
    "id": 549,
    "printedNumber": 549,
    "topic": "ఛందస్సు",
    "stem": "549. ‘ఎంతѐ వృшɀЋ తమз Ľƴకёండవ ŝపɂäఁగ న (తɇ)’  \nపదɇöదం ఈ ఛందјɏз œంėనė",
    "options": [
      {
        "number": 1,
        "text": "చంపకúల"
      },
      {
        "number": 2,
        "text": "మƁȽభం"
      },
      {
        "number": 3,
        "text": "ఉతɂలúల"
      },
      {
        "number": 4,
        "text": "āҙȿలం"
      }
    ],
    "correctOption": 3,
    "correctText": "ఉతɂలúల",
    "difficulty": "Not identified in source",
    "sourceText": "549. ‘ఎంతѐ వృшɀЋ తమз Ľƴకёండవ ŝపɂäఁగ న (తɇ)’  \nపదɇöదం ఈ ఛందјɏз œంėనė \n1) \nచంపకúల \n2) \nమƁȽభం \n \n3) \nఉతɂలúల \n \n4) \nāҙȿలం"
  },
  {
    "id": 550,
    "printedNumber": 550,
    "topic": "ఛందస్సు",
    "stem": "550. ‘త’ గణం ƯకȮ గðѓ",
    "options": [
      {
        "number": 1,
        "text": "U I U"
      },
      {
        "number": 2,
        "text": "I I U"
      },
      {
        "number": 3,
        "text": "U U U"
      },
      {
        "number": 4,
        "text": "U U I"
      }
    ],
    "correctOption": 4,
    "correctText": "U U I",
    "difficulty": "Not identified in source",
    "sourceText": "550. ‘త’ గణం ƯకȮ గðѓ \n \n1) \nU I U \n \n2) \nI I U \n \n3) \nU U U  \n \n4) \nU U I"
  },
  {
    "id": 551,
    "printedNumber": 551,
    "topic": "ఛందస్సు",
    "stem": "551. మ, స, జ, స, త, త, గ, గðѓ ఈ పదɇöదంǖ ఉంìğ",
    "options": [
      {
        "number": 1,
        "text": "చంపకúల"
      },
      {
        "number": 2,
        "text": "మƁȽభం"
      },
      {
        "number": 3,
        "text": "ఉతɂలúల"
      },
      {
        "number": 4,
        "text": "āҙȿలం"
      }
    ],
    "correctOption": 4,
    "correctText": "āҙȿలం",
    "difficulty": "Not identified in source",
    "sourceText": "551. మ, స, జ, స, త, త, గ, గðѓ ఈ పదɇöదంǖ ఉంìğ \n1) \nచంపకúల \n2) \nమƁȽభం \n \n3) \nఉతɂలúల \n \n4) \nāҙȿలం"
  },
  {
    "id": 552,
    "printedNumber": 552,
    "topic": "ఛందస్సు",
    "stem": "552. ‘సతñçరя Ҡనృతంэ కృపѐȕ సతɇంэъȕ ŉలяȕ’ ఈ \nపదɇöదంǖę ఛందјɏ",
    "options": [
      {
        "number": 1,
        "text": "ఉతɂలúల"
      },
      {
        "number": 2,
        "text": "చంపకúల"
      },
      {
        "number": 3,
        "text": "āҙȿలం"
      },
      {
        "number": 4,
        "text": "మƁȽభం"
      }
    ],
    "correctOption": 4,
    "correctText": "మƁȽభం",
    "difficulty": "Not identified in source",
    "sourceText": "552. ‘సతñçరя Ҡనృతంэ కృపѐȕ సతɇంэъȕ ŉలяȕ’ ఈ \nపదɇöదంǖę ఛందјɏ \n \n1) \nఉతɂలúల \n \n2) \nచంపకúల \n \n3) \nāҙȿలం \n \n4) \nమƁȽభం"
  },
  {
    "id": 553,
    "printedNumber": 553,
    "topic": "ఛందస్సు",
    "stem": "553. 14వ అɕరంǉ యĕЇ˞ œѓɊ పదɇöదం",
    "options": [
      {
        "number": 1,
        "text": "మƁȽభం"
      },
      {
        "number": 2,
        "text": "āҙȿలం"
      },
      {
        "number": 3,
        "text": "చంపకúల"
      },
      {
        "number": 4,
        "text": "ఉతɂలúల"
      }
    ],
    "correctOption": 1,
    "correctText": "మƁȽభం",
    "difficulty": "Not identified in source",
    "sourceText": "553. 14వ అɕరంǉ యĕЇ˞ œѓɊ పదɇöదం  \n1) \nమƁȽభం \n \n2) \nāҙȿలం \n \n3) \nచంపకúల \n \n4) \nఉతɂలúల"
  },
  {
    "id": 554,
    "printedNumber": 554,
    "topic": "ఛందస్సు",
    "stem": "554. Ćంė పదɇöóలǖ చంపకúల పదɇяనз œంėన పదɇöదం",
    "options": [
      {
        "number": 1,
        "text": "ĽĕλఢĤĄёЋన ęыхȞ ęంėంపĽ ŦచȳĽ"
      },
      {
        "number": 2,
        "text": "ధరǖ šంతĐ шరȵъండğన సతɏంగ ʛùవంэŷఁ"
      },
      {
        "number": 3,
        "text": "పѓచę Ľచúనѕఁу öĐఁదలంపక ęїȹǔзȽలం"
      },
      {
        "number": 4,
        "text": "Ҙరы ƃశమĐȸсల Ғగగ ǽరɇపüʇమంэలȕ"
      }
    ],
    "correctOption": 3,
    "correctText": "పѓచę Ľచúనѕఁу öĐఁదలంపక ęїȹǔзȽలం",
    "difficulty": "Not identified in source",
    "sourceText": "554. Ćంė పదɇöóలǖ చంపకúల పదɇяనз œంėన పదɇöదం \n1) \nĽĕλఢĤĄёЋన ęыхȞ ęంėంపĽ ŦచȳĽ \n \n2) \nధరǖ šంతĐ шరȵъండğన సతɏంగ ʛùవంэŷఁ \n \n3) \nపѓచę Ľచúనѕఁу öĐఁదలంపక ęїȹǔзȽలం \n \n4) \nҘరы ƃశమĐȸсల Ғగగ ǽరɇపüʇమంэలȕ"
  },
  {
    "id": 555,
    "printedNumber": 555,
    "topic": "ఛందస్సు",
    "stem": "555. Ćంė ĀĐę జతపరచంĒ \n \n1. ఉతɂలúల  \na.  న జ భ జ జ జ ర \n \n2. āҙȿలం  \nb.  మ స జ స త త గ \n \n3. మƁȽభం \n \nc.  భ ర న భ భ ర వ \n \n4. చంపకúల \nd.  స భ ర న మ య వ",
    "options": [
      {
        "number": 1,
        "text": "1 –c\n2 – d\n3 – a\n4 - b"
      },
      {
        "number": 2,
        "text": "1 –c\n2 – b\n3 – d\n4 - a"
      },
      {
        "number": 3,
        "text": "1 – a\n2 – b\n3 – c\n4 - d"
      },
      {
        "number": 4,
        "text": "1 – d\n2 – b\n3 – a\n4 - c"
      }
    ],
    "correctOption": 2,
    "correctText": "1 –c\n2 – b\n3 – d\n4 - a",
    "difficulty": "Not identified in source",
    "sourceText": "555. Ćంė ĀĐę జతపరచంĒ \n \n1. ఉతɂలúల  \na.  న జ భ జ జ జ ర \n \n2. āҙȿలం  \nb.  మ స జ స త త గ \n \n3. మƁȽభం \n \nc.  భ ర న భ భ ర వ \n \n4. చంపకúల \nd.  స భ ర న మ య వ \n1) \n1 –c   \n2 – d  \n3 – a  \n4 - b  \n \n2) \n1 –c  \n2 – b  \n3 – d  \n4 - a \n \n3) \n1 – a  \n2 – b  \n3 – c  \n4 - d \n \n4) \n1 – d  \n2 – b  \n3 – a  \n4 - c"
  },
  {
    "id": 556,
    "printedNumber": 556,
    "topic": "ఛందస్సు",
    "stem": "556. న, జ, భ, జ, జ, జ, ర గðѓ కల పదɇöదం",
    "options": [
      {
        "number": 1,
        "text": "ఉతɂలúల"
      },
      {
        "number": 2,
        "text": "చంపకúల"
      },
      {
        "number": 3,
        "text": "āҙȿలం"
      },
      {
        "number": 4,
        "text": "మƁȽభం"
      }
    ],
    "correctOption": 2,
    "correctText": "చంపకúల",
    "difficulty": "Not identified in source",
    "sourceText": "556. న, జ, భ, జ, జ, జ, ర గðѓ కల పదɇöదం \n \n1) \nఉతɂలúల \n \n2) \nచంపకúల \n \n3) \nāҙȿలం \n \n4) \nమƁȽభం"
  },
  {
    "id": 557,
    "printedNumber": 557,
    "topic": "ఛందస్సు",
    "stem": "557. భ, ర, న, భ, భ, ర, వ గðѓ గల పదɇöదం",
    "options": [
      {
        "number": 1,
        "text": "ఉతɂలúల"
      },
      {
        "number": 2,
        "text": "చంపకúల"
      },
      {
        "number": 3,
        "text": "మƁȽభం"
      },
      {
        "number": 4,
        "text": "āҙȿలం"
      }
    ],
    "correctOption": 1,
    "correctText": "ఉతɂలúల",
    "difficulty": "Not identified in source",
    "sourceText": "557. భ, ర, న, భ, భ, ర, వ గðѓ గల పదɇöదం \n \n1) \nఉతɂలúల \n \n2) \nచంపకúల \n \n3) \nమƁȽభం \n \n4) \nāҙȿలం"
  },
  {
    "id": 558,
    "printedNumber": 558,
    "topic": "ఛందస్సు",
    "stem": "558. మƁȽభం పదɇöదంǖ గల అɕüల సంఖɇ",
    "options": [
      {
        "number": 1,
        "text": "18"
      },
      {
        "number": 2,
        "text": "19"
      },
      {
        "number": 3,
        "text": "20"
      },
      {
        "number": 4,
        "text": "21"
      }
    ],
    "correctOption": 3,
    "correctText": "20",
    "difficulty": "Not identified in source",
    "sourceText": "558. మƁȽభం పదɇöదంǖ గల అɕüల సంఖɇ \n \n1) \n18 \n \n2) \n19 \n \n3) \n20 \n \n4) \n21"
  },
  {
    "id": 559,
    "printedNumber": 559,
    "topic": "ఛందస్సు",
    "stem": "559. 13వ అɕరంǉ యĕЇ˞ œѓɊ పదɇöదం",
    "options": [
      {
        "number": 1,
        "text": "ఉతɂలúల"
      },
      {
        "number": 2,
        "text": "āҙȿలం"
      },
      {
        "number": 3,
        "text": "చంపకúల"
      },
      {
        "number": 4,
        "text": "మƁȽభం"
      }
    ],
    "correctOption": 2,
    "correctText": "āҙȿలం",
    "difficulty": "Not identified in source",
    "sourceText": "559. 13వ అɕరంǉ యĕЇ˞ œѓɊ పదɇöదం \n \n1) \nఉతɂలúల \n \n2) \nāҙȿలం \n \n3) \nచంపకúల \n \n4) \nమƁȽభం"
  },
  {
    "id": 560,
    "printedNumber": 560,
    "topic": "ఛందస్సు",
    "stem": "560. ‘ĽĕλఢĤĄёЋన ęыхȞ ęంėంపĽ ŦచȳĽ’ ఈ \nపదɇöదంǖę ఛందјɏ",
    "options": [
      {
        "number": 1,
        "text": "ఉతɂలúల"
      },
      {
        "number": 2,
        "text": "మƁȽభం"
      },
      {
        "number": 3,
        "text": "చంపకúల"
      },
      {
        "number": 4,
        "text": "āҙȿలం"
      }
    ],
    "correctOption": 4,
    "correctText": "āҙȿలం",
    "difficulty": "Not identified in source",
    "sourceText": "560. ‘ĽĕλఢĤĄёЋన ęыхȞ ęంėంపĽ ŦచȳĽ’ ఈ \nపదɇöదంǖę ఛందјɏ \n \n1) \nఉతɂలúల \n \n2) \nమƁȽభం \n \n3) \nచంపకúల \n \n4) \nāҙȿలం"
  },
  {
    "id": 561,
    "printedNumber": 561,
    "topic": "ఛందస్సు",
    "stem": "561. āҙȿలపదɇöదంǖ ఉంž అɕüల సంఖɇ",
    "options": [
      {
        "number": 1,
        "text": "19"
      },
      {
        "number": 2,
        "text": "20"
      },
      {
        "number": 3,
        "text": "21"
      },
      {
        "number": 4,
        "text": "18"
      }
    ],
    "correctOption": 1,
    "correctText": "19",
    "difficulty": "Not identified in source",
    "sourceText": "561. āҙȿలపదɇöదంǖ ఉంž అɕüల సంఖɇ \n1) \n19 \n2) \n20 \n \n3) \n21 \n \n4) \n18"
  },
  {
    "id": 562,
    "printedNumber": 562,
    "topic": "ఛందస్సు",
    "stem": "562. చంపకúల పదɇంǖ ʛĹöóęĆ గల అɕరసంఖɇ",
    "options": [
      {
        "number": 1,
        "text": "20"
      },
      {
        "number": 2,
        "text": "21"
      },
      {
        "number": 3,
        "text": "19"
      },
      {
        "number": 4,
        "text": "18"
      }
    ],
    "correctOption": 2,
    "correctText": "21",
    "difficulty": "Not identified in source",
    "sourceText": "562. చంపకúల పదɇంǖ ʛĹöóęĆ గల అɕరసంఖɇ \n1) \n20 \n \n2) \n21 \n \n3) \n19 \n \n4) \n18"
  },
  {
    "id": 563,
    "printedNumber": 563,
    "topic": "ఛందస్సు",
    "stem": "563. ఉతɂలúల పదɇöదంǖ యĕ Ї˞ œƎɊ అɕరం",
    "options": [
      {
        "number": 1,
        "text": "9"
      },
      {
        "number": 2,
        "text": "10"
      },
      {
        "number": 3,
        "text": "11"
      },
      {
        "number": 4,
        "text": "13"
      }
    ],
    "correctOption": 2,
    "correctText": "10",
    "difficulty": "Not identified in source",
    "sourceText": "563. ఉతɂలúల పదɇöదంǖ యĕ Ї˞ œƎɊ అɕరం  \n \n1) \n9 \n \n2) \n10 \n \n3) \n11 \n \n4) \n13"
  },
  {
    "id": 564,
    "printedNumber": 564,
    "topic": "ఛందస్సు",
    "stem": "564. “అరణɇం” ఈ గణం",
    "options": [
      {
        "number": 1,
        "text": "స గణం"
      },
      {
        "number": 2,
        "text": "న గణం"
      },
      {
        "number": 3,
        "text": "త గణం"
      },
      {
        "number": 4,
        "text": "య గణం"
      }
    ],
    "correctOption": 4,
    "correctText": "య గణం",
    "difficulty": "Not identified in source",
    "sourceText": "564. “అరణɇం” ఈ గణం \n1) \nస గణం \n \n2) \nన గణం \n \n3) \nత గణం \n \n4) \nయ గణం"
  },
  {
    "id": 565,
    "printedNumber": 565,
    "topic": "ఛందస్సు",
    "stem": "565. జ గణం",
    "options": [
      {
        "number": 1,
        "text": "U I I"
      },
      {
        "number": 2,
        "text": "U U I"
      },
      {
        "number": 3,
        "text": "I U I"
      },
      {
        "number": 4,
        "text": "I U U"
      }
    ],
    "correctOption": 3,
    "correctText": "I U I",
    "difficulty": "Not identified in source",
    "sourceText": "565. జ గణం  \n1) \nU I I  \n2) \nU U I \n \n3) \nI U I \n \n4) \nI U U"
  },
  {
    "id": 566,
    "printedNumber": 566,
    "topic": "ఛందస్సు",
    "stem": "566. ర గణంз œంėన పóęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "Ĩంǋళ"
      },
      {
        "number": 2,
        "text": "јôమ"
      },
      {
        "number": 3,
        "text": "јమĹ"
      },
      {
        "number": 4,
        "text": "మండపం"
      }
    ],
    "correctOption": 4,
    "correctText": "మండపం",
    "difficulty": "Not identified in source",
    "sourceText": "566. ర గణంз œంėన పóęɁ йĠȽంచంĒ \n1) \nĨంǋళ \n2) \nјôమ \n \n3) \nјమĹ \n \n4) \nమండపం"
  },
  {
    "id": 567,
    "printedNumber": 567,
    "topic": "ఛందస్సు",
    "stem": "567. U U U ఈగణం",
    "options": [
      {
        "number": 1,
        "text": "న గణం"
      },
      {
        "number": 2,
        "text": "భ గణం"
      },
      {
        "number": 3,
        "text": "మ గణం"
      },
      {
        "number": 4,
        "text": "స గణం"
      }
    ],
    "correctOption": 3,
    "correctText": "మ గణం",
    "difficulty": "Not identified in source",
    "sourceText": "567. U U U ఈగణం \n \n1) \nన గణం \n \n2) \nభ గణం \n \n3) \nమ గణం \n \n4) \nస గణం"
  },
  {
    "id": 568,
    "printedNumber": 568,
    "topic": "ఛందస్సు",
    "stem": "568. ‘ļరňర పüʇమ üзúర! Ǝü ǎёసѓప కదĢüర!’ ఈ \nĀకɇంǖę అలంâüęɁ йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "Ÿâъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "þìъʿăలంâరం"
      },
      {
        "number": 3,
        "text": "యమâలంâరం"
      },
      {
        "number": 4,
        "text": "వృతȽɹъʿăలంâరం"
      }
    ],
    "correctOption": 4,
    "correctText": "వృతȽɹъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "568. ‘ļరňర పüʇమ üзúర! Ǝü ǎёసѓప కదĢüర!’ ఈ \nĀకɇంǖę అలంâüęɁ йĠȽంచంĒ \n \n1) \nŸâъʿăలంâరం \n \n2) \nþìъʿăలంâరం \n \n3) \nయమâలంâరం \n \n4) \nవృతȽɹъʿăలంâరం"
  },
  {
    "id": 569,
    "printedNumber": 569,
    "topic": "ఛందస్సు",
    "stem": "569. ‘సúనవüȼѓగల పóѓ అరȾƉదం కĢĈ Ŭంట Ŭంటƅ \nʛǓĈƓȽ’ అė ఈ అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "వృతȽɹъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "Ÿâъʿăలంâరం"
      },
      {
        "number": 3,
        "text": "యమâలంâరం"
      },
      {
        "number": 4,
        "text": "అంñɇъʿăలంâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "Ÿâъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "569. ‘సúనవüȼѓగల పóѓ అరȾƉదం కĢĈ Ŭంట Ŭంటƅ \nʛǓĈƓȽ’ అė ఈ అలంâరం \n \n1) \nవృతȽɹъʿăలంâరం \n \n2) \nŸâъʿăలంâరం \n \n3) \nయమâలంâరం \n \n4) \nఅంñɇъʿăలంâరం"
  },
  {
    "id": 570,
    "printedNumber": 570,
    "topic": "ఛందస్సు",
    "stem": "570. ‘కమþʄనĠȳంм కరяѓ కరяѓ.’ ఇంшǖę అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "యమకя"
      },
      {
        "number": 2,
        "text": "Ÿâъʿసя"
      },
      {
        "number": 3,
        "text": "þìъʿసя"
      },
      {
        "number": 4,
        "text": "వృతȽɹъʿసя"
      }
    ],
    "correctOption": 3,
    "correctText": "þìъʿసя",
    "difficulty": "Not identified in source",
    "sourceText": "570. ‘కమþʄనĠȳంм కరяѓ కరяѓ.’ ఇంшǖę అలంâరం \n1) \nయమకя \n2) \nŸâъʿసя \n \n3) \nþìъʿసя \n \n4) \nవృతȽɹъʿసя"
  },
  {
    "id": 571,
    "printedNumber": 571,
    "topic": "అలంకారాలు",
    "stem": "571. ‘üమøణం తĈĢ ĀĢ ĀĢǎŧъ. ’ ఈ Āకɇంǖ గల \nఅలంâరం",
    "options": [
      {
        "number": 1,
        "text": "వృతȽɹъʿసúలంâరం"
      },
      {
        "number": 2,
        "text": "Ÿâъʿăలంâరం"
      },
      {
        "number": 3,
        "text": "þìъʿăలంâరం"
      },
      {
        "number": 4,
        "text": "యమâలంâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "Ÿâъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "571. ‘üమøణం తĈĢ ĀĢ ĀĢǎŧъ. ’ ఈ Āకɇంǖ గల \nఅలంâరం \n \n1) \nవృతȽɹъʿసúలంâరం \n \n2) \nŸâъʿăలంâరం \n \n3) \nþìъʿăలంâరం \n \n4) \nయమâలంâరం"
  },
  {
    "id": 572,
    "printedNumber": 572,
    "topic": "అలంకారాలు",
    "stem": "572. Ƽరంతъ Ɩండంత ŷħ œĚɂనсɊğƁ óęę ఏ అలంâరం \nఅంìё",
    "options": [
      {
        "number": 1,
        "text": "సɌùǘĆȽ అలంâరం"
      },
      {
        "number": 2,
        "text": "అĕశǓĆȽ అలంâరం"
      },
      {
        "number": 3,
        "text": "ƑɊĂలంâరం"
      },
      {
        "number": 4,
        "text": "ఉƁɂɺąలంâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "అĕశǓĆȽ అలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "572. Ƽరంతъ Ɩండంత ŷħ œĚɂనсɊğƁ óęę ఏ అలంâరం \nఅంìё \n1) \nసɌùǘĆȽ అలంâరం \n2) \nఅĕశǓĆȽ అలంâరం \n \n3) \nƑɊĂలంâరం \n \n4) \nఉƁɂɺąలంâరం"
  },
  {
    "id": 573,
    "printedNumber": 573,
    "topic": "అలంకారాలు",
    "stem": "573. ‘ఆâశం âсకъ వĠɎјȽనɁсɊంė.’ ఈ Āకɇంǖę అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "ఉపúలంâరం"
      },
      {
        "number": 2,
        "text": "ҙపâలంâరం"
      },
      {
        "number": 3,
        "text": "ఉƁɂɺąలంâరం"
      },
      {
        "number": 4,
        "text": "ƑɊĂలంâరం"
      }
    ],
    "correctOption": 3,
    "correctText": "ఉƁɂɺąలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "573. ‘ఆâశం âсకъ వĠɎјȽనɁсɊంė.’ ఈ Āకɇంǖę అలంâరం \n1) \nఉపúలంâరం \n2) \nҙపâలంâరం \n \n3) \nఉƁɂɺąలంâరం \n \n4) \nƑɊĂలంâరం"
  },
  {
    "id": 574,
    "printedNumber": 574,
    "topic": "అలంకారాలు",
    "stem": "574. సяʘыటలѓ ఆâāęɁ ñзцõɁğ. ఈ Āకɇంǖę \nఅలంâరం",
    "options": [
      {
        "number": 1,
        "text": "అĕశǓĆȽ అలంâరం"
      },
      {
        "number": 2,
        "text": "సɌùǘĆȽ అలంâరం"
      },
      {
        "number": 3,
        "text": "ఉపúలంâరం"
      },
      {
        "number": 4,
        "text": "ҙపâలంâరం"
      }
    ],
    "correctOption": 1,
    "correctText": "అĕశǓĆȽ అలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "574. సяʘыటలѓ ఆâāęɁ ñзцõɁğ. ఈ Āకɇంǖę \nఅలంâరం  \n1) \nఅĕశǓĆȽ అలంâరం \n \n2) \nసɌùǘĆȽ అలంâరం \n \n3) \nఉపúలంâరం \n \n4) \nҙపâలంâరం"
  },
  {
    "id": 575,
    "printedNumber": 575,
    "topic": "అలంకారాలు",
    "stem": "575. ‘ысȸѝĒȺగ ǎзü \n \nవĐȸ Λуѕ âзü. ’ ఈ పంзȽలǖ గల అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "వృతȽɹъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "Ÿâъʿăలంâరం"
      },
      {
        "number": 3,
        "text": "þìъʿăలంâరం"
      },
      {
        "number": 4,
        "text": "అంñɇъʿăలంâరం"
      }
    ],
    "correctOption": 4,
    "correctText": "అంñɇъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "575. ‘ысȸѝĒȺగ ǎзü \n \nవĐȸ Λуѕ âзü. ’ ఈ పంзȽలǖ గల అలంâరం \n1) \nవృతȽɹъʿăలంâరం \n \n2) \nŸâъʿăలంâరం \n \n3) \nþìъʿăలంâరం \n \n4) \nఅంñɇъʿăలంâరం"
  },
  {
    "id": 576,
    "printedNumber": 576,
    "topic": "అలంకారాలు",
    "stem": "576. ‘మంċúటѓ úĔâɇల వŪ œѕలз అలంâüǺñğ. ’ ఈ \nĀకɇంǖ గల అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "ఉపúలంâరం"
      },
      {
        "number": 2,
        "text": "ҙపâలంâరం"
      },
      {
        "number": 3,
        "text": "అĕశǓĆȽ అలంâరం"
      },
      {
        "number": 4,
        "text": "ఉƁɂɺąలంâరం"
      }
    ],
    "correctOption": 1,
    "correctText": "ఉపúలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "576. ‘మంċúటѓ úĔâɇల వŪ œѕలз అలంâüǺñğ. ’ ఈ \nĀకɇంǖ గల అలంâరం \n \n1) \nఉపúలంâరం \n \n2) \nҙపâలంâరం \n \n3) \nఅĕశǓĆȽ అలంâరం \n \n4) \nఉƁɂɺąలంâరం"
  },
  {
    "id": 577,
    "printedNumber": 577,
    "topic": "అలంకారాలు",
    "stem": "577. ‘ఉపúనధüɆęɁ ఉపƊయంЃ ఆǔĚҠȽ ఉపƊûęĆ \nఉపúõęĆ అƉదం œĚɂనటɊğƁ’ అė ఈ అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "ఉపúలంâరం"
      },
      {
        "number": 2,
        "text": "ҙపâలంâరం"
      },
      {
        "number": 3,
        "text": "ఉƁɂɺąలంâరం"
      },
      {
        "number": 4,
        "text": "అĕశǓĆȽ అలంâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "ҙపâలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "577. ‘ఉపúనధüɆęɁ ఉపƊయంЃ ఆǔĚҠȽ ఉపƊûęĆ \nఉపúõęĆ అƉదం œĚɂనటɊğƁ’ అė ఈ అలంâరం \n1) \nఉపúలంâరం \n \n2) \nҙపâలంâరం \n \n3) \nఉƁɂɺąలంâరం \n \n4) \nఅĕశǓĆȽ అలంâరం"
  },
  {
    "id": 578,
    "printedNumber": 578,
    "topic": "అలంకారాలు",
    "stem": "578. ‘øĤǖĆ ƥంĈ҄ƓȽ öñళం కęĚјȽంė.’ ఈ Āకɇంǖę \nఅలంâరం",
    "options": [
      {
        "number": 1,
        "text": "ఉపúలంâరం"
      },
      {
        "number": 2,
        "text": "ҙపâలంâరం"
      },
      {
        "number": 3,
        "text": "ఉƁɂɺąలంâరం"
      },
      {
        "number": 4,
        "text": "అĕశǓĆȽ అలంâరం"
      }
    ],
    "correctOption": 4,
    "correctText": "అĕశǓĆȽ అలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "578. ‘øĤǖĆ ƥంĈ҄ƓȽ öñళం కęĚјȽంė.’ ఈ Āకɇంǖę \nఅలంâరం  \n1) \nఉపúలంâరం \n2) \nҙపâలంâరం \n \n3) \nఉƁɂɺąలంâరం \n \n4) \nఅĕశǓĆȽ అలంâరం"
  },
  {
    "id": 579,
    "printedNumber": 579,
    "topic": "అలంకారాలు",
    "stem": "579. ‘Āу బĒĆ వĒవĒä వçȳу.’ ఈ Āకɇంǖ గల అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "Ÿâъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "వృతȽɹъʿăలంâరం"
      },
      {
        "number": 3,
        "text": "þìъʿăలంâరం"
      },
      {
        "number": 4,
        "text": "అంñɇъʿăలంâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "వృతȽɹъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "579. ‘Āу బĒĆ వĒవĒä వçȳу.’ ఈ Āకɇంǖ గల అలంâరం \n \n1) \nŸâъʿăలంâరం \n \n2) \nవృతȽɹъʿăలంâరం \n \n3) \nþìъʿăలంâరం \n \n4) \nఅంñɇъʿăలంâరం"
  },
  {
    "id": 580,
    "printedNumber": 580,
    "topic": "అలంకారాలు",
    "stem": "580. ‘లɕభɕɹяѓ భĩంŷ లɜయɇз ఒకభɕɹя లɕɹú?’ ఈ \nĀకɇంǖę అలంâరя",
    "options": [
      {
        "number": 1,
        "text": "Ÿâъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "యమâలంâరం"
      },
      {
        "number": 3,
        "text": "þìъʿăలంâరం"
      },
      {
        "number": 4,
        "text": "వృతȽɹъʿăలంâరం"
      }
    ],
    "correctOption": 4,
    "correctText": "వృతȽɹъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "580. ‘లɕభɕɹяѓ భĩంŷ లɜయɇз ఒకభɕɹя లɕɹú?’ ఈ \nĀకɇంǖę అలంâరя \n \n1) \nŸâъʿăలంâరం \n \n2) \nయమâలంâరం \n \n3) \nþìъʿăలంâరం \n \n4) \nవృతȽɹъʿăలంâరం"
  },
  {
    "id": 581,
    "printedNumber": 581,
    "topic": "అలంకారాలు",
    "stem": "581. ‘వరɎ వరɎంǖ తуҠȽ ఉంė.’ ఈ Āకɇంǖę అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "వృతȽɹъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "Ÿâъʿăలంâరం"
      },
      {
        "number": 3,
        "text": "þìъʿăలంâరం"
      },
      {
        "number": 4,
        "text": "అంñɇъʿăలంâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "Ÿâъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "581. ‘వరɎ వరɎంǖ తуҠȽ ఉంė.’ ఈ Āకɇంǖę అలంâరం \n \n1) \nవృతȽɹъʿăలంâరం \n \n2) \nŸâъʿăలంâరం \n \n3) \nþìъʿăలంâరం \n \n4) \nఅంñɇъʿăలంâరం"
  },
  {
    "id": 582,
    "printedNumber": 582,
    "topic": "అలంకారాలు",
    "stem": "582. ‘మщరఫలంэĢмȳ వృɕంэ వృɕంэ.’ ఈ Āకɇంǖę \nఅలంâరం",
    "options": [
      {
        "number": 1,
        "text": "వృతȽɹъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "యమâలంâరం"
      },
      {
        "number": 3,
        "text": "þìъʿăలంâరం"
      },
      {
        "number": 4,
        "text": "ఉపúలంâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "యమâలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "582. ‘మщరఫలంэĢмȳ వృɕంэ వృɕంэ.’ ఈ Āకɇంǖę \nఅలంâరం \n1) \nవృతȽɹъʿăలంâరం \n2) \nయమâలంâరం \n \n3) \nþìъʿăలంâరం \n \n4) \nఉపúలంâరం"
  },
  {
    "id": 583,
    "printedNumber": 583,
    "topic": "అలంకారాలు",
    "stem": "583. ‘ɖõч వĠɎంм čహɌ čహɌ.’ ఈ పదɇöదంǖę అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "వృతȽɹъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "Ÿâъʿăలంâరం"
      },
      {
        "number": 3,
        "text": "ҙపâలంâరం"
      },
      {
        "number": 4,
        "text": "þìъʿăలంâరం"
      }
    ],
    "correctOption": 4,
    "correctText": "þìъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "583. ‘ɖõч వĠɎంм čహɌ čహɌ.’ ఈ పదɇöదంǖę అలంâరం \n1) \nవృతȽɹъʿăలంâరం \n \n2) \nŸâъʿăలంâరం \n \n3) \nҙపâలంâరం \n \n4) \nþìъʿăలంâరం"
  },
  {
    "id": 584,
    "printedNumber": 584,
    "topic": "అలంకారాలు",
    "stem": "584. ‘Ɛదāఖѓ ŬĢůęచȳట \n \nఆėâవɇం బలŨęచȳట’ – ఈ Āâɇలǖę అలంâరя",
    "options": [
      {
        "number": 1,
        "text": "వృతȽɹъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "ఉƁɂɺąలంâరం"
      },
      {
        "number": 3,
        "text": "యమâలంâరం"
      },
      {
        "number": 4,
        "text": "అంñɇъʿăలంâరం"
      }
    ],
    "correctOption": 4,
    "correctText": "అంñɇъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "584. ‘Ɛదāఖѓ ŬĢůęచȳట \n \nఆėâవɇం బలŨęచȳట’ – ఈ Āâɇలǖę అలంâరя \n \n1) \nవృతȽɹъʿăలంâరం \n \n2) \nఉƁɂɺąలంâరం \n \n3) \nయమâలంâరం \n \n4) \nఅంñɇъʿăలంâరం"
  },
  {
    "id": 585,
    "printedNumber": 585,
    "topic": "అలంకారాలు",
    "stem": "585. ‘üళɋъ మలċ ఆѐôѓä œзȮзõɁం. \n \nజంцѕలъ చంĚ ఆకĢ ĹёȳзõɁం’ – ఈ Āâɇలǖę \nఅలంâరం",
    "options": [
      {
        "number": 1,
        "text": "þìъʿăలంâరం"
      },
      {
        "number": 2,
        "text": "అంñɇъʿăలంâరం"
      },
      {
        "number": 3,
        "text": "ఉపúలంâరం"
      },
      {
        "number": 4,
        "text": "Ÿâъʿăలంâరం"
      }
    ],
    "correctOption": 2,
    "correctText": "అంñɇъʿăలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "585. ‘üళɋъ మలċ ఆѐôѓä œзȮзõɁం. \n \nజంцѕలъ చంĚ ఆకĢ ĹёȳзõɁం’ – ఈ Āâɇలǖę \nఅలంâరం \n1) \nþìъʿăలంâరం \n \n2) \nఅంñɇъʿăలంâరం \n \n3) \nఉపúలంâరం \n \n4) \nŸâъʿăలంâరం"
  },
  {
    "id": 586,
    "printedNumber": 586,
    "topic": "అలంకారాలు",
    "stem": "586. ‘ఆŦ яఖం చంʘĜంబం వŪ ʛâĥјȽనɁė.’ ఈ Āకɇంǖę \nఅలంâరం",
    "options": [
      {
        "number": 1,
        "text": "ఉపúలంâరం"
      },
      {
        "number": 2,
        "text": "ҙపâలంâరం"
      },
      {
        "number": 3,
        "text": "ఉƁɂɺąలంâరం"
      },
      {
        "number": 4,
        "text": "అĕశǓĆȽ అలంâరం"
      }
    ],
    "correctOption": 1,
    "correctText": "ఉపúలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "586. ‘ఆŦ яఖం చంʘĜంబం వŪ ʛâĥјȽనɁė.’ ఈ Āకɇంǖę \nఅలంâరం  \n1) \nఉపúలంâరం \n2) \nҙపâలంâరం \n \n3) \nఉƁɂɺąలంâరం \n \n4) \nఅĕశǓĆȽ అలంâరం"
  },
  {
    "id": 587,
    "printedNumber": 587,
    "topic": "అలంకారాలు",
    "stem": "587. ‘ఒక వјȽѕъ ʛħదɀЇన మưక వјȽѕǉ ǎĢȳ రమɇంä œĜƁ \nఅė’",
    "options": [
      {
        "number": 1,
        "text": "ҙపâలంâరం"
      },
      {
        "number": 2,
        "text": "అĕశǓĆȽ అలంâరం"
      },
      {
        "number": 3,
        "text": "ƑɊĂలంâరం"
      },
      {
        "number": 4,
        "text": "ఉపúలంâరం"
      }
    ],
    "correctOption": 4,
    "correctText": "ఉపúలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "587. ‘ఒక వјȽѕъ ʛħదɀЇన మưక వјȽѕǉ ǎĢȳ రమɇంä œĜƁ \nఅė’ \n1) \nҙపâలంâరం \n2) \nఅĕశǓĆȽ అలంâరం \n \n3) \nƑɊĂలంâరం \n \n4) \nఉపúలంâరం"
  },
  {
    "id": 588,
    "printedNumber": 588,
    "topic": "అలంకారాలు",
    "stem": "588. ‘ú అమɆ ŷĕవంట అమృతం. ’ ఈ Āకɇంǖ గల అలంâరం",
    "options": [
      {
        "number": 1,
        "text": "ఉపúలంâరం"
      },
      {
        "number": 2,
        "text": "ఉƁɂɺąలంâరం"
      },
      {
        "number": 3,
        "text": "ҙపâలంâరం"
      },
      {
        "number": 4,
        "text": "అĕశǓĆȽ అలంâరం"
      }
    ],
    "correctOption": 3,
    "correctText": "ҙపâలంâరం",
    "difficulty": "Not identified in source",
    "sourceText": "588. ‘ú అమɆ ŷĕవంట అమృతం. ’ ఈ Āకɇంǖ గల అలంâరం \n \n1) \nఉపúలంâరం \n \n2) \nఉƁɂɺąలంâరం \n \n3) \nҙపâలంâరం \n \n4) \nఅĕశǓĆȽ అలంâరం"
  },
  {
    "id": 589,
    "printedNumber": 589,
    "topic": "అలంకారాలు",
    "stem": "589. ҖతâĢక అసúపక ˏయ",
    "options": [
      {
        "number": 1,
        "text": "ŸదరȾకం"
      },
      {
        "number": 2,
        "text": "శʖరȾకం"
      },
      {
        "number": 3,
        "text": "âȽɾరȾకం"
      },
      {
        "number": 4,
        "text": "అపɇరȾకం"
      }
    ],
    "correctOption": 3,
    "correctText": "âȽɾరȾకం",
    "difficulty": "Not identified in source",
    "sourceText": "589. ҖతâĢక అసúపక ˏయ \n \n1) \nŸదరȾకం \n \n2) \nశʖరȾకం \n \n3) \nâȽɾరȾకం \n \n4) \nఅపɇరȾకం"
  },
  {
    "id": 590,
    "printedNumber": 590,
    "topic": "అలంకారాలు",
    "stem": "590. łё ыసȽâѓ Ĺјƺవмȳ. ఈ Āకɇం ఈ రకЇన \năúనɇĀకɇం",
    "options": [
      {
        "number": 1,
        "text": "ęƒôరȾక Āకɇం"
      },
      {
        "number": 2,
        "text": "అъమతɇరȾక Āకɇం"
      },
      {
        "number": 3,
        "text": "ʛāɁరȾక Āకɇం"
      },
      {
        "number": 4,
        "text": "ఆŉరరȾక Āకɇం"
      }
    ],
    "correctOption": 2,
    "correctText": "అъమతɇరȾక Āకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "590. łё ыసȽâѓ Ĺјƺవмȳ. ఈ Āకɇం ఈ రకЇన \năúనɇĀకɇం \n \n1) \nęƒôరȾక Āకɇం \n \n2) \nఅъమతɇరȾక Āకɇం \n \n3) \nʛāɁరȾక Āకɇం \n \n4) \nఆŉరరȾక Āకɇం"
  },
  {
    "id": 591,
    "printedNumber": 591,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "591. గంగనɁ зсంబం వలస Ŭģɋ, ıĤñęɁ గĒĚంė. ఈ Āకɇం ఈ \nరకЇన సంĥɊషȸĀకɇం",
    "options": [
      {
        "number": 1,
        "text": "âȽɾరȾకం"
      },
      {
        "number": 2,
        "text": "శʖరȾకం"
      },
      {
        "number": 3,
        "text": "ŷదరȾకం"
      },
      {
        "number": 4,
        "text": "అపɇరȾకం"
      }
    ],
    "correctOption": 1,
    "correctText": "âȽɾరȾకం",
    "difficulty": "Not identified in source",
    "sourceText": "591. గంగనɁ зсంబం వలస Ŭģɋ, ıĤñęɁ గĒĚంė. ఈ Āకɇం ఈ \nరకЇన సంĥɊషȸĀకɇం  \n1) \nâȽɾరȾకం \n2) \nశʖరȾకం \n \n3) \nŷదరȾకం \n \n4) \nఅపɇరȾకం"
  },
  {
    "id": 592,
    "printedNumber": 592,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "592. Ćంė అసúపక ˏయలǖ ŷదరȾకం йĠȽంచంĒ",
    "options": [
      {
        "number": 1,
        "text": "పĒ"
      },
      {
        "number": 2,
        "text": "పуҎ"
      },
      {
        "number": 3,
        "text": "పĒƁ"
      },
      {
        "number": 4,
        "text": "పĒõ"
      }
    ],
    "correctOption": 3,
    "correctText": "పĒƁ",
    "difficulty": "Not identified in source",
    "sourceText": "592. Ćంė అసúపక ˏయలǖ ŷదరȾకం йĠȽంచంĒ \n \n1) \nపĒ \n \n2) \nపуҎ \n \n3) \nపĒƁ \n \n4) \nపĒõ"
  },
  {
    "id": 593,
    "printedNumber": 593,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "593. āరద సంĬతం, õటɇం ƅёȳзంė. ఈ Āకɇం ఈ రకЇన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "ăúనɇĀకɇం"
      },
      {
        "number": 2,
        "text": "సంѐకȽĀకɇం"
      },
      {
        "number": 3,
        "text": "సంĥɊషȸĀకɇం"
      },
      {
        "number": 4,
        "text": "మĄĀకɇం"
      }
    ],
    "correctOption": 2,
    "correctText": "సంѐకȽĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "593. āరద సంĬతం, õటɇం ƅёȳзంė. ఈ Āకɇం ఈ రకЇన Āకɇం \n1) \năúనɇĀకɇం \n2) \nసంѐకȽĀకɇం \n \n3) \nసంĥɊషȸĀకɇం \n \n4) \nమĄĀకɇం"
  },
  {
    "id": 594,
    "printedNumber": 594,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "594. ˞జట, ėɌజట øధపîȺё. ఈ Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "ăúనɇĀకɇం"
      },
      {
        "number": 2,
        "text": "సంѐకȽĀకɇం"
      },
      {
        "number": 3,
        "text": "సంĥɊషȸĀకɇం"
      },
      {
        "number": 4,
        "text": "మĄĀకɇం"
      }
    ],
    "correctOption": 2,
    "correctText": "సంѐకȽĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "594. ˞జట, ėɌజట øధపîȺё. ఈ Āకɇం  \n1) \năúనɇĀకɇం \n2) \nసంѐకȽĀకɇం \n \n3) \nసంĥɊషȸĀకɇం \n \n4) \nమĄĀకɇం"
  },
  {
    "id": 595,
    "printedNumber": 595,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "595. šమĢ Ɛగంä వċȳంė. ఇė ఈ రకЇన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "సంѐకȽ Āకɇం"
      },
      {
        "number": 2,
        "text": "కరɆĸĀకɇం"
      },
      {
        "number": 3,
        "text": "ăúనɇĀకɇం"
      },
      {
        "number": 4,
        "text": "సంĥɊషȸĀకɇం"
      }
    ],
    "correctOption": 3,
    "correctText": "ăúనɇĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "595. šమĢ Ɛగంä వċȳంė. ఇė ఈ రకЇన Āకɇం \n1) \nసంѐకȽ Āకɇం \n \n2) \nకరɆĸĀకɇం \n \n3) \năúనɇĀకɇం \n \n4) \nసంĥɊషȸĀకɇం"
  },
  {
    "id": 596,
    "printedNumber": 596,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "596. ʛĕǔо Ҡёɇу Ҏёɂన ఉదğăȽу. ఈ Āకɇం ఈ రకЇన \năúనɇĀకɇя",
    "options": [
      {
        "number": 1,
        "text": "ĤధɇరȾకĀకɇం"
      },
      {
        "number": 2,
        "text": "అъమతɇరȾకĀకɇం"
      },
      {
        "number": 3,
        "text": "ఆŉరరȾకĀకɇం"
      },
      {
        "number": 4,
        "text": "ęశȳûరȾకĀకɇం"
      }
    ],
    "correctOption": 4,
    "correctText": "ęశȳûరȾకĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "596. ʛĕǔо Ҡёɇу Ҏёɂన ఉదğăȽу. ఈ Āకɇం ఈ రకЇన \năúనɇĀకɇя \n1) \nĤధɇరȾకĀకɇం \n \n2) \nఅъమతɇరȾకĀకɇం \n \n3) \nఆŉరరȾకĀకɇం \n \n4) \nęశȳûరȾకĀకɇం"
  },
  {
    "id": 597,
    "printedNumber": 597,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "597. వüɎѓ పĒƁ పంటѓ పంуñğ. ఈ Āకɇంǖę \nఅసúపకˏయ",
    "options": [
      {
        "number": 1,
        "text": "వüɎѓ"
      },
      {
        "number": 2,
        "text": "పĒƁ"
      },
      {
        "number": 3,
        "text": "పంటѓ"
      },
      {
        "number": 4,
        "text": "పంуñğ"
      }
    ],
    "correctOption": 2,
    "correctText": "పĒƁ",
    "difficulty": "Not identified in source",
    "sourceText": "597. వüɎѓ పĒƁ పంటѓ పంуñğ. ఈ Āకɇంǖę \nఅసúపకˏయ \n \n1) \nవüɎѓ \n \n2) \nపĒƁ \n \n3) \nపంటѓ \n \n4) \nపంуñğ"
  },
  {
    "id": 598,
    "printedNumber": 598,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "598. వరȽúనâల అసúపక ˏయ",
    "options": [
      {
        "number": 1,
        "text": "âȽɾరȾకం"
      },
      {
        "number": 2,
        "text": "ŷదరȾకం"
      },
      {
        "number": 3,
        "text": "శʖరȾకం"
      },
      {
        "number": 4,
        "text": "అపɇరȾకం"
      }
    ],
    "correctOption": 3,
    "correctText": "శʖరȾకం",
    "difficulty": "Not identified in source",
    "sourceText": "598. వరȽúనâల అసúపక ˏయ \n1) \nâȽɾరȾకం \n \n2) \nŷదరȾకం \n \n3) \nశʖరȾకం \n \n4) \nఅపɇరȾకం"
  },
  {
    "id": 599,
    "printedNumber": 599,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "599. Ĉń ఎకȮуõɁѕ? ఇė ఈ రకЇన ăúనɇĀకɇం.",
    "options": [
      {
        "number": 1,
        "text": "ఆశȳüɇరȾకĀకɇం"
      },
      {
        "number": 2,
        "text": "అъమతɇరȾకĀకɇం"
      },
      {
        "number": 3,
        "text": "ʛāɁరȾకĀకɇం"
      },
      {
        "number": 4,
        "text": "ęƒôరȾకĀకɇం"
      }
    ],
    "correctOption": 3,
    "correctText": "ʛāɁరȾకĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "599. Ĉń ఎకȮуõɁѕ? ఇė ఈ రకЇన ăúనɇĀకɇం. \n1) \nఆశȳüɇరȾకĀకɇం \n2) \nఅъమతɇరȾకĀకɇం \n \n3) \nʛāɁరȾకĀకɇం \n \n4) \nęƒôరȾకĀకɇం"
  },
  {
    "id": 600,
    "printedNumber": 600,
    "topic": "వాక్య నిర్మాణం – వాక్య రకాలు",
    "stem": "600. Āన వјȽంǋ! üǋ! ఈ రకЇన ăúనɇĀకɇя",
    "options": [
      {
        "number": 1,
        "text": "సంƃĄరɀక Āకɇం"
      },
      {
        "number": 2,
        "text": "ʛāɁరȾక Āకɇం"
      },
      {
        "number": 3,
        "text": "అъమతɇరȾక Āకɇం"
      },
      {
        "number": 4,
        "text": "ఆశȳüɇరȾక Āకɇం"
      }
    ],
    "correctOption": 1,
    "correctText": "సంƃĄరɀక Āకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "600. Āన వјȽంǋ! üǋ! ఈ రకЇన ăúనɇĀకɇя \n \n1) \nసంƃĄరɀక Āకɇం \n \n2) \nʛāɁరȾక Āకɇం \n \n3) \nఅъమతɇరȾక Āకɇం \n \n4) \nఆశȳüɇరȾక Āకɇం"
  },
  {
    "id": 601,
    "printedNumber": 601,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "601. ఆĄ ! ఎంత øйంǋ! ఇė ఈ రకЇన ăúనɇĀకɇం",
    "options": [
      {
        "number": 1,
        "text": "ʛāɁరȾక Āకɇం"
      },
      {
        "number": 2,
        "text": "అъమతɇరȾకĀకɇం"
      },
      {
        "number": 3,
        "text": "ఆŉరరȾక Āకɇం"
      },
      {
        "number": 4,
        "text": "ఆశȳüɇరȾకĀకɇం"
      }
    ],
    "correctOption": 4,
    "correctText": "ఆశȳüɇరȾకĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "601. ఆĄ ! ఎంత øйంǋ! ఇė ఈ రకЇన ăúనɇĀకɇం \n \n1) \nʛāɁరȾక Āకɇం \n \n2) \nఅъమతɇరȾకĀకɇం \n \n3) \nఆŉరరȾక Āకɇం \n \n4) \nఆశȳüɇరȾకĀకɇం"
  },
  {
    "id": 602,
    "printedNumber": 602,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "602. అలĀсъ అшыǖ ŢсȸƺంĒ. ఈ Āకɇం ఈ రకЇన \năúనɇĀకɇం",
    "options": [
      {
        "number": 1,
        "text": "ʛāɁరȾకĀకɇం"
      },
      {
        "number": 2,
        "text": "ĤధɇరȾకĀకɇం"
      },
      {
        "number": 3,
        "text": "అъమతɇరȾకĀకɇం"
      },
      {
        "number": 4,
        "text": "సంƃĄరȾకĀకɇం"
      }
    ],
    "correctOption": 2,
    "correctText": "ĤధɇరȾకĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "602. అలĀсъ అшыǖ ŢсȸƺంĒ. ఈ Āకɇం ఈ రకЇన \năúనɇĀకɇం \n \n1) \nʛāɁరȾకĀకɇం \n \n2) \nĤధɇరȾకĀకɇం \n \n3) \nఅъమతɇరȾకĀకɇం \n \n4) \nసంƃĄరȾకĀకɇం"
  },
  {
    "id": 603,
    "printedNumber": 603,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "603. బјɏǖ ŷцѓ బయట Ţటȸüш. ఈ Āకɇం ఈ రకЇన ăúనɇ \nĀకɇం",
    "options": [
      {
        "number": 1,
        "text": "ĤధɇరȾక Āకɇం"
      },
      {
        "number": 2,
        "text": "అъమతɇరȾకĀకɇం"
      },
      {
        "number": 3,
        "text": "ęƒôరȾక Āకɇం"
      },
      {
        "number": 4,
        "text": "ʛāɁరȾక Āకɇం"
      }
    ],
    "correctOption": 3,
    "correctText": "ęƒôరȾక Āకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "603. బјɏǖ ŷцѓ బయట Ţటȸüш. ఈ Āకɇం ఈ రకЇన ăúనɇ \nĀకɇం \n1) \nĤధɇరȾక Āకɇం \n2) \nఅъమతɇరȾకĀకɇం \n \n3) \nęƒôరȾక Āకɇం \n \n4) \nʛāɁరȾక Āకɇం"
  },
  {
    "id": 604,
    "printedNumber": 604,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "604. Ćంė Āęǖ âȽɾరȾâęė ఉóహరణ",
    "options": [
      {
        "number": 1,
        "text": "ŷħ"
      },
      {
        "number": 2,
        "text": "ŷҠȽ"
      },
      {
        "number": 3,
        "text": "ŷƓȽ"
      },
      {
        "number": 4,
        "text": "ŷăȽу"
      }
    ],
    "correctOption": 1,
    "correctText": "ŷħ",
    "difficulty": "Not identified in source",
    "sourceText": "604. Ćంė Āęǖ âȽɾరȾâęė ఉóహరణ \n1) \nŷħ \n \n2) \nŷҠȽ \n \n3) \nŷƓȽ \n \n4) \nŷăȽу"
  },
  {
    "id": 605,
    "printedNumber": 605,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "605. Ĥదɇ అéȷõęɁ ƥలĈంċ, ĤéȷõęɁјȽంė. ఇė ఈ రకЇన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "ăúనɇĀకɇం"
      },
      {
        "number": 2,
        "text": "కరɆĔĀకɇం"
      },
      {
        "number": 3,
        "text": "సంѐకȽĀకɇం"
      },
      {
        "number": 4,
        "text": "సంĥɊషȸĀకɇం"
      }
    ],
    "correctOption": 4,
    "correctText": "సంĥɊషȸĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "605. Ĥదɇ అéȷõęɁ ƥలĈంċ, ĤéȷõęɁјȽంė. ఇė ఈ రకЇన Āకɇం \n \n1) \năúనɇĀకɇం \n \n2) \nకరɆĔĀకɇం \n \n3) \nసంѐకȽĀకɇం \n \n4) \nసంĥɊషȸĀకɇం"
  },
  {
    "id": 606,
    "printedNumber": 606,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "606. ŋత ఎంшз øధపĒంė? ఈ Āకɇం ఈ రకЇన ăúనɇĀకɇя",
    "options": [
      {
        "number": 1,
        "text": "ఆశȳüɇరȾకĀకɇం"
      },
      {
        "number": 2,
        "text": "అъమతɇరȾకĀకɇం"
      },
      {
        "number": 3,
        "text": "ʛāɁరȾకĀకɇం"
      },
      {
        "number": 4,
        "text": "ęƒôరȾకĀకɇం"
      }
    ],
    "correctOption": 3,
    "correctText": "ʛāɁరȾకĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "606. ŋత ఎంшз øధపĒంė? ఈ Āకɇం ఈ రకЇన ăúనɇĀకɇя \n1) \nఆశȳüɇరȾకĀకɇం \n \n2) \nఅъమతɇరȾకĀకɇం \n \n3) \nʛāɁరȾకĀకɇం \n \n4) \nęƒôరȾకĀకɇం"
  },
  {
    "id": 607,
    "printedNumber": 607,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "607. ఆĄ! ఆ ċʖం ఎంత øйంǋ! ఈ Āకɇం ఈ రకЇన \năúనɇĀకɇя",
    "options": [
      {
        "number": 1,
        "text": "ʛāɁరȾకĀకɇం"
      },
      {
        "number": 2,
        "text": "అъమతɇరȾకĀకɇం"
      },
      {
        "number": 3,
        "text": "ఆశȳüɇరȾకĀకɇం"
      },
      {
        "number": 4,
        "text": "ఆŉరరȾకĀకɇం"
      }
    ],
    "correctOption": 3,
    "correctText": "ఆశȳüɇరȾకĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "607. ఆĄ! ఆ ċʖం ఎంత øйంǋ! ఈ Āకɇం ఈ రకЇన \năúనɇĀకɇя \n1) \nʛāɁరȾకĀకɇం \n2) \nఅъమతɇరȾకĀకɇం \n \n3) \nఆశȳüɇరȾకĀకɇం \n \n4) \nఆŉరరȾకĀకɇం"
  },
  {
    "id": 608,
    "printedNumber": 608,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "608. õటక ʛదరɍన జĠĈంė. ఈ ĀâɇęĆ వɇĕƌâరȾక Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "õటక ʛదరɍన జరగƃǒ"
      },
      {
        "number": 2,
        "text": "õటక ʛదరɍన జరйцంė."
      },
      {
        "number": 3,
        "text": "õటక ʛదరɍన జరగవмȳ"
      },
      {
        "number": 4,
        "text": "õటక ʛదరɍన జరగƎш."
      }
    ],
    "correctOption": 4,
    "correctText": "õటక ʛదరɍన జరగƎш.",
    "difficulty": "Not identified in source",
    "sourceText": "608. õటక ʛదరɍన జĠĈంė. ఈ ĀâɇęĆ వɇĕƌâరȾక Āకɇం \n1) \nõటక ʛదరɍన జరగƃǒ \n2) \nõటక ʛదరɍన జరйцంė. \n \n3) \nõటక ʛదరɍన జరగవмȳ \n \n4) \nõటక ʛదరɍన జరగƎш."
  },
  {
    "id": 609,
    "printedNumber": 609,
    "topic": "సామాన్య వాక్య రకాలు మరియు వ్యతిరేకార్థక వాక్యాలు",
    "stem": "609. ‘Āనѓ ఎзȮవä పîȺğ’ ĀâɇęĆ వɇĕƌâరȾక Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "Āనѓ ఎзȮవä పడƎш."
      },
      {
        "number": 2,
        "text": "Āనѓ ఎзȮవä పуцõɁğ."
      },
      {
        "number": 3,
        "text": "Āనѓ ఎзȮవä పడñğ ."
      },
      {
        "number": 4,
        "text": "Āనѓ ఎзȮవä పĒƁ పంటѓ పంуñğ."
      }
    ],
    "correctOption": 1,
    "correctText": "Āనѓ ఎзȮవä పడƎш.",
    "difficulty": "Not identified in source",
    "sourceText": "609. ‘Āనѓ ఎзȮవä పîȺğ’ ĀâɇęĆ వɇĕƌâరȾక Āకɇం \n \n1) \nĀనѓ ఎзȮవä పడƎш. \n \n2) \nĀనѓ ఎзȮవä పуцõɁğ.  \n \n3) \nĀనѓ ఎзȮవä పడñğ . \n \n4) \nĀనѓ ఎзȮవä పĒƁ పంటѓ పంуñğ."
  },
  {
    "id": 610,
    "printedNumber": 610,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "610. ñƩక ʛకృĕ ఆüధзĒనę Ĥజț అõɁу . ఈ పǔɕ \nకథనంǖę ĀâɇęɁ ʛతɇɕ కథనం ǖĆ úరȳంĒ",
    "options": [
      {
        "number": 1,
        "text": "“ñƩక ʛకృĕ ఆüధзу” అę Ĥజț అõɁу."
      },
      {
        "number": 2,
        "text": "ƅƩక ʛకృĕ ఆüధзĒనę Ĥజț అõɁу."
      },
      {
        "number": 3,
        "text": "“ƅƩక ʛకృĕ ఆüధзĒę”  అę Ĥజț అõɁу."
      },
      {
        "number": 4,
        "text": "Ľѕ ʛకృĕ ఆüధзĒవę Ĥజț అõɁу"
      }
    ],
    "correctOption": 3,
    "correctText": "“ƅƩక ʛకృĕ ఆüధзĒę”  అę Ĥజț అõɁу.",
    "difficulty": "Not identified in source",
    "sourceText": "610. ñƩక ʛకృĕ ఆüధзĒనę Ĥజț అõɁу . ఈ పǔɕ \nకథనంǖę ĀâɇęɁ ʛతɇɕ కథనం ǖĆ úరȳంĒ \n \n1) \n“ñƩక ʛకృĕ ఆüధзу” అę Ĥజț అõɁу. \n \n2) \nƅƩక ʛకృĕ ఆüధзĒనę Ĥజț అõɁу. \n \n3) \n“ƅƩక ʛకృĕ ఆüధзĒę”  అę Ĥజț అõɁу. \n \n4) \nĽѕ ʛకృĕ ఆüధзĒవę Ĥజț అõɁу"
  },
  {
    "id": 611,
    "printedNumber": 611,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "611. “ыషȮర ƬమɆѓ øä ƐјȽంė” అę ĀళɋõనɁäё అõɁё. ఈ \nĀకɇం ఈ రకЇన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "కరɆĔĀకɇం"
      },
      {
        "number": 2,
        "text": "పǔɕకథనం"
      },
      {
        "number": 3,
        "text": "సంƃĄరȾకĀకɇం"
      },
      {
        "number": 4,
        "text": "ʛతɇɕకథనం"
      }
    ],
    "correctOption": 4,
    "correctText": "ʛతɇɕకథనం",
    "difficulty": "Not identified in source",
    "sourceText": "611. “ыషȮర ƬమɆѓ øä ƐјȽంė” అę ĀళɋõనɁäё అõɁё. ఈ \nĀకɇం ఈ రకЇన Āకɇం \n \n1) \nకరɆĔĀకɇం \n \n2) \nపǔɕకథనం \n \n3) \nసంƃĄరȾకĀకɇం \n \n4) \nʛతɇɕకథనం"
  },
  {
    "id": 612,
    "printedNumber": 612,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "612. “వɇĆȽĆ బљవచనం శĆȽ” అę అõɁу ɖ ɖ.  ఈ ʛతɇɕకథన \nĀâɇęɁ పǔɕ కథనం ǖĆ üయంĒ",
    "options": [
      {
        "number": 1,
        "text": "వɇĆȽĆ బљవచనం శĆȽ అę ɖ ɖ అనƎш"
      },
      {
        "number": 2,
        "text": "“శĆȽĆ బљవచనం వɇĆȽ” అę ɖ ɖ అõɁу"
      },
      {
        "number": 3,
        "text": "వɇĆȽĆ బљవచనం శకȽę అõɁу ɖ ɖ"
      },
      {
        "number": 4,
        "text": "“వɇŲȽ శĆȽĆ బљవచనం” అę అõɁу ɖ ɖ"
      }
    ],
    "correctOption": 3,
    "correctText": "వɇĆȽĆ బљవచనం శకȽę అõɁу ɖ ɖ",
    "difficulty": "Not identified in source",
    "sourceText": "612. “వɇĆȽĆ బљవచనం శĆȽ” అę అõɁу ɖ ɖ.  ఈ ʛతɇɕకథన \nĀâɇęɁ పǔɕ కథనం ǖĆ üయంĒ  \n1) \nవɇĆȽĆ బљవచనం శĆȽ అę ɖ ɖ అనƎш \n2) \n“శĆȽĆ బљవచనం వɇĆȽ” అę ɖ ɖ అõɁу \n \n3) \nవɇĆȽĆ బљవచనం శకȽę అõɁу ɖ ɖ \n \n4) \n“వɇŲȽ శĆȽĆ బљవచనం” అę అõɁу ɖ ɖ"
  },
  {
    "id": 613,
    "printedNumber": 613,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "613. ñమంñ ęతɇం ыసȽâѓ చшѕñమę ĚలɊѓ œöɂё. ఈ \nపǔɕ కథõęɁ ʛతɇɕకథనంǖĆ úĠȳ üయంĒ",
    "options": [
      {
        "number": 1,
        "text": "“ñమంñ ęతɇం ыసȽâѓ చшѕñя” అę ĚలɊѓ\nœöɂё."
      },
      {
        "number": 2,
        "text": "“Ɗమంñ ęతɇం ыసȽâѓ చшѕñя” అę ĚలɊѓ\nœöɂё."
      },
      {
        "number": 3,
        "text": "Ɗమంñ ęతɇం ыసȽâѓ చшѕñя అę ĚలɊѓ\nœöɂё."
      },
      {
        "number": 4,
        "text": "ñమంñ ęతɇం ыసȽâѓ చదవя అę ĚలɊѓ œöɂё."
      }
    ],
    "correctOption": 2,
    "correctText": "“Ɗమంñ ęతɇం ыసȽâѓ చшѕñя” అę ĚలɊѓ\nœöɂё.",
    "difficulty": "Not identified in source",
    "sourceText": "613. ñమంñ ęతɇం ыసȽâѓ చшѕñమę ĚలɊѓ œöɂё. ఈ \nపǔɕ కథõęɁ ʛతɇɕకథనంǖĆ úĠȳ üయంĒ \n \n1) \n“ñమంñ ęతɇం ыసȽâѓ చшѕñя” అę ĚలɊѓ \nœöɂё. \n \n2) \n“Ɗమంñ ęతɇం ыసȽâѓ చшѕñя” అę ĚలɊѓ \nœöɂё. \n \n3) \nƊమంñ ęతɇం ыసȽâѓ చшѕñя అę ĚలɊѓ \nœöɂё. \n \n4) \nñమంñ ęతɇం ыసȽâѓ చదవя అę ĚలɊѓ œöɂё."
  },
  {
    "id": 614,
    "printedNumber": 614,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "614. కరȽĠĀకɇంǖ కరɆз ఈ ĤభĆȽ ʛతɇయం వјȽంė",
    "options": [
      {
        "number": 1,
        "text": "తృĹûĤభĆȽ"
      },
      {
        "number": 2,
        "text": "షŊȹĤభĆȽ"
      },
      {
        "number": 3,
        "text": "ėɌĹû ĤభĆȽ"
      },
      {
        "number": 4,
        "text": "సపȽł ĤభĆȽ"
      }
    ],
    "correctOption": 3,
    "correctText": "ėɌĹû ĤభĆȽ",
    "difficulty": "Not identified in source",
    "sourceText": "614. కరȽĠĀకɇంǖ కరɆз ఈ ĤభĆȽ ʛతɇయం వјȽంė \n1) \nతృĹûĤభĆȽ \n2) \nషŊȹĤభĆȽ \n \n3) \nėɌĹû ĤభĆȽ \n \n4) \nసపȽł ĤభĆȽ"
  },
  {
    "id": 615,
    "printedNumber": 615,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "615. కరɆĔĀకɇంǖ కరȽз ఈ ĤభĆȽ ʛతɇయం ŷёцంė",
    "options": [
      {
        "number": 1,
        "text": "ėɌĹûĤభĆȽ"
      },
      {
        "number": 2,
        "text": "తృĹûĤభĆȽ"
      },
      {
        "number": 3,
        "text": "చцńȾĤభĆȽ"
      },
      {
        "number": 4,
        "text": "పంచłĤభĆȽ"
      }
    ],
    "correctOption": 2,
    "correctText": "తృĹûĤభĆȽ",
    "difficulty": "Not identified in source",
    "sourceText": "615. కరɆĔĀకɇంǖ కరȽз ఈ ĤభĆȽ ʛతɇయం ŷёцంė \n1) \nėɌĹûĤభĆȽ \n2) \nతృĹûĤభĆȽ \n \n3) \nచцńȾĤభĆȽ \n \n4) \nపంచłĤభĆȽ"
  },
  {
    "id": 616,
    "printedNumber": 616,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "616. ఆŦ öట öĒంė. - ఈ ĀâɇęɁ కరɆĔĀకɇంä úĠȳన",
    "options": [
      {
        "number": 1,
        "text": "ఆŦ ŷత öట öడబĒంė"
      },
      {
        "number": 2,
        "text": "ఆŦ öట öడƎш"
      },
      {
        "number": 3,
        "text": "öటŷత ఆŦ öడ బĒంė."
      },
      {
        "number": 4,
        "text": "ఆŦ öĒనƃ öట"
      }
    ],
    "correctOption": 1,
    "correctText": "ఆŦ ŷత öట öడబĒంė",
    "difficulty": "Not identified in source",
    "sourceText": "616. ఆŦ öట öĒంė. - ఈ ĀâɇęɁ కరɆĔĀకɇంä úĠȳన \n1) \nఆŦ ŷత öట öడబĒంė \n \n2) \nఆŦ öట öడƎш \n \n3) \nöటŷత ఆŦ öడ బĒంė. \n \n4) \nఆŦ öĒనƃ öట"
  },
  {
    "id": 617,
    "printedNumber": 617,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "617. ċâƼǖ ăɌĞ ĤƐâనంద äĠŷ Ƙపɂ ఉపõɇăѓ \nఇవɌబîȺğ. ఈ Āకɇం ఈ రకЇన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "కరȽĠĀకɇం"
      },
      {
        "number": 2,
        "text": "సంƃĄరȾక Āకɇం"
      },
      {
        "number": 3,
        "text": "కరɆĔĀకɇం"
      },
      {
        "number": 4,
        "text": "వɇĕƌâరȾకĀకɇం"
      }
    ],
    "correctOption": 3,
    "correctText": "కరɆĔĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "617. ċâƼǖ ăɌĞ ĤƐâనంద äĠŷ Ƙపɂ ఉపõɇăѓ \nఇవɌబîȺğ. ఈ Āకɇం ఈ రకЇన Āకɇం \n1) \nకరȽĠĀకɇం \n \n2) \nసంƃĄరȾక Āకɇం \n \n3) \nకరɆĔĀకɇం \n \n4) \nవɇĕƌâరȾకĀకɇం"
  },
  {
    "id": 618,
    "printedNumber": 618,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "618. Āё ĚలɊĀĒę âöîё. ఈ ĀâɇęɁ కరɆĔ Āకɇంä úరȳంĒ",
    "options": [
      {
        "number": 1,
        "text": "Āё ĚలɊĀĒę âöడƎш"
      },
      {
        "number": 2,
        "text": "ĚలɊĀу ĀĠę âöîу."
      },
      {
        "number": 3,
        "text": "ĚలɊĀĒŷత Āё âöడబîȺё."
      },
      {
        "number": 4,
        "text": "ĀĠŷత ĚలɊĀу âöడబîȺу"
      }
    ],
    "correctOption": 4,
    "correctText": "ĀĠŷత ĚలɊĀу âöడబîȺу",
    "difficulty": "Not identified in source",
    "sourceText": "618. Āё ĚలɊĀĒę âöîё. ఈ ĀâɇęɁ కరɆĔ Āకɇంä úరȳంĒ \n \n1) \nĀё ĚలɊĀĒę âöడƎш \n \n2) \nĚలɊĀу ĀĠę âöîу. \n \n3) \nĚలɊĀĒŷత Āё âöడబîȺё. \n \n4) \nĀĠŷత ĚలɊĀу âöడబîȺу"
  },
  {
    "id": 619,
    "printedNumber": 619,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "619. ƼĚ ŷత ƮకȮ õటబĒంė. ఈ కరɆĔĀâɇęɁ కరȽĠĀకɇంä \núĠȳన",
    "options": [
      {
        "number": 1,
        "text": "ƼĚ ŷత ƮకȮ õìу."
      },
      {
        "number": 2,
        "text": "ƮకȮ ƼĚ ŷత õటబĒంė."
      },
      {
        "number": 3,
        "text": "ƼĚ ƮకȮъ õìу."
      },
      {
        "number": 4,
        "text": "ƼĚ ƮకȮъ õటƎш."
      }
    ],
    "correctOption": 3,
    "correctText": "ƼĚ ƮకȮъ õìу.",
    "difficulty": "Not identified in source",
    "sourceText": "619. ƼĚ ŷత ƮకȮ õటబĒంė. ఈ కరɆĔĀâɇęɁ కరȽĠĀకɇంä \núĠȳన  \n1) \nƼĚ ŷత ƮకȮ õìу. \n \n2) \nƮకȮ ƼĚ ŷత õటబĒంė. \n \n3) \nƼĚ ƮకȮъ õìу. \n \n4) \nƼĚ ƮకȮъ õటƎш."
  },
  {
    "id": 620,
    "printedNumber": 620,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "620. “õз పńɕǖɊ మంċúёȮѓ వçȳğ” అę రě œöɂу. ఈ \nĀâɇęɁ పǔɕకథనంǖĆ úĠȳన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "õз పńɕǖɊ మంċ úёȮѓ వçȳğ అę రě œöɂу."
      },
      {
        "number": 2,
        "text": "Ľз పńɕǖɊ మంċ úёȮѓ వçȳğ అę రě œöɂу."
      },
      {
        "number": 3,
        "text": "తనз పńɕǖɊ మంċúёȮѓ వçȳయę రě œöɂу."
      },
      {
        "number": 4,
        "text": "“తమз పńɕǖɊ మంċ úёȮѓ వçȳయę” రě\nœöɂу."
      }
    ],
    "correctOption": 3,
    "correctText": "తనз పńɕǖɊ మంċúёȮѓ వçȳయę రě œöɂу.",
    "difficulty": "Not identified in source",
    "sourceText": "620. “õз పńɕǖɊ మంċúёȮѓ వçȳğ” అę రě œöɂу. ఈ \nĀâɇęɁ పǔɕకథనంǖĆ úĠȳన Āకɇం \n1) \nõз పńɕǖɊ మంċ úёȮѓ వçȳğ అę రě œöɂу. \n2) \nĽз పńɕǖɊ మంċ úёȮѓ వçȳğ అę రě œöɂу. \n \n3) \nతనз పńɕǖɊ మంċúёȮѓ వçȳయę రě œöɂу. \n \n4) \n“తమз పńɕǖɊ మంċ úёȮѓ వçȳయę” రě \nœöɂу."
  },
  {
    "id": 621,
    "printedNumber": 621,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "621. “łరంñ ఎకȮĒ ъంĒ వјȽõɁё? ” అę Ўలజ ĚలɊĢɁ అĒĈంė. \nఇė ఈ రకЇన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "పǔɕ కథనం"
      },
      {
        "number": 2,
        "text": "ʛతɇɕకథనం"
      },
      {
        "number": 3,
        "text": "కరɆĔĀకɇం"
      },
      {
        "number": 4,
        "text": "వɇĕƌâరȾకĀకɇం"
      }
    ],
    "correctOption": 2,
    "correctText": "ʛతɇɕకథనం",
    "difficulty": "Not identified in source",
    "sourceText": "621. “łరంñ ఎకȮĒ ъంĒ వјȽõɁё? ” అę Ўలజ ĚలɊĢɁ అĒĈంė. \nఇė ఈ రకЇన Āకɇం \n \n1) \nపǔɕ కథనం \n \n2) \nʛతɇɕకథనం \n \n3) \nకరɆĔĀకɇం \n \n4) \nవɇĕƌâరȾకĀకɇం"
  },
  {
    "id": 622,
    "printedNumber": 622,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "622. తనз ఈతంż ఎంǉ సరóయę అɕయ అనɁė. ఈ ĀâɇęĆ \nʛతɇɕ కథనం",
    "options": [
      {
        "number": 1,
        "text": "“తనз ఈతంż ఎంǉ సరó” అę అɕయ అనɁė."
      },
      {
        "number": 2,
        "text": "Ľз ఈతంż ఎంǉ సరó అę అɕయ అనɁė."
      },
      {
        "number": 3,
        "text": "“õз ఈతంż ఎంǉ సరó” అę అɕయ అనɁė."
      },
      {
        "number": 4,
        "text": "తనз ఈతంż సరó అę అɕయ అనɁė."
      }
    ],
    "correctOption": 3,
    "correctText": "“õз ఈతంż ఎంǉ సరó” అę అɕయ అనɁė.",
    "difficulty": "Not identified in source",
    "sourceText": "622. తనз ఈతంż ఎంǉ సరóయę అɕయ అనɁė. ఈ ĀâɇęĆ \nʛతɇɕ కథనం \n \n1) \n“తనз ఈతంż ఎంǉ సరó” అę అɕయ అనɁė. \n \n2) \nĽз ఈతంż ఎంǉ సరó అę అɕయ అనɁė. \n \n3) \n“õз ఈతంż ఎంǉ సరó” అę అɕయ అనɁė. \n \n4) \nతనз ఈతంż సరó అę అɕయ అనɁė."
  },
  {
    "id": 623,
    "printedNumber": 623,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "623. ఒక వɇĆȽ œĚɂన úటѓ యòతథంä œపɂîęɁ ఇþ అంìё",
    "options": [
      {
        "number": 1,
        "text": "ʛతɇɕకథనం"
      },
      {
        "number": 2,
        "text": "పǔɕకథనం"
      },
      {
        "number": 3,
        "text": "అకరɆకĀకɇం"
      },
      {
        "number": 4,
        "text": "సకరɆక Āకɇం"
      }
    ],
    "correctOption": 1,
    "correctText": "ʛతɇɕకథనం",
    "difficulty": "Not identified in source",
    "sourceText": "623. ఒక వɇĆȽ œĚɂన úటѓ యòతథంä œపɂîęɁ ఇþ అంìё \n \n1) \nʛతɇɕకథనం \n \n2) \nపǔɕకథనం \n \n3) \nఅకరɆకĀకɇం \n \n4) \nసకరɆక Āకɇం"
  },
  {
    "id": 624,
    "printedNumber": 624,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "624. కరɆĔ ʛǓగంǖ Ļęę బĐȸ ˏయз Ģంగ, వచన, ыёష \nʛతɇûѓ వċȳ ŷరñğ",
    "options": [
      {
        "number": 1,
        "text": "కరɆ"
      },
      {
        "number": 2,
        "text": "కరȽ"
      },
      {
        "number": 3,
        "text": "âలя"
      },
      {
        "number": 4,
        "text": "Āచకя"
      }
    ],
    "correctOption": 1,
    "correctText": "కరɆ",
    "difficulty": "Not identified in source",
    "sourceText": "624. కరɆĔ ʛǓగంǖ Ļęę బĐȸ ˏయз Ģంగ, వచన, ыёష \nʛతɇûѓ వċȳ ŷరñğ \n1) \nకరɆ \n2) \nకరȽ \n \n3) \nâలя \n \n4) \nĀచకя"
  },
  {
    "id": 625,
    "printedNumber": 625,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "625. äంļı ŷత ఉӐ సñɇʉహం నడపబĒంė. ఈ కరɆĔĀâɇęɁ \nకరȽĠĀకɇంä úరȳంĒ",
    "options": [
      {
        "number": 1,
        "text": "äంļı ŷత ఉӐసñɇʉహం నĒöу."
      },
      {
        "number": 2,
        "text": "ఉӐసñɇʉహం äంļı ŷత నడపహబĒంė."
      },
      {
        "number": 3,
        "text": "äంļı ఉӐసñɇʉĄęɁ నĒöё."
      },
      {
        "number": 4,
        "text": "äంļı ఉӐ సñɇʉĄęɁ నడపƎш"
      }
    ],
    "correctOption": 3,
    "correctText": "äంļı ఉӐసñɇʉĄęɁ నĒöё.",
    "difficulty": "Not identified in source",
    "sourceText": "625. äంļı ŷత ఉӐ సñɇʉహం నడపబĒంė. ఈ కరɆĔĀâɇęɁ \nకరȽĠĀకɇంä úరȳంĒ \n1) \näంļı ŷత ఉӐసñɇʉహం నĒöу. \n \n2) \nఉӐసñɇʉహం äంļı ŷత నడపహబĒంė. \n \n3) \näంļı ఉӐసñɇʉĄęɁ నĒöё. \n \n4) \näంļı ఉӐ సñɇʉĄęɁ నడపƎш"
  },
  {
    "id": 626,
    "printedNumber": 626,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "626. రĤ éమâయъ ĕõɁу. ఇė ఈ రకЇన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "కరȽĠĀకɇం"
      },
      {
        "number": 2,
        "text": "కరɆĔĀకɇం"
      },
      {
        "number": 3,
        "text": "͏రðరȾకĀకɇం"
      },
      {
        "number": 4,
        "text": "సంƃĄరȾకĀకɇం"
      }
    ],
    "correctOption": 1,
    "correctText": "కరȽĠĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "626. రĤ éమâయъ ĕõɁу. ఇė ఈ రకЇన Āకɇం \n \n1) \nకరȽĠĀకɇం \n \n2) \nకరɆĔĀకɇం \n \n3) \n͏రðరȾకĀకɇం \n \n4) \nసంƃĄరȾకĀకɇం"
  },
  {
    "id": 627,
    "printedNumber": 627,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "627. Љцలŷత పంటѓ పంĒంపబడñğ. ఇė ఈ రకЇన Āకɇం",
    "options": [
      {
        "number": 1,
        "text": "కరȽĠĀకɇం"
      },
      {
        "number": 2,
        "text": "కరɆĔĀకɇం"
      },
      {
        "number": 3,
        "text": "సంƃĄరȾకĀకɇం"
      },
      {
        "number": 4,
        "text": "͏రðరȾకĀకɇం"
      }
    ],
    "correctOption": 2,
    "correctText": "కరɆĔĀకɇం",
    "difficulty": "Not identified in source",
    "sourceText": "627. Љцలŷత పంటѓ పంĒంపబడñğ. ఇė ఈ రకЇన Āకɇం \n1) \nకరȽĠĀకɇం \n \n2) \nకరɆĔĀకɇం \n \n3) \nసంƃĄరȾకĀకɇం \n \n4) \n͏రðరȾకĀకɇం"
  },
  {
    "id": 628,
    "printedNumber": 628,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "628. ĂజĄȕ ñȉ మహȞ ъ ęĠɆంçу. ఈ కరȽĠĀâɇęɁ \nకరɆĔĀకɇంä úరȳంĒ",
    "options": [
      {
        "number": 1,
        "text": "ĂజĄȕ ñȉ మహȞ ъ ęĠɆంచƎш"
      },
      {
        "number": 2,
        "text": "ĂజĄȕ ŷత ñȉ మహȞ ęĠɆంచబĒంė"
      },
      {
        "number": 3,
        "text": "ñȉ మహȞ ŷత ĂజĄȕ ęĠɆంచబŚъ"
      },
      {
        "number": 4,
        "text": "ñȉ మహȞ ъ ĂజĄȕ ęĠɆంçу"
      }
    ],
    "correctOption": 2,
    "correctText": "ĂజĄȕ ŷత ñȉ మహȞ ęĠɆంచబĒంė",
    "difficulty": "Not identified in source",
    "sourceText": "628. ĂజĄȕ ñȉ మహȞ ъ ęĠɆంçу. ఈ కరȽĠĀâɇęɁ \nకరɆĔĀకɇంä úరȳంĒ \n1) \nĂజĄȕ ñȉ మహȞ ъ ęĠɆంచƎш \n2) \nĂజĄȕ ŷత ñȉ మహȞ ęĠɆంచబĒంė \n \n3) \nñȉ మహȞ ŷత ĂజĄȕ ęĠɆంచబŚъ \n \n4) \nñȉ మహȞ ъ ĂజĄȕ ęĠɆంçу"
  },
  {
    "id": 629,
    "printedNumber": 629,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "629. ఎలɊమɆ పండɊъ అĞɆంė.  ఈ ĀâɇęɁ కరɆĔ Āకɇంä úరȳంĒ",
    "options": [
      {
        "number": 1,
        "text": "పంуɊ ఎలɊమɆ అĞɆంė"
      },
      {
        "number": 2,
        "text": "ఎలɊమɆŷత పంуɊ అమɆబîȺğ"
      },
      {
        "number": 3,
        "text": "పంуɊ ŷత ఎలɊమɆ అమɆబĒంė"
      },
      {
        "number": 4,
        "text": "ఎలɊమɆ పండɊъ అమɆƎш"
      }
    ],
    "correctOption": 2,
    "correctText": "ఎలɊమɆŷత పంуɊ అమɆబîȺğ",
    "difficulty": "Not identified in source",
    "sourceText": "629. ఎలɊమɆ పండɊъ అĞɆంė.  ఈ ĀâɇęɁ కరɆĔ Āకɇంä úరȳంĒ \n1) \nపంуɊ ఎలɊమɆ అĞɆంė \n2) \nఎలɊమɆŷత పంуɊ అమɆబîȺğ \n \n3) \nపంуɊ ŷత ఎలɊమɆ అమɆబĒంė \n \n4) \nఎలɊమɆ పండɊъ అమɆƎш"
  },
  {
    "id": 630,
    "printedNumber": 630,
    "topic": "ప్రత్యక్ష / పరోక్ష కథనం, కర్తరి / కర్మణి ప్రయోగం",
    "stem": "630. “ƅъ üъ” అę రĤ üоǉ అõɁу. ఈ ĀâɇęɁ \nపǔąъకృĕǖĆ úరȳంĒ",
    "options": [
      {
        "number": 1,
        "text": "ƅъ üనę రĤ üоǉ అõɁу"
      },
      {
        "number": 2,
        "text": "“Ľѕ ü” అę రĤ üоǉ అõɁу"
      },
      {
        "number": 3,
        "text": "“ñъ üనę” రĤ üоǉ అõɁу"
      },
      {
        "number": 4,
        "text": "ñъ üనę రĤ üоǉ అõɁу."
      }
    ],
    "correctOption": 4,
    "correctText": "ñъ üనę రĤ üоǉ అõɁу.",
    "difficulty": "Not identified in source",
    "sourceText": "630. “ƅъ üъ” అę రĤ üоǉ అõɁу. ఈ ĀâɇęɁ \nపǔąъకృĕǖĆ úరȳంĒ \n \n1) \nƅъ üనę రĤ üоǉ అõɁу \n \n2) \n“Ľѕ ü” అę రĤ üоǉ అõɁу \n \n3) \n“ñъ üనę” రĤ üоǉ అõɁу \n \n4) \nñъ üనę రĤ üоǉ అõɁу."
  }
];

const makeAttempt = (mode, topic, questionIds) => ({
  attemptId: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
  mode,
  topic,
  startedAt: new Date().toISOString(),
  submittedAt: null,
  elapsedSeconds: 0,
  questionIds,
  responses: Object.fromEntries(questionIds.map(id => [id, { selectedOption: null, timeSpentSeconds: 0 }])),
  score: 0,
  correctCount: 0,
  wrongCount: 0,
  unansweredCount: 0
});

function shuffle(items) {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function QuestionCard({ question, selected, onSelect, submitted, instantFeedback }) {
  const correct = question.correctOption;
  return <div className="question-card">
    <div className="question-number">Question {question.id} · Source No. {question.printedNumber}</div>
    <pre className="question-stem">{question.stem}</pre>
    <div className="options">
      {question.options.map(option => {
        const isSelected = selected === option.number;
        const isCorrect = option.number === correct;
        let cls = "option";
        if (submitted || instantFeedback) {
          if (isCorrect) cls += " correct";
          else if (isSelected) cls += " incorrect";
        }
        return <label className={cls} key={option.number}>
          <input type="radio" name={`q-${question.id}`} checked={isSelected} disabled={submitted || instantFeedback} onChange={() => onSelect(option.number)} />
          <span>{option.number}) {option.text}</span>
        </label>;
      })}
    </div>
    {(submitted || instantFeedback) && <div className="answer-box">Correct answer: Option {correct} — {question.correctText}</div>}
  </div>;
}

export default function TetTeluguMockTest() {
  const [topicId, setTopicId] = useState("all");
  const [count, setCount] = useState(20);
  const [timed, setTimed] = useState(true);
  const [instantFeedback, setInstantFeedback] = useState(false);
  const [started, setStarted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [seconds, setSeconds] = useState(0);
  const [attempt, setAttempt] = useState(null);

  const pool = useMemo(() => topicId === "all"
    ? QUESTION_BANK
    : QUESTION_BANK.filter(q => q.topic === TOPICS.find(t => String(t.id) === String(topicId))?.name), [topicId]);

  const startTest = () => {
    const ids = shuffle(pool).slice(0, Math.min(Number(count), pool.length)).map(q => q.id);
    setAttempt(makeAttempt("practice", topicId, ids));
    setStarted(true); setSubmitted(false); setIndex(0); setAnswers({}); setSeconds(0);
  };

  useEffect(() => {
    if (!started || submitted || !timed) return;
    const timer = setInterval(() => setSeconds(s => s + 1), 1000);
    return () => clearInterval(timer);
  }, [started, submitted, timed]);

  const activeQuestions = useMemo(() => attempt ? attempt.questionIds.map(id => QUESTION_BANK.find(q => q.id === id)) : [], [attempt]);
  const current = activeQuestions[index];

  const selectAnswer = option => setAnswers(a => ({ ...a, [current.id]: option }));

  const submitTest = () => {
    const result = activeQuestions.reduce((acc, q) => {
      const selected = answers[q.id];
      if (selected == null) acc.unansweredCount += 1;
      else if (selected === q.correctOption) acc.correctCount += 1;
      else acc.wrongCount += 1;
      return acc;
    }, { correctCount: 0, wrongCount: 0, unansweredCount: 0 });
    const finalAttempt = { ...attempt, submittedAt: new Date().toISOString(), elapsedSeconds: seconds, responses: Object.fromEntries(activeQuestions.map(q => [q.id, { selectedOption: answers[q.id] ?? null, timeSpentSeconds: 0 }])), ...result, score: result.correctCount };
    setAttempt(finalAttempt); setSubmitted(true);
  };

  if (!started) return <main className="tet-app">
    <h1>TET 2A Telugu Mock Test</h1>
    <p>Topic-wise practice using the source-derived question bank.</p>
    <label>Topic<select value={topicId} onChange={e => setTopicId(e.target.value)}>
      <option value="all">All Topics ({QUESTION_BANK.length})</option>
      {TOPICS.map(t => <option key={t.id} value={t.id}>{t.name} — {t.questionCount}</option>)}
    </select></label>
    <label>Questions<input type="number" min="1" max={Math.max(1, pool.length)} value={count} onChange={e => setCount(e.target.value)} /></label>
    <label><input type="checkbox" checked={timed} onChange={e => setTimed(e.target.checked)} /> Timed practice</label>
    <label><input type="checkbox" checked={instantFeedback} onChange={e => setInstantFeedback(e.target.checked)} /> Instant feedback</label>
    <button onClick={startTest}>Start Test</button>
  </main>;

  if (submitted) return <main className="tet-app">
    <h1>Result</h1>
    <p>Score: {attempt.score} / {activeQuestions.length}</p>
    <p>Correct: {attempt.correctCount} · Wrong: {attempt.wrongCount} · Unanswered: {attempt.unansweredCount}</p>
    <p>Time: {Math.floor(attempt.elapsedSeconds / 60)}:{String(attempt.elapsedSeconds % 60).padStart(2, "0")}</p>
    <button onClick={() => { setStarted(false); setSubmitted(false); }}>New Test</button>
    <hr />
    {activeQuestions.map(q => <QuestionCard key={q.id} question={q} selected={answers[q.id]} onSelect={() => {}} submitted={true} instantFeedback={false} />)}
  </main>;

  return <main className="tet-app">
    <header><h1>TET 2A Telugu</h1><div>Time: {Math.floor(seconds/60)}:{String(seconds%60).padStart(2,"0")}</div></header>
    <div className="progress">Question {index + 1} of {activeQuestions.length}</div>
    <QuestionCard question={current} selected={answers[current.id]} onSelect={selectAnswer} submitted={false} instantFeedback={instantFeedback} />
    <nav className="test-nav">
      <button disabled={index === 0} onClick={() => setIndex(i => i - 1)}>Previous</button>
      {index < activeQuestions.length - 1
        ? <button onClick={() => setIndex(i => i + 1)}>Next</button>
        : <button onClick={submitTest}>Submit Test</button>}
    </nav>
  </main>;
}

/*
Developer implementation checklist
1. Persist QUESTION_BANK in a JSON/API source without changing sourceText, stem, or options.
2. Add authentication/user profile if multi-user deployment is required.
3. Persist attempts and topic metrics server-side for cross-device analytics.
4. Add Mark for Review and question palette using the attempt.responses structure.
5. Calculate topic-wise accuracy from completed responses.
6. Add Retry Incorrect and Unanswered modes by filtering prior attempt responses.
7. Add administrator-managed difficulty only when verified; the source PDF does not label difficulty.
8. Add configurable test duration; the source does not prescribe a timer.
9. Keep internal id separate from printedNumber to preserve duplicate/missing source numbering exactly.
*/

DISEASE_DB = {
    # ── RESPIRATORY / PULMONOLOGY ─────────────────────────────────────────────
    "Common Cold": {
        "category": "Pulmonology",
        "emergency_level": "low",
        "icd_code": "J00",
        "specialist": "General Physician",
        "risk_factors": ["weakened immune system", "close contact with infected people", "cold weather", "stress"],
        "symptoms": ["cough", "sore throat", "runny nose", "sneezing", "mild fever", "congestion"],
        "description": "A viral upper respiratory infection causing cough, sore throat, and congestion.",
        "medicines": [
            {"name": "Paracetamol", "dosage": "500 mg every 4-6 hours as needed", "type": "Analgesic/Antipyretic"},
            {"name": "Cetirizine", "dosage": "10 mg once daily", "type": "Antihistamine"}
        ],
        "precautions": ["Rest and hydrate", "Avoid close contact with others", "Seek care if high fever or breathing difficulty"],
        "diet": ["Warm fluids", "Light, easily digestible meals", "Citrus fruits for vitamin C"]
    },
    "Influenza": {
        "category": "Pulmonology",
        "emergency_level": "medium",
        "icd_code": "J11.1",
        "specialist": "General Physician",
        "risk_factors": ["unvaccinated", "elderly", "immunocompromised", "pregnancy", "chronic conditions"],
        "symptoms": ["fever", "cough", "headache", "fatigue", "muscle ache", "chills"],
        "description": "Influenza (flu) is a contagious respiratory illness caused by influenza viruses.",
        "medicines": [
            {"name": "Oseltamivir", "dosage": "75 mg twice daily for 5 days (if prescribed)", "type": "Antiviral"},
            {"name": "Paracetamol", "dosage": "500 mg every 4-6 hours as needed", "type": "Analgesic/Antipyretic"},
            {"name": "Ibuprofen", "dosage": "400 mg every 6-8 hours as needed", "type": "NSAID"}
        ],
        "precautions": ["Rest", "Hydration", "Consult doctor if shortness of breath", "Stay isolated for 24 hours after fever subsides"],
        "diet": ["Fluids", "Balanced diet, avoid heavy meals", "Soup and broth"]
    },
    "Bronchitis": {
        "category": "Pulmonology",
        "emergency_level": "low",
        "icd_code": "J40",
        "specialist": "Pulmonologist",
        "risk_factors": ["smoking", "air pollution", "frequent respiratory infections", "weakened immunity"],
        "symptoms": ["cough", "shortness of breath", "wheezing", "mucus production", "chest discomfort"],
        "description": "Inflammation of the bronchi, often following a cold or viral infection.",
        "medicines": [
            {"name": "Salbutamol inhaler", "dosage": "2 puffs every 4-6 hours as needed", "type": "Bronchodilator"},
            {"name": "Guaifenesin", "dosage": "200-400 mg every 4 hours", "type": "Expectorant"}
        ],
        "precautions": ["Stop smoking", "Use inhaler as prescribed", "Avoid air pollution"],
        "diet": ["Hydration", "Warm fluids", "Honey for cough relief"]
    },
    "Allergic Rhinitis": {
        "category": "Pulmonology",
        "emergency_level": "low",
        "icd_code": "J30.9",
        "specialist": "Allergist",
        "risk_factors": ["family history of allergies", "asthma", "atopic dermatitis", "exposure to allergens"],
        "symptoms": ["sneezing", "runny nose", "itchy eyes", "nasal congestion", "watery eyes"],
        "description": "Allergic reaction of nasal mucosa to allergens.",
        "medicines": [
            {"name": "Loratadine", "dosage": "10 mg once daily", "type": "Antihistamine"},
            {"name": "Cetirizine", "dosage": "10 mg once daily", "type": "Antihistamine"},
            {"name": "Intranasal corticosteroid", "dosage": "1-2 sprays each nostril daily", "type": "Corticosteroid"}
        ],
        "precautions": ["Avoid known allergens", "Keep windows closed during high pollen", "Use air filters"],
        "diet": ["Maintain hydration", "Avoid dairy if mucus worsens"]
    },
    "Pneumonia": {
        "category": "Pulmonology",
        "emergency_level": "high",
        "icd_code": "J18.9",
        "specialist": "Pulmonologist",
        "risk_factors": ["elderly", "immunocompromised", "smoking", "chronic lung disease", "hospitalization"],
        "symptoms": ["fever", "cough", "shortness of breath", "chest pain", "fatigue", "yellow sputum"],
        "description": "Infection of the lungs causing inflammation of air sacs.",
        "medicines": [
            {"name": "Amoxicillin", "dosage": "500-875 mg three times daily for 7-14 days", "type": "Antibiotic"},
            {"name": "Azithromycin", "dosage": "500 mg day 1, then 250 mg daily for 4 days", "type": "Antibiotic"},
            {"name": "Levofloxacin", "dosage": "750 mg once daily for 5 days", "type": "Antibiotic"}
        ],
        "precautions": ["Complete antibiotic course", "Seek care if respiratory distress", "Rest adequately"],
        "diet": ["Hydration", "High protein diet", "Warm foods"]
    },
    "Asthma": {
        "category": "Pulmonology",
        "emergency_level": "medium",
        "icd_code": "J45.9",
        "specialist": "Pulmonologist",
        "risk_factors": ["allergies", "family history", "respiratory infections in childhood", "air pollution", "smoking"],
        "symptoms": ["shortness of breath", "wheezing", "chest tightness", "cough especially at night", "fatigue"],
        "description": "Chronic inflammation of airways causing breathing difficulties.",
        "medicines": [
            {"name": "Albuterol inhaler", "dosage": "2 puffs every 4-6 hours as needed", "type": "Bronchodilator"},
            {"name": "Budesonide inhaler", "dosage": "1-2 puffs twice daily", "type": "Corticosteroid"},
            {"name": "Montelukast", "dosage": "10 mg once daily in evening", "type": "Leukotriene inhibitor"}
        ],
        "precautions": ["Avoid triggers", "Keep rescue inhaler available", "Monitor peak flow"],
        "diet": ["Maintain healthy weight", "Avoid food allergens"]
    },
    "Tuberculosis": {
        "category": "Pulmonology",
        "emergency_level": "high",
        "icd_code": "A15.0",
        "specialist": "Pulmonologist",
        "risk_factors": ["HIV infection", "malnutrition", "crowded living conditions", "immunosuppressive therapy", "diabetes"],
        "symptoms": ["persistent cough", "night sweats", "fever", "weight loss", "fatigue", "blood in sputum"],
        "description": "Serious infectious disease affecting lungs caused by Mycobacterium tuberculosis.",
        "medicines": [
            {"name": "Isoniazid", "dosage": "5 mg/kg once daily for 6 months", "type": "Antituberculous"},
            {"name": "Rifampicin", "dosage": "10 mg/kg once daily for 6 months", "type": "Antituberculous"},
            {"name": "Pyrazinamide", "dosage": "25 mg/kg once daily for 2 months", "type": "Antituberculous"}
        ],
        "precautions": ["Complete full course of therapy", "Respiratory isolation if sputum positive", "Regular follow-ups"],
        "diet": ["High-calorie diet", "Vitamin B supplements", "Adequate protein"]
    },

    # ── INFECTIOUS DISEASE / TROPICAL MEDICINE ────────────────────────────────
    "Malaria": {
        "category": "Infectious Disease",
        "emergency_level": "high",
        "icd_code": "B54",
        "specialist": "Infectious Disease Specialist",
        "risk_factors": ["travel to endemic areas", "lack of mosquito protection", "inadequate chemoprophylaxis"],
        "symptoms": ["fever", "chills", "sweating", "headache", "nausea", "body ache"],
        "description": "Parasitic infection transmitted by Anopheles mosquitoes; causes cyclical fever and chills.",
        "medicines": [
            {"name": "Artemisinin-based combination therapy (ACT)", "dosage": "Based on local guidelines and weight", "type": "Antimalarial"},
            {"name": "Artemether", "dosage": "3.2 mg/kg/day IV for 3 days, then complete course orally", "type": "Antimalarial"}
        ],
        "precautions": ["Get tested (blood smear/RDT)", "Seek prompt treatment", "Use mosquito bed nets"],
        "diet": ["Hydration", "Small frequent meals", "Iron-rich foods", "Avoid alcohol"]
    },
    "Dengue": {
        "category": "Infectious Disease",
        "emergency_level": "high",
        "icd_code": "A90",
        "specialist": "Infectious Disease Specialist",
        "risk_factors": ["living in tropical/subtropical regions", "previous dengue infection", "no vaccination"],
        "symptoms": ["high fever", "severe headache", "pain behind eyes", "joint pain", "rash", "body ache"],
        "description": "Viral infection transmitted by Aedes mosquitoes; may cause severe bleeding and shock.",
        "medicines": [
            {"name": "Paracetamol", "dosage": "500 mg every 4-6 hours as needed", "type": "Analgesic/Antipyretic"},
            {"name": "Platelet transfusion", "dosage": "Per doctor's order if thrombocytopenia severe", "type": "Blood product"}
        ],
        "precautions": ["Avoid NSAIDs (ibuprofen/aspirin)", "Seek urgent care for warning signs", "Drink plenty of water"],
        "diet": ["Oral rehydration fluids", "Electrolyte drinks", "Soft foods"]
    },
    "Typhoid": {
        "category": "Infectious Disease",
        "emergency_level": "high",
        "icd_code": "A01.0",
        "specialist": "Infectious Disease Specialist",
        "risk_factors": ["travel to endemic areas", "contaminated food/water", "poor sanitation"],
        "symptoms": ["sustained fever", "weakness", "stomach pain", "headache", "loss of appetite", "rose spots rash"],
        "description": "Bacterial infection (Salmonella typhi) causing prolonged fever and GI symptoms.",
        "medicines": [
            {"name": "Ceftriaxone", "dosage": "1-2 g IV/IM every 12 hours", "type": "Antibiotic"},
            {"name": "Ciprofloxacin", "dosage": "500 mg twice daily for 5-7 days", "type": "Antibiotic"},
            {"name": "Azithromycin", "dosage": "1 g once daily for 5-7 days", "type": "Antibiotic"}
        ],
        "precautions": ["Confirm with blood culture", "Complete full antibiotic course", "Seek care if complications"],
        "diet": ["Light, easily digestible diet", "Avoid street food", "High-calorie soft foods"]
    },

    # ── GASTROENTEROLOGY ──────────────────────────────────────────────────────
    "Gastroenteritis": {
        "category": "Gastroenterology",
        "emergency_level": "medium",
        "icd_code": "K52.9",
        "specialist": "Gastroenterologist",
        "risk_factors": ["contaminated food or water", "poor hygiene", "travel", "weakened immunity"],
        "symptoms": ["diarrhea", "vomiting", "stomach pain", "fever", "nausea", "loss of appetite"],
        "description": "Inflammation of the stomach and intestines often due to infection or food poisoning.",
        "medicines": [
            {"name": "Oral rehydration salts (ORS)", "dosage": "As directed on packet", "type": "Rehydration"},
            {"name": "Loperamide", "dosage": "2 mg after each loose stool, max 16 mg/day", "type": "Antidiarrheal"}
        ],
        "precautions": ["Hydrate aggressively", "Avoid solid food initially if vomiting", "Seek care if bloody stools"],
        "diet": ["BRAT diet (bananas, rice, applesauce, toast) as tolerated", "Ginger tea", "Clear broths"]
    },

    # ── NEPHROLOGY / UROLOGY ──────────────────────────────────────────────────
    "Urinary Tract Infection": {
        "category": "Nephrology",
        "emergency_level": "medium",
        "icd_code": "N39.0",
        "specialist": "Urologist",
        "risk_factors": ["female sex", "sexual activity", "urinary tract abnormalities", "catheter use", "menopause"],
        "symptoms": ["dysuria", "frequent urination", "lower abdominal pain", "fever", "cloudy urine"],
        "description": "Bacterial infection of the urinary tract.",
        "medicines": [
            {"name": "Nitrofurantoin", "dosage": "100 mg twice daily for 5-7 days", "type": "Antibiotic"},
            {"name": "Trimethoprim-Sulfamethoxazole", "dosage": "160/800 mg twice daily for 3 days", "type": "Antibiotic"},
            {"name": "Ciprofloxacin", "dosage": "500 mg twice daily for 3-7 days", "type": "Antibiotic"}
        ],
        "precautions": ["Complete antibiotic course", "Drink plenty of water", "Urinate after intercourse"],
        "diet": ["Hydration", "Avoid bladder irritants like caffeine", "Cranberry juice"]
    },

    # ── NEUROLOGY ─────────────────────────────────────────────────────────────
    "Migraine": {
        "category": "Neurology",
        "emergency_level": "medium",
        "icd_code": "G43.9",
        "specialist": "Neurologist",
        "risk_factors": ["family history", "hormonal changes", "stress", "certain foods", "sleep disruption"],
        "symptoms": ["severe headache", "nausea", "sensitivity to light", "visual aura", "vomiting", "throbbing pain"],
        "description": "Neurological condition causing recurrent severe headaches.",
        "medicines": [
            {"name": "Sumatriptan", "dosage": "50-100 mg as needed per acute episode", "type": "Triptan"},
            {"name": "Zolmitriptan", "dosage": "2.5 mg nasal spray or orally", "type": "Triptan"},
            {"name": "Paracetamol", "dosage": "500-1000 mg as needed", "type": "Analgesic"}
        ],
        "precautions": ["Rest in a dark quiet room", "Avoid known triggers", "Stay hydrated"],
        "diet": ["Regular meals; avoid trigger foods", "Avoid alcohol and caffeine"]
    },
    "Migraines with Aura": {
        "category": "Neurology",
        "emergency_level": "medium",
        "icd_code": "G43.1",
        "specialist": "Neurologist",
        "risk_factors": ["family history", "female sex", "oral contraceptives", "stress", "hormonal fluctuations"],
        "symptoms": ["visual disturbances", "flashing lights", "severe headache", "nausea", "sensitivity to light and sound"],
        "description": "Migraine with preceding visual symptoms.",
        "medicines": [
            {"name": "Sumatriptan", "dosage": "50-100 mg per dose", "type": "Triptan"},
            {"name": "Propranolol", "dosage": "80-240 mg daily in divided doses", "type": "Beta-blocker prophylaxis"},
            {"name": "Topiramate", "dosage": "25-100 mg twice daily", "type": "Anticonvulsant prophylaxis"}
        ],
        "precautions": ["Avoid known triggers", "Maintain regular sleep", "Stress management"],
        "diet": ["Regular meals", "Avoid trigger foods", "Stay hydrated"]
    },

    # ── CARDIOLOGY ────────────────────────────────────────────────────────────
    "Hypertension Crisis": {
        "category": "Cardiology",
        "emergency_level": "critical",
        "icd_code": "I16.1",
        "specialist": "Cardiologist",
        "risk_factors": ["uncontrolled hypertension", "non-compliance with medication", "renal disease", "stimulant use"],
        "symptoms": ["severe headache", "chest pain", "shortness of breath", "blurred vision", "nosebleed"],
        "description": "Very high blood pressure requiring urgent medical attention.",
        "medicines": [
            {"name": "Nitroglycerin sublingual", "dosage": "0.3-0.6 mg under tongue", "type": "Vasodilator"},
            {"name": "Labetalol", "dosage": "20 mg IV, then 40-80 mg every 10 minutes", "type": "Beta-blocker"}
        ],
        "precautions": ["Seek emergency care immediately", "Limit exertion", "Monitor blood pressure"],
        "diet": ["Limit salt", "Avoid stimulants", "DASH diet"]
    },
    "Hypertension": {
        "category": "Cardiology",
        "emergency_level": "low",
        "icd_code": "I10",
        "specialist": "Cardiologist",
        "risk_factors": ["obesity", "sedentary lifestyle", "high sodium diet", "smoking", "family history", "age"],
        "symptoms": ["often asymptomatic", "headache", "shortness of breath", "nosebleeds", "chest pain"],
        "description": "Persistently elevated blood pressure.",
        "medicines": [
            {"name": "Lisinopril", "dosage": "10-40 mg once daily", "type": "ACE inhibitor"},
            {"name": "Amlodipine", "dosage": "5-10 mg once daily", "type": "Calcium channel blocker"},
            {"name": "Atenolol", "dosage": "25-100 mg once daily", "type": "Beta-blocker"}
        ],
        "precautions": ["Monitor blood pressure regularly", "Limit sodium intake", "Reduce stress"],
        "diet": ["DASH diet", "Low sodium", "Potassium-rich foods", "Moderate exercise"]
    },
    "Heart Disease": {
        "category": "Cardiology",
        "emergency_level": "high",
        "icd_code": "I25.9",
        "specialist": "Cardiologist",
        "risk_factors": ["hypertension", "diabetes", "hyperlipidemia", "smoking", "obesity", "family history"],
        "symptoms": ["chest pain or pressure", "shortness of breath", "fatigue", "irregular heartbeat", "dizziness"],
        "description": "Cardiovascular disease including coronary artery disease, heart failure, arrhythmia.",
        "medicines": [
            {"name": "Aspirin", "dosage": "81-325 mg once daily", "type": "Antiplatelet"},
            {"name": "Atorvastatin", "dosage": "40-80 mg once daily", "type": "Statin"},
            {"name": "Metoprolol", "dosage": "25-190 mg once or twice daily", "type": "Beta-blocker"}
        ],
        "precautions": ["Seek immediate care for severe chest pain", "Regular cardiac checkups", "Stress management"],
        "diet": ["Mediterranean diet", "Low sodium", "No smoking", "Regular exercise"]
    },

    # ── ENDOCRINOLOGY / METABOLIC ─────────────────────────────────────────────
    "Hyperlipidemia": {
        "category": "Endocrinology",
        "emergency_level": "low",
        "icd_code": "E78.5",
        "specialist": "Endocrinologist",
        "risk_factors": ["unhealthy diet", "sedentary lifestyle", "obesity", "diabetes", "hypothyroidism", "genetics"],
        "symptoms": ["often asymptomatic", "xanthomas on skin", "chest pain if associated with CAD"],
        "description": "High levels of lipids (cholesterol/triglycerides) in blood.",
        "medicines": [
            {"name": "Atorvastatin", "dosage": "10-80 mg once daily", "type": "Statin"},
            {"name": "Simvastatin", "dosage": "5-40 mg once daily", "type": "Statin"},
            {"name": "Fenofibrate", "dosage": "48-145 mg once daily", "type": "Fibrate"}
        ],
        "precautions": ["Regular lipid profile monitoring", "Healthy lifestyle", "Regular exercise"],
        "diet": ["Low saturated fat", "High fiber", "Omega-3 fatty acids"]
    },
    "Diabetes Type 2": {
        "category": "Endocrinology",
        "emergency_level": "medium",
        "icd_code": "E11.9",
        "specialist": "Endocrinologist",
        "risk_factors": ["obesity", "sedentary lifestyle", "family history", "age >45", "prediabetes", "gestational diabetes"],
        "symptoms": ["increased thirst", "frequent urination", "fatigue", "blurred vision", "slow wound healing"],
        "description": "Metabolic disorder characterized by high blood sugar levels.",
        "medicines": [
            {"name": "Metformin", "dosage": "500-1000 mg twice daily", "type": "Antidiabetic"},
            {"name": "Glipizide", "dosage": "5-10 mg once or twice daily", "type": "Sulfonylurea"},
            {"name": "Insulin glargine", "dosage": "10-100 units once daily", "type": "Insulin"}
        ],
        "precautions": ["Monitor blood sugar regularly", "Healthy diet and exercise", "Regular eye exams"],
        "diet": ["Low glycemic index foods", "Whole grains", "Vegetables and lean proteins"]
    },
    "Thyroiditis": {
        "category": "Endocrinology",
        "emergency_level": "low",
        "icd_code": "E06.9",
        "specialist": "Endocrinologist",
        "risk_factors": ["autoimmune conditions", "family history", "viral infections", "iodine deficiency or excess"],
        "symptoms": ["fatigue", "weight gain or loss", "temperature intolerance", "hair loss", "mood changes"],
        "description": "Inflammation of the thyroid gland.",
        "medicines": [
            {"name": "Levothyroxine", "dosage": "25-200 mcg once daily", "type": "Thyroid replacement"},
            {"name": "Propylthiouracil", "dosage": "50-300 mg daily in divided doses", "type": "Antithyroid"},
            {"name": "Prednisone", "dosage": "0.5-1 mg/kg daily", "type": "Corticosteroid"}
        ],
        "precautions": ["Regular TSH monitoring", "Consistent medication timing", "Regular checkups"],
        "diet": ["Iodine-containing foods", "Selenium-rich foods", "Stable meal schedule"]
    },

    # ── PSYCHIATRY ────────────────────────────────────────────────────────────
    "Anxiety Disorder": {
        "category": "Psychiatry",
        "emergency_level": "low",
        "icd_code": "F41.9",
        "specialist": "Psychiatrist",
        "risk_factors": ["trauma", "stress", "family history of anxiety", "chronic illness", "substance abuse"],
        "symptoms": ["excessive worry", "nervousness", "rapid heartbeat", "sweating", "trembling", "difficulty concentrating"],
        "description": "Mental health condition characterized by persistent anxiety and worry.",
        "medicines": [
            {"name": "Sertraline", "dosage": "25-200 mg once daily", "type": "SSRI"},
            {"name": "Lorazepam", "dosage": "0.5-2 mg twice or three times daily as needed", "type": "Benzodiazepine"},
            {"name": "Paroxetine", "dosage": "10-60 mg once daily", "type": "SSRI"}
        ],
        "precautions": ["Seek professional mental health support", "Avoid alcohol", "Regular exercise"],
        "diet": ["Limit caffeine", "Balanced meals", "Regular sleep schedule"]
    },
    "Depression": {
        "category": "Psychiatry",
        "emergency_level": "medium",
        "icd_code": "F32.9",
        "specialist": "Psychiatrist",
        "risk_factors": ["family history", "trauma", "chronic illness", "substance abuse", "social isolation", "hormonal changes"],
        "symptoms": ["persistent sadness", "loss of interest", "fatigue", "sleep changes", "guilt", "suicidal thoughts"],
        "description": "Mental health condition causing persistent low mood and loss of interest.",
        "medicines": [
            {"name": "Sertraline", "dosage": "50-200 mg once daily", "type": "SSRI"},
            {"name": "Escitalopram", "dosage": "10-20 mg once daily", "type": "SSRI"},
            {"name": "Amitriptyline", "dosage": "10-300 mg daily in divided doses", "type": "Tricyclic antidepressant"}
        ],
        "precautions": ["Seek professional mental health support", "Therapy recommended", "Suicide prevention measures"],
        "diet": ["Regular meals", "Omega-3 rich foods", "Exercise and sunlight exposure"]
    },

    # ── RHEUMATOLOGY ──────────────────────────────────────────────────────────
    "Rheumatoid Arthritis": {
        "category": "Rheumatology",
        "emergency_level": "medium",
        "icd_code": "M06.9",
        "specialist": "Rheumatologist",
        "risk_factors": ["female sex", "family history", "smoking", "obesity", "environmental exposures"],
        "symptoms": ["joint pain and swelling", "morning stiffness", "fatigue", "fever", "symmetric joint involvement"],
        "description": "Autoimmune disorder causing joint inflammation and damage.",
        "medicines": [
            {"name": "Methotrexate", "dosage": "7.5-25 mg once weekly", "type": "DMARD"},
            {"name": "TNF-alpha inhibitor", "dosage": "As per injectable formulation", "type": "Biologic"},
            {"name": "Prednisone", "dosage": "5-20 mg once daily", "type": "Corticosteroid"}
        ],
        "precautions": ["Regular rheumatology follow-ups", "Monitor blood counts", "Physical therapy"],
        "diet": ["Anti-inflammatory diet", "Fish oil supplements", "Limited alcohol"]
    },
    "Osteoarthritis": {
        "category": "Rheumatology",
        "emergency_level": "low",
        "icd_code": "M19.9",
        "specialist": "Rheumatologist",
        "risk_factors": ["age", "obesity", "joint injury", "repetitive movements", "female sex", "genetics"],
        "symptoms": ["joint pain", "stiffness", "reduced range of motion", "swelling", "grinding sensation"],
        "description": "Degenerative joint disease causing cartilage breakdown.",
        "medicines": [
            {"name": "Acetaminophen", "dosage": "500-1000 mg three times daily", "type": "Analgesic"},
            {"name": "Ibuprofen", "dosage": "200-800 mg three times daily", "type": "NSAID"},
            {"name": "Glucosamine", "dosage": "1500 mg once daily", "type": "Supplement"}
        ],
        "precautions": ["Maintain healthy weight", "Regular low-impact exercise", "Physical therapy"],
        "diet": ["Anti-inflammatory foods", "Calcium and vitamin D", "Weight management"]
    },
    "Gout": {
        "category": "Rheumatology",
        "emergency_level": "medium",
        "icd_code": "M10.9",
        "specialist": "Rheumatologist",
        "risk_factors": ["high purine diet", "alcohol consumption", "obesity", "kidney disease", "diuretic use", "male sex"],
        "symptoms": ["sudden severe joint pain", "swelling", "redness", "warmth", "often affects big toe"],
        "description": "Inflammatory condition caused by uric acid crystal deposition.",
        "medicines": [
            {"name": "Indomethacin", "dosage": "25-50 mg three times daily for acute attack", "type": "NSAID"},
            {"name": "Allopurinol", "dosage": "100-800 mg once daily", "type": "Uric acid lowering agent"},
            {"name": "Colchicine", "dosage": "0.5-1 mg every 1-2 hours until relief", "type": "Anti-inflammatory"}
        ],
        "precautions": ["Limit purine-rich foods", "Stay hydrated", "Maintain healthy weight"],
        "diet": ["Low purine diet", "Avoid alcohol especially beer", "Limit red meat and seafood"]
    },

    # ── HEMATOLOGY ────────────────────────────────────────────────────────────
    "Anemia": {
        "category": "Hematology",
        "emergency_level": "medium",
        "icd_code": "D64.9",
        "specialist": "Hematologist",
        "risk_factors": ["poor diet", "blood loss", "chronic disease", "pregnancy", "genetics", "vitamin deficiency"],
        "symptoms": ["fatigue", "weakness", "shortness of breath", "pale skin", "cold hands and feet", "dizziness"],
        "description": "Low red blood cell count or hemoglobin levels.",
        "medicines": [
            {"name": "Ferrous sulfate", "dosage": "325 mg once or twice daily", "type": "Iron supplement"},
            {"name": "Vitamin B12", "dosage": "1000 mcg IM monthly or 2000 mcg daily orally", "type": "Vitamin"},
            {"name": "Erythropoietin", "dosage": "As per specialist dosing", "type": "Growth factor"}
        ],
        "precautions": ["Identify and treat cause", "Regular hemoglobin checks", "Dietary counseling"],
        "diet": ["Iron-rich foods", "Vitamin B12 sources", "Folate-rich vegetables", "Vitamin C for iron absorption"]
    },

    # ── DERMATOLOGY ───────────────────────────────────────────────────────────
    "Psoriasis": {
        "category": "Dermatology",
        "emergency_level": "low",
        "icd_code": "L40.9",
        "specialist": "Dermatologist",
        "risk_factors": ["genetics", "stress", "infections", "certain medications", "smoking", "obesity"],
        "symptoms": ["scaly patches", "skin redness", "itching", "dry cracked skin", "joint pain", "nail changes"],
        "description": "Chronic autoimmune condition causing rapid skin cell turnover resulting in scaling and inflammation.",
        "medicines": [
            {"name": "Betamethasone cream", "dosage": "Apply thinly to affected areas once or twice daily", "type": "Topical corticosteroid"},
            {"name": "Methotrexate", "dosage": "7.5-25 mg once weekly", "type": "DMARD"},
            {"name": "Adalimumab", "dosage": "80 mg initially, then 40 mg biweekly", "type": "Biologic"}
        ],
        "precautions": ["Moisturize regularly", "Avoid triggers like stress and infections", "Regular dermatology follow-ups"],
        "diet": ["Anti-inflammatory diet", "Omega-3 fatty acids", "Limit alcohol", "Maintain healthy weight"]
    },
    "Eczema": {
        "category": "Dermatology",
        "emergency_level": "low",
        "icd_code": "L20.9",
        "specialist": "Dermatologist",
        "risk_factors": ["family history of atopy", "asthma", "allergic rhinitis", "environmental triggers", "stress"],
        "symptoms": ["itching", "dry skin", "rash", "skin inflammation", "skin thickening", "weeping blisters"],
        "description": "Chronic inflammatory skin condition characterized by itchy, inflamed, and dry skin patches.",
        "medicines": [
            {"name": "Hydrocortisone cream", "dosage": "Apply to affected area 2-3 times daily", "type": "Topical corticosteroid"},
            {"name": "Tacrolimus ointment", "dosage": "Apply thin layer twice daily", "type": "Calcineurin inhibitor"},
            {"name": "Dupilumab", "dosage": "600 mg SC initially, then 300 mg biweekly", "type": "Biologic"}
        ],
        "precautions": ["Avoid scratching", "Use fragrance-free moisturizers", "Identify and avoid triggers"],
        "diet": ["Avoid known food allergens", "Anti-inflammatory foods", "Stay hydrated"]
    },
    "Acne Vulgaris": {
        "category": "Dermatology",
        "emergency_level": "low",
        "icd_code": "L70.0",
        "specialist": "Dermatologist",
        "risk_factors": ["hormonal changes", "family history", "certain medications", "oily skin", "stress"],
        "symptoms": ["pimples", "blackheads", "whiteheads", "oily skin", "skin scarring", "facial redness"],
        "description": "Skin condition caused by clogged hair follicles with oil and dead skin cells.",
        "medicines": [
            {"name": "Benzoyl peroxide", "dosage": "Apply to affected area once or twice daily", "type": "Topical antibacterial"},
            {"name": "Tretinoin cream", "dosage": "Apply pea-sized amount at night", "type": "Topical retinoid"},
            {"name": "Doxycycline", "dosage": "100 mg twice daily for 3-6 months", "type": "Antibiotic"}
        ],
        "precautions": ["Wash face twice daily gently", "Avoid picking or squeezing", "Use non-comedogenic products"],
        "diet": ["Low glycemic diet", "Limit dairy", "Increase zinc and antioxidant intake"]
    },
    "Cellulitis": {
        "category": "Dermatology",
        "emergency_level": "medium",
        "icd_code": "L03.90",
        "specialist": "Dermatologist",
        "risk_factors": ["skin injury or wound", "obesity", "weakened immune system", "diabetes", "lymphedema"],
        "symptoms": ["skin redness", "swelling", "warmth", "tenderness", "fever", "red streaks"],
        "description": "Bacterial infection of the deeper layers of skin causing redness, swelling, and warmth.",
        "medicines": [
            {"name": "Cephalexin", "dosage": "500 mg four times daily for 5-7 days", "type": "Antibiotic"},
            {"name": "Amoxicillin-Clavulanate", "dosage": "875/125 mg twice daily for 5-7 days", "type": "Antibiotic"},
            {"name": "Clindamycin", "dosage": "300-450 mg four times daily", "type": "Antibiotic"}
        ],
        "precautions": ["Elevate affected limb", "Complete antibiotic course", "Mark borders to monitor spread"],
        "diet": ["High protein diet", "Vitamin C for wound healing", "Stay hydrated"]
    },

    # ── OPHTHALMOLOGY ─────────────────────────────────────────────────────────
    "Conjunctivitis": {
        "category": "Ophthalmology",
        "emergency_level": "low",
        "icd_code": "H10.9",
        "specialist": "Ophthalmologist",
        "risk_factors": ["contact with infected person", "allergen exposure", "contact lens use", "swimming in pools"],
        "symptoms": ["red eyes", "eye discharge", "itchy eyes", "watery eyes", "eye pain", "sensitivity to light"],
        "description": "Inflammation of the conjunctiva causing redness and discharge, commonly called 'pink eye'.",
        "medicines": [
            {"name": "Chloramphenicol eye drops", "dosage": "1-2 drops every 2-4 hours for 5-7 days", "type": "Antibiotic eye drops"},
            {"name": "Olopatadine eye drops", "dosage": "1-2 drops twice daily for allergic type", "type": "Antihistamine eye drops"},
            {"name": "Artificial tears", "dosage": "1-2 drops as needed", "type": "Lubricant"}
        ],
        "precautions": ["Avoid touching eyes", "Do not share towels or pillowcases", "Wash hands frequently"],
        "diet": ["Vitamin A rich foods", "Omega-3 fatty acids", "Stay hydrated"]
    },
    "Glaucoma": {
        "category": "Ophthalmology",
        "emergency_level": "high",
        "icd_code": "H40.9",
        "specialist": "Ophthalmologist",
        "risk_factors": ["age >60", "family history", "high intraocular pressure", "diabetes", "thin cornea"],
        "symptoms": ["blurred vision", "eye pain", "halos around lights", "nausea", "headache", "gradual vision loss"],
        "description": "Group of eye conditions that damage the optic nerve, often due to elevated eye pressure.",
        "medicines": [
            {"name": "Latanoprost eye drops", "dosage": "1 drop in affected eye once daily at night", "type": "Prostaglandin analogue"},
            {"name": "Timolol eye drops", "dosage": "1 drop twice daily", "type": "Beta-blocker eye drops"},
            {"name": "Acetazolamide", "dosage": "250 mg four times daily for acute attack", "type": "Carbonic anhydrase inhibitor"}
        ],
        "precautions": ["Regular eye pressure monitoring", "Avoid caffeine excess", "Protect eyes from injury"],
        "diet": ["Leafy green vegetables", "Antioxidant-rich foods", "Limit caffeine"]
    },
    "Cataract": {
        "category": "Ophthalmology",
        "emergency_level": "low",
        "icd_code": "H26.9",
        "specialist": "Ophthalmologist",
        "risk_factors": ["aging", "diabetes", "prolonged steroid use", "UV light exposure", "smoking", "eye injury"],
        "symptoms": ["blurred vision", "sensitivity to light", "seeing halos", "faded colors", "poor night vision", "double vision"],
        "description": "Clouding of the eye's lens causing vision impairment.",
        "medicines": [
            {"name": "Phacoemulsification surgery", "dosage": "Surgical lens removal and replacement", "type": "Surgical procedure"},
            {"name": "Antioxidant eye drops", "dosage": "As prescribed to slow progression", "type": "Neuroprotective"},
            {"name": "Updated eyeglass prescription", "dosage": "Corrective lenses as needed", "type": "Optical correction"}
        ],
        "precautions": ["UV-protective sunglasses", "Control diabetes", "Regular eye exams"],
        "diet": ["Antioxidant-rich diet", "Vitamin C and E", "Lutein and zeaxanthin (leafy greens)"]
    },

    # ── ENT (Ear, Nose, Throat) ────────────────────────────────────────────────
    "Sinusitis": {
        "category": "ENT",
        "emergency_level": "low",
        "icd_code": "J32.9",
        "specialist": "ENT Specialist",
        "risk_factors": ["allergic rhinitis", "nasal polyps", "deviated septum", "frequent upper respiratory infections", "smoking"],
        "symptoms": ["facial pain", "nasal congestion", "headache", "runny nose", "fever", "post-nasal drip"],
        "description": "Inflammation of the sinuses causing facial pain, congestion, and pressure.",
        "medicines": [
            {"name": "Amoxicillin", "dosage": "500 mg three times daily for 10-14 days", "type": "Antibiotic"},
            {"name": "Nasal saline irrigation", "dosage": "2-3 times daily", "type": "Nasal rinse"},
            {"name": "Intranasal fluticasone", "dosage": "2 sprays each nostril once daily", "type": "Corticosteroid spray"}
        ],
        "precautions": ["Use humidifier", "Stay hydrated", "Avoid allergens and irritants"],
        "diet": ["Warm liquids", "Spicy foods to clear sinuses", "High vitamin C foods"]
    },
    "Tonsillitis": {
        "category": "ENT",
        "emergency_level": "low",
        "icd_code": "J35.01",
        "specialist": "ENT Specialist",
        "risk_factors": ["age (children and teens)", "close contact with infected person", "weakened immunity", "seasonal changes"],
        "symptoms": ["sore throat", "difficulty swallowing", "swollen tonsils", "fever", "bad breath", "ear pain"],
        "description": "Inflammation of the tonsils caused by viral or bacterial infection.",
        "medicines": [
            {"name": "Penicillin V", "dosage": "500 mg twice daily for 10 days", "type": "Antibiotic"},
            {"name": "Amoxicillin", "dosage": "500 mg three times daily for 10 days", "type": "Antibiotic"},
            {"name": "Paracetamol", "dosage": "500-1000 mg every 4-6 hours as needed", "type": "Analgesic/Antipyretic"}
        ],
        "precautions": ["Rest voice", "Warm salt water gargles", "Complete antibiotic course"],
        "diet": ["Soft, cool foods", "Cold liquids and ice cream", "Warm broths"]
    },
    "Otitis Media": {
        "category": "ENT",
        "emergency_level": "low",
        "icd_code": "H66.9",
        "specialist": "ENT Specialist",
        "risk_factors": ["age (children)", "bottle feeding while lying down", "daycare attendance", "exposure to smoke", "allergies"],
        "symptoms": ["ear pain", "hearing difficulty", "fever", "ear drainage", "irritability", "headache"],
        "description": "Middle ear infection causing pain, hearing impairment, and possible fluid discharge.",
        "medicines": [
            {"name": "Amoxicillin", "dosage": "80-90 mg/kg/day in divided doses for 10 days", "type": "Antibiotic"},
            {"name": "Paracetamol", "dosage": "10-15 mg/kg every 4-6 hours as needed", "type": "Analgesic/Antipyretic"},
            {"name": "Ibuprofen", "dosage": "5-10 mg/kg every 6-8 hours as needed", "type": "NSAID"}
        ],
        "precautions": ["Avoid smoke exposure", "Breastfeed infants if possible", "Seek care for severe pain or hearing loss"],
        "diet": ["Avoid dairy temporarily if contributing to mucus", "Stay hydrated", "Warm fluids"]
    },

    # ── NEPHROLOGY (additional) ────────────────────────────────────────────────
    "Chronic Kidney Disease": {
        "category": "Nephrology",
        "emergency_level": "high",
        "icd_code": "N18.9",
        "specialist": "Nephrologist",
        "risk_factors": ["diabetes", "hypertension", "family history", "age >60", "recurrent kidney infections", "NSAIDs overuse"],
        "symptoms": ["fatigue", "swelling in legs", "decreased urination", "nausea", "shortness of breath", "confusion"],
        "description": "Progressive loss of kidney function over months or years causing waste buildup in blood.",
        "medicines": [
            {"name": "Amlodipine", "dosage": "5-10 mg once daily for blood pressure", "type": "Calcium channel blocker"},
            {"name": "Erythropoietin", "dosage": "50-100 units/kg SC 3 times weekly for anemia", "type": "Growth factor"},
            {"name": "Sodium bicarbonate", "dosage": "0.5-1 mEq/kg/day for acidosis", "type": "Alkalinizing agent"}
        ],
        "precautions": ["Monitor kidney function regularly", "Strict blood pressure control", "Avoid nephrotoxic drugs"],
        "diet": ["Low protein diet", "Low potassium and phosphorus", "Fluid restriction if prescribed"]
    },
    "Kidney Stones": {
        "category": "Nephrology",
        "emergency_level": "medium",
        "icd_code": "N20.0",
        "specialist": "Urologist",
        "risk_factors": ["dehydration", "high oxalate diet", "family history", "obesity", "certain medications"],
        "symptoms": ["severe flank pain", "blood in urine", "nausea", "vomiting", "frequent urination", "pain during urination"],
        "description": "Hard mineral deposits that form inside the kidneys causing severe pain during passage.",
        "medicines": [
            {"name": "Ketorolac", "dosage": "30 mg IV/IM for acute pain", "type": "NSAID"},
            {"name": "Tamsulosin", "dosage": "0.4 mg once daily to facilitate stone passage", "type": "Alpha blocker"},
            {"name": "Potassium citrate", "dosage": "10-20 mEq three times daily", "type": "Alkalinizing agent"}
        ],
        "precautions": ["Drink plenty of water (2-3 L/day)", "Limit oxalate-rich foods", "Seek emergency care if pain is severe or fever develops"],
        "diet": ["High fluid intake", "Low sodium", "Limit animal protein", "Avoid oxalate-rich foods"]
    },
    "Benign Prostatic Hyperplasia": {
        "category": "Urology",
        "emergency_level": "low",
        "icd_code": "N40.0",
        "specialist": "Urologist",
        "risk_factors": ["age >50", "family history", "obesity", "type 2 diabetes", "sedentary lifestyle"],
        "symptoms": ["frequent urination", "weak urine stream", "difficulty starting urination", "incomplete bladder emptying", "nocturia", "urinary urgency"],
        "description": "Non-cancerous enlargement of the prostate gland causing urinary symptoms.",
        "medicines": [
            {"name": "Tamsulosin", "dosage": "0.4 mg once daily", "type": "Alpha blocker"},
            {"name": "Finasteride", "dosage": "5 mg once daily", "type": "5-alpha reductase inhibitor"},
            {"name": "Dutasteride", "dosage": "0.5 mg once daily", "type": "5-alpha reductase inhibitor"}
        ],
        "precautions": ["Urinate when urge arises", "Avoid alcohol and caffeine", "Regular urological check-ups"],
        "diet": ["Saw palmetto supplements (under medical guidance)", "Low-fat diet", "Plenty of fluids during day", "Limit fluids at night"]
    },

    # ── GYNECOLOGY / REPRODUCTIVE ─────────────────────────────────────────────
    "Polycystic Ovary Syndrome": {
        "category": "Gynecology",
        "emergency_level": "low",
        "icd_code": "E28.2",
        "specialist": "Gynecologist",
        "risk_factors": ["family history", "insulin resistance", "obesity", "inflammation"],
        "symptoms": ["irregular periods", "excess hair growth", "acne", "weight gain", "hair thinning", "difficulty conceiving"],
        "description": "Hormonal disorder causing enlarged ovaries with small cysts, affecting reproduction and metabolism.",
        "medicines": [
            {"name": "Metformin", "dosage": "500-1000 mg twice daily for insulin resistance", "type": "Antidiabetic"},
            {"name": "Oral contraceptive pills", "dosage": "1 tablet daily per prescribed cycle", "type": "Hormonal therapy"},
            {"name": "Clomifene", "dosage": "50-150 mg for days 2-6 of cycle for ovulation induction", "type": "Ovulation inducer"}
        ],
        "precautions": ["Regular gynecological check-ups", "Healthy weight management", "Monitor blood sugar"],
        "diet": ["Low glycemic index foods", "High fiber", "Lean proteins", "Limit processed foods"]
    },
    "Endometriosis": {
        "category": "Gynecology",
        "emergency_level": "medium",
        "icd_code": "N80.9",
        "specialist": "Gynecologist",
        "risk_factors": ["family history", "early menstruation", "short cycles", "nulliparity", "immune system disorders"],
        "symptoms": ["pelvic pain", "painful periods", "pain during intercourse", "heavy menstrual bleeding", "infertility", "fatigue"],
        "description": "Condition where tissue similar to the uterine lining grows outside the uterus.",
        "medicines": [
            {"name": "Ibuprofen", "dosage": "400-600 mg every 4-6 hours for pain", "type": "NSAID"},
            {"name": "Norethindrone", "dosage": "5 mg once daily (progestin therapy)", "type": "Hormonal therapy"},
            {"name": "Leuprolide", "dosage": "3.75 mg IM monthly (GnRH agonist)", "type": "GnRH agonist"}
        ],
        "precautions": ["Track symptoms and menstrual cycle", "Hormonal therapy under specialist supervision", "Pain management plan"],
        "diet": ["Anti-inflammatory diet", "Omega-3 fatty acids", "Limit red meat and alcohol"]
    },

    # ── EMERGENCY / CARDIOVASCULAR ────────────────────────────────────────────
    "Myocardial Infarction": {
        "category": "Cardiology",
        "emergency_level": "critical",
        "icd_code": "I21.9",
        "specialist": "Cardiologist",
        "risk_factors": ["hypertension", "diabetes", "smoking", "high cholesterol", "obesity", "family history", "male sex", "age"],
        "symptoms": ["crushing chest pain", "pain radiating to arm", "shortness of breath", "sweating", "nausea", "dizziness"],
        "description": "Heart attack caused by blocked coronary artery leading to cardiac muscle death.",
        "medicines": [
            {"name": "Aspirin", "dosage": "300 mg chewed immediately", "type": "Antiplatelet"},
            {"name": "Nitroglycerin", "dosage": "0.4 mg sublingual every 5 min (max 3 doses)", "type": "Vasodilator"},
            {"name": "Morphine", "dosage": "2-4 mg IV for pain management", "type": "Opioid analgesic"}
        ],
        "precautions": ["CALL EMERGENCY SERVICES IMMEDIATELY", "Chew aspirin if available and not allergic", "Do not drive yourself to hospital"],
        "diet": ["Post-recovery: Mediterranean diet", "Low sodium", "No smoking", "Cardiac rehabilitation"]
    },
    "Stroke": {
        "category": "Neurology",
        "emergency_level": "critical",
        "icd_code": "I64",
        "specialist": "Neurologist",
        "risk_factors": ["hypertension", "atrial fibrillation", "diabetes", "smoking", "high cholesterol", "previous TIA"],
        "symptoms": ["sudden facial drooping", "arm weakness", "speech difficulty", "sudden headache", "vision loss", "confusion"],
        "description": "Brain damage due to interrupted blood supply; requires immediate emergency treatment.",
        "medicines": [
            {"name": "Alteplase (tPA)", "dosage": "0.9 mg/kg IV within 4.5 hours of onset", "type": "Thrombolytic"},
            {"name": "Aspirin", "dosage": "300 mg once daily for ischemic stroke", "type": "Antiplatelet"},
            {"name": "Heparin", "dosage": "Per protocol for cardioembolic strokes", "type": "Anticoagulant"}
        ],
        "precautions": ["CALL EMERGENCY SERVICES IMMEDIATELY (FAST: Face, Arms, Speech, Time)", "Time is critical — brain cells die every minute", "Do not give food or water"],
        "diet": ["Post-recovery: DASH diet", "Low sodium", "High fiber", "Dysphagia-safe foods if swallowing affected"]
    },
    "Sepsis": {
        "category": "Emergency Medicine",
        "emergency_level": "critical",
        "icd_code": "A41.9",
        "specialist": "Emergency Physician",
        "risk_factors": ["immunocompromised state", "surgery", "invasive procedures", "chronic illness", "extreme age"],
        "symptoms": ["high fever", "rapid heart rate", "rapid breathing", "confusion", "low blood pressure", "extreme fatigue"],
        "description": "Life-threatening organ dysfunction caused by a dysregulated host response to infection.",
        "medicines": [
            {"name": "Broad-spectrum IV antibiotics", "dosage": "As per culture sensitivity and local protocols", "type": "Antibiotic"},
            {"name": "Normal saline", "dosage": "30 mL/kg IV within 3 hours for septic shock", "type": "IV fluid resuscitation"},
            {"name": "Norepinephrine", "dosage": "0.01-3 mcg/kg/min IV for refractory shock", "type": "Vasopressor"}
        ],
        "precautions": ["SEEK EMERGENCY CARE IMMEDIATELY", "This is a medical emergency", "ICU care required"],
        "diet": ["IV nutrition support in ICU", "High calorie and protein on recovery", "Gradual oral reintroduction"]
    },

    # ── NEUROLOGY (additional) ─────────────────────────────────────────────────
    "Epilepsy": {
        "category": "Neurology",
        "emergency_level": "high",
        "icd_code": "G40.9",
        "specialist": "Neurologist",
        "risk_factors": ["brain injury", "genetics", "stroke", "brain infections", "developmental disorders"],
        "symptoms": ["seizures", "temporary confusion", "staring spells", "jerking movements", "loss of consciousness", "fear or anxiety before seizure"],
        "description": "Neurological disorder characterized by recurrent unprovoked seizures.",
        "medicines": [
            {"name": "Valproate", "dosage": "500-2500 mg daily in divided doses", "type": "Anticonvulsant"},
            {"name": "Levetiracetam", "dosage": "500-3000 mg daily in divided doses", "type": "Anticonvulsant"},
            {"name": "Carbamazepine", "dosage": "200-1200 mg daily in divided doses", "type": "Anticonvulsant"}
        ],
        "precautions": ["Take medications consistently", "Avoid alcohol and sleep deprivation", "Do not drive until seizure-free for required period"],
        "diet": ["Ketogenic diet may help in refractory cases", "Regular meals to stabilize blood sugar", "Avoid alcohol"]
    },
    "Parkinson Disease": {
        "category": "Neurology",
        "emergency_level": "low",
        "icd_code": "G20",
        "specialist": "Neurologist",
        "risk_factors": ["age >60", "family history", "male sex", "exposure to toxins", "head injury"],
        "symptoms": ["tremors", "stiffness", "slow movement", "balance problems", "speech changes", "writing changes"],
        "description": "Progressive neurological disorder affecting movement due to dopamine-producing neuron loss.",
        "medicines": [
            {"name": "Levodopa/Carbidopa", "dosage": "100/25 mg three times daily, titrated up", "type": "Dopaminergic"},
            {"name": "Pramipexole", "dosage": "0.125-4.5 mg three times daily", "type": "Dopamine agonist"},
            {"name": "Selegiline", "dosage": "5 mg twice daily", "type": "MAO-B inhibitor"}
        ],
        "precautions": ["Regular physiotherapy", "Fall prevention measures", "Speech therapy if needed"],
        "diet": ["High fiber diet", "Adequate protein (timing with Levodopa)", "Soft foods if swallowing affected"]
    },
    "Multiple Sclerosis": {
        "category": "Neurology",
        "emergency_level": "medium",
        "icd_code": "G35",
        "specialist": "Neurologist",
        "risk_factors": ["female sex", "age 20-40", "family history", "vitamin D deficiency", "Epstein-Barr virus exposure"],
        "symptoms": ["vision problems", "muscle weakness", "numbness or tingling", "fatigue", "balance issues", "cognitive problems"],
        "description": "Chronic autoimmune disease affecting the central nervous system causing demyelination.",
        "medicines": [
            {"name": "Interferon beta-1a", "dosage": "30 mcg IM weekly", "type": "Disease-modifying therapy"},
            {"name": "Methylprednisolone", "dosage": "1000 mg IV daily for 3-5 days for relapse", "type": "Corticosteroid"},
            {"name": "Dimethyl fumarate", "dosage": "240 mg twice daily", "type": "Disease-modifying therapy"}
        ],
        "precautions": ["Avoid overheating", "Regular neurological follow-ups", "Physical therapy"],
        "diet": ["Mediterranean diet", "Vitamin D supplementation", "Omega-3 fatty acids"]
    },

    # ── ENDOCRINOLOGY (additional) ─────────────────────────────────────────────
    "Diabetes Type 1": {
        "category": "Endocrinology",
        "emergency_level": "high",
        "icd_code": "E10.9",
        "specialist": "Endocrinologist",
        "risk_factors": ["family history", "autoimmune conditions", "certain viruses", "geography"],
        "symptoms": ["extreme thirst", "frequent urination", "unintended weight loss", "fatigue", "blurred vision", "fruity breath odor"],
        "description": "Autoimmune condition causing destruction of insulin-producing beta cells, requiring lifelong insulin.",
        "medicines": [
            {"name": "Insulin glargine", "dosage": "10-80 units SC once daily (basal)", "type": "Insulin"},
            {"name": "Insulin lispro", "dosage": "Per sliding scale before meals (bolus)", "type": "Insulin"},
            {"name": "Glucagon", "dosage": "1 mg IM/SC for severe hypoglycemia", "type": "Emergency glucagon"}
        ],
        "precautions": ["Monitor blood glucose 4-8 times daily", "Always carry fast-acting sugar", "Regular HbA1c checks"],
        "diet": ["Carbohydrate counting", "Low glycemic index foods", "Regular meal timing", "Avoid high-sugar foods"]
    },
    "Hypothyroidism": {
        "category": "Endocrinology",
        "emergency_level": "low",
        "icd_code": "E03.9",
        "specialist": "Endocrinologist",
        "risk_factors": ["autoimmune disease (Hashimoto's)", "iodine deficiency", "thyroid surgery", "female sex", "age >60"],
        "symptoms": ["fatigue", "weight gain", "cold intolerance", "constipation", "dry skin", "slow heart rate"],
        "description": "Underactive thyroid gland producing insufficient thyroid hormones.",
        "medicines": [
            {"name": "Levothyroxine", "dosage": "25-200 mcg once daily on empty stomach", "type": "Thyroid replacement"},
            {"name": "Liothyronine", "dosage": "5-25 mcg daily (if T3 needed)", "type": "Thyroid hormone"},
        ],
        "precautions": ["Take medication consistently at same time", "Regular TSH monitoring", "Avoid soy near medication time"],
        "diet": ["Iodine-rich foods (iodized salt, seafood)", "Selenium-rich foods", "Avoid excess raw cruciferous vegetables"]
    },
    "Obesity": {
        "category": "Endocrinology",
        "emergency_level": "low",
        "icd_code": "E66.9",
        "specialist": "Endocrinologist",
        "risk_factors": ["high-calorie diet", "sedentary lifestyle", "genetics", "hormonal disorders", "medications", "psychological factors"],
        "symptoms": ["excessive weight", "shortness of breath on exertion", "joint pain", "fatigue", "snoring", "increased sweating"],
        "description": "Condition characterized by excessive body fat accumulation with BMI ≥30, raising health risks.",
        "medicines": [
            {"name": "Orlistat", "dosage": "120 mg three times daily with meals", "type": "Lipase inhibitor"},
            {"name": "Phentermine/Topiramate", "dosage": "As prescribed by specialist", "type": "Appetite suppressant"},
            {"name": "Liraglutide", "dosage": "0.6-3 mg SC daily", "type": "GLP-1 agonist"}
        ],
        "precautions": ["Structured calorie-restricted diet", "150+ minutes exercise weekly", "Behavioral counseling"],
        "diet": ["Calorie-controlled diet", "High fiber and protein", "Avoid processed foods and sugary drinks"]
    },
}

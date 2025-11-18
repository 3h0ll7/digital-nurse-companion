export interface MindMapBranch {
  title: string;
  details: string[];
}

export interface MindMapTopic {
  id: string;
  title: string;
  category: string;
  centralConcept: string;
  clinicalPearl: string;
  branches: MindMapBranch[];
}

export const mindMaps: MindMapTopic[] = [
  {
    id: "acs-stemi",
    title: "Acute Coronary Syndrome (STEMI)",
    category: "Cardiovascular",
    centralConcept: "Rapid reperfusion limits myocardial death.",
    clinicalPearl: "Give chewable aspirin and activate the cath lab within 10 minutes of arrival.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Crushing chest pain radiating to jaw/arm with diaphoresis",
          "ST elevation in contiguous leads and reciprocal depression",
          "Troponin rise confirms myocardial injury",
        ],
      },
      {
        title: "Immediate Actions",
        details: [
          "MONA sequence (morphine, oxygen, nitro, aspirin) after vitals",
          "Establish two large-bore IVs and draw baseline labs",
          "Prepare for PCI door-to-balloon goal ≤ 90 minutes",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Continuous ST-segment monitoring for reinfarction",
          "Watch for cardiogenic shock signs (cool clammy skin, low MAP)",
          "Evaluate response to nitrates and beta-blockers",
        ],
      },
    ],
  },
  {
    id: "heart-failure",
    title: "Acute Decompensated Heart Failure",
    category: "Cardiovascular",
    centralConcept: "Reduce preload/afterload to relieve pulmonary congestion.",
    clinicalPearl: "Daily weights + lung sounds reveal fluid shifts before edema is visible.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Orthopnea, frothy sputum, crackles, S3 gallop",
          "Elevated BNP, CXR with vascular congestion",
          "Low sodium, high creatinine from fluid overload",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Position upright with legs dangling to reduce preload",
          "Administer IV diuretics, vasodilators, and oxygen",
          "Restrict sodium/fluids and monitor I&O strictly",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Track urine output hourly; alert if < 30 mL/hr",
          "Trend BNP, weights, and edema progression",
          "Evaluate for arrhythmias and renal perfusion",
        ],
      },
    ],
  },
  {
    id: "htn-crisis",
    title: "Hypertensive Emergency",
    category: "Cardiovascular",
    centralConcept: "Controlled BP reduction prevents organ ischemia.",
    clinicalPearl: "Lower MAP by no more than 25% within first hour to avoid cerebral hypoperfusion.",
    branches: [
      {
        title: "Assessment",
        details: [
          "BP >180/120 with organ damage (vision changes, neuro deficits)",
          "Renal labs show elevated creatinine or hematuria",
          "Chest pain or dyspnea from heart strain",
        ],
      },
      {
        title: "Therapies",
        details: [
          "Start IV antihypertensive drip (nicardipine, labetalol)",
          "Insert arterial line for minute-to-minute readings",
          "Treat underlying cause (preeclampsia, pheo, drug use)",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Neuro checks for stroke symptoms",
          "Renal perfusion via urine output and labs",
          "Watch for hypotension or bradycardia from meds",
        ],
      },
    ],
  },
  {
    id: "afib-rvr",
    title: "Atrial Fibrillation with RVR",
    category: "Cardiovascular",
    centralConcept: "Control rate and prevent embolic stroke.",
    clinicalPearl: "Assess for hemodynamic instability; synchronized cardioversion if hypotensive or chest pain persists.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Irregularly irregular rhythm, tachycardia >120",
          "Symptoms: palpitations, hypotension, SOB",
          "CHADS-VASc score guides anticoagulation",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Rate control with beta-blockers or calcium-channel blockers",
          "Anticoagulate with heparin/DOAC to prevent clots",
          "Prepare for cardioversion if onset <48h or after TEE",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Continuous telemetry for conversion or pauses",
          "Assess for bleeding if anticoagulated",
          "Educate on pulse checks and medication adherence",
        ],
      },
    ],
  },
  {
    id: "tamponade",
    title: "Cardiac Tamponade",
    category: "Cardiovascular",
    centralConcept: "Rapid fluid removal restores stroke volume.",
    clinicalPearl: "Beck triad (hypotension, JVD, muffled heart tones) demands emergent pericardiocentesis.",
    branches: [
      {
        title: "Recognition",
        details: [
          "Pulsus paradoxus and narrow pulse pressure",
          "Tachycardia, dyspnea, restlessness",
          "Electrical alternans on ECG",
        ],
      },
      {
        title: "Actions",
        details: [
          "Notify provider; prepare pericardiocentesis tray",
          "Administer IV fluids to maintain preload",
          "Avoid positive pressure ventilation unless necessary",
        ],
      },
      {
        title: "Follow-up",
        details: [
          "Monitor drainage amount/character",
          "Assess for recurrence via ultrasound",
          "Document hemodynamic response post-procedure",
        ],
      },
    ],
  },
  {
    id: "sepsis-bundle",
    title: "Sepsis Hour-1 Bundle",
    category: "Critical Care",
    centralConcept: "Early identification and bundle completion improve survival.",
    clinicalPearl: "Draw cultures before antibiotics but never delay administration beyond 60 minutes.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Suspected infection plus organ dysfunction (SOFA ≥2)",
          "Lactate ≥2 mmol/L indicates tissue hypoperfusion",
          "Hypotension or MAP <65 despite fluids",
        ],
      },
      {
        title: "Bundle Tasks",
        details: [
          "Measure lactate and recheck if >2",
          "Obtain blood cultures ×2 prior to antibiotics",
          "Start broad-spectrum antibiotics and 30 mL/kg crystalloid",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Assess perfusion (cap refill, urine output)",
          "Titrate vasopressors to MAP ≥65",
          "Trend lactate clearance over 6 hours",
        ],
      },
    ],
  },
  {
    id: "septic-shock",
    title: "Septic Shock Hemodynamics",
    category: "Critical Care",
    centralConcept: "Optimize volume, vasopressors, and oxygen delivery.",
    clinicalPearl: "Norepinephrine is first-line; add vasopressin when escalating doses needed.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Persistent hypotension despite fluids",
          "Lactate >4 mmol/L",
          "Cool clammy skin or mottling",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Central line placement for pressor infusions",
          "Initiate vasopressors and titrate per protocol",
          "Consider stress-dose steroids if refractory",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Invasive arterial blood pressure waveforms",
          "Urine output ≥0.5 mL/kg/hr",
          "ScvO2 or echocardiogram for cardiac output",
        ],
      },
    ],
  },
  {
    id: "copd-exacerbation",
    title: "COPD Exacerbation",
    category: "Respiratory",
    centralConcept: "Maintain ventilation while avoiding CO2 narcosis.",
    clinicalPearl: "Venturi mask delivers controlled FiO2 and prevents suppression of hypoxic drive.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Prolonged expiratory phase, wheeze, barrel chest",
          "ABG shows respiratory acidosis with hypercapnia",
          "Increased sputum volume/purulence",
        ],
      },
      {
        title: "Therapies",
        details: [
          "Bronchodilators (SABA + anticholinergic)",
          "Systemic steroids and antibiotics if infectious",
          "Pursed-lip breathing coaching and airway clearance",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Watch for CO2 retention (drowsiness, headache)",
          "Use ETCO2 to trend ventilation",
          "Evaluate need for NIV or intubation",
        ],
      },
    ],
  },
  {
    id: "asthma-status",
    title: "Status Asthmaticus",
    category: "Respiratory",
    centralConcept: "Reverse bronchospasm and prevent respiratory failure.",
    clinicalPearl: "Silent chest + rising CO2 means impending arrest—call for intubation support early.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Severe dyspnea, accessory muscle use, speaking in words",
          "Peak flow <40% predicted",
          "Hypoxia with hypercapnia on ABG",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Continuous nebulized beta-agonists with ipratropium",
          "IV steroids and consider magnesium sulfate",
          "Prepare for intubation with ketamine if refractory",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Frequent lung sounds for air entry",
          "Watch for pneumothorax from air trapping",
          "Assess anxiety and provide coaching",
        ],
      },
    ],
  },
  {
    id: "ards",
    title: "Acute Respiratory Distress Syndrome",
    category: "Respiratory",
    centralConcept: "Lung-protective ventilation prevents volutrauma.",
    clinicalPearl: "Use low tidal volumes (4-6 mL/kg IBW) and consider proning when PaO2/FiO2 < 150.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Bilateral infiltrates on CXR not explained by CHF",
          "PaO2/FiO2 ≤ 300 within one week of insult",
          "Refractory hypoxemia and decreased compliance",
        ],
      },
      {
        title: "Ventilation",
        details: [
          "Low tidal volume + high PEEP strategy",
          "Plateau pressure goal <30 cm H2O",
          "Prone positioning and neuromuscular blockade if needed",
        ],
      },
      {
        title: "Support",
        details: [
          "Conservative fluids after resuscitation",
          "Prevent ventilator-associated pneumonia",
          "Provide sedation vacation and delirium screening",
        ],
      },
    ],
  },
  {
    id: "pneumonia",
    title: "Severe Pneumonia Care",
    category: "Respiratory",
    centralConcept: "Promote oxygenation and eradicate pathogen.",
    clinicalPearl: "Start empiric antibiotics within 4 hours of presentation for best outcomes.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Fever, productive cough, pleuritic pain",
          "Crackles, egophony, dull percussion",
          "Elevated WBC and infiltrate on CXR",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Administer antibiotics per culture sensitivity",
          "Encourage incentive spirometry and mobilization",
          "Hydration to thin secretions",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Pulse oximetry and ABGs for oxygenation",
          "Watch for sepsis progression",
          "Assess adherence to vaccine history",
        ],
      },
    ],
  },
  {
    id: "pulmonary-embolism",
    title: "Pulmonary Embolism",
    category: "Respiratory",
    centralConcept: "Restore perfusion and prevent clot propagation.",
    clinicalPearl: "Sudden unexplained hypoxia + tachycardia should trigger STAT CT angiography prep.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Dyspnea, pleuritic chest pain, hemoptysis",
          "Tachycardia, hypotension, syncope",
          "D-dimer elevation and RV strain on ECG/Echo",
        ],
      },
      {
        title: "Management",
        details: [
          "Anticoagulate with heparin infusion",
          "Consider thrombolytics or embolectomy if massive",
          "Provide oxygen and manage pain/anxiety",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Bleeding signs from anticoagulants",
          "Pulse oximetry and ABG trends",
          "Leg girth and mobility for DVT prevention",
        ],
      },
    ],
  },
  {
    id: "ischemic-stroke",
    title: "Ischemic Stroke Pathway",
    category: "Neurological",
    centralConcept: "Time is brain—rapid reperfusion limits deficits.",
    clinicalPearl: "Door-to-needle goal is ≤60 minutes when giving alteplase.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Use FAST/NIHSS to quantify deficits",
          "Determine exact last-known-well time",
          "CT head to rule out hemorrhage",
        ],
      },
      {
        title: "Acute Management",
        details: [
          "Maintain BP <185/110 prior to thrombolytics",
          "Start alteplase if eligible or prep for thrombectomy",
          "Keep glucose 140-180 and manage airway",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Neuro checks q15min during infusion",
          "Watch for bleeding or angioedema",
          "Position head midline with HOB 30 degrees",
        ],
      },
    ],
  },
  {
    id: "icp",
    title: "Intracranial Pressure Management",
    category: "Neurological",
    centralConcept: "Maintain cerebral perfusion pressure while lowering ICP.",
    clinicalPearl: "Sedation, analgesia, and ventilator synchrony prevent spikes in ICP.",
    branches: [
      {
        title: "Triggers",
        details: [
          "Brain injury, hemorrhage, hydrocephalus",
          "Cushing triad: hypertension, bradycardia, irregular respirations",
          "Papilledema or pupillary changes",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Elevate HOB 30° with neutral neck",
          "Administer hypertonic saline or mannitol",
          "Control CO2 (PaCO2 35-40) and avoid fever",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "ICP waveform with goal <20 mmHg",
          "CPP = MAP - ICP keep >60",
          "Assess for CSF drainage system patency",
        ],
      },
    ],
  },
  {
    id: "seizure",
    title: "Seizure Precautions",
    category: "Neurological",
    centralConcept: "Prevent injury and stop prolonged activity.",
    clinicalPearl: "Never restrain; protect airway and time the event for escalation.",
    branches: [
      {
        title: "Preparation",
        details: [
          "Suction setup, oxygen, and padded rails ready",
          "IV access maintained for benzodiazepines",
          "Educate patient/family on triggers",
        ],
      },
      {
        title: "During Seizure",
        details: [
          "Turn patient to side, loosen tight clothing",
          "Do not place objects in mouth",
          "Document aura, duration, and motor activity",
        ],
      },
      {
        title: "Postictal Care",
        details: [
          "Assess neuro status and airway patency",
          "Reorient and provide reassurance",
          "Monitor drug levels (phenytoin, valproate)",
        ],
      },
    ],
  },
  {
    id: "spinal-injury",
    title: "Spinal Cord Injury Stabilization",
    category: "Neurological",
    centralConcept: "Protect cord perfusion and prevent secondary injury.",
    clinicalPearl: "Neurogenic shock presents with hypotension and bradycardia—treat with vasopressors.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Determine level of injury and motor/sensory deficits",
          "Immobilize spine until cleared",
          "Monitor for autonomic dysreflexia in injuries above T6",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Maintain MAP 85-90 for cord perfusion",
          "Administer steroids per protocol if indicated",
          "Insert Foley with sterile technique",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Skin integrity and pressure injury prevention",
          "Bowel/bladder programs to prevent retention",
          "Education on trigger avoidance",
        ],
      },
    ],
  },
  {
    id: "dka",
    title: "Diabetic Ketoacidosis",
    category: "Endocrine",
    centralConcept: "Gradual glucose reduction while correcting dehydration and electrolytes.",
    clinicalPearl: "Start insulin only after verifying potassium ≥3.3 mEq/L.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Polyuria, polydipsia, Kussmaul respirations",
          "Glucose >250, anion gap metabolic acidosis",
          "Ketones in serum/urine and fruity breath",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Start isotonic fluids then switch to D5 when glucose <200",
          "Regular insulin infusion with hourly glucose checks",
          "Replace potassium and phosphate as needed",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Anion gap closure signals resolution",
          "Watch for cerebral edema with rapid shifts",
          "Document mental status changes",
        ],
      },
    ],
  },
  {
    id: "hhs",
    title: "Hyperosmolar Hyperglycemic State",
    category: "Endocrine",
    centralConcept: "Aggressive fluids and insulin prevent circulatory collapse.",
    clinicalPearl: "Neurologic symptoms stem from profound dehydration rather than ketoacidosis.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Glucose often >600 mg/dL",
          "Serum osmolality >320 with minimal ketones",
          "Altered mental status, seizures, hemiparesis",
        ],
      },
      {
        title: "Management",
        details: [
          "Large-volume isotonic fluids over first hours",
          "Low-dose insulin infusion to drop glucose 50-75/hr",
          "Correct electrolytes and precipitating factors",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Strict I&O and hemodynamic status",
          "Serum sodium correction for hyperglycemia",
          "Assess for thrombotic events",
        ],
      },
    ],
  },
  {
    id: "thyroid-storm",
    title: "Thyroid Storm",
    category: "Endocrine",
    centralConcept: "Block hormone synthesis/release and control adrenergic surge.",
    clinicalPearl: "Sequence matters: beta-blocker, thionamide, then iodine.",
    branches: [
      {
        title: "Assessment",
        details: [
          "High fever, tachycardia, agitation",
          "Elevated free T4 with suppressed TSH",
          "Precipitated by infection, surgery, or pregnancy",
        ],
      },
      {
        title: "Management",
        details: [
          "Beta-blockers for tachyarrhythmias",
          "PTU/methimazole to block synthesis",
          "Iodine solution and glucocorticoids to inhibit release",
        ],
      },
      {
        title: "Support",
        details: [
          "Cooling blankets, acetaminophen (avoid aspirin)",
          "Aggressive hydration",
          "Monitor for heart failure or shock",
        ],
      },
    ],
  },
  {
    id: "adrenal-crisis",
    title: "Adrenal Crisis",
    category: "Endocrine",
    centralConcept: "Replace glucocorticoids and treat shock.",
    clinicalPearl: "Never delay hydrocortisone when crisis suspected.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Severe hypotension, hyponatremia, hyperkalemia",
          "Abdominal pain, vomiting, confusion",
          "History of steroid withdrawal or Addison's",
        ],
      },
      {
        title: "Management",
        details: [
          "IV hydrocortisone 100 mg bolus",
          "Large-volume isotonic fluids with dextrose",
          "Treat precipitating illness (infection, surgery)",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Electrolyte normalization",
          "Glucose support to avoid hypoglycemia",
          "Vital signs for shock resolution",
        ],
      },
    ],
  },
  {
    id: "aki",
    title: "Acute Kidney Injury",
    category: "Renal",
    centralConcept: "Restore perfusion and prevent nephrotoxicity.",
    clinicalPearl: "Urine output <0.5 mL/kg/hr for 6 hours meets KDIGO criteria.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Rising creatinine and BUN",
          "Fluid overload, edema, hypertension",
          "History of contrast, nephrotoxic meds, or sepsis",
        ],
      },
      {
        title: "Management",
        details: [
          "Optimize hemodynamics and discontinue nephrotoxins",
          "Dose adjust medications for GFR",
          "Consider renal replacement if refractory",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Strict intake/output and daily weights",
          "Electrolytes (potassium, phosphate)",
          "Assess for uremic symptoms",
        ],
      },
    ],
  },
  {
    id: "ckd",
    title: "Chronic Kidney Disease Progression",
    category: "Renal",
    centralConcept: "Slow nephron loss and manage complications.",
    clinicalPearl: "Tight BP control with ACE/ARB slows progression.",
    branches: [
      {
        title: "Assessment",
        details: [
          "eGFR <60 for >3 months",
          "Albuminuria, anemia, mineral bone disease",
          "Fatigue, pruritus, neuropathy",
        ],
      },
      {
        title: "Management",
        details: [
          "Renin-angiotensin blockade for BP",
          "Renal diet: limit sodium, phosphorus, potassium",
          "Erythropoiesis-stimulating agents for anemia",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Monthly labs for electrolytes and Hgb",
          "Vaccine updates (HBV, flu)",
          "Education on access planning for dialysis",
        ],
      },
    ],
  },
  {
    id: "hemodialysis",
    title: "Hemodialysis Session",
    category: "Renal",
    centralConcept: "Remove waste while protecting vascular access.",
    clinicalPearl: "Never use fistula for BP or venipuncture.",
    branches: [
      {
        title: "Preparation",
        details: [
          "Assess bruit/thrill in access",
          "Obtain weight, vitals, and review labs",
          "Hold dialyzable meds until after",
        ],
      },
      {
        title: "During Dialysis",
        details: [
          "Monitor for hypotension, cramps, disequilibrium",
          "Administer anticoagulants per protocol",
          "Maintain aseptic technique with lines",
        ],
      },
      {
        title: "Post Care",
        details: [
          "Reassess weight and compare fluid removal",
          "Check access site for bleeding",
          "Review lab trends with nephrologist",
        ],
      },
    ],
  },
  {
    id: "peritoneal-dialysis",
    title: "Peritoneal Dialysis",
    category: "Renal",
    centralConcept: "Maintain sterile technique to prevent peritonitis.",
    clinicalPearl: "Cloudy effluent with abdominal pain equals infection until proven otherwise.",
    branches: [
      {
        title: "Preparation",
        details: [
          "Warm dialysate to body temperature",
          "Assess catheter exit site for infection",
          "Review prescribed dwell times and volumes",
        ],
      },
      {
        title: "Exchange Care",
        details: [
          "Mask and sterile technique during connections",
          "Record inflow/outflow amounts and appearance",
          "Clamp bag properly to avoid air entry",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Report fibrin, blood, or cloudiness",
          "Assess for abdominal distention or shoulder pain",
          "Track glucose, as dialysate contains dextrose",
        ],
      },
    ],
  },
  {
    id: "gi-bleed",
    title: "Upper GI Bleed",
    category: "Gastrointestinal",
    centralConcept: "Stabilize hemodynamics and identify source.",
    clinicalPearl: "Two large-bore IVs and type & cross before endoscopy.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Hematemesis, melena, orthostatic hypotension",
          "Low Hgb/Hct and elevated BUN",
          "History of NSAIDs, varices, or ulcers",
        ],
      },
      {
        title: "Management",
        details: [
          "Resuscitate with crystalloids/blood products",
          "Administer PPI infusion and octreotide for varices",
          "Prepare for emergent endoscopy or balloon tamponade",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Measure output from NG tube",
          "Assess for aspiration or perforation",
          "Trend H&H every 4-6 hours",
        ],
      },
    ],
  },
  {
    id: "liver-failure",
    title: "Acute Liver Failure",
    category: "Gastrointestinal",
    centralConcept: "Prevent cerebral edema and support coagulation.",
    clinicalPearl: "Ammonia elevation drives encephalopathy—lactulose titrated to 3 stools/day.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Jaundice, coagulopathy, hepatic encephalopathy",
          "Elevated AST/ALT, INR >1.5",
          "Asterixis and cerebral edema risk",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Administer lactulose and rifaximin",
          "Manage glucose, electrolytes, and vitamin K",
          "Prepare for transplant evaluation",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Neuro status and ICP monitoring",
          "Bleeding signs due to coagulopathy",
          "Renal function for hepatorenal syndrome",
        ],
      },
    ],
  },
  {
    id: "pancreatitis",
    title: "Acute Pancreatitis",
    category: "Gastrointestinal",
    centralConcept: "Rest pancreas and treat systemic inflammation.",
    clinicalPearl: "Persistent tachycardia may signal developing necrosis or sepsis.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Epigastric pain radiating to back",
          "Elevated lipase/amylase",
          "Grey-Turner or Cullen signs for hemorrhage",
        ],
      },
      {
        title: "Management",
        details: [
          "NPO with aggressive IV fluids",
          "Pain control, antiemetics, electrolyte correction",
          "Enteral nutrition once bowel sounds return",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Respiratory status for ARDS",
          "Calcium, glucose, and hematocrit",
          "Signs of infection or pseudocyst",
        ],
      },
    ],
  },
  {
    id: "bowel-obstruction",
    title: "Bowel Obstruction",
    category: "Gastrointestinal",
    centralConcept: "Decompress bowel and prevent perforation.",
    clinicalPearl: "Sudden relief of pain with tachycardia may indicate perforation.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Crampy abdominal pain, distention, vomiting",
          "High-pitched or absent bowel sounds",
          "Air-fluid levels on imaging",
        ],
      },
      {
        title: "Management",
        details: [
          "NPO with NG tube to low suction",
          "IV fluids and electrolyte replacement",
          "Prep for surgery if strangulated",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Measure NG output and abdominal girth",
          "Watch for fever, leukocytosis",
          "Pain control without masking ischemia",
        ],
      },
    ],
  },
  {
    id: "ob-hemorrhage",
    title: "Obstetric Hemorrhage",
    category: "Maternal-Child",
    centralConcept: "Rapid uterotonic therapy and transfusion save life.",
    clinicalPearl: "Quantitative blood loss >1000 mL or hemodynamic instability meets criteria.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Uterine atony, retained placenta, lacerations",
          "Tachycardia, hypotension, pallor",
          "Drop in hematocrit and coagulopathy",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Uterine massage and oxytocin infusion",
          "Administer tranexamic acid within 3 hours",
          "Activate massive transfusion protocol",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Pad counts/weight for blood loss",
          "Assess for DIC (oozing, low fibrinogen)",
          "Emotional support and communication",
        ],
      },
    ],
  },
  {
    id: "preeclampsia",
    title: "Severe Preeclampsia/Eclampsia",
    category: "Maternal-Child",
    centralConcept: "Control BP and prevent seizures for maternal-fetal safety.",
    clinicalPearl: "Magnesium sulfate is seizure prophylaxis—monitor reflexes and respirations.",
    branches: [
      {
        title: "Assessment",
        details: [
          "BP ≥160/110, proteinuria, edema",
          "Headache, visual changes, RUQ pain",
          "Hyperreflexia progressing to clonus",
        ],
      },
      {
        title: "Management",
        details: [
          "Mag sulfate loading + maintenance",
          "Antihypertensives (labetalol, hydralazine)",
          "Plan for delivery once stabilized",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Deep tendon reflexes, urine output",
          "Serum magnesium (goal 4-7 mEq/L)",
          "Fetal heart tracing and kick counts",
        ],
      },
    ],
  },
  {
    id: "labor-induction",
    title: "Labor Induction Support",
    category: "Maternal-Child",
    centralConcept: "Facilitate cervical ripening and safe augmentation.",
    clinicalPearl: "Hyperstimulation (>5 contractions in 10 min) requires stopping oxytocin and intrauterine resuscitation.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Bishop score evaluates readiness",
          "Fetal wellbeing via NST",
          "Contraindications: previa, classical scar",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Cervical ripening agents (prostaglandins, Foley bulb)",
          "Oxytocin titration with infusion pump",
          "Amniotomy for augmentation if engaged",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Continuous EFM for decelerations",
          "Maternal vitals and contraction pattern",
          "Document pelvic exams and progress",
        ],
      },
    ],
  },
  {
    id: "neonatal-resus",
    title: "Neonatal Resuscitation",
    category: "Maternal-Child",
    centralConcept: "Warmth, airway, breathing, circulation sequence.",
    clinicalPearl: "Start PPV within 60 seconds if HR <100 or apnea.",
    branches: [
      {
        title: "Preparation",
        details: [
          "Warm radiant warmer, bag-mask, suction ready",
          "Anticipate risk factors (meconium, prematurity)",
          "Assign roles and review APGAR timing",
        ],
      },
      {
        title: "Initial Steps",
        details: [
          "Dry, stimulate, position sniffing",
          "Clear airway only if obstructed",
          "Assess HR with stethoscope or pulse ox",
        ],
      },
      {
        title: "Advanced",
        details: [
          "PPV with room air, escalate to chest compressions if HR <60",
          "Consider intubation and epinephrine",
          "Monitor glucose and thermoregulation",
        ],
      },
    ],
  },
  {
    id: "peds-dehydration",
    title: "Pediatric Dehydration",
    category: "Pediatric",
    centralConcept: "Restore volume based on severity and weight.",
    clinicalPearl: "Capillary refill >2 sec and sunken eyes signal moderate dehydration.",
    branches: [
      {
        title: "Assessment",
        details: [
          "History of vomiting/diarrhea",
          "Weight loss percentage guides severity",
          "Decreased tears, dry mucous membranes",
        ],
      },
      {
        title: "Management",
        details: [
          "Oral rehydration therapy for mild/moderate",
          "IV bolus 20 mL/kg isotonic for severe",
          "Correct electrolytes and resume diet early",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Strict I&O including diapers",
          "Assess for ongoing GI losses",
          "Educate caregivers on signs of worsening",
        ],
      },
    ],
  },
  {
    id: "peds-respiratory",
    title: "Pediatric Respiratory Distress",
    category: "Pediatric",
    centralConcept: "Early airway support prevents arrest.",
    clinicalPearl: "Use Broselow tape for weight-based dosing and equipment sizing.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Retractions, nasal flaring, grunting",
          "Stridor for upper vs wheeze for lower airway",
          "Pulse ox <94% indicates hypoxia",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Position of comfort and humidified oxygen",
          "Nebulized bronchodilators or racemic epi",
          "Consider high-flow nasal cannula",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Continuous pulse ox and apnea monitor",
          "Assess hydration and feeding tolerance",
          "Educate parents about warning signs",
        ],
      },
    ],
  },
  {
    id: "hyperbilirubinemia",
    title: "Neonatal Hyperbilirubinemia",
    category: "Pediatric",
    centralConcept: "Prevent kernicterus via phototherapy and feeding.",
    clinicalPearl: "Transcutaneous bilirubin >95th percentile needs serum confirmation.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Jaundice starting on face then caudal",
          "Risk factors: prematurity, ABO incompatibility",
          "Lethargy or poor feeding",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Initiate phototherapy with eye/skin protection",
          "Promote frequent breastfeeding/formula",
          "Consider IVIG or exchange transfusion if severe",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Serum bilirubin levels per nomogram",
          "Temperature and hydration status",
          "Parent teaching on jaundice progression",
        ],
      },
    ],
  },
  {
    id: "oncology-neutropenia",
    title: "Oncology Neutropenic Precautions",
    category: "Oncology",
    centralConcept: "Prevent infection when ANC <500.",
    clinicalPearl: "Even low-grade fever (38°C) is an emergency requiring cultures and antibiotics.",
    branches: [
      {
        title: "Assessment",
        details: [
          "CBC trending neutrophil count",
          "Mucositis, diarrhea, invasive lines",
          "Exposure history (visitors, food)",
        ],
      },
      {
        title: "Precautions",
        details: [
          "Strict hand hygiene and PPE",
          "No fresh flowers, raw fruits/veg",
          "HEPA room if available",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Daily temp logs and infection screen",
          "Administer G-CSF per order",
          "Educate on symptom reporting",
        ],
      },
    ],
  },
  {
    id: "chemo-extravasation",
    title: "Chemotherapy Extravasation",
    category: "Oncology",
    centralConcept: "Stop infusion and neutralize vesicant damage.",
    clinicalPearl: "Never remove access before aspirating drug residual.",
    branches: [
      {
        title: "Recognition",
        details: [
          "Burning, swelling, or blanching at site",
          "Lack of blood return in IV",
          "Vesicant agents high risk (anthracyclines)",
        ],
      },
      {
        title: "Immediate Actions",
        details: [
          "Stop infusion, aspirate via catheter",
          "Administer antidote (dexrazoxane, hyaluronidase)",
          "Mark area and notify oncology team",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Document photos and measurements",
          "Educate patient on delayed blistering",
          "Schedule wound care follow-up",
        ],
      },
    ],
  },
  {
    id: "transfusion-reaction",
    title: "Blood Transfusion Reaction",
    category: "Hematology",
    centralConcept: "Stop transfusion and treat reaction severity.",
    clinicalPearl: "First action is to disconnect blood and keep IV open with normal saline.",
    branches: [
      {
        title: "Recognition",
        details: [
          "Fever, chills, flank pain, hypotension",
          "Urticaria, dyspnea, wheezing",
          "Acute hemolytic labs: hemoglobinuria, elevated bilirubin",
        ],
      },
      {
        title: "Response",
        details: [
          "Stop transfusion, maintain IV access",
          "Notify provider/blood bank and return bag",
          "Treat symptoms (antihistamines, epinephrine)",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Vital signs q15min until stable",
          "Urine output for hemolysis",
          "Document transfusion reaction form",
        ],
      },
    ],
  },
  {
    id: "wound-staging",
    title: "Pressure Injury Staging",
    category: "Skin Integrity",
    centralConcept: "Accurate staging guides therapy and reimbursement.",
    clinicalPearl: "Stage never regresses even as wound heals.",
    branches: [
      {
        title: "Stages",
        details: [
          "Stage I: non-blanchable erythema",
          "Stage II: partial-thickness loss",
          "Stage III/IV: full-thickness with exposed structures",
        ],
      },
      {
        title: "Assessment",
        details: [
          "Measure length × width × depth",
          "Note undermining, tunneling, exudate",
          "Photograph per policy",
        ],
      },
      {
        title: "Management",
        details: [
          "Moist wound healing dressings",
          "Pressure redistribution surfaces",
          "Nutrition consult for protein support",
        ],
      },
    ],
  },
  {
    id: "pressure-injury-prevention",
    title: "Pressure Injury Prevention",
    category: "Skin Integrity",
    centralConcept: "Reduce pressure, shear, and moisture.",
    clinicalPearl: "Braden score ≤18 triggers preventive bundle.",
    branches: [
      {
        title: "Risk Identification",
        details: [
          "Assess Braden subscales daily",
          "Consider comorbidities (diabetes, malnutrition)",
          "Evaluate devices causing pressure",
        ],
      },
      {
        title: "Prevention Bundle",
        details: [
          "Turn/reposition q2h with wedges",
          "Use moisture barriers and manage incontinence",
          "Float heels and offload bony prominences",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Daily skin inspections with documentation",
          "Engage patient/family education",
          "Escalate early redness for wound consult",
        ],
      },
    ],
  },
  {
    id: "pain-ladder",
    title: "Pain Management Ladder",
    category: "Supportive Care",
    centralConcept: "Stepwise approach ensures adequate analgesia.",
    clinicalPearl: "Combine pharmacologic and nonpharmacologic modalities for synergy.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Use age-appropriate pain scales",
          "Assess function, goals, and fears",
          "Screen for opioid misuse risk",
        ],
      },
      {
        title: "Stepwise Therapy",
        details: [
          "Step 1: non-opioids ± adjuvants",
          "Step 2: weak opioids for moderate pain",
          "Step 3: strong opioids with titration",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Track sedation and respiratory status",
          "Bowel regimen to prevent constipation",
          "Reassess goals and adjust plan",
        ],
      },
    ],
  },
  {
    id: "delirium-prevention",
    title: "ICU Delirium Prevention",
    category: "Geriatrics",
    centralConcept: "ABCDE bundle preserves cognition.",
    clinicalPearl: "Sleep promotion and early mobility reduce ICU delirium rates.",
    branches: [
      {
        title: "Assessment",
        details: [
          "CAM-ICU or ICDSC each shift",
          "Identify risk factors (age, sepsis, sedation)",
          "Review medications causing delirium",
        ],
      },
      {
        title: "Bundle",
        details: [
          "Spontaneous awakening/breathing trials",
          "Choice of light sedation and pain control",
          "Delirium monitoring + Early mobility",
        ],
      },
      {
        title: "Family",
        details: [
          "Promote reorientation cues (clocks, calendars)",
          "Encourage family presence",
          "Provide hearing/vision aids",
        ],
      },
    ],
  },
  {
    id: "fall-prevention",
    title: "Fall Prevention Program",
    category: "Geriatrics",
    centralConcept: "Multifactorial approach reduces harm.",
    clinicalPearl: "High-risk bracelets + bed alarms prompt staff response.",
    branches: [
      {
        title: "Assessment",
        details: [
          "History of falls, gait, orthostatic vitals",
          "Med review for sedatives/antihypertensives",
          "Vision, footwear, assistive devices",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Bed in low position with non-skid socks",
          "Scheduled toileting and rounding",
          "Physical therapy and mobility aids",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Document fall risk score each shift",
          "Post-fall huddle for root cause",
          "Educate patient/family on call light use",
        ],
      },
    ],
  },
  {
    id: "infection-control",
    title: "Central Line-Associated Infection Prevention",
    category: "Infection Control",
    centralConcept: "Bundle practices keep CLABSI rates low.",
    clinicalPearl: "Daily necessity review prevents line days from accumulating.",
    branches: [
      {
        title: "Insertion",
        details: [
          "Maximal sterile barrier and chlorhexidine prep",
          "Choose optimal site (avoid femoral when possible)",
          "Document catheter type/date",
        ],
      },
      {
        title: "Maintenance",
        details: [
          "Scrub the hub 15 seconds before access",
          "Change dressings every 7 days or if soiled",
          "Use closed needleless systems",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Daily rounds confirm need for line",
          "Watch for erythema, drainage, fever",
          "Culture tip if infection suspected",
        ],
      },
    ],
  },
  {
    id: "burn-management",
    title: "Burn Initial Management",
    category: "Emergency",
    centralConcept: "Airway, breathing, circulation with fluid resuscitation.",
    clinicalPearl: "Parkland formula: 4 mL × kg × %TBSA, half in first 8 hours.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Check airway for inhalation injury (soot, hoarseness)",
          "Estimate TBSA using Rule of Nines",
          "Assess circumferential burns for compartment syndrome",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Secure airway early if inhalation injury suspected",
          "Large-bore IVs in unburned tissue",
          "Pain control and tetanus prophylaxis",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Urine output 0.5-1 mL/kg/hr",
          "Elevate limbs and assess pulses",
          "Prevent hypothermia with warm environment",
        ],
      },
    ],
  },
  {
    id: "trauma-primary",
    title: "Trauma Primary Survey",
    category: "Emergency",
    centralConcept: "ABCDE rapidly identifies life threats.",
    clinicalPearl: "Use spine precautions until injury ruled out.",
    branches: [
      {
        title: "A & B",
        details: [
          "Airway patency with cervical stabilization",
          "Breathing assessment: chest rise, breath sounds",
          "Needle decompression for tension pneumothorax",
        ],
      },
      {
        title: "C",
        details: [
          "Control hemorrhage with pressure/tourniquets",
          "Establish large-bore IVs and draw labs",
          "Assess pulses, cap refill, skin temperature",
        ],
      },
      {
        title: "D & E",
        details: [
          "Disability: GCS, pupils, glucose",
          "Expose fully while preventing hypothermia",
          "Initiate secondary survey once stable",
        ],
      },
    ],
  },
  {
    id: "postoperative-care",
    title: "Postoperative Early Recovery",
    category: "Perioperative",
    centralConcept: "Prevent complications through vigilant monitoring.",
    clinicalPearl: "Atelectasis prevention (IS, ambulation) starts the day of surgery.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Airway patency, respiratory rate, SpO2",
          "Pain level and sedation score",
          "Surgical site drainage and drains",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Early ambulation and incentive spirometry",
          "DVT prophylaxis (SCDs, heparin)",
          "Multimodal analgesia with bowel regimen",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Urine output and GI function",
          "Vital signs for bleeding or infection",
          "Educate on wound care and activity limits",
        ],
      },
    ],
  },
  {
    id: "end-of-life",
    title: "End-of-Life Communication",
    category: "Palliative",
    centralConcept: "Align care with patient values.",
    clinicalPearl: "Use Ask-Tell-Ask to explore understanding before sharing information.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Evaluate decision-maker and advance directives",
          "Assess symptoms: pain, dyspnea, anxiety",
          "Explore cultural or spiritual needs",
        ],
      },
      {
        title: "Conversations",
        details: [
          "Establish goals of care and code status",
          "Provide honest prognosis with empathy",
          "Offer hospice or comfort-focused options",
        ],
      },
      {
        title: "Support",
        details: [
          "Manage symptoms aggressively",
          "Coordinate interdisciplinary resources",
          "Document family meetings and decisions",
        ],
      },
    ],
  },
  {
    id: "mental-health-crisis",
    title: "Mental Health Crisis Stabilization",
    category: "Behavioral Health",
    centralConcept: "Ensure safety and de-escalation before treatment.",
    clinicalPearl: "Use trauma-informed language; offer choices to restore control.",
    branches: [
      {
        title: "Assessment",
        details: [
          "Suicide risk, homicidal ideation, hallucinations",
          "Substance use, medications, support system",
          "Vital signs for medical instability",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Create safe environment (remove ligature risks)",
          "Verbal de-escalation and calm tone",
          "Administer PRN medications if needed",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Q15 minute safety checks",
          "Collaborate on safety plan",
          "Coordinate transfer to inpatient psych if criteria met",
        ],
      },
    ],
  },
  {
    id: "withdrawal-management",
    title: "Alcohol Withdrawal Management",
    category: "Behavioral Health",
    centralConcept: "Prevent seizures and delirium tremens.",
    clinicalPearl: "Symptom-triggered benzodiazepine dosing based on CIWA is most effective.",
    branches: [
      {
        title: "Assessment",
        details: [
          "History of heavy use or previous withdrawals",
          "CIWA-Ar scoring q4h or more",
          "Electrolyte abnormalities (Mg, K)",
        ],
      },
      {
        title: "Interventions",
        details: [
          "Benzodiazepines per CIWA protocol",
          "Thiamine before glucose to prevent Wernicke",
          "Control triggers: quiet room, reorientation",
        ],
      },
      {
        title: "Monitoring",
        details: [
          "Seizure precautions and fall risk",
          "Autonomic instability (tachycardia, HTN)",
          "Educate on long-term treatment resources",
        ],
      },
    ],
  },
];

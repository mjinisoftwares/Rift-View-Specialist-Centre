export type Service = {
  slug: string
  title: string
  category: string
  icon: string
  excerpt: string
  description: string
  highlights: {
    title: string
    content: string
  }[]
  conditions: string[]
  images: { src: string; alt: string }[]
}

export const services: Service[] = [  
  {
    slug: 'outpatient-department',
    title: 'OutPatient Department (OPD)',
    category: 'Clinical',
    icon: 'Activity',
    excerpt: 'The heart of Rift View Specialist Centre — where your journey to better health begins with seamless, efficient, and personalized consultations.',
    description: "The OutPatient Department (OPD) is the heart of Rift View Specialist Centre — where your journey to better health begins. Our OPD is designed to offer seamless, efficient, and personalized care in a serene and welcoming environment. Whether you need a routine check-up, specialist consultation, or preventive health review, our dedicated team ensures every visit is convenient and reassuring. With online appointment booking, digital health records, and telemedicine services, we bring modern healthcare closer to you — making it easy to access the right care, at the right time.",
    highlights: [
      {
        title: 'Specialist & General Consultations',
        content: 'From general practitioners to leading specialists, we provide expert consultations tailored to your unique needs. Each session is thorough, respectful, and focused on your complete well-being.'
      },
      {
        title: 'Preventive Health Check-Ups',
        content: 'Prevention is the foundation of wellness. Our preventive packages include screenings and lifestyle guidance that help detect conditions early and keep you in optimal health.'
      },
      {
        title: 'Chronic Disease Management',
        content: 'For conditions such as diabetes, hypertension, and asthma, we offer structured care programs that emphasize consistency, monitoring, and long-term health.'
      },
      {
        title: 'Digital Health & Telemedicine',
        content: 'We integrate technology for your convenience — with digital medical records for continuity of care and teleconsultations that connect you with your doctor from anywhere.'
      }
    ],
    conditions: [
      'General Wellness',
      'Chronic Conditions',
      'Acute Illnesses',
      'Routine Checkups',
      'Lifestyle-Related Diseases'
    ],
    images: [
      { src: '/images/consultation-room.webp', alt: 'Consultation room at Rift View Specialist Centre' },
      { src: '/images/medicl-staff-treating-patient-in-community-o.webp', alt: 'Medical staff treating patients at Rift View outreach' },
      { src: '/images/waiting-bay.webp', alt: 'Waiting bay at Rift View Specialist Centre' },
    ]
  },
  {
    slug: 'radiology-department',
    title: 'Radiology Department',
    category: 'Diagnostics',
    icon: 'ScanLine',
    excerpt: 'Advanced medical imaging including X-Ray, MRI, CT scans, ultrasounds, and mammography for precise diagnosis.',
    description: "Our Radiology Department offers state-of-the-art medical imaging and diagnostic testing to help detect, diagnose, and monitor conditions. Equipped with advanced technology and staffed by expert radiologists, sonographers, and cardiologists, we ensure the highest standards of safety, accuracy, and patient comfort. From routine X-rays and ultrasounds to high-resolution MRI and CT scans, we provide the detailed internal views your doctor needs to create your treatment plan.",
    highlights: [
      {
        title: 'Advanced MRI & CT Scans',
        content: 'Our high-resolution MRI and CT imaging technologies provide detailed cross-sectional views of internal organs, brain, spine, and musculoskeletal structures, crucial for complex diagnoses.'
      },
      {
        title: 'X-Ray & Ultrasound Imaging',
        content: 'We offer routine digital X-rays and comprehensive ultrasound studies (including obstetric, abdominal, and vascular scans) performed in a safe, professional, and comfortable environment.'
      },
      {
        title: 'Mammography & Breast Screening',
        content: 'Early detection saves lives. Our dedicated mammography services provide high-quality breast imaging for screening and diagnostic evaluations, conducted with sensitivity and care.'
      },
      {
        title: 'Cardiac & Neurological testing (ECG/EEG)',
        content: 'We provide specialized physiological assessments, including Electrocardiograms (ECG) for heart health and Electroencephalograms (EEG) to monitor neurological activity, helping identify issues early.'
      }
    ],
    conditions: [
      'Internal Trauma',
      'Tumors and Lesions',
      'Bone Fractures & Dislocations',
      'Spinal & Joint Pain',
      'Cardiac Arrhythmias & Heart Issues',
      'Neurological Disorders'
    ],
    images: [
      { src: '/images/riftview-mri-equipment.webp', alt: 'MRI equipment at Rift View Specialist Centre' },
      { src: '/images/xray.webp', alt: 'X-ray imaging at Rift View Specialist Centre' }
    ]
  },
  {
    slug: 'laboratory-services',
    title: 'Laboratory Services',
    category: 'Diagnostics',
    icon: 'Microscope',
    excerpt: 'Comprehensive clinical laboratory testing and pathology services for accurate and timely medical diagnosis.',
    description: "Our Laboratory Services department offers a complete range of diagnostic testing and clinical pathology. Utilizing advanced, automated laboratory analyzers and adhering to strict international quality standards, our licensed laboratory scientists provide highly accurate, timely, and confidential results. From routine blood screenings to specialized microbiological and chemical pathology investigations, we deliver critical data for effective diagnosis and patient care.",
    highlights: [
      {
        title: 'Hematology & Blood Profiles',
        content: 'Routine and specialized blood tests, including Full Blood Count (FBC) and coagulation profiles, to detect anemia, infections, clotting disorders, and blood-borne conditions.'
      },
      {
        title: 'Clinical Biochemistry',
        content: 'Automated testing of blood and bodily fluids to check liver function, kidney function, blood sugar control, lipid levels, thyroid function, and cardiac markers.'
      },
      {
        title: 'Microbiology & Immunology',
        content: 'Culturing and identifying bacterial, fungal, or viral infections to guide targeted antibiotic and antimicrobial treatment, along with specialized antibody screenings.'
      },
      {
        title: 'Urinalysis & Pathology Diagnostics',
        content: 'Rapid analysis of urine, stool, and fluid samples for general health check-ups, metabolic screenings, digestive health evaluation, and infectious disease detection.'
      }
    ],
    conditions: [
      'Infections and Pathology',
      'Hormonal & Metabolic Imbalances',
      'Anemia & Blood Disorders',
      'Liver & Kidney Diseases',
      'Bacterial & Viral Infections'
    ],
    images: [
      { src: '/images/lab-rift-view-specialist-center.webp', alt: 'Lab equipment at Rift View Specialist Centre' },
      { src: '/images/lab-equipments-rift-view-specialist-center.webp', alt: 'Laboratory equipment at Rift View Specialist Centre' },
      { src: '/images/lab-equipments-rift-view-specialist-center-2.webp', alt: 'Laboratory equipment at Rift View Specialist Centre' },
      { src: '/images/lab-equipments-rift-view-specialist-center-3.webp', alt: 'Laboratory equipment at Rift View Specialist Centre' }
    ]
  },
  {
    slug: 'ophthalmology',
    title: 'Ophthalmology (Eye Care) Department',
    category: 'Specialist Clinics',
    icon: 'Eye',
    excerpt: 'Complete eye care ranging from routine vision tests and prescriptions to advanced microsurgeries.',
    description: "Your eyes are one of your most precious assets. At Rift View Specialist Centre, our Ophthalmology Department provides complete eye care, blending expertise with compassion. From simple vision checks to complex surgical procedures, our team ensures every patient receives world-class care in a reassuring environment.",
    highlights: [
      {
        title: 'Comprehensive Eye Examinations',
        content: 'We conduct thorough eye exams that go beyond vision testing, assessing overall eye health to detect issues early.'
      },
      {
        title: 'Refraction & Prescription Services',
        content: 'Accurate prescriptions tailored to your lifestyle ensure clear and comfortable vision, whether for glasses or contact lenses.'
      },
      {
        title: 'Eye Pressure & Glaucoma Screening',
        content: 'We provide detailed pressure checks and screening programs to detect glaucoma at an early stage, safeguarding your vision.'
      },
      {
        title: 'Fundoscopy & Retinal Evaluation',
        content: 'Our specialists use advanced equipment to examine the retina, detecting and managing conditions like diabetic retinopathy.'
      },
      {
        title: 'Eye Surgeries (Cataract, Glaucoma, Retinal, LASIK)',
        content: 'From cataract removal to laser vision correction, we provide surgical solutions with precision, safety, and excellent outcomes.'
      },
      {
        title: 'Pediatric & Geriatric Eye Care',
        content: 'Children and seniors require specialized attention — and our team provides age-appropriate care for lifelong eye health.'
      }
    ],
    conditions: [
      'Cataracts',
      'Glaucoma',
      'Myopia/Presbyopia',
      'Diabetic Retinopathy',
      'Dry Eye Syndrome',
      'Macular Degeneration'
    ],
    images: [
      { src: '/images/Eye-Glases-at-Rift-View-Specialist-Center.webp', alt: 'Eye examination at Rift View Specialist Centre' },
      { src: '/images/eye-glasses-rift-view-specialist-center.webp', alt: 'Eye glasses and eye care at Rift View Specialist Centre' },
      { src: '/images/eye-glasses-rift-view-specialist-center-1.webp', alt: 'Ophthalmology care at Rift View Specialist Centre' },

    ]
  },
  {
    slug: 'dental-unit',
    title: 'Dental Unit',
    category: 'Specialist Clinics',
    icon: 'Smile',
    excerpt: 'Restoring confidence, comfort, and radiant smiles through gentle, high-quality, and comprehensive dental care.',
    description: "At Rift View Specialist Centre, our Dental Unit is designed to deliver more than just treatment — it's about restoring confidence, comfort, and radiant smiles in an elegant and reassuring environment. Whether you're visiting for a routine check-up or a complex oral procedure, our team of highly trained dentists, specialists, and dental assistants ensures that every experience is gentle, personalized, and stress-free. We combine advanced technology with a compassionate approach, so patients leave not only healthier, but also with renewed confidence in their smile.",
    highlights: [
      {
        title: 'Preventive Care & Check-Ups',
        content: 'We believe prevention is the foundation of lifelong oral health. Regular dental check-ups allow us to detect and address issues early, provide professional cleanings, and give you the guidance needed to maintain a healthy smile at home.'
      },
      {
        title: 'Fillings, Crowns, and Bridges',
        content: 'For patients with tooth decay or damage, we offer aesthetic restorations that blend seamlessly with your natural teeth. Our crowns and bridges are custom designed for strength, durability, and elegance, restoring both function and appearance.'
      },
      {
        title: 'Root Canal Therapy',
        content: 'When tooth pain or infection threatens your natural teeth, our root canal treatments provide relief and protection. Performed with precision and care, this service preserves your tooth while eliminating discomfort.'
      },
      {
        title: 'Orthodontics (Braces & Aligners)',
        content: 'Straight, well-aligned teeth aren\'t just about beauty — they improve oral health too. We provide traditional braces and modern clear aligners to suit lifestyle preferences, ensuring results that are both functional and aesthetic.'
      },
      {
        title: 'Cosmetic Dentistry',
        content: 'Your smile is one of your most powerful assets. We offer safe teeth-whitening treatments and complete smile makeover plans, tailored to help you achieve a naturally beautiful, confident smile.'
      },
      {
        title: 'Oral & Maxillofacial Surgery',
        content: 'Our surgical team manages complex oral conditions, from wisdom tooth removal to corrective jaw surgery. Every procedure is carried out in a safe, sterile, and supportive environment, with patient comfort at the forefront.'
      },
      {
        title: 'Pediatric Dentistry',
        content: 'Children deserve special attention in oral care. Our pediatric dentists use gentle techniques to make dental visits fun and stress-free while building habits that ensure lifelong oral health.'
      }
    ],
    conditions: [
      'Tooth Decay & Cavities',
      'Gum Disease (Periodontitis)',
      'Tooth Pain & Infections',
      'Crooked & Crowded Teeth',
      'Impacted Wisdom Teeth',
      'Stained or Discolored Teeth'
    ],
    images: [
      { src: '/images/dental-staff-rift-view-specialist-center.webp', alt: 'Dental care at Rift View Specialist Centre' },
      { src: '/images/dental-staff-rift-view.webp', alt: 'Dental staff at Rift View Specialist Centre' },
      { src: '/images/dental-assistant-riftview-specialist-center.webp', alt: 'Dental assistant at Rift View Specialist Centre' },
      { src: '/images/male-dental-staff-rift-view-specialist-center.webp', alt: 'Male dental staff at Rift View Specialist Centre' },
      { src: '/images/female-dental-staff-rift-view-specialist-center.webp', alt: 'Female dental staff at Rift View Specialist Centre' },
      { src: '/images/dental-staff-rift-view-specialist-center.jpg', alt: 'Dental care at Rift View Specialist Centre' },
    ]
  },
  {
    slug: 'ent-audiology',
    title: 'ENT and Audiology Department',
    category: 'Specialist Clinics',
    icon: 'Ear',
    excerpt: 'Comprehensive care for ear, nose, throat, head and neck conditions, plus complete hearing and balance services.',
    description: "Our ENT and Audiology Department provides comprehensive care for conditions affecting the ears, nose, throat, and head and neck region. From simple infections to complex surgeries, patients receive specialized treatment in a comfortable, supportive environment. Our audiology services further enhance quality of life, offering solutions for hearing and balance disorders.",
    highlights: [
      {
        title: 'ENT Consultations & Treatments',
        content: 'Specialist evaluation and management of infections, allergies, breathing difficulties, and throat conditions.'
      },
      {
        title: 'Allergy Testing & Treatment',
        content: 'Personalized assessments and therapies for sinus, respiratory, and seasonal allergies, aimed at restoring comfort and wellness.'
      },
      {
        title: 'Tonsil & Adenoid Care',
        content: 'We provide surgical and non-surgical treatments for children and adults experiencing recurrent throat or breathing problems.'
      },
      {
        title: 'Head & Neck Surgery',
        content: 'For complex conditions such as tumors, growths, or trauma, we provide expert surgical interventions with precision and care.'
      },
      {
        title: 'Audiology & Hearing Care',
        content: 'We offer hearing tests, balance disorder assessments, and customized hearing aid fittings to restore sound and confidence.'
      }
    ],
    conditions: [
      'Otitis Media & Ear Infections',
      'Sinusitis & Nasal Polyps',
      'Tonsillitis & Adenoiditis',
      'Hearing Loss',
      'Vertigo & Balance Issues',
      'Vocal Cord Disorders'
    ],
    images: [
      { src: '/images/ENT-office-rift-view-specialist-center.webp', alt: 'ENT and Audiology care offices at Rift View Specialist Centre' },
         ]
  },
  {
    slug: 'orthopedics-physiotherapy',
    title: 'Orthopedics and Physiotherapy Department',
    category: 'Surgical Services',
    icon: 'Bone',
    excerpt: 'Musculoskeletal care delivering modern fracture care, joint replacement, spine surgery, and personalized rehabilitation.',
    description: "Our Orthopedics and Physiotherapy Department is dedicated to helping patients regain movement, reduce pain, and restore independence. With state-of-the-art surgical techniques and personalized rehabilitation programs, we provide holistic musculoskeletal care.",
    highlights: [
      {
        title: 'Fracture Care & Trauma Surgery',
        content: 'From emergency fracture repair to complex trauma cases, our surgeons provide swift, effective solutions.'
      },
      {
        title: 'Joint Replacement Surgery',
        content: 'Specialized hip, knee, and shoulder replacements restore mobility and significantly improve quality of life.'
      },
      {
        title: 'Sports Injury Management',
        content: 'We provide comprehensive treatment and rehabilitation for athletes and active individuals.'
      },
      {
        title: 'Spine Care',
        content: 'Expert diagnosis and treatment of spinal conditions, from back pain to complex spinal surgeries.'
      },
      {
        title: 'Physiotherapy & Rehabilitation',
        content: 'Personalized therapy plans, including manual techniques, exercises, and pain management, designed to support long-term recovery.'
      }
    ],
    conditions: [
      'Bone Fractures & Dislocations',
      'Osteoarthritis & Rheumatoid Arthritis',
      'Ligament and Tendon Tears',
      'Chronic Back and Neck Pain',
      'Scoliosis & Spinal Stenosis',
      'Post-Surgical Stiffness'
    ],
    images: [
      { src: '/images/paeditrician-office-rift-view-specialist-center.webp', alt: 'Orthopaedics and physiotherapy at Rift View Specialist Centre' },
    ]
  },
  {
    slug: 'obstetrics-gynecology-family-planning',
    title: 'Obstetrics, Gynecology & Family Planning Department',
    category: 'Women & Children',
    icon: 'HeartPulse',
    excerpt: 'Dedicated to women\'s health at every milestone, offering prenatal, maternity, postnatal, and family planning care.',
    description: "As a facility, we understand that women's health is unique and ever-changing — requiring care that is not only clinical but also deeply personal. Our Obstetrics and Gynecology Department is dedicated to walking with women through every stage of life, from adolescence to motherhood, menopause, and beyond. Here, patients are welcomed into a private, elegant, and supportive environment where dignity, comfort, and trust come first. Every consultation is designed to be respectful and reassuring, every treatment plan personalized, and every procedure carried out with precision and compassion.",
    highlights: [
      {
        title: 'Prenatal & Antenatal Care',
        content: 'We believe pregnancy should be a joyful and well-supported journey. Our antenatal programs include regular check-ups, ultrasounds, nutrition counseling, and monitoring of both mother and baby — ensuring safe, confident progress through every trimester.'
      },
      {
        title: 'Labor & Delivery',
        content: 'Our modern labor and delivery suites are designed with both medical excellence and motherly comfort in mind. Skilled obstetricians and midwives ensure a safe delivery, while compassionate support creates a calming, memorable experience for families welcoming new life.'
      },
      {
        title: 'Postnatal Care',
        content: 'The journey doesn\'t end at birth. We support mothers as they recover physically and emotionally after delivery, offering wound care, breastfeeding support, emotional wellness checks, and guidance on newborn care in a warm and family-friendly setting.'
      }
    ],
    conditions: [
      'Pregnancy & High-Risk Obstetrics',
      'Uterine Fibroids & Ovarian Cysts',
      'Endometriosis',
      'Infertility & Reproductive Concerns',
      'Menopausal & Hormonal Shifts',
      'Cervical Dysplasia'
    ],
    images: [
      { src: '/images/obstetrics-gynecology-family-planning-offices-rift-view.webp', alt: 'Obstetrics and gynaecology offices at Rift View Specialist Centre' },
        ]
  },
  {
    slug: 'pediatrics-immunizations',
    title: 'Pediatrics & Immunizations',
    category: 'Women & Children',
    icon: 'Baby',
    excerpt: 'Compassionate, child-friendly care for babies, children, and adolescents, including developmental screening and vaccines.',
    description: "At our facility, we believe children deserve healthcare that is as gentle as it is skilled and experienced. Our Pediatrics Department is dedicated to nurturing the health of infants, children, and adolescents in an environment designed to make them feel safe, cared for, and understood. Parents can trust that their little ones are in the hands of specialists who combine clinical expertise with patience, empathy, and a child-friendly approach. From routine check-ups and immunizations to treatment of complex conditions, we walk alongside families every step of the way — ensuring every child grows in health, confidence, and happiness.",
    highlights: [
      {
        title: 'Well-Baby & Newborn Clinics',
        content: 'Our specialized clinics focus on early development, offering physical exams, growth monitoring, feeding guidance, and parental counseling to ensure newborns thrive from the very beginning.'
      },
      {
        title: 'Growth & Development Monitoring',
        content: 'We provide regular assessments to track a child\'s physical, emotional, and cognitive development — catching any concerns early and guiding families with supportive care plans.'
      },
      {
        title: 'Immunizations & Vaccinations',
        content: 'Protecting children against preventable diseases is central to our mission. We offer the full schedule of childhood vaccinations in a calm, supportive environment where parents and children feel at ease.'
      },
      {
        title: 'Pediatric Emergency Care',
        content: 'From sudden fevers to acute injuries, our pediatric specialists respond quickly, providing immediate, compassionate care that reassures both children and parents.'
      },
      {
        title: 'Chronic Disease Management',
        content: 'For children with asthma, diabetes, or congenital disorders, we provide structured long-term care with personalized treatment plans and regular monitoring.'
      },
      {
        title: 'Pediatric Nutrition Counseling',
        content: 'Good nutrition fuels healthy growth. We provide guidance on balanced diets, feeding practices, and nutritional solutions tailored to each child\'s needs.'
      }
    ],
    conditions: [
      'Neonatal Conditions',
      'Childhood Infectious Diseases',
      'Pediatric Asthma & Allergies',
      'Nutritional Deficiencies',
      'Growth Delays',
      'Pediatric Trauma & Injuries'
    ],
    images: [
      { src: '/images/pediatrician-rift-view-specialist-center.webp', alt: 'Paediatrics and child care at Rift View Specialist Centre' },
    ]
  },
  {
    slug: 'family-medicine-travel-vaccines',
    title: 'Family Medicine & Travel Vaccines',
    category: 'Clinical',
    icon: 'Plane',
    excerpt: 'Comprehensive medical care for all ages with specialized travel health, vaccination, and preventative services.',
    description: "Health is a journey — and our Family Medicine Department is here to guide you and your loved ones every step of the way. Providing continuous, comprehensive care for all ages, this department emphasizes prevention, wellness, and holistic treatment in an environment where patients feel respected, supported, and known personally. Whether managing chronic illnesses, scheduling regular check-ups, or preparing for international travel, our family medicine specialists ensure you receive consistent, compassionate care that puts your well-being first.",
    highlights: [
      {
        title: 'General Family Care',
        content: 'We offer broad-spectrum medical care for individuals and families — addressing everyday health concerns with efficiency and warmth, while building long-term patient-doctor relationships.'
      },
      {
        title: 'Chronic Condition Management',
        content: 'Conditions such as diabetes, hypertension, and asthma require consistent follow-up. We provide structured programs with ongoing monitoring, medication management, and lifestyle support to promote stability and long-term health.'
      },
      {
        title: 'Preventive Wellness Programs',
        content: 'Our preventive care packages include screenings, lifestyle assessments, and wellness coaching — helping families maintain optimal health and detect issues before they become serious.'
      },
      {
        title: 'Pre-Travel Health Consultations',
        content: 'Before your journey, our specialists assess your destination-specific health risks and prepare you with the necessary precautions for safe and confident travel.'
      },
      {
        title: 'Travel Vaccinations',
        content: 'We provide the full range of required and recommended travel vaccines — including yellow fever, hepatitis, and typhoid — administered by trained professionals in a safe and comfortable setting.'
      },
      {
        title: 'Preventive Medications & Advice',
        content: 'Our team offers additional preventive measures such as malaria prophylaxis and high-altitude care, ensuring you\'re fully prepared wherever your travels may take you.'
      }
    ],
    conditions: [
      'Hypertension & Diabetes',
      'Common Respiratory Infections',
      'Sinusitis & Seasonal Allergies',
      'Yellow Fever & Travel Risks',
      'Malaria Exposure',
      'Gastrointestinal Infections'
    ],
    images: [
      { src: '/images/examination-room-with-medical-equipments.webp', alt: 'Family medicine at Rift View Specialist Centre' },
    ]
  },
  {
    slug: 'oncology',
    title: 'Oncology Department',
    category: 'Specialty Care',
    icon: 'Activity',
    excerpt: 'Advanced chemotherapy, immunotherapy, and holistic supportive counseling for cancer patients.',
    description: "Cancer care requires not only advanced medicine but also compassion, strength, and trust. At Rift View Specialist Centre, our Oncology Department is built to provide hope and healing through cutting edge chemotherapy and immunotherapy treatments. Patients are welcomed into a supportive environment where every aspect of care is personalized, and where dignity and quality of life are always prioritized. Our multidisciplinary team of oncologists, specialized nurses, and pharmacists ensures that every treatment plan is precise, effective, and compassionate — helping patients and families navigate this journey with strength and reassurance.",
    highlights: [
      {
        title: 'Chemotherapy',
        content: 'Administered with precision and constant monitoring, our chemotherapy treatments target and destroy cancer cells while minimizing discomfort. We focus on patient safety, comfort, and emotional support at every session.'
      },
      {
        title: 'Immunotherapy',
        content: 'Harnessing the power of the body\'s own immune system, our immunotherapy treatments provide innovative and often less invasive options for cancer management, with promising outcomes and reduced side effects.'
      },
      {
        title: 'Combined Therapies',
        content: 'Our oncologists design treatment plans that integrate chemotherapy, immunotherapy, and supportive therapies — tailored to the unique needs of each patient.'
      },
      {
        title: 'Supportive Care & Counseling',
        content: 'We go beyond medical treatment, providing nutritional support, pain management, counseling, and family-centered care to support patients holistically throughout their journey.'
      }
    ],
    conditions: [
      'Breast Cancer',
      'Prostate Cancer',
      'Cervical Cancer',
      'Colorectal Cancer',
      'Lung Cancer',
      'Cancer-Related Pain & Side Effects'
    ],
    images: [
      { src: '/images/examination-room-with-medical-equipments.webp', alt: 'Oncology and radiology care offices at Rift View Specialist Centre' },
      { src: '/images/cancer-care-offices-rift-view-specialist-center.webp', alt: 'Oncology cancer care offices at Rift View Specialist Centre' },
        ]
  },
  {
    slug: 'pharmacy',
    title: 'Pharmacy Department',
    category: 'Support Services',
    icon: 'Pill',
    excerpt: 'Inpatient and outpatient dispensing, expert medication counseling, and strict safety monitoring.',
    description: "Our Pharmacy is a cornerstone of patient care at Rift View Specialist Centre — ensuring timely access to safe, effective medications while offering expert guidance on their use. More than just a medication dispensing unit, it is a trusted resource where patients receive professional advice, reassurance, and continuity of care as part of their treatment journey.",
    highlights: [
      {
        title: 'Inpatient & Outpatient Dispensing',
        content: 'We ensure all patients — whether admitted or visiting the OPD — have convenient, reliable access to prescribed medicines without delay.'
      },
      {
        title: 'Comprehensive Range of Medications',
        content: 'From essential prescriptions to specialized drugs, our pharmacy maintains a wide inventory that supports the diverse needs of our patients.'
      },
      {
        title: 'Pharmacist Counseling',
        content: 'Our experienced pharmacists provide one-on-one consultations, helping patients understand dosages, potential side effects, and safe use of their medications.'
      },
      {
        title: 'Medication Safety & Monitoring',
        content: 'We prioritize safety by carefully checking prescriptions for interactions, tracking patient history, and ensuring all medications meet the highest quality standards.'
      }
    ],
    conditions: [
      'Medication Mismanagement',
      'Drug-Drug Interactions',
      'Chronic Medication Refills',
      'Adverse Side Effects',
      'Dosage Adjustments'
    ],
    images: [
      { src: '/images/pharmacy-rift-view-specialist-center.webp', alt: 'Pharmacy at Rift View Specialist Centre' },
    ]
  },
  {
    slug: 'mental-health-awareness',
    title: 'Mental Health Awareness (Psychology and Psychiatry Clinic)',
    category: 'Specialist Clinics',
    icon: 'Brain',
    excerpt: 'Providing compassionate, professional psychological and psychiatric care to support your mental and emotional well-being.',
    description: "At Rift View Specialist Centre, we believe that mental health is a fundamental pillar of overall wellness. Our Mental Health Awareness clinic (integrating Psychology and Psychiatry services) offers a safe, confidential, and supportive space for individuals, couples, and families. Our clinical psychologists and psychiatrists collaborate to deliver comprehensive diagnostic assessments, counseling, psychotherapy, and psychiatric medical management. We are dedicated to reducing stigma and providing compassionate care tailored to your unique journey.",
    highlights: [
      {
        title: 'Psychological Assessment & Therapy',
        content: 'Detailed diagnostic interviews and evidence-based psychotherapy (such as Cognitive Behavioral Therapy) for anxiety, depression, and trauma.'
      },
      {
        title: 'Psychiatric Consultations',
        content: 'Medical evaluation and management of mental health conditions by qualified psychiatrists, ensuring safe and effective treatment plans.'
      },
      {
        title: 'Stress & Stigma Management',
        content: 'Dedicated support and educational programs focused on stress reduction, coping strategies, and breaking the stigma around mental illness.'
      },
      {
        title: 'Child & Adolescent Therapy',
        content: 'Age-appropriate counseling to support children and teenagers experiencing developmental, behavioral, or emotional challenges.'
      }
    ],
    conditions: [
      'Depression & Mood Disorders',
      'Anxiety & Panic Attacks',
      'Post-Traumatic Stress (PTSD)',
      'Stress & Burnout',
      'Schizophrenia & Psychotic Disorders',
      'Behavioral & Developmental Challenges'
    ],
    images: [
      { src: '/images/consultation-room.webp', alt: 'Confidential consultation room for mental health therapy at Rift View' },
      { src: '/images/waiting-bay.webp', alt: 'A calm and welcoming waiting bay at Rift View Specialist Centre' }
    ]
  },
  {
    slug: 'urology',
    title: 'Urology',
    category: 'Specialist Clinics',
    icon: 'Droplet',
    excerpt: 'Specialist care for urinary tract conditions and male reproductive health, offering modern diagnostics and surgical interventions.',
    description: "Our Urology department provides comprehensive medical and surgical care for diseases of the urinary tract in both men and women, as well as the male reproductive system. Led by experienced urologists and supported by state-of-the-art diagnostic imaging and laboratory services, we offer personalized treatment plans for conditions ranging from kidney stones and urinary tract infections to prostate health and uro-oncology. We focus on minimally invasive procedures and modern interventions to ensure swift recovery and optimal patient outcomes.",
    highlights: [
      {
        title: 'Kidney Stone Management',
        content: 'Advanced diagnostics and treatment options, including minimally invasive techniques to retrieve or dissolve stones with minimal discomfort.'
      },
      {
        title: 'Prostate Care & Screenings',
        content: 'Comprehensive screenings for prostate enlargement (BPH) and prostate cancer, utilizing PSA testing, ultrasounds, and specialist care.'
      },
      {
        title: 'Urinary Tract Infections (UTIs)',
        content: 'Thorough diagnosis and targeted treatment of acute, recurrent, and chronic UTIs in both men and women.'
      },
      {
        title: 'Uro-Oncology Services',
        content: 'Specialized diagnosis and multidisciplinary care plans for bladder, kidney, and prostate cancers.'
      }
    ],
    conditions: [
      'Kidney Stones (Urolithiasis)',
      'Benign Prostatic Hyperplasia (BPH)',
      'Urinary Tract Infections (UTIs)',
      'Urinary Incontinence',
      'Prostate Cancer',
      'Male Infertility & Erectile Dysfunction'
    ],
    images: [
      { src: '/images/examination-room-with-medical-equipments.webp', alt: 'Urology diagnostic examination room at Rift View' },
      { src: '/images/lab-equipments-rift-view-specialist-center.webp', alt: 'Advanced laboratory testing for urology diagnostics' }
    ]
  },
  {
    slug: 'neurosurgery-dermatology',
    title: 'Neurosurgical Clinic and Dermatology Departments and Services',
    category: 'Specialist Clinics',
    icon: 'Stethoscope',
    excerpt: 'Expert surgical care for brain and spine disorders, combined with comprehensive dermatological treatments for skin, hair, and nail health.',
    description: "This unique combined department brings together two critical areas of specialized medicine: Neurosurgical care and Dermatology services. Our Neurosurgical clinic focuses on the diagnosis and surgical treatment of disorders affecting the brain, spinal cord, and peripheral nerves, utilizing advanced imaging and neuro-navigation support. Concurrently, our Dermatology services offer comprehensive care for clinical and aesthetic conditions of the skin, hair, and nails, providing expert treatments for everything from acne and eczema to complex dermatological procedures. Patients benefit from the expertise of leading specialists working in state-of-the-art facilities.",
    highlights: [
      {
        title: 'Spine & Brain Neurosurgery',
        content: 'Consultation and surgical treatment for spinal disc herniation, spinal stenosis, head trauma, and brain tumors.'
      },
      {
        title: 'Peripheral Nerve Care',
        content: 'Diagnostic evaluation and treatment for nerve compression syndromes, such as carpal tunnel syndrome.'
      },
      {
        title: 'Clinical Dermatology',
        content: 'Expert diagnosis and therapy for chronic skin conditions, including eczema, psoriasis, acne, and skin infections.'
      },
      {
        title: 'Procedural & Aesthetic Dermatology',
        content: 'Minor surgeries, skin biopsies, mole removal, and advanced therapies for skin rejuvenation and scar management.'
      }
    ],
    conditions: [
      'Herniated Discs & Back Pain',
      'Brain & Spine Tumors',
      'Eczema, Psoriasis & Acne',
      'Skin Infections & Allergies',
      'Nerve Compression (Carpal Tunnel)',
      'Hair Loss & Nail Disorders'
    ],
    images: [
      { src: '/images/xray.webp', alt: 'Neuroimaging interpretation and diagnostic facilities at Rift View' },
      { src: '/images/examination-room-with-medical-equipments.webp', alt: 'Specialist consultation room for dermatology and neurosurgery' }
    ]
  }
]
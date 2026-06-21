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
  image: string
}

export const services: Service[] = [
  {
    slug: 'family-medicine',
    title: 'Family Medicine',
    category: 'Medical',
    icon: 'Users',
    excerpt:
      'Comprehensive healthcare services for individuals and families at every stage of life.',

    description:
      'The Family Medicine Department at RiftView Specialist Center serves as the first point of contact for patients seeking high-quality healthcare. Our experienced physicians provide preventive care, diagnosis and treatment of acute illnesses, chronic disease management, health education, and wellness consultations. We focus on building long-term relationships with our patients, helping individuals and families maintain optimal health through personalized treatment plans, routine screenings, and proactive disease prevention strategies.',

    highlights: [
      {
        title: 'Preventive Health Screenings',
        content:
          'Our preventive health screening programs are designed to detect medical conditions before symptoms become severe. Through comprehensive evaluations, laboratory testing, blood pressure monitoring, diabetes screening, cholesterol assessments, and cancer risk evaluations, we help patients identify potential health concerns early. Early detection significantly improves treatment outcomes and allows patients to take proactive steps toward maintaining long-term health and wellness.',
      },
      {
        title: 'Routine Medical Check-Ups',
        content:
          'Regular medical examinations play a critical role in maintaining overall health. Our physicians conduct detailed health assessments, review medical history, evaluate lifestyle factors, and provide recommendations tailored to each patient. These routine visits help monitor health trends, identify emerging concerns, and ensure patients remain on track toward achieving their personal health goals.',
      },
      {
        title: 'Chronic Disease Management',
        content:
          'We provide comprehensive care for patients living with chronic illnesses such as hypertension, diabetes, asthma, heart disease, and other long-term conditions. Our team develops individualized treatment plans that combine medication management, lifestyle counseling, regular monitoring, and patient education. This integrated approach helps patients achieve better disease control and improve their quality of life.',
      },
      {
        title: 'Health Education & Lifestyle Counselling',
        content:
          'Patient education is a cornerstone of quality healthcare. Our healthcare providers offer guidance on nutrition, physical activity, weight management, smoking cessation, stress reduction, and disease prevention. By empowering patients with accurate information and practical strategies, we help individuals make informed decisions that support healthier lifestyles and long-term wellbeing.',
      },
    ],

    conditions: [
      'Hypertension',
      'Diabetes',
      'Asthma',
      'Heart Disease',
      'Common Infections',
      'High Cholesterol',
    ],

    image: '/images/services/family-medicine.webp',
  },

  {
    slug: 'paediatrics',
    title: 'Paediatrics',
    category: 'Women & Children',
    icon: 'Baby',

    excerpt:
      'Specialized healthcare services focused on the growth, development, and wellbeing of children.',

    description:
      'Our Paediatrics Department provides compassionate and comprehensive healthcare for newborns, infants, children, and adolescents. We are dedicated to supporting healthy growth and development while offering expert diagnosis, treatment, and prevention of childhood illnesses. Our child-friendly environment ensures that young patients receive high-quality medical care in a safe, supportive, and comfortable setting.',

    highlights: [
      {
        title: 'Child Immunization Programs',
        content:
          'Vaccination remains one of the most effective ways to protect children from serious infectious diseases. Our immunization services follow national and international guidelines to ensure children receive recommended vaccines on schedule. We educate parents about vaccine safety and importance while helping protect communities through disease prevention.',
      },
      {
        title: 'Growth & Development Monitoring',
        content:
          'We carefully monitor physical growth, developmental milestones, nutritional status, and behavioral progress throughout childhood. Regular assessments help identify developmental delays or health concerns early, allowing for timely intervention and support when needed.',
      },
      {
        title: 'Diagnosis & Treatment of Childhood Illnesses',
        content:
          'Our pediatric specialists provide expert care for a wide range of childhood illnesses including respiratory infections, allergies, asthma, digestive disorders, skin conditions, and infectious diseases. We focus on accurate diagnosis, effective treatment, and family-centered care.',
      },
      {
        title: 'Parent Education & Support',
        content:
          'Parents play a vital role in a child’s health and development. Our team provides practical guidance on nutrition, growth, behavior management, disease prevention, and overall child wellness, empowering families to make informed healthcare decisions.',
      },
    ],

    conditions: [
      'Childhood Infections',
      'Asthma',
      'Allergies',
      'Nutritional Disorders',
      'Developmental Delays',
      'Respiratory Conditions',
    ],

    image: '/images/services/paediatrics.webp',
  },

  {
    slug: 'obstetrics-gynaecology',
    title: 'Obstetrics & Gynaecology',
    category: 'Women & Children',
    icon: 'HeartPulse',

    excerpt:
      'Comprehensive women’s healthcare services covering reproductive, maternal, and gynecological health.',

    description:
      'Our Obstetrics and Gynaecology Department provides specialized healthcare services for women at every stage of life. From adolescence and reproductive health to pregnancy, childbirth, and menopause, our experienced specialists deliver compassionate and personalized care. We are committed to supporting women’s health through preventive screenings, family planning services, maternity care, and advanced gynecological treatment.',

    highlights: [
      {
        title: 'Antenatal & Prenatal Care',
        content:
          'Our antenatal services ensure both mother and baby receive comprehensive care throughout pregnancy. Regular check-ups, ultrasound monitoring, nutritional guidance, and risk assessments help promote healthy pregnancies and positive birth outcomes.',
      },
      {
        title: 'Family Planning Services',
        content:
          'We offer confidential counseling and a wide range of family planning options to help individuals and couples make informed reproductive health decisions that align with their personal goals and circumstances.',
      },
      {
        title: 'Women’s Health Screenings',
        content:
          'Routine screenings play a critical role in early detection and prevention of gynecological conditions. We provide cervical cancer screening, breast health evaluations, reproductive health assessments, and preventive care services.',
      },
      {
        title: 'Postnatal Care & Recovery',
        content:
          'Following childbirth, our specialists provide comprehensive support to help mothers recover safely, monitor newborn health, and address physical, emotional, and nutritional needs during the postpartum period.',
      },
    ],

    conditions: [
      'Pregnancy Care',
      'Fibroids',
      'Menstrual Disorders',
      'Infertility',
      'Menopause Management',
      'Cervical Health Concerns',
    ],

    image: '/images/services/obgyn.webp',
  },
 
  {
  slug: 'general-surgery',
  title: 'General Surgery',
  category: 'Surgical',
  icon: 'Scissors',

  excerpt:
    'Advanced surgical care delivered by experienced surgeons using modern techniques and evidence-based practices.',

  description:
    'The General Surgery Department at RiftView Specialist Center provides comprehensive surgical care for a wide range of conditions affecting the digestive system, soft tissues, abdominal organs, and other body systems. Our highly skilled surgeons utilize modern surgical techniques, including minimally invasive procedures, to ensure safe operations, reduced recovery times, and optimal patient outcomes. From elective surgeries to emergency interventions, we deliver personalized surgical care supported by advanced diagnostics and post-operative rehabilitation services.',

  highlights: [
    {
      title: 'Minimally Invasive Surgery',
      content:
        'Our surgeons perform laparoscopic and minimally invasive procedures that reduce surgical trauma, minimize scarring, shorten hospital stays, and accelerate recovery while maintaining excellent clinical outcomes.',
    },
    {
      title: 'Emergency & Trauma Surgery',
      content:
        'We provide prompt surgical intervention for trauma cases, accidents, and life-threatening emergencies, ensuring patients receive immediate care when every second matters.',
    },
    {
      title: 'Gastrointestinal Surgery',
      content:
        'Specialized surgical treatment for conditions affecting the digestive tract, including hernias, gallbladder disease, appendicitis, colorectal disorders, and gastrointestinal tumors.',
    },
    {
      title: 'Endoscopy & Colonoscopy Services',
      content:
        'Advanced diagnostic and therapeutic procedures that help identify and treat digestive system conditions while supporting early disease detection and prevention.',
    },
  ],

  conditions: [
    'Appendicitis',
    'Hernias',
    'Gallbladder Disease',
    'Colorectal Disorders',
    'Traumatic Injuries',
    'Gastrointestinal Conditions',
  ],

  image: '/images/services/general-surgery.webp',
},

{
  slug: 'orthopaedic-surgery',
  title: 'Orthopaedic Surgery',
  category: 'Surgical',
  icon: 'Bone',

  excerpt:
    'Specialized diagnosis, treatment, and rehabilitation for bone, joint, muscle, and spine conditions.',

  description:
    'Our Orthopaedic Surgery Department offers comprehensive care for injuries and disorders affecting the musculoskeletal system. Whether treating fractures, sports injuries, arthritis, spinal conditions, or mobility challenges, our specialists focus on restoring function, reducing pain, and improving quality of life through advanced treatment and rehabilitation programs.',

  highlights: [
    {
      title: 'Fracture & Trauma Care',
      content:
        'Expert assessment, treatment, and rehabilitation of fractures and musculoskeletal injuries using modern surgical and non-surgical approaches.',
    },
    {
      title: 'Joint Preservation & Reconstruction',
      content:
        'Advanced management of arthritis and joint disorders designed to improve mobility, reduce pain, and enhance daily function.',
    },
    {
      title: 'Spine Care Services',
      content:
        'Comprehensive evaluation and treatment of spinal conditions including back pain, degenerative disorders, disc disease, and spinal injuries.',
    },
    {
      title: 'Sports Medicine & Rehabilitation',
      content:
        'Personalized treatment and recovery programs for athletes and active individuals recovering from sports-related injuries.',
    },
  ],

  conditions: [
    'Fractures',
    'Arthritis',
    'Back Pain',
    'Sports Injuries',
    'Joint Disorders',
    'Spinal Conditions',
  ],

  image: '/images/services/orthopaedics.webp',
},

{
  slug: 'cancer-care',
  title: 'Cancer Care',
  category: 'Specialty Care',
  icon: 'ShieldPlus',

  excerpt:
    'Comprehensive cancer screening, diagnosis, treatment planning, and supportive patient care.',

  description:
    'RiftView Specialist Center provides patient-centered cancer care focused on prevention, early detection, diagnosis, treatment coordination, and long-term support. Our multidisciplinary approach ensures patients receive personalized care plans tailored to their unique medical needs while maintaining dignity, comfort, and quality of life throughout their treatment journey.',

  highlights: [
    {
      title: 'Cancer Screening & Early Detection',
      content:
        'Comprehensive screening programs designed to identify cancer at its earliest and most treatable stages, improving survival rates and treatment outcomes.',
    },
    {
      title: 'Cancer Risk Assessment',
      content:
        'Evaluation of genetic, lifestyle, occupational, and environmental risk factors that may contribute to cancer development.',
    },
    {
      title: 'Personalized Treatment Planning',
      content:
        'Collaborative care involving multiple specialists who develop customized treatment strategies based on each patient’s diagnosis and goals.',
    },
    {
      title: 'Patient Support & Survivorship Care',
      content:
        'Emotional support, nutritional guidance, symptom management, counseling, and long-term follow-up services for cancer patients and survivors.',
    },
  ],

  conditions: [
    'Breast Cancer',
    'Prostate Cancer',
    'Colorectal Cancer',
    'Lung Cancer',
    'Cervical Cancer',
    'Cancer Risk Assessment',
  ],

  image: '/images/services/cancer-care.webp',
},

{
  slug: 'endocrinology-diabetes',
  title: 'Endocrinology & Diabetes Management',
  category: 'Specialty Care',
  icon: 'Activity',

  excerpt:
    'Expert care for diabetes, hormonal disorders, metabolic conditions, and endocrine diseases.',

  description:
    'Our Endocrinology & Diabetes Clinic specializes in diagnosing and managing disorders affecting hormones, metabolism, and blood sugar regulation. We provide personalized care plans, education, nutritional guidance, and ongoing support to help patients achieve better long-term health outcomes.',

  highlights: [
    {
      title: 'Comprehensive Diabetes Management',
      content:
        'Individualized diabetes care programs focused on blood sugar control, complication prevention, medication management, and lifestyle modification.',
    },
    {
      title: 'Hormonal Health Assessment',
      content:
        'Advanced evaluation and treatment of endocrine disorders affecting thyroid function, metabolism, growth, and reproductive health.',
    },
    {
      title: 'Nutrition & Lifestyle Counseling',
      content:
        'Evidence-based dietary and lifestyle interventions designed to improve metabolic health and overall wellbeing.',
    },
    {
      title: 'Long-Term Monitoring & Support',
      content:
        'Regular follow-up appointments and health monitoring to ensure treatment effectiveness and sustained disease control.',
    },
  ],

  conditions: [
    'Type 1 Diabetes',
    'Type 2 Diabetes',
    'Obesity',
    'Thyroid Disorders',
    'Hormonal Imbalances',
    'Metabolic Disorders',
  ],

  image: '/images/services/endocrinology.webp',
},

{
  slug: 'travel-vaccination-clinic',
  title: 'Travel Vaccination Clinic',
  category: 'Preventive Care',
  icon: 'Plane',

  excerpt:
    'Travel health consultations, vaccinations, and preventive care for safe international travel.',

  description:
    'Our Travel Vaccination Clinic helps individuals, families, students, and corporate travelers prepare for international travel through vaccinations, travel health consultations, preventive medications, and destination-specific health advice. We ensure travelers meet international health requirements while reducing the risk of travel-related illnesses.',

  highlights: [
    {
      title: 'Yellow Fever Vaccination',
      content:
        'WHO-approved yellow fever vaccination services with internationally recognized certification for travel requirements.',
    },
    {
      title: 'Travel Health Consultations',
      content:
        'Personalized consultations that assess destination risks, vaccination requirements, and preventive health measures.',
    },
    {
      title: 'Malaria Prevention Services',
      content:
        'Preventive medications, risk assessments, and educational support to minimize the risk of malaria infection.',
    },
    {
      title: 'Post-Travel Medical Evaluation',
      content:
        'Assessment and management of symptoms or illnesses that may develop following international travel.',
    },
  ],

  conditions: [
    'Travel Health Requirements',
    'Yellow Fever Prevention',
    'Malaria Prevention',
    'Travel-Related Illnesses',
    'International Vaccination Requirements',
  ],

  image: '/images/services/travel-vaccines.webp',
},

{
  slug: 'laboratory-services',
  title: 'Comprehensive Laboratory Testing',
  category: 'Diagnostics',
  icon: 'FlaskConical',

  excerpt:
    'Accurate laboratory diagnostics supporting timely and informed clinical decisions.',

  description:
    'Our modern laboratory is equipped to provide a comprehensive range of diagnostic tests that support disease prevention, diagnosis, treatment monitoring, and overall patient care. We maintain strict quality assurance standards to ensure reliable and timely results.',

  highlights: [
    {
      title: 'Comprehensive Diagnostic Testing',
      content:
        'Extensive laboratory services covering hematology, biochemistry, immunology, microbiology, and specialized investigations.',
    },
    {
      title: 'Health Screening Programs',
      content:
        'Preventive health screening packages designed to identify risk factors and detect diseases before symptoms occur.',
    },
    {
      title: 'Microbiology & Infection Testing',
      content:
        'Advanced testing services that identify infectious organisms and support evidence-based treatment decisions.',
    },
    {
      title: 'Fast & Reliable Results',
      content:
        'Efficient processing systems that provide accurate results within clinically relevant timeframes.',
    },
  ],

  conditions: [
    'Infections',
    'Diabetes',
    'Anaemia',
    'Kidney Disease',
    'Liver Disorders',
    'Chronic Diseases',
  ],

  image: '/images/services/laboratory.webp',
},

{
  slug: 'diagnostic-imaging',
  title: 'Advanced Diagnostic Imaging',
  category: 'Diagnostics',
  icon: 'ScanLine',

  excerpt:
    'State-of-the-art imaging services that support accurate diagnosis and treatment planning.',

  description:
    'The Diagnostic Imaging Department provides advanced medical imaging services that help physicians diagnose conditions accurately and monitor treatment progress. Our imaging professionals combine modern technology with clinical expertise to deliver reliable results.',

  highlights: [
    {
      title: 'Ultrasound Imaging',
      content:
        'High-resolution ultrasound examinations used to evaluate organs, soft tissues, blood vessels, and pregnancy development.',
    },
    {
      title: 'Comprehensive Diagnostic Scans',
      content:
        'Advanced imaging procedures that provide detailed insights into internal structures and medical conditions.',
    },
    {
      title: 'Expert Radiology Reporting',
      content:
        'Detailed interpretation of imaging studies by qualified specialists to support clinical decision-making.',
    },
    {
      title: 'Rapid Reporting & Results',
      content:
        'Efficient imaging workflows that enable faster diagnosis and treatment planning.',
    },
  ],

  conditions: [
    'Pregnancy Monitoring',
    'Internal Injuries',
    'Tumours',
    'Musculoskeletal Conditions',
    'Abdominal Disorders',
  ],

  image: '/images/services/imaging.webp',
},

{
  slug: 'pharmacy-services',
  title: 'Pharmacy Services',
  category: 'Support Services',
  icon: 'Pill',

  excerpt:
    'Comprehensive pharmaceutical services focused on safe and effective medication management.',

  description:
    'Our Pharmacy Department provides access to quality medications, prescription management, medication counseling, and pharmaceutical support services. We work closely with healthcare providers to ensure patients receive safe, effective, and affordable treatment.',

  highlights: [
    {
      title: 'Prescription Dispensing',
      content:
        'Safe and accurate dispensing of medications prescribed by healthcare professionals.',
    },
    {
      title: 'Medication Counseling',
      content:
        'Patient-focused education on medication use, dosage schedules, side effects, and treatment adherence.',
    },
    {
      title: 'Drug Interaction Monitoring',
      content:
        'Professional review of medications to identify and prevent potentially harmful drug interactions.',
    },
    {
      title: 'Chronic Care Medication Support',
      content:
        'Ongoing pharmaceutical management for patients with chronic conditions requiring long-term medication therapy.',
    },
  ],

  conditions: [
    'Medication Management',
    'Chronic Disease Treatment',
    'Acute Illness Treatment',
    'Prescription Therapy',
    'Preventive Care',
  ],

  image: '/images/services/pharmacy.webp',
},

{
  slug: 'physiotherapy',
  title: 'Physiotherapy & Rehabilitation',
  category: 'Wellness',
  icon: 'Activity',

  excerpt:
    'Evidence-based rehabilitation programs that restore movement, function, and quality of life.',

  description:
    'Our Physiotherapy & Rehabilitation Department helps patients recover from injuries, surgeries, neurological conditions, and chronic pain through personalized treatment programs designed to improve mobility, strength, and independence.',

  highlights: [
    {
      title: 'Post-Surgical Rehabilitation',
      content:
        'Structured rehabilitation programs that support recovery and help patients regain function following surgery.',
    },
    {
      title: 'Pain Management Therapy',
      content:
        'Evidence-based interventions designed to reduce pain and improve quality of life without unnecessary dependence on medication.',
    },
    {
      title: 'Mobility & Strength Training',
      content:
        'Targeted exercises that improve flexibility, balance, muscle strength, and physical performance.',
    },
    {
      title: 'Sports Injury Rehabilitation',
      content:
        'Comprehensive rehabilitation programs that help athletes safely return to sport and physical activity.',
    },
  ],

  conditions: [
    'Back Pain',
    'Sports Injuries',
    'Joint Stiffness',
    'Neurological Conditions',
    'Post-Surgery Recovery',
    'Mobility Challenges',
  ],

  image: '/images/services/physiotherapy.webp',
},

]
export const site = {
  name: 'RiftView Specialist Centre',
  shortName: 'RiftView',
  tagline: 'Care • Compassion • Commitment',
  location: 'Naivasha, Nakuru County, Kenya',
  email: 'Riftview.Specialistcentre@gmail.com',
  phone: '0719 225227',
  emergencyPhone: '0719 225227',
  address: 'Opp. DRIC, Along Kenyatta Avenue, Naivasha Town',
  hours: [
    { day: 'Mon – Fri', time: '7:30 AM – 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM – 6:00 PM' },
    { day: 'Sunday', time: '9:00 AM – 4:00 PM' },
    { day: 'Emergency', time: 'Open 24 Hours' },
  ],
  socials: [
    { name: 'Facebook', href: 'https://www.facebook.com/p/Rift-View-Specialist-Centre-61586767387040/', icon: 'Facebook' },
    { name: 'TikTok', href: 'https://www.tiktok.com/discover/rift-view-specialist-center-naivasha', icon: 'Tiktok' },
    { name: 'Instagram', href: 'https://www.facebook.com/p/Rift-View-Specialist-Centre-61586767387040/', icon: 'Instagram' },
   
  ],
}

export const stats = [
  { label: 'Years of Service', value: 15, suffix: '+' },
  { label: 'Specialist Doctors', value: 40, suffix: '+' },
  { label: 'Patients Treated', value: 50000, suffix: '+' },
  { label: 'Satisfaction Rate', value: 98, suffix: '%' },
]

export type Specialist = {
  slug: string
  name: string
  title: string
  department: string
  image: string
  bio: string
  experience: string
  education: string[]
  languages: string[]
  specialties: string[]
  socials?: {name: string, href: string}[]
}

export const specialistDepartments = [
  'All',
  'OutPatient Department (OPD)',
  'Radiology Department',
  'Laboratory Services',
  'Ophthalmology (Eye Care) Department',
  'Dental Unit',
  'ENT and Audiology Department',
  'Orthopedics and Physiotherapy Department',
  'Obstetrics, Gynecology & Family Planning Department',
  'Pediatrics & Immunizations',
  'Family Medicine Department',
  'Oncology Department',
  'Pharmacy Department',
  'Mental Health Awareness (Psychology and Psychiatry Clinic)',
  'Urology',
  'Endocrinology',
  'Neurosurgical Clinic and Dermatology Departments and Services',
]

export const specialists: Specialist[] = [
  {
    slug: 'dr-daniel-somba',
    name: 'Dr. Daniel Somba',
    title: 'Chairman',
    department: 'Radiology Department',
    image: '/images/dr-daniel-somba-chairman.webp',
    bio: "Dr. Daniel Nthakyo Ngayai Somba is a Consultant Radiologist with over 10 years of experience in diagnostic imaging. He holds an MBChB and MMed in Diagnostic Imaging and Radiation Medicine from the University of Nairobi and is a member of the Kenya Association of Radiologists (KAR). He is the Managing Director of Machakos Imaging Centre, CEO of Machakos Doctors Plaza, Chairman of Rift View Specialist Centre in Naivasha, and a consultant radiologist at The Mara Specialist Hospital, where he advances access to high-quality diagnostic imaging services.",
    experience: '10+ years',
    education: ['MBChB – University of Nairobi (2006)','MPH – University of Nairobi (2013)','MRCP – Royal College of Physicians, London, UK (2019)',],
    languages: ['English', 'Swahili' ],
    specialties: ['Diagnostic Imaging', 'Radiation Medicine', 'Radiology'],
    socials: [
    ]
  },
  {
    slug: 'Dr-Jonah-Manjari-Rift-View-Specialist-Center',
    name: 'Dr. Jonah Manjari',
    title: 'Consultant Ear, Nose, and Throat (ENT) surgeon',
    department: 'ENT and Audiology Department',
    image: '/images/Dr-Jonah- Manjari-Rift-View-Specialist-Center.webp',
    bio: 'Dr. Jonah Manjari Mwangi is an Ear, Nose, and Throat (ENT) surgeon in Kenya. He holds a Master of Medicine in ENT Surgery (2004) and a Bachelor of Medicine and Surgery (1997) from the University of Nairobi. Dr. Manjari previously served as a County Health Executive and as CEO of the Kenya Medical Supplies Authority (KEMSA). ',
    experience: '25+ years',
    education: [
      'MBChB, University of Nairobi',
      'MMed ENT Surgery',
    ],
    languages: ['English', 'Swahili'],
    specialties: ['ENT', 'Audiology', 'Hearing aids', 'Tinnitus', 'Snoring and Sleep Apnea'],
    socials: [
      {name: 'YouTube', href: 'https://www.youtube.com/watch?v=MZxbv2jg-S0'},
      {name: 'LinkedIn', href: 'https://www.linkedin.com/in/jonah-manjari-a4367326/ '},
    ]
  },
  {
    slug: 'Dr-Charles-Itegi-Rift-View-Specialist-Center',
    name: 'Dr. Charles Itegi',
    title: 'Consultant General Surgeon',
    department: 'Family Medicine Department',
    image: '/images/Dr-Charles-Itegi-Rift-View-Specialist-Center.webp',
    bio: 'Senior physician-executive (MBChB, MMed Family Medicine, MBA Healthcare Leadership & Management) with over 10 years of experience in clinical practice and health systems leadership. Currently serving as a Consultant Family Physician and County Primary Health Care Coordinator, leading primary healthcare networks, community health systems, digital health initiatives, and health financing. Experienced in RMNCAH, data governance, EmONC, and international donor partnerships, with multilingual proficiency in English, Spanish, Swahili, and Pokot.',
    experience: '10+ years',
    education: [
      'MBChB, Moi University',
      'MMed Family Medicine',
      'MBA Healthcare Leadership & Management',
    ],
    languages: ['English', 'Swahili'],
    specialties: ['Family Medicine','General surgery', 'Health systems leadership', 'Digital health initiatives', 'RMNCAH', 'Data governance', 'EmONC'],
    socials: [
      {name: 'MedPages', href: 'https://www.medpages.info/sf/index.php?page=person&personcode=1954645'},
      {name: 'LinkedIn', href: 'https://www.linkedin.com/in/dr-charles-m-itegi/'},
      {name: 'Twitter', href: 'https://twitter.com/charls_itegi'},
    ]
  },
  {
    slug: 'Dr-Gladys-Maina-Rif-View-Specialist-Center',
    name: 'Dr. Gladys Maina',
    title: 'Dental Surgeon',
    department: 'Dental Unit',
    image: '/images/Dr-Gladys-Maina-Rif-View-Specialist-Center.webp',
    bio: 'Dr. Gladys Maina is an experienced dental surgeon with over 15 years of clinical practice, specializing in General Dentistry, Cosmetic Dentistry, and Orthodontics. She holds a BDS from the University of Nairobi, an MPH, and is an Invisalign Accredited Provider with advanced training in orthodontics and healthcare management. Renowned for her patient-centered approach and attention to detail, Dr. Maina is dedicated to delivering exceptional aesthetic and restorative dental care.',
    experience: '15+ years',
    education: ['BDS, University of Nairobi', 'MPH'],
    languages: ['English', 'Swahili', 'Kikuyu'],
    specialties: ['General Dentistry', 'Cosmetic Dentistry', 'Orthodontics', 'Invisalign'],
    socials: [
      {name: 'Facebook', href: 'https://www.facebook.com/carolinemutoko/videos/796979648445816/'},
      {name: 'YouTube', href: 'https://www.youtube.com/watch?v=E7RfdVv5Vl0'},
      {name: 'Royal Smiles Website', href: 'https://www.royalsmilesclinic.com/team#:~:text=Dr.%20Gladys%20Maina,of%20Nairobi)%2C%20Invisalign%20Accredited%20Provider&text=Gladys%20Maina%20is%20one%20of,Royal%20Smiles%20Dental%20Clinic%20Ltd.'},
    ]
  },
  {
    slug: 'Dr-Teresiah-Chege',
    name: 'Dr. Teresiah Chege',
    title: 'Ophthalmologist',
    department: 'Ophthalmology (Eye Care) Department',
    image: '/images/Dr-Teresiah-Chege.webp',
    bio: 'Dr. Teresia W. Chege (MBChB, MMed Ophthalmology) is a Consultant Ophthalmologist specializing in the diagnosis and treatment of eye diseases and vision disorders. Trained at the University of Nairobi with advanced fellowship experience in comprehensive ophthalmology, she is recognized for her clinical excellence, distinction in postgraduate training, and commitment to advancing eye care through continuous professional education. She current heads the Ophthalmology Department at Rift View Specialist Center in Naivasha, Nakuru County.',
    experience: '10+ years',
    education: ['MBChB, University of Nairobi', 'MMed Ophthalmology'],
    languages: ['English', 'Swahili', 'Kikuyu'],
    specialties: ['General Ophthalmology', 'Cataract Surgery', 'Glaucoma Management'],
    socials: [
      {name: 'LinkedIn', href: 'https://www.linkedin.com/in/dr-terry-chege-546173170/?skipRedirect=true'},
      {name: 'Facebook', href: 'https://www.facebook.com/kenyanewsagency/posts/a-patient-undergoes-an-eye-examination-at-the-newly-opened-rift-view-specialist-/1273846448264332/'},
      {name: 'University of Nairobi', href: 'https://opthalmology.uonbi.ac.ke/latest-news/dr-uba-hemed-and-dr-teresia-chege-awarded '},
    ]
  },
   {
    slug: 'Dr-Daniel-Katambo',
    name: 'Dr. Daniel Katambo',
    title: 'Consultant Physician & Diabetologist',
    department: 'Endocrinology',
    image: '/images/Dr-Daniel-Katambo.webp',
    bio: "Dr. Daniel K. Katambo (MBChB, MPH, MRCP UK) is a Consultant Physician specializing in Type 2 diabetes, obesity management, and lifestyle medicine. Founder of Kenya's first dedicated diabetes remission center, he has extensive expertise in diabetes prevention, therapeutic nutrition, metabolic health, and evidence-based lifestyle interventions, helping patients achieve long-term disease control and improved quality of life.",
    experience: '12+ years',
    education: ['MBChB: Bachelor of Medicine and Surgery from the University of Nairobi (2006).','MPH: Masters in Public Health from the University of Nairobi (2013).', 'MRCP: Member of the Royal College of Physicians, London, UK (2019).'],
    languages: ['English', 'Swahili' ],
    specialties: ['Type 2 diabetes', 'Obesity management', 'Weight Loss Management', 'Diabetes prevention', 'Therapeutic nutrition', 'Metabolic health', 'Evidence-based lifestyle interventions'],
    socials: [
      {name: 'Afyacode', href: "https://afyacode.com/doctors/dr-daniel-katambo/#:~:text=He%20graduated%20with%20a%20Bachelor's,of%20Physicians%20(MRCP%20London%20UK)."},
      {name: 'Diabetes Africa', href: 'https://diabetesafrica.org/profile/dr-daniel-katambo-kiningu/#:~:text=Dr.%20Daniel%20K.%20Kiningu%20is,2%20diabetes%20and%20weight%20loss.'},
      {name: 'LinkedIn', href: 'https://www.linkedin.com/in/dr-daniel-k-kiningu?originalSubdomain=ke'},
    ]
  },
  {
    slug: 'Dr-Milquinta-Atieno',
    name: 'Dr. Milquinta Atieno',
    title: 'Consultant Physician',
    department: 'General Medicine Department',
    image: '/images/Dr-Milquinta-Atieno.webp',
    bio: "",
    experience: '',
    education: [],
    languages: [],
    specialties: [],
    socials: [
         ]
  },

  {
    slug: 'Lewis-Gitau',
    name: 'Lewis Gitau',
    title: 'Clinician - Cancer Care',
    department: 'Cancer Care Department',
    image: '/images/Lewis-Gitau.webp',
    bio: "Lewis Gitau is a Registered Clinical Officer with a Diploma in Clinical Medicine and Surgery from KMTC Murang'a. He provides primary healthcare services, including diagnosis, treatment, and patient management, and has practiced in the Juja and Naivasha regions of Kenya.",
    experience: '5+ years',
    education: ['Diploma in Clinical Medicine and Surgery from KMTC Murang\'a'],
    languages: ['English', 'Swahili',],
    specialties: ['Primary healthcare services', 'Diagnosis', 'Treatment', 'Patient management'],
    socials: [
      {name: 'LinkedIn', href: 'https://www.linkedin.com/in/lewis-gitau-7982822ba/'},
    ]
  },

]

export type Testimonial = {
  name: string
  location: string
  rating: number
  quote: string
}

export const testimonials: Testimonial[] = [
  {
    name: 'Caroline Wairimu',
    location: 'Naivasha',
    rating: 5,
    quote:
      'The care I received at RiftView was exceptional. The doctors took time to explain everything and made me feel at ease throughout my treatment.',
  },
  {
    name: 'Joseph Kariuki',
    location: 'Gilgil',
    rating: 5,
    quote:
      'From reception to the consultation room, the team was professional and kind. The facilities are modern and very clean. Highly recommended.',
  },
  {
    name: 'Nancy Atieno',
    location: 'Nakuru',
    rating: 5,
    quote:
      'My daughter received wonderful paediatric care. The pediatric team is patient and gentle — exactly what every parent hopes for.',
  },
  {
    name: 'Samuel Macharia',
    location: 'Naivasha',
    rating: 5,
    quote:
      'I came in for an emergency late at night and the team responded immediately. They truly live up to Care, Compassion and Commitment.',
  },
  {
    name: 'Aisha Hassan',
    location: 'Mai Mahiu',
    rating: 5,
    quote:
      'The maternity services were outstanding. I felt safe and supported every step of the way during my delivery.',
  },
  {
    name: 'Peter Njenga',
    location: 'Naivasha',
    rating: 5,
    quote:
      'Quick lab results and a thorough consultation. RiftView has become my familys go-to specialist centre.',
  },
]

export type EmergencyCategory = {
  title: string
  icon: string
  description: string
}

export const emergencyCategories: EmergencyCategory[] = [
  {
    title: 'Cardiac Emergencies',
    icon: 'HeartPulse',
    description: 'Chest pain, heart attack and cardiac arrest response.',
  },
  {
    title: 'Trauma & Accidents',
    icon: 'Ambulance',
    description: 'Road accidents, falls, fractures and serious injuries.',
  },
  {
    title: 'Stroke Response',
    icon: 'Brain',
    description: 'Rapid assessment and treatment of stroke symptoms.',
  },
  {
    title: 'Respiratory Distress',
    icon: 'Wind',
    description: 'Severe breathing difficulty and asthma attacks.',
  },
  {
    title: 'Severe Bleeding',
    icon: 'Droplet',
    description: 'Haemorrhage control and emergency transfusion.',
  },
  {
    title: 'Poisoning',
    icon: 'FlaskConical',
    description: 'Drug, chemical and food poisoning management.',
  },
  {
    title: 'Burns',
    icon: 'Flame',
    description: 'Immediate care and treatment for burn injuries.',
  },
  {
    title: 'Paediatric Emergencies',
    icon: 'Baby',
    description: 'Urgent care for critically ill infants and children.',
  },
  {
    title: 'Obstetric Emergencies',
    icon: 'Stethoscope',
    description: 'Emergency maternity and delivery complications.',
  },
]

export type BlogPost = {
  slug: string
  title: string
  category: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
  content: { heading?: string; body: string }[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'managing-hypertension-naturally',
    title: 'Managing Hypertension: Lifestyle Changes That Work',
    category: 'Heart Health',
    excerpt:
      'High blood pressure affects millions silently. Discover practical, evidence-based steps to keep your heart healthy.',
    author: 'Dr. Amina Wanjiru',
    date: 'April 12, 2026',
    readTime: '6 min read',
    image: '/images/blog-health.png',
    content: [
      {
        body: 'Hypertension, often called the "silent killer," rarely shows symptoms until it has caused significant damage. The good news is that lifestyle changes can dramatically reduce your risk and help control existing high blood pressure.',
      },
      {
        heading: 'Eat for your heart',
        body: 'A diet rich in fruits, vegetables, whole grains and lean proteins, while low in salt and processed foods, can meaningfully lower blood pressure. Reducing daily sodium intake is one of the most effective single changes you can make.',
      },
      {
        heading: 'Move every day',
        body: 'Regular physical activity strengthens the heart and improves circulation. Aim for at least 30 minutes of moderate exercise, such as brisk walking, most days of the week.',
      },
      {
        heading: 'Know your numbers',
        body: 'Regular monitoring is essential. Visit RiftView Specialist Centre for a cardiac assessment and personalised plan to keep your blood pressure within a healthy range.',
      },
    ],
  },
  {
    slug: 'childhood-immunisation-guide',
    title: 'A Parents Guide to Childhood Immunisation',
    category: 'Child Health',
    excerpt:
      'Vaccines protect children from serious diseases. Here is what every parent in Naivasha should know about the immunisation schedule.',
    author: 'Dr. Grace Mutiso',
    date: 'March 28, 2026',
    readTime: '5 min read',
    image: '/images/clinic-reception.png',
    content: [
      {
        body: 'Immunisation is one of the most powerful tools we have to protect children from life-threatening illnesses. Following the recommended schedule gives your child the best possible start in life.',
      },
      {
        heading: 'Why timing matters',
        body: 'Vaccines are scheduled to protect children when they are most vulnerable. Delaying or skipping doses leaves a window of risk, so keeping to the schedule is important.',
      },
      {
        heading: 'Common concerns',
        body: 'Mild reactions like a slight fever or soreness are normal and temporary. Serious side effects are extremely rare, and the protection vaccines provide far outweighs the risks.',
      },
      {
        heading: 'Stay on track',
        body: 'Our paediatric team keeps detailed records and sends reminders so you never miss a dose. Book a visit to discuss your childs immunisation needs.',
      },
    ],
  },
  {
    slug: 'recognising-stroke-symptoms',
    title: 'Recognising Stroke Symptoms: Act FAST',
    category: 'Emergency Care',
    excerpt:
      'When a stroke happens, every minute counts. Learn the warning signs and how quick action can save a life.',
    author: 'Dr. John Mburu',
    date: 'March 10, 2026',
    readTime: '4 min read',
    image: '/images/hero-doctor-xray.png',
    content: [
      {
        body: 'A stroke occurs when blood supply to part of the brain is interrupted. Recognising the signs early and seeking immediate care can mean the difference between full recovery and lasting disability.',
      },
      {
        heading: 'Remember FAST',
        body: 'Face drooping, Arm weakness, Speech difficulty and Time to call for help. If you notice any of these signs, seek emergency care immediately — do not wait to see if symptoms improve.',
      },
      {
        heading: 'Why speed matters',
        body: 'Brain cells begin to die within minutes of a stroke. The faster treatment begins, the more brain tissue can be saved, which is why our emergency team is available 24 hours a day.',
      },
      {
        heading: 'Reduce your risk',
        body: 'Controlling blood pressure, staying active and avoiding tobacco all lower stroke risk. Speak to our specialists about a personalised prevention plan.',
      },
    ],
  },
  {
    slug: 'importance-of-regular-checkups',
    title: 'Why Regular Health Check-ups Save Lives',
    category: 'Wellness',
    excerpt:
      'Preventive screening catches problems early — often before symptoms appear. Here is why annual check-ups matter.',
    author: 'Dr. Samuel Kiprono',
    date: 'February 22, 2026',
    readTime: '5 min read',
    image: '/images/consultation.png',
    content: [
      {
        body: 'Many serious conditions, from diabetes to certain cancers, develop quietly over years. Regular health check-ups allow us to detect and address these issues early, when treatment is most effective.',
      },
      {
        heading: 'What a check-up includes',
        body: 'A typical screening covers blood pressure, blood sugar, cholesterol, body weight and a general physical examination, tailored to your age and risk factors.',
      },
      {
        heading: 'Prevention is powerful',
        body: 'Catching a problem early often means simpler, less costly treatment and far better outcomes. Investing a little time in prevention can add years to your life.',
      },
      {
        heading: 'Book your screening',
        body: 'RiftView offers comprehensive health screening packages for individuals and families. Schedule yours today and take charge of your health.',
      },
    ],
  },
]

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
    slug: 'endocrinology',
    title: 'Endocrinology',
    category: 'Specialist Clinics',
    icon: 'Activity',
    excerpt: 'Specialist care for endocrine, metabolic, and hormonal disorders, offering advanced diagnostic and treatment plans for diabetes, thyroid conditions, and weight management.',
    description: "The Endocrinology department at Rift View Specialist Centre provides comprehensive care for disorders affecting the endocrine glands and hormones. Glands secrete hormones that regulate crucial bodily functions, and any imbalance can lead to chronic health issues. Our experienced specialists diagnose and manage diabetes, thyroid diseases, metabolic disorders, osteoporosis, and reproductive hormone imbalances using the latest clinical evidence and a patient-centered approach.",
    highlights: [
      {
        title: 'Diabetes Mellitus Care',
        content: 'Comprehensive management of blood glucose levels for Type 1, Type 2, and gestational diabetes, utilizing advanced insulin therapies, continuous glucose monitoring, and personalized nutritional education.'
      },
      {
        title: 'Thyroid Disease Treatments',
        content: 'Expert diagnosis and management of thyroid dysfunctions including hypothyroidism (underactive thyroid), hyperthyroidism (overactive thyroid), thyroid nodules, and thyroiditis to restore hormonal and energy balance.'
      },
      {
        title: 'Metabolic & Weight Management',
        content: 'Specialized care for metabolic syndrome, cholesterol abnormalities, and weight disorders, including personalized weight-loss plans and therapeutic lifestyle interventions.'
      },
      {
        title: 'Bone & Calcium Metabolism',
        content: 'Evaluation and treatment of bone mineral disorders such as osteoporosis, calcium imbalances, and parathyroid gland diseases to maintain skeletal strength.'
      },
      {
        title: 'Reproductive Endocrinology',
        content: 'Clinical management of hormonal imbalances affecting reproduction, including polycystic ovary syndrome (PCOS), low testosterone (male hypogonadism), and fertility challenges.'
      },
      {
        title: 'Endocrine Cancers & Tumors',
        content: 'Multidisciplinary approach to diagnosing and treating benign and malignant tumors of the thyroid, pituitary, adrenal, and other hormone-producing glands.'
      }
    ],
    conditions: [
      'Diabetes Mellitus',
      'Hypothyroidism (Underactive Thyroid)',
      'Hyperthyroidism (Overactive Thyroid)',
      'Metabolic Syndrome & Obesity',
      'Dyslipidemia (Cholesterol Problems)',
      'Osteoporosis & Osteopenia',
      'Calcium & Parathyroid Disorders',
      'Polycystic Ovary Syndrome (PCOS)',
      'Male Hypogonadism (Low Testosterone)',
      'Hormonal Infertility',
      'Thyroid Nodules & Cancers',
      'Adrenal & Pituitary Disorders'
    ],
    images: [
      { src: '/images/consultation-room.webp', alt: 'Endocrinology consultation room at Rift View Specialist Centre' },
      { src: '/images/examination-room-with-medical-equipments.webp', alt: 'Endocrinology examination facilities at Rift View' },
      { src: '/images/lab-equipments-rift-view-specialist-center.webp', alt: 'Hormonal diagnostic laboratories at Rift View' }
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

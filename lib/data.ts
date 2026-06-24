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
    { name: 'Facebook', href: '#', icon: 'Facebook' },
    { name: 'Twitter', href: '#', icon: 'Twitter' },
    { name: 'Instagram', href: '#', icon: 'Instagram' },
    { name: 'YouTube', href: '#', icon: 'Youtube' },
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
}

export const specialistDepartments = [
  'All',
  'OutPatient Department (OPD)',
  'Diagnostic Department',
  'Ophthalmology (Eye Care) Department',
  'Dental Unit',
  'ENT and Audiology Department',
  'Orthopedics and Physiotherapy Department',
  'Obstetrics, Gynecology & Family Planning Department',
  'Pediatrics & Immunizations',
  'Family Medicine Department & Travel Vaccines department',
  'Oncology Department',
  'Pharmacy Department',
]

export const specialists: Specialist[] = [
  {
    slug: 'dr-amina-wanjiru',
    name: 'Dr. Amina Wanjiru',
    title: 'Consultant Cardiologist',
    department: 'OutPatient Department (OPD)',
    image: '/images/doctor-female-1.png',
    bio: 'Dr. Wanjiru is a dedicated cardiologist with a passion for preventive heart care and patient education. She leads our cardiac consultations with warmth and precision.',
    experience: '12 years',
    education: [
      'MBChB, University of Nairobi',
      'MMed Internal Medicine',
      'Fellowship in Cardiology',
    ],
    languages: ['English', 'Swahili', 'Kikuyu'],
    specialties: ['Hypertension', 'Echocardiography', 'Heart failure'],
  },
  {
    slug: 'dr-david-otieno',
    name: 'Dr. David Otieno',
    title: 'Consultant General Surgeon',
    department: 'OutPatient Department (OPD)',
    image: '/images/doctor-male-1.png',
    bio: 'Dr. Otieno specialises in minimally invasive surgery, bringing skill and compassion to every procedure for faster recovery and better outcomes.',
    experience: '15 years',
    education: [
      'MBChB, Moi University',
      'MMed General Surgery',
      'Laparoscopic Surgery Training',
    ],
    languages: ['English', 'Swahili', 'Luo'],
    specialties: ['Laparoscopy', 'Hernia repair', 'Trauma surgery'],
  },
  {
    slug: 'dr-grace-mutiso',
    name: 'Dr. Grace Mutiso',
    title: 'Consultant Paediatrician',
    department: 'Pediatrics & Immunizations',
    image: '/images/doctor-female-2.png',
    bio: 'Dr. Mutiso is beloved by families across Naivasha for her gentle approach to children and her commitment to early, preventive care.',
    experience: '10 years',
    education: ['MBChB, University of Nairobi', 'MMed Paediatrics & Child Health'],
    languages: ['English', 'Swahili', 'Kamba'],
    specialties: ['Newborn care', 'Immunisation', 'Childhood nutrition'],
  },
  {
    slug: 'dr-samuel-kiprono',
    name: 'Dr. Samuel Kiprono',
    title: 'Consultant Physician',
    department: 'Family Medicine Department & Travel Vaccines department',
    image: '/images/doctor-male-2.png',
    bio: 'Dr. Kiprono brings decades of experience in internal medicine, managing complex chronic conditions with a holistic, patient-centred approach.',
    experience: '20 years',
    education: ['MBChB, University of Nairobi', 'MMed Internal Medicine'],
    languages: ['English', 'Swahili', 'Kalenjin'],
    specialties: ['Diabetes', 'Hypertension', 'Chronic disease care'],
  },
  {
    slug: 'dr-faith-njoroge',
    name: 'Dr. Faith Njoroge',
    title: 'Consultant Obstetrician & Gynaecologist',
    department: 'Obstetrics, Gynecology & Family Planning Department',
    image: '/images/doctor-female-1.png',
    bio: 'Dr. Njoroge provides comprehensive care for women, guiding mothers safely through pregnancy and supporting lifelong reproductive health.',
    experience: '14 years',
    education: ['MBChB, Moi University', 'MMed Obstetrics & Gynaecology'],
    languages: ['English', 'Swahili'],
    specialties: ['Antenatal care', 'Safe delivery', 'Gynaecology'],
  },
  {
    slug: 'dr-peter-mwangi',
    name: 'Dr. Peter Mwangi',
    title: 'Consultant Orthopaedic Surgeon',
    department: 'Orthopedics and Physiotherapy Department',
    image: '/images/doctor-male-1.png',
    bio: 'Dr. Mwangi helps patients regain mobility through expert management of bone, joint and sports injuries.',
    experience: '11 years',
    education: ['MBChB, University of Nairobi', 'MMed Orthopaedic Surgery'],
    languages: ['English', 'Swahili', 'Kikuyu'],
    specialties: ['Joint surgery', 'Fracture care', 'Sports injuries'],
  },
  {
    slug: 'dr-mary-chebet',
    name: 'Dr. Mary Chebet',
    title: 'Consultant Dermatologist',
    department: 'OutPatient Department (OPD)',
    image: '/images/doctor-female-2.png',
    bio: 'Dr. Chebet combines medical and aesthetic dermatology to help patients achieve healthy, confident skin.',
    experience: '9 years',
    education: ['MBChB, Egerton University', 'MMed Dermatology'],
    languages: ['English', 'Swahili', 'Kalenjin'],
    specialties: ['Acne', 'Eczema', 'Cosmetic dermatology'],
  },
  {
    slug: 'dr-james-kamau',
    name: 'Dr. James Kamau',
    title: 'Consultant Radiologist',
    department: 'Diagnostic Department',
    image: '/images/doctor-male-2.png',
    bio: 'Dr. Kamau leads our imaging department, delivering accurate diagnoses that guide effective treatment across the centre.',
    experience: '16 years',
    education: ['MBChB, University of Nairobi', 'MMed Radiology'],
    languages: ['English', 'Swahili', 'Kikuyu'],
    specialties: ['CT imaging', 'Ultrasound', 'Diagnostic reporting'],
  },
  {
    slug: 'dr-lucy-akinyi',
    name: 'Dr. Lucy Akinyi',
    title: 'Consultant Ophthalmologist',
    department: 'Ophthalmology (Eye Care) Department',
    image: '/images/doctor-female-1.png',
    bio: 'Dr. Akinyi is dedicated to protecting and restoring vision, offering compassionate eye care to patients of all ages.',
    experience: '13 years',
    education: ['MBChB, Moi University', 'MMed Ophthalmology'],
    languages: ['English', 'Swahili', 'Luo'],
    specialties: ['Cataracts', 'Glaucoma', 'Vision care'],
  },
  {
    slug: 'dr-brian-wekesa',
    name: 'Dr. Brian Wekesa',
    title: 'Consultant ENT Surgeon',
    department: 'ENT and Audiology Department',
    image: '/images/doctor-male-1.png',
    bio: 'Dr. Wekesa treats ear, nose and throat conditions with precision, improving hearing, breathing and quality of life.',
    experience: '8 years',
    education: ['MBChB, University of Nairobi', 'MMed ENT Surgery'],
    languages: ['English', 'Swahili', 'Luhya'],
    specialties: ['Sinus surgery', 'Hearing care', 'Tonsillectomy'],
  },
  {
    slug: 'dr-esther-naserian',
    name: 'Dr. Esther Naserian',
    title: 'Clinical Psychologist',
    department: 'OutPatient Department (OPD)',
    image: '/images/doctor-female-2.png',
    bio: 'Dr. Naserian provides confidential counselling and psychological support, helping patients build resilience and emotional wellbeing.',
    experience: '10 years',
    education: ['BSc Psychology', 'MSc Clinical Psychology'],
    languages: ['English', 'Swahili', 'Maa'],
    specialties: ['Anxiety', 'Depression', 'Family therapy'],
  },
  {
    slug: 'dr-john-mburu',
    name: 'Dr. John Mburu',
    title: 'Emergency Medicine Physician',
    department: 'OutPatient Department (OPD)',
    image: '/images/doctor-male-2.png',
    bio: 'Dr. Mburu leads our 24-hour emergency team, providing rapid, life-saving care when it matters most.',
    experience: '12 years',
    education: ['MBChB, Kenyatta University', 'Diploma in Emergency Medicine'],
    languages: ['English', 'Swahili', 'Kikuyu'],
    specialties: ['Trauma care', 'Critical care', 'Resuscitation'],
  },
  {
    slug: 'dr-jane-karimi',
    name: 'Dr. Jane Karimi',
    title: 'Consultant Dentist',
    department: 'Dental Unit',
    image: '/images/doctor-female-1.png',
    bio: 'Dr. Karimi is dedicated to providing gentle and restorative dental care, helping patients restore confidence in their smiles with advanced techniques.',
    experience: '10 years',
    education: ['BDS, University of Nairobi', 'MSc in Restorative Dentistry'],
    languages: ['English', 'Swahili'],
    specialties: ['Root Canal Therapy', 'Cosmetic Dentistry', 'Crowns & Bridges'],
  },
  {
    slug: 'dr-patrick-omwamba',
    name: 'Dr. Patrick Omwamba',
    title: 'Consultant Oncologist',
    department: 'Oncology Department',
    image: '/images/doctor-male-1.png',
    bio: 'Dr. Omwamba brings deep clinical oncology expertise and compassionate guidance, specializing in targeted chemotherapy and immunotherapy plans.',
    experience: '14 years',
    education: [
      'MBChB, University of Nairobi',
      'MMed Radiation Oncology',
      'Fellowship in Medical Oncology',
    ],
    languages: ['English', 'Swahili'],
    specialties: ['Chemotherapy', 'Immunotherapy', 'Targeted Cancer Care'],
  },
  {
    slug: 'dr-sarah-jemutai',
    name: 'Dr. Sarah Jemutai',
    title: 'Clinical Pharmacist',
    department: 'Pharmacy Department',
    image: '/images/doctor-female-2.png',
    bio: 'Dr. Jemutai manages our pharmacy services with a focus on medication safety, clinical efficacy, and patient-centered drug therapy counseling.',
    experience: '8 years',
    education: ['BPharm, Moi University', 'MSc in Clinical Pharmacy'],
    languages: ['English', 'Swahili'],
    specialties: ['Medication Safety', 'Drug Therapy Counseling', 'Clinical Pharmacy'],
  },
  {
    slug: 'dr-moses-ochieng',
    name: 'Dr. Moses Ochieng',
    title: 'Lead Physiotherapist',
    department: 'Orthopedics and Physiotherapy Department',
    image: '/images/doctor-male-2.png',
    bio: 'Dr. Ochieng leads our physical rehabilitation unit, designing personalized therapy plans that support long-term recovery and restore functional mobility.',
    experience: '11 years',
    education: [
      'BSc in Physiotherapy, Kenya Medical Training College',
      'MSc in Sports Physiotherapy',
    ],
    languages: ['English', 'Swahili'],
    specialties: ['Sports Injury Rehab', 'Post-Surgical Rehab', 'Manual Pain Therapy'],
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

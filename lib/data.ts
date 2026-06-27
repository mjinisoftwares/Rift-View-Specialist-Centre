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
  'Neurosurgical Clinic and Dermatology Departments and Services',
]

export const specialists: Specialist[] = [
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

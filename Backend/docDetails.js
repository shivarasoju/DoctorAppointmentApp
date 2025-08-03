const extraDoctors = [
  {
    id: "uuid6",
    name: "Dr. Aisha Verma",
    specialization: "Cardiologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753970314/AishaDoctor_ukmmex.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "On Leave" }
    ],
    qualification: "MBBS, MD (Cardiology)",
    experience: "12 years",
    consultation_fee: "₹500",
    hospital_location: "Sunrise Clinic, Banjara Hills, Hyderabad",
    ratings: 4.7
  },
  {
    id: "uuid7",
    name: "Dr. Rohan Das",
    specialization: "Dermatologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971077/RohanDas_ndtpg7.png",
    availability_schedule: [
      { day: "Monday", status: "Fully Booked" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "Fully Booked" },
      { day: "Friday", status: "Fully Booked" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "On Leave" }
    ],
    qualification: "MBBS, DDVL",
    experience: "9 years",
    consultation_fee: "₹400",
    hospital_location: "Apollo Clinic, Jubilee Hills",
    ratings: 4.5
  },
  {
    id: "uuid8",
    name: "Dr. Neha Kapoor",
    specialization: "Neurologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971130/Neha_khihtr.png",
    availability_schedule: [
      { day: "Monday", status: "On Leave" },
      { day: "Tuesday", status: "On Leave" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Fully Booked" },
      { day: "Saturday", status: "Fully Booked" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, DM (Neurology)",
    experience: "11 years",
    consultation_fee: "₹600",
    hospital_location: "Care Hospitals, Hitech City",
    ratings: 4.6
  },
  {
    id: "uuid9",
    name: "Dr. Arjun Mehra",
    specialization: "Orthopedic",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971221/ArjunMehra_do0j3f.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "On Leave" },
      { day: "Thursday", status: "Fully Booked" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "On Leave" }
    ],
    qualification: "MBBS, MS (Orthopedics)",
    experience: "10 years",
    consultation_fee: "₹450",
    hospital_location: "Pulse Clinic, Ameerpet",
    ratings: 4.3
  },
  {
    id: "uuid10",
    name: "Dr. Kavya Nair",
    specialization: "Cardiologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971286/KavyaNair_vdz8ob.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Fully Booked" },
      { day: "Wednesday", status: "Fully Booked" },
      { day: "Thursday", status: "On Leave" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MD (Cardiology)",
    experience: "8 years",
    consultation_fee: "₹500",
    hospital_location: "City Hospital, Hyderabad",
    ratings: 4.4
  },
    {
    id: "uuid11",
    name: "Dr. Imran Khan",
    specialization: "Dermatologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971359/ImranKhan_eefre2.png",
    availability_schedule: [
      { day: "Monday", status: "Fully Booked" },
      { day: "Tuesday", status: "Fully Booked" },
      { day: "Wednesday", status: "On Leave" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "On Leave" }
    ],
    qualification: "MBBS, DDVL",
    experience: "9 years",
    consultation_fee: "₹450",
    hospital_location: "Apollo Clinic, Jubilee Hills",
    ratings: 4.3
  },
  {
    id: "uuid12",
    name: "Dr. Shalini Rao",
    specialization: "Psychiatrist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971402/ShaliniRao_ulcuqy.png",
    availability_schedule: [
      { day: "Monday", status: "On Leave" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "Fully Booked" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "On Leave" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MD (Psychiatry)",
    experience: "14 years",
    consultation_fee: "₹500",
    hospital_location: "City Hospital, Hyderabad",
    ratings: 4.5
  },
  {
    id: "uuid13",
    name: "Dr. Manish Patel",
    specialization: "General Physician",
    profile_image: "https://i.pravatar.cc/150?img=8",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Fully Booked" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "On Leave" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Fully Booked" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MD",
    experience: "10 years",
    consultation_fee: "₹400",
    hospital_location: "Pulse Clinic, Ameerpet",
    ratings: 4.2
  },
  {
    id: "uuid14",
    name: "Dr. Rekha Sinha",
    specialization: "Gynecologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971479/RekhaSinha_b8o3wr.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "On Leave" },
      { day: "Thursday", status: "On Leave" },
      { day: "Friday", status: "Fully Booked" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MS (Gynecology)",
    experience: "13 years",
    consultation_fee: "₹550",
    hospital_location: "Wellness Centre, Secunderabad",
    ratings: 4.6
  },
  {
    id: "uuid15",
    name: "Dr. Alok Reddy",
    specialization: "Pulmonologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971542/AlokReddy_kfbths.png",
    availability_schedule: [
      { day: "Monday", status: "Fully Booked" },
      { day: "Tuesday", status: "On Leave" },
      { day: "Wednesday", status: "On Leave" },
      { day: "Thursday", status: "Fully Booked" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MD (Pulmonology)",
    experience: "11 years",
    consultation_fee: "₹500",
    hospital_location: "Care Hospitals, Hitech City",
    ratings: 4.4
  },
  {
    id: "uuid16",
    name: "Dr. Priya Sharma",
    specialization: "Neurologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971593/PriyaSharma_n9dcxx.png",
    availability_schedule: [
      { day: "Monday", status: "On Leave" },
      { day: "Tuesday", status: "On Leave" },
      { day: "Wednesday", status: "On Leave" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Fully Booked" }
    ],
    qualification: "MBBS, DM (Neurology)",
    experience: "16 years",
    consultation_fee: "₹600",
    hospital_location: "Sunrise Clinic, Banjara Hills",
    ratings: 4.8
  },  {
    id: "uuid17",
    name: "Dr. Nikhil Agarwal",
    specialization: "Cardiologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971645/NikhilYadav_b2uzk8.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "On Leave" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "On Leave" }
    ],
    qualification: "MBBS, MD (Cardiology)",
    experience: "9 years",
    consultation_fee: "₹550",
    hospital_location: "Heart Care Centre, Begumpet",
    ratings: 4.5
  },
  {
    id: "uuid18",
    name: "Dr. Sneha Iyer",
    specialization: "Endocrinologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971691/SnehaIyer_t5gpo3.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "On Leave" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Fully Booked" }
    ],
    qualification: "MBBS, DM (Endocrinology)",
    experience: "10 years",
    consultation_fee: "₹600",
    hospital_location: "Endo Clinic, Banjara Hills",
    ratings: 4.6
  },
  {
    id: "uuid19",
    name: "Dr. Vivek Kumar",
    specialization: "Rheumatologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971743/VivekKumar_f0luuf.png",
    availability_schedule: [
      { day: "Monday", status: "On Leave" },
      { day: "Tuesday", status: "On Leave" },
      { day: "Wednesday", status: "Fully Booked" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Fully Booked" },
      { day: "Sunday", status: "On Leave" }
    ],
    qualification: "MBBS, MD (Rheumatology)",
    experience: "14 years",
    consultation_fee: "₹500",
    hospital_location: "RheumaCare Hospital, Kukatpally",
    ratings: 4.2
  },
  {
    id: "uuid20",
    name: "Dr. Meera Joshi",
    specialization: "Psychiatrist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971825/MeeraJoshi_hya58h.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "On Leave" },
      { day: "Thursday", status: "Fully Booked" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MD (Psychiatry)",
    experience: "13 years",
    consultation_fee: "₹450",
    hospital_location: "MindCare Clinic, Madhapur",
    ratings: 4.4
  },
  {
    id: "uuid21",
    name: "Dr. Lata Menon",
    specialization: "Pulmonologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971871/LataMenon_engrmg.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "On Leave" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Fully Booked" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MD (Pulmonology)",
    experience: "11 years",
    consultation_fee: "₹500",
    hospital_location: "Breath Easy Clinic, Tarnaka",
    ratings: 4.6
  },  {
    id: "uuid22",
    name: "Dr. Rakesh Kaul",
    specialization: "Neurologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971914/RakeshKaul_croebz.png",
    availability_schedule: [
      { day: "Monday", status: "On Leave" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "Fully Booked" },
      { day: "Friday", status: "On Leave" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, DM (Neurology)",
    experience: "12 years",
    consultation_fee: "₹600",
    hospital_location: "Neuro Health Centre, Gachibowli",
    ratings: 4.6
  },
  {
    id: "uuid23",
    name: "Dr. Jaya Prasad",
    specialization: "Gynecologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753971965/JayaPrasad_czqebx.png",
    availability_schedule: [
      { day: "Monday", status: "Fully Booked" },
      { day: "Tuesday", status: "On Leave" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "On Leave" },
      { day: "Saturday", status: "Fully Booked" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MS (Gynecology)",
    experience: "14 years",
    consultation_fee: "₹500",
    hospital_location: "Women's Wellness Center, Himayatnagar",
    ratings: 4.3
  },
  {
    id: "uuid24",
    name: "Dr. Yusuf Khan",
    specialization: "General Physician",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753972052/YusufKhan_ltumun.png",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "Fully Booked" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "On Leave" }
    ],
    qualification: "MBBS, MD",
    experience: "10 years",
    consultation_fee: "₹400",
    hospital_location: "HealthFirst Clinic, Koti",
    ratings: 4.4
  },
  {
    id: "uuid25",
    name: "Dr. Trisha Dey",
    specialization: "Endocrinologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753972213/TrishaDey_v3nycr.jpg",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Available Today" },
      { day: "Wednesday", status: "On Leave" },
      { day: "Thursday", status: "Fully Booked" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "Available Today" },
      { day: "Sunday", status: "Fully Booked" }
    ],
    qualification: "MBBS, DM (Endocrinology)",
    experience: "9 years",
    consultation_fee: "₹600",
    hospital_location: "EndoCare Hospital, Panjagutta",
    ratings: 4.5
  },
  {
    id: "uuid26",
    name: "Dr. Saloni Jain",
    specialization: "Dermatologist",
    profile_image: "https://res.cloudinary.com/djynsag8d/image/upload/v1753972267/SaloniJain_y37094.jpg",
    availability_schedule: [
      { day: "Monday", status: "Available Today" },
      { day: "Tuesday", status: "Fully Booked" },
      { day: "Wednesday", status: "Available Today" },
      { day: "Thursday", status: "Available Today" },
      { day: "Friday", status: "Available Today" },
      { day: "Saturday", status: "On Leave" },
      { day: "Sunday", status: "Available Today" }
    ],
    qualification: "MBBS, MD (Dermatology)",
    experience: "8 years",
    consultation_fee: "₹500",
    hospital_location: "SkinGlow Clinic, SR Nagar",
    ratings: 4.7
  }
];

module.exports=extraDoctors
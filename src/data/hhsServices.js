const allServices = [
  {
    division: "Family and Child",
    id: "Family-and-Child",
    title: "Family and Child",
    description:
      "Families are the core of society, and we help you protect and nurture yours. Whether through family preservation services, child welfare interventions, or supportive programs, let's explore how we can support your family’s unique needs.",
    options: [
      { label: "Family Preservation", next: "Family-Preservation" },
      { label: "Foster Care", next: "Foster-Care" },
      { label: "Adoption Services", next: "Adoption-Services" },
      { label: "Child Protective Services (CPS)", next: "CPS" },
    ],
  },
  {
    division: "Family and Child",
    id: "Family-Preservation",
    title: "Family Preservation Services",
    description:
      "Family Preservation Services focus on keeping families together when safe and possible. These services aim to prevent child removal from the home by offering counseling, in-home support, and resources to address the challenges families face.",
    options: [
      { label: "Parenting Classes", next: "Parenting-Classes" },
      { label: "In-Home Support", next: "In-Home-Support" },
      {
        label: "Substance Abuse Counseling",
        next: "Substance-Abuse-Counseling",
      },
      { label: "Family Therapy", next: "Family-Therapy" },
    ],
  },
  {
    division: "Family and Child",
    id: "Foster-Care",
    title: "Foster Care",
    description:
      "When children cannot safely remain at home, foster care provides a temporary, nurturing environment. Our goal is to reunite families when possible or to provide a stable, loving home through long-term care.",
    options: [
      {
        label: "Temporary Foster Placement",
        next: "Temporary-Foster-Placement",
      },
      { label: "Therapeutic Foster Care", next: "Therapeutic-Foster-Care" },
      { label: "Family Reunification", next: "Family-Reunification" },
      {
        label: "Independent Living Programs (for older youth)",
        next: "Independent-Living-Programs",
      },
    ],
  },
  {
    division: "Family and Child",
    id: "Adoption-Services",
    title: "Adoption Services",
    description:
      "Adoption Services help children find permanent homes when reunification with their biological families is not an option. We support both the child and the adoptive family throughout this life-changing process.",
    options: [
      { label: "Adoption Counseling", next: "Adoption-Counseling" },
      { label: "Adoptive Parent Support", next: "Adoptive-Parent-Support" },
      { label: "Legal Assistance for Adoption", next: "Legal-Assistance" },
    ],
  },
  {
    division: "Family and Child",
    id: "CPS",
    title: "Child Protective Services (CPS)",
    description:
      "Child Protective Services investigate cases of child abuse and neglect, working to ensure the safety of children. When necessary, CPS steps in to offer protective services and initiate court actions if needed.",
    options: [
      { label: "Safety Planning", next: "Safety-Planning" },
      { label: "Court-Ordered Supervision", next: "Court-Ordered-Supervision" },
      { label: "Emergency Removal", next: "Emergency-Removal" },
    ],
  },
  // Example Sub-options
  {
    division: "Family and Child",
    id: "Parenting-Classes",
    title: "Parenting Classes",
    description:
      "These classes offer guidance on effective parenting techniques, addressing topics such as discipline, communication, and creating a nurturing home environment.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "In-Home-Support",
    title: "In-Home Support",
    description:
      "We provide assistance directly in the home to help families overcome obstacles. This includes mentoring, case management, and connecting families with local resources.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Substance-Abuse-Counseling",
    title: "Substance Abuse Counseling",
    description:
      "Support services for families where substance abuse is a factor. This includes individual and family counseling as well as connections to treatment programs.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Family-Therapy",
    title: "Family Therapy",
    description:
      "Professional therapy sessions designed to improve family dynamics, address trauma, and develop healthier communication and relationships.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Temporary-Foster-Placement",
    title: "Temporary Foster Placement",
    description:
      "Temporary care provided for children when the family is undergoing court proceedings or addressing issues at home. Foster families provide a stable environment for children during this time.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Therapeutic-Foster-Care",
    title: "Therapeutic Foster Care",
    description:
      "Therapeutic Foster Care provides specialized services for children with emotional or behavioral challenges who need a higher level of care.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Family-Reunification",
    title: "Family Reunification",
    description:
      "Services and resources designed to help families reunite after a child has been placed in foster care, with the goal of creating a safe and stable home environment.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Independent-Living-Programs",
    title: "Independent Living Programs",
    description:
      "For older youth aging out of foster care, these programs provide life skills training, educational support, and housing assistance to help them transition to adulthood.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Adoption-Counseling",
    title: "Adoption Counseling",
    description:
      "Counseling services for both children and prospective adoptive families to ensure a smooth transition into an adoptive family.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Adoptive-Parent-Support",
    title: "Adoptive Parent Support",
    description:
      "Ongoing support and resources for adoptive parents, including peer support groups and counseling services.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Legal-Assistance",
    title: "Legal Assistance for Adoption",
    description:
      "Help with navigating the legal aspects of the adoption process, including court documentation and proceedings.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Safety-Planning",
    title: "Safety Planning",
    description:
      "Working with families to develop a plan that ensures the child’s safety while keeping the family intact whenever possible.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Court-Ordered-Supervision",
    title: "Court-Ordered Supervision",
    description:
      "Supervision services mandated by the court to monitor the family’s progress and ensure compliance with court-ordered services.",
    options: [],
  },
  {
    division: "Family and Child",
    id: "Emergency-Removal",
    title: "Emergency Removal",
    description:
      "In cases of imminent danger, CPS may remove the child from the home and place them in protective custody.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Youth-Services",
    title: "Youth Services",
    description:
      "In a time when life feels like a maze, you are taking the first step towards finding a path. Our services help youth navigate challenges through support, guidance, and meaningful interventions. The next phase of your story starts here.",
    options: [
      { label: "Commitment", next: "Commitment" },
      { label: "CBP Referral", next: "CBPReferral" },
      { label: "Juvenile Probation", next: "Juvenile-Probation" },
      {
        label: "Community-Based Programs (CBP)",
        next: "Community-Based-Programs",
      },
      { label: "Mentoring", next: "Mentoring" },
    ],
  },
  {
    division: "Youth Services",
    id: "Commitment",
    title: "Commitment Services",
    description:
      "Commitment services involve court-ordered programs for youth who have been adjudicated delinquent. We offer residential placements, counseling, and educational opportunities to help youth reintegrate into society.",
    options: [
      { label: "Residential Facility", next: "Residential-Facility" },
      { label: "Aftercare Program", next: "Aftercare-Program" },
      { label: "Behavioral Therapy", next: "Behavioral-Therapy" },
    ],
  },
  {
    division: "Youth Services",
    id: "CBPReferral",
    title: "Community-Based Program Referral",
    description:
      "Referrals to Community-Based Programs (CBP) offer alternatives to detention by engaging youth in services that address their individual needs while keeping them within the community.",
    options: [
      { label: "Family Counseling", next: "Family-Counseling" },
      { label: "Substance Abuse Treatment", next: "Substance-Abuse-Treatment" },
      { label: "Vocational Training", next: "Vocational-Training" },
    ],
  },
  {
    division: "Youth Services",
    id: "Juvenile-Probation",
    title: "Juvenile Probation",
    description:
      "Juvenile probation offers youth a chance to remain in the community while adhering to court-ordered conditions. This includes regular check-ins, school attendance, and community service.",
    options: [
      { label: "Regular Probation Check-Ins", next: "Probation-Check-Ins" },
      { label: "School Attendance Monitoring", next: "School-Monitoring" },
      { label: "Community Service", next: "Community-Service" },
    ],
  },
  {
    division: "Youth Services",
    id: "Community-Based-Programs",
    title: "Community-Based Programs (CBP)",
    description:
      "CBP services focus on preventing juvenile delinquency and keeping youth out of residential placement by offering structured activities, counseling, and educational support within their community.",
    options: [
      { label: "Anger Management Classes", next: "Anger-Management" },
      { label: "Educational Support", next: "Educational-Support" },
      { label: "Recreational Programs", next: "Recreational-Programs" },
    ],
  },
  {
    division: "Youth Services",
    id: "Mentoring",
    title: "Youth Mentoring",
    description:
      "Mentoring connects at-risk youth with positive adult role models who provide guidance, encouragement, and support to help them overcome challenges and achieve their personal goals.",
    options: [
      { label: "One-on-One Mentoring", next: "One-on-One-Mentoring" },
      { label: "Group Mentoring", next: "Group-Mentoring" },
      { label: "Life Skills Coaching", next: "Life-Skills-Coaching" },
    ],
  },
  // Example sub-options for commitment and community-based services
  {
    division: "Youth Services",
    id: "Residential-Facility",
    title: "Residential Facility",
    description:
      "Residential facilities provide structured, secure environments where youth can receive treatment and education while addressing behavioral issues that led to court involvement.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Aftercare-Program",
    title: "Aftercare Program",
    description:
      "Aftercare programs support youth transitioning out of residential facilities, offering counseling, job training, and community support to prevent recidivism.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Behavioral-Therapy",
    title: "Behavioral Therapy",
    description:
      "Behavioral therapy focuses on helping youth manage anger, improve communication skills, and develop positive decision-making strategies.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Family-Counseling",
    title: "Family Counseling",
    description:
      "Family counseling services work with the youth and their family to improve relationships, resolve conflicts, and create a more supportive home environment.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Substance-Abuse-Treatment",
    title: "Substance Abuse Treatment",
    description:
      "Specialized services for youth struggling with drug or alcohol abuse, providing counseling, group therapy, and outpatient treatment options.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Vocational-Training",
    title: "Vocational Training",
    description:
      "Vocational programs equip youth with practical skills and job training to help them secure employment and build a path to a brighter future.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Probation-Check-Ins",
    title: "Regular Probation Check-Ins",
    description:
      "Youth are required to meet with a probation officer regularly to ensure they are complying with the terms set by the court.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "School-Monitoring",
    title: "School Attendance Monitoring",
    description:
      "Youth on probation must attend school regularly, with their attendance being monitored by their probation officer.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Community-Service",
    title: "Community Service",
    description:
      "Youth are given opportunities to contribute to their community through volunteer work as part of their rehabilitation process.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Anger-Management",
    title: "Anger Management Classes",
    description:
      "Programs designed to help youth understand their anger, develop coping mechanisms, and improve emotional regulation.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Educational-Support",
    title: "Educational Support",
    description:
      "Tutoring and academic support services to help youth stay engaged in school and work towards graduation or GED completion.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Recreational-Programs",
    title: "Recreational Programs",
    description:
      "Structured recreational activities that promote teamwork, build self-esteem, and provide positive outlets for youth.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "One-on-One-Mentoring",
    title: "One-on-One Mentoring",
    description:
      "Youth are paired with a mentor who provides individualized support and guidance to help them navigate personal and academic challenges.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Group-Mentoring",
    title: "Group Mentoring",
    description:
      "Mentoring programs that bring youth together in group settings, fostering peer support and positive social interactions.",
    options: [],
  },
  {
    division: "Youth Services",
    id: "Life-Skills-Coaching",
    title: "Life Skills Coaching",
    description:
      "Youth are taught essential life skills such as time management, financial literacy, and decision-making to help them transition into adulthood.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Medical-Services",
    title: "Medical Services",
    description:
      "Your health is your lifeline, and we’re here to make sure you get the care you need. Whether you’re seeking routine medical care, specialized treatments, or long-term support, this is your pathway to wellness.",
    options: [
      { label: "Medicaid", next: "Medicaid" },
      { label: "Prescription Assistance", next: "Prescription-Assistance" },
      { label: "Doctor Visit", next: "Doctor-Visit" },
      { label: "Mental Health Services", next: "Mental-Health-Services" },
      { label: "Long-Term Care", next: "Long-Term-Care" },
    ],
  },
  {
    division: "Medical-Services",
    id: "Medicaid",
    title: "Medicaid Services",
    description:
      "Medicaid is a state and federal program that helps low-income individuals and families afford medical care. From routine checkups to specialist visits, Medicaid has you covered.",
    options: [
      { label: "Eligibility Check", next: "Eligibility-Check" },
      { label: "Application Assistance", next: "Application-Assistance" },
      { label: "Medicaid Managed Care", next: "Medicaid-Managed-Care" },
    ],
  },
  {
    division: "Medical-Services",
    id: "Prescription-Assistance",
    title: "Prescription Assistance",
    description:
      "Ensuring access to necessary medications is vital for managing your health. Whether you need help paying for prescriptions or understanding your medication options, we’re here to assist.",
    options: [
      { label: "Low-Cost Prescriptions", next: "Low-Cost-Prescriptions" },
      { label: "Pharmacy Finder", next: "Pharmacy-Finder" },
      {
        label: "Medication Therapy Management",
        next: "Medication-Therapy-Management",
      },
    ],
  },
  {
    division: "Medical-Services",
    id: "Doctor-Visit",
    title: "Doctor Visits",
    description:
      "Sometimes, you need a professional to check in on your health. Whether it's routine or specialized care, we can help you find the right doctor for your needs.",
    options: [
      { label: "Primary Care Physician", next: "Primary-Care" },
      { label: "Specialist Visit", next: "Specialist-Visit" },
      { label: "Telemedicine", next: "Telemedicine" },
    ],
  },
  {
    division: "Medical-Services",
    id: "Mental-Health-Services",
    title: "Mental Health Services",
    description:
      "Your mental health is just as important as your physical health. From therapy to psychiatric care, find the mental health resources you need to live your best life.",
    options: [
      { label: "Counseling", next: "Counseling" },
      { label: "Psychiatric Evaluation", next: "Psychiatric-Evaluation" },
      {
        label: "Substance Abuse Counseling",
        next: "Substance-Abuse-Counseling",
      },
    ],
  },
  {
    division: "Medical-Services",
    id: "Long-Term-Care",
    title: "Long-Term Care",
    description:
      "Long-term care services provide assistance with everyday activities, ensuring individuals can live with dignity and receive the support they need.",
    options: [
      { label: "Nursing Home Placement", next: "Nursing-Home-Placement" },
      { label: "In-Home Care", next: "In-Home-Care" },
      { label: "Assisted Living", next: "Assisted-Living" },
    ],
  },
  {
    division: "Medical-Services",
    id: "Eligibility-Check",
    title: "Medicaid Eligibility Check",
    description:
      "Find out if you qualify for Medicaid benefits based on your income, family size, and medical needs.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Application-Assistance",
    title: "Medicaid Application Assistance",
    description:
      "Need help navigating the Medicaid application process? We’ll guide you through every step, from gathering documents to submitting your application.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Medicaid-Managed-Care",
    title: "Medicaid Managed Care",
    description:
      "Once approved for Medicaid, you may need to choose a managed care plan that fits your health needs. Learn about your options here.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Low-Cost-Prescriptions",
    title: "Low-Cost Prescriptions",
    description:
      "We work with pharmacies and drug manufacturers to ensure you can get the medications you need at an affordable price.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Pharmacy-Finder",
    title: "Pharmacy Finder",
    description:
      "Looking for a pharmacy nearby? Let us help you find one that accepts your insurance and offers affordable prices.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Medication-Therapy-Management",
    title: "Medication Therapy Management",
    description:
      "Managing multiple medications can be tough. Our program helps you ensure that all your medications work well together for your health.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Primary-Care",
    title: "Primary Care Physician",
    description:
      "Your primary care physician is your go-to for checkups, preventive care, and general health management.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Specialist-Visit",
    title: "Specialist Visit",
    description:
      "For more specific health concerns, we can help you schedule visits with specialists in areas like cardiology, orthopedics, and more.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Telemedicine",
    title: "Telemedicine",
    description:
      "Need a doctor, but can’t make it to an office? Telemedicine allows you to consult with healthcare providers over the phone or via video chat.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Counseling",
    title: "Counseling",
    description:
      "Mental health counseling helps you talk through challenges, build coping skills, and improve your emotional wellbeing.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Psychiatric-Evaluation",
    title: "Psychiatric Evaluation",
    description:
      "A comprehensive psychiatric evaluation helps diagnose mental health conditions and develop treatment plans.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Substance-Abuse-Counseling",
    title: "Substance Abuse Counseling",
    description:
      "Our counselors help individuals struggling with substance use disorder regain control of their lives through therapy and support.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Nursing-Home-Placement",
    title: "Nursing Home Placement",
    description:
      "For individuals who need 24-hour care, we assist in finding the right nursing home where they can receive full-time support.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "In-Home-Care",
    title: "In-Home Care",
    description:
      "In-home care services provide assistance with daily activities in the comfort of your own home, allowing you to live as independently as possible.",
    options: [],
  },
  {
    division: "Medical-Services",
    id: "Assisted-Living",
    title: "Assisted Living",
    description:
      "Assisted living facilities offer a supportive environment for those who need help with everyday activities but don’t require full-time nursing care.",
    options: [],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Aging-and-Adult-Services",
    title: "Aging and Adult Services",
    description:
      "Aging is a journey, and no one should face it alone. Whether you’re looking for housing, in-home care, or protection, we’re here to ensure you have the support you need at every step.",
    options: [
      { label: "In-Home Care", next: "In-Home-Care" },
      { label: "Nursing Home Services", next: "Nursing-Home-Services" },
      { label: "Adult Protective Services", next: "Adult-Protective-Services" },
      { label: "Housing Assistance", next: "Housing-Assistance" },
      { label: "Elder Rights", next: "Elder-Rights" },
    ],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "In-Home-Care",
    title: "In-Home Care",
    description:
      "In-home care services help older adults or disabled individuals live independently by assisting with daily tasks, healthcare, and personal care in the comfort of their homes.",
    options: [
      { label: "Personal Care", next: "Personal-Care" },
      { label: "Homemaker Services", next: "Homemaker-Services" },
      { label: "Meal Delivery", next: "Meal-Delivery" },
    ],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Nursing-Home-Services",
    title: "Nursing Home Services",
    description:
      "Nursing homes provide full-time medical and personal care to those who require constant support. We help you find the right facility for long-term care.",
    options: [
      { label: "Nursing Home Placement", next: "Nursing-Home-Placement" },
      { label: "Long-Term Care Ombudsman", next: "Long-Term-Care-Ombudsman" },
    ],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Adult-Protective-Services",
    title: "Adult Protective Services (APS)",
    description:
      "APS helps protect vulnerable adults from abuse, neglect, or exploitation. If you or a loved one is at risk, APS will step in to investigate and provide safety resources.",
    options: [
      { label: "Report Abuse", next: "Report-Abuse" },
      { label: "Emergency Intervention", next: "Emergency-Intervention" },
    ],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Housing-Assistance",
    title: "Housing Assistance",
    description:
      "Housing is a basic need, and we help ensure older adults have access to affordable, safe living environments. Whether it’s senior apartments or rental assistance, housing help is available.",
    options: [
      { label: "Senior Housing", next: "Senior-Housing" },
      { label: "Rental Assistance", next: "Rental-Assistance" },
    ],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Elder-Rights",
    title: "Elder Rights Advocacy",
    description:
      "Older adults deserve to live with dignity, free from discrimination or exploitation. Our elder rights services provide education, advocacy, and legal support for seniors.",
    options: [
      { label: "Legal Aid", next: "Legal-Aid" },
      { label: "Rights Education", next: "Rights-Education" },
    ],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Personal-Care",
    title: "Personal Care",
    description:
      "Personal care aides assist with tasks like bathing, dressing, and mobility, ensuring individuals can remain in their own homes with dignity.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Homemaker-Services",
    title: "Homemaker Services",
    description:
      "Homemaker services provide help with light household duties, such as cleaning, laundry, and meal preparation, to maintain a safe and healthy home environment.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Meal-Delivery",
    title: "Meal Delivery",
    description:
      "Meal delivery programs ensure older adults receive nutritious meals regularly, helping them stay healthy and nourished, even when they can’t cook for themselves.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Nursing-Home-Placement",
    title: "Nursing Home Placement",
    description:
      "Our team assists in finding the right nursing home for individuals who need full-time care, making sure their medical and personal needs are met.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Long-Term-Care-Ombudsman",
    title: "Long-Term Care Ombudsman",
    description:
      "The Long-Term Care Ombudsman advocates for the rights of nursing home residents, ensuring their concerns are heard and addressed, and their quality of care is upheld.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Report-Abuse",
    title: "Report Adult Abuse or Neglect",
    description:
      "If you suspect abuse, neglect, or exploitation of an older or disabled adult, report it to Adult Protective Services. We’ll investigate and ensure the individual’s safety.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Emergency-Intervention",
    title: "Emergency Intervention",
    description:
      "In cases of immediate danger, Adult Protective Services will take emergency steps to protect vulnerable adults from harm.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Senior-Housing",
    title: "Senior Housing",
    description:
      "Senior housing offers safe, affordable living spaces designed specifically for older adults, allowing them to live independently with access to community services.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Rental-Assistance",
    title: "Rental Assistance",
    description:
      "We provide rental assistance to help older adults and those with disabilities maintain stable housing, ensuring they can live in a safe and secure environment.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Legal-Aid",
    title: "Legal Aid for Seniors",
    description:
      "Legal aid services help older adults navigate issues such as estate planning, guardianship, and protection from exploitation or discrimination.",
    options: [],
  },
  {
    division: "Aging-and-Adult-Services",
    id: "Rights-Education",
    title: "Elder Rights Education",
    description:
      "Learn about your rights as an older adult, including protection from discrimination, abuse, and fraud. We provide the resources you need to live with dignity and respect.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Developmental-Disabilities",
    title: "Developmental Disabilities",
    description:
      "Every individual deserves the opportunity to live a fulfilling life. Our services empower those with developmental disabilities to thrive in their communities, offering tailored support at every stage.",
    options: [
      { label: "Early Intervention", next: "Early-Intervention" },
      { label: "Community Living", next: "Community-Living" },
      { label: "Employment Support", next: "Employment-Support" },
      { label: "Family Support", next: "Family-Support" },
    ],
  },
  {
    division: "Developmental-Disabilities",
    id: "Early-Intervention",
    title: "Early Intervention",
    description:
      "Early intervention services are designed to help infants and toddlers with developmental delays or disabilities reach key developmental milestones through specialized therapies and support.",
    options: [
      { label: "Speech Therapy", next: "Speech-Therapy" },
      { label: "Occupational Therapy", next: "Occupational-Therapy" },
      { label: "Physical Therapy", next: "Physical-Therapy" },
    ],
  },
  {
    division: "Developmental-Disabilities",
    id: "Community-Living",
    title: "Community Living",
    description:
      "We believe in fostering independence and community integration for individuals with disabilities. Community living programs offer housing support, skills training, and resources to ensure they can live independently or in a supportive environment.",
    options: [
      { label: "Group Homes", next: "Group-Homes" },
      { label: "Supported Living", next: "Supported-Living" },
      { label: "Independent Living", next: "Independent-Living" },
    ],
  },
  {
    division: "Developmental-Disabilities",
    id: "Employment-Support",
    title: "Employment Support",
    description:
      "Employment is a key part of inclusion. We provide vocational training, job placement, and on-the-job support for individuals with developmental disabilities to help them build meaningful careers.",
    options: [
      { label: "Vocational Training", next: "Vocational-Training" },
      { label: "Job Coaching", next: "Job-Coaching" },
      { label: "Workplace Accommodations", next: "Workplace-Accommodations" },
    ],
  },
  {
    division: "Developmental-Disabilities",
    id: "Family-Support",
    title: "Family Support",
    description:
      "Supporting a family member with developmental disabilities comes with unique challenges. Our family support services offer guidance, financial assistance, and respite care to ensure families can provide the best care possible.",
    options: [
      { label: "Respite Care", next: "Respite-Care" },
      { label: "Caregiver Support", next: "Caregiver-Support" },
      { label: "Financial Assistance", next: "Financial-Assistance" },
    ],
  },
  {
    division: "Developmental-Disabilities",
    id: "Speech-Therapy",
    title: "Speech Therapy",
    description:
      "Speech therapy helps individuals with developmental disabilities improve communication skills, enabling them to express themselves and interact more effectively.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Occupational-Therapy",
    title: "Occupational Therapy",
    description:
      "Occupational therapy focuses on improving fine motor skills, coordination, and daily living activities, helping individuals with disabilities lead more independent lives.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Physical-Therapy",
    title: "Physical Therapy",
    description:
      "Physical therapy assists individuals in developing or recovering movement and mobility, essential for those with physical challenges associated with developmental disabilities.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Group-Homes",
    title: "Group Homes",
    description:
      "Group homes provide shared living spaces with support staff, ensuring that individuals with disabilities receive the care they need while also promoting social interaction and independence.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Supported-Living",
    title: "Supported Living",
    description:
      "Supported living programs offer assistance with daily living activities, helping individuals live in their own homes or apartments with the necessary support services to ensure their safety and independence.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Independent-Living",
    title: "Independent Living",
    description:
      "For those capable of living independently, this service provides the skills training, community resources, and support they need to manage a household and fully participate in their communities.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Vocational-Training",
    title: "Vocational Training",
    description:
      "Vocational training prepares individuals for employment by teaching them job-specific skills, improving their ability to find meaningful work and participate in the workforce.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Job-Coaching",
    title: "Job Coaching",
    description:
      "Job coaches provide one-on-one assistance to individuals with disabilities, helping them adapt to workplace environments and perform job tasks successfully.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Workplace-Accommodations",
    title: "Workplace Accommodations",
    description:
      "Workplace accommodations ensure that individuals with developmental disabilities can perform their jobs by providing necessary adjustments, like modified workstations or flexible hours.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Respite-Care",
    title: "Respite Care",
    description:
      "Respite care gives families a temporary break by providing short-term care for individuals with disabilities, ensuring that caregivers have the time to rest and recharge.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Caregiver-Support",
    title: "Caregiver Support",
    description:
      "Caregiver support services offer training, counseling, and resources to help families better care for individuals with disabilities, promoting well-being for both caregivers and their loved ones.",
    options: [],
  },
  {
    division: "Developmental-Disabilities",
    id: "Financial-Assistance",
    title: "Financial Assistance",
    description:
      "Financial assistance programs help cover the costs associated with caring for a family member with developmental disabilities, offering support for medical expenses, in-home care, and more.",
    options: [],
  },
];

export default allServices;

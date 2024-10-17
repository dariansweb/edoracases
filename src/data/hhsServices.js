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
    options: [
      {
        label: "Basics of Parenting",
        next: "Basics-of-Parenting",
      },
      {
        label: "Effective Communication Skills",
        next: "Effective-Communication-Skills",
      },
      {
        label: "Positive Discipline Techniques",
        next: "Positive-Discipline-Techniques",
      },
      {
        label: "Creating a Safe Home Environment",
        next: "Creating-a-Safe-Home-Environment",
      },
      {
        label: "Understanding Child Development",
        next: "Understanding-Child-Development",
      },
      {
        label: "Building Strong Parent-Child Relationships",
        next: "Building-Strong-Parent-Child-Relationships",
      },
      {
        label: "Managing Stress as a Parent",
        next: "Managing-Stress-as-a-Parent",
      },
      {
        label: "Support Groups for Parents",
        next: "Support-Groups-for-Parents",
      },
    ],
  },
  {
    division: "Family and Child",
    id: "In-Home-Support",
    title: "In-Home Support",
    description:
      "We provide assistance directly in the home to help families overcome obstacles. This includes mentoring, case management, and connecting families with local resources.",
    options: [
      {
        label: "Home Safety Assessments",
        next: "Home-Safety-Assessments",
      },
      {
        label: "Family Mentorship Programs",
        next: "Family-Mentorship-Programs",
      },
      {
        label: "Individual Case Management",
        next: "Individual-Case-Management",
      },
      {
        label: "Resource Navigation Assistance",
        next: "Resource-Navigation-Assistance",
      },
      {
        label: "Parenting Support at Home",
        next: "Parenting-Support-at-Home",
      },
      {
        label: "Crisis Intervention Services",
        next: "Crisis-Intervention-Services",
      },
      {
        label: "Assistance with Daily Living Skills",
        next: "Assistance-with-Daily-Living-Skills",
      },
      {
        label: "Connecting to Community Services",
        next: "Connecting-to-Community-Services",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Substance-Abuse-Counseling",
    title: "Substance Abuse Counseling",
    description:
      "Support services for families where substance abuse is a factor. This includes individual and family counseling as well as connections to treatment programs.",
    options: [
      {
        label: "Individual Counseling Sessions",
        next: "Individual-Counseling-Sessions",
      },
      {
        label: "Family Counseling Sessions",
        next: "Family-Counseling-Sessions",
      },
      {
        label: "Support Groups for Families",
        next: "Support-Groups-for-Families",
      },
      {
        label: "Substance Abuse Assessment and Evaluation",
        next: "Substance-Abuse-Assessment",
      },
      {
        label: "Referrals to Treatment Programs",
        next: "Referrals-to-Treatment-Programs",
      },
      {
        label: "Relapse Prevention Strategies",
        next: "Relapse-Prevention-Strategies",
      },
      {
        label: "Education on Substance Abuse Effects",
        next: "Education-on-Substance-Abuse-Effects",
      },
      {
        label: "Crisis Intervention Services",
        next: "Crisis-Intervention-Services",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Family-Therapy",
    title: "Family Therapy",
    description:
      "Professional therapy sessions designed to improve family dynamics, address trauma, and develop healthier communication and relationships.",
    options: [
      {
        label: "Initial Family Assessment",
        next: "Initial-Family-Assessment",
      },
      {
        label: "Crisis Resolution Strategies",
        next: "Crisis-Resolution-Strategies",
      },
      {
        label: "Trauma-Informed Care Techniques",
        next: "Trauma-Informed-Care-Techniques",
      },
      {
        label: "Communication Skills Workshops",
        next: "Communication-Skills-Workshops",
      },
      {
        label: "Conflict Resolution Sessions",
        next: "Conflict-Resolution-Sessions",
      },
      {
        label: "Strength-Based Family Interventions",
        next: "Strength-Based-Family-Interventions",
      },
      {
        label: "Psychoeducation for Families",
        next: "Psychoeducation-for-Families",
      },
      {
        label: "Family Fun and Bonding Activities",
        next: "Family-Fun-and-Bonding-Activities",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Temporary-Foster-Placement",
    title: "Temporary Foster Placement",
    description:
      "Temporary care provided for children when the family is undergoing court proceedings or addressing issues at home. Foster families provide a stable environment for children during this time.",
    options: [
      {
        label: "Foster Family Orientation Program",
        next: "Foster-Family-Orientation-Program",
      },
      {
        label: "Emergency Placement Procedures",
        next: "Emergency-Placement-Procedures",
      },
      {
        label: "Family Reunification Planning",
        next: "Family-Reunification-Planning",
      },
      {
        label: "Child Support Services",
        next: "Child-Support-Services",
      },
      {
        label: "Counseling for Children in Care",
        next: "Counseling-for-Children-in-Care",
      },
      {
        label: "Educational Support for Foster Children",
        next: "Educational-Support-for-Foster-Children",
      },
      {
        label: "Life Skills Development Workshops",
        next: "Life-Skills-Development-Workshops",
      },
      {
        label: "Transitional Support Services",
        next: "Transitional-Support-Services",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Therapeutic-Foster-Care",
    title: "Therapeutic Foster Care",
    description:
      "Therapeutic Foster Care provides specialized services for children with emotional or behavioral challenges who need a higher level of care.",
    options: [
      {
        label: "Behavioral Intervention Plans",
        next: "Behavioral-Intervention-Plans",
      },
      {
        label: "Individual Counseling Services",
        next: "Individual-Counseling-Services",
      },
      {
        label: "Family Therapy Sessions",
        next: "Family-Therapy-Sessions",
      },
      {
        label: "Crisis Intervention Support",
        next: "Crisis-Intervention-Support",
      },
      {
        label: "Educational Advocacy Programs",
        next: "Educational-Advocacy-Programs",
      },
      {
        label: "Therapeutic Recreation Activities",
        next: "Therapeutic-Recreation-Activities",
      },
      {
        label: "Medication Management Services",
        next: "Medication-Management-Services",
      },
      {
        label: "Life Skills Training",
        next: "Life-Skills-Training",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Family-Reunification",
    title: "Family Reunification",
    description:
      "Services and resources designed to help families reunite after a child has been placed in foster care, with the goal of creating a safe and stable home environment.",
    options: [
      {
        label: "Reunification Case Management",
        next: "Reunification-Case-Management",
      },
      {
        label: "Parenting Skills Workshops",
        next: "Parenting-Skills-Workshops",
      },
      {
        label: "Family Mediation Services",
        next: "Family-Mediation-Services",
      },
      {
        label: "Home Assessment and Safety Planning",
        next: "Home-Assessment-Safety-Planning",
      },
      {
        label: "Support Groups for Parents",
        next: "Support-Groups-For-Parents",
      },
      {
        label: "Substance Abuse Recovery Programs",
        next: "Substance-Abuse-Recovery-Programs",
      },
      {
        label: "Counseling for Family Dynamics",
        next: "Counseling-For-Family-Dynamics",
      },
      {
        label: "Resource Connection for Housing and Employment",
        next: "Resource-Connection-Housing-Employment",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Independent-Living-Programs",
    title: "Independent Living Programs",
    description:
      "For older youth aging out of foster care, these programs provide life skills training, educational support, and housing assistance to help them transition to adulthood.",
    options: [
      {
        label: "Life Skills Training Workshops",
        next: "Life-Skills-Training-Workshops",
      },
      {
        label: "Job Readiness Programs",
        next: "Job-Readiness-Programs",
      },
      {
        label: "Financial Literacy Education",
        next: "Financial-Literacy-Education",
      },
      {
        label: "Educational Tutoring and Support",
        next: "Educational-Tutoring-Support",
      },
      {
        label: "Housing Placement Assistance",
        next: "Housing-Placement-Assistance",
      },
      {
        label: "Peer Mentorship Programs",
        next: "Peer-Mentorship-Programs",
      },
      {
        label: "Mental Health Counseling",
        next: "Mental-Health-Counseling",
      },
      {
        label: "Health and Wellness Resources",
        next: "Health-Wellness-Resources",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Adoption-Counseling",
    title: "Adoption Counseling",
    description:
      "Counseling services for both children and prospective adoptive families to ensure a smooth transition into an adoptive family.",
    options: [
      {
        label: "Pre-Adoption Counseling",
        next: "Pre-Adoption-Counseling",
      },
      {
        label: "Post-Adoption Support Groups",
        next: "Post-Adoption-Support-Groups",
      },
      {
        label: "Family Dynamics Workshops",
        next: "Family-Dynamics-Workshops",
      },
      {
        label: "Attachment and Bonding Sessions",
        next: "Attachment-Bonding-Sessions",
      },
      {
        label: "Educational Resources for Adoptive Parents",
        next: "Educational-Resources-Adoptive-Parents",
      },
      {
        label: "Individual Counseling for Children",
        next: "Individual-Counseling-for-Children",
      },
      {
        label: "Cultural Sensitivity Training",
        next: "Cultural-Sensitivity-Training",
      },
      {
        label: "Crisis Intervention Services",
        next: "Crisis-Intervention-Services",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Adoptive-Parent-Support",
    title: "Adoptive Parent Support",
    description:
      "Ongoing support and resources for adoptive parents, including peer support groups and counseling services.",
    options: [
      {
        label: "Peer Support Groups",
        next: "Peer-Support-Groups",
      },
      {
        label: "Monthly Parenting Workshops",
        next: "Monthly-Parenting-Workshops",
      },
      {
        label: "One-on-One Counseling Sessions",
        next: "One-on-One-Counseling-Sessions",
      },
      {
        label: "Resource Library Access",
        next: "Resource-Library-Access",
      },
      {
        label: "Crisis Management Support",
        next: "Crisis-Management-Support",
      },
      {
        label: "Family Fun Events",
        next: "Family-Fun-Events",
      },
      {
        label: "Educational Webinars on Adoption Topics",
        next: "Educational-Webinars-Adoption",
      },
      {
        label: "Respite Care Options",
        next: "Respite-Care-Options",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Legal-Assistance",
    title: "Legal Assistance for Adoption",
    description:
      "Help with navigating the legal aspects of the adoption process, including court documentation and proceedings.",
    options: [
      {
        label: "Initial Legal Consultation",
        next: "Initial-Legal-Consultation",
      },
      {
        label: "Document Preparation Services",
        next: "Document-Preparation-Services",
      },
      {
        label: "Court Representation",
        next: "Court-Representation",
      },
      {
        label: "Post-Adoption Legal Support",
        next: "Post-Adoption-Legal-Support",
      },
      {
        label: "Workshops on Adoption Laws",
        next: "Workshops-on-Adoption-Laws",
      },
      {
        label: "Access to Legal Resources",
        next: "Access-to-Legal-Resources",
      },
      {
        label: "Help with Home Study Requirements",
        next: "Help-with-Home-Study-Requirements",
      },
      {
        label: "Assistance with Termination of Parental Rights",
        next: "Assistance-with-Termination-of-Parental-Rights",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Safety-Planning",
    title: "Safety Planning",
    description:
      "Working with families to develop a plan that ensures the child’s safety while keeping the family intact whenever possible.",
    options: [
      {
        label: "Risk Assessment Consultation",
        next: "Risk-Assessment-Consultation",
      },
      {
        label: "Emergency Contact Plan Development",
        next: "Emergency-Contact-Plan-Development",
      },
      {
        label: "Safety Resources and Tools",
        next: "Safety-Resources-and-Tools",
      },
      {
        label: "Family Support Services Coordination",
        next: "Family-Support-Services-Coordination",
      },
      {
        label: "Conflict Resolution Strategies",
        next: "Conflict-Resolution-Strategies",
      },
      {
        label: "Safety Planning Workshops",
        next: "Safety-Planning-Workshops",
      },
      {
        label: "Home Environment Safety Assessment",
        next: "Home-Environment-Safety-Assessment",
      },
      {
        label: "Follow-Up Safety Check-ins",
        next: "Follow-Up-Safety-Check-ins",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Court-Ordered-Supervision",
    title: "Court-Ordered Supervision",
    description:
      "Supervision services mandated by the court to monitor the family’s progress and ensure compliance with court-ordered services.",
    options: [
      {
        label: "Regular Supervision Visits",
        next: "Regular-Supervision-Visits",
      },
      {
        label: "Progress Reporting to the Court",
        next: "Progress-Reporting-to-the-Court",
      },
      {
        label: "Family Case Management Services",
        next: "Family-Case-Management-Services",
      },
      {
        label: "Crisis Intervention Support",
        next: "Crisis-Intervention-Support",
      },
      {
        label: "Access to Legal Advocacy",
        next: "Access-to-Legal-Advocacy",
      },
      {
        label: "Referrals to Additional Services",
        next: "Referrals-to-Additional-Services",
      },
      {
        label: "Family Engagement Activities",
        next: "Family-Engagement-Activities",
      },
      {
        label: "Educational Workshops on Compliance",
        next: "Educational-Workshops-on-Compliance",
      },
    ],
  },

  {
    division: "Family and Child",
    id: "Emergency-Removal",
    title: "Emergency Removal",
    description:
      "In cases of imminent danger, CPS may remove the child from the home and place them in protective custody.",
    options: [
      {
        label: "Immediate Safety Assessment",
        next: "Immediate-Safety-Assessment",
      },
      {
        label: "Emergency Care Placement",
        next: "Emergency-Care-Placement",
      },
      {
        label: "Counseling for Affected Families",
        next: "Counseling-for-Affected-Families",
      },
      {
        label: "Family Support Services",
        next: "Family-Support-Services",
      },
      {
        label: "Legal Representation",
        next: "Legal-Representation",
      },
      {
        label: "Reunification Planning",
        next: "Reunification-Planning",
      },
      {
        label: "Ongoing Case Management",
        next: "Ongoing-Case-Management",
      },
      {
        label: "Access to Community Resources",
        next: "Access-to-Community-Resources",
      },
    ],
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
    options: [
      {
        label: "Individualized Treatment Plans",
        next: "Individualized-Treatment-Plans",
      },
      {
        label: "Academic Support and Tutoring",
        next: "Academic-Support-and-Tutoring",
      },
      {
        label: "Therapeutic Recreation Programs",
        next: "Therapeutic-Recreation-Programs",
      },
      {
        label: "Life Skills Training",
        next: "Life-Skills-Training",
      },
      {
        label: "Family Engagement Services",
        next: "Family-Engagement-Services",
      },
      {
        label: "Group Therapy Sessions",
        next: "Group-Therapy-Sessions",
      },
      {
        label: "Transition Planning to Community",
        next: "Transition-Planning-to-Community",
      },
      {
        label: "Aftercare Support Services",
        next: "Aftercare-Support-Services",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Aftercare-Program",
    title: "Aftercare Program",
    description:
      "Aftercare programs support youth transitioning out of residential facilities, offering counseling, job training, and community support to prevent recidivism.",
    options: [
      {
        label: "Individual Counseling Sessions",
        next: "Individual-Counseling-Sessions",
      },
      {
        label: "Job Readiness Workshops",
        next: "Job-Readiness-Workshops",
      },
      {
        label: "Mentorship Opportunities",
        next: "Mentorship-Opportunities",
      },
      {
        label: "Support Groups for Transitioning Youth",
        next: "Support-Groups-for-Transitioning-Youth",
      },
      {
        label: "Access to Educational Resources",
        next: "Access-to-Educational-Resources",
      },
      {
        label: "Housing Assistance Programs",
        next: "Housing-Assistance-Programs",
      },
      {
        label: "Life Skills Workshops",
        next: "Life-Skills-Workshops",
      },
      {
        label: "Crisis Intervention Services",
        next: "Crisis-Intervention-Services",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Behavioral-Therapy",
    title: "Behavioral Therapy",
    description:
      "Behavioral therapy focuses on helping youth manage anger, improve communication skills, and develop positive decision-making strategies.",
    options: [
      {
        label: "Cognitive Behavioral Therapy (CBT)",
        next: "Cognitive-Behavioral-Therapy",
      },
      {
        label: "Anger Management Workshops",
        next: "Anger-Management-Workshops",
      },
      {
        label: "Crisis Counseling Services",
        next: "Crisis-Counseling-Services",
      },
      {
        label: "Family Therapy Sessions",
        next: "Family-Therapy-Sessions",
      },
      {
        label: "Social Skills Development",
        next: "Social-Skills-Development",
      },
      {
        label: "Trauma-Informed Care",
        next: "Trauma-Informed-Care",
      },
      {
        label: "Substance Abuse Screening and Referral",
        next: "Substance-Abuse-Screening-and-Referral",
      },
      {
        label: "Relapse Prevention Strategies",
        next: "Relapse-Prevention-Strategies",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Family-Counseling",
    title: "Family Counseling",
    description:
      "Family counseling services work with the youth and their family to improve relationships, resolve conflicts, and create a more supportive home environment.",
    options: [
      {
        label: "Conflict Resolution Training",
        next: "Conflict-Resolution-Training",
      },
      {
        label: "Effective Communication Workshops",
        next: "Effective-Communication-Workshops",
      },
      {
        label: "Parenting Support Groups",
        next: "Parenting-Support-Groups",
      },
      {
        label: "Crisis Intervention Counseling",
        next: "Crisis-Intervention-Counseling",
      },
      {
        label: "Family Dynamics Assessment",
        next: "Family-Dynamics-Assessment",
      },
      {
        label: "Reunification Therapy",
        next: "Reunification-Therapy",
      },
      {
        label: "Support for Siblings of At-Risk Youth",
        next: "Support-for-Siblings-of-At-Risk-Youth",
      },
      {
        label: "Coping Strategies for Families",
        next: "Coping-Strategies-for-Families",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Substance-Abuse-Treatment",
    title: "Substance Abuse Treatment",
    description:
      "Specialized services for youth struggling with drug or alcohol abuse, providing counseling, group therapy, and outpatient treatment options.",
    options: [
      {
        label: "Individual Counseling Sessions",
        next: "Individual-Counseling-Sessions",
      },
      {
        label: "Group Therapy Programs",
        next: "Group-Therapy-Programs",
      },
      {
        label: "Family Support Counseling",
        next: "Family-Support-Counseling",
      },
      {
        label: "Relapse Prevention Workshops",
        next: "Relapse-Prevention-Workshops",
      },
      {
        label: "Life Skills Development",
        next: "Life-Skills-Development",
      },
      {
        label: "Holistic Healing Practices",
        next: "Holistic-Healing-Practices",
      },
      {
        label: "Outpatient Rehabilitation Services",
        next: "Outpatient-Rehabilitation-Services",
      },
      {
        label: "12-Step Recovery Programs",
        next: "12-Step-Recovery-Programs",
      },
      {
        label: "Sober Living Environment",
        next: "Sober-Living-Environment",
      },
      {
        label: "Peer Support Groups",
        next: "Peer-Support-Groups",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Vocational-Training",
    title: "Vocational Training",
    description:
      "Vocational programs equip youth with practical skills and job training to help them secure employment and build a path to a brighter future.",
    options: [
      {
        label: "Career Assessment and Counseling",
        next: "Career-Assessment-and-Counseling",
      },
      {
        label: "Hands-On Skill Workshops",
        next: "Hands-On-Skill-Workshops",
      },
      {
        label: "Internship Placement Services",
        next: "Internship-Placement-Services",
      },
      {
        label: "Job Readiness Training",
        next: "Job-Readiness-Training",
      },
      {
        label: "Resume Building Workshops",
        next: "Resume-Building-Workshops",
      },
      {
        label: "Interview Preparation Sessions",
        next: "Interview-Preparation-Sessions",
      },
      {
        label: "Soft Skills Development Programs",
        next: "Soft-Skills-Development-Programs",
      },
      {
        label: "Industry-Specific Certifications",
        next: "Industry-Specific-Certifications",
      },
      {
        label: "Mentorship Opportunities",
        next: "Mentorship-Opportunities",
      },
      {
        label: "Entrepreneurship Training",
        next: "Entrepreneurship-Training",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Probation-Check-Ins",
    title: "Regular Probation Check-Ins",
    description:
      "Youth are required to meet with a probation officer regularly to ensure they are complying with the terms set by the court.",
    options: [
      {
        label: "Behavioral Progress Reviews",
        next: "Behavioral-Progress-Reviews",
      },
      {
        label: "Goal Setting Sessions",
        next: "Goal-Setting-Sessions",
      },
      {
        label: "Substance Abuse Screening",
        next: "Substance-Abuse-Screening",
      },
      {
        label: "Community Service Opportunities",
        next: "Community-Service-Opportunities",
      },
      {
        label: "Life Skills Development Workshops",
        next: "Life-Skills-Development-Workshops",
      },
      {
        label: "Crisis Intervention Resources",
        next: "Crisis-Intervention-Resources",
      },
      {
        label: "Parent/Guardian Involvement Meetings",
        next: "Parent-Guardian-Involvement-Meetings",
      },
      {
        label: "Educational Support Services",
        next: "Educational-Support-Services",
      },
      {
        label: "Conflict Resolution Training",
        next: "Conflict-Resolution-Training",
      },
      {
        label: "Reintegration Planning",
        next: "Reintegration-Planning",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "School-Monitoring",
    title: "School Attendance Monitoring",
    description:
      "Youth on probation must attend school regularly, with their attendance being monitored by their probation officer.",
    options: [
      {
        label: "Daily Attendance Reports",
        next: "Daily-Attendance-Reports",
      },
      {
        label: "Academic Performance Evaluations",
        next: "Academic-Performance-Evaluations",
      },
      {
        label: "Mentoring Programs",
        next: "Mentoring-Programs",
      },
      {
        label: "Extracurricular Activity Participation",
        next: "Extracurricular-Activity-Participation",
      },
      {
        label: "Parent-Teacher Conferences",
        next: "Parent-Teacher-Conferences",
      },
      {
        label: "Behavioral Support Plans",
        next: "Behavioral-Support-Plans",
      },
      {
        label: "School Counseling Services",
        next: "School-Counseling-Services",
      },
      {
        label: "Transportation Assistance",
        next: "Transportation-Assistance",
      },
      {
        label: "Incentive Programs for Attendance",
        next: "Incentive-Programs-for-Attendance",
      },
      {
        label: "Crisis Intervention at School",
        next: "Crisis-Intervention-at-School",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Community-Service",
    title: "Community Service",
    description:
      "Youth are given opportunities to contribute to their community through volunteer work as part of their rehabilitation process.",
    options: [
      {
        label: "Environmental Clean-Up Projects",
        next: "Environmental-Clean-Up-Projects",
      },
      {
        label: "Youth Mentorship Programs",
        next: "Youth-Mentorship-Programs",
      },
      {
        label: "Food Bank Volunteering",
        next: "Food-Bank-Volunteering",
      },
      {
        label: "Community Garden Participation",
        next: "Community-Garden-Participation",
      },
      {
        label: "Assisting at Local Animal Shelters",
        next: "Assisting-at-Local-Animal-Shelters",
      },
      {
        label: "Support for Local Events",
        next: "Support-for-Local-Events",
      },
      {
        label: "Fundraising for Community Causes",
        next: "Fundraising-for-Community-Causes",
      },
      {
        label: "Hospital or Nursing Home Visits",
        next: "Hospital-or-Nursing-Home-Visits",
      },
      {
        label: "Civic Engagement Workshops",
        next: "Civic-Engagement-Workshops",
      },
      {
        label: "Cultural Exchange Programs",
        next: "Cultural-Exchange-Programs",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Anger-Management",
    title: "Anger Management Classes",
    description:
      "Programs designed to help youth understand their anger, develop coping mechanisms, and improve emotional regulation.",
    options: [
      {
        label: "Group Therapy Sessions",
        next: "Group-Therapy-Sessions",
      },
      {
        label: "Mindfulness and Relaxation Techniques",
        next: "Mindfulness-and-Relaxation-Techniques",
      },
      {
        label: "Role-Playing Scenarios",
        next: "Role-Playing-Scenarios",
      },
      {
        label: "Conflict Resolution Training",
        next: "Conflict-Resolution-Training",
      },
      {
        label: "Personal Reflection Journals",
        next: "Personal-Reflection-Journals",
      },
      {
        label: "Art and Creative Expression Workshops",
        next: "Art-and-Creative-Expression-Workshops",
      },
      {
        label: "Physical Activity and Team Sports",
        next: "Physical-Activity-and-Team-Sports",
      },
      {
        label: "Family Involvement Sessions",
        next: "Family-Involvement-Sessions",
      },
      {
        label: "Online Support Groups",
        next: "Online-Support-Groups",
      },
      {
        label: "Guest Speakers and Success Stories",
        next: "Guest-Speakers-and-Success-Stories",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Educational-Support",
    title: "Educational Support",
    description:
      "Tutoring and academic support services to help youth stay engaged in school and work towards graduation or GED completion.",
    options: [
      {
        label: "One-on-One Tutoring",
        next: "One-on-One-Tutoring",
      },
      {
        label: "Homework Help Sessions",
        next: "Homework-Help-Sessions",
      },
      {
        label: "Study Skills Workshops",
        next: "Study-Skills-Workshops",
      },
      {
        label: "GED Preparation Classes",
        next: "GED-Preparation-Classes",
      },
      {
        label: "Mentoring Programs",
        next: "Mentoring-Programs",
      },
      {
        label: "Online Learning Resources",
        next: "Online-Learning-Resources",
      },
      {
        label: "College and Career Counseling",
        next: "College-and-Career-Counseling",
      },
      {
        label: "Peer Study Groups",
        next: "Peer-Study-Groups",
      },
      {
        label: "Life Skills Training",
        next: "Life-Skills-Training",
      },
      {
        label: "Access to Educational Technology",
        next: "Access-to-Educational-Technology",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Recreational-Programs",
    title: "Recreational Programs",
    description:
      "Structured recreational activities that promote teamwork, build self-esteem, and provide positive outlets for youth.",
    options: [
      {
        label: "Sports Leagues",
        next: "Sports-Leagues",
      },
      {
        label: "Art Workshops",
        next: "Art-Workshops",
      },
      {
        label: "Outdoor Adventure Trips",
        next: "Outdoor-Adventure-Trips",
      },
      {
        label: "Leadership Camps",
        next: "Leadership-Camps",
      },
      {
        label: "Dance Classes",
        next: "Dance-Classes",
      },
      {
        label: "Community Service Projects",
        next: "Community-Service-Projects",
      },
      {
        label: "Music and Performance Arts",
        next: "Music-and-Performance-Arts",
      },
      {
        label: "Cooking and Nutrition Classes",
        next: "Cooking-and-Nutrition-Classes",
      },
      {
        label: "Health and Wellness Programs",
        next: "Health-and-Wellness-Programs",
      },
      {
        label: "Technology and Gaming Clubs",
        next: "Technology-and-Gaming-Clubs",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "One-on-One-Mentoring",
    title: "One-on-One Mentoring",
    description:
      "Youth are paired with a mentor who provides individualized support and guidance to help them navigate personal and academic challenges.",
    options: [
      {
        label: "Academic Support",
        next: "Academic-Support",
      },
      {
        label: "Life Skills Development",
        next: "Life-Skills-Development",
      },
      {
        label: "Career Exploration",
        next: "Career-Exploration",
      },
      {
        label: "Emotional Support",
        next: "Emotional-Support",
      },
      {
        label: "Goal Setting",
        next: "Goal-Setting",
      },
      {
        label: "Social Skills Enhancement",
        next: "Social-Skills-Enhancement",
      },
      {
        label: "Community Engagement",
        next: "Community-Engagement",
      },
      {
        label: "Crisis Management",
        next: "Crisis-Management",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Group-Mentoring",
    title: "Group Mentoring",
    description:
      "Mentoring programs that bring youth together in group settings, fostering peer support and positive social interactions.",
    options: [
      {
        label: "Peer Support Circles",
        next: "Peer-Support-Circles",
      },
      {
        label: "Skill-Building Workshops",
        next: "Skill-Building-Workshops",
      },
      {
        label: "Team-Building Activities",
        next: "Team-Building-Activities",
      },
      {
        label: "Conflict Resolution Skills",
        next: "Conflict-Resolution-Skills",
      },
      {
        label: "Group Discussions on Goals",
        next: "Group-Discussions-on-Goals",
      },
      {
        label: "Social Event Planning",
        next: "Social-Event-Planning",
      },
      {
        label: "Community Service Projects",
        next: "Community-Service-Projects",
      },
      {
        label: "Leadership Development",
        next: "Leadership-Development",
      },
    ],
  },

  {
    division: "Youth Services",
    id: "Life-Skills-Coaching",
    title: "Life Skills Coaching",
    description:
      "Youth are taught essential life skills such as time management, financial literacy, and decision-making to help them transition into adulthood.",
    options: [
      {
        label: "Time Management Mastery",
        next: "Time-Management-Mastery",
      },
      {
        label: "Financial Literacy Basics",
        next: "Financial-Literacy-Basics",
      },
      {
        label: "Effective Communication Skills",
        next: "Effective-Communication-Skills",
      },
      {
        label: "Critical Thinking Strategies",
        next: "Critical-Thinking-Strategies",
      },
      {
        label: "Healthy Relationships Training",
        next: "Healthy-Relationships-Training",
      },
      {
        label: "Problem-Solving Techniques",
        next: "Problem-Solving-Techniques",
      },
      {
        label: "Goal Setting and Planning",
        next: "Goal-Setting-and-Planning",
      },
      {
        label: "Self-Care Practices",
        next: "Self-Care-Practices",
      },
    ],
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
    options: [
      {
        label: "Income Assessment",
        next: "Income-Assessment",
      },
      {
        label: "Family Size Evaluation",
        next: "Family-Size-Evaluation",
      },
      {
        label: "Medical Needs Analysis",
        next: "Medical-Needs-Analysis",
      },
      {
        label: "Application Assistance",
        next: "Application-Assistance",
      },
      {
        label: "Renewal Information",
        next: "Renewal-Information",
      },
      {
        label: "Appeal Process Guidance",
        next: "Appeal-Process-Guidance",
      },
      {
        label: "FAQs about Medicaid",
        next: "FAQs-about-Medicaid",
      },
      {
        label: "Contact a Medicaid Specialist",
        next: "Contact-a-Medicaid-Specialist",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Application-Assistance",
    title: "Medicaid Application Assistance",
    description:
      "Need help navigating the Medicaid application process? We’ll guide you through every step, from gathering documents to submitting your application.",
    options: [
      {
        label: "Document Checklist",
        next: "Document-Checklist",
      },
      {
        label: "Application Form Guidance",
        next: "Application-Form-Guidance",
      },
      {
        label: "Submission Process Overview",
        next: "Submission-Process-Overview",
      },
      {
        label: "Common Application Mistakes",
        next: "Common-Application-Mistakes",
      },
      {
        label: "Tracking Your Application",
        next: "Tracking-Your-Application",
      },
      {
        label: "Support for Denied Applications",
        next: "Support-for-Denied-Applications",
      },
      {
        label: "Resources for Additional Help",
        next: "Resources-for-Additional-Help",
      },
      {
        label: "Contact Application Support",
        next: "Contact-Application-Support",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Medicaid-Managed-Care",
    title: "Medicaid Managed Care",
    description:
      "Once approved for Medicaid, you may need to choose a managed care plan that fits your health needs. Learn about your options here.",
    options: [
      {
        label: "Plan Comparison",
        next: "Plan-Comparison",
      },
      {
        label: "Network Providers",
        next: "Network-Providers",
      },
      {
        label: "Cost Sharing Information",
        next: "Cost-Sharing-Information",
      },
      {
        label: "Specialized Services",
        next: "Specialized-Services",
      },
      {
        label: "Enrollment Process",
        next: "Enrollment-Process",
      },
      {
        label: "Health Plan Benefits",
        next: "Health-Plan-Benefits",
      },
      {
        label: "Managing Your Care",
        next: "Managing-Your-Care",
      },
      {
        label: "Changing Your Plan",
        next: "Changing-Your-Plan",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Low-Cost-Prescriptions",
    title: "Low-Cost Prescriptions",
    description:
      "We work with pharmacies and drug manufacturers to ensure you can get the medications you need at an affordable price.",
    options: [
      {
        label: "Discount Programs",
        next: "Discount-Programs",
      },
      {
        label: "Prescription Assistance",
        next: "Prescription-Assistance",
      },
      {
        label: "Medication Synchronization",
        next: "Medication-Synchronization",
      },
      {
        label: "Pharmacy Partnerships",
        next: "Pharmacy-Partnerships",
      },
      {
        label: "Generic Alternatives",
        next: "Generic-Alternatives",
      },
      {
        label: "Mail Order Options",
        next: "Mail-Order-Options",
      },
      {
        label: "Medication Management",
        next: "Medication-Management",
      },
      {
        label: "Refill Reminders",
        next: "Refill-Reminders",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Pharmacy-Finder",
    title: "Pharmacy Finder",
    description:
      "Looking for a pharmacy nearby? Let us help you find one that accepts your insurance and offers affordable prices.",
    options: [
      {
        label: "Nearby Pharmacies",
        next: "Nearby-Pharmacies",
      },
      {
        label: "Insurance Compatibility",
        next: "Insurance-Compatibility",
      },
      {
        label: "Price Comparison",
        next: "Price-Comparison",
      },
      {
        label: "Specialty Pharmacies",
        next: "Specialty-Pharmacies",
      },
      {
        label: "Hours of Operation",
        next: "Hours-of-Operation",
      },
      {
        label: "Home Delivery Options",
        next: "Home-Delivery-Options",
      },
      {
        label: "Medication Counseling",
        next: "Medication-Counseling",
      },
      {
        label: "Pharmacy Reviews",
        next: "Pharmacy-Reviews",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Medication-Therapy-Management",
    title: "Medication Therapy Management",
    description:
      "Managing multiple medications can be tough. Our program helps you ensure that all your medications work well together for your health.",
    options: [
      {
        label: "Medication Review",
        next: "Medication-Review",
      },
      {
        label: "Drug Interaction Checks",
        next: "Drug-Interaction-Checks",
      },
      {
        label: "Personalized Medication Plans",
        next: "Personalized-Medication-Plans",
      },
      {
        label: "Adherence Support",
        next: "Adherence-Support",
      },
      {
        label: "Lifestyle Recommendations",
        next: "Lifestyle-Recommendations",
      },
      {
        label: "Follow-Up Appointments",
        next: "Follow-Up-Appointments",
      },
      {
        label: "Pharmacist Consultations",
        next: "Pharmacist-Consultations",
      },
      {
        label: "Refill Management",
        next: "Refill-Management",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Primary-Care",
    title: "Primary Care Physician",
    description:
      "Your primary care physician is your go-to for checkups, preventive care, and general health management.",
    options: [
      {
        label: "Routine Checkups",
        next: "Routine-Checkups",
      },
      {
        label: "Chronic Disease Management",
        next: "Chronic-Disease-Management",
      },
      {
        label: "Preventive Screenings",
        next: "Preventive-Screenings",
      },
      {
        label: "Immunizations",
        next: "Immunizations",
      },
      {
        label: "Health Education",
        next: "Health-Education",
      },
      {
        label: "Referrals to Specialists",
        next: "Referrals-to-Specialists",
      },
      {
        label: "Care Coordination",
        next: "Care-Coordination",
      },
      {
        label: "Telehealth Services",
        next: "Telehealth-Services",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Specialist-Visit",
    title: "Specialist Visit",
    description:
      "For more specific health concerns, we can help you schedule visits with specialists in areas like cardiology, orthopedics, and more.",
    options: [
      {
        label: "Cardiology",
        next: "Cardiology",
      },
      {
        label: "Orthopedics",
        next: "Orthopedics",
      },
      {
        label: "Dermatology",
        next: "Dermatology",
      },
      {
        label: "Gastroenterology",
        next: "Gastroenterology",
      },
      {
        label: "Pediatrics",
        next: "Pediatrics",
      },
      {
        label: "Endocrinology",
        next: "Endocrinology",
      },
      {
        label: "Neurology",
        next: "Neurology",
      },
      {
        label: "Psychiatry",
        next: "Psychiatry",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Telemedicine",
    title: "Telemedicine",
    description:
      "Need a doctor, but can’t make it to an office? Telemedicine allows you to consult with healthcare providers over the phone or via video chat.",
    options: [
      {
        label: "General Practitioner Consultation",
        next: "General-Practitioner",
      },
      {
        label: "Mental Health Services",
        next: "Mental-Health-Services",
      },
      {
        label: "Dermatology Consultation",
        next: "Dermatology",
      },
      {
        label: "Nutrition Counseling",
        next: "Nutrition-Counseling",
      },
      {
        label: "Chronic Condition Management",
        next: "Chronic-Condition-Management",
      },
      {
        label: "Pediatric Telemedicine",
        next: "Pediatric-Telemedicine",
      },
      {
        label: "Medication Follow-Up",
        next: "Medication-Follow-Up",
      },
      {
        label: "Wellness Check",
        next: "Wellness-Check",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Counseling",
    title: "Counseling",
    description:
      "Mental health counseling helps you talk through challenges, build coping skills, and improve your emotional wellbeing.",
    options: [
      {
        label: "Individual Therapy",
        next: "Individual-Therapy",
      },
      {
        label: "Group Therapy",
        next: "Group-Therapy",
      },
      {
        label: "Family Therapy",
        next: "Family-Therapy",
      },
      {
        label: "Crisis Intervention",
        next: "Crisis-Intervention",
      },
      {
        label: "Cognitive Behavioral Therapy (CBT)",
        next: "Cognitive-Behavioral-Therapy",
      },
      {
        label: "Trauma-Informed Counseling",
        next: "Trauma-Informed-Counseling",
      },
      {
        label: "Addiction Counseling",
        next: "Addiction-Counseling",
      },
      {
        label: "Stress Management",
        next: "Stress-Management",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Psychiatric-Evaluation",
    title: "Psychiatric Evaluation",
    description:
      "A comprehensive psychiatric evaluation helps diagnose mental health conditions and develop treatment plans.",
    options: [
      {
        label: "Initial Assessment",
        next: "Initial-Assessment",
      },
      {
        label: "Follow-Up Evaluation",
        next: "Follow-Up-Evaluation",
      },
      {
        label: "Medication Review",
        next: "Medication-Review",
      },
      {
        label: "Cognitive Assessment",
        next: "Cognitive-Assessment",
      },
      {
        label: "Behavioral Assessment",
        next: "Behavioral-Assessment",
      },
      {
        label: "Family History Evaluation",
        next: "Family-History-Evaluation",
      },
      {
        label: "Risk Assessment",
        next: "Risk-Assessment",
      },
      {
        label: "Treatment Recommendations",
        next: "Treatment-Recommendations",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Substance-Abuse-Counseling",
    title: "Substance Abuse Counseling",
    description:
      "Our counselors help individuals struggling with substance use disorder regain control of their lives through therapy and support.",
    options: [
      {
        label: "Individual Counseling Sessions",
        next: "Individual-Counseling-Sessions",
      },
      {
        label: "Group Therapy",
        next: "Group-Therapy",
      },
      {
        label: "Family Counseling",
        next: "Family-Counseling",
      },
      {
        label: "Relapse Prevention Strategies",
        next: "Relapse-Prevention-Strategies",
      },
      {
        label: "Crisis Intervention",
        next: "Crisis-Intervention",
      },
      {
        label: "Support Groups",
        next: "Support-Groups",
      },
      {
        label: "Holistic Approaches",
        next: "Holistic-Approaches",
      },
      {
        label: "Resource Referral",
        next: "Resource-Referral",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Nursing-Home-Placement",
    title: "Nursing Home Placement",
    description:
      "For individuals who need 24-hour care, we assist in finding the right nursing home where they can receive full-time support.",
    options: [
      {
        label: "Assessment of Care Needs",
        next: "Assessment-of-Care-Needs",
      },
      {
        label: "Facility Tours",
        next: "Facility-Tours",
      },
      {
        label: "Financial Guidance",
        next: "Financial-Guidance",
      },
      {
        label: "Transition Support",
        next: "Transition-Support",
      },
      {
        label: "Personalized Care Plans",
        next: "Personalized-Care-Plans",
      },
      {
        label: "Family Counseling",
        next: "Family-Counseling",
      },
      {
        label: "Ongoing Case Management",
        next: "Ongoing-Case-Management",
      },
      {
        label: "Crisis Intervention",
        next: "Crisis-Intervention",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "In-Home-Care",
    title: "In-Home Care",
    description:
      "In-home care services provide assistance with daily activities in the comfort of your own home, allowing you to live as independently as possible.",
    options: [
      {
        label: "Personal Care Assistance",
        next: "Personal-Care-Assistance",
      },
      {
        label: "Meal Preparation",
        next: "Meal-Preparation",
      },
      {
        label: "Medication Management",
        next: "Medication-Management",
      },
      {
        label: "Companionship Services",
        next: "Companionship-Services",
      },
      {
        label: "Housekeeping Support",
        next: "Housekeeping-Support",
      },
      {
        label: "Physical Therapy",
        next: "Physical-Therapy",
      },
      {
        label: "Occupational Therapy",
        next: "Occupational-Therapy",
      },
      {
        label: "Respite Care",
        next: "Respite-Care",
      },
    ],
  },

  {
    division: "Medical-Services",
    id: "Assisted-Living",
    title: "Assisted Living",
    description:
      "Assisted living facilities offer a supportive environment for those who need help with everyday activities but don’t require full-time nursing care.",
    options: [
      {
        label: "Medication Management",
        next: "Medication-Management",
      },
      {
        label: "Meal Services",
        next: "Meal-Services",
      },
      {
        label: "Transportation Assistance",
        next: "Transportation-Assistance",
      },
      {
        label: "Personal Care Services",
        next: "Personal-Care-Services",
      },
      {
        label: "Social Activities",
        next: "Social-Activities",
      },
      {
        label: "Health Monitoring",
        next: "Health-Monitoring",
      },
      {
        label: "Housekeeping Services",
        next: "Housekeeping-Services",
      },
      {
        label: "24-Hour Staff Support",
        next: "24-Hour-Staff-Support",
      },
    ],
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
    options: [
      {
        label: "Companionship Services",
        next: "Companionship-Services",
      },
      {
        label: "Meal Preparation",
        next: "Meal-Preparation",
      },
      {
        label: "Medication Reminders",
        next: "Medication-Reminders",
      },
      {
        label: "Housekeeping Assistance",
        next: "Housekeeping-Assistance",
      },
      {
        label: "Transportation Services",
        next: "Transportation-Services",
      },
      {
        label: "Respite Care",
        next: "Respite-Care",
      },
      {
        label: "Mobility Assistance",
        next: "Mobility-Assistance",
      },
      {
        label: "Grooming Services",
        next: "Grooming-Services",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Homemaker-Services",
    title: "Homemaker Services",
    description:
      "Homemaker services provide help with light household duties, such as cleaning, laundry, and meal preparation, to maintain a safe and healthy home environment.",
    options: [
      {
        label: "Light Cleaning",
        next: "Light-Cleaning",
      },
      {
        label: "Laundry Services",
        next: "Laundry-Services",
      },
      {
        label: "Grocery Shopping",
        next: "Grocery-Shopping",
      },
      {
        label: "Meal Planning",
        next: "Meal-Planning",
      },
      {
        label: "Errand Running",
        next: "Errand-Running",
      },
      {
        label: "Organization Assistance",
        next: "Organization-Assistance",
      },
      {
        label: "Home Safety Assessment",
        next: "Home-Safety-Assessment",
      },
      {
        label: "Pet Care Assistance",
        next: "Pet-Care-Assistance",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Meal-Delivery",
    title: "Meal Delivery",
    description:
      "Meal delivery programs ensure older adults receive nutritious meals regularly, helping them stay healthy and nourished, even when they can’t cook for themselves.",
    options: [
      {
        label: "Nutritious Meal Options",
        next: "Nutritious-Meal-Options",
      },
      {
        label: "Dietary Restrictions",
        next: "Dietary-Restrictions",
      },
      {
        label: "Weekly Meal Plans",
        next: "Weekly-Meal-Plans",
      },
      {
        label: "Delivery Scheduling",
        next: "Delivery-Scheduling",
      },
      {
        label: "Emergency Meal Service",
        next: "Emergency-Meal-Service",
      },
      {
        label: "Feedback and Suggestions",
        next: "Feedback-and-Suggestions",
      },
      {
        label: "Volunteering Opportunities",
        next: "Volunteering-Opportunities",
      },
      {
        label: "Nutritional Counseling",
        next: "Nutritional-Counseling",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Nursing-Home-Placement",
    title: "Nursing Home Placement",
    description:
      "Our team assists in finding the right nursing home for individuals who need full-time care, making sure their medical and personal needs are met.",
    options: [
      {
        label: "Facility Tour Arrangements",
        next: "Facility-Tour-Arrangements",
      },
      {
        label: "Financial Assistance Options",
        next: "Financial-Assistance-Options",
      },
      {
        label: "Personalized Care Plans",
        next: "Personalized-Care-Plans",
      },
      {
        label: "Safety and Security Features",
        next: "Safety-and-Security-Features",
      },
      {
        label: "Activities and Social Engagement",
        next: "Activities-and-Social-Engagement",
      },
      {
        label: "Family Support Resources",
        next: "Family-Support-Resources",
      },
      {
        label: "Emergency Response Services",
        next: "Emergency-Response-Services",
      },
      {
        label: "Long-Term Care Insurance Guidance",
        next: "Long-Term-Care-Insurance-Guidance",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Long-Term-Care-Ombudsman",
    title: "Long-Term Care Ombudsman",
    description:
      "The Long-Term Care Ombudsman advocates for the rights of nursing home residents, ensuring their concerns are heard and addressed, and their quality of care is upheld.",
    options: [
      {
        label: "Resident Rights Education",
        next: "Resident-Rights-Education",
      },
      {
        label: "Complaint Resolution Support",
        next: "Complaint-Resolution-Support",
      },
      {
        label: "Quality of Care Advocacy",
        next: "Quality-of-Care-Advocacy",
      },
      {
        label: "Assistance with Grievances",
        next: "Assistance-with-Grievances",
      },
      {
        label: "Resource Referral Services",
        next: "Resource-Referral-Services",
      },
      {
        label: "Family Education Workshops",
        next: "Family-Education-Workshops",
      },
      {
        label: "Monitoring Care Standards",
        next: "Monitoring-Care-Standards",
      },
      {
        label: "Policy Advocacy",
        next: "Policy-Advocacy",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Report-Abuse",
    title: "Report Adult Abuse or Neglect",
    description:
      "If you suspect abuse, neglect, or exploitation of an older or disabled adult, report it to Adult Protective Services. We’ll investigate and ensure the individual’s safety.",
    options: [
      {
        label: "Emergency Reporting",
        next: "Emergency-Reporting",
      },
      {
        label: "Anonymous Reporting",
        next: "Anonymous-Reporting",
      },
      {
        label: "Follow-Up Services",
        next: "Follow-Up-Services",
      },
      {
        label: "Support for Victims",
        next: "Support-for-Victims",
      },
      {
        label: "Resource Information",
        next: "Resource-Information",
      },
      {
        label: "Legal Assistance",
        next: "Legal-Assistance",
      },
      {
        label: "Educational Workshops",
        next: "Educational-Workshops",
      },
      {
        label: "Reporting Process Guidance",
        next: "Reporting-Process-Guidance",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Emergency-Intervention",
    title: "Emergency Intervention",
    description:
      "In cases of immediate danger, Adult Protective Services will take emergency steps to protect vulnerable adults from harm.",
    options: [
      {
        label: "Crisis Hotline",
        next: "Crisis-Hotline",
      },
      {
        label: "Emergency Shelter",
        next: "Emergency-Shelter",
      },
      {
        label: "Safety Planning",
        next: "Safety-Planning",
      },
      {
        label: "Temporary Guardianship",
        next: "Temporary-Guardianship",
      },
      {
        label: "Access to Medical Care",
        next: "Access-to-Medical-Care",
      },
      {
        label: "Legal Protection Orders",
        next: "Legal-Protection-Orders",
      },
      {
        label: "Incident Reporting",
        next: "Incident-Reporting",
      },
      {
        label: "Follow-Up Support",
        next: "Follow-Up-Support",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Senior-Housing",
    title: "Senior Housing",
    description:
      "Senior housing offers safe, affordable living spaces designed specifically for older adults, allowing them to live independently with access to community services.",
    options: [
      {
        label: "Independent Living",
        next: "Independent-Living",
      },
      {
        label: "Assisted Living",
        next: "Assisted-Living",
      },
      {
        label: "Subsidized Housing",
        next: "Subsidized-Housing",
      },
      {
        label: "Supportive Services",
        next: "Supportive-Services",
      },
      {
        label: "Community Resources",
        next: "Community-Resources",
      },
      {
        label: "Emergency Call Systems",
        next: "Emergency-Call-Systems",
      },
      {
        label: "Transportation Services",
        next: "Transportation-Services",
      },
      {
        label: "Resident Activities",
        next: "Resident-Activities",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Rental-Assistance",
    title: "Rental Assistance",
    description:
      "We provide rental assistance to help older adults and those with disabilities maintain stable housing, ensuring they can live in a safe and secure environment.",
    options: [
      {
        label: "Application Process",
        next: "Application-Process",
      },
      {
        label: "Eligibility Criteria",
        next: "Eligibility-Criteria",
      },
      {
        label: "Funding Sources",
        next: "Funding-Sources",
      },
      {
        label: "Emergency Assistance",
        next: "Emergency-Assistance",
      },
      {
        label: "Utility Assistance",
        next: "Utility-Assistance",
      },
      {
        label: "Support Services",
        next: "Support-Services",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Legal-Aid",
    title: "Legal Aid for Seniors",
    description:
      "Legal aid services help older adults navigate issues such as estate planning, guardianship, and protection from exploitation or discrimination.",
    options: [
      {
        label: "Estate Planning",
        next: "Estate-Planning",
      },
      {
        label: "Guardianship Services",
        next: "Guardianship-Services",
      },
      {
        label: "Exploitation Protection",
        next: "Exploitation-Protection",
      },
      {
        label: "Discrimination Cases",
        next: "Discrimination-Cases",
      },
      {
        label: "Free Legal Consultation",
        next: "Free-Legal-Consultation",
      },
    ],
  },

  {
    division: "Aging-and-Adult-Services",
    id: "Rights-Education",
    title: "Elder Rights Education",
    description:
      "Learn about your rights as an older adult, including protection from discrimination, abuse, and fraud. We provide the resources you need to live with dignity and respect.",
    options: [
      {
        label: "Know Your Rights",
        next: "Know-Your-Rights",
      },
      {
        label: "Abuse Prevention",
        next: "Abuse-Prevention",
      },
      {
        label: "Fraud Awareness",
        next: "Fraud-Awareness",
      },
      {
        label: "Discrimination Resources",
        next: "Discrimination-Resources",
      },
      {
        label: "Support Groups",
        next: "Support-Groups",
      },
    ],
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
    options: [
      {
        label: "Individual Therapy Sessions",
        next: "Individual-Therapy",
      },
      {
        label: "Group Therapy Activities",
        next: "Group-Therapy",
      },
      {
        label: "Augmentative Communication Devices",
        next: "AAC-Devices",
      },
      {
        label: "Parent and Caregiver Training",
        next: "Caregiver-Training",
      },
      {
        label: "Progress Monitoring and Assessments",
        next: "Progress-Monitoring",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Occupational-Therapy",
    title: "Occupational Therapy",
    description:
      "Occupational therapy focuses on improving fine motor skills, coordination, and daily living activities, helping individuals with disabilities lead more independent lives.",
    options: [
      {
        label: "Individual Therapy Sessions",
        next: "Individual-Therapy",
      },
      {
        label: "Group Skills Workshops",
        next: "Group-Workshops",
      },
      {
        label: "Assistive Technology Evaluation",
        next: "Assistive-Technology",
      },
      {
        label: "Sensory Integration Activities",
        next: "Sensory-Integration",
      },
      {
        label: "Home and Environmental Modifications",
        next: "Home-Modifications",
      },
      {
        label: "Caregiver Education and Training",
        next: "Caregiver-Training",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Physical-Therapy",
    title: "Physical Therapy",
    description:
      "Physical therapy assists individuals in developing or recovering movement and mobility, essential for those with physical challenges associated with developmental disabilities.",
    options: [
      {
        label: "Individual Therapy Sessions",
        next: "Individual-Physical-Therapy",
      },
      {
        label: "Aquatic Therapy",
        next: "Aquatic-Therapy",
      },
      {
        label: "Strength and Conditioning Programs",
        next: "Strength-Conditioning",
      },
      {
        label: "Mobility Training",
        next: "Mobility-Training",
      },
      {
        label: "Adaptive Equipment Training",
        next: "Adaptive-Equipment",
      },
      {
        label: "Family Support and Education",
        next: "Family-Support",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Group-Homes",
    title: "Group Homes",
    description:
      "Group homes provide shared living spaces with support staff, ensuring that individuals with disabilities receive the care they need while also promoting social interaction and independence.",
    options: [
      {
        label: "Personalized Care Plans",
        next: "Personalized-Care-Plans",
      },
      {
        label: "Recreational Activities",
        next: "Recreational-Activities",
      },
      {
        label: "Life Skills Training",
        next: "Life-Skills-Training",
      },
      {
        label: "Community Integration Programs",
        next: "Community-Integration",
      },
      {
        label: "Family Support Services",
        next: "Family-Support-Services",
      },
      {
        label: "Crisis Intervention Services",
        next: "Crisis-Intervention",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Supported-Living",
    title: "Supported Living",
    description:
      "Supported living programs offer assistance with daily living activities, helping individuals live in their own homes or apartments with the necessary support services to ensure their safety and independence.",
    options: [
      {
        label: "Personal Care Assistance",
        next: "Personal-Care-Assistance",
      },
      {
        label: "Meal Preparation Services",
        next: "Meal-Preparation",
      },
      {
        label: "Household Management Support",
        next: "Household-Management",
      },
      {
        label: "Transportation Services",
        next: "Transportation",
      },
      {
        label: "Social and Recreational Activities",
        next: "Social-Recreational-Activities",
      },
      {
        label: "Emergency Response Services",
        next: "Emergency-Response",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Independent-Living",
    title: "Independent Living",
    description:
      "For those capable of living independently, this service provides the skills training, community resources, and support they need to manage a household and fully participate in their communities.",
    options: [
      {
        label: "Life Skills Training",
        next: "Life-Skills-Training",
      },
      {
        label: "Budgeting and Financial Management",
        next: "Budgeting-Financial-Management",
      },
      {
        label: "Job Readiness Programs",
        next: "Job-Readiness",
      },
      {
        label: "Community Integration Services",
        next: "Community-Integration",
      },
      {
        label: "Advocacy and Support Groups",
        next: "Advocacy-Support-Groups",
      },
      {
        label: "Assistive Technology Resources",
        next: "Assistive-Technology",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Vocational-Training",
    title: "Vocational Training",
    description:
      "Vocational training prepares individuals for employment by teaching them job-specific skills, improving their ability to find meaningful work and participate in the workforce.",
    options: [
      {
        label: "Job-Specific Skill Development",
        next: "Job-Specific-Skills",
      },
      {
        label: "Internship Opportunities",
        next: "Internship-Opportunities",
      },
      {
        label: "Resume and Interview Preparation",
        next: "Resume-Interview-Prep",
      },
      {
        label: "Soft Skills Training",
        next: "Soft-Skills-Training",
      },
      {
        label: "Workplace Readiness Programs",
        next: "Workplace-Readiness",
      },
      {
        label: "Job Placement Services",
        next: "Job-Placement",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Job-Coaching",
    title: "Job Coaching",
    description:
      "Job coaches provide one-on-one assistance to individuals with disabilities, helping them adapt to workplace environments and perform job tasks successfully.",
    options: [
      {
        label: "On-the-Job Training",
        next: "On-the-Job-Training",
      },
      {
        label: "Job Task Analysis",
        next: "Job-Task-Analysis",
      },
      {
        label: "Workplace Adaptations",
        next: "Workplace-Adaptations",
      },
      {
        label: "Regular Progress Monitoring",
        next: "Progress-Monitoring",
      },
      {
        label: "Skill Development Workshops",
        next: "Skill-Development-Workshops",
      },
      {
        label: "Employer Engagement",
        next: "Employer-Engagement",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Workplace-Accommodations",
    title: "Workplace Accommodations",
    description:
      "Workplace accommodations ensure that individuals with developmental disabilities can perform their jobs by providing necessary adjustments, like modified workstations or flexible hours.",
    options: [
      {
        label: "Customized Workstations",
        next: "Customized-Workstations",
      },
      {
        label: "Flexible Scheduling",
        next: "Flexible-Scheduling",
      },
      {
        label: "Assistive Technology",
        next: "Assistive-Technology",
      },
      {
        label: "Job Redesign",
        next: "Job-Redesign",
      },
      {
        label: "Transportation Assistance",
        next: "Transportation-Assistance",
      },
      {
        label: "Support Staff Availability",
        next: "Support-Staff-Availability",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Respite-Care",
    title: "Respite Care",
    description:
      "Respite care gives families a temporary break by providing short-term care for individuals with disabilities, ensuring that caregivers have the time to rest and recharge.",
    options: [
      {
        label: "In-Home Respite",
        next: "In-Home-Respite",
      },
      {
        label: "Facility-Based Respite",
        next: "Facility-Based-Respite",
      },
      {
        label: "Crisis Respite",
        next: "Crisis-Respite",
      },
      {
        label: "Scheduled Respite",
        next: "Scheduled-Respite",
      },
      {
        label: "Emergency Respite",
        next: "Emergency-Respite",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Caregiver-Support",
    title: "Caregiver Support",
    description:
      "Caregiver support services offer training, counseling, and resources to help families better care for individuals with disabilities, promoting well-being for both caregivers and their loved ones.",
    options: [
      {
        label: "Support Groups",
        next: "Support-Groups",
      },
      {
        label: "Training Workshops",
        next: "Training-Workshops",
      },
      {
        label: "Respite Care Resources",
        next: "Respite-Care-Resources",
      },
      {
        label: "Counseling Services",
        next: "Counseling-Services",
      },
      {
        label: "Emergency Preparedness",
        next: "Emergency-Preparedness",
      },
    ],
  },

  {
    division: "Developmental-Disabilities",
    id: "Financial-Assistance",
    title: "Financial Assistance",
    description:
      "Financial assistance programs help cover the costs associated with caring for a family member with developmental disabilities, offering support for medical expenses, in-home care, and more.",
    options: [
      {
        label: "Government Grants",
        next: "Government-Grants",
      },
      {
        label: "Medicaid Support",
        next: "Medicaid-Support",
      },
      {
        label: "Nonprofit Organizations",
        next: "Nonprofit-Organizations",
      },
      {
        label: "Tax Deductions",
        next: "Tax-Deductions",
      },
      {
        label: "Financial Counseling",
        next: "Financial-Counseling",
      },
    ],
  },
];

export default allServices;

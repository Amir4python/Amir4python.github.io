/*
  ============================================================
  EDIT THIS FILE TO UPDATE YOUR SITE.
  You never need to touch index.html, style.css, or script.js.

  To add a new certificate: copy one object inside `certifications`
  and change the values. Same for `companyProjects` and
  `personalProjects`. Order in the list = order on the page
  (newest first is a good default).
  ============================================================
*/

const siteData = {

  // ---------- PROFILE ----------
  profile: {
    name: "Amir Hamza Shaikh",
    title: "Algorithm Engineer",
    location: "Karnataka, India",
    tagline: "I’m a Data/Algorithm Engineer with 3+ years of professional experience building Python-based applications, ETL pipelines, data-processing workflows, and analytical solutions.",
    email: "amir7864amir@gmail.com",
    // Optional links — leave the value as "" to hide a link entirely
    links: {
      github: "https://github.com/Amir4python",
      linkedin: "https://linkedin.com/in/amirhamzashaikh9",
      resume: "" // path to a PDF, e.g. "resume.pdf", or leave blank
    }
  },

  // ---------- DEGREES ----------
  degrees: [
    {
      degree: "M.Tech in Computer Science",
      school: "KLS Gogte Institute of Technology",
      year: "2020 – 2022"
    },
    {
      degree: "B.E in Computer Science",
      school: "SG Balekundri Institute of Technology",
      year: "2016 – 2020"
    }
  ],

  // ---------- EXPERIENCE ----------
  experience: [
    {
      role: "Algorithm Engineer",
      company: "Vectra Automation",
      period: "Aug 2025 — Present",
      summary: "Leading the design and enhancement of algorithm-driven engineering automation solutions for CAD workflows used by aerospace and defense clients across the US and Europe. Designed sheet stacking, spatial optimization, geometric reasoning, and constraint-based algorithms to maximize sheet utilization and automate drawing view placement. Translated complex engineering rules into scalable solutions, improving automation accuracy and reducing manual drafting effort, while collaborating with Algorithm/ML teams and serving as a Technical Interviewer for Python and Algorithm-focused roles."
    },
    {
      role: "Python Programmer",
      company: "Vectra Automation",
      period: "May 2022 — Jul 2025",
      summary: "Worked as part of the Python team to develop automation tools and data-driven utilities that improved engineering workflow efficiency, including CAD drawing data processing and scripting solutions to reduce repetitive tasks. Supported algorithmic engineering use cases, Power BI analytics and visualization, and developed strong foundations in quantitative problem-solving and automation architecture."

    }
  ],

  // ---------- COMPANY / WORK PROJECTS ----------
  // These live in private repos, so there's no `link` field for these —
  // just a short, honest description of the problem and your contribution.
  companyProjects: [
    {
      title: "Multi Part Sheet Stack – Drawing Layout Automation with Spatial Views Placement Algorithms",
      period: "2024-Present",
      bullets: [
        "Built an end-to-end Python ETL pipeline processing 1,000+ technical drawing sheets, fully replacing manual workflows with automated data extraction, transformation, and layout generation.",
        "Parsed and transformed nested DrawViews/DrawSheet JSON using Pandas and custom Python parsers; applied Bin Packing and clustering algorithms for spatial optimization.",
        "Reduced drawing sheet area by 25% and processing time by 99%+; achieved 100% automation accuracy with zero manual intervention.",
        "Delivered solution as a versioned Python .whl package with CI/CD deployment scripts, cutting rollout time by 40%."

      ],
      stack: ["Python", "ETL", "Data Packaging", "Bin Packing Algorithms", "CI/CD"],
      note: "Private repository — internal to the company(Vectra)"
    },
    {
      title: "3D Wireframe Plotting Tool | Vectra Internal Prototype",
      period: "2023",
      bullets: [
        "Built a Python data pipeline to ingest PartSweepData (30 geometric entities: faces, edges, vertices) from Excel,apply transformations, and render 3D wireframe visualizations using Matplotlib.",
        "Performed EDA on sweep geometry data to validate model accuracy and detect outliers prior to rendering.",
        "Automated 70% of manual modeling effort; achieved sub-150-second render time for standard parts and reduced complex part effort by 60%.",
        "Replaced dependency on external CAD tools with an in-house Python solution, improving reproducibility and reducing costs."
      ],
      stack: ["Python", "Matplotlib", "Data Analysis", "3D Visualization", "Excel Data Processing"],
      note: "Private repository — internal to the company"
    }
  ],

  // ---------- PERSONAL PROJECTS ----------
  // `link` can point to a public GitHub repo, a live demo, or be left blank.
  personalProjects: [
    {
      title: "Student Event Streaming & ETL Pipeline",
      period: "2026",
      bullets: [
        "Designed and built an end-to-end streaming data pipeline simulating a university student information system,generating continuous student events (admissions, semester results) every 10 seconds.",
        "Implemented a Python-based event producer publishing 13-attribute student records to an Apache Kafka topic ,built a Kafka Consumer to persist raw event streams to a events.csv dataset for downstream processing.",
        "Authored an Apache Airflow DAG to orchestrate the ETL pipeline on a 5-minute schedule, transforming raw event data into 5 analytical datasets: Student Master, Branch Summary, Semester Summary, Admission Year Summary and CGPA Distribution.",
        "Containerized the full Kafka and Airflow infrastructure using Docker Compose, enabling reproducible, environment-independent execution."
      ],
      stack: ["Python", "Apache Kafka", "Apache Airflow", "Docker", "Pandas"],
      link: "https://github.com/Amir4python/airflow-engg-student-etl"
    },
    {
      title: "PySpark ETL Pipeline For E-Commerce (Medallion Architecture + MinIO)",
      period: "2026",
      bullets: [
        "Built an end-to-end batch ETL pipeline (PySpark, medallion architecture, S3-compatible object storage) processing e-commerce order data with automated cleaning, deduplication, and business aggregation",
        "An end-to-end batch ETL pipeline built with PySpark, following the medallion architecture (bronze → silver → gold), using MinIO as S3-compatible object storage. ",
        "Since MinIO speaks the same s3a:// protocol as AWS S3, this pipeline runs unchanged on real AWS S3 by swapping credentials."
      ],
      stack: ["Python", "PySpark", "MinIO", "ETL", "Medallion Architecture"],
      link: "https://github.com/Amir4python/pyspark-medallion-etl"
    }
  ],

  // ---------- CERTIFICATIONS ----------
  // `image` is the path to a thumbnail — drop your certificate image
  // (screenshot or exported badge) into the images/certs folder and
  // point to it here. `link` should go to the verification page.
  certifications: [
    {
      name: "Google Data Analysis with Python",
      issuer: "Google / Coursera",
      date: "Jun 23, 2026",
      image: "images/certs/Coursera WG1DKQ9OOODQ.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/WG1DKQ9OOODQ"
    },
    {
      name: "Python 3 Programming",
      issuer: "University of Michigan",
      date: "May 8, 2026",
      image: "images/certs/Coursera 4V8W5J2R4PKY.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/4V8W5J2R4PKY"
    },
    {
      name: "ETL and Data Pipelines with Shell, Airflow and Kafka",
      issuer: "IBM",
      date: "Jul 20, 2026",
      image: "images/certs/Coursera LCBU51UXY6TM.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/LCBU51UXY6TM"
    },

    {
      name: "Microsoft Power BI Data Analyst Professional",
      issuer: "Google",
      date: "Jun 29, 2026",
      image: "images/certs/Coursera SIS7I26GBOVU.png",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/SIS7I26GBOVU"
    },
             {
      name: "Getting Started with Git and GitHub",
      issuer: "IBM",
      date: "July 8, 2025",
      image: "images/certs/Coursera 14O51FJKEMN2.png",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/14O51FJKEMN2"
    },
          {
      name: "Azure DevOps and Continuous Delivery with Git",
      issuer: "Packt",
      date: "May 17 2026",
      image: "images/certs/Coursera KJULJN18M0RK.png",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/KJULJN18M0RK"
    },
          {
      name: "Python Scripting for DevOps",
      issuer: "LearnQuest",
      date: "April 26, 2026",
      image: "images/certs/Coursera SIEE8YJLR2NP.png",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/SIEE8YJLR2NP"
    },
    {
      name: "Google Data Analytics",
      issuer: "Google",
      date: "Jun 23, 2026",
      image: "images/certs/Coursera 2DZZ16GJTN8U.png",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/2DZZ16GJTN8U"
    },
    {
      name: "Google AI",
      issuer: "Google",
      date: "Jun 23, 2026",
      image: "images/certs/Coursera 8Z2N82J6JN50.png",
      link: "https://www.coursera.org/account/accomplishments/specialization/certificate/8Z2N82J6JN50"
    },
    {
      name: "Python Essentials 1",
      issuer: "CISCO",
      date: "February 16, 2023",
      image: "images/certs/PythonEssentials1Update20260909.png",
      link: "https://www.credly.com/earner/earned/badge/cb9c1fed-7ac9-47a1-934c-b4e9587185c5"
    },
    {
      name: "Python Essentials 2",
      issuer: "CISCO",
      date: "February 27, 2023",
      image: "images/certs/PythonEssentials2Update20260909.png",
      link: "https://www.credly.com/earner/earned/badge/b53f7549-c322-4b42-8387-2692f3d34f11"
    },
    {
      name: "Scientific Computing with Python",
      issuer: "freeCodeCamp",
      date: "Jan 1, 2022",
      image: "images/certs/fcc_sci_python.png",
      link: "https://www.freecodecamp.org/certification/amircode/scientific-computing-with-python-v7"
    },

        {
      name: "SQL for Data Science",
      issuer: "University of California",
      date: "Nov 22, 2025",
      image: "images/certs/Coursera SGDC8BMQ5JTM.png",
      link: "https://www.coursera.org/account/accomplishments/professional-cert/SGDC8BMQ5JTM"
    },
 
  ]
};

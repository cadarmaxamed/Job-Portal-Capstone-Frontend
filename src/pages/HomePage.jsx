import React from 'react';
import MainContent from '../components/MainContent';

const HomePage = () => {
  const jobListings = [
        {
            "id": "1",
            "jobTitle": "Senior Software Engineer",
            "jobDescription": "Leading the design and development of complex software systems. Mentoring junior team members and driving technical excellence.",
            "company": "Microsoft",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "Java",
                "Python",
                "C++",
                "JavaScript",
                "Distributed Systems"
            ],
            "experienceLevel": "Senior Level"
        },
        {
            "id": "2",
            "jobTitle": "Senior Data Scientist",
            "jobDescription": "Developing advanced machine learning models to extract insights from large datasets. Collaborating with cross-functional teams to deploy data-driven solutions.",
            "company": "Google",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "Python",
                "Machine Learning",
                "Statistics",
                "Data Visualization"
            ],
            "experienceLevel": "Senior Level"
        },
        {
            "id": "3",
            "jobTitle": "Network Engineer",
            "jobDescription": "Designing and implementing scalable and secure network infrastructure. Troubleshooting network issues and optimizing performance.",
            "company": "Amazon",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "Networking Protocols",
                "Firewalls",
                "Routing",
                "Switching",
                "Network Security"
            ],
            "experienceLevel": "Mid to Senior Level"
        },
        {
            "id": "4",
            "jobTitle": "Cybersecurity Analyst",
            "jobDescription": "Monitoring and analyzing security events to protect against cyber threats. Implementing security measures and conducting risk assessments.",
            "company": "Apple",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "Cybersecurity",
                "Security Information and Event Management (SIEM)",
                "Incident Response",
                "Penetration Testing"
            ],
            "experienceLevel": "Mid Level"
        },
        {
            "id": "5",
            "jobTitle": "UI/UX Designer",
            "jobDescription": "Creating intuitive user interfaces and engaging user experiences for web and mobile applications. Conducting user research and iterating designs based on feedback.",
            "company": "Facebook",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "User Interface Design",
                "User Experience Design",
                "Wireframing",
                "Prototyping",
                "Adobe Creative Suite"
            ],
            "experienceLevel": "Mid to Senior Level"
        },
        {
            "id": "6",
            "jobTitle": "Cloud Solutions Architect",
            "jobDescription": "Designing and implementing cloud-based solutions that meet business requirements. Developing architecture frameworks and providing guidance on cloud best practices.",
            "company": "IBM",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "Cloud Computing",
                "Amazon Web Services (AWS)",
                "Microsoft Azure",
                "Google Cloud Platform (GCP)",
                "Infrastructure as Code (IaC)"
            ],
            "experienceLevel": "Senior Level"
        },
        {
            "id": "7",
            "jobTitle": "Software Development Engineer in Test (SDET)",
            "jobDescription": "Designing and implementing automated test frameworks for software quality assurance. Collaborating with developers to ensure robust test coverage.",
            "company": "Netflix",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "Test Automation",
                "Java",
                "Python",
                "Selenium",
                "Continuous Integration/Continuous Deployment (CI/CD)"
            ],
            "experienceLevel": "Mid to Senior Level"
        },
        {
            "id": "8",
            "jobTitle": "AI/ML Engineer",
            "jobDescription": "Building and deploying machine learning models for various applications. Optimizing algorithms for performance and scalability.",
            "company": "Tesla",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "Machine Learning",
                "Deep Learning",
                "Python",
                "TensorFlow",
                "Natural Language Processing (NLP)"
            ],
            "experienceLevel": "Mid to Senior Level"
        },
        {
            "id": "9",
            "jobTitle": "Blockchain Developer",
            "jobDescription": "Developing decentralized applications (DApps) and smart contracts on blockchain platforms. Implementing blockchain protocols and consensus algorithms.",
            "company": "Ethereum",
            "postedDate": "2024-03-14",
            "skillsRequired": [
                "Blockchain",
                "Smart Contracts",
                "Solidity",
                "Decentralized Finance (DeFi)",
                "Cryptocurrency"
            ],
            "experienceLevel": "Mid to Senior Level"
        }
    ];
    
 

  return (
    <div>
      <h1>Welcome to TechJobs For All</h1>
      <MainContent jobListings={jobListings} />
    </div>
  );
};

export default HomePage;
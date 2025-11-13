import { Actor, WorkflowStep } from './types';

export const SINGAPORE_WORKFLOW_DATA: WorkflowStep[] = [
  {
    id: 1,
    title: "1. Accessing the Website",
    actor: Actor.USER,
    description: "A user visits Mingvi.com and is redirected to the appropriate regional URL based on their detected location.",
  },
  {
    id: 2,
    title: "2. Employer Login",
    actor: Actor.USER,
    description: "The employer logs in using one of the available secure methods.",
    branches: [
      { id: '2a', title: "Single Pass Login", actor: Actor.SYSTEM, description: "A quick, unified login system." },
      { id: '2b', title: "OTP Login", actor: Actor.SYSTEM, description: "Security via a One-Time Password." },
    ],
  },
  {
    id: 3,
    title: "3. Profile Creation",
    actor: Actor.USER,
    description: "After logging in, the employer creates their profile with personal and company information, then submits for approval.",
  },
  {
    id: 4,
    title: "4. Admin Approval",
    actor: Actor.ADMIN,
    description: "The admin reviews the submitted profile details and makes a decision.",
    branches: [
      { id: '4a', title: "Profile Approved", actor: Actor.SYSTEM, description: "Employer is granted approval and can post jobs." },
      { id: '4b', title: "Profile Rejected", actor: Actor.SYSTEM, description: "Employer is notified and cannot post jobs.", isFinal: true },
    ],
  },
  {
    id: 5,
    title: "5. Posting Jobs",
    actor: Actor.USER,
    description: "Once approved, the employer posts a job, restricted to 'Domestic Helpers in Singapore'. The listing appears on their dashboard.",
  },
  {
    id: 6,
    title: "6. Candidate Matching",
    actor: Actor.SYSTEM,
    description: "The platform's automation system analyzes the job and matches relevant candidates based on skills and experience.",
  },
  {
    id: 7,
    title: "7. Interview Invitations",
    actor: Actor.USER,
    description: "The employer reviews matched candidates and sends interview invitations. Links are sent automatically to both parties.",
  },
  {
    id: 8,
    title: "8. Interview Management",
    actor: Actor.USER,
    description: "The employer manages interviews through their dashboard.",
    branches: [
      { id: '8a', title: "View Upcoming", actor: Actor.SYSTEM, description: "See all scheduled interviews." },
      { id: '8b', title: "View Past", actor: Actor.SYSTEM, description: "Review completed interviews." },
      { id: '8c', title: "Reschedule", actor: Actor.SYSTEM, description: "Option to change interview time." },
    ],
  },
  {
    id: 9,
    title: "9. Payment",
    actor: Actor.USER,
    description: "After a successful interview, the employer makes a payment to hire the selected candidate, triggering documentation.",
  },
  {
    id: 10,
    title: "10. Document Uploads",
    actor: Actor.USER,
    description: "The selected candidate uploads required documents in two phases for processing.",
     branches: [
      { id: '10a', title: "Phase 1 Docs", actor: Actor.SYSTEM, description: "Visa Documents, Work Permits." },
      { id: '10b', title: "Phase 2 Docs", actor: Actor.SYSTEM, description: "Tickets, MOM Certificate." },
    ],
  },
  {
    id: 11,
    title: "11. Document Verification",
    actor: Actor.USER,
    description: "The employer verifies the documents uploaded by the candidate and updates the status for each phase.",
     branches: [
      { id: '11a', title: "Verify Phase 1", actor: Actor.SYSTEM, description: "Status changed to Phase 1 Complete." },
      { id: '11b', title: "Verify Phase 2", actor: Actor.SYSTEM, description: "Status changed to Phase 2 Complete." },
    ],
  },
  {
    id: 12,
    title: "12. Sending the Contract",
    actor: Actor.USER,
    description: "After all documents are verified, the employer sends the official contract to the candidate for review and signing.",
  },
  {
    id: 13,
    title: "13. Finalizing the Hire",
    actor: Actor.SYSTEM,
    description: "The candidate signs the contract, is officially onboarded, and is ready for employment.",
    isFinal: true,
  },
];

export const PHILIPPINES_WORKFLOW_DATA: WorkflowStep[] = [
  {
    id: 'P1',
    title: "1. Accessing the Website",
    actor: Actor.USER,
    description: "A user visits MingHwee.com and is redirected to ph.minghwee.com for the Philippines region.",
  },
  {
    id: 'P2',
    title: "2. Employer Login",
    actor: Actor.USER,
    description: "The employer logs in using a One-Time Password sent to their registered phone or email.",
    branches: [
      { id: 'P2a', title: "OTP Login", actor: Actor.SYSTEM, description: "Security via a One-Time Password." },
    ],
  },
  {
    id: 'P3',
    title: "3. Profile Creation",
    actor: Actor.USER,
    description: "After logging in, the employer creates their profile with their location set to the Philippines and submits for approval.",
  },
  {
    id: 'P4',
    title: "4. Admin Approval",
    actor: Actor.ADMIN,
    description: "The admin reviews the submitted profile details and makes a decision.",
    branches: [
      { id: 'P4a', title: "Profile Approved", actor: Actor.SYSTEM, description: "Employer is granted approval and can post jobs." },
      { id: 'P4b', title: "Profile Rejected", actor: Actor.SYSTEM, description: "Employer is notified and cannot post jobs.", isFinal: true },
    ],
  },
  {
    id: 'P5',
    title: "5. Posting Jobs",
    actor: Actor.USER,
    description: "Once approved, the employer can post any type of job without restriction. The listing appears on their dashboard.",
  },
  {
    id: 'P6',
    title: "6. Candidate Matching",
    actor: Actor.SYSTEM,
    description: "The platform's automation system analyzes the job and matches relevant candidates based on skills and experience.",
  },
  {
    id: 'P7',
    title: "7. Interview Invitations",
    actor: Actor.USER,
    description: "The employer reviews matched candidates and sends interview invitations. Links are sent automatically to both parties.",
  },
  {
    id: 'P8',
    title: "8. Interview Management",
    actor: Actor.USER,
    description: "The employer manages interviews through their dashboard.",
    branches: [
      { id: 'P8a', title: "View Upcoming", actor: Actor.SYSTEM, description: "See all scheduled interviews." },
      { id: 'P8b', title: "View Past", actor: Actor.SYSTEM, description: "Review completed interviews." },
      { id: 'P8c', title: "Reschedule", actor: Actor.SYSTEM, description: "Option to change interview time." },
    ],
  },
  {
    id: 'P9',
    title: "9. Payment",
    actor: Actor.USER,
    description: "After a successful interview, the employer makes a payment to hire the selected candidate, triggering documentation.",
  },
  {
    id: 'P10',
    title: "10. Document Uploads",
    actor: Actor.USER,
    description: "The selected candidate uploads required documents in two phases for processing.",
     branches: [
      { id: 'P10a', title: "Phase 1 Docs", actor: Actor.SYSTEM, description: "Visa Documents, Work Permits." },
      { id: 'P10b', title: "Phase 2 Docs", actor: Actor.SYSTEM, description: "Tickets." },
    ],
  },
  {
    id: 'P11',
    title: "11. Document Verification",
    actor: Actor.USER,
    description: "The employer verifies the documents uploaded by the candidate and updates the status for each phase.",
     branches: [
      { id: 'P11a', title: "Verify Phase 1", actor: Actor.SYSTEM, description: "Status changed to Phase 1 Complete." },
      { id: 'P11b', "title": "Verify Phase 2", actor: Actor.SYSTEM, description: "Status changed to Phase 2 Complete." },
    ],
  },
  {
    id: 'P12',
    title: "12. Sending the Contract",
    actor: Actor.USER,
    description: "After all documents are verified, the employer sends the official contract to the candidate for review and signing.",
  },
  {
    id: 'P13',
    title: "13. Finalizing the Hire",
    actor: Actor.SYSTEM,
    description: "The candidate signs the contract, is officially onboarded, and is ready for employment.",
    isFinal: true,
  },
];


export const ADMIN_WORKFLOW_DATA: WorkflowStep[] = [
  {
    id: 'A1',
    title: "1. Admin Login",
    actor: Actor.ADMIN,
    description: "Admin logs into the platform to access the admin panel.",
  },
  {
    id: 'A2',
    title: "2. Admin Dashboard",
    actor: Actor.ADMIN,
    description: "The central hub for monitoring platform activity. The admin can navigate to different management sections from here.",
    branches: [
      {
        id: 'A2a',
        title: "View Statistics",
        actor: Actor.SYSTEM,
        description: "Dashboard shows hire stats, popular job categories, total users, active employers, new jobs, and pending approvals.",
      },
      {
        id: 'A2b',
        title: "Navigate Panel",
        actor: Actor.SYSTEM,
        description: "Uses the navigation bar to access: Dashboard, Candidate, Employer, and Approval sections.",
      },
    ],
  },
  {
    id: 'A3',
    title: "3. Management Sections",
    actor: Actor.ADMIN,
    description: "Admin performs specific management tasks based on the selected navigation option.",
    branches: [
      {
        id: 'A3a',
        title: "Candidate Management",
        actor: Actor.ADMIN,
        description: "View a list of all candidates. Can view individual profiles (name, contact, skills, etc.) and their uploaded documents.",
      },
      {
        id: 'A3b',
        title: "Employer Management",
        actor: Actor.ADMIN,
        description: "View a list of all employers. Can view profiles, verification documents (UOM), and manage their job posting status.",
        branches: [
            { id: 'A3b-1', title: 'Approve Employer', actor: Actor.SYSTEM, description: 'Grant the employer rights to post jobs.' },
            { id: 'A3b-2', title: 'Deny Employer', actor: Actor.SYSTEM, description: 'Reject the employer\'s application.' },
            { id: 'A3b-3', title: 'Status Pending', actor: Actor.SYSTEM, description: 'The default status until a decision is made.' }
        ]
      },
      {
        id: 'A3c',
        title: "Interview Approval",
        actor: Actor.ADMIN,
        description: "Review and approve interview invitations sent from employers to candidates. Approval is required for the interview to proceed.",
      },
    ],
    isFinal: true
  },
];

export const CANDIDATE_WORKFLOW_DATA: WorkflowStep[] = [
  {
    id: 'C1',
    title: "1. Accessing the Website",
    actor: Actor.USER,
    description: "A candidate visits Minghwee.com to begin their job search journey.",
  },
  {
    id: 'C2',
    title: "2. Candidate Login",
    actor: Actor.USER,
    description: "The candidate logs in based on their geographical location.",
    branches: [
      { 
        id: 'C2a', 
        title: "Singapore Candidate", 
        actor: Actor.SYSTEM, 
        description: "Candidates from Singapore have two login options.",
        branches: [
            { id: 'C2a-1', title: 'Single Pass Login', actor: Actor.SYSTEM, description: 'A quick, unified login system.' },
            { id: 'C2a-2', title: 'OTP Login', actor: Actor.SYSTEM, description: 'Secure login via a One-Time Password.' }
        ]
      },
      { 
        id: 'C2b', 
        title: "International Candidate", 
        actor: Actor.SYSTEM, 
        description: "Candidates from all other countries use OTP.",
        branches: [
            { id: 'C2b-1', title: 'OTP Login', actor: Actor.SYSTEM, description: 'Secure login via a One-Time Password.' }
        ]
      },
    ],
  },
  {
    id: 'C3',
    title: "3. Profile Creation",
    actor: Actor.USER,
    description: "Candidate creates their profile by providing personal information, experience, and uploading their resume and documents.",
  },
  {
    id: 'C4',
    title: "4. Automated Job Matching",
    actor: Actor.SYSTEM,
    description: "The platform's automation system matches the candidate's profile to relevant job openings.",
  },
  {
    id: 'C5',
    title: "5. Internal Review Process",
    actor: Actor.SYSTEM,
    description: "Behind the scenes, matched profiles are reviewed by employers, who can then send interview invites that require admin approval.",
    branches: [
      { id: 'C5a', title: 'Employer Sends Invite', actor: Actor.ADMIN, description: 'An employer reviews the matched candidate and initiates an interview invite.' },
      { id: 'C5b', title: 'Admin Approves Invite', actor: Actor.ADMIN, description: 'The admin must approve the invite before it is sent to the candidate.' },
    ],
  },
  {
    id: 'C6',
    title: "6. Receive Interview Invite",
    actor: Actor.USER,
    description: "Once approved, the interview invite appears on the candidate's dashboard with job details.",
    branches: [
        { id: 'C6a', title: 'Accept Invite', actor: Actor.SYSTEM, description: 'Candidate accepts and proceeds to scheduling.' },
        { id: 'C6b', title: 'Reject Invite', actor: Actor.SYSTEM, description: 'Candidate declines the interview. The process ends for this job.', isFinal: true },
    ]
  },
  {
    id: 'C7',
    title: "7. Interview Scheduled",
    actor: Actor.SYSTEM,
    description: "Upon acceptance, an interview link is automatically sent to both the candidate and the employer.",
  },
  {
    id: 'C8',
    title: "8. Post-Interview Decision",
    actor: Actor.USER,
    description: "After the interview, if selected, the candidate decides whether to proceed with the hiring process.",
     branches: [
        { id: 'C8a', title: 'Proceed to Next Step', actor: Actor.SYSTEM, description: 'Candidate wishes to continue to the documentation stage.' },
        { id: 'C8b', title: 'Withdraw Application', actor: Actor.SYSTEM, description: 'Candidate is no longer interested. The process ends.', isFinal: true },
    ]
  },
  {
    id: 'C9',
    title: "9. Document Uploads",
    actor: Actor.USER,
    description: "The candidate uploads required documents in two separate phases as requested.",
     branches: [
      { id: 'C9a', title: "Upload Phase 1 Docs", actor: Actor.SYSTEM, description: "e.g., identity proof, work permits." },
      { id: 'C9b', title: "Upload Phase 2 Docs", actor: Actor.SYSTEM, description: "e.g., tickets, specific certificates." },
    ],
  },
  {
    id: 'C10',
    title: "10. Document Verification by Employer",
    actor: Actor.ADMIN,
    description: "The employer reviews the uploaded documents and updates their status on a progress tracker.",
     branches: [
      { id: 'C10a', title: "Documents Approved", actor: Actor.SYSTEM, description: "All documents are verified and accepted." },
      { id: 'C10b', title: "Re-upload Requested", actor: Actor.SYSTEM, description: "Candidate is asked to re-upload incorrect or missing documents." },
      { id: 'C10c', title: "Application Rejected", actor: Actor.SYSTEM, description: "Documents do not meet requirements. Process ends.", isFinal: true },
    ],
  },
  {
    id: 'C11',
    title: "11. Offer Letter Sent",
    actor: Actor.ADMIN,
    description: "After successful document verification, the employer sends an official offer letter to the candidate.",
  },
  {
    id: 'C12',
    title: "12. Finalizing the Hire",
    actor: Actor.USER,
    description: "The candidate reviews and signs the offer letter, officially completing the hiring process and beginning onboarding.",
    isFinal: true,
  },
];
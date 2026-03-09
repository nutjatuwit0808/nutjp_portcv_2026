export interface CaseStudy {
  id: string;
  title: string;
  domain: string[];
  descriptionTH: string;
  descriptionEN: string;
  tech: string[];
  folder: string;
  featured: boolean;
  order: number;
}

export interface CaseStudiesData {
  repoBaseUrl: string;
  items: CaseStudy[];
}

export interface ToeicCredential {
  score: number;
  maxScore: number;
  date: string;
  pdfUrl?: string | null;
}

export interface EducationSummary {
  subject: string;
  grade: string;
}

export interface EducationCredential {
  institution: string;
  degree: string;
  period: string;
  transcriptUrl?: string | null;
  gpa?: string;
  summary?: EducationSummary[];
}

export interface CredentialsData {
  toeic?: ToeicCredential;
  education?: EducationCredential;
}

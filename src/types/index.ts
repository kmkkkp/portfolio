export interface TechItem {
  name: string;
  icon: React.ReactNode;
}

export interface TechDetails extends TechItem {
  experienceLevel: number; // 0-100
  yearsOfExperience: number;
  keySkills: string[];
  projects?: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  skills?: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  period: string;
  liveUrl?: string;
  repoUrl?: string;
}
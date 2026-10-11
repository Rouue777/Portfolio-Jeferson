export type NavigationItem = {
  label: string;
  href: `#${string}`;
};

export type Expertise = {
  title: string;
  description: string;
  technologies: readonly string[];
};

export type Experience = {
  role: string;
  company: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: readonly string[];
};

export type Education = {
  course: string;
  institution: string;
  startDate: string;
  endDate?: string;
  status: string;
  description?: string;
};

export type Language = {
  name: string;
  level: string;
};

export type Project = {
  title: string;
  image: string;
  description: string;
  technicalContext: string;
  technologies: readonly string[];
  liveUrl?: string;
  githubUrl?: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

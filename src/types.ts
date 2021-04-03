export type AboutType = {
  icon: React.ReactElement;
  attribute: string;
  value: string;
};

export type EducationType = {
  dateFrom: string;
  dateTo?: string;
  name: string;
  location: string;
  description: string;
  gpa?: number;
  maxGpa?: number;
  info?: string;
  link?: string;
};

export type SkillType = {
  name: string;
  percentage: number;
  level: string;
  color: string;
  src: string;
};

export type QualificationType = {
  name: string;
  language: string;
  date: string;
  link: string;
};

export type WorkExperienceType = {
  dateFrom: string;
  dateTo?: string;
  company: string;
  location: string;
  description_ja: string;
  description_en: string;
  technologies: string[];
  link: string;
};

export type WorkType = {
  name: string;
  description: string;
  technologies: string[];
  link: string;
};

export type CompetitiveProgrammingSite = "AtCoder" | "Codeforces" | "TopCoder";

export type CompetitiveProgrammingType = {
  name: CompetitiveProgrammingSite;
  userId: string;
  link: string;
};

export type ContestType = {
  date: string;
  name: string;
  result?: string;
  link: string;
  icon: React.ReactElement;
};

export type ContactType = {
  icon: React.ReactElement;
  color: string;
  link: string;
};

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
};

export type ContestType = {
  date: string;
  name: string;
  result?: string;
  link: string;
};

export type ContactType = {
  icon: React.ReactElement;
  color: string;
  link: string;
};

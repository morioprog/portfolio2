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

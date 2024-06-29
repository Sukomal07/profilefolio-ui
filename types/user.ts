export interface PersonalInfo {
  name: string
  email: string
  phone: string
  jobTitle: string
  summary: string
}

export interface ResumeState {
  personalInfo: PersonalInfo
}

export interface PersonalInfo {
  name: string
  email: string
  phone: string
  jobTitle: string
  summary: string
  links: {
    key: string
    value: string
  }[]
  location: {
    address: string
    postalCode: string
    city: string
    countryCode: string
    region: string
  }
}

export interface ResumeState {
  personalInfo: PersonalInfo
}

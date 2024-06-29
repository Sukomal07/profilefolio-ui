import { ResumeState } from '@/types/user'
import { atom } from 'recoil'

export const resumeState = atom<ResumeState>({
  key: 'resumeState',
  default: {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      jobTitle: '',
      summary: '',
    },
  },
})

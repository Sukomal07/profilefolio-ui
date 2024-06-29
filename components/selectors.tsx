import { selector } from 'recoil'
import { resumeState } from './atoms'
import { PersonalInfo } from '@/types/user'

export const personalInfoSelector = selector<PersonalInfo>({
  key: 'personalInfoSelector',
  get: ({ get }) => get(resumeState).personalInfo,
  set: ({ get, set }, newPersonalInfo) => {
    const state = get(resumeState)
    set(resumeState, {
      ...state,
      personalInfo: newPersonalInfo as PersonalInfo,
    })
  },
})

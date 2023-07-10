import { ProfileCard } from './ui/ProfileCard/ProfileCard';
import { fetchProfileData } from './model/services/fetchProfileData/fetchProfileData';
import type { ProfileSchema, Profile } from './model/types/profile';
import { profileActions, profileReducer } from './model/slice/profileSlice';

export {
  type ProfileSchema,
  type Profile,
  profileActions,
  profileReducer,
  fetchProfileData,
  ProfileCard
};

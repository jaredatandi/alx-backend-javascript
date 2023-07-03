import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const picResponse = await uploadPhoto();
    const userResponse = await createUser();

    return {
      photo: picResponse,
      user: userResponse,
    };
  } catch (error) {
    console.error(error);
  }
  return {
    photo: null,
    user: null,
  };
}

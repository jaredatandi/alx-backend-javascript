import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  let results = {};

  try {
    const pic = await (uploadPhoto());
    const user = await (createUser());

    results = { pic, user };
  } catch (err) {
    results = { photo: null, user: null };
  }
  return results;
}

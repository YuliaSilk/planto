import { getDownloadURL, ref } from 'firebase/storage';
import { storage } from './firebase';

const getImageUrl = async (gsPath: string) => {
  const path = gsPath.replace(/^gs:\/\/[^/]+\//, '');
  const storageRef = ref(storage, path);
  return await getDownloadURL(storageRef);
};

export default getImageUrl;
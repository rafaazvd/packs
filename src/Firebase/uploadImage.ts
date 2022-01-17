import {storage} from '../config/firebase';

export const uploadImageToStorage = async (file: any, uid: any) => {
  return new Promise(async (resolve, reject) => {
    if (!file) {
      reject('No image file');
    }
    const storageRef = storage.ref();
    const newFileName = `images/${uid}`;
    console.log('file', file)
    console.log('id', uid)
    const metadata = {
      contentType: file?.mimetype,
    };
    const uploadImg: any = await storageRef.child(newFileName).put(file[0], metadata);
    try {
      uploadImg.ref.getDownloadURL().then((downloadURL: any) => {
        resolve(downloadURL);
      });
    } catch (error) {
      resolve(error);
    }
  });
};

export const deleteImageToStorage = async (name: any) => {
  // Create a reference to the file to delete
  const storageRef = storage.ref();
  const desertRef = storageRef.child(`images/${name}`);

  // Delete the file
  await desertRef.delete().then(() => {
    console.log('delete ok');
  }).catch((error) => {
    console.log(error);
  });
};
export default deleteImageToStorage;

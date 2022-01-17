import {auth} from '../config/firebase';

async function authEmail(email: string, password: string): Promise<any> {
  const response = await auth.signInWithEmailAndPassword(email, password).catch((error) => {
    const errorMessage = error.message;
    alert(errorMessage);
    // ...
  });
  return response;
  // createUserWithEmailAndPassword(auth, email, password)
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log({
  //     errorCode,
  //     errorMessage,
  //   })
  //   // ..
  // });
}

export { authEmail };

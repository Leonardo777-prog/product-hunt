import app from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./config";
console.log(firebaseConfig);
class Firebase {
  constructor() {
    if (app.apps.length === 0) {
      app.initializeApp(firebaseConfig);
    }
    this.auth = app.auth;
  }

  // registra un user
  async registerUser(nombre, email, pass) {
    const nuevoUser = await this.auth().createUserWithEmailAndPassword(
      email,
      pass
    );
    return await nuevoUser.user.updateProfile({
      displayName: nombre,
    });
  }
}

const firebase = new Firebase();
export default firebase;

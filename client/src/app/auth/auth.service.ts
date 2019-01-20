import * as firebase from 'firebase';
import { tokenKey } from '@angular/core/src/view';

export class AuthService {
    token: string;

    signinUser (email: string, password: string) {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(
                response => {
                    firebase.auth().currentUser.getIdToken()
                        .then(
                            (token: string) => this.token = token
                        );
                    console.log(response);
                }
            )
            .catch(
                error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('wrong password');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                }
            );
    }

    signoutUser () {
        firebase.auth().signOut();
    }

    isAuthenticated () {
        return this.token != null;
    }

}

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


async function login(body: { password: string, email: string }) {
    const auth = getAuth();
    await signInWithEmailAndPassword(auth, body.email, body.password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user)
            return user
        })
        .catch((error) => {
            return error
        })
}

export { login }
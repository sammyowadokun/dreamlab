"use client";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginPage() {
    const handleLogin = async () => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, "[EMAIL_ADDRESS]", "qwerty");
    };

    return <button onClick={handleLogin}>Login</button>;
}
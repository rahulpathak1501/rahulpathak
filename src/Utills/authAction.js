import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from "firebase/auth";
import { auth } from "../Utills/Firebase";

// Initialize reCAPTCHA
//   const setupRecaptcha = () => {
//     window.recaptchaVerifier = new RecaptchaVerifier(
//       "recaptcha-container",
//       {
//         size: "invisible", // Can be "normal" or "compact" if visible reCAPTCHA is preferred
//         callback: (response) => {
//           console.log("reCAPTCHA solved", response);
//         },
//       },
//       auth
//     );
//   };

export const loginWithEmail = async (email, password, setLoading, navigate) => {
  setLoading(true);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const token = await user.getIdToken();
    localStorage.setItem("token", JSON.stringify(token));

    navigate("/");
    // console.log("Login successful with email!");
  } catch (error) {
    console.error("Error during login with email:", error.message);
  } finally {
    setLoading(false);
  }
};

//   export const loginWithPhoneNumber = async (phoneNumber, setLoading, navigate) => {
//     setLoading(true);
//     try {
//       setupRecaptcha();
//       const appVerifier = window.recaptchaVerifier;
//       const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);

//       // Ask the user for the verification code they received via SMS
//       const verificationCode = window.prompt("Please enter the verification code sent to your phone:");

//       if (verificationCode) {
//         const userCredential = await confirmationResult.confirm(verificationCode);
//         const user = userCredential.user;

//         const token = await user.getIdToken();
//         localStorage.setItem("token", JSON.stringify(token));

//         navigate("/");
//         console.log("Login successful with phone number!");
//       }
//     } catch (error) {
//       console.error("Error during login with phone number:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

export const monitorAuthState = (navigate) => {
  const unsubscribe = onAuthStateChanged(auth, async (user) => {
    if (user) {
      try {
        const token = await user.getIdToken();
        localStorage.setItem("token", JSON.stringify(token));
        navigate("/");
      } catch (error) {
        console.error("Error getting user token:", error);
      }
    }
  });
  return unsubscribe;
};

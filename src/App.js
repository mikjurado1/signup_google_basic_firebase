
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "./firebase/firebaseConfig"


function App() {
  const handleGoogle= async(e)=>{
    const provider = await new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }
  return (
    <>
      <div className='pt-36 w-full flex'>
        <button onClick={handleGoogle} className='btn btn-info'>Sign in with Google</button>
      </div>
    </>
  );
}

export default App;

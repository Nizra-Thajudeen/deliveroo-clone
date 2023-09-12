import Navbar from "../../components/navbar/Navbar";
import styles from "./login.module.css";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className={styles.loginDiv}>
        <h2 className={styles.heading}>Sign up or log in</h2>
        <label className={styles.label}>Email address</label>
        <input
          placeholder="e.g. name@example.com"
          className={styles.inputText}
        ></input>
        <button className={styles.continueBtn}>Continue</button>
        <button className={styles.forgotPwd}>Forgot Password?</button>
      </div>
    </div>
  );
};

export default Login;

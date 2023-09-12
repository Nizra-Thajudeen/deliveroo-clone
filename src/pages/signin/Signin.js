import SignupButton from "../../components/signupButton/SignupButton";
import Navbar from "../../components/navbar/Navbar";
import styles from "./signin.module.css";
import Divider from "@mui/material/Divider";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();

  const onEmailSignin = () => {
    navigate("/login");
  };

  return (
    <div>
      <Navbar />
      <div className={styles.signinDiv}>
        <h2 className={styles.heading}>Sign up or log in</h2>
        <SignupButton
          icon={<FacebookIcon />}
          text={"Continue with Facebook"}
          bgColor={"#4c69ba"}
          fontColor={"#ffffff"}
          isBorder={false}
        />
        <SignupButton
          icon={<GoogleIcon />}
          text={"Continue with Google"}
          bgColor={"#ffffff"}
          fontColor={"#000000"}
          isBorder={true}
        />
        <SignupButton
          icon={<AppleIcon />}
          text={"Continue with Apple"}
          bgColor={"#000000"}
          fontColor={"#ffffff"}
          isBorder={false}
        />
        <Divider className={styles.divider}>or</Divider>
        <SignupButton
          icon={<MailOutlineIcon />}
          text={"Continue with email"}
          bgColor={"#00ccbc"}
          fontColor={"#ffffff"}
          isBorder={false}
          onClickHandle={onEmailSignin}
        />
        <p className={styles.policy}>
          By continuing you agree to our{" "}
          <a className={styles.link} href="https://deliveroo.co.uk/legal">
            T&Cs
          </a>
          . Please also check out our
          <a className={styles.link} href="https://deliveroo.co.uk/privacy">
            Privacy Policy
          </a>
          . We use your data to offer you a personalised experience and to
          better understand and improve our services.
          <a
            className={styles.link}
            href="https://deliveroo.co.uk/privacy#use-of-your-information"
          >
            For more information see here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Signin;

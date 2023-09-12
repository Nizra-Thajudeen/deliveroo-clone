import styles from "./signupButton.module.css";

const SignupButton = ({
  icon,
  text,
  bgColor,
  fontColor,
  isBorder,
  onClickHandle,
}) => {
  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: fontColor,
        border: isBorder ? "1px solid #a3afaf" : "none",
      }}
      className={styles.signupButton}
      onClick={() => onClickHandle()}
    >
      <div className={styles.innerButton}>
        {icon}
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
};

export default SignupButton;

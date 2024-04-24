import React from "react";
import styles from "../Login/Login.module.css"
const SignUp = () => {
  return (
    <div className={`${styles.body}`}>
      <section className={`${styles.section}`}>
        <div className={`${styles.login}`}>
          <h2>SIGN UP</h2>
          <div className={`${styles.inputBox}`}>
            <div className={`${styles.name}`}>
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
            <input type="submit" value="SIGN UP" id={`${styles.btn}`} />
          </div>
          <div className={`${styles.group1}`}>
            <a href="/login">already have an account? Sign In</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUp;

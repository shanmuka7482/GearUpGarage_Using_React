import React from 'react'
import styles from "./Login.module.css"
const Login = () => {
  return (
    <div className={`${styles.body}`}>
        <section className={`${styles.section}`}>
		<div className={`${styles.login}`}>
		    <h2>SIGN IN</h2>
			<div className={`${styles.inputBox}`}>
				<input type="text" placeholder="Username"/>
			</div>
			<div className={`${styles.inputBox}`}>
				<input type="password" placeholder="Password"/>
			</div>
			<div className={`${styles.inputBox}`}>
				<input type="submit" value="Login" id={`${styles.btn}`}/>
			</div>
			<div className={`${styles.group}`}>
				<a href="#">Forget Password</a>
				<a href="/signup">Signup</a>
			</div>
		</div>
	</section>

    </div>
  )
}

export default Login
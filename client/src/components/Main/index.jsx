import styles from "./styles.module.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>Social Media</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Sair
				</button>
			</nav>
		</div>
	);
};

export default Main;

import { UIButton } from "../../UI/Button/UIButton.tsx";
import { useUser } from "./useUser.ts";
import styles from "./UserAuthControls.module.css";

export const UserAuthControls = () => {
	const { user, login, logout } = useUser();

	if (!user) {
		return (
			<UIButton size="small" color="primary" onClick={() => login()}>
				Войти
			</UIButton>
		);
	}

	return (
		<div className={styles.controls}>
			<span className={styles.name}>{user.name}</span>
			<UIButton size="small" color="neutral" onClick={logout}>
				Выйти
			</UIButton>
		</div>
	);
};

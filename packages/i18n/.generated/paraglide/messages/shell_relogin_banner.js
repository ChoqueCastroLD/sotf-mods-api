/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Relogin_BannerInputs */

const en_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We rebuilt SOTF Mods. Log in again with the same password.`)
};

const es_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconstruimos SOTF Mods. Inicia sesión de nuevo con la misma contraseña.`)
};

const de_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wir haben SOTF Mods neu aufgebaut. Melde dich mit demselben Passwort erneut an.`)
};

const fr_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nous avons reconstruit SOTF Mods. Reconnectez-vous avec le même mot de passe.`)
};

const it_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbiamo ricostruito SOTF Mods. Accedi di nuovo con la stessa password.`)
};

const nl_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`We hebben SOTF Mods opnieuw opgebouwd. Log opnieuw in met hetzelfde wachtwoord.`)
};

const pl_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przebudowaliśmy SOTF Mods. Zaloguj się ponownie tym samym hasłem.`)
};

const pt_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reconstruímos o SOTF Mods. Entre novamente com a mesma senha.`)
};

const ru_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мы перестроили SOTF Mods. Войдите снова с тем же паролем.`)
};

const sv_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vi har byggt om SOTF Mods. Logga in igen med samma lösenord.`)
};

const tr_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods yeniden oluşturuldu. Aynı şifrenizle tekrar giriş yapın.`)
};

const zh_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods 已重建。请使用相同的密码重新登录。`)
};

const ja_shell_relogin_banner = /** @type {(inputs: Shell_Relogin_BannerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`SOTF Mods を再構築しました。同じパスワードでもう一度ログインしてください。`)
};

/**
* | output |
* | --- |
* | "We rebuilt SOTF Mods. Log in again with the same password." |
*
* @param {Shell_Relogin_BannerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_relogin_banner = /** @type {((inputs?: Shell_Relogin_BannerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Relogin_BannerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_relogin_banner(inputs)
	if (locale === "de") return de_shell_relogin_banner(inputs)
	if (locale === "fr") return fr_shell_relogin_banner(inputs)
	if (locale === "it") return it_shell_relogin_banner(inputs)
	if (locale === "nl") return nl_shell_relogin_banner(inputs)
	if (locale === "pl") return pl_shell_relogin_banner(inputs)
	if (locale === "pt") return pt_shell_relogin_banner(inputs)
	if (locale === "ru") return ru_shell_relogin_banner(inputs)
	if (locale === "sv") return sv_shell_relogin_banner(inputs)
	if (locale === "tr") return tr_shell_relogin_banner(inputs)
	if (locale === "zh") return zh_shell_relogin_banner(inputs)
	if (locale === "ja") return ja_shell_relogin_banner(inputs)
	return en_shell_relogin_banner(inputs)
});

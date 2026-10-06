/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Flag_ResetInputs */

const en_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password changed. Log in with your new password.`)
};

const es_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraseña cambiada. Inicia sesión con la nueva.`)
};

const de_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort geändert. Melde dich mit deinem neuen Passwort an.`)
};

const fr_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe modifié. Connectez-vous avec le nouveau.`)
};

const it_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password cambiata. Accedi con la nuova password.`)
};

const nl_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord gewijzigd. Log in met je nieuwe wachtwoord.`)
};

const pl_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hasło zmienione. Zaloguj się nowym hasłem.`)
};

const pt_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senha alterada. Entre com a nova senha.`)
};

const ru_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пароль изменён. Войдите с новым паролем.`)
};

const sv_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösenordet är ändrat. Logga in med ditt nya lösenord.`)
};

const tr_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifre değiştirildi. Yeni şifrenle giriş yap.`)
};

const zh_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码已修改。请使用新密码登录。`)
};

const ja_auth_flag_reset = /** @type {(inputs: Auth_Flag_ResetInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを変更しました。新しいパスワードでログインしてください。`)
};

/**
* | output |
* | --- |
* | "Password changed. Log in with your new password." |
*
* @param {Auth_Flag_ResetInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_flag_reset = /** @type {((inputs?: Auth_Flag_ResetInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Flag_ResetInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_flag_reset(inputs)
	if (locale === "de") return de_auth_flag_reset(inputs)
	if (locale === "fr") return fr_auth_flag_reset(inputs)
	if (locale === "it") return it_auth_flag_reset(inputs)
	if (locale === "nl") return nl_auth_flag_reset(inputs)
	if (locale === "pl") return pl_auth_flag_reset(inputs)
	if (locale === "pt") return pt_auth_flag_reset(inputs)
	if (locale === "ru") return ru_auth_flag_reset(inputs)
	if (locale === "sv") return sv_auth_flag_reset(inputs)
	if (locale === "tr") return tr_auth_flag_reset(inputs)
	if (locale === "zh") return zh_auth_flag_reset(inputs)
	if (locale === "ja") return ja_auth_flag_reset(inputs)
	return en_auth_flag_reset(inputs)
});

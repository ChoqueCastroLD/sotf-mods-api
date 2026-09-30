/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Security_Tip_PasswordInputs */

const en_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use a password you don’t use anywhere else.`)
};

const es_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una contraseña que no uses en ningún otro sitio.`)
};

const de_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwende ein Passwort, das du nirgendwo sonst nutzt.`)
};

const fr_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisez un mot de passe que vous n’utilisez nulle part ailleurs.`)
};

const it_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usa una password che non usi da nessun’altra parte.`)
};

const nl_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruik een wachtwoord dat je nergens anders gebruikt.`)
};

const pl_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używaj hasła, którego nie używasz nigdzie indziej.`)
};

const pt_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Use uma senha que você não usa em nenhum outro lugar.`)
};

const ru_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Используйте пароль, который больше нигде не используете.`)
};

const sv_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Använd ett lösenord som du inte använder någon annanstans.`)
};

const tr_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başka hiçbir yerde kullanmadığın bir şifre kullan.`)
};

const zh_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用一个别处从未用过的密码。`)
};

const ja_settings_security_tip_password = /** @type {(inputs: Settings_Security_Tip_PasswordInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`他では使っていないパスワードを使いましょう。`)
};

/**
* | output |
* | --- |
* | "Use a password you don’t use anywhere else." |
*
* @param {Settings_Security_Tip_PasswordInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_security_tip_password = /** @type {((inputs?: Settings_Security_Tip_PasswordInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Security_Tip_PasswordInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_security_tip_password(inputs)
	if (locale === "de") return de_settings_security_tip_password(inputs)
	if (locale === "fr") return fr_settings_security_tip_password(inputs)
	if (locale === "it") return it_settings_security_tip_password(inputs)
	if (locale === "nl") return nl_settings_security_tip_password(inputs)
	if (locale === "pl") return pl_settings_security_tip_password(inputs)
	if (locale === "pt") return pt_settings_security_tip_password(inputs)
	if (locale === "ru") return ru_settings_security_tip_password(inputs)
	if (locale === "sv") return sv_settings_security_tip_password(inputs)
	if (locale === "tr") return tr_settings_security_tip_password(inputs)
	if (locale === "zh") return zh_settings_security_tip_password(inputs)
	if (locale === "ja") return ja_settings_security_tip_password(inputs)
	return en_settings_security_tip_password(inputs)
});

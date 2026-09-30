/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_SubmitInputs */

const en_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Change password`)
};

const es_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambiar contraseña`)
};

const de_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort ändern`)
};

const fr_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changer de mot de passe`)
};

const it_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambia password`)
};

const nl_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord wijzigen`)
};

const pl_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmień hasło`)
};

const pt_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mudar senha`)
};

const ru_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сменить пароль`)
};

const sv_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byt lösenord`)
};

const tr_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifreyi değiştir`)
};

const zh_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更改密码`)
};

const ja_settings_password_submit = /** @type {(inputs: Settings_Password_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを変更`)
};

/**
* | output |
* | --- |
* | "Change password" |
*
* @param {Settings_Password_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_submit = /** @type {((inputs?: Settings_Password_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_submit(inputs)
	if (locale === "de") return de_settings_password_submit(inputs)
	if (locale === "fr") return fr_settings_password_submit(inputs)
	if (locale === "it") return it_settings_password_submit(inputs)
	if (locale === "nl") return nl_settings_password_submit(inputs)
	if (locale === "pl") return pl_settings_password_submit(inputs)
	if (locale === "pt") return pt_settings_password_submit(inputs)
	if (locale === "ru") return ru_settings_password_submit(inputs)
	if (locale === "sv") return sv_settings_password_submit(inputs)
	if (locale === "tr") return tr_settings_password_submit(inputs)
	if (locale === "zh") return zh_settings_password_submit(inputs)
	if (locale === "ja") return ja_settings_password_submit(inputs)
	return en_settings_password_submit(inputs)
});

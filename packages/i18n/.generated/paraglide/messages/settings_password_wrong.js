/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_WrongInputs */

const en_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That password isn’t right.`)
};

const es_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esa contraseña no es correcta.`)
};

const de_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieses Passwort ist nicht richtig.`)
};

const fr_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce mot de passe est incorrect.`)
};

const it_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La password non è corretta.`)
};

const nl_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dat wachtwoord klopt niet.`)
};

const pl_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To hasło jest nieprawidłowe.`)
};

const pt_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Essa senha não está correta.`)
};

const ru_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неверный пароль.`)
};

const sv_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösenordet stämmer inte.`)
};

const tr_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu şifre doğru değil.`)
};

const zh_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码不正确。`)
};

const ja_settings_password_wrong = /** @type {(inputs: Settings_Password_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードが正しくありません。`)
};

/**
* | output |
* | --- |
* | "That password isn’t right." |
*
* @param {Settings_Password_WrongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_wrong = /** @type {((inputs?: Settings_Password_WrongInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_WrongInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_wrong(inputs)
	if (locale === "de") return de_settings_password_wrong(inputs)
	if (locale === "fr") return fr_settings_password_wrong(inputs)
	if (locale === "it") return it_settings_password_wrong(inputs)
	if (locale === "nl") return nl_settings_password_wrong(inputs)
	if (locale === "pl") return pl_settings_password_wrong(inputs)
	if (locale === "pt") return pt_settings_password_wrong(inputs)
	if (locale === "ru") return ru_settings_password_wrong(inputs)
	if (locale === "sv") return sv_settings_password_wrong(inputs)
	if (locale === "tr") return tr_settings_password_wrong(inputs)
	if (locale === "zh") return zh_settings_password_wrong(inputs)
	if (locale === "ja") return ja_settings_password_wrong(inputs)
	return en_settings_password_wrong(inputs)
});

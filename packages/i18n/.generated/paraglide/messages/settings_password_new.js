/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_NewInputs */

const en_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New password`)
};

const es_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraseña nueva`)
};

const de_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neues Passwort`)
};

const fr_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau mot de passe`)
};

const it_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuova password`)
};

const nl_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw wachtwoord`)
};

const pl_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe hasło`)
};

const pt_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nova senha`)
};

const ru_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый пароль`)
};

const sv_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nytt lösenord`)
};

const tr_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni şifre`)
};

const zh_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新密码`)
};

const ja_settings_password_new = /** @type {(inputs: Settings_Password_NewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいパスワード`)
};

/**
* | output |
* | --- |
* | "New password" |
*
* @param {Settings_Password_NewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_new = /** @type {((inputs?: Settings_Password_NewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_NewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_new(inputs)
	if (locale === "de") return de_settings_password_new(inputs)
	if (locale === "fr") return fr_settings_password_new(inputs)
	if (locale === "it") return it_settings_password_new(inputs)
	if (locale === "nl") return nl_settings_password_new(inputs)
	if (locale === "pl") return pl_settings_password_new(inputs)
	if (locale === "pt") return pt_settings_password_new(inputs)
	if (locale === "ru") return ru_settings_password_new(inputs)
	if (locale === "sv") return sv_settings_password_new(inputs)
	if (locale === "tr") return tr_settings_password_new(inputs)
	if (locale === "zh") return zh_settings_password_new(inputs)
	if (locale === "ja") return ja_settings_password_new(inputs)
	return en_settings_password_new(inputs)
});

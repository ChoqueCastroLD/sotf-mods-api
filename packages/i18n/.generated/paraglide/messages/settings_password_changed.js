/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_ChangedInputs */

const en_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password changed`)
};

const es_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contraseña cambiada`)
};

const de_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Passwort geändert`)
};

const fr_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mot de passe modifié`)
};

const it_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Password cambiata`)
};

const nl_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wachtwoord gewijzigd`)
};

const pl_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmieniono hasło`)
};

const pt_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senha alterada`)
};

const ru_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пароль изменён`)
};

const sv_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösenordet har bytts`)
};

const tr_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şifre değiştirildi`)
};

const zh_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密码已更改`)
};

const ja_settings_password_changed = /** @type {(inputs: Settings_Password_ChangedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`パスワードを変更しました`)
};

/**
* | output |
* | --- |
* | "Password changed" |
*
* @param {Settings_Password_ChangedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_changed = /** @type {((inputs?: Settings_Password_ChangedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_ChangedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_changed(inputs)
	if (locale === "de") return de_settings_password_changed(inputs)
	if (locale === "fr") return fr_settings_password_changed(inputs)
	if (locale === "it") return it_settings_password_changed(inputs)
	if (locale === "nl") return nl_settings_password_changed(inputs)
	if (locale === "pl") return pl_settings_password_changed(inputs)
	if (locale === "pt") return pt_settings_password_changed(inputs)
	if (locale === "ru") return ru_settings_password_changed(inputs)
	if (locale === "sv") return sv_settings_password_changed(inputs)
	if (locale === "tr") return tr_settings_password_changed(inputs)
	if (locale === "zh") return zh_settings_password_changed(inputs)
	if (locale === "ja") return ja_settings_password_changed(inputs)
	return en_settings_password_changed(inputs)
});

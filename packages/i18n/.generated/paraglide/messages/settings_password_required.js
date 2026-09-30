/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_RequiredInputs */

const en_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter your current password.`)
};

const es_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escribe tu contraseña actual.`)
};

const de_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gib dein aktuelles Passwort ein.`)
};

const fr_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Saisissez votre mot de passe actuel.`)
};

const it_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inserisci la password attuale.`)
};

const nl_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voer je huidige wachtwoord in.`)
};

const pl_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wpisz obecne hasło.`)
};

const pt_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Digite sua senha atual.`)
};

const ru_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Введите текущий пароль.`)
};

const sv_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ange ditt nuvarande lösenord.`)
};

const tr_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut şifreni gir.`)
};

const zh_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请输入当前密码。`)
};

const ja_settings_password_required = /** @type {(inputs: Settings_Password_RequiredInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在のパスワードを入力してください。`)
};

/**
* | output |
* | --- |
* | "Enter your current password." |
*
* @param {Settings_Password_RequiredInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_required = /** @type {((inputs?: Settings_Password_RequiredInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_RequiredInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_required(inputs)
	if (locale === "de") return de_settings_password_required(inputs)
	if (locale === "fr") return fr_settings_password_required(inputs)
	if (locale === "it") return it_settings_password_required(inputs)
	if (locale === "nl") return nl_settings_password_required(inputs)
	if (locale === "pl") return pl_settings_password_required(inputs)
	if (locale === "pt") return pt_settings_password_required(inputs)
	if (locale === "ru") return ru_settings_password_required(inputs)
	if (locale === "sv") return sv_settings_password_required(inputs)
	if (locale === "tr") return tr_settings_password_required(inputs)
	if (locale === "zh") return zh_settings_password_required(inputs)
	if (locale === "ja") return ja_settings_password_required(inputs)
	return en_settings_password_required(inputs)
});

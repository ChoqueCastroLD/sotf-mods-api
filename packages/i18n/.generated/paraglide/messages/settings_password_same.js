/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Password_SameInputs */

const en_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose a password different from the current one.`)
};

const es_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige una contraseña distinta de la actual.`)
};

const de_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle ein anderes Passwort als das aktuelle.`)
};

const fr_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez un mot de passe différent de l’actuel.`)
};

const it_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli una password diversa da quella attuale.`)
};

const nl_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies een ander wachtwoord dan je huidige.`)
};

const pl_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz hasło inne niż obecne.`)
};

const pt_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha uma senha diferente da atual.`)
};

const ru_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите пароль, отличный от текущего.`)
};

const sv_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj ett annat lösenord än det nuvarande.`)
};

const tr_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mevcut şifrenden farklı bir şifre seç.`)
};

const zh_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择与当前密码不同的新密码。`)
};

const ja_settings_password_same = /** @type {(inputs: Settings_Password_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`現在とは違うパスワードを選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose a password different from the current one." |
*
* @param {Settings_Password_SameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_password_same = /** @type {((inputs?: Settings_Password_SameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Password_SameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_password_same(inputs)
	if (locale === "de") return de_settings_password_same(inputs)
	if (locale === "fr") return fr_settings_password_same(inputs)
	if (locale === "it") return it_settings_password_same(inputs)
	if (locale === "nl") return nl_settings_password_same(inputs)
	if (locale === "pl") return pl_settings_password_same(inputs)
	if (locale === "pt") return pt_settings_password_same(inputs)
	if (locale === "ru") return ru_settings_password_same(inputs)
	if (locale === "sv") return sv_settings_password_same(inputs)
	if (locale === "tr") return tr_settings_password_same(inputs)
	if (locale === "zh") return zh_settings_password_same(inputs)
	if (locale === "ja") return ja_settings_password_same(inputs)
	return en_settings_password_same(inputs)
});

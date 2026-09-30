/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_HandleInputs */

const en_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle`)
};

const es_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuario`)
};

const de_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle`)
};

const fr_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Identifiant`)
};

const it_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome utente`)
};

const nl_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Handle`)
};

const pl_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nazwa użytkownika`)
};

const pt_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nome de usuário`)
};

const ru_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Имя пользователя`)
};

const sv_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Användarnamn`)
};

const tr_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullanıcı adı`)
};

const zh_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用户名`)
};

const ja_settings_handle = /** @type {(inputs: Settings_HandleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ユーザー名`)
};

/**
* | output |
* | --- |
* | "Handle" |
*
* @param {Settings_HandleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_handle = /** @type {((inputs?: Settings_HandleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_HandleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_handle(inputs)
	if (locale === "de") return de_settings_handle(inputs)
	if (locale === "fr") return fr_settings_handle(inputs)
	if (locale === "it") return it_settings_handle(inputs)
	if (locale === "nl") return nl_settings_handle(inputs)
	if (locale === "pl") return pl_settings_handle(inputs)
	if (locale === "pt") return pt_settings_handle(inputs)
	if (locale === "ru") return ru_settings_handle(inputs)
	if (locale === "sv") return sv_settings_handle(inputs)
	if (locale === "tr") return tr_settings_handle(inputs)
	if (locale === "zh") return zh_settings_handle(inputs)
	if (locale === "ja") return ja_settings_handle(inputs)
	return en_settings_handle(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Code_WrongInputs */

const en_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`That code is not correct.`)
};

const es_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ese código no es correcto.`)
};

const de_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Code ist nicht korrekt.`)
};

const fr_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce code n’est pas correct.`)
};

const it_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il codice non è corretto.`)
};

const nl_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die code klopt niet.`)
};

const pl_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten kod jest nieprawidłowy.`)
};

const pt_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esse código não está correto.`)
};

const ru_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Неверный код.`)
};

const sv_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Koden stämmer inte.`)
};

const tr_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kod doğru değil.`)
};

const zh_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证码不正确。`)
};

const ja_settings_2fa_code_wrong = /** @type {(inputs: Settings_2fa_Code_WrongInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コードが正しくありません。`)
};

/**
* | output |
* | --- |
* | "That code is not correct." |
*
* @param {Settings_2fa_Code_WrongInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_code_wrong = /** @type {((inputs?: Settings_2fa_Code_WrongInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Code_WrongInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_code_wrong(inputs)
	if (locale === "de") return de_settings_2fa_code_wrong(inputs)
	if (locale === "fr") return fr_settings_2fa_code_wrong(inputs)
	if (locale === "it") return it_settings_2fa_code_wrong(inputs)
	if (locale === "nl") return nl_settings_2fa_code_wrong(inputs)
	if (locale === "pl") return pl_settings_2fa_code_wrong(inputs)
	if (locale === "pt") return pt_settings_2fa_code_wrong(inputs)
	if (locale === "ru") return ru_settings_2fa_code_wrong(inputs)
	if (locale === "sv") return sv_settings_2fa_code_wrong(inputs)
	if (locale === "tr") return tr_settings_2fa_code_wrong(inputs)
	if (locale === "zh") return zh_settings_2fa_code_wrong(inputs)
	if (locale === "ja") return ja_settings_2fa_code_wrong(inputs)
	return en_settings_2fa_code_wrong(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Codes_DoneInputs */

const en_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I saved them`)
};

const es_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya los he guardado`)
};

const de_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ich habe sie gespeichert`)
};

const fr_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je les ai enregistrés`)
};

const it_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Li ho salvati`)
};

const nl_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ik heb ze bewaard`)
};

const pl_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisałem je`)
};

const pt_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Já os guardei`)
};

const ru_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Я сохранил(а)`)
};

const sv_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jag har sparat dem`)
};

const tr_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydettim`)
};

const zh_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`我已保存`)
};

const ja_settings_2fa_codes_done = /** @type {(inputs: Settings_2fa_Codes_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存しました`)
};

/**
* | output |
* | --- |
* | "I saved them" |
*
* @param {Settings_2fa_Codes_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_codes_done = /** @type {((inputs?: Settings_2fa_Codes_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Codes_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_codes_done(inputs)
	if (locale === "de") return de_settings_2fa_codes_done(inputs)
	if (locale === "fr") return fr_settings_2fa_codes_done(inputs)
	if (locale === "it") return it_settings_2fa_codes_done(inputs)
	if (locale === "nl") return nl_settings_2fa_codes_done(inputs)
	if (locale === "pl") return pl_settings_2fa_codes_done(inputs)
	if (locale === "pt") return pt_settings_2fa_codes_done(inputs)
	if (locale === "ru") return ru_settings_2fa_codes_done(inputs)
	if (locale === "sv") return sv_settings_2fa_codes_done(inputs)
	if (locale === "tr") return tr_settings_2fa_codes_done(inputs)
	if (locale === "zh") return zh_settings_2fa_codes_done(inputs)
	if (locale === "ja") return ja_settings_2fa_codes_done(inputs)
	return en_settings_2fa_codes_done(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_Status_OffInputs */

const en_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hidden`)
};

const es_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto`)
};

const de_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ausgeblendet`)
};

const fr_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masqué`)
};

const it_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascosti`)
};

const nl_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verborgen`)
};

const pl_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryte`)
};

const pt_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto`)
};

const ru_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыт`)
};

const sv_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dolt`)
};

const tr_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizli`)
};

const zh_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏`)
};

const ja_settings_nsfw_status_off = /** @type {(inputs: Settings_Nsfw_Status_OffInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Hidden" |
*
* @param {Settings_Nsfw_Status_OffInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_status_off = /** @type {((inputs?: Settings_Nsfw_Status_OffInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_Status_OffInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_status_off(inputs)
	if (locale === "de") return de_settings_nsfw_status_off(inputs)
	if (locale === "fr") return fr_settings_nsfw_status_off(inputs)
	if (locale === "it") return it_settings_nsfw_status_off(inputs)
	if (locale === "nl") return nl_settings_nsfw_status_off(inputs)
	if (locale === "pl") return pl_settings_nsfw_status_off(inputs)
	if (locale === "pt") return pt_settings_nsfw_status_off(inputs)
	if (locale === "ru") return ru_settings_nsfw_status_off(inputs)
	if (locale === "sv") return sv_settings_nsfw_status_off(inputs)
	if (locale === "tr") return tr_settings_nsfw_status_off(inputs)
	if (locale === "zh") return zh_settings_nsfw_status_off(inputs)
	if (locale === "ja") return ja_settings_nsfw_status_off(inputs)
	return en_settings_nsfw_status_off(inputs)
});

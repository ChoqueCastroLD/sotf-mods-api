/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reason_HarassmentInputs */

const en_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harassment`)
};

const es_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acoso`)
};

const de_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belästigung`)
};

const fr_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Harcèlement`)
};

const it_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Molestie`)
};

const nl_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intimidatie`)
};

const pl_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nękanie`)
};

const pt_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assédio`)
};

const ru_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Травля`)
};

const sv_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trakasserier`)
};

const tr_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taciz`)
};

const zh_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`骚扰`)
};

const ja_ranger_reason_harassment = /** @type {(inputs: Ranger_Reason_HarassmentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`嫌がらせ`)
};

/**
* | output |
* | --- |
* | "Harassment" |
*
* @param {Ranger_Reason_HarassmentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reason_harassment = /** @type {((inputs?: Ranger_Reason_HarassmentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reason_HarassmentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reason_harassment(inputs)
	if (locale === "de") return de_ranger_reason_harassment(inputs)
	if (locale === "fr") return fr_ranger_reason_harassment(inputs)
	if (locale === "it") return it_ranger_reason_harassment(inputs)
	if (locale === "nl") return nl_ranger_reason_harassment(inputs)
	if (locale === "pl") return pl_ranger_reason_harassment(inputs)
	if (locale === "pt") return pt_ranger_reason_harassment(inputs)
	if (locale === "ru") return ru_ranger_reason_harassment(inputs)
	if (locale === "sv") return sv_ranger_reason_harassment(inputs)
	if (locale === "tr") return tr_ranger_reason_harassment(inputs)
	if (locale === "zh") return zh_ranger_reason_harassment(inputs)
	if (locale === "ja") return ja_ranger_reason_harassment(inputs)
	return en_ranger_reason_harassment(inputs)
});

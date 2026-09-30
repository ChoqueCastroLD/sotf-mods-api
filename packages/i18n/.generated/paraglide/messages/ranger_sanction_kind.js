/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_KindInputs */

const en_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanction`)
};

const es_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanción`)
};

const de_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktion`)
};

const fr_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanction`)
};

const it_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanzione`)
};

const nl_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanctie`)
};

const pl_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sankcja`)
};

const pt_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanção`)
};

const ru_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Санкция`)
};

const sv_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktion`)
};

const tr_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaptırım`)
};

const zh_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处罚类型`)
};

const ja_ranger_sanction_kind = /** @type {(inputs: Ranger_Sanction_KindInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制裁の種類`)
};

/**
* | output |
* | --- |
* | "Sanction" |
*
* @param {Ranger_Sanction_KindInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_kind = /** @type {((inputs?: Ranger_Sanction_KindInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_KindInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_kind(inputs)
	if (locale === "de") return de_ranger_sanction_kind(inputs)
	if (locale === "fr") return fr_ranger_sanction_kind(inputs)
	if (locale === "it") return it_ranger_sanction_kind(inputs)
	if (locale === "nl") return nl_ranger_sanction_kind(inputs)
	if (locale === "pl") return pl_ranger_sanction_kind(inputs)
	if (locale === "pt") return pt_ranger_sanction_kind(inputs)
	if (locale === "ru") return ru_ranger_sanction_kind(inputs)
	if (locale === "sv") return sv_ranger_sanction_kind(inputs)
	if (locale === "tr") return tr_ranger_sanction_kind(inputs)
	if (locale === "zh") return zh_ranger_sanction_kind(inputs)
	if (locale === "ja") return ja_ranger_sanction_kind(inputs)
	return en_ranger_sanction_kind(inputs)
});

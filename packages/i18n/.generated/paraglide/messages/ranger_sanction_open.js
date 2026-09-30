/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Sanction_OpenInputs */

const en_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanction`)
};

const es_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sancionar`)
};

const de_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktionieren`)
};

const fr_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanctionner`)
};

const it_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanziona`)
};

const nl_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanctioneren`)
};

const pl_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nałóż sankcję`)
};

const pt_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sancionar`)
};

const ru_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наложить санкцию`)
};

const sv_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sanktionera`)
};

const tr_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yaptırım uygula`)
};

const zh_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`处罚`)
};

const ja_ranger_sanction_open = /** @type {(inputs: Ranger_Sanction_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制裁する`)
};

/**
* | output |
* | --- |
* | "Sanction" |
*
* @param {Ranger_Sanction_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_sanction_open = /** @type {((inputs?: Ranger_Sanction_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Sanction_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_sanction_open(inputs)
	if (locale === "de") return de_ranger_sanction_open(inputs)
	if (locale === "fr") return fr_ranger_sanction_open(inputs)
	if (locale === "it") return it_ranger_sanction_open(inputs)
	if (locale === "nl") return nl_ranger_sanction_open(inputs)
	if (locale === "pl") return pl_ranger_sanction_open(inputs)
	if (locale === "pt") return pt_ranger_sanction_open(inputs)
	if (locale === "ru") return ru_ranger_sanction_open(inputs)
	if (locale === "sv") return sv_ranger_sanction_open(inputs)
	if (locale === "tr") return tr_ranger_sanction_open(inputs)
	if (locale === "zh") return zh_ranger_sanction_open(inputs)
	if (locale === "ja") return ja_ranger_sanction_open(inputs)
	return en_ranger_sanction_open(inputs)
});

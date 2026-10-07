/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Bulk_TakeInputs */

const en_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Take`)
};

const es_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tomar`)
};

const de_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übernehmen`)
};

const fr_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prendre`)
};

const it_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prendi`)
};

const nl_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oppakken`)
};

const pl_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejmij`)
};

const pt_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assumir`)
};

const ru_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Взять`)
};

const sv_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta`)
};

const tr_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üstlen`)
};

const zh_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`认领`)
};

const ja_ranger_bulk_take = /** @type {(inputs: Ranger_Bulk_TakeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`担当する`)
};

/**
* | output |
* | --- |
* | "Take" |
*
* @param {Ranger_Bulk_TakeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_take = /** @type {((inputs?: Ranger_Bulk_TakeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_TakeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_take(inputs)
	if (locale === "de") return de_ranger_bulk_take(inputs)
	if (locale === "fr") return fr_ranger_bulk_take(inputs)
	if (locale === "it") return it_ranger_bulk_take(inputs)
	if (locale === "nl") return nl_ranger_bulk_take(inputs)
	if (locale === "pl") return pl_ranger_bulk_take(inputs)
	if (locale === "pt") return pt_ranger_bulk_take(inputs)
	if (locale === "ru") return ru_ranger_bulk_take(inputs)
	if (locale === "sv") return sv_ranger_bulk_take(inputs)
	if (locale === "tr") return tr_ranger_bulk_take(inputs)
	if (locale === "zh") return zh_ranger_bulk_take(inputs)
	if (locale === "ja") return ja_ranger_bulk_take(inputs)
	return en_ranger_bulk_take(inputs)
});

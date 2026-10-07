/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Bulk_TakenInputs */

const en_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taken: ${i?.count}`)
};

const es_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tomados: ${i?.count}`)
};

const de_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Übernommen: ${i?.count}`)
};

const fr_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Pris : ${i?.count}`)
};

const it_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Presi: ${i?.count}`)
};

const nl_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Opgepakt: ${i?.count}`)
};

const pl_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przejęto: ${i?.count}`)
};

const pt_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Assumidos: ${i?.count}`)
};

const ru_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Взято: ${i?.count}`)
};

const sv_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tagna: ${i?.count}`)
};

const tr_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Üstlenilen: ${i?.count}`)
};

const zh_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已认领：${i?.count}`)
};

const ja_ranger_bulk_taken = /** @type {(inputs: Ranger_Bulk_TakenInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`担当にしました: ${i?.count}`)
};

/**
* | output |
* | --- |
* | "Taken: {count}" |
*
* @param {Ranger_Bulk_TakenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_taken = /** @type {((inputs: Ranger_Bulk_TakenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_TakenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_taken(inputs)
	if (locale === "de") return de_ranger_bulk_taken(inputs)
	if (locale === "fr") return fr_ranger_bulk_taken(inputs)
	if (locale === "it") return it_ranger_bulk_taken(inputs)
	if (locale === "nl") return nl_ranger_bulk_taken(inputs)
	if (locale === "pl") return pl_ranger_bulk_taken(inputs)
	if (locale === "pt") return pt_ranger_bulk_taken(inputs)
	if (locale === "ru") return ru_ranger_bulk_taken(inputs)
	if (locale === "sv") return sv_ranger_bulk_taken(inputs)
	if (locale === "tr") return tr_ranger_bulk_taken(inputs)
	if (locale === "zh") return zh_ranger_bulk_taken(inputs)
	if (locale === "ja") return ja_ranger_bulk_taken(inputs)
	return en_ranger_bulk_taken(inputs)
});

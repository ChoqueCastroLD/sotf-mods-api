/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Ranger_Bulk_ReviewedInputs */

const en_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marked as reviewed: ${i?.count}`)
};

const es_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcados como revisados: ${i?.count}`)
};

const de_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Als geprüft markiert: ${i?.count}`)
};

const fr_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marqués comme revus : ${i?.count}`)
};

const it_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segnati come rivisti: ${i?.count}`)
};

const nl_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemarkeerd als gecontroleerd: ${i?.count}`)
};

const pl_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oznaczono jako sprawdzone: ${i?.count}`)
};

const pt_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcados como revisados: ${i?.count}`)
};

const ru_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отмечено как проверенные: ${i?.count}`)
};

const sv_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markerade som granskade: ${i?.count}`)
};

const tr_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İncelendi olarak işaretlenen: ${i?.count}`)
};

const zh_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已标记为已审核：${i?.count}`)
};

const ja_ranger_bulk_reviewed = /** @type {(inputs: Ranger_Bulk_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`レビュー済みにしました: ${i?.count}`)
};

/**
* | output |
* | --- |
* | "Marked as reviewed: {count}" |
*
* @param {Ranger_Bulk_ReviewedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_bulk_reviewed = /** @type {((inputs: Ranger_Bulk_ReviewedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Bulk_ReviewedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_bulk_reviewed(inputs)
	if (locale === "de") return de_ranger_bulk_reviewed(inputs)
	if (locale === "fr") return fr_ranger_bulk_reviewed(inputs)
	if (locale === "it") return it_ranger_bulk_reviewed(inputs)
	if (locale === "nl") return nl_ranger_bulk_reviewed(inputs)
	if (locale === "pl") return pl_ranger_bulk_reviewed(inputs)
	if (locale === "pt") return pt_ranger_bulk_reviewed(inputs)
	if (locale === "ru") return ru_ranger_bulk_reviewed(inputs)
	if (locale === "sv") return sv_ranger_bulk_reviewed(inputs)
	if (locale === "tr") return tr_ranger_bulk_reviewed(inputs)
	if (locale === "zh") return zh_ranger_bulk_reviewed(inputs)
	if (locale === "ja") return ja_ranger_bulk_reviewed(inputs)
	return en_ranger_bulk_reviewed(inputs)
});

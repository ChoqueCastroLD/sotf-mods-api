/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Ranger_Decided_ReviewedInputs */

const en_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marked reviewed: ${i?.title}`)
};

const es_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcado como revisado: ${i?.title}`)
};

const de_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Als geprüft markiert: ${i?.title}`)
};

const fr_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marqué comme revu : ${i?.title}`)
};

const it_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Segnato come rivisto: ${i?.title}`)
};

const nl_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gemarkeerd als gecontroleerd: ${i?.title}`)
};

const pl_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oznaczono jako sprawdzone: ${i?.title}`)
};

const pt_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Marcado como revisado: ${i?.title}`)
};

const ru_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Отмечено как проверенное: ${i?.title}`)
};

const sv_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Markerad som granskad: ${i?.title}`)
};

const tr_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`İncelendi olarak işaretlendi: ${i?.title}`)
};

const zh_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已标记为已审核：${i?.title}`)
};

const ja_ranger_decided_reviewed = /** @type {(inputs: Ranger_Decided_ReviewedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`レビュー済みにしました：${i?.title}`)
};

/**
* | output |
* | --- |
* | "Marked reviewed: {title}" |
*
* @param {Ranger_Decided_ReviewedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_decided_reviewed = /** @type {((inputs: Ranger_Decided_ReviewedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Decided_ReviewedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_decided_reviewed(inputs)
	if (locale === "de") return de_ranger_decided_reviewed(inputs)
	if (locale === "fr") return fr_ranger_decided_reviewed(inputs)
	if (locale === "it") return it_ranger_decided_reviewed(inputs)
	if (locale === "nl") return nl_ranger_decided_reviewed(inputs)
	if (locale === "pl") return pl_ranger_decided_reviewed(inputs)
	if (locale === "pt") return pt_ranger_decided_reviewed(inputs)
	if (locale === "ru") return ru_ranger_decided_reviewed(inputs)
	if (locale === "sv") return sv_ranger_decided_reviewed(inputs)
	if (locale === "tr") return tr_ranger_decided_reviewed(inputs)
	if (locale === "zh") return zh_ranger_decided_reviewed(inputs)
	if (locale === "ja") return ja_ranger_decided_reviewed(inputs)
	return en_ranger_decided_reviewed(inputs)
});

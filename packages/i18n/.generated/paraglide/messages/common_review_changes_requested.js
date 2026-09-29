/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ reason: NonNullable<unknown> }} Common_Review_Changes_RequestedInputs */

const en_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A ranger asked for changes: ${i?.reason}`)
};

const es_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un guardabosques pidió cambios: ${i?.reason}`)
};

const de_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ein Ranger bittet um Änderungen: ${i?.reason}`)
};

const fr_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un ranger demande des modifications : ${i?.reason}`)
};

const it_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un ranger ha chiesto delle modifiche: ${i?.reason}`)
};

const nl_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Een ranger vraagt om wijzigingen: ${i?.reason}`)
};

const pl_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Strażnik prosi o zmiany: ${i?.reason}`)
};

const pt_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Um guarda pediu alterações: ${i?.reason}`)
};

const ru_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Рейнджер просит внести изменения: ${i?.reason}`)
};

const sv_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`En ranger ber om ändringar: ${i?.reason}`)
};

const tr_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bir korucu değişiklik istedi: ${i?.reason}`)
};

const zh_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`护林员要求修改：${i?.reason}`)
};

const ja_common_review_changes_requested = /** @type {(inputs: Common_Review_Changes_RequestedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`レンジャーから修正の依頼があります：${i?.reason}`)
};

/**
* | output |
* | --- |
* | "A ranger asked for changes: {reason}" |
*
* @param {Common_Review_Changes_RequestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_review_changes_requested = /** @type {((inputs: Common_Review_Changes_RequestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Review_Changes_RequestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_review_changes_requested(inputs)
	if (locale === "de") return de_common_review_changes_requested(inputs)
	if (locale === "fr") return fr_common_review_changes_requested(inputs)
	if (locale === "it") return it_common_review_changes_requested(inputs)
	if (locale === "nl") return nl_common_review_changes_requested(inputs)
	if (locale === "pl") return pl_common_review_changes_requested(inputs)
	if (locale === "pt") return pt_common_review_changes_requested(inputs)
	if (locale === "ru") return ru_common_review_changes_requested(inputs)
	if (locale === "sv") return sv_common_review_changes_requested(inputs)
	if (locale === "tr") return tr_common_review_changes_requested(inputs)
	if (locale === "zh") return zh_common_review_changes_requested(inputs)
	if (locale === "ja") return ja_common_review_changes_requested(inputs)
	return en_common_review_changes_requested(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Modpacks_Review_ApprovedInputs */

const en_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} approved`)
};

const es_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aprobado`)
};

const de_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} freigegeben`)
};

const fr_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} approuvé`)
};

const it_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} approvato`)
};

const nl_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} goedgekeurd`)
};

const pl_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zatwierdzono ${i?.name}`)
};

const pt_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} aprovado`)
};

const ru_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} одобрен`)
};

const sv_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} godkändes`)
};

const tr_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} onaylandı`)
};

const zh_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已批准 ${i?.name}`)
};

const ja_modpacks_review_approved = /** @type {(inputs: Modpacks_Review_ApprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を承認しました`)
};

/**
* | output |
* | --- |
* | "{name} approved" |
*
* @param {Modpacks_Review_ApprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_approved = /** @type {((inputs: Modpacks_Review_ApprovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_ApprovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_approved(inputs)
	if (locale === "de") return de_modpacks_review_approved(inputs)
	if (locale === "fr") return fr_modpacks_review_approved(inputs)
	if (locale === "it") return it_modpacks_review_approved(inputs)
	if (locale === "nl") return nl_modpacks_review_approved(inputs)
	if (locale === "pl") return pl_modpacks_review_approved(inputs)
	if (locale === "pt") return pt_modpacks_review_approved(inputs)
	if (locale === "ru") return ru_modpacks_review_approved(inputs)
	if (locale === "sv") return sv_modpacks_review_approved(inputs)
	if (locale === "tr") return tr_modpacks_review_approved(inputs)
	if (locale === "zh") return zh_modpacks_review_approved(inputs)
	if (locale === "ja") return ja_modpacks_review_approved(inputs)
	return en_modpacks_review_approved(inputs)
});

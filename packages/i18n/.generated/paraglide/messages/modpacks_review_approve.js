/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_ApproveInputs */

const en_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve`)
};

const es_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprobar`)
};

const de_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigeben`)
};

const fr_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approuver`)
};

const it_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approva`)
};

const nl_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goedkeuren`)
};

const pl_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatwierdź`)
};

const pt_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprovar`)
};

const ru_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одобрить`)
};

const sv_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godkänn`)
};

const tr_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onayla`)
};

const zh_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`批准`)
};

const ja_modpacks_review_approve = /** @type {(inputs: Modpacks_Review_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認`)
};

/**
* | output |
* | --- |
* | "Approve" |
*
* @param {Modpacks_Review_ApproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_approve = /** @type {((inputs?: Modpacks_Review_ApproveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_ApproveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_approve(inputs)
	if (locale === "de") return de_modpacks_review_approve(inputs)
	if (locale === "fr") return fr_modpacks_review_approve(inputs)
	if (locale === "it") return it_modpacks_review_approve(inputs)
	if (locale === "nl") return nl_modpacks_review_approve(inputs)
	if (locale === "pl") return pl_modpacks_review_approve(inputs)
	if (locale === "pt") return pt_modpacks_review_approve(inputs)
	if (locale === "ru") return ru_modpacks_review_approve(inputs)
	if (locale === "sv") return sv_modpacks_review_approve(inputs)
	if (locale === "tr") return tr_modpacks_review_approve(inputs)
	if (locale === "zh") return zh_modpacks_review_approve(inputs)
	if (locale === "ja") return ja_modpacks_review_approve(inputs)
	return en_modpacks_review_approve(inputs)
});

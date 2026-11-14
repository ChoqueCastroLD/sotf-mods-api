/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Review_UnapproveInputs */

const en_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unapprove`)
};

const es_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar aprobación`)
};

const de_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigabe zurückziehen`)
};

const fr_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer l’approbation`)
};

const it_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoca approvazione`)
};

const nl_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goedkeuring intrekken`)
};

const pl_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij zatwierdzenie`)
};

const pt_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirar aprovação`)
};

const ru_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Снять одобрение`)
};

const sv_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra tillbaka godkännande`)
};

const tr_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onayı geri al`)
};

const zh_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销批准`)
};

const ja_modpacks_review_unapprove = /** @type {(inputs: Modpacks_Review_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認を取り消す`)
};

/**
* | output |
* | --- |
* | "Unapprove" |
*
* @param {Modpacks_Review_UnapproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_unapprove = /** @type {((inputs?: Modpacks_Review_UnapproveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_UnapproveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_unapprove(inputs)
	if (locale === "de") return de_modpacks_review_unapprove(inputs)
	if (locale === "fr") return fr_modpacks_review_unapprove(inputs)
	if (locale === "it") return it_modpacks_review_unapprove(inputs)
	if (locale === "nl") return nl_modpacks_review_unapprove(inputs)
	if (locale === "pl") return pl_modpacks_review_unapprove(inputs)
	if (locale === "pt") return pt_modpacks_review_unapprove(inputs)
	if (locale === "ru") return ru_modpacks_review_unapprove(inputs)
	if (locale === "sv") return sv_modpacks_review_unapprove(inputs)
	if (locale === "tr") return tr_modpacks_review_unapprove(inputs)
	if (locale === "zh") return zh_modpacks_review_unapprove(inputs)
	if (locale === "ja") return ja_modpacks_review_unapprove(inputs)
	return en_modpacks_review_unapprove(inputs)
});

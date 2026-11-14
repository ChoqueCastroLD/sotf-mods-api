/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Modpacks_Review_UnapprovedInputs */

const en_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} moved back to pending`)
};

const es_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} volvió a pendiente`)
};

const de_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wieder auf ausstehend gesetzt`)
};

const fr_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} remis en attente`)
};

const it_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} rimesso in attesa`)
};

const nl_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} terug naar in afwachting`)
};

const pl_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} wrócił do oczekujących`)
};

const pt_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} voltou para pendente`)
};

const ru_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} возвращён на проверку`)
};

const sv_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} flyttades tillbaka till väntande`)
};

const tr_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} beklemeye geri alındı`)
};

const zh_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已退回待审核`)
};

const ja_modpacks_review_unapproved = /** @type {(inputs: Modpacks_Review_UnapprovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を承認待ちに戻しました`)
};

/**
* | output |
* | --- |
* | "{name} moved back to pending" |
*
* @param {Modpacks_Review_UnapprovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_review_unapproved = /** @type {((inputs: Modpacks_Review_UnapprovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Review_UnapprovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_review_unapproved(inputs)
	if (locale === "de") return de_modpacks_review_unapproved(inputs)
	if (locale === "fr") return fr_modpacks_review_unapproved(inputs)
	if (locale === "it") return it_modpacks_review_unapproved(inputs)
	if (locale === "nl") return nl_modpacks_review_unapproved(inputs)
	if (locale === "pl") return pl_modpacks_review_unapproved(inputs)
	if (locale === "pt") return pt_modpacks_review_unapproved(inputs)
	if (locale === "ru") return ru_modpacks_review_unapproved(inputs)
	if (locale === "sv") return sv_modpacks_review_unapproved(inputs)
	if (locale === "tr") return tr_modpacks_review_unapproved(inputs)
	if (locale === "zh") return zh_modpacks_review_unapproved(inputs)
	if (locale === "ja") return ja_modpacks_review_unapproved(inputs)
	return en_modpacks_review_unapproved(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ revision: NonNullable<unknown> }} Kits_RevisionInputs */

const en_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rev ${i?.revision}`)
};

const es_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rev. ${i?.revision}`)
};

const de_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rev. ${i?.revision}`)
};

const fr_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rév. ${i?.revision}`)
};

const it_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rev. ${i?.revision}`)
};

const nl_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rev. ${i?.revision}`)
};

const pl_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`wer. ${i?.revision}`)
};

const pt_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rev. ${i?.revision}`)
};

const ru_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ред. ${i?.revision}`)
};

const sv_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rev. ${i?.revision}`)
};

const tr_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rev. ${i?.revision}`)
};

const zh_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.revision} 版`)
};

const ja_kits_revision = /** @type {(inputs: Kits_RevisionInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`rev. ${i?.revision}`)
};

/**
* | output |
* | --- |
* | "rev {revision}" |
*
* @param {Kits_RevisionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_revision = /** @type {((inputs: Kits_RevisionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_RevisionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_revision(inputs)
	if (locale === "de") return de_kits_revision(inputs)
	if (locale === "fr") return fr_kits_revision(inputs)
	if (locale === "it") return it_kits_revision(inputs)
	if (locale === "nl") return nl_kits_revision(inputs)
	if (locale === "pl") return pl_kits_revision(inputs)
	if (locale === "pt") return pt_kits_revision(inputs)
	if (locale === "ru") return ru_kits_revision(inputs)
	if (locale === "sv") return sv_kits_revision(inputs)
	if (locale === "tr") return tr_kits_revision(inputs)
	if (locale === "zh") return zh_kits_revision(inputs)
	if (locale === "ja") return ja_kits_revision(inputs)
	return en_kits_revision(inputs)
});

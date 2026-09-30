/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Builds_Banner_Archived_SuccessorInputs */

const en_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Try ${i?.name} instead`)
};

const es_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prueba ${i?.name} en su lugar`)
};

const de_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Probier stattdessen ${i?.name}`)
};

const fr_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Essayez plutôt ${i?.name}`)
};

const it_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prova invece ${i?.name}`)
};

const nl_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Probeer in plaats daarvan ${i?.name}`)
};

const pl_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wypróbuj zamiast tego ${i?.name}`)
};

const pt_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Experimente ${i?.name} no lugar`)
};

const ru_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Попробуйте вместо неё ${i?.name}`)
};

const sv_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Prova ${i?.name} i stället`)
};

const tr_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bunun yerine ${i?.name} yapısını dene`)
};

const zh_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`改试 ${i?.name}`)
};

const ja_builds_banner_archived_successor = /** @type {(inputs: Builds_Banner_Archived_SuccessorInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`代わりに ${i?.name} をお試しください`)
};

/**
* | output |
* | --- |
* | "Try {name} instead" |
*
* @param {Builds_Banner_Archived_SuccessorInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_banner_archived_successor = /** @type {((inputs: Builds_Banner_Archived_SuccessorInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Banner_Archived_SuccessorInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_banner_archived_successor(inputs)
	if (locale === "de") return de_builds_banner_archived_successor(inputs)
	if (locale === "fr") return fr_builds_banner_archived_successor(inputs)
	if (locale === "it") return it_builds_banner_archived_successor(inputs)
	if (locale === "nl") return nl_builds_banner_archived_successor(inputs)
	if (locale === "pl") return pl_builds_banner_archived_successor(inputs)
	if (locale === "pt") return pt_builds_banner_archived_successor(inputs)
	if (locale === "ru") return ru_builds_banner_archived_successor(inputs)
	if (locale === "sv") return sv_builds_banner_archived_successor(inputs)
	if (locale === "tr") return tr_builds_banner_archived_successor(inputs)
	if (locale === "zh") return zh_builds_banner_archived_successor(inputs)
	if (locale === "ja") return ja_builds_banner_archived_successor(inputs)
	return en_builds_banner_archived_successor(inputs)
});

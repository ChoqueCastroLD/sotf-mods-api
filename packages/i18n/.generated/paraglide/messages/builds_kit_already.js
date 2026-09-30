/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ kit: NonNullable<unknown> }} Builds_Kit_AlreadyInputs */

const en_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Already in ${i?.kit}`)
};

const es_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ya está en ${i?.kit}`)
};

const de_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bereits in ${i?.kit}`)
};

const fr_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Déjà dans ${i?.kit}`)
};

const it_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Già in ${i?.kit}`)
};

const nl_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Al in ${i?.kit}`)
};

const pl_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Już w ${i?.kit}`)
};

const pt_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Já está em ${i?.kit}`)
};

const ru_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Уже в ${i?.kit}`)
};

const sv_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Finns redan i ${i?.kit}`)
};

const tr_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zaten ${i?.kit} içinde`)
};

const zh_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已在 ${i?.kit} 中`)
};

const ja_builds_kit_already = /** @type {(inputs: Builds_Kit_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.kit} に追加済み`)
};

/**
* | output |
* | --- |
* | "Already in {kit}" |
*
* @param {Builds_Kit_AlreadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_kit_already = /** @type {((inputs: Builds_Kit_AlreadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_Kit_AlreadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_kit_already(inputs)
	if (locale === "de") return de_builds_kit_already(inputs)
	if (locale === "fr") return fr_builds_kit_already(inputs)
	if (locale === "it") return it_builds_kit_already(inputs)
	if (locale === "nl") return nl_builds_kit_already(inputs)
	if (locale === "pl") return pl_builds_kit_already(inputs)
	if (locale === "pt") return pt_builds_kit_already(inputs)
	if (locale === "ru") return ru_builds_kit_already(inputs)
	if (locale === "sv") return sv_builds_kit_already(inputs)
	if (locale === "tr") return tr_builds_kit_already(inputs)
	if (locale === "zh") return zh_builds_kit_already(inputs)
	if (locale === "ja") return ja_builds_kit_already(inputs)
	return en_builds_kit_already(inputs)
});

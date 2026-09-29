/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ phase: NonNullable<unknown> }} Common_Moon_LabelInputs */

const en_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tonight: ${i?.phase}`)
};

const es_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta noche: ${i?.phase}`)
};

const de_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Heute Nacht: ${i?.phase}`)
};

const fr_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cette nuit : ${i?.phase}`)
};

const it_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Stanotte: ${i?.phase}`)
};

const nl_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vannacht: ${i?.phase}`)
};

const pl_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dziś w nocy: ${i?.phase}`)
};

const pt_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta noite: ${i?.phase}`)
};

const ru_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Этой ночью: ${i?.phase}`)
};

const sv_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`I natt: ${i?.phase}`)
};

const tr_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu gece: ${i?.phase}`)
};

const zh_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今晚：${i?.phase}`)
};

const ja_common_moon_label = /** @type {(inputs: Common_Moon_LabelInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`今夜の月：${i?.phase}`)
};

/**
* | output |
* | --- |
* | "Tonight: {phase}" |
*
* @param {Common_Moon_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_moon_label = /** @type {((inputs: Common_Moon_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Moon_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_moon_label(inputs)
	if (locale === "de") return de_common_moon_label(inputs)
	if (locale === "fr") return fr_common_moon_label(inputs)
	if (locale === "it") return it_common_moon_label(inputs)
	if (locale === "nl") return nl_common_moon_label(inputs)
	if (locale === "pl") return pl_common_moon_label(inputs)
	if (locale === "pt") return pt_common_moon_label(inputs)
	if (locale === "ru") return ru_common_moon_label(inputs)
	if (locale === "sv") return sv_common_moon_label(inputs)
	if (locale === "tr") return tr_common_moon_label(inputs)
	if (locale === "zh") return zh_common_moon_label(inputs)
	if (locale === "ja") return ja_common_moon_label(inputs)
	return en_common_moon_label(inputs)
});

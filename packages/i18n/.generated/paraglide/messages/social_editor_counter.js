/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Social_Editor_CounterInputs */

const en_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const es_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const de_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const fr_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const it_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const nl_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const pl_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const pt_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const ru_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const sv_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const tr_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const zh_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const ja_social_editor_counter = /** @type {(inputs: Social_Editor_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

/**
* | output |
* | --- |
* | "{count} / {max}" |
*
* @param {Social_Editor_CounterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_editor_counter = /** @type {((inputs: Social_Editor_CounterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Editor_CounterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_editor_counter(inputs)
	if (locale === "de") return de_social_editor_counter(inputs)
	if (locale === "fr") return fr_social_editor_counter(inputs)
	if (locale === "it") return it_social_editor_counter(inputs)
	if (locale === "nl") return nl_social_editor_counter(inputs)
	if (locale === "pl") return pl_social_editor_counter(inputs)
	if (locale === "pt") return pt_social_editor_counter(inputs)
	if (locale === "ru") return ru_social_editor_counter(inputs)
	if (locale === "sv") return sv_social_editor_counter(inputs)
	if (locale === "tr") return tr_social_editor_counter(inputs)
	if (locale === "zh") return zh_social_editor_counter(inputs)
	if (locale === "ja") return ja_social_editor_counter(inputs)
	return en_social_editor_counter(inputs)
});

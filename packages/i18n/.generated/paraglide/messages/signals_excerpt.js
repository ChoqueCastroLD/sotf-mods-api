/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ text: NonNullable<unknown> }} Signals_ExcerptInputs */

const en_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.text}”`)
};

const es_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.text}»`)
};

const de_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.text}“`)
};

const fr_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`« ${i?.text} »`)
};

const it_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.text}»`)
};

const nl_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`‘${i?.text}’`)
};

const pl_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`„${i?.text}”`)
};

const pt_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.text}”`)
};

const ru_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`«${i?.text}»`)
};

const sv_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`”${i?.text}”`)
};

const tr_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.text}”`)
};

const zh_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.text}”`)
};

const ja_signals_excerpt = /** @type {(inputs: Signals_ExcerptInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.text}」`)
};

/**
* | output |
* | --- |
* | "“{text}”" |
*
* @param {Signals_ExcerptInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_excerpt = /** @type {((inputs: Signals_ExcerptInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_ExcerptInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_excerpt(inputs)
	if (locale === "de") return de_signals_excerpt(inputs)
	if (locale === "fr") return fr_signals_excerpt(inputs)
	if (locale === "it") return it_signals_excerpt(inputs)
	if (locale === "nl") return nl_signals_excerpt(inputs)
	if (locale === "pl") return pl_signals_excerpt(inputs)
	if (locale === "pt") return pt_signals_excerpt(inputs)
	if (locale === "ru") return ru_signals_excerpt(inputs)
	if (locale === "sv") return sv_signals_excerpt(inputs)
	if (locale === "tr") return tr_signals_excerpt(inputs)
	if (locale === "zh") return zh_signals_excerpt(inputs)
	if (locale === "ja") return ja_signals_excerpt(inputs)
	return en_signals_excerpt(inputs)
});

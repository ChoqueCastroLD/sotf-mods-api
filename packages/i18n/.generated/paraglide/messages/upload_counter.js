/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Upload_CounterInputs */

const en_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const es_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const de_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const fr_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const it_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const nl_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const pl_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const pt_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const ru_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const sv_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const tr_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const zh_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

const ja_upload_counter = /** @type {(inputs: Upload_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.count} / ${i?.max}`)
};

/**
* | output |
* | --- |
* | "{count} / {max}" |
*
* @param {Upload_CounterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_counter = /** @type {((inputs: Upload_CounterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_CounterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_counter(inputs)
	if (locale === "de") return de_upload_counter(inputs)
	if (locale === "fr") return fr_upload_counter(inputs)
	if (locale === "it") return it_upload_counter(inputs)
	if (locale === "nl") return nl_upload_counter(inputs)
	if (locale === "pl") return pl_upload_counter(inputs)
	if (locale === "pt") return pt_upload_counter(inputs)
	if (locale === "ru") return ru_upload_counter(inputs)
	if (locale === "sv") return sv_upload_counter(inputs)
	if (locale === "tr") return tr_upload_counter(inputs)
	if (locale === "zh") return zh_upload_counter(inputs)
	if (locale === "ja") return ja_upload_counter(inputs)
	return en_upload_counter(inputs)
});

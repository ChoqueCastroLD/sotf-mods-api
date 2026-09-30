/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Requests_ByInputs */

const en_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`by ${i?.name}`)
};

const es_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.name}`)
};

const de_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`von ${i?.name}`)
};

const fr_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`par ${i?.name}`)
};

const it_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`di ${i?.name}`)
};

const nl_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`door ${i?.name}`)
};

const pl_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`od ${i?.name}`)
};

const pt_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`de ${i?.name}`)
};

const ru_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`от ${i?.name}`)
};

const sv_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`av ${i?.name}`)
};

const tr_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} tarafından`)
};

const zh_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`由 ${i?.name} 提出`)
};

const ja_requests_by = /** @type {(inputs: Requests_ByInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`投稿者: ${i?.name}`)
};

/**
* | output |
* | --- |
* | "by {name}" |
*
* @param {Requests_ByInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_by = /** @type {((inputs: Requests_ByInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_ByInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_by(inputs)
	if (locale === "de") return de_requests_by(inputs)
	if (locale === "fr") return fr_requests_by(inputs)
	if (locale === "it") return it_requests_by(inputs)
	if (locale === "nl") return nl_requests_by(inputs)
	if (locale === "pl") return pl_requests_by(inputs)
	if (locale === "pt") return pt_requests_by(inputs)
	if (locale === "ru") return ru_requests_by(inputs)
	if (locale === "sv") return sv_requests_by(inputs)
	if (locale === "tr") return tr_requests_by(inputs)
	if (locale === "zh") return zh_requests_by(inputs)
	if (locale === "ja") return ja_requests_by(inputs)
	return en_requests_by(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ status: NonNullable<unknown>, count: NonNullable<unknown> }} Basecamp_Mods_Filter_StatusInputs */

const en_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const es_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const de_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const fr_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const it_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const nl_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const pl_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const pt_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const ru_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const sv_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const tr_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status} (${i?.count})`)
};

const zh_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}（${i?.count}）`)
};

const ja_basecamp_mods_filter_status = /** @type {(inputs: Basecamp_Mods_Filter_StatusInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.status}（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "{status} ({count})" |
*
* @param {Basecamp_Mods_Filter_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_filter_status = /** @type {((inputs: Basecamp_Mods_Filter_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Filter_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_filter_status(inputs)
	if (locale === "de") return de_basecamp_mods_filter_status(inputs)
	if (locale === "fr") return fr_basecamp_mods_filter_status(inputs)
	if (locale === "it") return it_basecamp_mods_filter_status(inputs)
	if (locale === "nl") return nl_basecamp_mods_filter_status(inputs)
	if (locale === "pl") return pl_basecamp_mods_filter_status(inputs)
	if (locale === "pt") return pt_basecamp_mods_filter_status(inputs)
	if (locale === "ru") return ru_basecamp_mods_filter_status(inputs)
	if (locale === "sv") return sv_basecamp_mods_filter_status(inputs)
	if (locale === "tr") return tr_basecamp_mods_filter_status(inputs)
	if (locale === "zh") return zh_basecamp_mods_filter_status(inputs)
	if (locale === "ja") return ja_basecamp_mods_filter_status(inputs)
	return en_basecamp_mods_filter_status(inputs)
});

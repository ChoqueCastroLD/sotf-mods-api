/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Basecamp_Mods_Filter_AllInputs */

const en_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`All (${i?.count})`)
};

const es_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Todos (${i?.count})`)
};

const de_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle (${i?.count})`)
};

const fr_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tous (${i?.count})`)
};

const it_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tutte (${i?.count})`)
};

const nl_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alle (${i?.count})`)
};

const pl_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wszystkie (${i?.count})`)
};

const pt_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Todos (${i?.count})`)
};

const ru_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Все (${i?.count})`)
};

const sv_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Alla (${i?.count})`)
};

const tr_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tümü (${i?.count})`)
};

const zh_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`全部（${i?.count}）`)
};

const ja_basecamp_mods_filter_all = /** @type {(inputs: Basecamp_Mods_Filter_AllInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`すべて（${i?.count}）`)
};

/**
* | output |
* | --- |
* | "All ({count})" |
*
* @param {Basecamp_Mods_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_filter_all = /** @type {((inputs: Basecamp_Mods_Filter_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Filter_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_filter_all(inputs)
	if (locale === "de") return de_basecamp_mods_filter_all(inputs)
	if (locale === "fr") return fr_basecamp_mods_filter_all(inputs)
	if (locale === "it") return it_basecamp_mods_filter_all(inputs)
	if (locale === "nl") return nl_basecamp_mods_filter_all(inputs)
	if (locale === "pl") return pl_basecamp_mods_filter_all(inputs)
	if (locale === "pt") return pt_basecamp_mods_filter_all(inputs)
	if (locale === "ru") return ru_basecamp_mods_filter_all(inputs)
	if (locale === "sv") return sv_basecamp_mods_filter_all(inputs)
	if (locale === "tr") return tr_basecamp_mods_filter_all(inputs)
	if (locale === "zh") return zh_basecamp_mods_filter_all(inputs)
	if (locale === "ja") return ja_basecamp_mods_filter_all(inputs)
	return en_basecamp_mods_filter_all(inputs)
});

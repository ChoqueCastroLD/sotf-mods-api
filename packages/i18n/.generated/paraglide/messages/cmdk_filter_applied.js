/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ filter: NonNullable<unknown> }} Cmdk_Filter_AppliedInputs */

const en_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter applied: ${i?.filter}`)
};

const es_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtro aplicado: ${i?.filter}`)
};

const de_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter angewendet: ${i?.filter}`)
};

const fr_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtre appliqué : ${i?.filter}`)
};

const it_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtro applicato: ${i?.filter}`)
};

const nl_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter toegepast: ${i?.filter}`)
};

const pl_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zastosowano filtr: ${i?.filter}`)
};

const pt_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtro aplicado: ${i?.filter}`)
};

const ru_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Фильтр применён: ${i?.filter}`)
};

const sv_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter tillämpat: ${i?.filter}`)
};

const tr_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtre uygulandı: ${i?.filter}`)
};

const zh_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已应用筛选：${i?.filter}`)
};

const ja_cmdk_filter_applied = /** @type {(inputs: Cmdk_Filter_AppliedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`フィルターを適用: ${i?.filter}`)
};

/**
* | output |
* | --- |
* | "Filter applied: {filter}" |
*
* @param {Cmdk_Filter_AppliedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_filter_applied = /** @type {((inputs: Cmdk_Filter_AppliedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Filter_AppliedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_filter_applied(inputs)
	if (locale === "de") return de_cmdk_filter_applied(inputs)
	if (locale === "fr") return fr_cmdk_filter_applied(inputs)
	if (locale === "it") return it_cmdk_filter_applied(inputs)
	if (locale === "nl") return nl_cmdk_filter_applied(inputs)
	if (locale === "pl") return pl_cmdk_filter_applied(inputs)
	if (locale === "pt") return pt_cmdk_filter_applied(inputs)
	if (locale === "ru") return ru_cmdk_filter_applied(inputs)
	if (locale === "sv") return sv_cmdk_filter_applied(inputs)
	if (locale === "tr") return tr_cmdk_filter_applied(inputs)
	if (locale === "zh") return zh_cmdk_filter_applied(inputs)
	if (locale === "ja") return ja_cmdk_filter_applied(inputs)
	return en_cmdk_filter_applied(inputs)
});

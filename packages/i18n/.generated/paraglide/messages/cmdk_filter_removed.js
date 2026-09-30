/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ filter: NonNullable<unknown> }} Cmdk_Filter_RemovedInputs */

const en_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter removed: ${i?.filter}`)
};

const es_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtro quitado: ${i?.filter}`)
};

const de_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter entfernt: ${i?.filter}`)
};

const fr_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtre retiré : ${i?.filter}`)
};

const it_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtro rimosso: ${i?.filter}`)
};

const nl_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter verwijderd: ${i?.filter}`)
};

const pl_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usunięto filtr: ${i?.filter}`)
};

const pt_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtro removido: ${i?.filter}`)
};

const ru_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Фильтр снят: ${i?.filter}`)
};

const sv_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter borttaget: ${i?.filter}`)
};

const tr_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filtre kaldırıldı: ${i?.filter}`)
};

const zh_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已移除筛选：${i?.filter}`)
};

const ja_cmdk_filter_removed = /** @type {(inputs: Cmdk_Filter_RemovedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`フィルターを解除: ${i?.filter}`)
};

/**
* | output |
* | --- |
* | "Filter removed: {filter}" |
*
* @param {Cmdk_Filter_RemovedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_filter_removed = /** @type {((inputs: Cmdk_Filter_RemovedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Filter_RemovedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_filter_removed(inputs)
	if (locale === "de") return de_cmdk_filter_removed(inputs)
	if (locale === "fr") return fr_cmdk_filter_removed(inputs)
	if (locale === "it") return it_cmdk_filter_removed(inputs)
	if (locale === "nl") return nl_cmdk_filter_removed(inputs)
	if (locale === "pl") return pl_cmdk_filter_removed(inputs)
	if (locale === "pt") return pt_cmdk_filter_removed(inputs)
	if (locale === "ru") return ru_cmdk_filter_removed(inputs)
	if (locale === "sv") return sv_cmdk_filter_removed(inputs)
	if (locale === "tr") return tr_cmdk_filter_removed(inputs)
	if (locale === "zh") return zh_cmdk_filter_removed(inputs)
	if (locale === "ja") return ja_cmdk_filter_removed(inputs)
	return en_cmdk_filter_removed(inputs)
});

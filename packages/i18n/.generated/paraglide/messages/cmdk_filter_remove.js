/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ filter: NonNullable<unknown> }} Cmdk_Filter_RemoveInputs */

const en_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remove filter ${i?.filter}`)
};

const es_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Quitar el filtro ${i?.filter}`)
};

const de_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter ${i?.filter} entfernen`)
};

const fr_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Retirer le filtre ${i?.filter}`)
};

const it_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Rimuovi il filtro ${i?.filter}`)
};

const nl_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Filter ${i?.filter} verwijderen`)
};

const pl_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Usuń filtr ${i?.filter}`)
};

const pt_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Remover o filtro ${i?.filter}`)
};

const ru_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Снять фильтр ${i?.filter}`)
};

const sv_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta bort filtret ${i?.filter}`)
};

const tr_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.filter} filtresini kaldır`)
};

const zh_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`移除筛选 ${i?.filter}`)
};

const ja_cmdk_filter_remove = /** @type {(inputs: Cmdk_Filter_RemoveInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`フィルター ${i?.filter} を解除`)
};

/**
* | output |
* | --- |
* | "Remove filter {filter}" |
*
* @param {Cmdk_Filter_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_filter_remove = /** @type {((inputs: Cmdk_Filter_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Filter_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_filter_remove(inputs)
	if (locale === "de") return de_cmdk_filter_remove(inputs)
	if (locale === "fr") return fr_cmdk_filter_remove(inputs)
	if (locale === "it") return it_cmdk_filter_remove(inputs)
	if (locale === "nl") return nl_cmdk_filter_remove(inputs)
	if (locale === "pl") return pl_cmdk_filter_remove(inputs)
	if (locale === "pt") return pt_cmdk_filter_remove(inputs)
	if (locale === "ru") return ru_cmdk_filter_remove(inputs)
	if (locale === "sv") return sv_cmdk_filter_remove(inputs)
	if (locale === "tr") return tr_cmdk_filter_remove(inputs)
	if (locale === "zh") return zh_cmdk_filter_remove(inputs)
	if (locale === "ja") return ja_cmdk_filter_remove(inputs)
	return en_cmdk_filter_remove(inputs)
});

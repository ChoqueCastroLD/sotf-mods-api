/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Filter_AllInputs */

const en_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All statuses`)
};

const es_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos los estados`)
};

const de_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle Status`)
};

const fr_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les statuts`)
};

const it_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutti gli stati`)
};

const nl_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle statussen`)
};

const pl_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystkie statusy`)
};

const pt_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todos os estados`)
};

const ru_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Все статусы`)
};

const sv_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla statusar`)
};

const tr_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm durumlar`)
};

const zh_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有状态`)
};

const ja_basecamp_versions_filter_all = /** @type {(inputs: Basecamp_Versions_Filter_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての状態`)
};

/**
* | output |
* | --- |
* | "All statuses" |
*
* @param {Basecamp_Versions_Filter_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_filter_all = /** @type {((inputs?: Basecamp_Versions_Filter_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Filter_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_filter_all(inputs)
	if (locale === "de") return de_basecamp_versions_filter_all(inputs)
	if (locale === "fr") return fr_basecamp_versions_filter_all(inputs)
	if (locale === "it") return it_basecamp_versions_filter_all(inputs)
	if (locale === "nl") return nl_basecamp_versions_filter_all(inputs)
	if (locale === "pl") return pl_basecamp_versions_filter_all(inputs)
	if (locale === "pt") return pt_basecamp_versions_filter_all(inputs)
	if (locale === "ru") return ru_basecamp_versions_filter_all(inputs)
	if (locale === "sv") return sv_basecamp_versions_filter_all(inputs)
	if (locale === "tr") return tr_basecamp_versions_filter_all(inputs)
	if (locale === "zh") return zh_basecamp_versions_filter_all(inputs)
	if (locale === "ja") return ja_basecamp_versions_filter_all(inputs)
	return en_basecamp_versions_filter_all(inputs)
});

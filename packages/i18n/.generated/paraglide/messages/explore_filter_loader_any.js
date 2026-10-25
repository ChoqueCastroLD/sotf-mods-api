/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filter_Loader_AnyInputs */

const en_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any loader`)
};

const es_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier cargador`)
};

const de_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Loader`)
};

const fr_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tous les chargeurs`)
};

const it_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi loader`)
};

const nl_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke loader`)
};

const pl_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolny loader`)
};

const pt_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer carregador`)
};

const ru_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любой загрузчик`)
};

const sv_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valfri laddare`)
};

const tr_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herhangi bir yükleyici`)
};

const zh_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意加载器`)
};

const ja_explore_filter_loader_any = /** @type {(inputs: Explore_Filter_Loader_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのローダー`)
};

/**
* | output |
* | --- |
* | "Any loader" |
*
* @param {Explore_Filter_Loader_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_loader_any = /** @type {((inputs?: Explore_Filter_Loader_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_Loader_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_loader_any(inputs)
	if (locale === "de") return de_explore_filter_loader_any(inputs)
	if (locale === "fr") return fr_explore_filter_loader_any(inputs)
	if (locale === "it") return it_explore_filter_loader_any(inputs)
	if (locale === "nl") return nl_explore_filter_loader_any(inputs)
	if (locale === "pl") return pl_explore_filter_loader_any(inputs)
	if (locale === "pt") return pt_explore_filter_loader_any(inputs)
	if (locale === "ru") return ru_explore_filter_loader_any(inputs)
	if (locale === "sv") return sv_explore_filter_loader_any(inputs)
	if (locale === "tr") return tr_explore_filter_loader_any(inputs)
	if (locale === "zh") return zh_explore_filter_loader_any(inputs)
	if (locale === "ja") return ja_explore_filter_loader_any(inputs)
	return en_explore_filter_loader_any(inputs)
});

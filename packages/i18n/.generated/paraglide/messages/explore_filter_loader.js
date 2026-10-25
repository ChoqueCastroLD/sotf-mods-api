/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filter_LoaderInputs */

const en_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod loader`)
};

const es_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cargador de mods`)
};

const de_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod-Loader`)
};

const fr_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chargeur de mods`)
};

const it_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod loader`)
};

const nl_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modloader`)
};

const pl_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loader modów`)
};

const pt_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carregador de mods`)
};

const ru_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузчик модов`)
};

const sv_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modladdare`)
};

const tr_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod yükleyici`)
};

const zh_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组加载器`)
};

const ja_explore_filter_loader = /** @type {(inputs: Explore_Filter_LoaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODローダー`)
};

/**
* | output |
* | --- |
* | "Mod loader" |
*
* @param {Explore_Filter_LoaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_loader = /** @type {((inputs?: Explore_Filter_LoaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_LoaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_loader(inputs)
	if (locale === "de") return de_explore_filter_loader(inputs)
	if (locale === "fr") return fr_explore_filter_loader(inputs)
	if (locale === "it") return it_explore_filter_loader(inputs)
	if (locale === "nl") return nl_explore_filter_loader(inputs)
	if (locale === "pl") return pl_explore_filter_loader(inputs)
	if (locale === "pt") return pt_explore_filter_loader(inputs)
	if (locale === "ru") return ru_explore_filter_loader(inputs)
	if (locale === "sv") return sv_explore_filter_loader(inputs)
	if (locale === "tr") return tr_explore_filter_loader(inputs)
	if (locale === "zh") return zh_explore_filter_loader(inputs)
	if (locale === "ja") return ja_explore_filter_loader(inputs)
	return en_explore_filter_loader(inputs)
});

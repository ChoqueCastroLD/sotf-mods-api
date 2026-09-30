/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tab_AllInputs */

const en_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`All`)
};

const es_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo`)
};

const de_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alle`)
};

const fr_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout`)
};

const it_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto`)
};

const nl_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles`)
};

const pl_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko`)
};

const pt_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo`)
};

const ru_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё`)
};

const sv_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt`)
};

const tr_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tümü`)
};

const zh_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`全部`)
};

const ja_explore_tab_all = /** @type {(inputs: Explore_Tab_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべて`)
};

/**
* | output |
* | --- |
* | "All" |
*
* @param {Explore_Tab_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tab_all = /** @type {((inputs?: Explore_Tab_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tab_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tab_all(inputs)
	if (locale === "de") return de_explore_tab_all(inputs)
	if (locale === "fr") return fr_explore_tab_all(inputs)
	if (locale === "it") return it_explore_tab_all(inputs)
	if (locale === "nl") return nl_explore_tab_all(inputs)
	if (locale === "pl") return pl_explore_tab_all(inputs)
	if (locale === "pt") return pt_explore_tab_all(inputs)
	if (locale === "ru") return ru_explore_tab_all(inputs)
	if (locale === "sv") return sv_explore_tab_all(inputs)
	if (locale === "tr") return tr_explore_tab_all(inputs)
	if (locale === "zh") return zh_explore_tab_all(inputs)
	if (locale === "ja") return ja_explore_tab_all(inputs)
	return en_explore_tab_all(inputs)
});

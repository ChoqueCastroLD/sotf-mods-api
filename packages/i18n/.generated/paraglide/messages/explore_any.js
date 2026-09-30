/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_AnyInputs */

const en_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any`)
};

const es_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquiera`)
};

const de_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Egal`)
};

const fr_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Indifférent`)
};

const it_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi`)
};

const nl_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maakt niet uit`)
};

const pl_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolne`)
};

const pt_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer`)
};

const ru_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любое`)
};

const sv_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vilken som helst`)
};

const tr_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fark etmez`)
};

const zh_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不限`)
};

const ja_explore_any = /** @type {(inputs: Explore_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`指定なし`)
};

/**
* | output |
* | --- |
* | "Any" |
*
* @param {Explore_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_any = /** @type {((inputs?: Explore_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_any(inputs)
	if (locale === "de") return de_explore_any(inputs)
	if (locale === "fr") return fr_explore_any(inputs)
	if (locale === "it") return it_explore_any(inputs)
	if (locale === "nl") return nl_explore_any(inputs)
	if (locale === "pl") return pl_explore_any(inputs)
	if (locale === "pt") return pt_explore_any(inputs)
	if (locale === "ru") return ru_explore_any(inputs)
	if (locale === "sv") return sv_explore_any(inputs)
	if (locale === "tr") return tr_explore_any(inputs)
	if (locale === "zh") return zh_explore_any(inputs)
	if (locale === "ja") return ja_explore_any(inputs)
	return en_explore_any(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Facet_MoreInputs */

const en_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More`)
};

const es_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más`)
};

const de_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr`)
};

const fr_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus`)
};

const it_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altro`)
};

const nl_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer`)
};

const pl_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej`)
};

const pt_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais`)
};

const ru_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ещё`)
};

const sv_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mer`)
};

const tr_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer`)
};

const zh_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多`)
};

const ja_explore_facet_more = /** @type {(inputs: Explore_Facet_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他`)
};

/**
* | output |
* | --- |
* | "More" |
*
* @param {Explore_Facet_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_facet_more = /** @type {((inputs?: Explore_Facet_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Facet_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_facet_more(inputs)
	if (locale === "de") return de_explore_facet_more(inputs)
	if (locale === "fr") return fr_explore_facet_more(inputs)
	if (locale === "it") return it_explore_facet_more(inputs)
	if (locale === "nl") return nl_explore_facet_more(inputs)
	if (locale === "pl") return pl_explore_facet_more(inputs)
	if (locale === "pt") return pt_explore_facet_more(inputs)
	if (locale === "ru") return ru_explore_facet_more(inputs)
	if (locale === "sv") return sv_explore_facet_more(inputs)
	if (locale === "tr") return tr_explore_facet_more(inputs)
	if (locale === "zh") return zh_explore_facet_more(inputs)
	if (locale === "ja") return ja_explore_facet_more(inputs)
	return en_explore_facet_more(inputs)
});

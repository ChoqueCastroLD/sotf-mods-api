/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Facet_TagsInputs */

const en_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const es_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas`)
};

const de_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const fr_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const it_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const nl_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const pl_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi`)
};

const pt_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const ru_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги`)
};

const sv_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggar`)
};

const tr_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketler`)
};

const zh_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const ja_explore_facet_tags = /** @type {(inputs: Explore_Facet_TagsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグ`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Explore_Facet_TagsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_facet_tags = /** @type {((inputs?: Explore_Facet_TagsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Facet_TagsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_facet_tags(inputs)
	if (locale === "de") return de_explore_facet_tags(inputs)
	if (locale === "fr") return fr_explore_facet_tags(inputs)
	if (locale === "it") return it_explore_facet_tags(inputs)
	if (locale === "nl") return nl_explore_facet_tags(inputs)
	if (locale === "pl") return pl_explore_facet_tags(inputs)
	if (locale === "pt") return pt_explore_facet_tags(inputs)
	if (locale === "ru") return ru_explore_facet_tags(inputs)
	if (locale === "sv") return sv_explore_facet_tags(inputs)
	if (locale === "tr") return tr_explore_facet_tags(inputs)
	if (locale === "zh") return zh_explore_facet_tags(inputs)
	if (locale === "ja") return ja_explore_facet_tags(inputs)
	return en_explore_facet_tags(inputs)
});

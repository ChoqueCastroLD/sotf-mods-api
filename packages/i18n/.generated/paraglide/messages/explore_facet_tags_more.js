/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Facet_Tags_MoreInputs */

const en_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More tags`)
};

const es_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más etiquetas`)
};

const de_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weitere Tags`)
};

const fr_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autres tags`)
};

const it_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Altri tag`)
};

const nl_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer tags`)
};

const pl_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej tagów`)
};

const pt_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais tags`)
};

const ru_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Другие теги`)
};

const sv_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fler taggar`)
};

const tr_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer etiketler`)
};

const zh_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`更多标签`)
};

const ja_explore_facet_tags_more = /** @type {(inputs: Explore_Facet_Tags_MoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その他のタグ`)
};

/**
* | output |
* | --- |
* | "More tags" |
*
* @param {Explore_Facet_Tags_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_facet_tags_more = /** @type {((inputs?: Explore_Facet_Tags_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Facet_Tags_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_facet_tags_more(inputs)
	if (locale === "de") return de_explore_facet_tags_more(inputs)
	if (locale === "fr") return fr_explore_facet_tags_more(inputs)
	if (locale === "it") return it_explore_facet_tags_more(inputs)
	if (locale === "nl") return nl_explore_facet_tags_more(inputs)
	if (locale === "pl") return pl_explore_facet_tags_more(inputs)
	if (locale === "pt") return pt_explore_facet_tags_more(inputs)
	if (locale === "ru") return ru_explore_facet_tags_more(inputs)
	if (locale === "sv") return sv_explore_facet_tags_more(inputs)
	if (locale === "tr") return tr_explore_facet_tags_more(inputs)
	if (locale === "zh") return zh_explore_facet_tags_more(inputs)
	if (locale === "ja") return ja_explore_facet_tags_more(inputs)
	return en_explore_facet_tags_more(inputs)
});

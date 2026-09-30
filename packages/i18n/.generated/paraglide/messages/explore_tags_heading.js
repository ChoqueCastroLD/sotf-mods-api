/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tags_HeadingInputs */

const en_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const es_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas`)
};

const de_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const fr_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const it_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const nl_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const pl_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi`)
};

const pt_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const ru_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги`)
};

const sv_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggar`)
};

const tr_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketler`)
};

const zh_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const ja_explore_tags_heading = /** @type {(inputs: Explore_Tags_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグ`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Explore_Tags_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tags_heading = /** @type {((inputs?: Explore_Tags_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tags_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tags_heading(inputs)
	if (locale === "de") return de_explore_tags_heading(inputs)
	if (locale === "fr") return fr_explore_tags_heading(inputs)
	if (locale === "it") return it_explore_tags_heading(inputs)
	if (locale === "nl") return nl_explore_tags_heading(inputs)
	if (locale === "pl") return pl_explore_tags_heading(inputs)
	if (locale === "pt") return pt_explore_tags_heading(inputs)
	if (locale === "ru") return ru_explore_tags_heading(inputs)
	if (locale === "sv") return sv_explore_tags_heading(inputs)
	if (locale === "tr") return tr_explore_tags_heading(inputs)
	if (locale === "zh") return zh_explore_tags_heading(inputs)
	if (locale === "ja") return ja_explore_tags_heading(inputs)
	return en_explore_tags_heading(inputs)
});

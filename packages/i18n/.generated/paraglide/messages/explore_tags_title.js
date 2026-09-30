/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tags_TitleInputs */

const en_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod tags`)
};

const es_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas de mods de Sons of the Forest`)
};

const de_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags für Sons of the Forest Mods`)
};

const fr_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags des mods Sons of the Forest`)
};

const it_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag delle mod di Sons of the Forest`)
};

const nl_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags voor Sons of the Forest-mods`)
};

const pl_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi modów do Sons of the Forest`)
};

const pt_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags de mods de Sons of the Forest`)
};

const ru_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги модов для Sons of the Forest`)
};

const sv_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggar för moddar till Sons of the Forest`)
};

const tr_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest mod etiketleri`)
};

const zh_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 模组标签`)
};

const ja_explore_tags_title = /** @type {(inputs: Explore_Tags_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の MOD タグ`)
};

/**
* | output |
* | --- |
* | "Sons of the Forest mod tags" |
*
* @param {Explore_Tags_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tags_title = /** @type {((inputs?: Explore_Tags_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tags_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tags_title(inputs)
	if (locale === "de") return de_explore_tags_title(inputs)
	if (locale === "fr") return fr_explore_tags_title(inputs)
	if (locale === "it") return it_explore_tags_title(inputs)
	if (locale === "nl") return nl_explore_tags_title(inputs)
	if (locale === "pl") return pl_explore_tags_title(inputs)
	if (locale === "pt") return pt_explore_tags_title(inputs)
	if (locale === "ru") return ru_explore_tags_title(inputs)
	if (locale === "sv") return sv_explore_tags_title(inputs)
	if (locale === "tr") return tr_explore_tags_title(inputs)
	if (locale === "zh") return zh_explore_tags_title(inputs)
	if (locale === "ja") return ja_explore_tags_title(inputs)
	return en_explore_tags_title(inputs)
});

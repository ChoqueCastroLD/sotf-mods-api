/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ tag: NonNullable<unknown> }} Explore_Heading_TagInputs */

const en_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tagged “${i?.tag}”`)
};

const es_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Etiquetados «${i?.tag}»`)
};

const de_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mit Tag „${i?.tag}“`)
};

const fr_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tag « ${i?.tag} »`)
};

const it_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Con il tag «${i?.tag}»`)
};

const nl_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Met tag ‘${i?.tag}’`)
};

const pl_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Z tagiem „${i?.tag}”`)
};

const pt_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Com a tag “${i?.tag}”`)
};

const ru_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`С тегом «${i?.tag}»`)
};

const sv_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Taggat ”${i?.tag}”`)
};

const tr_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.tag}” etiketli`)
};

const zh_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`标签：“${i?.tag}”`)
};

const ja_explore_heading_tag = /** @type {(inputs: Explore_Heading_TagInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`タグ「${i?.tag}」`)
};

/**
* | output |
* | --- |
* | "Tagged “{tag}”" |
*
* @param {Explore_Heading_TagInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_heading_tag = /** @type {((inputs: Explore_Heading_TagInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Heading_TagInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_heading_tag(inputs)
	if (locale === "de") return de_explore_heading_tag(inputs)
	if (locale === "fr") return fr_explore_heading_tag(inputs)
	if (locale === "it") return it_explore_heading_tag(inputs)
	if (locale === "nl") return nl_explore_heading_tag(inputs)
	if (locale === "pl") return pl_explore_heading_tag(inputs)
	if (locale === "pt") return pt_explore_heading_tag(inputs)
	if (locale === "ru") return ru_explore_heading_tag(inputs)
	if (locale === "sv") return sv_explore_heading_tag(inputs)
	if (locale === "tr") return tr_explore_heading_tag(inputs)
	if (locale === "zh") return zh_explore_heading_tag(inputs)
	if (locale === "ja") return ja_explore_heading_tag(inputs)
	return en_explore_heading_tag(inputs)
});

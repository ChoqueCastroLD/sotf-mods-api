/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_View_LabelInputs */

const en_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
};

const es_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista`)
};

const de_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ansicht`)
};

const fr_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affichage`)
};

const it_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista`)
};

const nl_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergave`)
};

const pl_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widok`)
};

const pt_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualização`)
};

const ru_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вид`)
};

const sv_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visning`)
};

const tr_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görünüm`)
};

const zh_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`视图`)
};

const ja_explore_view_label = /** @type {(inputs: Explore_View_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示`)
};

/**
* | output |
* | --- |
* | "View" |
*
* @param {Explore_View_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_view_label = /** @type {((inputs?: Explore_View_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_View_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_view_label(inputs)
	if (locale === "de") return de_explore_view_label(inputs)
	if (locale === "fr") return fr_explore_view_label(inputs)
	if (locale === "it") return it_explore_view_label(inputs)
	if (locale === "nl") return nl_explore_view_label(inputs)
	if (locale === "pl") return pl_explore_view_label(inputs)
	if (locale === "pt") return pt_explore_view_label(inputs)
	if (locale === "ru") return ru_explore_view_label(inputs)
	if (locale === "sv") return sv_explore_view_label(inputs)
	if (locale === "tr") return tr_explore_view_label(inputs)
	if (locale === "zh") return zh_explore_view_label(inputs)
	if (locale === "ja") return ja_explore_view_label(inputs)
	return en_explore_view_label(inputs)
});

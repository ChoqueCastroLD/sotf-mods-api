/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_VisualsInputs */

const en_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visuals`)
};

const es_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gráficos`)
};

const de_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafik`)
};

const fr_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Graphismes`)
};

const it_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafica`)
};

const nl_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Graphics`)
};

const pl_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafika`)
};

const pt_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gráficos`)
};

const ru_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Графика`)
};

const sv_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grafik`)
};

const tr_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görseller`)
};

const zh_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`画面`)
};

const ja_explore_tag_group_visuals = /** @type {(inputs: Explore_Tag_Group_VisualsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グラフィック`)
};

/**
* | output |
* | --- |
* | "Visuals" |
*
* @param {Explore_Tag_Group_VisualsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_visuals = /** @type {((inputs?: Explore_Tag_Group_VisualsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_VisualsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_visuals(inputs)
	if (locale === "de") return de_explore_tag_group_visuals(inputs)
	if (locale === "fr") return fr_explore_tag_group_visuals(inputs)
	if (locale === "it") return it_explore_tag_group_visuals(inputs)
	if (locale === "nl") return nl_explore_tag_group_visuals(inputs)
	if (locale === "pl") return pl_explore_tag_group_visuals(inputs)
	if (locale === "pt") return pt_explore_tag_group_visuals(inputs)
	if (locale === "ru") return ru_explore_tag_group_visuals(inputs)
	if (locale === "sv") return sv_explore_tag_group_visuals(inputs)
	if (locale === "tr") return tr_explore_tag_group_visuals(inputs)
	if (locale === "zh") return zh_explore_tag_group_visuals(inputs)
	if (locale === "ja") return ja_explore_tag_group_visuals(inputs)
	return en_explore_tag_group_visuals(inputs)
});

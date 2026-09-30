/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tabs_LabelInputs */

const en_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`What to show`)
};

const es_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qué mostrar`)
};

const de_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anzeigen`)
};

const fr_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher`)
};

const it_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cosa mostrare`)
};

const nl_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wat tonen`)
};

const pl_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co pokazać`)
};

const pt_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O que mostrar`)
};

const ru_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Что показать`)
};

const sv_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa`)
};

const tr_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gösterilecekler`)
};

const zh_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示内容`)
};

const ja_explore_tabs_label = /** @type {(inputs: Explore_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示する内容`)
};

/**
* | output |
* | --- |
* | "What to show" |
*
* @param {Explore_Tabs_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tabs_label = /** @type {((inputs?: Explore_Tabs_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tabs_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tabs_label(inputs)
	if (locale === "de") return de_explore_tabs_label(inputs)
	if (locale === "fr") return fr_explore_tabs_label(inputs)
	if (locale === "it") return it_explore_tabs_label(inputs)
	if (locale === "nl") return nl_explore_tabs_label(inputs)
	if (locale === "pl") return pl_explore_tabs_label(inputs)
	if (locale === "pt") return pt_explore_tabs_label(inputs)
	if (locale === "ru") return ru_explore_tabs_label(inputs)
	if (locale === "sv") return sv_explore_tabs_label(inputs)
	if (locale === "tr") return tr_explore_tabs_label(inputs)
	if (locale === "zh") return zh_explore_tabs_label(inputs)
	if (locale === "ja") return ja_explore_tabs_label(inputs)
	return en_explore_tabs_label(inputs)
});

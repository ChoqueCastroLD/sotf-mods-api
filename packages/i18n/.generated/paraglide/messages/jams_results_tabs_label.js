/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Results_Tabs_LabelInputs */

const en_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podium category`)
};

const es_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoría del podio`)
};

const de_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podium-Kategorie`)
};

const fr_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Catégorie du podium`)
};

const it_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria del podio`)
};

const nl_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podiumcategorie`)
};

const pl_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kategoria podium`)
};

const pt_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Categoria do pódio`)
};

const ru_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Категория пьедестала`)
};

const sv_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prispallskategori`)
};

const tr_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Podyum kategorisi`)
};

const zh_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`领奖台类别`)
};

const ja_jams_results_tabs_label = /** @type {(inputs: Jams_Results_Tabs_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表彰台のカテゴリー`)
};

/**
* | output |
* | --- |
* | "Podium category" |
*
* @param {Jams_Results_Tabs_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_results_tabs_label = /** @type {((inputs?: Jams_Results_Tabs_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Results_Tabs_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_results_tabs_label(inputs)
	if (locale === "de") return de_jams_results_tabs_label(inputs)
	if (locale === "fr") return fr_jams_results_tabs_label(inputs)
	if (locale === "it") return it_jams_results_tabs_label(inputs)
	if (locale === "nl") return nl_jams_results_tabs_label(inputs)
	if (locale === "pl") return pl_jams_results_tabs_label(inputs)
	if (locale === "pt") return pt_jams_results_tabs_label(inputs)
	if (locale === "ru") return ru_jams_results_tabs_label(inputs)
	if (locale === "sv") return sv_jams_results_tabs_label(inputs)
	if (locale === "tr") return tr_jams_results_tabs_label(inputs)
	if (locale === "zh") return zh_jams_results_tabs_label(inputs)
	if (locale === "ja") return ja_jams_results_tabs_label(inputs)
	return en_jams_results_tabs_label(inputs)
});

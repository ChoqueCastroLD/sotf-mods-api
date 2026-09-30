/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Picker_Results_LabelInputs */

const en_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search results`)
};

const es_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados de búsqueda`)
};

const de_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suchergebnisse`)
};

const fr_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résultats de recherche`)
};

const it_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risultati della ricerca`)
};

const nl_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoekresultaten`)
};

const pl_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyniki wyszukiwania`)
};

const pt_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resultados da busca`)
};

const ru_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Результаты поиска`)
};

const sv_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sökresultat`)
};

const tr_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Arama sonuçları`)
};

const zh_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索结果`)
};

const ja_kits_picker_results_label = /** @type {(inputs: Kits_Picker_Results_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`検索結果`)
};

/**
* | output |
* | --- |
* | "Search results" |
*
* @param {Kits_Picker_Results_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_picker_results_label = /** @type {((inputs?: Kits_Picker_Results_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Picker_Results_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_picker_results_label(inputs)
	if (locale === "de") return de_kits_picker_results_label(inputs)
	if (locale === "fr") return fr_kits_picker_results_label(inputs)
	if (locale === "it") return it_kits_picker_results_label(inputs)
	if (locale === "nl") return nl_kits_picker_results_label(inputs)
	if (locale === "pl") return pl_kits_picker_results_label(inputs)
	if (locale === "pt") return pt_kits_picker_results_label(inputs)
	if (locale === "ru") return ru_kits_picker_results_label(inputs)
	if (locale === "sv") return sv_kits_picker_results_label(inputs)
	if (locale === "tr") return tr_kits_picker_results_label(inputs)
	if (locale === "zh") return zh_kits_picker_results_label(inputs)
	if (locale === "ja") return ja_kits_picker_results_label(inputs)
	return en_kits_picker_results_label(inputs)
});

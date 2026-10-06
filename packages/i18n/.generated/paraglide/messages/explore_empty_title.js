/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Empty_TitleInputs */

const en_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No results`)
};

const es_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin resultados`)
};

const de_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Ergebnisse`)
};

const fr_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun résultat`)
};

const it_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun risultato`)
};

const nl_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen resultaten`)
};

const pl_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak wyników`)
};

const pt_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum resultado`)
};

const ru_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего не найдено`)
};

const sv_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga resultat`)
};

const tr_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sonuç yok`)
};

const zh_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有结果`)
};

const ja_explore_empty_title = /** @type {(inputs: Explore_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`結果がありません`)
};

/**
* | output |
* | --- |
* | "No results" |
*
* @param {Explore_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_empty_title = /** @type {((inputs?: Explore_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_empty_title(inputs)
	if (locale === "de") return de_explore_empty_title(inputs)
	if (locale === "fr") return fr_explore_empty_title(inputs)
	if (locale === "it") return it_explore_empty_title(inputs)
	if (locale === "nl") return nl_explore_empty_title(inputs)
	if (locale === "pl") return pl_explore_empty_title(inputs)
	if (locale === "pt") return pt_explore_empty_title(inputs)
	if (locale === "ru") return ru_explore_empty_title(inputs)
	if (locale === "sv") return sv_explore_empty_title(inputs)
	if (locale === "tr") return tr_explore_empty_title(inputs)
	if (locale === "zh") return zh_explore_empty_title(inputs)
	if (locale === "ja") return ja_explore_empty_title(inputs)
	return en_explore_empty_title(inputs)
});

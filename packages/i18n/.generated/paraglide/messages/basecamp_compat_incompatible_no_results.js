/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Incompatible_No_ResultsInputs */

const en_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mods found.`)
};

const es_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se encontraron mods.`)
};

const de_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Mods gefunden.`)
};

const fr_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod trouvé.`)
};

const it_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun mod trovato.`)
};

const nl_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen mods gevonden.`)
};

const pl_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie znaleziono modów.`)
};

const pt_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod encontrado.`)
};

const ru_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды не найдены.`)
};

const sv_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga moddar hittades.`)
};

const tr_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod bulunamadı.`)
};

const zh_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未找到模组。`)
};

const ja_basecamp_compat_incompatible_no_results = /** @type {(inputs: Basecamp_Compat_Incompatible_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modが見つかりません。`)
};

/**
* | output |
* | --- |
* | "No mods found." |
*
* @param {Basecamp_Compat_Incompatible_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_incompatible_no_results = /** @type {((inputs?: Basecamp_Compat_Incompatible_No_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Incompatible_No_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "de") return de_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "fr") return fr_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "it") return it_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "nl") return nl_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "pl") return pl_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "pt") return pt_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "ru") return ru_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "sv") return sv_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "tr") return tr_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "zh") return zh_basecamp_compat_incompatible_no_results(inputs)
	if (locale === "ja") return ja_basecamp_compat_incompatible_no_results(inputs)
	return en_basecamp_compat_incompatible_no_results(inputs)
});

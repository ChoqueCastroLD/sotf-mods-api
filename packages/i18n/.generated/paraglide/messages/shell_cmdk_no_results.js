/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ query: NonNullable<unknown> }} Shell_Cmdk_No_ResultsInputs */

const en_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`No results for “${i?.query}”.`)
};

const es_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Sin resultados para “${i?.query}”.`)
};

const de_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Keine Ergebnisse für „${i?.query}“.`)
};

const fr_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Aucun résultat pour « ${i?.query} ».`)
};

const it_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nessun risultato per “${i?.query}”.`)
};

const nl_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Geen resultaten voor “${i?.query}”.`)
};

const pl_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Brak wyników dla „${i?.query}”.`)
};

const pt_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Nenhum resultado para “${i?.query}”.`)
};

const ru_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`По запросу «${i?.query}» ничего не найдено.`)
};

const sv_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Inga resultat för ”${i?.query}”.`)
};

const tr_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`“${i?.query}” için sonuç yok.`)
};

const zh_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`没有找到“${i?.query}”的结果。`)
};

const ja_shell_cmdk_no_results = /** @type {(inputs: Shell_Cmdk_No_ResultsInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`「${i?.query}」の結果はありません。`)
};

/**
* | output |
* | --- |
* | "No results for “{query}”." |
*
* @param {Shell_Cmdk_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_no_results = /** @type {((inputs: Shell_Cmdk_No_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_No_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_no_results(inputs)
	if (locale === "de") return de_shell_cmdk_no_results(inputs)
	if (locale === "fr") return fr_shell_cmdk_no_results(inputs)
	if (locale === "it") return it_shell_cmdk_no_results(inputs)
	if (locale === "nl") return nl_shell_cmdk_no_results(inputs)
	if (locale === "pl") return pl_shell_cmdk_no_results(inputs)
	if (locale === "pt") return pt_shell_cmdk_no_results(inputs)
	if (locale === "ru") return ru_shell_cmdk_no_results(inputs)
	if (locale === "sv") return sv_shell_cmdk_no_results(inputs)
	if (locale === "tr") return tr_shell_cmdk_no_results(inputs)
	if (locale === "zh") return zh_shell_cmdk_no_results(inputs)
	if (locale === "ja") return ja_shell_cmdk_no_results(inputs)
	return en_shell_cmdk_no_results(inputs)
});

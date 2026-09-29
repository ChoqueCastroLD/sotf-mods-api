/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_No_ResultsInputs */

const en_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No matches. Try fewer words.`)
};

const es_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin coincidencias. Prueba con menos palabras.`)
};

const de_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Treffer. Versuche es mit weniger Wörtern.`)
};

const fr_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun résultat. Essaie avec moins de mots.`)
};

const it_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun risultato. Prova con meno parole.`)
};

const nl_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen resultaten. Probeer minder woorden.`)
};

const pl_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak wyników. Spróbuj użyć mniej słów.`)
};

const pt_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum resultado. Tente menos palavras.`)
};

const ru_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ничего не найдено. Попробуй меньше слов.`)
};

const sv_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga träffar. Testa med färre ord.`)
};

const tr_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eşleşme yok. Daha az kelime dene.`)
};

const zh_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有匹配结果。试试更少的关键词。`)
};

const ja_ui_no_results = /** @type {(inputs: Ui_No_ResultsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一致するものがありません。単語を減らしてみてください。`)
};

/**
* | output |
* | --- |
* | "No matches. Try fewer words." |
*
* @param {Ui_No_ResultsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_no_results = /** @type {((inputs?: Ui_No_ResultsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_No_ResultsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_no_results(inputs)
	if (locale === "de") return de_ui_no_results(inputs)
	if (locale === "fr") return fr_ui_no_results(inputs)
	if (locale === "it") return it_ui_no_results(inputs)
	if (locale === "nl") return nl_ui_no_results(inputs)
	if (locale === "pl") return pl_ui_no_results(inputs)
	if (locale === "pt") return pt_ui_no_results(inputs)
	if (locale === "ru") return ru_ui_no_results(inputs)
	if (locale === "sv") return sv_ui_no_results(inputs)
	if (locale === "tr") return tr_ui_no_results(inputs)
	if (locale === "zh") return zh_ui_no_results(inputs)
	if (locale === "ja") return ja_ui_no_results(inputs)
	return en_ui_no_results(inputs)
});

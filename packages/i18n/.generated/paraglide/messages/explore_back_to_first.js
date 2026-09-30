/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Back_To_FirstInputs */

const en_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Back to page 1`)
};

const es_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volver a la página 1`)
};

const de_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zurück zu Seite 1`)
};

const fr_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retour à la page 1`)
};

const it_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Torna alla pagina 1`)
};

const nl_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terug naar pagina 1`)
};

const pl_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wróć do strony 1`)
};

const pt_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voltar à página 1`)
};

const ru_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На страницу 1`)
};

const sv_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tillbaka till sida 1`)
};

const tr_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1. sayfaya dön`)
};

const zh_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返回第 1 页`)
};

const ja_explore_back_to_first = /** @type {(inputs: Explore_Back_To_FirstInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 ページ目に戻る`)
};

/**
* | output |
* | --- |
* | "Back to page 1" |
*
* @param {Explore_Back_To_FirstInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_back_to_first = /** @type {((inputs?: Explore_Back_To_FirstInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Back_To_FirstInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_back_to_first(inputs)
	if (locale === "de") return de_explore_back_to_first(inputs)
	if (locale === "fr") return fr_explore_back_to_first(inputs)
	if (locale === "it") return it_explore_back_to_first(inputs)
	if (locale === "nl") return nl_explore_back_to_first(inputs)
	if (locale === "pl") return pl_explore_back_to_first(inputs)
	if (locale === "pt") return pt_explore_back_to_first(inputs)
	if (locale === "ru") return ru_explore_back_to_first(inputs)
	if (locale === "sv") return sv_explore_back_to_first(inputs)
	if (locale === "tr") return tr_explore_back_to_first(inputs)
	if (locale === "zh") return zh_explore_back_to_first(inputs)
	if (locale === "ja") return ja_explore_back_to_first(inputs)
	return en_explore_back_to_first(inputs)
});

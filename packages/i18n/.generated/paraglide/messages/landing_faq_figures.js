/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Landing_Faq_FiguresInputs */

const en_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Figures as of ${i?.date}.`)
};

const es_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cifras a ${i?.date}.`)
};

const de_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zahlen vom ${i?.date}.`)
};

const fr_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Chiffres au ${i?.date}.`)
};

const it_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dati al ${i?.date}.`)
};

const nl_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cijfers per ${i?.date}.`)
};

const pl_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dane z dnia ${i?.date}.`)
};

const pt_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Números de ${i?.date}.`)
};

const ru_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Данные на ${i?.date}.`)
};

const sv_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Siffror per ${i?.date}.`)
};

const tr_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} itibarıyla rakamlar.`)
};

const zh_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`数据截至 ${i?.date}。`)
};

const ja_landing_faq_figures = /** @type {(inputs: Landing_Faq_FiguresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} 時点の数値です。`)
};

/**
* | output |
* | --- |
* | "Figures as of {date}." |
*
* @param {Landing_Faq_FiguresInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_faq_figures = /** @type {((inputs: Landing_Faq_FiguresInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Faq_FiguresInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_faq_figures(inputs)
	if (locale === "de") return de_landing_faq_figures(inputs)
	if (locale === "fr") return fr_landing_faq_figures(inputs)
	if (locale === "it") return it_landing_faq_figures(inputs)
	if (locale === "nl") return nl_landing_faq_figures(inputs)
	if (locale === "pl") return pl_landing_faq_figures(inputs)
	if (locale === "pt") return pt_landing_faq_figures(inputs)
	if (locale === "ru") return ru_landing_faq_figures(inputs)
	if (locale === "sv") return sv_landing_faq_figures(inputs)
	if (locale === "tr") return tr_landing_faq_figures(inputs)
	if (locale === "zh") return zh_landing_faq_figures(inputs)
	if (locale === "ja") return ja_landing_faq_figures(inputs)
	return en_landing_faq_figures(inputs)
});

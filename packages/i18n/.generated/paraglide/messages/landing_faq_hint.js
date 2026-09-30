/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Faq_HintInputs */

const en_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Short answers, checked against the catalog.`)
};

const es_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respuestas breves, contrastadas con el catálogo.`)
};

const de_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurze Antworten, mit dem Katalog abgeglichen.`)
};

const fr_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des réponses courtes, vérifiées sur le catalogue.`)
};

const it_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risposte brevi, verificate sul catalogo.`)
};

const nl_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korte antwoorden, gecontroleerd met de catalogus.`)
};

const pl_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krótkie odpowiedzi sprawdzone w katalogu.`)
};

const pt_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Respostas curtas, conferidas com o catálogo.`)
};

const ru_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Короткие ответы, сверенные с каталогом.`)
};

const sv_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korta svar, kontrollerade mot katalogen.`)
};

const tr_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Katalogla doğrulanmış kısa yanıtlar.`)
};

const zh_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简短的回答，已与目录核对。`)
};

const ja_landing_faq_hint = /** @type {(inputs: Landing_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カタログで確認した短い回答です。`)
};

/**
* | output |
* | --- |
* | "Short answers, checked against the catalog." |
*
* @param {Landing_Faq_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_faq_hint = /** @type {((inputs?: Landing_Faq_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Faq_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_faq_hint(inputs)
	if (locale === "de") return de_landing_faq_hint(inputs)
	if (locale === "fr") return fr_landing_faq_hint(inputs)
	if (locale === "it") return it_landing_faq_hint(inputs)
	if (locale === "nl") return nl_landing_faq_hint(inputs)
	if (locale === "pl") return pl_landing_faq_hint(inputs)
	if (locale === "pt") return pt_landing_faq_hint(inputs)
	if (locale === "ru") return ru_landing_faq_hint(inputs)
	if (locale === "sv") return sv_landing_faq_hint(inputs)
	if (locale === "tr") return tr_landing_faq_hint(inputs)
	if (locale === "zh") return zh_landing_faq_hint(inputs)
	if (locale === "ja") return ja_landing_faq_hint(inputs)
	return en_landing_faq_hint(inputs)
});

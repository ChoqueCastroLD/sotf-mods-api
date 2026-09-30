/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Faq_TitleInputs */

const en_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questions survivors ask`)
};

const es_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo que preguntan los supervivientes`)
};

const de_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Was Überlebende fragen`)
};

const fr_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les questions des survivants`)
};

const it_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le domande dei sopravvissuti`)
};

const nl_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vragen van overlevenden`)
};

const pl_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pytania ocalałych`)
};

const pt_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntas dos sobreviventes`)
};

const ru_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вопросы выживших`)
};

const sv_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frågor från överlevare`)
};

const tr_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hayatta kalanların soruları`)
};

const zh_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`幸存者常问的问题`)
};

const ja_landing_faq_title = /** @type {(inputs: Landing_Faq_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`サバイバーからのよくある質問`)
};

/**
* | output |
* | --- |
* | "Questions survivors ask" |
*
* @param {Landing_Faq_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_faq_title = /** @type {((inputs?: Landing_Faq_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Faq_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_faq_title(inputs)
	if (locale === "de") return de_landing_faq_title(inputs)
	if (locale === "fr") return fr_landing_faq_title(inputs)
	if (locale === "it") return it_landing_faq_title(inputs)
	if (locale === "nl") return nl_landing_faq_title(inputs)
	if (locale === "pl") return pl_landing_faq_title(inputs)
	if (locale === "pt") return pt_landing_faq_title(inputs)
	if (locale === "ru") return ru_landing_faq_title(inputs)
	if (locale === "sv") return sv_landing_faq_title(inputs)
	if (locale === "tr") return tr_landing_faq_title(inputs)
	if (locale === "zh") return zh_landing_faq_title(inputs)
	if (locale === "ja") return ja_landing_faq_title(inputs)
	return en_landing_faq_title(inputs)
});

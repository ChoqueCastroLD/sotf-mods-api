/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Langprompt_TitleInputs */

const en_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`This page is in ${i?.language}`)
};

const es_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta página está en ${i?.language}`)
};

const de_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diese Seite ist auf ${i?.language}`)
};

const fr_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Cette page est en ${i?.language}`)
};

const it_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Questa pagina è in ${i?.language}`)
};

const nl_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deze pagina is in het ${i?.language}`)
};

const pl_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ta strona jest w języku: ${i?.language}`)
};

const pt_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Esta página está em ${i?.language}`)
};

const ru_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Эта страница на языке: ${i?.language}`)
};

const sv_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Den här sidan är på ${i?.language}`)
};

const tr_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu sayfa şu dilde: ${i?.language}`)
};

const zh_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`此页面的语言是${i?.language}`)
};

const ja_langprompt_title = /** @type {(inputs: Langprompt_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`このページは${i?.language}です`)
};

/**
* | output |
* | --- |
* | "This page is in {language}" |
*
* @param {Langprompt_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const langprompt_title = /** @type {((inputs: Langprompt_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Langprompt_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_langprompt_title(inputs)
	if (locale === "de") return de_langprompt_title(inputs)
	if (locale === "fr") return fr_langprompt_title(inputs)
	if (locale === "it") return it_langprompt_title(inputs)
	if (locale === "nl") return nl_langprompt_title(inputs)
	if (locale === "pl") return pl_langprompt_title(inputs)
	if (locale === "pt") return pt_langprompt_title(inputs)
	if (locale === "ru") return ru_langprompt_title(inputs)
	if (locale === "sv") return sv_langprompt_title(inputs)
	if (locale === "tr") return tr_langprompt_title(inputs)
	if (locale === "zh") return zh_langprompt_title(inputs)
	if (locale === "ja") return ja_langprompt_title(inputs)
	return en_langprompt_title(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ language: NonNullable<unknown> }} Common_Language_SuggestInputs */

const en_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`View this page in ${i?.language}?`)
};

const es_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Ver esta página en ${i?.language}?`)
};

const de_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Diese Seite auf ${i?.language} ansehen?`)
};

const fr_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voir cette page en ${i?.language} ?`)
};

const it_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vuoi vedere questa pagina in ${i?.language}?`)
};

const nl_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Deze pagina bekijken in het ${i?.language}?`)
};

const pl_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wyświetlić tę stronę w języku: ${i?.language}?`)
};

const pt_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ver esta página em ${i?.language}?`)
};

const ru_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Открыть эту страницу на языке: ${i?.language}?`)
};

const sv_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Visa den här sidan på ${i?.language}?`)
};

const tr_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bu sayfayı ${i?.language} dilinde görmek ister misin?`)
};

const zh_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`用${i?.language}查看此页面？`)
};

const ja_common_language_suggest = /** @type {(inputs: Common_Language_SuggestInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`このページを${i?.language}で表示しますか？`)
};

/**
* | output |
* | --- |
* | "View this page in {language}?" |
*
* @param {Common_Language_SuggestInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_language_suggest = /** @type {((inputs: Common_Language_SuggestInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Language_SuggestInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_language_suggest(inputs)
	if (locale === "de") return de_common_language_suggest(inputs)
	if (locale === "fr") return fr_common_language_suggest(inputs)
	if (locale === "it") return it_common_language_suggest(inputs)
	if (locale === "nl") return nl_common_language_suggest(inputs)
	if (locale === "pl") return pl_common_language_suggest(inputs)
	if (locale === "pt") return pt_common_language_suggest(inputs)
	if (locale === "ru") return ru_common_language_suggest(inputs)
	if (locale === "sv") return sv_common_language_suggest(inputs)
	if (locale === "tr") return tr_common_language_suggest(inputs)
	if (locale === "zh") return zh_common_language_suggest(inputs)
	if (locale === "ja") return ja_common_language_suggest(inputs)
	return en_common_language_suggest(inputs)
});

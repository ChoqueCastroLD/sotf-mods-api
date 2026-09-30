/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Show_OriginalInputs */

const en_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show original`)
};

const es_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver original`)
};

const de_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Original anzeigen`)
};

const fr_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir l’original`)
};

const it_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra originale`)
};

const nl_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Origineel tonen`)
};

const pl_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż oryginał`)
};

const pt_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver original`)
};

const ru_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать оригинал`)
};

const sv_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa originalet`)
};

const tr_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orijinali göster`)
};

const zh_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示原文`)
};

const ja_translations_show_original = /** @type {(inputs: Translations_Show_OriginalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原文を表示`)
};

/**
* | output |
* | --- |
* | "Show original" |
*
* @param {Translations_Show_OriginalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_show_original = /** @type {((inputs?: Translations_Show_OriginalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Show_OriginalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_show_original(inputs)
	if (locale === "de") return de_translations_show_original(inputs)
	if (locale === "fr") return fr_translations_show_original(inputs)
	if (locale === "it") return it_translations_show_original(inputs)
	if (locale === "nl") return nl_translations_show_original(inputs)
	if (locale === "pl") return pl_translations_show_original(inputs)
	if (locale === "pt") return pt_translations_show_original(inputs)
	if (locale === "ru") return ru_translations_show_original(inputs)
	if (locale === "sv") return sv_translations_show_original(inputs)
	if (locale === "tr") return tr_translations_show_original(inputs)
	if (locale === "zh") return zh_translations_show_original(inputs)
	if (locale === "ja") return ja_translations_show_original(inputs)
	return en_translations_show_original(inputs)
});

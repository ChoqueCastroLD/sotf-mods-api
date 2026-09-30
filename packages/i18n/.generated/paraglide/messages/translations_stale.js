/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_StaleInputs */

const en_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The original changed after this translation`)
};

const es_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El original cambió después de esta traducción`)
};

const de_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Original wurde nach dieser Übersetzung geändert`)
};

const fr_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’original a changé après cette traduction`)
};

const it_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’originale è cambiato dopo questa traduzione`)
};

const nl_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het origineel is gewijzigd na deze vertaling`)
};

const pl_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oryginał zmienił się po tym tłumaczeniu`)
};

const pt_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O original mudou depois desta tradução`)
};

const ru_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Оригинал изменился после этого перевода`)
};

const sv_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Originalet har ändrats efter den här översättningen`)
};

const tr_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Orijinal bu çeviriden sonra değişti`)
};

const zh_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`原文在此译文之后已更改`)
};

const ja_translations_stale = /** @type {(inputs: Translations_StaleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この翻訳の後に原文が変更されました`)
};

/**
* | output |
* | --- |
* | "The original changed after this translation" |
*
* @param {Translations_StaleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_stale = /** @type {((inputs?: Translations_StaleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_StaleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_stale(inputs)
	if (locale === "de") return de_translations_stale(inputs)
	if (locale === "fr") return fr_translations_stale(inputs)
	if (locale === "it") return it_translations_stale(inputs)
	if (locale === "nl") return nl_translations_stale(inputs)
	if (locale === "pl") return pl_translations_stale(inputs)
	if (locale === "pt") return pt_translations_stale(inputs)
	if (locale === "ru") return ru_translations_stale(inputs)
	if (locale === "sv") return sv_translations_stale(inputs)
	if (locale === "tr") return tr_translations_stale(inputs)
	if (locale === "zh") return zh_translations_stale(inputs)
	if (locale === "ja") return ja_translations_stale(inputs)
	return en_translations_stale(inputs)
});

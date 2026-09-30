/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Status_NoneInputs */

const en_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No translation yet`)
};

const es_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún sin traducción`)
};

const de_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Übersetzung`)
};

const fr_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de traduction`)
};

const it_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna traduzione`)
};

const nl_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen vertaling`)
};

const pl_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak tłumaczenia`)
};

const pt_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda sem tradução`)
};

const ru_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перевода пока нет`)
};

const sv_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen översättning än`)
};

const tr_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz çeviri yok`)
};

const zh_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚无译文`)
};

const ja_translations_status_none = /** @type {(inputs: Translations_Status_NoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳はまだありません`)
};

/**
* | output |
* | --- |
* | "No translation yet" |
*
* @param {Translations_Status_NoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_status_none = /** @type {((inputs?: Translations_Status_NoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Status_NoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_status_none(inputs)
	if (locale === "de") return de_translations_status_none(inputs)
	if (locale === "fr") return fr_translations_status_none(inputs)
	if (locale === "it") return it_translations_status_none(inputs)
	if (locale === "nl") return nl_translations_status_none(inputs)
	if (locale === "pl") return pl_translations_status_none(inputs)
	if (locale === "pt") return pt_translations_status_none(inputs)
	if (locale === "ru") return ru_translations_status_none(inputs)
	if (locale === "sv") return sv_translations_status_none(inputs)
	if (locale === "tr") return tr_translations_status_none(inputs)
	if (locale === "zh") return zh_translations_status_none(inputs)
	if (locale === "ja") return ja_translations_status_none(inputs)
	return en_translations_status_none(inputs)
});

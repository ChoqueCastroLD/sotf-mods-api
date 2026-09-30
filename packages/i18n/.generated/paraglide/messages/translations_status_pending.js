/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Translations_Status_PendingInputs */

const en_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translation pending`)
};

const es_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducción pendiente`)
};

const de_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzung ausstehend`)
};

const fr_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduction en attente`)
};

const it_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduzione in attesa`)
};

const nl_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertaling in behandeling`)
};

const pl_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tłumaczenie oczekuje`)
};

const pt_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tradução pendente`)
};

const ru_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перевод ожидается`)
};

const sv_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättning väntar`)
};

const tr_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çeviri bekleniyor`)
};

const zh_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`等待翻译`)
};

const ja_translations_status_pending = /** @type {(inputs: Translations_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳待ち`)
};

/**
* | output |
* | --- |
* | "Translation pending" |
*
* @param {Translations_Status_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const translations_status_pending = /** @type {((inputs?: Translations_Status_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Translations_Status_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_translations_status_pending(inputs)
	if (locale === "de") return de_translations_status_pending(inputs)
	if (locale === "fr") return fr_translations_status_pending(inputs)
	if (locale === "it") return it_translations_status_pending(inputs)
	if (locale === "nl") return nl_translations_status_pending(inputs)
	if (locale === "pl") return pl_translations_status_pending(inputs)
	if (locale === "pt") return pt_translations_status_pending(inputs)
	if (locale === "ru") return ru_translations_status_pending(inputs)
	if (locale === "sv") return sv_translations_status_pending(inputs)
	if (locale === "tr") return tr_translations_status_pending(inputs)
	if (locale === "zh") return zh_translations_status_pending(inputs)
	if (locale === "ja") return ja_translations_status_pending(inputs)
	return en_translations_status_pending(inputs)
});

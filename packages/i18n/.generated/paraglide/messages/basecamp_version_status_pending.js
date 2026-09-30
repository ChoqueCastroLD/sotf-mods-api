/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Version_Status_PendingInputs */

const en_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In review`)
};

const es_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En revisión`)
};

const de_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In Prüfung`)
};

const fr_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En revue`)
};

const it_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In revisione`)
};

const nl_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In beoordeling`)
};

const pl_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W przeglądzie`)
};

const pt_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Em revisão`)
};

const ru_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`На проверке`)
};

const sv_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Under granskning`)
};

const tr_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İncelemede`)
};

const zh_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`审核中`)
};

const ja_basecamp_version_status_pending = /** @type {(inputs: Basecamp_Version_Status_PendingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`審査中`)
};

/**
* | output |
* | --- |
* | "In review" |
*
* @param {Basecamp_Version_Status_PendingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_version_status_pending = /** @type {((inputs?: Basecamp_Version_Status_PendingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Version_Status_PendingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_version_status_pending(inputs)
	if (locale === "de") return de_basecamp_version_status_pending(inputs)
	if (locale === "fr") return fr_basecamp_version_status_pending(inputs)
	if (locale === "it") return it_basecamp_version_status_pending(inputs)
	if (locale === "nl") return nl_basecamp_version_status_pending(inputs)
	if (locale === "pl") return pl_basecamp_version_status_pending(inputs)
	if (locale === "pt") return pt_basecamp_version_status_pending(inputs)
	if (locale === "ru") return ru_basecamp_version_status_pending(inputs)
	if (locale === "sv") return sv_basecamp_version_status_pending(inputs)
	if (locale === "tr") return tr_basecamp_version_status_pending(inputs)
	if (locale === "zh") return zh_basecamp_version_status_pending(inputs)
	if (locale === "ja") return ja_basecamp_version_status_pending(inputs)
	return en_basecamp_version_status_pending(inputs)
});

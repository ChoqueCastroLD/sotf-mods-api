/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Status_UnlistedInputs */

const en_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unlisted`)
};

const es_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oculto`)
};

const de_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht gelistet`)
};

const fr_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non listé`)
};

const it_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non elencata`)
};

const nl_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet vermeld`)
};

const pl_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niewidoczny na listach`)
};

const pt_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fora das listas`)
};

const ru_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыт из списков`)
};

const sv_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olistad`)
};

const tr_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Listelenmiyor`)
};

const zh_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未列出`)
};

const ja_basecamp_status_unlisted = /** @type {(inputs: Basecamp_Status_UnlistedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非表示`)
};

/**
* | output |
* | --- |
* | "Unlisted" |
*
* @param {Basecamp_Status_UnlistedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_status_unlisted = /** @type {((inputs?: Basecamp_Status_UnlistedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Status_UnlistedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_status_unlisted(inputs)
	if (locale === "de") return de_basecamp_status_unlisted(inputs)
	if (locale === "fr") return fr_basecamp_status_unlisted(inputs)
	if (locale === "it") return it_basecamp_status_unlisted(inputs)
	if (locale === "nl") return nl_basecamp_status_unlisted(inputs)
	if (locale === "pl") return pl_basecamp_status_unlisted(inputs)
	if (locale === "pt") return pt_basecamp_status_unlisted(inputs)
	if (locale === "ru") return ru_basecamp_status_unlisted(inputs)
	if (locale === "sv") return sv_basecamp_status_unlisted(inputs)
	if (locale === "tr") return tr_basecamp_status_unlisted(inputs)
	if (locale === "zh") return zh_basecamp_status_unlisted(inputs)
	if (locale === "ja") return ja_basecamp_status_unlisted(inputs)
	return en_basecamp_status_unlisted(inputs)
});

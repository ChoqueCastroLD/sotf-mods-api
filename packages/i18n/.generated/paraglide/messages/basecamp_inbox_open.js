/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_OpenInputs */

const en_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const es_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir`)
};

const de_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öffnen`)
};

const fr_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvrir`)
};

const it_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Apri`)
};

const nl_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Openen`)
};

const pl_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwórz`)
};

const pt_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrir`)
};

const ru_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть`)
};

const sv_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppna`)
};

const tr_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aç`)
};

const zh_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打开`)
};

const ja_basecamp_inbox_open = /** @type {(inputs: Basecamp_Inbox_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`開く`)
};

/**
* | output |
* | --- |
* | "Open" |
*
* @param {Basecamp_Inbox_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_open = /** @type {((inputs?: Basecamp_Inbox_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_open(inputs)
	if (locale === "de") return de_basecamp_inbox_open(inputs)
	if (locale === "fr") return fr_basecamp_inbox_open(inputs)
	if (locale === "it") return it_basecamp_inbox_open(inputs)
	if (locale === "nl") return nl_basecamp_inbox_open(inputs)
	if (locale === "pl") return pl_basecamp_inbox_open(inputs)
	if (locale === "pt") return pt_basecamp_inbox_open(inputs)
	if (locale === "ru") return ru_basecamp_inbox_open(inputs)
	if (locale === "sv") return sv_basecamp_inbox_open(inputs)
	if (locale === "tr") return tr_basecamp_inbox_open(inputs)
	if (locale === "zh") return zh_basecamp_inbox_open(inputs)
	if (locale === "ja") return ja_basecamp_inbox_open(inputs)
	return en_basecamp_inbox_open(inputs)
});

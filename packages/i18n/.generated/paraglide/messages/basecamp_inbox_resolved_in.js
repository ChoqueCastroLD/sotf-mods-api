/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Resolved_InInputs */

const en_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolved in`)
};

const es_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resuelto en`)
};

const de_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelöst in`)
};

const fr_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résolu dans`)
};

const it_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolto in`)
};

const nl_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgelost in`)
};

const pl_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozwiązano w`)
};

const pt_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolvido em`)
};

const ru_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решено в`)
};

const sv_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löst i`)
};

const tr_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüldüğü sürüm`)
};

const zh_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解决于`)
};

const ja_basecamp_inbox_resolved_in = /** @type {(inputs: Basecamp_Inbox_Resolved_InInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決したバージョン`)
};

/**
* | output |
* | --- |
* | "Resolved in" |
*
* @param {Basecamp_Inbox_Resolved_InInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_resolved_in = /** @type {((inputs?: Basecamp_Inbox_Resolved_InInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Resolved_InInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_resolved_in(inputs)
	if (locale === "de") return de_basecamp_inbox_resolved_in(inputs)
	if (locale === "fr") return fr_basecamp_inbox_resolved_in(inputs)
	if (locale === "it") return it_basecamp_inbox_resolved_in(inputs)
	if (locale === "nl") return nl_basecamp_inbox_resolved_in(inputs)
	if (locale === "pl") return pl_basecamp_inbox_resolved_in(inputs)
	if (locale === "pt") return pt_basecamp_inbox_resolved_in(inputs)
	if (locale === "ru") return ru_basecamp_inbox_resolved_in(inputs)
	if (locale === "sv") return sv_basecamp_inbox_resolved_in(inputs)
	if (locale === "tr") return tr_basecamp_inbox_resolved_in(inputs)
	if (locale === "zh") return zh_basecamp_inbox_resolved_in(inputs)
	if (locale === "ja") return ja_basecamp_inbox_resolved_in(inputs)
	return en_basecamp_inbox_resolved_in(inputs)
});

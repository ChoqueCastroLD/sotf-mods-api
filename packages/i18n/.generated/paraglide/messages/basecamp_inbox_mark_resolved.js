/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Mark_ResolvedInputs */

const en_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark resolved`)
};

const es_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como resuelto`)
};

const de_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als gelöst markieren`)
};

const fr_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme résolu`)
};

const it_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come risolto`)
};

const nl_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeren als opgelost`)
};

const pl_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako rozwiązane`)
};

const pt_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como resolvido`)
};

const ru_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить решённым`)
};

const sv_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som löst`)
};

const tr_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çözüldü olarak işaretle`)
};

const zh_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为已解决`)
};

const ja_basecamp_inbox_mark_resolved = /** @type {(inputs: Basecamp_Inbox_Mark_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決済みにする`)
};

/**
* | output |
* | --- |
* | "Mark resolved" |
*
* @param {Basecamp_Inbox_Mark_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_mark_resolved = /** @type {((inputs?: Basecamp_Inbox_Mark_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Mark_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_mark_resolved(inputs)
	if (locale === "de") return de_basecamp_inbox_mark_resolved(inputs)
	if (locale === "fr") return fr_basecamp_inbox_mark_resolved(inputs)
	if (locale === "it") return it_basecamp_inbox_mark_resolved(inputs)
	if (locale === "nl") return nl_basecamp_inbox_mark_resolved(inputs)
	if (locale === "pl") return pl_basecamp_inbox_mark_resolved(inputs)
	if (locale === "pt") return pt_basecamp_inbox_mark_resolved(inputs)
	if (locale === "ru") return ru_basecamp_inbox_mark_resolved(inputs)
	if (locale === "sv") return sv_basecamp_inbox_mark_resolved(inputs)
	if (locale === "tr") return tr_basecamp_inbox_mark_resolved(inputs)
	if (locale === "zh") return zh_basecamp_inbox_mark_resolved(inputs)
	if (locale === "ja") return ja_basecamp_inbox_mark_resolved(inputs)
	return en_basecamp_inbox_mark_resolved(inputs)
});

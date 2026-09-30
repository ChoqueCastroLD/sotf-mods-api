/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Mark_FixedInputs */

const en_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mark fixed`)
};

const es_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como arreglado`)
};

const de_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Als behoben markieren`)
};

const fr_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marquer comme corrigé`)
};

const it_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segna come corretto`)
};

const nl_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markeren als verholpen`)
};

const pl_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oznacz jako naprawione`)
};

const pt_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcar como corrigido`)
};

const ru_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отметить исправленным`)
};

const sv_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Markera som åtgärdat`)
};

const tr_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzeltildi olarak işaretle`)
};

const zh_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标记为已修复`)
};

const ja_basecamp_inbox_mark_fixed = /** @type {(inputs: Basecamp_Inbox_Mark_FixedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正済みにする`)
};

/**
* | output |
* | --- |
* | "Mark fixed" |
*
* @param {Basecamp_Inbox_Mark_FixedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_mark_fixed = /** @type {((inputs?: Basecamp_Inbox_Mark_FixedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Mark_FixedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_mark_fixed(inputs)
	if (locale === "de") return de_basecamp_inbox_mark_fixed(inputs)
	if (locale === "fr") return fr_basecamp_inbox_mark_fixed(inputs)
	if (locale === "it") return it_basecamp_inbox_mark_fixed(inputs)
	if (locale === "nl") return nl_basecamp_inbox_mark_fixed(inputs)
	if (locale === "pl") return pl_basecamp_inbox_mark_fixed(inputs)
	if (locale === "pt") return pt_basecamp_inbox_mark_fixed(inputs)
	if (locale === "ru") return ru_basecamp_inbox_mark_fixed(inputs)
	if (locale === "sv") return sv_basecamp_inbox_mark_fixed(inputs)
	if (locale === "tr") return tr_basecamp_inbox_mark_fixed(inputs)
	if (locale === "zh") return zh_basecamp_inbox_mark_fixed(inputs)
	if (locale === "ja") return ja_basecamp_inbox_mark_fixed(inputs)
	return en_basecamp_inbox_mark_fixed(inputs)
});

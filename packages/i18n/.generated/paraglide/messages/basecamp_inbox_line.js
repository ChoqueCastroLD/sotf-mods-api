/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ type: NonNullable<unknown>, author: NonNullable<unknown>, mod: NonNullable<unknown> }} Basecamp_Inbox_LineInputs */

const en_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} by ${i?.author} on ${i?.mod}`)
};

const es_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} de ${i?.author} en ${i?.mod}`)
};

const de_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} von ${i?.author} zu ${i?.mod}`)
};

const fr_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} de ${i?.author} sur ${i?.mod}`)
};

const it_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} di ${i?.author} su ${i?.mod}`)
};

const nl_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} van ${i?.author} over ${i?.mod}`)
};

const pl_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} od ${i?.author} przy ${i?.mod}`)
};

const pt_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} de ${i?.author} em ${i?.mod}`)
};

const ru_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} от ${i?.author} к ${i?.mod}`)
};

const sv_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.type} från ${i?.author} om ${i?.mod}`)
};

const tr_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} için ${i?.author} tarafından ${i?.type}`)
};

const zh_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.author} 在 ${i?.mod} 上的${i?.type}`)
};

const ja_basecamp_inbox_line = /** @type {(inputs: Basecamp_Inbox_LineInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.mod} への ${i?.author} の${i?.type}`)
};

/**
* | output |
* | --- |
* | "{type} by {author} on {mod}" |
*
* @param {Basecamp_Inbox_LineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_line = /** @type {((inputs: Basecamp_Inbox_LineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_LineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_line(inputs)
	if (locale === "de") return de_basecamp_inbox_line(inputs)
	if (locale === "fr") return fr_basecamp_inbox_line(inputs)
	if (locale === "it") return it_basecamp_inbox_line(inputs)
	if (locale === "nl") return nl_basecamp_inbox_line(inputs)
	if (locale === "pl") return pl_basecamp_inbox_line(inputs)
	if (locale === "pt") return pt_basecamp_inbox_line(inputs)
	if (locale === "ru") return ru_basecamp_inbox_line(inputs)
	if (locale === "sv") return sv_basecamp_inbox_line(inputs)
	if (locale === "tr") return tr_basecamp_inbox_line(inputs)
	if (locale === "zh") return zh_basecamp_inbox_line(inputs)
	if (locale === "ja") return ja_basecamp_inbox_line(inputs)
	return en_basecamp_inbox_line(inputs)
});

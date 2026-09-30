/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ actor: NonNullable<unknown>, mod: NonNullable<unknown> }} Signals_Comment_On_ModInputs */

const en_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} commented on ${i?.mod}`)
};

const es_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha comentado en ${i?.mod}`)
};

const de_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} hat ${i?.mod} kommentiert`)
};

const fr_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} a commenté ${i?.mod}`)
};

const it_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} ha commentato ${i?.mod}`)
};

const nl_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} reageerde op ${i?.mod}`)
};

const pl_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} skomentował(a) ${i?.mod}`)
};

const pt_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} comentou em ${i?.mod}`)
};

const ru_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} прокомментировал(а) ${i?.mod}`)
};

const sv_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} kommenterade ${i?.mod}`)
};

const tr_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor}, ${i?.mod} hakkında yorum yaptı`)
};

const zh_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} 评论了 ${i?.mod}`)
};

const ja_signals_comment_on_mod = /** @type {(inputs: Signals_Comment_On_ModInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.actor} が ${i?.mod} にコメントしました`)
};

/**
* | output |
* | --- |
* | "{actor} commented on {mod}" |
*
* @param {Signals_Comment_On_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_comment_on_mod = /** @type {((inputs: Signals_Comment_On_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Comment_On_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_comment_on_mod(inputs)
	if (locale === "de") return de_signals_comment_on_mod(inputs)
	if (locale === "fr") return fr_signals_comment_on_mod(inputs)
	if (locale === "it") return it_signals_comment_on_mod(inputs)
	if (locale === "nl") return nl_signals_comment_on_mod(inputs)
	if (locale === "pl") return pl_signals_comment_on_mod(inputs)
	if (locale === "pt") return pt_signals_comment_on_mod(inputs)
	if (locale === "ru") return ru_signals_comment_on_mod(inputs)
	if (locale === "sv") return sv_signals_comment_on_mod(inputs)
	if (locale === "tr") return tr_signals_comment_on_mod(inputs)
	if (locale === "zh") return zh_signals_comment_on_mod(inputs)
	if (locale === "ja") return ja_signals_comment_on_mod(inputs)
	return en_signals_comment_on_mod(inputs)
});

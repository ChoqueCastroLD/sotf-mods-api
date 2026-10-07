/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Attention_RestoreInputs */

const en_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore`)
};

const es_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar`)
};

const de_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiederherstellen`)
};

const fr_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rétablir`)
};

const it_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ripristina`)
};

const nl_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herstellen`)
};

const pl_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przywróć`)
};

const pt_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar`)
};

const ru_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вернуть`)
};

const sv_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställ`)
};

const tr_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri yükle`)
};

const zh_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复`)
};

const ja_basecamp_attention_restore = /** @type {(inputs: Basecamp_Attention_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`元に戻す`)
};

/**
* | output |
* | --- |
* | "Restore" |
*
* @param {Basecamp_Attention_RestoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_attention_restore = /** @type {((inputs?: Basecamp_Attention_RestoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Attention_RestoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_attention_restore(inputs)
	if (locale === "de") return de_basecamp_attention_restore(inputs)
	if (locale === "fr") return fr_basecamp_attention_restore(inputs)
	if (locale === "it") return it_basecamp_attention_restore(inputs)
	if (locale === "nl") return nl_basecamp_attention_restore(inputs)
	if (locale === "pl") return pl_basecamp_attention_restore(inputs)
	if (locale === "pt") return pt_basecamp_attention_restore(inputs)
	if (locale === "ru") return ru_basecamp_attention_restore(inputs)
	if (locale === "sv") return sv_basecamp_attention_restore(inputs)
	if (locale === "tr") return tr_basecamp_attention_restore(inputs)
	if (locale === "zh") return zh_basecamp_attention_restore(inputs)
	if (locale === "ja") return ja_basecamp_attention_restore(inputs)
	return en_basecamp_attention_restore(inputs)
});

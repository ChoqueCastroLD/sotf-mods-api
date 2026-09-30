/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Meta_Never_UsedInputs */

const en_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Never used`)
};

const es_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca usado`)
};

const de_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie verwendet`)
};

const fr_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jamais utilisé`)
};

const it_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mai usato`)
};

const nl_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nooit gebruikt`)
};

const pl_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nigdy nieużyty`)
};

const pt_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nunca usado`)
};

const ru_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не использовался`)
};

const sv_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aldrig använd`)
};

const tr_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hiç kullanılmadı`)
};

const zh_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`从未使用`)
};

const ja_tokens_meta_never_used = /** @type {(inputs: Tokens_Meta_Never_UsedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未使用`)
};

/**
* | output |
* | --- |
* | "Never used" |
*
* @param {Tokens_Meta_Never_UsedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_meta_never_used = /** @type {((inputs?: Tokens_Meta_Never_UsedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Meta_Never_UsedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_meta_never_used(inputs)
	if (locale === "de") return de_tokens_meta_never_used(inputs)
	if (locale === "fr") return fr_tokens_meta_never_used(inputs)
	if (locale === "it") return it_tokens_meta_never_used(inputs)
	if (locale === "nl") return nl_tokens_meta_never_used(inputs)
	if (locale === "pl") return pl_tokens_meta_never_used(inputs)
	if (locale === "pt") return pt_tokens_meta_never_used(inputs)
	if (locale === "ru") return ru_tokens_meta_never_used(inputs)
	if (locale === "sv") return sv_tokens_meta_never_used(inputs)
	if (locale === "tr") return tr_tokens_meta_never_used(inputs)
	if (locale === "zh") return zh_tokens_meta_never_used(inputs)
	if (locale === "ja") return ja_tokens_meta_never_used(inputs)
	return en_tokens_meta_never_used(inputs)
});

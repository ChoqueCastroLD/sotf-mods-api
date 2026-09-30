/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Tokens_Meta_ExpiresInputs */

const en_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Expires ${i?.date}`)
};

const es_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Caduca el ${i?.date}`)
};

const de_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Läuft ab am ${i?.date}`)
};

const fr_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Expire le ${i?.date}`)
};

const it_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scade il ${i?.date}`)
};

const nl_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verloopt op ${i?.date}`)
};

const pl_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Wygasa ${i?.date}`)
};

const pt_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Expira em ${i?.date}`)
};

const ru_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Истекает ${i?.date}`)
};

const sv_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Går ut ${i?.date}`)
};

const tr_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bitiş: ${i?.date}`)
};

const zh_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`到期于 ${i?.date}`)
};

const ja_tokens_meta_expires = /** @type {(inputs: Tokens_Meta_ExpiresInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`有効期限 ${i?.date}`)
};

/**
* | output |
* | --- |
* | "Expires {date}" |
*
* @param {Tokens_Meta_ExpiresInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_meta_expires = /** @type {((inputs: Tokens_Meta_ExpiresInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Meta_ExpiresInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_meta_expires(inputs)
	if (locale === "de") return de_tokens_meta_expires(inputs)
	if (locale === "fr") return fr_tokens_meta_expires(inputs)
	if (locale === "it") return it_tokens_meta_expires(inputs)
	if (locale === "nl") return nl_tokens_meta_expires(inputs)
	if (locale === "pl") return pl_tokens_meta_expires(inputs)
	if (locale === "pt") return pt_tokens_meta_expires(inputs)
	if (locale === "ru") return ru_tokens_meta_expires(inputs)
	if (locale === "sv") return sv_tokens_meta_expires(inputs)
	if (locale === "tr") return tr_tokens_meta_expires(inputs)
	if (locale === "zh") return zh_tokens_meta_expires(inputs)
	if (locale === "ja") return ja_tokens_meta_expires(inputs)
	return en_tokens_meta_expires(inputs)
});

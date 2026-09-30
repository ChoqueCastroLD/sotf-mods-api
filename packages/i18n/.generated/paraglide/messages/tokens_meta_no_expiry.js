/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Meta_No_ExpiryInputs */

const en_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doesn’t expire`)
};

const es_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No caduca`)
};

const de_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft nicht ab`)
};

const fr_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`N’expire pas`)
};

const it_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non scade`)
};

const nl_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verloopt niet`)
};

const pl_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie wygasa`)
};

const pt_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não expira`)
};

const ru_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Без срока действия`)
};

const sv_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Går inte ut`)
};

const tr_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Süresiz`)
};

const zh_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`永不过期`)
};

const ja_tokens_meta_no_expiry = /** @type {(inputs: Tokens_Meta_No_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`無期限`)
};

/**
* | output |
* | --- |
* | "Doesn’t expire" |
*
* @param {Tokens_Meta_No_ExpiryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_meta_no_expiry = /** @type {((inputs?: Tokens_Meta_No_ExpiryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Meta_No_ExpiryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_meta_no_expiry(inputs)
	if (locale === "de") return de_tokens_meta_no_expiry(inputs)
	if (locale === "fr") return fr_tokens_meta_no_expiry(inputs)
	if (locale === "it") return it_tokens_meta_no_expiry(inputs)
	if (locale === "nl") return nl_tokens_meta_no_expiry(inputs)
	if (locale === "pl") return pl_tokens_meta_no_expiry(inputs)
	if (locale === "pt") return pt_tokens_meta_no_expiry(inputs)
	if (locale === "ru") return ru_tokens_meta_no_expiry(inputs)
	if (locale === "sv") return sv_tokens_meta_no_expiry(inputs)
	if (locale === "tr") return tr_tokens_meta_no_expiry(inputs)
	if (locale === "zh") return zh_tokens_meta_no_expiry(inputs)
	if (locale === "ja") return ja_tokens_meta_no_expiry(inputs)
	return en_tokens_meta_no_expiry(inputs)
});

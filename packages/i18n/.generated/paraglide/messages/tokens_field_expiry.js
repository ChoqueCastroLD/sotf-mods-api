/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Field_ExpiryInputs */

const en_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expires after`)
};

const es_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caduca tras`)
};

const de_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läuft ab nach`)
};

const fr_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expire après`)
};

const it_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scade dopo`)
};

const nl_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verloopt na`)
};

const pl_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wygasa po`)
};

const pt_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Expira após`)
};

const ru_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Срок действия`)
};

const sv_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Går ut efter`)
};

const tr_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçerlilik süresi`)
};

const zh_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有效期`)
};

const ja_tokens_field_expiry = /** @type {(inputs: Tokens_Field_ExpiryInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効期間`)
};

/**
* | output |
* | --- |
* | "Expires after" |
*
* @param {Tokens_Field_ExpiryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_field_expiry = /** @type {((inputs?: Tokens_Field_ExpiryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Field_ExpiryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_field_expiry(inputs)
	if (locale === "de") return de_tokens_field_expiry(inputs)
	if (locale === "fr") return fr_tokens_field_expiry(inputs)
	if (locale === "it") return it_tokens_field_expiry(inputs)
	if (locale === "nl") return nl_tokens_field_expiry(inputs)
	if (locale === "pl") return pl_tokens_field_expiry(inputs)
	if (locale === "pt") return pt_tokens_field_expiry(inputs)
	if (locale === "ru") return ru_tokens_field_expiry(inputs)
	if (locale === "sv") return sv_tokens_field_expiry(inputs)
	if (locale === "tr") return tr_tokens_field_expiry(inputs)
	if (locale === "zh") return zh_tokens_field_expiry(inputs)
	if (locale === "ja") return ja_tokens_field_expiry(inputs)
	return en_tokens_field_expiry(inputs)
});

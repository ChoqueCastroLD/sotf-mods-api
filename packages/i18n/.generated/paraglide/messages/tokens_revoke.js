/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_RevokeInputs */

const en_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoke`)
};

const es_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revocar`)
};

const de_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widerrufen`)
};

const fr_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Révoquer`)
};

const it_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoca`)
};

const nl_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intrekken`)
};

const pl_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unieważnij`)
};

const pt_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revogar`)
};

const ru_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отозвать`)
};

const sv_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återkalla`)
};

const tr_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal et`)
};

const zh_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撤销`)
};

const ja_tokens_revoke = /** @type {(inputs: Tokens_RevokeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失効`)
};

/**
* | output |
* | --- |
* | "Revoke" |
*
* @param {Tokens_RevokeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_revoke = /** @type {((inputs?: Tokens_RevokeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_RevokeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_revoke(inputs)
	if (locale === "de") return de_tokens_revoke(inputs)
	if (locale === "fr") return fr_tokens_revoke(inputs)
	if (locale === "it") return it_tokens_revoke(inputs)
	if (locale === "nl") return nl_tokens_revoke(inputs)
	if (locale === "pl") return pl_tokens_revoke(inputs)
	if (locale === "pt") return pt_tokens_revoke(inputs)
	if (locale === "ru") return ru_tokens_revoke(inputs)
	if (locale === "sv") return sv_tokens_revoke(inputs)
	if (locale === "tr") return tr_tokens_revoke(inputs)
	if (locale === "zh") return zh_tokens_revoke(inputs)
	if (locale === "ja") return ja_tokens_revoke(inputs)
	return en_tokens_revoke(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, max: NonNullable<unknown> }} Tokens_CountInputs */

const en_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tokens in use: ${i?.count} of ${i?.max}`)
};

const es_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tokens en uso: ${i?.count} de ${i?.max}`)
};

const de_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verwendete Token: ${i?.count} von ${i?.max}`)
};

const fr_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jetons utilisés : ${i?.count} sur ${i?.max}`)
};

const it_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Token in uso: ${i?.count} su ${i?.max}`)
};

const nl_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tokens in gebruik: ${i?.count} van ${i?.max}`)
};

const pl_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Używane tokeny: ${i?.count} z ${i?.max}`)
};

const pt_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tokens em uso: ${i?.count} de ${i?.max}`)
};

const ru_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Используется токенов: ${i?.count} из ${i?.max}`)
};

const sv_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tokens i bruk: ${i?.count} av ${i?.max}`)
};

const tr_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Kullanılan belirteç: ${i?.count} / ${i?.max}`)
};

const zh_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`已使用令牌：${i?.count} / ${i?.max}`)
};

const ja_tokens_count = /** @type {(inputs: Tokens_CountInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`使用中のトークン：${i?.count} / ${i?.max}`)
};

/**
* | output |
* | --- |
* | "Tokens in use: {count} of {max}" |
*
* @param {Tokens_CountInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_count = /** @type {((inputs: Tokens_CountInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_CountInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_count(inputs)
	if (locale === "de") return de_tokens_count(inputs)
	if (locale === "fr") return fr_tokens_count(inputs)
	if (locale === "it") return it_tokens_count(inputs)
	if (locale === "nl") return nl_tokens_count(inputs)
	if (locale === "pl") return pl_tokens_count(inputs)
	if (locale === "pt") return pt_tokens_count(inputs)
	if (locale === "ru") return ru_tokens_count(inputs)
	if (locale === "sv") return sv_tokens_count(inputs)
	if (locale === "tr") return tr_tokens_count(inputs)
	if (locale === "zh") return zh_tokens_count(inputs)
	if (locale === "ja") return ja_tokens_count(inputs)
	return en_tokens_count(inputs)
});

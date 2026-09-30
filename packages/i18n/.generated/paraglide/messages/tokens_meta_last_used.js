/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ when: NonNullable<unknown> }} Tokens_Meta_Last_UsedInputs */

const en_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Last used ${i?.when}`)
};

const es_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Último uso ${i?.when}`)
};

const de_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zuletzt verwendet ${i?.when}`)
};

const fr_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dernière utilisation ${i?.when}`)
};

const it_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ultimo utilizzo ${i?.when}`)
};

const nl_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Laatst gebruikt ${i?.when}`)
};

const pl_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ostatnio użyty ${i?.when}`)
};

const pt_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Último uso ${i?.when}`)
};

const ru_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Использован ${i?.when}`)
};

const sv_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Senast använd ${i?.when}`)
};

const tr_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Son kullanım ${i?.when}`)
};

const zh_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最近使用 ${i?.when}`)
};

const ja_tokens_meta_last_used = /** @type {(inputs: Tokens_Meta_Last_UsedInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`最終使用 ${i?.when}`)
};

/**
* | output |
* | --- |
* | "Last used {when}" |
*
* @param {Tokens_Meta_Last_UsedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_meta_last_used = /** @type {((inputs: Tokens_Meta_Last_UsedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Meta_Last_UsedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_meta_last_used(inputs)
	if (locale === "de") return de_tokens_meta_last_used(inputs)
	if (locale === "fr") return fr_tokens_meta_last_used(inputs)
	if (locale === "it") return it_tokens_meta_last_used(inputs)
	if (locale === "nl") return nl_tokens_meta_last_used(inputs)
	if (locale === "pl") return pl_tokens_meta_last_used(inputs)
	if (locale === "pt") return pt_tokens_meta_last_used(inputs)
	if (locale === "ru") return ru_tokens_meta_last_used(inputs)
	if (locale === "sv") return sv_tokens_meta_last_used(inputs)
	if (locale === "tr") return tr_tokens_meta_last_used(inputs)
	if (locale === "zh") return zh_tokens_meta_last_used(inputs)
	if (locale === "ja") return ja_tokens_meta_last_used(inputs)
	return en_tokens_meta_last_used(inputs)
});

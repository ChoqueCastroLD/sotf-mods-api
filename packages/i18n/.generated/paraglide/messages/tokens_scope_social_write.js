/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Scope_Social_WriteInputs */

const en_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interact`)
};

const es_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interactuar`)
};

const de_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interagieren`)
};

const fr_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interagir`)
};

const it_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interagire`)
};

const nl_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interacteren`)
};

const pl_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interakcje`)
};

const pt_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interagir`)
};

const ru_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Взаимодействие`)
};

const sv_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Interagera`)
};

const tr_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkileşim`)
};

const zh_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互动`)
};

const ja_tokens_scope_social_write = /** @type {(inputs: Tokens_Scope_Social_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`交流`)
};

/**
* | output |
* | --- |
* | "Interact" |
*
* @param {Tokens_Scope_Social_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_scope_social_write = /** @type {((inputs?: Tokens_Scope_Social_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scope_Social_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_scope_social_write(inputs)
	if (locale === "de") return de_tokens_scope_social_write(inputs)
	if (locale === "fr") return fr_tokens_scope_social_write(inputs)
	if (locale === "it") return it_tokens_scope_social_write(inputs)
	if (locale === "nl") return nl_tokens_scope_social_write(inputs)
	if (locale === "pl") return pl_tokens_scope_social_write(inputs)
	if (locale === "pt") return pt_tokens_scope_social_write(inputs)
	if (locale === "ru") return ru_tokens_scope_social_write(inputs)
	if (locale === "sv") return sv_tokens_scope_social_write(inputs)
	if (locale === "tr") return tr_tokens_scope_social_write(inputs)
	if (locale === "zh") return zh_tokens_scope_social_write(inputs)
	if (locale === "ja") return ja_tokens_scope_social_write(inputs)
	return en_tokens_scope_social_write(inputs)
});

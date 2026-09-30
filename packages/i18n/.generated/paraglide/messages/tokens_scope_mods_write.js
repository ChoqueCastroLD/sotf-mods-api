/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Scope_Mods_WriteInputs */

const en_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Manage mods`)
};

const es_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestionar mods`)
};

const de_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods verwalten`)
};

const fr_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gérer les mods`)
};

const it_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gestire le mod`)
};

const nl_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods beheren`)
};

const pl_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zarządzanie modami`)
};

const pt_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gerenciar mods`)
};

const ru_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Управление модами`)
};

const sv_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hantera mods`)
};

const tr_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları yönet`)
};

const zh_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`管理模组`)
};

const ja_tokens_scope_mods_write = /** @type {(inputs: Tokens_Scope_Mods_WriteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod の管理`)
};

/**
* | output |
* | --- |
* | "Manage mods" |
*
* @param {Tokens_Scope_Mods_WriteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_scope_mods_write = /** @type {((inputs?: Tokens_Scope_Mods_WriteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Scope_Mods_WriteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_scope_mods_write(inputs)
	if (locale === "de") return de_tokens_scope_mods_write(inputs)
	if (locale === "fr") return fr_tokens_scope_mods_write(inputs)
	if (locale === "it") return it_tokens_scope_mods_write(inputs)
	if (locale === "nl") return nl_tokens_scope_mods_write(inputs)
	if (locale === "pl") return pl_tokens_scope_mods_write(inputs)
	if (locale === "pt") return pt_tokens_scope_mods_write(inputs)
	if (locale === "ru") return ru_tokens_scope_mods_write(inputs)
	if (locale === "sv") return sv_tokens_scope_mods_write(inputs)
	if (locale === "tr") return tr_tokens_scope_mods_write(inputs)
	if (locale === "zh") return zh_tokens_scope_mods_write(inputs)
	if (locale === "ja") return ja_tokens_scope_mods_write(inputs)
	return en_tokens_scope_mods_write(inputs)
});

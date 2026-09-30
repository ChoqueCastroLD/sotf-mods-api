/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_Kind_VersionInputs */

const en_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const es_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión`)
};

const de_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const fr_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const it_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione`)
};

const nl_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versie`)
};

const pl_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja`)
};

const pt_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão`)
};

const ru_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия`)
};

const sv_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version`)
};

const tr_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sürüm`)
};

const zh_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`版本`)
};

const ja_live_embed_kind_version = /** @type {(inputs: Live_Embed_Kind_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バージョン`)
};

/**
* | output |
* | --- |
* | "Version" |
*
* @param {Live_Embed_Kind_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_kind_version = /** @type {((inputs?: Live_Embed_Kind_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_Kind_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_kind_version(inputs)
	if (locale === "de") return de_live_embed_kind_version(inputs)
	if (locale === "fr") return fr_live_embed_kind_version(inputs)
	if (locale === "it") return it_live_embed_kind_version(inputs)
	if (locale === "nl") return nl_live_embed_kind_version(inputs)
	if (locale === "pl") return pl_live_embed_kind_version(inputs)
	if (locale === "pt") return pt_live_embed_kind_version(inputs)
	if (locale === "ru") return ru_live_embed_kind_version(inputs)
	if (locale === "sv") return sv_live_embed_kind_version(inputs)
	if (locale === "tr") return tr_live_embed_kind_version(inputs)
	if (locale === "zh") return zh_live_embed_kind_version(inputs)
	if (locale === "ja") return ja_live_embed_kind_version(inputs)
	return en_live_embed_kind_version(inputs)
});

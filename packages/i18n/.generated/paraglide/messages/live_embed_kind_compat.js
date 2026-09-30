/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_Kind_CompatInputs */

const en_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibility`)
};

const es_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidad`)
};

const de_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilität`)
};

const fr_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilité`)
};

const it_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilità`)
};

const nl_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibiliteit`)
};

const pl_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgodność`)
};

const pt_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatibilidade`)
};

const ru_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Совместимость`)
};

const sv_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompatibilitet`)
};

const tr_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uyumluluk`)
};

const zh_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`兼容性`)
};

const ja_live_embed_kind_compat = /** @type {(inputs: Live_Embed_Kind_CompatInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`互換性`)
};

/**
* | output |
* | --- |
* | "Compatibility" |
*
* @param {Live_Embed_Kind_CompatInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_kind_compat = /** @type {((inputs?: Live_Embed_Kind_CompatInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_Kind_CompatInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_kind_compat(inputs)
	if (locale === "de") return de_live_embed_kind_compat(inputs)
	if (locale === "fr") return fr_live_embed_kind_compat(inputs)
	if (locale === "it") return it_live_embed_kind_compat(inputs)
	if (locale === "nl") return nl_live_embed_kind_compat(inputs)
	if (locale === "pl") return pl_live_embed_kind_compat(inputs)
	if (locale === "pt") return pt_live_embed_kind_compat(inputs)
	if (locale === "ru") return ru_live_embed_kind_compat(inputs)
	if (locale === "sv") return sv_live_embed_kind_compat(inputs)
	if (locale === "tr") return tr_live_embed_kind_compat(inputs)
	if (locale === "zh") return zh_live_embed_kind_compat(inputs)
	if (locale === "ja") return ja_live_embed_kind_compat(inputs)
	return en_live_embed_kind_compat(inputs)
});

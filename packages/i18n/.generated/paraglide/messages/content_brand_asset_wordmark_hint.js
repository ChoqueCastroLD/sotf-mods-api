/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Asset_Wordmark_HintInputs */

const en_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“SOTF MODS” without the pin, for tight horizontal spaces.`)
};

const es_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`«SOTF MODS» sin el pin, para espacios horizontales estrechos.`)
};

const de_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`„SOTF MODS“ ohne Pin, für schmale horizontale Flächen.`)
};

const fr_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`« SOTF MODS » sans le repère, pour les espaces horizontaux étroits.`)
};

const it_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`«SOTF MODS» senza il segnaposto, per spazi orizzontali stretti.`)
};

const nl_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`‘SOTF MODS’ zonder pin, voor smalle horizontale ruimtes.`)
};

const pl_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`„SOTF MODS” bez pinezki, do wąskich poziomych miejsc.`)
};

const pt_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`“SOTF MODS” sem o pino, para espaços horizontais estreitos.`)
};

const ru_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`«SOTF MODS» без метки, для узких горизонтальных мест.`)
};

const sv_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`”SOTF MODS” utan nålen, för smala horisontella ytor.`)
};

const tr_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İğnesiz “SOTF MODS”, dar yatay alanlar için.`)
};

const zh_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不含图钉的“SOTF MODS”，用于狭窄的横向空间。`)
};

const ja_content_brand_asset_wordmark_hint = /** @type {(inputs: Content_Brand_Asset_Wordmark_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピンなしの「SOTF MODS」。細い横長のスペース向け。`)
};

/**
* | output |
* | --- |
* | "“SOTF MODS” without the pin, for tight horizontal spaces." |
*
* @param {Content_Brand_Asset_Wordmark_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_asset_wordmark_hint = /** @type {((inputs?: Content_Brand_Asset_Wordmark_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Asset_Wordmark_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_asset_wordmark_hint(inputs)
	if (locale === "de") return de_content_brand_asset_wordmark_hint(inputs)
	if (locale === "fr") return fr_content_brand_asset_wordmark_hint(inputs)
	if (locale === "it") return it_content_brand_asset_wordmark_hint(inputs)
	if (locale === "nl") return nl_content_brand_asset_wordmark_hint(inputs)
	if (locale === "pl") return pl_content_brand_asset_wordmark_hint(inputs)
	if (locale === "pt") return pt_content_brand_asset_wordmark_hint(inputs)
	if (locale === "ru") return ru_content_brand_asset_wordmark_hint(inputs)
	if (locale === "sv") return sv_content_brand_asset_wordmark_hint(inputs)
	if (locale === "tr") return tr_content_brand_asset_wordmark_hint(inputs)
	if (locale === "zh") return zh_content_brand_asset_wordmark_hint(inputs)
	if (locale === "ja") return ja_content_brand_asset_wordmark_hint(inputs)
	return en_content_brand_asset_wordmark_hint(inputs)
});

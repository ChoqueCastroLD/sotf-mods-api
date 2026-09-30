/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Live_Embed_Kind_DownloadsInputs */

const en_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки`)
};

const sv_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载量`)
};

const ja_live_embed_kind_downloads = /** @type {(inputs: Live_Embed_Kind_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード数`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Live_Embed_Kind_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const live_embed_kind_downloads = /** @type {((inputs?: Live_Embed_Kind_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Live_Embed_Kind_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_live_embed_kind_downloads(inputs)
	if (locale === "de") return de_live_embed_kind_downloads(inputs)
	if (locale === "fr") return fr_live_embed_kind_downloads(inputs)
	if (locale === "it") return it_live_embed_kind_downloads(inputs)
	if (locale === "nl") return nl_live_embed_kind_downloads(inputs)
	if (locale === "pl") return pl_live_embed_kind_downloads(inputs)
	if (locale === "pt") return pt_live_embed_kind_downloads(inputs)
	if (locale === "ru") return ru_live_embed_kind_downloads(inputs)
	if (locale === "sv") return sv_live_embed_kind_downloads(inputs)
	if (locale === "tr") return tr_live_embed_kind_downloads(inputs)
	if (locale === "zh") return zh_live_embed_kind_downloads(inputs)
	if (locale === "ja") return ja_live_embed_kind_downloads(inputs)
	return en_live_embed_kind_downloads(inputs)
});

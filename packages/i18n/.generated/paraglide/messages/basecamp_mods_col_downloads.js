/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Col_DownloadsInputs */

const en_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · 7 d`)
};

const es_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas · 7 d`)
};

const de_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · 7 T.`)
};

const fr_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements · 7 j`)
};

const it_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download · 7 g`)
};

const nl_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · 7 d`)
};

const pl_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania · 7 dni`)
};

const pt_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads · 7 d`)
};

const ru_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки · 7 дн.`)
};

const sv_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar · 7 d`)
};

const tr_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirme · 7 g`)
};

const zh_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载 · 7 天`)
};

const ja_basecamp_mods_col_downloads = /** @type {(inputs: Basecamp_Mods_Col_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード · 7 日`)
};

/**
* | output |
* | --- |
* | "Downloads · 7 d" |
*
* @param {Basecamp_Mods_Col_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_col_downloads = /** @type {((inputs?: Basecamp_Mods_Col_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Col_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_col_downloads(inputs)
	if (locale === "de") return de_basecamp_mods_col_downloads(inputs)
	if (locale === "fr") return fr_basecamp_mods_col_downloads(inputs)
	if (locale === "it") return it_basecamp_mods_col_downloads(inputs)
	if (locale === "nl") return nl_basecamp_mods_col_downloads(inputs)
	if (locale === "pl") return pl_basecamp_mods_col_downloads(inputs)
	if (locale === "pt") return pt_basecamp_mods_col_downloads(inputs)
	if (locale === "ru") return ru_basecamp_mods_col_downloads(inputs)
	if (locale === "sv") return sv_basecamp_mods_col_downloads(inputs)
	if (locale === "tr") return tr_basecamp_mods_col_downloads(inputs)
	if (locale === "zh") return zh_basecamp_mods_col_downloads(inputs)
	if (locale === "ja") return ja_basecamp_mods_col_downloads(inputs)
	return en_basecamp_mods_col_downloads(inputs)
});

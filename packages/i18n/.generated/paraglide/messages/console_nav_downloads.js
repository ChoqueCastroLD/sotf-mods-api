/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_DownloadsInputs */

const en_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const es_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas`)
};

const de_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const fr_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements`)
};

const it_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download`)
};

const nl_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const pl_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania`)
};

const pt_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads`)
};

const ru_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки`)
};

const sv_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar`)
};

const tr_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İndirmeler`)
};

const zh_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载记录`)
};

const ja_console_nav_downloads = /** @type {(inputs: Console_Nav_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード履歴`)
};

/**
* | output |
* | --- |
* | "Downloads" |
*
* @param {Console_Nav_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_downloads = /** @type {((inputs?: Console_Nav_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_downloads(inputs)
	if (locale === "de") return de_console_nav_downloads(inputs)
	if (locale === "fr") return fr_console_nav_downloads(inputs)
	if (locale === "it") return it_console_nav_downloads(inputs)
	if (locale === "nl") return nl_console_nav_downloads(inputs)
	if (locale === "pl") return pl_console_nav_downloads(inputs)
	if (locale === "pt") return pt_console_nav_downloads(inputs)
	if (locale === "ru") return ru_console_nav_downloads(inputs)
	if (locale === "sv") return sv_console_nav_downloads(inputs)
	if (locale === "tr") return tr_console_nav_downloads(inputs)
	if (locale === "zh") return zh_console_nav_downloads(inputs)
	if (locale === "ja") return ja_console_nav_downloads(inputs)
	return en_console_nav_downloads(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Mods_Sort_DownloadsInputs */

const en_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads this week`)
};

const es_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas de esta semana`)
};

const de_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads dieser Woche`)
};

const fr_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements de la semaine`)
};

const it_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download della settimana`)
};

const nl_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads deze week`)
};

const pl_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania w tym tygodniu`)
};

const pt_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads da semana`)
};

const ru_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузкам за неделю`)
};

const sv_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar i veckan`)
};

const tr_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu haftaki indirmeler`)
};

const zh_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本周下载量`)
};

const ja_basecamp_mods_sort_downloads = /** @type {(inputs: Basecamp_Mods_Sort_DownloadsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今週のダウンロード`)
};

/**
* | output |
* | --- |
* | "Downloads this week" |
*
* @param {Basecamp_Mods_Sort_DownloadsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_mods_sort_downloads = /** @type {((inputs?: Basecamp_Mods_Sort_DownloadsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Mods_Sort_DownloadsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_mods_sort_downloads(inputs)
	if (locale === "de") return de_basecamp_mods_sort_downloads(inputs)
	if (locale === "fr") return fr_basecamp_mods_sort_downloads(inputs)
	if (locale === "it") return it_basecamp_mods_sort_downloads(inputs)
	if (locale === "nl") return nl_basecamp_mods_sort_downloads(inputs)
	if (locale === "pl") return pl_basecamp_mods_sort_downloads(inputs)
	if (locale === "pt") return pt_basecamp_mods_sort_downloads(inputs)
	if (locale === "ru") return ru_basecamp_mods_sort_downloads(inputs)
	if (locale === "sv") return sv_basecamp_mods_sort_downloads(inputs)
	if (locale === "tr") return tr_basecamp_mods_sort_downloads(inputs)
	if (locale === "zh") return zh_basecamp_mods_sort_downloads(inputs)
	if (locale === "ja") return ja_basecamp_mods_sort_downloads(inputs)
	return en_basecamp_mods_sort_downloads(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Sort_TimesInputs */

const en_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Most downloaded`)
};

const es_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más descargados`)
};

const de_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Am häufigsten geladen`)
};

const fr_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les plus téléchargés`)
};

const it_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più scaricati`)
};

const nl_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meest gedownload`)
};

const pl_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najczęściej pobierane`)
};

const pt_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais baixados`)
};

const ru_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Чаще всего загружались`)
};

const sv_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mest nedladdade`)
};

const tr_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En çok indirilen`)
};

const zh_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载次数最多`)
};

const ja_me_sort_times = /** @type {(inputs: Me_Sort_TimesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ダウンロード回数順`)
};

/**
* | output |
* | --- |
* | "Most downloaded" |
*
* @param {Me_Sort_TimesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_sort_times = /** @type {((inputs?: Me_Sort_TimesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Sort_TimesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_sort_times(inputs)
	if (locale === "de") return de_me_sort_times(inputs)
	if (locale === "fr") return fr_me_sort_times(inputs)
	if (locale === "it") return it_me_sort_times(inputs)
	if (locale === "nl") return nl_me_sort_times(inputs)
	if (locale === "pl") return pl_me_sort_times(inputs)
	if (locale === "pt") return pt_me_sort_times(inputs)
	if (locale === "ru") return ru_me_sort_times(inputs)
	if (locale === "sv") return sv_me_sort_times(inputs)
	if (locale === "tr") return tr_me_sort_times(inputs)
	if (locale === "zh") return zh_me_sort_times(inputs)
	if (locale === "ja") return ja_me_sort_times(inputs)
	return en_me_sort_times(inputs)
});

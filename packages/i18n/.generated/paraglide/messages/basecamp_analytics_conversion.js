/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_ConversionInputs */

const en_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View → download`)
};

const es_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vista → descarga`)
};

const de_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aufruf → Download`)
};

const fr_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vue → téléchargement`)
};

const it_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualizzazione → download`)
};

const nl_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weergave → download`)
};

const pl_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyświetlenie → pobranie`)
};

const pt_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visualização → download`)
};

const ru_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Просмотр → загрузка`)
};

const sv_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visning → nedladdning`)
};

const tr_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görüntüleme → indirme`)
};

const zh_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览 → 下载`)
};

const ja_basecamp_analytics_conversion = /** @type {(inputs: Basecamp_Analytics_ConversionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`閲覧 → ダウンロード`)
};

/**
* | output |
* | --- |
* | "View → download" |
*
* @param {Basecamp_Analytics_ConversionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_conversion = /** @type {((inputs?: Basecamp_Analytics_ConversionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_ConversionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_conversion(inputs)
	if (locale === "de") return de_basecamp_analytics_conversion(inputs)
	if (locale === "fr") return fr_basecamp_analytics_conversion(inputs)
	if (locale === "it") return it_basecamp_analytics_conversion(inputs)
	if (locale === "nl") return nl_basecamp_analytics_conversion(inputs)
	if (locale === "pl") return pl_basecamp_analytics_conversion(inputs)
	if (locale === "pt") return pt_basecamp_analytics_conversion(inputs)
	if (locale === "ru") return ru_basecamp_analytics_conversion(inputs)
	if (locale === "sv") return sv_basecamp_analytics_conversion(inputs)
	if (locale === "tr") return tr_basecamp_analytics_conversion(inputs)
	if (locale === "zh") return zh_basecamp_analytics_conversion(inputs)
	if (locale === "ja") return ja_basecamp_analytics_conversion(inputs)
	return en_basecamp_analytics_conversion(inputs)
});

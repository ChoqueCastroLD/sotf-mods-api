/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Empty_TitleInputs */

const en_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No analytics yet`)
};

const es_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay analíticas`)
};

const de_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Statistiken`)
};

const fr_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore de statistiques`)
};

const it_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna statistica`)
};

const nl_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen statistieken`)
};

const pl_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie brak statystyk`)
};

const pt_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há estatísticas`)
};

const ru_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Статистики пока нет`)
};

const sv_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingen statistik än`)
};

const tr_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz istatistik yok`)
};

const zh_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无数据`)
};

const ja_basecamp_analytics_empty_title = /** @type {(inputs: Basecamp_Analytics_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ分析データがありません`)
};

/**
* | output |
* | --- |
* | "No analytics yet" |
*
* @param {Basecamp_Analytics_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_empty_title = /** @type {((inputs?: Basecamp_Analytics_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_empty_title(inputs)
	if (locale === "de") return de_basecamp_analytics_empty_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_empty_title(inputs)
	if (locale === "it") return it_basecamp_analytics_empty_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_empty_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_empty_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_empty_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_empty_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_empty_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_empty_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_empty_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_empty_title(inputs)
	return en_basecamp_analytics_empty_title(inputs)
});

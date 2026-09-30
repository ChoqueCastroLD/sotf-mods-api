/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_IntroInputs */

const en_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, views, sources and ratings of your mods, including the history since 2023.`)
};

const es_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descargas, vistas, fuentes y valoraciones de tus mods, con el histórico desde 2023.`)
};

const de_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, Aufrufe, Quellen und Bewertungen deiner Mods, samt Verlauf seit 2023.`)
};

const fr_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargements, vues, sources et notes de tes mods, historique depuis 2023 compris.`)
};

const it_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download, visualizzazioni, provenienze e valutazioni delle tue mod, con lo storico dal 2023.`)
};

const nl_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, weergaven, bronnen en beoordelingen van je mods, inclusief de geschiedenis sinds 2023.`)
};

const pl_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pobrania, wyświetlenia, źródła i oceny twoich modów, z historią od 2023 roku.`)
};

const pt_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Downloads, visualizações, origens e avaliações dos seus mods, com o histórico desde 2023.`)
};

const ru_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Загрузки, просмотры, источники и оценки ваших модов, включая историю с 2023 года.`)
};

const sv_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nedladdningar, visningar, källor och betyg för dina moddar, med historiken sedan 2023.`)
};

const tr_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarının indirmeleri, görüntülenmeleri, kaynakları ve puanları; 2023'ten beri geçmişiyle.`)
};

const zh_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组的下载、浏览、来源和评分，包含 2023 年以来的历史数据。`)
};

const ja_basecamp_analytics_intro = /** @type {(inputs: Basecamp_Analytics_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD のダウンロード、閲覧、流入元、評価。2023 年からの履歴を含みます。`)
};

/**
* | output |
* | --- |
* | "Downloads, views, sources and ratings of your mods, including the history since 2023." |
*
* @param {Basecamp_Analytics_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_intro = /** @type {((inputs?: Basecamp_Analytics_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_intro(inputs)
	if (locale === "de") return de_basecamp_analytics_intro(inputs)
	if (locale === "fr") return fr_basecamp_analytics_intro(inputs)
	if (locale === "it") return it_basecamp_analytics_intro(inputs)
	if (locale === "nl") return nl_basecamp_analytics_intro(inputs)
	if (locale === "pl") return pl_basecamp_analytics_intro(inputs)
	if (locale === "pt") return pt_basecamp_analytics_intro(inputs)
	if (locale === "ru") return ru_basecamp_analytics_intro(inputs)
	if (locale === "sv") return sv_basecamp_analytics_intro(inputs)
	if (locale === "tr") return tr_basecamp_analytics_intro(inputs)
	if (locale === "zh") return zh_basecamp_analytics_intro(inputs)
	if (locale === "ja") return ja_basecamp_analytics_intro(inputs)
	return en_basecamp_analytics_intro(inputs)
});

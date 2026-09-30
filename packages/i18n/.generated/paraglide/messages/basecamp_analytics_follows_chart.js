/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Follows_ChartInputs */

const en_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New followers`)
};

const es_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevos seguidores`)
};

const de_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Follower`)
};

const fr_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux abonnés`)
};

const it_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovi follower`)
};

const nl_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe volgers`)
};

const pl_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowi obserwujący`)
};

const pt_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novos seguidores`)
};

const ru_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые подписчики`)
};

const sv_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya följare`)
};

const tr_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni takipçiler`)
};

const zh_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新关注者`)
};

const ja_basecamp_analytics_follows_chart = /** @type {(inputs: Basecamp_Analytics_Follows_ChartInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいフォロワー`)
};

/**
* | output |
* | --- |
* | "New followers" |
*
* @param {Basecamp_Analytics_Follows_ChartInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_follows_chart = /** @type {((inputs?: Basecamp_Analytics_Follows_ChartInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Follows_ChartInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_follows_chart(inputs)
	if (locale === "de") return de_basecamp_analytics_follows_chart(inputs)
	if (locale === "fr") return fr_basecamp_analytics_follows_chart(inputs)
	if (locale === "it") return it_basecamp_analytics_follows_chart(inputs)
	if (locale === "nl") return nl_basecamp_analytics_follows_chart(inputs)
	if (locale === "pl") return pl_basecamp_analytics_follows_chart(inputs)
	if (locale === "pt") return pt_basecamp_analytics_follows_chart(inputs)
	if (locale === "ru") return ru_basecamp_analytics_follows_chart(inputs)
	if (locale === "sv") return sv_basecamp_analytics_follows_chart(inputs)
	if (locale === "tr") return tr_basecamp_analytics_follows_chart(inputs)
	if (locale === "zh") return zh_basecamp_analytics_follows_chart(inputs)
	if (locale === "ja") return ja_basecamp_analytics_follows_chart(inputs)
	return en_basecamp_analytics_follows_chart(inputs)
});

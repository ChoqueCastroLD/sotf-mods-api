/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Analytics_Follows_TitleInputs */

const en_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Followers gained`)
};

const es_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores ganados`)
};

const de_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gewonnene Follower`)
};

const fr_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonnés gagnés`)
};

const it_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follower guadagnati`)
};

const nl_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gewonnen volgers`)
};

const pl_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zdobyci obserwujący`)
};

const pt_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguidores ganhos`)
};

const ru_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые подписчики`)
};

const sv_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vunna följare`)
};

const tr_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kazanılan takipçiler`)
};

const zh_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新增关注者`)
};

const ja_basecamp_analytics_follows_title = /** @type {(inputs: Basecamp_Analytics_Follows_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`獲得したフォロワー`)
};

/**
* | output |
* | --- |
* | "Followers gained" |
*
* @param {Basecamp_Analytics_Follows_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_analytics_follows_title = /** @type {((inputs?: Basecamp_Analytics_Follows_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Analytics_Follows_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_analytics_follows_title(inputs)
	if (locale === "de") return de_basecamp_analytics_follows_title(inputs)
	if (locale === "fr") return fr_basecamp_analytics_follows_title(inputs)
	if (locale === "it") return it_basecamp_analytics_follows_title(inputs)
	if (locale === "nl") return nl_basecamp_analytics_follows_title(inputs)
	if (locale === "pl") return pl_basecamp_analytics_follows_title(inputs)
	if (locale === "pt") return pt_basecamp_analytics_follows_title(inputs)
	if (locale === "ru") return ru_basecamp_analytics_follows_title(inputs)
	if (locale === "sv") return sv_basecamp_analytics_follows_title(inputs)
	if (locale === "tr") return tr_basecamp_analytics_follows_title(inputs)
	if (locale === "zh") return zh_basecamp_analytics_follows_title(inputs)
	if (locale === "ja") return ja_basecamp_analytics_follows_title(inputs)
	return en_basecamp_analytics_follows_title(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_News_FeedInputs */

const en_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subscribe via RSS`)
};

const es_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suscribirse por RSS`)
};

const de_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Per RSS abonnieren`)
};

const fr_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S’abonner par RSS`)
};

const it_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscriviti via RSS`)
};

const nl_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abonneren via RSS`)
};

const pl_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subskrybuj przez RSS`)
};

const pt_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Assinar via RSS`)
};

const ru_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписаться через RSS`)
};

const sv_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prenumerera via RSS`)
};

const tr_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RSS ile abone ol`)
};

const zh_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通过 RSS 订阅`)
};

const ja_content_news_feed = /** @type {(inputs: Content_News_FeedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`RSS で購読`)
};

/**
* | output |
* | --- |
* | "Subscribe via RSS" |
*
* @param {Content_News_FeedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_news_feed = /** @type {((inputs?: Content_News_FeedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_News_FeedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_news_feed(inputs)
	if (locale === "de") return de_content_news_feed(inputs)
	if (locale === "fr") return fr_content_news_feed(inputs)
	if (locale === "it") return it_content_news_feed(inputs)
	if (locale === "nl") return nl_content_news_feed(inputs)
	if (locale === "pl") return pl_content_news_feed(inputs)
	if (locale === "pt") return pt_content_news_feed(inputs)
	if (locale === "ru") return ru_content_news_feed(inputs)
	if (locale === "sv") return sv_content_news_feed(inputs)
	if (locale === "tr") return tr_content_news_feed(inputs)
	if (locale === "zh") return zh_content_news_feed(inputs)
	if (locale === "ja") return ja_content_news_feed(inputs)
	return en_content_news_feed(inputs)
});

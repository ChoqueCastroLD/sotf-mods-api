/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Creator_Trend_SameInputs */

const en_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Same as the week before`)
};

const es_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Igual que la semana anterior`)
};

const de_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Genauso viele wie in der Vorwoche`)
};

const fr_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Autant que la semaine précédente`)
};

const it_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come la settimana precedente`)
};

const nl_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Evenveel als de week ervoor`)
};

const pl_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tyle samo co tydzień wcześniej`)
};

const pt_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Igual à semana anterior`)
};

const ru_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Столько же, сколько неделей ранее`)
};

const sv_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lika många som veckan innan`)
};

const tr_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Önceki haftayla aynı`)
};

const zh_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`与前一周持平`)
};

const ja_emails_notify_creator_trend_same = /** @type {(inputs: Emails_Notify_Creator_Trend_SameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`前週と同じ`)
};

/**
* | output |
* | --- |
* | "Same as the week before" |
*
* @param {Emails_Notify_Creator_Trend_SameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_trend_same = /** @type {((inputs?: Emails_Notify_Creator_Trend_SameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Trend_SameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_trend_same(inputs)
	if (locale === "de") return de_emails_notify_creator_trend_same(inputs)
	if (locale === "fr") return fr_emails_notify_creator_trend_same(inputs)
	if (locale === "it") return it_emails_notify_creator_trend_same(inputs)
	if (locale === "nl") return nl_emails_notify_creator_trend_same(inputs)
	if (locale === "pl") return pl_emails_notify_creator_trend_same(inputs)
	if (locale === "pt") return pt_emails_notify_creator_trend_same(inputs)
	if (locale === "ru") return ru_emails_notify_creator_trend_same(inputs)
	if (locale === "sv") return sv_emails_notify_creator_trend_same(inputs)
	if (locale === "tr") return tr_emails_notify_creator_trend_same(inputs)
	if (locale === "zh") return zh_emails_notify_creator_trend_same(inputs)
	if (locale === "ja") return ja_emails_notify_creator_trend_same(inputs)
	return en_emails_notify_creator_trend_same(inputs)
});

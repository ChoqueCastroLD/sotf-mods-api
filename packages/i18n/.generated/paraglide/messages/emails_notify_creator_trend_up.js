/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ percent: NonNullable<unknown> }} Emails_Notify_Creator_Trend_UpInputs */

const en_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Up ${i?.percent} from the week before`)
};

const es_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un ${i?.percent} más que la semana anterior`)
};

const de_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} mehr als in der Vorwoche`)
};

const fr_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} de plus que la semaine précédente`)
};

const it_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} in più rispetto alla settimana precedente`)
};

const nl_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} meer dan de week ervoor`)
};

const pl_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O ${i?.percent} więcej niż tydzień wcześniej`)
};

const pt_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} a mais que na semana anterior`)
};

const ru_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`На ${i?.percent} больше, чем неделей ранее`)
};

const sv_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} fler än veckan innan`)
};

const tr_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Önceki haftaya göre ${i?.percent} artış`)
};

const zh_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`比前一周增长 ${i?.percent}`)
};

const ja_emails_notify_creator_trend_up = /** @type {(inputs: Emails_Notify_Creator_Trend_UpInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`前週より ${i?.percent} 増加`)
};

/**
* | output |
* | --- |
* | "Up {percent} from the week before" |
*
* @param {Emails_Notify_Creator_Trend_UpInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_trend_up = /** @type {((inputs: Emails_Notify_Creator_Trend_UpInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Trend_UpInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_trend_up(inputs)
	if (locale === "de") return de_emails_notify_creator_trend_up(inputs)
	if (locale === "fr") return fr_emails_notify_creator_trend_up(inputs)
	if (locale === "it") return it_emails_notify_creator_trend_up(inputs)
	if (locale === "nl") return nl_emails_notify_creator_trend_up(inputs)
	if (locale === "pl") return pl_emails_notify_creator_trend_up(inputs)
	if (locale === "pt") return pt_emails_notify_creator_trend_up(inputs)
	if (locale === "ru") return ru_emails_notify_creator_trend_up(inputs)
	if (locale === "sv") return sv_emails_notify_creator_trend_up(inputs)
	if (locale === "tr") return tr_emails_notify_creator_trend_up(inputs)
	if (locale === "zh") return zh_emails_notify_creator_trend_up(inputs)
	if (locale === "ja") return ja_emails_notify_creator_trend_up(inputs)
	return en_emails_notify_creator_trend_up(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ percent: NonNullable<unknown> }} Emails_Notify_Creator_Trend_DownInputs */

const en_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Down ${i?.percent} from the week before`)
};

const es_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un ${i?.percent} menos que la semana anterior`)
};

const de_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} weniger als in der Vorwoche`)
};

const fr_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} de moins que la semaine précédente`)
};

const it_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} in meno rispetto alla settimana precedente`)
};

const nl_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} minder dan de week ervoor`)
};

const pl_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`O ${i?.percent} mniej niż tydzień wcześniej`)
};

const pt_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} a menos que na semana anterior`)
};

const ru_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`На ${i?.percent} меньше, чем неделей ранее`)
};

const sv_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.percent} färre än veckan innan`)
};

const tr_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Önceki haftaya göre ${i?.percent} düşüş`)
};

const zh_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`比前一周下降 ${i?.percent}`)
};

const ja_emails_notify_creator_trend_down = /** @type {(inputs: Emails_Notify_Creator_Trend_DownInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`前週より ${i?.percent} 減少`)
};

/**
* | output |
* | --- |
* | "Down {percent} from the week before" |
*
* @param {Emails_Notify_Creator_Trend_DownInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_trend_down = /** @type {((inputs: Emails_Notify_Creator_Trend_DownInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_Trend_DownInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_trend_down(inputs)
	if (locale === "de") return de_emails_notify_creator_trend_down(inputs)
	if (locale === "fr") return fr_emails_notify_creator_trend_down(inputs)
	if (locale === "it") return it_emails_notify_creator_trend_down(inputs)
	if (locale === "nl") return nl_emails_notify_creator_trend_down(inputs)
	if (locale === "pl") return pl_emails_notify_creator_trend_down(inputs)
	if (locale === "pt") return pt_emails_notify_creator_trend_down(inputs)
	if (locale === "ru") return ru_emails_notify_creator_trend_down(inputs)
	if (locale === "sv") return sv_emails_notify_creator_trend_down(inputs)
	if (locale === "tr") return tr_emails_notify_creator_trend_down(inputs)
	if (locale === "zh") return zh_emails_notify_creator_trend_down(inputs)
	if (locale === "ja") return ja_emails_notify_creator_trend_down(inputs)
	return en_emails_notify_creator_trend_down(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_SentInputs */

const en_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks. The moderators will review it.`)
};

const es_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracias. Los moderadores lo revisarán.`)
};

const de_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke. Die Moderatoren sehen es sich an.`)
};

const fr_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci. Les modérateurs vont l’examiner.`)
};

const it_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie. I moderatori lo esamineranno.`)
};

const nl_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt. De moderators kijken ernaar.`)
};

const pl_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzięki. Moderatorzy to sprawdzą.`)
};

const pt_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrigado. Os moderadores vão analisar.`)
};

const ru_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо. Модераторы проверят.`)
};

const sv_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack. Moderatorerna tittar på det.`)
};

const tr_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler. Moderatörler inceleyecek.`)
};

const zh_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`谢谢，版主会查看。`)
};

const ja_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとうございます。モデレーターが確認します。`)
};

/**
* | output |
* | --- |
* | "Thanks. The moderators will review it." |
*
* @param {Social_Report_SentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_report_sent = /** @type {((inputs?: Social_Report_SentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Report_SentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_report_sent(inputs)
	if (locale === "de") return de_social_report_sent(inputs)
	if (locale === "fr") return fr_social_report_sent(inputs)
	if (locale === "it") return it_social_report_sent(inputs)
	if (locale === "nl") return nl_social_report_sent(inputs)
	if (locale === "pl") return pl_social_report_sent(inputs)
	if (locale === "pt") return pt_social_report_sent(inputs)
	if (locale === "ru") return ru_social_report_sent(inputs)
	if (locale === "sv") return sv_social_report_sent(inputs)
	if (locale === "tr") return tr_social_report_sent(inputs)
	if (locale === "zh") return zh_social_report_sent(inputs)
	if (locale === "ja") return ja_social_report_sent(inputs)
	return en_social_report_sent(inputs)
});

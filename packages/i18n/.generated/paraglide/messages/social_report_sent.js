/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Report_SentInputs */

const en_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks. The rangers will take a look.`)
};

const es_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracias. Los rangers lo revisarán.`)
};

const de_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke. Die Ranger sehen es sich an.`)
};

const fr_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci. Les rangers vont regarder.`)
};

const it_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie. I ranger daranno un’occhiata.`)
};

const nl_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt. De rangers kijken ernaar.`)
};

const pl_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzięki. Rangerzy to sprawdzą.`)
};

const pt_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valeu. Os rangers vão dar uma olhada.`)
};

const ru_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо. Рейнджеры посмотрят.`)
};

const sv_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack. En ranger tittar på det.`)
};

const tr_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler. Korucular inceleyecek.`)
};

const zh_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`谢谢，护林员会查看。`)
};

const ja_social_report_sent = /** @type {(inputs: Social_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとうございます。レンジャーが確認します。`)
};

/**
* | output |
* | --- |
* | "Thanks. The rangers will take a look." |
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

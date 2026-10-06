/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_SentInputs */

const en_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks. The moderators will review it.`)
};

const es_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracias. Los moderadores lo revisarán.`)
};

const de_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke. Die Moderatoren sehen es sich an.`)
};

const fr_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci. Les modérateurs vont l’examiner.`)
};

const it_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie. I moderatori lo esamineranno.`)
};

const nl_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt. De moderators bekijken het.`)
};

const pl_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzięki. Moderatorzy to sprawdzą.`)
};

const pt_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obrigado. Os moderadores vão analisar.`)
};

const ru_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо. Модераторы проверят.`)
};

const sv_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack. Moderatorerna tittar på det.`)
};

const tr_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler. Moderatörler inceleyecek.`)
};

const zh_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`谢谢，版主会查看。`)
};

const ja_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとうございます。モデレーターが確認します。`)
};

/**
* | output |
* | --- |
* | "Thanks. The moderators will review it." |
*
* @param {Mod_Report_SentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_sent = /** @type {((inputs?: Mod_Report_SentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_SentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_sent(inputs)
	if (locale === "de") return de_mod_report_sent(inputs)
	if (locale === "fr") return fr_mod_report_sent(inputs)
	if (locale === "it") return it_mod_report_sent(inputs)
	if (locale === "nl") return nl_mod_report_sent(inputs)
	if (locale === "pl") return pl_mod_report_sent(inputs)
	if (locale === "pt") return pt_mod_report_sent(inputs)
	if (locale === "ru") return ru_mod_report_sent(inputs)
	if (locale === "sv") return sv_mod_report_sent(inputs)
	if (locale === "tr") return tr_mod_report_sent(inputs)
	if (locale === "zh") return zh_mod_report_sent(inputs)
	if (locale === "ja") return ja_mod_report_sent(inputs)
	return en_mod_report_sent(inputs)
});

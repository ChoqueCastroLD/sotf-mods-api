/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_SentInputs */

const en_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Thanks. The rangers will take a look.`)
};

const es_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracias. Los rangers lo revisarán.`)
};

const de_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Danke. Die Ranger sehen es sich an.`)
};

const fr_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Merci. Les rangers vont regarder.`)
};

const it_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grazie. I ranger daranno un’occhiata.`)
};

const nl_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bedankt. De rangers kijken ernaar.`)
};

const pl_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dzięki. Rangerzy to sprawdzą.`)
};

const pt_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Valeu. Os rangers vão dar uma olhada.`)
};

const ru_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Спасибо. Рейнджеры посмотрят.`)
};

const sv_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tack. En ranger tittar på det.`)
};

const tr_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teşekkürler. Korucular inceleyecek.`)
};

const zh_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`谢谢，护林员会查看。`)
};

const ja_mod_report_sent = /** @type {(inputs: Mod_Report_SentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ありがとうございます。レンジャーが確認します。`)
};

/**
* | output |
* | --- |
* | "Thanks. The rangers will take a look." |
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

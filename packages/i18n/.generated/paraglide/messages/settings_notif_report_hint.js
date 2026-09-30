/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Notif_Report_HintInputs */

const en_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The Rangers reviewed something you reported.`)
};

const es_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los guardabosques han revisado algo que reportaste.`)
};

const de_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ranger haben etwas geprüft, das du gemeldet hast.`)
};

const fr_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les rangers ont examiné quelque chose que vous avez signalé.`)
};

const it_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I ranger hanno esaminato qualcosa che hai segnalato.`)
};

const nl_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De rangers hebben iets bekeken dat jij hebt gemeld.`)
};

const pl_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strażnicy rozpatrzyli coś, co zgłosiłeś.`)
};

const pt_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os guardas analisaram algo que você denunciou.`)
};

const ru_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджеры рассмотрели вашу жалобу.`)
};

const sv_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rangers har granskat något du anmälde.`)
};

const tr_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucular bildirdiğin bir şeyi inceledi.`)
};

const zh_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员处理了你举报的内容。`)
};

const ja_settings_notif_report_hint = /** @type {(inputs: Settings_Notif_Report_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャーがあなたの通報を確認しました。`)
};

/**
* | output |
* | --- |
* | "The Rangers reviewed something you reported." |
*
* @param {Settings_Notif_Report_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_notif_report_hint = /** @type {((inputs?: Settings_Notif_Report_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Notif_Report_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_notif_report_hint(inputs)
	if (locale === "de") return de_settings_notif_report_hint(inputs)
	if (locale === "fr") return fr_settings_notif_report_hint(inputs)
	if (locale === "it") return it_settings_notif_report_hint(inputs)
	if (locale === "nl") return nl_settings_notif_report_hint(inputs)
	if (locale === "pl") return pl_settings_notif_report_hint(inputs)
	if (locale === "pt") return pt_settings_notif_report_hint(inputs)
	if (locale === "ru") return ru_settings_notif_report_hint(inputs)
	if (locale === "sv") return sv_settings_notif_report_hint(inputs)
	if (locale === "tr") return tr_settings_notif_report_hint(inputs)
	if (locale === "zh") return zh_settings_notif_report_hint(inputs)
	if (locale === "ja") return ja_settings_notif_report_hint(inputs)
	return en_settings_notif_report_hint(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Weekly_ReportInputs */

const en_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your weekly creator report is ready`)
};

const es_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu informe semanal de creador está listo`)
};

const de_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein wöchentlicher Creator-Bericht ist fertig`)
};

const fr_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre rapport hebdomadaire de créateur est prêt`)
};

const it_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo report settimanale da creatore è pronto`)
};

const nl_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je wekelijkse makersrapport staat klaar`)
};

const pl_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój tygodniowy raport twórcy jest gotowy`)
};

const pt_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu relatório semanal de criador está pronto`)
};

const ru_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш еженедельный отчёт автора готов`)
};

const sv_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din veckorapport som skapare är klar`)
};

const tr_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haftalık yapımcı raporun hazır`)
};

const zh_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的创作者周报已生成`)
};

const ja_signals_weekly_report = /** @type {(inputs: Signals_Weekly_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイター週次レポートができました`)
};

/**
* | output |
* | --- |
* | "Your weekly creator report is ready" |
*
* @param {Signals_Weekly_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_weekly_report = /** @type {((inputs?: Signals_Weekly_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Weekly_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_weekly_report(inputs)
	if (locale === "de") return de_signals_weekly_report(inputs)
	if (locale === "fr") return fr_signals_weekly_report(inputs)
	if (locale === "it") return it_signals_weekly_report(inputs)
	if (locale === "nl") return nl_signals_weekly_report(inputs)
	if (locale === "pl") return pl_signals_weekly_report(inputs)
	if (locale === "pt") return pt_signals_weekly_report(inputs)
	if (locale === "ru") return ru_signals_weekly_report(inputs)
	if (locale === "sv") return sv_signals_weekly_report(inputs)
	if (locale === "tr") return tr_signals_weekly_report(inputs)
	if (locale === "zh") return zh_signals_weekly_report(inputs)
	if (locale === "ja") return ja_signals_weekly_report(inputs)
	return en_signals_weekly_report(inputs)
});

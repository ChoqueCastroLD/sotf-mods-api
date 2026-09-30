/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Report_DismissedInputs */

const en_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your report was reviewed — no action was needed`)
};

const es_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hemos revisado tu reporte: no hacía falta actuar`)
};

const de_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Meldung wurde geprüft – es war nichts zu tun`)
};

const fr_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre signalement a été examiné — aucune action n’était nécessaire`)
};

const it_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua segnalazione è stata esaminata: non serviva intervenire`)
};

const nl_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je melding is bekeken — er was geen actie nodig`)
};

const pl_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje zgłoszenie zostało rozpatrzone — działania nie były potrzebne`)
};

const pt_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua denúncia foi analisada — não foi preciso agir`)
};

const ru_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша жалоба рассмотрена — действий не потребовалось`)
};

const sv_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din anmälan har granskats — ingen åtgärd behövdes`)
};

const tr_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimin incelendi — işlem gerekmedi`)
};

const zh_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的举报已处理——无需采取措施`)
};

const ja_signals_report_dismissed = /** @type {(inputs: Signals_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの通報は確認されました。対応の必要はありませんでした`)
};

/**
* | output |
* | --- |
* | "Your report was reviewed — no action was needed" |
*
* @param {Signals_Report_DismissedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_report_dismissed = /** @type {((inputs?: Signals_Report_DismissedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Report_DismissedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_report_dismissed(inputs)
	if (locale === "de") return de_signals_report_dismissed(inputs)
	if (locale === "fr") return fr_signals_report_dismissed(inputs)
	if (locale === "it") return it_signals_report_dismissed(inputs)
	if (locale === "nl") return nl_signals_report_dismissed(inputs)
	if (locale === "pl") return pl_signals_report_dismissed(inputs)
	if (locale === "pt") return pt_signals_report_dismissed(inputs)
	if (locale === "ru") return ru_signals_report_dismissed(inputs)
	if (locale === "sv") return sv_signals_report_dismissed(inputs)
	if (locale === "tr") return tr_signals_report_dismissed(inputs)
	if (locale === "zh") return zh_signals_report_dismissed(inputs)
	if (locale === "ja") return ja_signals_report_dismissed(inputs)
	return en_signals_report_dismissed(inputs)
});

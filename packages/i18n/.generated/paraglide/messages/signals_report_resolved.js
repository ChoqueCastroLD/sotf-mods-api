/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Report_ResolvedInputs */

const en_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your report was reviewed and action was taken`)
};

const es_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hemos revisado tu reporte y hemos tomado medidas`)
};

const de_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Meldung wurde geprüft und es wurden Maßnahmen ergriffen`)
};

const fr_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre signalement a été examiné et des mesures ont été prises`)
};

const it_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua segnalazione è stata esaminata e sono stati presi provvedimenti`)
};

const nl_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je melding is bekeken en er is actie ondernomen`)
};

const pl_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje zgłoszenie zostało rozpatrzone i podjęto działania`)
};

const pt_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua denúncia foi analisada e medidas foram tomadas`)
};

const ru_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша жалоба рассмотрена, меры приняты`)
};

const sv_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din anmälan har granskats och åtgärder har vidtagits`)
};

const tr_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bildirimin incelendi ve işlem yapıldı`)
};

const zh_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的举报已处理，并已采取措施`)
};

const ja_signals_report_resolved = /** @type {(inputs: Signals_Report_ResolvedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの通報は確認され、対応が行われました`)
};

/**
* | output |
* | --- |
* | "Your report was reviewed and action was taken" |
*
* @param {Signals_Report_ResolvedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_report_resolved = /** @type {((inputs?: Signals_Report_ResolvedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Report_ResolvedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_report_resolved(inputs)
	if (locale === "de") return de_signals_report_resolved(inputs)
	if (locale === "fr") return fr_signals_report_resolved(inputs)
	if (locale === "it") return it_signals_report_resolved(inputs)
	if (locale === "nl") return nl_signals_report_resolved(inputs)
	if (locale === "pl") return pl_signals_report_resolved(inputs)
	if (locale === "pt") return pt_signals_report_resolved(inputs)
	if (locale === "ru") return ru_signals_report_resolved(inputs)
	if (locale === "sv") return sv_signals_report_resolved(inputs)
	if (locale === "tr") return tr_signals_report_resolved(inputs)
	if (locale === "zh") return zh_signals_report_resolved(inputs)
	if (locale === "ja") return ja_signals_report_resolved(inputs)
	return en_signals_report_resolved(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_DismissedInputs */

const en_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report dismissed.`)
};

const es_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte descartado.`)
};

const de_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldung verworfen.`)
};

const fr_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalement rejeté.`)
};

const it_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazione archiviata.`)
};

const nl_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melding afgewezen.`)
};

const pl_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie odrzucone.`)
};

const pt_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denúncia descartada.`)
};

const ru_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жалоба отклонена.`)
};

const sv_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälan avfärdad.`)
};

const tr_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyet reddedildi.`)
};

const zh_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报已驳回。`)
};

const ja_ranger_report_dismissed = /** @type {(inputs: Ranger_Report_DismissedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告を却下しました。`)
};

/**
* | output |
* | --- |
* | "Report dismissed." |
*
* @param {Ranger_Report_DismissedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_dismissed = /** @type {((inputs?: Ranger_Report_DismissedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_DismissedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_dismissed(inputs)
	if (locale === "de") return de_ranger_report_dismissed(inputs)
	if (locale === "fr") return fr_ranger_report_dismissed(inputs)
	if (locale === "it") return it_ranger_report_dismissed(inputs)
	if (locale === "nl") return nl_ranger_report_dismissed(inputs)
	if (locale === "pl") return pl_ranger_report_dismissed(inputs)
	if (locale === "pt") return pt_ranger_report_dismissed(inputs)
	if (locale === "ru") return ru_ranger_report_dismissed(inputs)
	if (locale === "sv") return sv_ranger_report_dismissed(inputs)
	if (locale === "tr") return tr_ranger_report_dismissed(inputs)
	if (locale === "zh") return zh_ranger_report_dismissed(inputs)
	if (locale === "ja") return ja_ranger_report_dismissed(inputs)
	return en_ranger_report_dismissed(inputs)
});

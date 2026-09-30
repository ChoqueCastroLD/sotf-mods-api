/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Dismiss_TitleInputs */

const en_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dismiss the report`)
};

const es_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar el reporte`)
};

const de_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldung verwerfen`)
};

const fr_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejeter le signalement`)
};

const it_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Archivia la segnalazione`)
};

const nl_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De melding afwijzen`)
};

const pl_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć zgłoszenie`)
};

const pt_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descartar a denúncia`)
};

const ru_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонить жалобу`)
};

const sv_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avfärda anmälan`)
};

const tr_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyeti reddet`)
};

const zh_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`驳回举报`)
};

const ja_ranger_report_dismiss_title = /** @type {(inputs: Ranger_Report_Dismiss_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`報告を却下`)
};

/**
* | output |
* | --- |
* | "Dismiss the report" |
*
* @param {Ranger_Report_Dismiss_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_dismiss_title = /** @type {((inputs?: Ranger_Report_Dismiss_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Dismiss_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_dismiss_title(inputs)
	if (locale === "de") return de_ranger_report_dismiss_title(inputs)
	if (locale === "fr") return fr_ranger_report_dismiss_title(inputs)
	if (locale === "it") return it_ranger_report_dismiss_title(inputs)
	if (locale === "nl") return nl_ranger_report_dismiss_title(inputs)
	if (locale === "pl") return pl_ranger_report_dismiss_title(inputs)
	if (locale === "pt") return pt_ranger_report_dismiss_title(inputs)
	if (locale === "ru") return ru_ranger_report_dismiss_title(inputs)
	if (locale === "sv") return sv_ranger_report_dismiss_title(inputs)
	if (locale === "tr") return tr_ranger_report_dismiss_title(inputs)
	if (locale === "zh") return zh_ranger_report_dismiss_title(inputs)
	if (locale === "ja") return ja_ranger_report_dismiss_title(inputs)
	return en_ranger_report_dismiss_title(inputs)
});

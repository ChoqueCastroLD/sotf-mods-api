/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_ReportsInputs */

const en_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reports`)
};

const es_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reportes`)
};

const de_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldungen`)
};

const fr_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalements`)
};

const it_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazioni`)
};

const nl_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meldingen van inhoud`)
};

const pl_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenia`)
};

const pt_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denúncias`)
};

const ru_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Жалобы`)
};

const sv_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmälningar`)
};

const tr_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyetler`)
};

const zh_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报`)
};

const ja_console_nav_reports = /** @type {(inputs: Console_Nav_ReportsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通報`)
};

/**
* | output |
* | --- |
* | "Reports" |
*
* @param {Console_Nav_ReportsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_reports = /** @type {((inputs?: Console_Nav_ReportsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_ReportsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_reports(inputs)
	if (locale === "de") return de_console_nav_reports(inputs)
	if (locale === "fr") return fr_console_nav_reports(inputs)
	if (locale === "it") return it_console_nav_reports(inputs)
	if (locale === "nl") return nl_console_nav_reports(inputs)
	if (locale === "pl") return pl_console_nav_reports(inputs)
	if (locale === "pt") return pt_console_nav_reports(inputs)
	if (locale === "ru") return ru_console_nav_reports(inputs)
	if (locale === "sv") return sv_console_nav_reports(inputs)
	if (locale === "tr") return tr_console_nav_reports(inputs)
	if (locale === "zh") return zh_console_nav_reports(inputs)
	if (locale === "ja") return ja_console_nav_reports(inputs)
	return en_console_nav_reports(inputs)
});

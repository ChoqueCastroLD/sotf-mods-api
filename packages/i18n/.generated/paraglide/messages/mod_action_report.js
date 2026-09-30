/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Action_ReportInputs */

const en_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Report`)
};

const es_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar`)
};

const de_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Melden`)
};

const fr_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaler`)
};

const it_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnala`)
};

const nl_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapporteren`)
};

const pl_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Denunciar`)
};

const ru_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пожаловаться`)
};

const sv_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anmäl`)
};

const tr_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şikâyet et`)
};

const zh_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`举报`)
};

const ja_mod_action_report = /** @type {(inputs: Mod_Action_ReportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`通報`)
};

/**
* | output |
* | --- |
* | "Report" |
*
* @param {Mod_Action_ReportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_action_report = /** @type {((inputs?: Mod_Action_ReportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Action_ReportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_action_report(inputs)
	if (locale === "de") return de_mod_action_report(inputs)
	if (locale === "fr") return fr_mod_action_report(inputs)
	if (locale === "it") return it_mod_action_report(inputs)
	if (locale === "nl") return nl_mod_action_report(inputs)
	if (locale === "pl") return pl_mod_action_report(inputs)
	if (locale === "pt") return pt_mod_action_report(inputs)
	if (locale === "ru") return ru_mod_action_report(inputs)
	if (locale === "sv") return sv_mod_action_report(inputs)
	if (locale === "tr") return tr_mod_action_report(inputs)
	if (locale === "zh") return zh_mod_action_report(inputs)
	if (locale === "ja") return ja_mod_action_report(inputs)
	return en_mod_action_report(inputs)
});

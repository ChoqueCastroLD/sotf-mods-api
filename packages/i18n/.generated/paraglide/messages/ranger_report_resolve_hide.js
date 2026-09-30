/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_Resolve_HideInputs */

const en_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolve and hide`)
};

const es_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolver y ocultar`)
};

const de_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erledigen und ausblenden`)
};

const fr_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résoudre et masquer`)
};

const it_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolvi e nascondi`)
};

const nl_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhandelen en verbergen`)
};

const pl_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozwiąż i ukryj`)
};

const pt_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolver e ocultar`)
};

const ru_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решить и скрыть`)
};

const sv_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lös och dölj`)
};

const tr_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çöz ve gizle`)
};

const zh_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解决并隐藏`)
};

const ja_ranger_report_resolve_hide = /** @type {(inputs: Ranger_Report_Resolve_HideInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決して非表示`)
};

/**
* | output |
* | --- |
* | "Resolve and hide" |
*
* @param {Ranger_Report_Resolve_HideInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_resolve_hide = /** @type {((inputs?: Ranger_Report_Resolve_HideInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_Resolve_HideInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_resolve_hide(inputs)
	if (locale === "de") return de_ranger_report_resolve_hide(inputs)
	if (locale === "fr") return fr_ranger_report_resolve_hide(inputs)
	if (locale === "it") return it_ranger_report_resolve_hide(inputs)
	if (locale === "nl") return nl_ranger_report_resolve_hide(inputs)
	if (locale === "pl") return pl_ranger_report_resolve_hide(inputs)
	if (locale === "pt") return pt_ranger_report_resolve_hide(inputs)
	if (locale === "ru") return ru_ranger_report_resolve_hide(inputs)
	if (locale === "sv") return sv_ranger_report_resolve_hide(inputs)
	if (locale === "tr") return tr_ranger_report_resolve_hide(inputs)
	if (locale === "zh") return zh_ranger_report_resolve_hide(inputs)
	if (locale === "ja") return ja_ranger_report_resolve_hide(inputs)
	return en_ranger_report_resolve_hide(inputs)
});

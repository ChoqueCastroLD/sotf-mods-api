/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_Reason_BrokenInputs */

const en_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Broken or fake download`)
};

const es_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descarga rota o falsa`)
};

const de_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defekter oder gefälschter Download`)
};

const fr_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Téléchargement cassé ou faux`)
};

const it_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download rotto o falso`)
};

const nl_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapotte of nep-download`)
};

const pl_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uszkodzony lub fałszywy plik`)
};

const pt_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Download quebrado ou falso`)
};

const ru_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сломанная или фальшивая загрузка`)
};

const sv_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trasig eller falsk nedladdning`)
};

const tr_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozuk veya sahte indirme`)
};

const zh_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下载损坏或虚假`)
};

const ja_mod_report_reason_broken = /** @type {(inputs: Mod_Report_Reason_BrokenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`壊れた、または偽のダウンロード`)
};

/**
* | output |
* | --- |
* | "Broken or fake download" |
*
* @param {Mod_Report_Reason_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_reason_broken = /** @type {((inputs?: Mod_Report_Reason_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_Reason_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_reason_broken(inputs)
	if (locale === "de") return de_mod_report_reason_broken(inputs)
	if (locale === "fr") return fr_mod_report_reason_broken(inputs)
	if (locale === "it") return it_mod_report_reason_broken(inputs)
	if (locale === "nl") return nl_mod_report_reason_broken(inputs)
	if (locale === "pl") return pl_mod_report_reason_broken(inputs)
	if (locale === "pt") return pt_mod_report_reason_broken(inputs)
	if (locale === "ru") return ru_mod_report_reason_broken(inputs)
	if (locale === "sv") return sv_mod_report_reason_broken(inputs)
	if (locale === "tr") return tr_mod_report_reason_broken(inputs)
	if (locale === "zh") return zh_mod_report_reason_broken(inputs)
	if (locale === "ja") return ja_mod_report_reason_broken(inputs)
	return en_mod_report_reason_broken(inputs)
});

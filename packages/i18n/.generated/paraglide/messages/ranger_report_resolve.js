/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Report_ResolveInputs */

const en_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolve`)
};

const es_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolver`)
};

const de_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erledigen`)
};

const fr_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Résoudre`)
};

const it_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Risolvi`)
};

const nl_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhandelen`)
};

const pl_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rozwiąż`)
};

const pt_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resolver`)
};

const ru_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Решить`)
};

const sv_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lös`)
};

const tr_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çöz`)
};

const zh_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解决`)
};

const ja_ranger_report_resolve = /** @type {(inputs: Ranger_Report_ResolveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`解決`)
};

/**
* | output |
* | --- |
* | "Resolve" |
*
* @param {Ranger_Report_ResolveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_report_resolve = /** @type {((inputs?: Ranger_Report_ResolveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Report_ResolveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_report_resolve(inputs)
	if (locale === "de") return de_ranger_report_resolve(inputs)
	if (locale === "fr") return fr_ranger_report_resolve(inputs)
	if (locale === "it") return it_ranger_report_resolve(inputs)
	if (locale === "nl") return nl_ranger_report_resolve(inputs)
	if (locale === "pl") return pl_ranger_report_resolve(inputs)
	if (locale === "pt") return pt_ranger_report_resolve(inputs)
	if (locale === "ru") return ru_ranger_report_resolve(inputs)
	if (locale === "sv") return sv_ranger_report_resolve(inputs)
	if (locale === "tr") return tr_ranger_report_resolve(inputs)
	if (locale === "zh") return zh_ranger_report_resolve(inputs)
	if (locale === "ja") return ja_ranger_report_resolve(inputs)
	return en_ranger_report_resolve(inputs)
});

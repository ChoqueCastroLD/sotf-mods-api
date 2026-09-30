/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ date: NonNullable<unknown> }} Mod_Scan_DateInputs */

const en_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scanned on ${i?.date}`)
};

const es_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Analizado el ${i?.date}`)
};

const de_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gescannt am ${i?.date}`)
};

const fr_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Analysé le ${i?.date}`)
};

const it_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Scansionato il ${i?.date}`)
};

const nl_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gescand op ${i?.date}`)
};

const pl_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przeskanowano ${i?.date}`)
};

const pt_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Verificado em ${i?.date}`)
};

const ru_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Проверен ${i?.date}`)
};

const sv_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Skannad ${i?.date}`)
};

const tr_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} tarihinde tarandı`)
};

const zh_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`扫描于 ${i?.date}`)
};

const ja_mod_scan_date = /** @type {(inputs: Mod_Scan_DateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.date} にスキャン`)
};

/**
* | output |
* | --- |
* | "Scanned on {date}" |
*
* @param {Mod_Scan_DateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_scan_date = /** @type {((inputs: Mod_Scan_DateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Scan_DateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_scan_date(inputs)
	if (locale === "de") return de_mod_scan_date(inputs)
	if (locale === "fr") return fr_mod_scan_date(inputs)
	if (locale === "it") return it_mod_scan_date(inputs)
	if (locale === "nl") return nl_mod_scan_date(inputs)
	if (locale === "pl") return pl_mod_scan_date(inputs)
	if (locale === "pt") return pt_mod_scan_date(inputs)
	if (locale === "ru") return ru_mod_scan_date(inputs)
	if (locale === "sv") return sv_mod_scan_date(inputs)
	if (locale === "tr") return tr_mod_scan_date(inputs)
	if (locale === "zh") return zh_mod_scan_date(inputs)
	if (locale === "ja") return ja_mod_scan_date(inputs)
	return en_mod_scan_date(inputs)
});

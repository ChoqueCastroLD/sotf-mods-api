/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Source_CsvInputs */

const en_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const es_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const de_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const fr_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const it_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const nl_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const pl_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const pt_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const ru_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const sv_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const tr_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const zh_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

const ja_admin_recat_source_csv = /** @type {(inputs: Admin_Recat_Source_CsvInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV`)
};

/**
* | output |
* | --- |
* | "CSV" |
*
* @param {Admin_Recat_Source_CsvInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_source_csv = /** @type {((inputs?: Admin_Recat_Source_CsvInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Source_CsvInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_source_csv(inputs)
	if (locale === "de") return de_admin_recat_source_csv(inputs)
	if (locale === "fr") return fr_admin_recat_source_csv(inputs)
	if (locale === "it") return it_admin_recat_source_csv(inputs)
	if (locale === "nl") return nl_admin_recat_source_csv(inputs)
	if (locale === "pl") return pl_admin_recat_source_csv(inputs)
	if (locale === "pt") return pt_admin_recat_source_csv(inputs)
	if (locale === "ru") return ru_admin_recat_source_csv(inputs)
	if (locale === "sv") return sv_admin_recat_source_csv(inputs)
	if (locale === "tr") return tr_admin_recat_source_csv(inputs)
	if (locale === "zh") return zh_admin_recat_source_csv(inputs)
	if (locale === "ja") return ja_admin_recat_source_csv(inputs)
	return en_admin_recat_source_csv(inputs)
});

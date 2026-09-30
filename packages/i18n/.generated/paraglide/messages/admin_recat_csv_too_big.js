/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Csv_Too_BigInputs */

const en_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is larger than 5 MB.`)
};

const es_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El fichero ocupa más de 5 MB.`)
};

const de_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist größer als 5 MB.`)
};

const fr_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier dépasse 5 Mo.`)
};

const it_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file supera i 5 MB.`)
};

const nl_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is groter dan 5 MB.`)
};

const pl_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest większy niż 5 MB.`)
};

const pt_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo tem mais de 5 MB.`)
};

const ru_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл больше 5 МБ.`)
};

const sv_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är större än 5 MB.`)
};

const tr_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya 5 MB’tan büyük.`)
};

const zh_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件超过 5 MB。`)
};

const ja_admin_recat_csv_too_big = /** @type {(inputs: Admin_Recat_Csv_Too_BigInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが 5 MB を超えています。`)
};

/**
* | output |
* | --- |
* | "The file is larger than 5 MB." |
*
* @param {Admin_Recat_Csv_Too_BigInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_too_big = /** @type {((inputs?: Admin_Recat_Csv_Too_BigInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_Too_BigInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_too_big(inputs)
	if (locale === "de") return de_admin_recat_csv_too_big(inputs)
	if (locale === "fr") return fr_admin_recat_csv_too_big(inputs)
	if (locale === "it") return it_admin_recat_csv_too_big(inputs)
	if (locale === "nl") return nl_admin_recat_csv_too_big(inputs)
	if (locale === "pl") return pl_admin_recat_csv_too_big(inputs)
	if (locale === "pt") return pt_admin_recat_csv_too_big(inputs)
	if (locale === "ru") return ru_admin_recat_csv_too_big(inputs)
	if (locale === "sv") return sv_admin_recat_csv_too_big(inputs)
	if (locale === "tr") return tr_admin_recat_csv_too_big(inputs)
	if (locale === "zh") return zh_admin_recat_csv_too_big(inputs)
	if (locale === "ja") return ja_admin_recat_csv_too_big(inputs)
	return en_admin_recat_csv_too_big(inputs)
});

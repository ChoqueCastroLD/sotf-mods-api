/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Csv_No_HeaderInputs */

const en_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file is empty.`)
};

const es_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El fichero está vacío.`)
};

const de_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei ist leer.`)
};

const fr_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier est vide.`)
};

const it_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file è vuoto.`)
};

const nl_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand is leeg.`)
};

const pl_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik jest pusty.`)
};

const pt_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo está vazio.`)
};

const ru_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл пустой.`)
};

const sv_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen är tom.`)
};

const tr_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya boş.`)
};

const zh_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件是空的。`)
};

const ja_admin_recat_csv_no_header = /** @type {(inputs: Admin_Recat_Csv_No_HeaderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルが空です。`)
};

/**
* | output |
* | --- |
* | "The file is empty." |
*
* @param {Admin_Recat_Csv_No_HeaderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_no_header = /** @type {((inputs?: Admin_Recat_Csv_No_HeaderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_No_HeaderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_no_header(inputs)
	if (locale === "de") return de_admin_recat_csv_no_header(inputs)
	if (locale === "fr") return fr_admin_recat_csv_no_header(inputs)
	if (locale === "it") return it_admin_recat_csv_no_header(inputs)
	if (locale === "nl") return nl_admin_recat_csv_no_header(inputs)
	if (locale === "pl") return pl_admin_recat_csv_no_header(inputs)
	if (locale === "pt") return pt_admin_recat_csv_no_header(inputs)
	if (locale === "ru") return ru_admin_recat_csv_no_header(inputs)
	if (locale === "sv") return sv_admin_recat_csv_no_header(inputs)
	if (locale === "tr") return tr_admin_recat_csv_no_header(inputs)
	if (locale === "zh") return zh_admin_recat_csv_no_header(inputs)
	if (locale === "ja") return ja_admin_recat_csv_no_header(inputs)
	return en_admin_recat_csv_no_header(inputs)
});

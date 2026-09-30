/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Csv_UnreadableInputs */

const en_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file couldn’t be read.`)
};

const es_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo leer el fichero.`)
};

const de_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei konnte nicht gelesen werden.`)
};

const fr_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier n’a pas pu être lu.`)
};

const it_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile leggere il file.`)
};

const nl_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand kon niet worden gelezen.`)
};

const pl_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się odczytać pliku.`)
};

const pt_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível ler o arquivo.`)
};

const ru_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Файл не удалось прочитать.`)
};

const sv_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen kunde inte läsas.`)
};

const tr_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosya okunamadı.`)
};

const zh_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法读取文件。`)
};

const ja_admin_recat_csv_unreadable = /** @type {(inputs: Admin_Recat_Csv_UnreadableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルを読み込めませんでした。`)
};

/**
* | output |
* | --- |
* | "The file couldn’t be read." |
*
* @param {Admin_Recat_Csv_UnreadableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_unreadable = /** @type {((inputs?: Admin_Recat_Csv_UnreadableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_UnreadableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_unreadable(inputs)
	if (locale === "de") return de_admin_recat_csv_unreadable(inputs)
	if (locale === "fr") return fr_admin_recat_csv_unreadable(inputs)
	if (locale === "it") return it_admin_recat_csv_unreadable(inputs)
	if (locale === "nl") return nl_admin_recat_csv_unreadable(inputs)
	if (locale === "pl") return pl_admin_recat_csv_unreadable(inputs)
	if (locale === "pt") return pt_admin_recat_csv_unreadable(inputs)
	if (locale === "ru") return ru_admin_recat_csv_unreadable(inputs)
	if (locale === "sv") return sv_admin_recat_csv_unreadable(inputs)
	if (locale === "tr") return tr_admin_recat_csv_unreadable(inputs)
	if (locale === "zh") return zh_admin_recat_csv_unreadable(inputs)
	if (locale === "ja") return ja_admin_recat_csv_unreadable(inputs)
	return en_admin_recat_csv_unreadable(inputs)
});

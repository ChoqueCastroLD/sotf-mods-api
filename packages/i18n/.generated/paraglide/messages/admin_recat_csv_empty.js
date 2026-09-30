/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Csv_EmptyInputs */

const en_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The file has no usable lines.`)
};

const es_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El fichero no tiene líneas utilizables.`)
};

const de_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Datei enthält keine verwertbaren Zeilen.`)
};

const fr_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le fichier ne contient aucune ligne exploitable.`)
};

const it_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il file non ha righe utilizzabili.`)
};

const nl_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het bestand bevat geen bruikbare regels.`)
};

const pl_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plik nie zawiera użytecznych wierszy.`)
};

const pt_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O arquivo não tem linhas utilizáveis.`)
};

const ru_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В файле нет пригодных строк.`)
};

const sv_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Filen har inga användbara rader.`)
};

const tr_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dosyada kullanılabilir satır yok.`)
};

const zh_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`文件中没有可用的行。`)
};

const ja_admin_recat_csv_empty = /** @type {(inputs: Admin_Recat_Csv_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ファイルに使える行がありません。`)
};

/**
* | output |
* | --- |
* | "The file has no usable lines." |
*
* @param {Admin_Recat_Csv_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_empty = /** @type {((inputs?: Admin_Recat_Csv_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_empty(inputs)
	if (locale === "de") return de_admin_recat_csv_empty(inputs)
	if (locale === "fr") return fr_admin_recat_csv_empty(inputs)
	if (locale === "it") return it_admin_recat_csv_empty(inputs)
	if (locale === "nl") return nl_admin_recat_csv_empty(inputs)
	if (locale === "pl") return pl_admin_recat_csv_empty(inputs)
	if (locale === "pt") return pt_admin_recat_csv_empty(inputs)
	if (locale === "ru") return ru_admin_recat_csv_empty(inputs)
	if (locale === "sv") return sv_admin_recat_csv_empty(inputs)
	if (locale === "tr") return tr_admin_recat_csv_empty(inputs)
	if (locale === "zh") return zh_admin_recat_csv_empty(inputs)
	if (locale === "ja") return ja_admin_recat_csv_empty(inputs)
	return en_admin_recat_csv_empty(inputs)
});

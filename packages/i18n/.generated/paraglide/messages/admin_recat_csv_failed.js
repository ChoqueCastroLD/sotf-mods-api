/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Csv_FailedInputs */

const en_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t import the CSV`)
};

const es_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo importar el CSV`)
};

const de_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV konnte nicht importiert werden`)
};

const fr_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’importer le CSV`)
};

const it_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile importare il CSV`)
};

const nl_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kon de CSV niet importeren`)
};

const pl_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zaimportować CSV`)
};

const pt_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível importar o CSV`)
};

const ru_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось импортировать CSV`)
};

const sv_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte importera CSV-filen`)
};

const tr_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV içe aktarılamadı`)
};

const zh_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法导入 CSV`)
};

const ja_admin_recat_csv_failed = /** @type {(inputs: Admin_Recat_Csv_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV をインポートできませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn’t import the CSV" |
*
* @param {Admin_Recat_Csv_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_csv_failed = /** @type {((inputs?: Admin_Recat_Csv_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Csv_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_csv_failed(inputs)
	if (locale === "de") return de_admin_recat_csv_failed(inputs)
	if (locale === "fr") return fr_admin_recat_csv_failed(inputs)
	if (locale === "it") return it_admin_recat_csv_failed(inputs)
	if (locale === "nl") return nl_admin_recat_csv_failed(inputs)
	if (locale === "pl") return pl_admin_recat_csv_failed(inputs)
	if (locale === "pt") return pt_admin_recat_csv_failed(inputs)
	if (locale === "ru") return ru_admin_recat_csv_failed(inputs)
	if (locale === "sv") return sv_admin_recat_csv_failed(inputs)
	if (locale === "tr") return tr_admin_recat_csv_failed(inputs)
	if (locale === "zh") return zh_admin_recat_csv_failed(inputs)
	if (locale === "ja") return ja_admin_recat_csv_failed(inputs)
	return en_admin_recat_csv_failed(inputs)
});

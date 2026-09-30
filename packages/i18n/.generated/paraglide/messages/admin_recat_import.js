/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_ImportInputs */

const en_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Import CSV`)
};

const es_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar CSV`)
};

const de_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV importieren`)
};

const fr_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importer un CSV`)
};

const it_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importa CSV`)
};

const nl_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV importeren`)
};

const pl_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importuj CSV`)
};

const pt_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importar CSV`)
};

const ru_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Импорт CSV`)
};

const sv_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Importera CSV`)
};

const tr_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV içe aktar`)
};

const zh_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`导入 CSV`)
};

const ja_admin_recat_import = /** @type {(inputs: Admin_Recat_ImportInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`CSV をインポート`)
};

/**
* | output |
* | --- |
* | "Import CSV" |
*
* @param {Admin_Recat_ImportInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_import = /** @type {((inputs?: Admin_Recat_ImportInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_ImportInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_import(inputs)
	if (locale === "de") return de_admin_recat_import(inputs)
	if (locale === "fr") return fr_admin_recat_import(inputs)
	if (locale === "it") return it_admin_recat_import(inputs)
	if (locale === "nl") return nl_admin_recat_import(inputs)
	if (locale === "pl") return pl_admin_recat_import(inputs)
	if (locale === "pt") return pt_admin_recat_import(inputs)
	if (locale === "ru") return ru_admin_recat_import(inputs)
	if (locale === "sv") return sv_admin_recat_import(inputs)
	if (locale === "tr") return tr_admin_recat_import(inputs)
	if (locale === "zh") return zh_admin_recat_import(inputs)
	if (locale === "ja") return ja_admin_recat_import(inputs)
	return en_admin_recat_import(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Table_TitleInputs */

const en_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 per template`)
};

const es_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 por plantilla`)
};

const de_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 pro Vorlage`)
};

const fr_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 par modèle`)
};

const it_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 per modello`)
};

const nl_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 per sjabloon`)
};

const pl_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 dla szablonów`)
};

const pt_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 por modelo`)
};

const ru_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 по шаблонам`)
};

const sv_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`p75 per mall`)
};

const tr_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şablon başına p75`)
};

const zh_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`各模板 p75`)
};

const ja_admin_rum_table_title = /** @type {(inputs: Admin_Rum_Table_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テンプレートごとの p75`)
};

/**
* | output |
* | --- |
* | "p75 per template" |
*
* @param {Admin_Rum_Table_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_table_title = /** @type {((inputs?: Admin_Rum_Table_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Table_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_table_title(inputs)
	if (locale === "de") return de_admin_rum_table_title(inputs)
	if (locale === "fr") return fr_admin_rum_table_title(inputs)
	if (locale === "it") return it_admin_rum_table_title(inputs)
	if (locale === "nl") return nl_admin_rum_table_title(inputs)
	if (locale === "pl") return pl_admin_rum_table_title(inputs)
	if (locale === "pt") return pt_admin_rum_table_title(inputs)
	if (locale === "ru") return ru_admin_rum_table_title(inputs)
	if (locale === "sv") return sv_admin_rum_table_title(inputs)
	if (locale === "tr") return tr_admin_rum_table_title(inputs)
	if (locale === "zh") return zh_admin_rum_table_title(inputs)
	if (locale === "ja") return ja_admin_rum_table_title(inputs)
	return en_admin_rum_table_title(inputs)
});

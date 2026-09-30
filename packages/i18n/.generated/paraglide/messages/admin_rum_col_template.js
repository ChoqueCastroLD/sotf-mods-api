/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Rum_Col_TemplateInputs */

const en_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Template`)
};

const es_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantilla`)
};

const de_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorlage`)
};

const fr_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèle`)
};

const it_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modello`)
};

const nl_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sjabloon`)
};

const pl_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szablon`)
};

const pt_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo`)
};

const ru_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаблон`)
};

const sv_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mall`)
};

const tr_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şablon`)
};

const zh_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模板`)
};

const ja_admin_rum_col_template = /** @type {(inputs: Admin_Rum_Col_TemplateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テンプレート`)
};

/**
* | output |
* | --- |
* | "Template" |
*
* @param {Admin_Rum_Col_TemplateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_rum_col_template = /** @type {((inputs?: Admin_Rum_Col_TemplateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Rum_Col_TemplateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_rum_col_template(inputs)
	if (locale === "de") return de_admin_rum_col_template(inputs)
	if (locale === "fr") return fr_admin_rum_col_template(inputs)
	if (locale === "it") return it_admin_rum_col_template(inputs)
	if (locale === "nl") return nl_admin_rum_col_template(inputs)
	if (locale === "pl") return pl_admin_rum_col_template(inputs)
	if (locale === "pt") return pt_admin_rum_col_template(inputs)
	if (locale === "ru") return ru_admin_rum_col_template(inputs)
	if (locale === "sv") return sv_admin_rum_col_template(inputs)
	if (locale === "tr") return tr_admin_rum_col_template(inputs)
	if (locale === "zh") return zh_admin_rum_col_template(inputs)
	if (locale === "ja") return ja_admin_rum_col_template(inputs)
	return en_admin_rum_col_template(inputs)
});

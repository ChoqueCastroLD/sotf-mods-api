/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Source_RulesInputs */

const en_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keyword rules`)
};

const es_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reglas por palabras clave`)
};

const de_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schlagwortregeln`)
};

const fr_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Règles par mots-clés`)
};

const it_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regole per parole chiave`)
};

const nl_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trefwoordregels`)
};

const pl_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reguły słów kluczowych`)
};

const pt_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regras por palavras-chave`)
};

const ru_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Правила по ключевым словам`)
};

const sv_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nyckelordsregler`)
};

const tr_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anahtar kelime kuralları`)
};

const zh_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关键词规则`)
};

const ja_admin_recat_source_rules = /** @type {(inputs: Admin_Recat_Source_RulesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーワードルール`)
};

/**
* | output |
* | --- |
* | "Keyword rules" |
*
* @param {Admin_Recat_Source_RulesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_source_rules = /** @type {((inputs?: Admin_Recat_Source_RulesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Source_RulesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_source_rules(inputs)
	if (locale === "de") return de_admin_recat_source_rules(inputs)
	if (locale === "fr") return fr_admin_recat_source_rules(inputs)
	if (locale === "it") return it_admin_recat_source_rules(inputs)
	if (locale === "nl") return nl_admin_recat_source_rules(inputs)
	if (locale === "pl") return pl_admin_recat_source_rules(inputs)
	if (locale === "pt") return pt_admin_recat_source_rules(inputs)
	if (locale === "ru") return ru_admin_recat_source_rules(inputs)
	if (locale === "sv") return sv_admin_recat_source_rules(inputs)
	if (locale === "tr") return tr_admin_recat_source_rules(inputs)
	if (locale === "zh") return zh_admin_recat_source_rules(inputs)
	if (locale === "ja") return ja_admin_recat_source_rules(inputs)
	return en_admin_recat_source_rules(inputs)
});

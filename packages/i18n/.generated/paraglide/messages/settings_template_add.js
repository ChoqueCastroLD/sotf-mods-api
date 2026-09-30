/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Template_AddInputs */

const en_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Add a template`)
};

const es_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Añadir una plantilla`)
};

const de_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorlage hinzufügen`)
};

const fr_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ajouter un modèle`)
};

const it_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiungi un modello`)
};

const nl_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sjabloon toevoegen`)
};

const pl_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dodaj szablon`)
};

const pt_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adicionar um modelo`)
};

const ru_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Добавить шаблон`)
};

const sv_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lägg till en mall`)
};

const tr_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şablon ekle`)
};

const zh_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`添加模板`)
};

const ja_settings_template_add = /** @type {(inputs: Settings_Template_AddInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テンプレートを追加`)
};

/**
* | output |
* | --- |
* | "Add a template" |
*
* @param {Settings_Template_AddInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_add = /** @type {((inputs?: Settings_Template_AddInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_AddInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_add(inputs)
	if (locale === "de") return de_settings_template_add(inputs)
	if (locale === "fr") return fr_settings_template_add(inputs)
	if (locale === "it") return it_settings_template_add(inputs)
	if (locale === "nl") return nl_settings_template_add(inputs)
	if (locale === "pl") return pl_settings_template_add(inputs)
	if (locale === "pt") return pt_settings_template_add(inputs)
	if (locale === "ru") return ru_settings_template_add(inputs)
	if (locale === "sv") return sv_settings_template_add(inputs)
	if (locale === "tr") return tr_settings_template_add(inputs)
	if (locale === "zh") return zh_settings_template_add(inputs)
	if (locale === "ja") return ja_settings_template_add(inputs)
	return en_settings_template_add(inputs)
});

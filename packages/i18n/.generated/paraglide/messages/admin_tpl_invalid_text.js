/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Invalid_TextInputs */

const en_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix the marked templates before saving.`)
};

const es_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrige las plantillas marcadas antes de guardar.`)
};

const de_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korrigiere die markierten Vorlagen vor dem Speichern.`)
};

const fr_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigez les modèles signalés avant d’enregistrer.`)
};

const it_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correggi i modelli segnalati prima di salvare.`)
};

const nl_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigeer de gemarkeerde sjablonen voor je opslaat.`)
};

const pl_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Popraw oznaczone szablony przed zapisaniem.`)
};

const pt_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrija os modelos marcados antes de salvar.`)
};

const ru_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправьте отмеченные шаблоны перед сохранением.`)
};

const sv_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rätta de markerade mallarna innan du sparar.`)
};

const tr_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydetmeden önce işaretli şablonları düzelt.`)
};

const zh_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存前请修正标记的模板。`)
};

const ja_admin_tpl_invalid_text = /** @type {(inputs: Admin_Tpl_Invalid_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存する前に、印の付いたテンプレートを直してください。`)
};

/**
* | output |
* | --- |
* | "Fix the marked templates before saving." |
*
* @param {Admin_Tpl_Invalid_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_invalid_text = /** @type {((inputs?: Admin_Tpl_Invalid_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Invalid_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_invalid_text(inputs)
	if (locale === "de") return de_admin_tpl_invalid_text(inputs)
	if (locale === "fr") return fr_admin_tpl_invalid_text(inputs)
	if (locale === "it") return it_admin_tpl_invalid_text(inputs)
	if (locale === "nl") return nl_admin_tpl_invalid_text(inputs)
	if (locale === "pl") return pl_admin_tpl_invalid_text(inputs)
	if (locale === "pt") return pt_admin_tpl_invalid_text(inputs)
	if (locale === "ru") return ru_admin_tpl_invalid_text(inputs)
	if (locale === "sv") return sv_admin_tpl_invalid_text(inputs)
	if (locale === "tr") return tr_admin_tpl_invalid_text(inputs)
	if (locale === "zh") return zh_admin_tpl_invalid_text(inputs)
	if (locale === "ja") return ja_admin_tpl_invalid_text(inputs)
	return en_admin_tpl_invalid_text(inputs)
});

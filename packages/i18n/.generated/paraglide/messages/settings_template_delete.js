/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Template_DeleteInputs */

const en_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delete`)
};

const es_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrar`)
};

const de_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschen`)
};

const fr_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Supprimer`)
};

const it_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elimina`)
};

const nl_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderen`)
};

const pl_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń`)
};

const pt_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Excluir`)
};

const ru_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить`)
};

const sv_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Radera`)
};

const tr_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sil`)
};

const zh_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`删除`)
};

const ja_settings_template_delete = /** @type {(inputs: Settings_Template_DeleteInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除`)
};

/**
* | output |
* | --- |
* | "Delete" |
*
* @param {Settings_Template_DeleteInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_template_delete = /** @type {((inputs?: Settings_Template_DeleteInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Template_DeleteInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_template_delete(inputs)
	if (locale === "de") return de_settings_template_delete(inputs)
	if (locale === "fr") return fr_settings_template_delete(inputs)
	if (locale === "it") return it_settings_template_delete(inputs)
	if (locale === "nl") return nl_settings_template_delete(inputs)
	if (locale === "pl") return pl_settings_template_delete(inputs)
	if (locale === "pt") return pt_settings_template_delete(inputs)
	if (locale === "ru") return ru_settings_template_delete(inputs)
	if (locale === "sv") return sv_settings_template_delete(inputs)
	if (locale === "tr") return tr_settings_template_delete(inputs)
	if (locale === "zh") return zh_settings_template_delete(inputs)
	if (locale === "ja") return ja_settings_template_delete(inputs)
	return en_settings_template_delete(inputs)
});

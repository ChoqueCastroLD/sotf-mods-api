/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_RemoveInputs */

const en_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remove template`)
};

const es_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quitar plantilla`)
};

const de_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vorlage entfernen`)
};

const fr_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer le modèle`)
};

const it_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi modello`)
};

const nl_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sjabloon verwijderen`)
};

const pl_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuń szablon`)
};

const pt_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remover modelo`)
};

const ru_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалить шаблон`)
};

const sv_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta bort mall`)
};

const tr_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şablonu kaldır`)
};

const zh_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`移除模板`)
};

const ja_admin_tpl_remove = /** @type {(inputs: Admin_Tpl_RemoveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テンプレートを削除`)
};

/**
* | output |
* | --- |
* | "Remove template" |
*
* @param {Admin_Tpl_RemoveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_remove = /** @type {((inputs?: Admin_Tpl_RemoveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_RemoveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_remove(inputs)
	if (locale === "de") return de_admin_tpl_remove(inputs)
	if (locale === "fr") return fr_admin_tpl_remove(inputs)
	if (locale === "it") return it_admin_tpl_remove(inputs)
	if (locale === "nl") return nl_admin_tpl_remove(inputs)
	if (locale === "pl") return pl_admin_tpl_remove(inputs)
	if (locale === "pt") return pt_admin_tpl_remove(inputs)
	if (locale === "ru") return ru_admin_tpl_remove(inputs)
	if (locale === "sv") return sv_admin_tpl_remove(inputs)
	if (locale === "tr") return tr_admin_tpl_remove(inputs)
	if (locale === "zh") return zh_admin_tpl_remove(inputs)
	if (locale === "ja") return ja_admin_tpl_remove(inputs)
	return en_admin_tpl_remove(inputs)
});

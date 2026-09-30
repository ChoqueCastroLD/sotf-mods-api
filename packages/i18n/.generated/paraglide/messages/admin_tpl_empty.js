/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_EmptyInputs */

const en_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No templates for this action`)
};

const es_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay plantillas para esta acción`)
};

const de_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Vorlagen für diese Aktion`)
};

const fr_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun modèle pour cette action`)
};

const it_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun modello per questa azione`)
};

const nl_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen sjablonen voor deze actie`)
};

const pl_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak szablonów dla tego działania`)
};

const pt_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum modelo para esta ação`)
};

const ru_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Для этого действия шаблонов нет`)
};

const sv_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga mallar för den här åtgärden`)
};

const tr_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu işlem için şablon yok`)
};

const zh_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此操作没有模板`)
};

const ja_admin_tpl_empty = /** @type {(inputs: Admin_Tpl_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この操作のテンプレートはありません`)
};

/**
* | output |
* | --- |
* | "No templates for this action" |
*
* @param {Admin_Tpl_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_empty = /** @type {((inputs?: Admin_Tpl_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_empty(inputs)
	if (locale === "de") return de_admin_tpl_empty(inputs)
	if (locale === "fr") return fr_admin_tpl_empty(inputs)
	if (locale === "it") return it_admin_tpl_empty(inputs)
	if (locale === "nl") return nl_admin_tpl_empty(inputs)
	if (locale === "pl") return pl_admin_tpl_empty(inputs)
	if (locale === "pt") return pt_admin_tpl_empty(inputs)
	if (locale === "ru") return ru_admin_tpl_empty(inputs)
	if (locale === "sv") return sv_admin_tpl_empty(inputs)
	if (locale === "tr") return tr_admin_tpl_empty(inputs)
	if (locale === "zh") return zh_admin_tpl_empty(inputs)
	if (locale === "ja") return ja_admin_tpl_empty(inputs)
	return en_admin_tpl_empty(inputs)
});

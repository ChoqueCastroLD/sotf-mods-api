/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Action_ApproveInputs */

const en_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approve`)
};

const es_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprobar`)
};

const de_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigeben`)
};

const fr_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approuver`)
};

const it_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Approva`)
};

const nl_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goedkeuren`)
};

const pl_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatwierdź`)
};

const pt_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aprovar`)
};

const ru_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одобрить`)
};

const sv_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Godkänn`)
};

const tr_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onayla`)
};

const zh_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`批准`)
};

const ja_admin_tpl_action_approve = /** @type {(inputs: Admin_Tpl_Action_ApproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認`)
};

/**
* | output |
* | --- |
* | "Approve" |
*
* @param {Admin_Tpl_Action_ApproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_action_approve = /** @type {((inputs?: Admin_Tpl_Action_ApproveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_ApproveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_action_approve(inputs)
	if (locale === "de") return de_admin_tpl_action_approve(inputs)
	if (locale === "fr") return fr_admin_tpl_action_approve(inputs)
	if (locale === "it") return it_admin_tpl_action_approve(inputs)
	if (locale === "nl") return nl_admin_tpl_action_approve(inputs)
	if (locale === "pl") return pl_admin_tpl_action_approve(inputs)
	if (locale === "pt") return pt_admin_tpl_action_approve(inputs)
	if (locale === "ru") return ru_admin_tpl_action_approve(inputs)
	if (locale === "sv") return sv_admin_tpl_action_approve(inputs)
	if (locale === "tr") return tr_admin_tpl_action_approve(inputs)
	if (locale === "zh") return zh_admin_tpl_action_approve(inputs)
	if (locale === "ja") return ja_admin_tpl_action_approve(inputs)
	return en_admin_tpl_action_approve(inputs)
});

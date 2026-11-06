/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Action_UnapproveInputs */

const en_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unapprove`)
};

const es_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desaprobar`)
};

const de_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Freigabe zurückziehen`)
};

const fr_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirer l’approbation`)
};

const it_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revoca approvazione`)
};

const nl_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Goedkeuring intrekken`)
};

const pl_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cofnij zatwierdzenie`)
};

const pt_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revogar aprovação`)
};

const ru_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить одобрение`)
};

const sv_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dra tillbaka godkännande`)
};

const tr_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Onayı kaldır`)
};

const zh_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消批准`)
};

const ja_admin_tpl_action_unapprove = /** @type {(inputs: Admin_Tpl_Action_UnapproveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`承認を取り消す`)
};

/**
* | output |
* | --- |
* | "Unapprove" |
*
* @param {Admin_Tpl_Action_UnapproveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_action_unapprove = /** @type {((inputs?: Admin_Tpl_Action_UnapproveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_UnapproveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_action_unapprove(inputs)
	if (locale === "de") return de_admin_tpl_action_unapprove(inputs)
	if (locale === "fr") return fr_admin_tpl_action_unapprove(inputs)
	if (locale === "it") return it_admin_tpl_action_unapprove(inputs)
	if (locale === "nl") return nl_admin_tpl_action_unapprove(inputs)
	if (locale === "pl") return pl_admin_tpl_action_unapprove(inputs)
	if (locale === "pt") return pt_admin_tpl_action_unapprove(inputs)
	if (locale === "ru") return ru_admin_tpl_action_unapprove(inputs)
	if (locale === "sv") return sv_admin_tpl_action_unapprove(inputs)
	if (locale === "tr") return tr_admin_tpl_action_unapprove(inputs)
	if (locale === "zh") return zh_admin_tpl_action_unapprove(inputs)
	if (locale === "ja") return ja_admin_tpl_action_unapprove(inputs)
	return en_admin_tpl_action_unapprove(inputs)
});

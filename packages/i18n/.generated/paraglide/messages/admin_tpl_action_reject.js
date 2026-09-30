/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Action_RejectInputs */

const en_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reject`)
};

const es_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechazar`)
};

const de_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ablehnen`)
};

const fr_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Refuser`)
};

const it_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rifiuta`)
};

const nl_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afwijzen`)
};

const pl_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odrzuć`)
};

const pt_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rejeitar`)
};

const ru_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отклонить`)
};

const sv_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avvisa`)
};

const tr_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reddet`)
};

const zh_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`拒绝`)
};

const ja_admin_tpl_action_reject = /** @type {(inputs: Admin_Tpl_Action_RejectInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`却下`)
};

/**
* | output |
* | --- |
* | "Reject" |
*
* @param {Admin_Tpl_Action_RejectInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_action_reject = /** @type {((inputs?: Admin_Tpl_Action_RejectInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_RejectInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_action_reject(inputs)
	if (locale === "de") return de_admin_tpl_action_reject(inputs)
	if (locale === "fr") return fr_admin_tpl_action_reject(inputs)
	if (locale === "it") return it_admin_tpl_action_reject(inputs)
	if (locale === "nl") return nl_admin_tpl_action_reject(inputs)
	if (locale === "pl") return pl_admin_tpl_action_reject(inputs)
	if (locale === "pt") return pt_admin_tpl_action_reject(inputs)
	if (locale === "ru") return ru_admin_tpl_action_reject(inputs)
	if (locale === "sv") return sv_admin_tpl_action_reject(inputs)
	if (locale === "tr") return tr_admin_tpl_action_reject(inputs)
	if (locale === "zh") return zh_admin_tpl_action_reject(inputs)
	if (locale === "ja") return ja_admin_tpl_action_reject(inputs)
	return en_admin_tpl_action_reject(inputs)
});

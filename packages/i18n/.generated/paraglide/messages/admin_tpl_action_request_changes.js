/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Action_Request_ChangesInputs */

const en_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Request changes`)
};

const es_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir cambios`)
};

const de_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Änderungen anfordern`)
};

const fr_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Demander des changements`)
};

const it_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chiedi modifiche`)
};

const nl_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wijzigingen vragen`)
};

const pl_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Poproś o zmiany`)
};

const pt_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pedir alterações`)
};

const ru_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запросить правки`)
};

const sv_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Begär ändringar`)
};

const tr_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Değişiklik iste`)
};

const zh_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`要求修改`)
};

const ja_admin_tpl_action_request_changes = /** @type {(inputs: Admin_Tpl_Action_Request_ChangesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修正を依頼`)
};

/**
* | output |
* | --- |
* | "Request changes" |
*
* @param {Admin_Tpl_Action_Request_ChangesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_action_request_changes = /** @type {((inputs?: Admin_Tpl_Action_Request_ChangesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_Request_ChangesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_action_request_changes(inputs)
	if (locale === "de") return de_admin_tpl_action_request_changes(inputs)
	if (locale === "fr") return fr_admin_tpl_action_request_changes(inputs)
	if (locale === "it") return it_admin_tpl_action_request_changes(inputs)
	if (locale === "nl") return nl_admin_tpl_action_request_changes(inputs)
	if (locale === "pl") return pl_admin_tpl_action_request_changes(inputs)
	if (locale === "pt") return pt_admin_tpl_action_request_changes(inputs)
	if (locale === "ru") return ru_admin_tpl_action_request_changes(inputs)
	if (locale === "sv") return sv_admin_tpl_action_request_changes(inputs)
	if (locale === "tr") return tr_admin_tpl_action_request_changes(inputs)
	if (locale === "zh") return zh_admin_tpl_action_request_changes(inputs)
	if (locale === "ja") return ja_admin_tpl_action_request_changes(inputs)
	return en_admin_tpl_action_request_changes(inputs)
});

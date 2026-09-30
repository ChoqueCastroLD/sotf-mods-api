/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tpl_Action_RestoreInputs */

const en_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restore`)
};

const es_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar`)
};

const de_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wiederherstellen`)
};

const fr_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurer`)
};

const it_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ripristina`)
};

const nl_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herstellen`)
};

const pl_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przywróć`)
};

const pt_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Restaurar`)
};

const ru_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Восстановить`)
};

const sv_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Återställ`)
};

const tr_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geri yükle`)
};

const zh_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`恢复`)
};

const ja_admin_tpl_action_restore = /** @type {(inputs: Admin_Tpl_Action_RestoreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`復元`)
};

/**
* | output |
* | --- |
* | "Restore" |
*
* @param {Admin_Tpl_Action_RestoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tpl_action_restore = /** @type {((inputs?: Admin_Tpl_Action_RestoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tpl_Action_RestoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tpl_action_restore(inputs)
	if (locale === "de") return de_admin_tpl_action_restore(inputs)
	if (locale === "fr") return fr_admin_tpl_action_restore(inputs)
	if (locale === "it") return it_admin_tpl_action_restore(inputs)
	if (locale === "nl") return nl_admin_tpl_action_restore(inputs)
	if (locale === "pl") return pl_admin_tpl_action_restore(inputs)
	if (locale === "pt") return pt_admin_tpl_action_restore(inputs)
	if (locale === "ru") return ru_admin_tpl_action_restore(inputs)
	if (locale === "sv") return sv_admin_tpl_action_restore(inputs)
	if (locale === "tr") return tr_admin_tpl_action_restore(inputs)
	if (locale === "zh") return zh_admin_tpl_action_restore(inputs)
	if (locale === "ja") return ja_admin_tpl_action_restore(inputs)
	return en_admin_tpl_action_restore(inputs)
});

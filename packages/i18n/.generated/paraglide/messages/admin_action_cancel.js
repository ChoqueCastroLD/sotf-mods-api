/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Action_CancelInputs */

const en_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel`)
};

const es_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const de_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbrechen`)
};

const fr_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler`)
};

const it_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla`)
};

const nl_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuleren`)
};

const pl_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj`)
};

const pt_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar`)
};

const ru_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отмена`)
};

const sv_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt`)
};

const tr_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İptal`)
};

const zh_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消`)
};

const ja_admin_action_cancel = /** @type {(inputs: Admin_Action_CancelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キャンセル`)
};

/**
* | output |
* | --- |
* | "Cancel" |
*
* @param {Admin_Action_CancelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_action_cancel = /** @type {((inputs?: Admin_Action_CancelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Action_CancelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_action_cancel(inputs)
	if (locale === "de") return de_admin_action_cancel(inputs)
	if (locale === "fr") return fr_admin_action_cancel(inputs)
	if (locale === "it") return it_admin_action_cancel(inputs)
	if (locale === "nl") return nl_admin_action_cancel(inputs)
	if (locale === "pl") return pl_admin_action_cancel(inputs)
	if (locale === "pt") return pt_admin_action_cancel(inputs)
	if (locale === "ru") return ru_admin_action_cancel(inputs)
	if (locale === "sv") return sv_admin_action_cancel(inputs)
	if (locale === "tr") return tr_admin_action_cancel(inputs)
	if (locale === "zh") return zh_admin_action_cancel(inputs)
	if (locale === "ja") return ja_admin_action_cancel(inputs)
	return en_admin_action_cancel(inputs)
});

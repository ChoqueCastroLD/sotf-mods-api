/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Action_EditInputs */

const en_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit`)
};

const es_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const de_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bearbeiten`)
};

const fr_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier`)
};

const it_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica`)
};

const nl_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewerken`)
};

const pl_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj`)
};

const pt_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar`)
};

const ru_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить`)
};

const sv_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera`)
};

const tr_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenle`)
};

const zh_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑`)
};

const ja_admin_action_edit = /** @type {(inputs: Admin_Action_EditInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集`)
};

/**
* | output |
* | --- |
* | "Edit" |
*
* @param {Admin_Action_EditInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_action_edit = /** @type {((inputs?: Admin_Action_EditInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Action_EditInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_action_edit(inputs)
	if (locale === "de") return de_admin_action_edit(inputs)
	if (locale === "fr") return fr_admin_action_edit(inputs)
	if (locale === "it") return it_admin_action_edit(inputs)
	if (locale === "nl") return nl_admin_action_edit(inputs)
	if (locale === "pl") return pl_admin_action_edit(inputs)
	if (locale === "pt") return pt_admin_action_edit(inputs)
	if (locale === "ru") return ru_admin_action_edit(inputs)
	if (locale === "sv") return sv_admin_action_edit(inputs)
	if (locale === "tr") return tr_admin_action_edit(inputs)
	if (locale === "zh") return zh_admin_action_edit(inputs)
	if (locale === "ja") return ja_admin_action_edit(inputs)
	return en_admin_action_edit(inputs)
});

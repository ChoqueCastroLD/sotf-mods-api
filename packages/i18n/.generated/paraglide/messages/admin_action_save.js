/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Action_SaveInputs */

const en_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Save`)
};

const es_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardar`)
};

const de_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Speichern`)
};

const fr_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enregistrer`)
};

const it_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salva`)
};

const nl_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opslaan`)
};

const pl_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zapisz`)
};

const pt_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Salvar`)
};

const ru_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сохранить`)
};

const sv_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spara`)
};

const tr_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kaydet`)
};

const zh_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

const ja_admin_action_save = /** @type {(inputs: Admin_Action_SaveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`保存`)
};

/**
* | output |
* | --- |
* | "Save" |
*
* @param {Admin_Action_SaveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_action_save = /** @type {((inputs?: Admin_Action_SaveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Action_SaveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_action_save(inputs)
	if (locale === "de") return de_admin_action_save(inputs)
	if (locale === "fr") return fr_admin_action_save(inputs)
	if (locale === "it") return it_admin_action_save(inputs)
	if (locale === "nl") return nl_admin_action_save(inputs)
	if (locale === "pl") return pl_admin_action_save(inputs)
	if (locale === "pt") return pt_admin_action_save(inputs)
	if (locale === "ru") return ru_admin_action_save(inputs)
	if (locale === "sv") return sv_admin_action_save(inputs)
	if (locale === "tr") return tr_admin_action_save(inputs)
	if (locale === "zh") return zh_admin_action_save(inputs)
	if (locale === "ja") return ja_admin_action_save(inputs)
	return en_admin_action_save(inputs)
});

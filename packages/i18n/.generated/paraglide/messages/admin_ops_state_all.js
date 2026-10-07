/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_State_AllInputs */

const en_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any state`)
};

const es_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier estado`)
};

const de_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeder Zustand`)
};

const fr_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout état`)
};

const it_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi stato`)
};

const nl_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke status`)
};

const pl_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolny stan`)
};

const pt_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer estado`)
};

const ru_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любое состояние`)
};

const sv_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla tillstånd`)
};

const tr_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm durumlar`)
};

const zh_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`所有状态`)
};

const ja_admin_ops_state_all = /** @type {(inputs: Admin_Ops_State_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべての状態`)
};

/**
* | output |
* | --- |
* | "Any state" |
*
* @param {Admin_Ops_State_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_state_all = /** @type {((inputs?: Admin_Ops_State_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_State_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_state_all(inputs)
	if (locale === "de") return de_admin_ops_state_all(inputs)
	if (locale === "fr") return fr_admin_ops_state_all(inputs)
	if (locale === "it") return it_admin_ops_state_all(inputs)
	if (locale === "nl") return nl_admin_ops_state_all(inputs)
	if (locale === "pl") return pl_admin_ops_state_all(inputs)
	if (locale === "pt") return pt_admin_ops_state_all(inputs)
	if (locale === "ru") return ru_admin_ops_state_all(inputs)
	if (locale === "sv") return sv_admin_ops_state_all(inputs)
	if (locale === "tr") return tr_admin_ops_state_all(inputs)
	if (locale === "zh") return zh_admin_ops_state_all(inputs)
	if (locale === "ja") return ja_admin_ops_state_all(inputs)
	return en_admin_ops_state_all(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_State_FailingInputs */

const en_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Failing`)
};

const es_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallando`)
};

const de_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schlägt fehl`)
};

const fr_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En échec`)
};

const it_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In errore`)
};

const nl_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mislukt`)
};

const pl_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Błędy`)
};

const pt_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falhando`)
};

const ru_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сбоит`)
};

const sv_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fallerar`)
};

const tr_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata veriyor`)
};

const zh_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失败中`)
};

const ja_admin_ops_state_failing = /** @type {(inputs: Admin_Ops_State_FailingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`失敗中`)
};

/**
* | output |
* | --- |
* | "Failing" |
*
* @param {Admin_Ops_State_FailingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_state_failing = /** @type {((inputs?: Admin_Ops_State_FailingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_State_FailingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_state_failing(inputs)
	if (locale === "de") return de_admin_ops_state_failing(inputs)
	if (locale === "fr") return fr_admin_ops_state_failing(inputs)
	if (locale === "it") return it_admin_ops_state_failing(inputs)
	if (locale === "nl") return nl_admin_ops_state_failing(inputs)
	if (locale === "pl") return pl_admin_ops_state_failing(inputs)
	if (locale === "pt") return pt_admin_ops_state_failing(inputs)
	if (locale === "ru") return ru_admin_ops_state_failing(inputs)
	if (locale === "sv") return sv_admin_ops_state_failing(inputs)
	if (locale === "tr") return tr_admin_ops_state_failing(inputs)
	if (locale === "zh") return zh_admin_ops_state_failing(inputs)
	if (locale === "ja") return ja_admin_ops_state_failing(inputs)
	return en_admin_ops_state_failing(inputs)
});

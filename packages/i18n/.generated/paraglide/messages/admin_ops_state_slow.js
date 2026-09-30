/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_State_SlowInputs */

const en_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Backed up`)
};

const es_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atascada`)
};

const de_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Staut sich`)
};

const fr_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Engorgée`)
};

const it_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rallentata`)
};

const nl_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loopt achter`)
};

const pl_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zatory`)
};

const pt_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acumulando`)
};

const ru_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Копится`)
};

const sv_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Köar`)
};

const tr_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Birikiyor`)
};

const zh_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`积压`)
};

const ja_admin_ops_state_slow = /** @type {(inputs: Admin_Ops_State_SlowInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`滞留`)
};

/**
* | output |
* | --- |
* | "Backed up" |
*
* @param {Admin_Ops_State_SlowInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_state_slow = /** @type {((inputs?: Admin_Ops_State_SlowInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_State_SlowInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_state_slow(inputs)
	if (locale === "de") return de_admin_ops_state_slow(inputs)
	if (locale === "fr") return fr_admin_ops_state_slow(inputs)
	if (locale === "it") return it_admin_ops_state_slow(inputs)
	if (locale === "nl") return nl_admin_ops_state_slow(inputs)
	if (locale === "pl") return pl_admin_ops_state_slow(inputs)
	if (locale === "pt") return pt_admin_ops_state_slow(inputs)
	if (locale === "ru") return ru_admin_ops_state_slow(inputs)
	if (locale === "sv") return sv_admin_ops_state_slow(inputs)
	if (locale === "tr") return tr_admin_ops_state_slow(inputs)
	if (locale === "zh") return zh_admin_ops_state_slow(inputs)
	if (locale === "ja") return ja_admin_ops_state_slow(inputs)
	return en_admin_ops_state_slow(inputs)
});

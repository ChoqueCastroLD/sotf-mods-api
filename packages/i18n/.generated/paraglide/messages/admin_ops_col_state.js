/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ops_Col_StateInputs */

const en_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`State`)
};

const es_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const de_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const fr_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`État`)
};

const it_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stato`)
};

const nl_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Status`)
};

const pl_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stan`)
};

const pt_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Estado`)
};

const ru_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Состояние`)
};

const sv_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läge`)
};

const tr_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Durum`)
};

const zh_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状态`)
};

const ja_admin_ops_col_state = /** @type {(inputs: Admin_Ops_Col_StateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`状態`)
};

/**
* | output |
* | --- |
* | "State" |
*
* @param {Admin_Ops_Col_StateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ops_col_state = /** @type {((inputs?: Admin_Ops_Col_StateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ops_Col_StateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ops_col_state(inputs)
	if (locale === "de") return de_admin_ops_col_state(inputs)
	if (locale === "fr") return fr_admin_ops_col_state(inputs)
	if (locale === "it") return it_admin_ops_col_state(inputs)
	if (locale === "nl") return nl_admin_ops_col_state(inputs)
	if (locale === "pl") return pl_admin_ops_col_state(inputs)
	if (locale === "pt") return pt_admin_ops_col_state(inputs)
	if (locale === "ru") return ru_admin_ops_col_state(inputs)
	if (locale === "sv") return sv_admin_ops_col_state(inputs)
	if (locale === "tr") return tr_admin_ops_col_state(inputs)
	if (locale === "zh") return zh_admin_ops_col_state(inputs)
	if (locale === "ja") return ja_admin_ops_col_state(inputs)
	return en_admin_ops_col_state(inputs)
});

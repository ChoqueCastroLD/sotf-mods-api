/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown>, max: NonNullable<unknown> }} Admin_Kelvin_Error_TimeoutInputs */

const en_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Between ${i?.min} and ${i?.max} ms.`)
};

const es_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entre ${i?.min} y ${i?.max} ms.`)
};

const de_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zwischen ${i?.min} und ${i?.max} ms.`)
};

const fr_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entre ${i?.min} et ${i?.max} ms.`)
};

const it_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tra ${i?.min} e ${i?.max} ms.`)
};

const nl_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tussen ${i?.min} en ${i?.max} ms.`)
};

const pl_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Od ${i?.min} do ${i?.max} ms.`)
};

const pt_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entre ${i?.min} e ${i?.max} ms.`)
};

const ru_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`От ${i?.min} до ${i?.max} мс.`)
};

const sv_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mellan ${i?.min} och ${i?.max} ms.`)
};

const tr_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min} ile ${i?.max} ms arasında.`)
};

const zh_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`介于 ${i?.min} 和 ${i?.max} 毫秒之间。`)
};

const ja_admin_kelvin_error_timeout = /** @type {(inputs: Admin_Kelvin_Error_TimeoutInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.min}〜${i?.max} ms の範囲で入力してください。`)
};

/**
* | output |
* | --- |
* | "Between {min} and {max} ms." |
*
* @param {Admin_Kelvin_Error_TimeoutInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_error_timeout = /** @type {((inputs: Admin_Kelvin_Error_TimeoutInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Error_TimeoutInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_error_timeout(inputs)
	if (locale === "de") return de_admin_kelvin_error_timeout(inputs)
	if (locale === "fr") return fr_admin_kelvin_error_timeout(inputs)
	if (locale === "it") return it_admin_kelvin_error_timeout(inputs)
	if (locale === "nl") return nl_admin_kelvin_error_timeout(inputs)
	if (locale === "pl") return pl_admin_kelvin_error_timeout(inputs)
	if (locale === "pt") return pt_admin_kelvin_error_timeout(inputs)
	if (locale === "ru") return ru_admin_kelvin_error_timeout(inputs)
	if (locale === "sv") return sv_admin_kelvin_error_timeout(inputs)
	if (locale === "tr") return tr_admin_kelvin_error_timeout(inputs)
	if (locale === "zh") return zh_admin_kelvin_error_timeout(inputs)
	if (locale === "ja") return ja_admin_kelvin_error_timeout(inputs)
	return en_admin_kelvin_error_timeout(inputs)
});

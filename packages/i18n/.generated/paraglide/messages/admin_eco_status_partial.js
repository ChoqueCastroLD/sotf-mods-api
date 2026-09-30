/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Eco_Status_PartialInputs */

const en_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partial`)
};

const es_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcial`)
};

const de_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teilweise`)
};

const fr_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partiel`)
};

const it_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parziale`)
};

const nl_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deels`)
};

const pl_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Częściowo`)
};

const pt_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parcial`)
};

const ru_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Частично`)
};

const sv_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delvis`)
};

const tr_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısmen`)
};

const zh_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`部分可用`)
};

const ja_admin_eco_status_partial = /** @type {(inputs: Admin_Eco_Status_PartialInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一部動作`)
};

/**
* | output |
* | --- |
* | "Partial" |
*
* @param {Admin_Eco_Status_PartialInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_eco_status_partial = /** @type {((inputs?: Admin_Eco_Status_PartialInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Eco_Status_PartialInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_eco_status_partial(inputs)
	if (locale === "de") return de_admin_eco_status_partial(inputs)
	if (locale === "fr") return fr_admin_eco_status_partial(inputs)
	if (locale === "it") return it_admin_eco_status_partial(inputs)
	if (locale === "nl") return nl_admin_eco_status_partial(inputs)
	if (locale === "pl") return pl_admin_eco_status_partial(inputs)
	if (locale === "pt") return pt_admin_eco_status_partial(inputs)
	if (locale === "ru") return ru_admin_eco_status_partial(inputs)
	if (locale === "sv") return sv_admin_eco_status_partial(inputs)
	if (locale === "tr") return tr_admin_eco_status_partial(inputs)
	if (locale === "zh") return zh_admin_eco_status_partial(inputs)
	if (locale === "ja") return ja_admin_eco_status_partial(inputs)
	return en_admin_eco_status_partial(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_DetailInputs */

const en_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daily detail`)
};

const es_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalle diario`)
};

const de_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagesdetails`)
};

const fr_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Détail par jour`)
};

const it_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dettaglio giornaliero`)
};

const nl_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Details per dag`)
};

const pl_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szczegóły dzienne`)
};

const pt_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detalhe diário`)
};

const ru_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подробно по дням`)
};

const sv_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Detaljer per dag`)
};

const tr_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Günlük ayrıntı`)
};

const zh_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每日明细`)
};

const ja_admin_kelvin_detail = /** @type {(inputs: Admin_Kelvin_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日別の詳細`)
};

/**
* | output |
* | --- |
* | "Daily detail" |
*
* @param {Admin_Kelvin_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_detail = /** @type {((inputs?: Admin_Kelvin_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_detail(inputs)
	if (locale === "de") return de_admin_kelvin_detail(inputs)
	if (locale === "fr") return fr_admin_kelvin_detail(inputs)
	if (locale === "it") return it_admin_kelvin_detail(inputs)
	if (locale === "nl") return nl_admin_kelvin_detail(inputs)
	if (locale === "pl") return pl_admin_kelvin_detail(inputs)
	if (locale === "pt") return pt_admin_kelvin_detail(inputs)
	if (locale === "ru") return ru_admin_kelvin_detail(inputs)
	if (locale === "sv") return sv_admin_kelvin_detail(inputs)
	if (locale === "tr") return tr_admin_kelvin_detail(inputs)
	if (locale === "zh") return zh_admin_kelvin_detail(inputs)
	if (locale === "ja") return ja_admin_kelvin_detail(inputs)
	return en_admin_kelvin_detail(inputs)
});

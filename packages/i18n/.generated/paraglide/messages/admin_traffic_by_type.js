/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Traffic_By_TypeInputs */

const en_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Page type`)
};

const es_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de página`)
};

const de_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seitentyp`)
};

const fr_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Type de page`)
};

const it_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo di pagina`)
};

const nl_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paginatype`)
};

const pl_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Typ strony`)
};

const pt_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tipo de página`)
};

const ru_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Тип страницы`)
};

const sv_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sidtyp`)
};

const tr_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfa türü`)
};

const zh_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面类型`)
};

const ja_admin_traffic_by_type = /** @type {(inputs: Admin_Traffic_By_TypeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページ種別`)
};

/**
* | output |
* | --- |
* | "Page type" |
*
* @param {Admin_Traffic_By_TypeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_by_type = /** @type {((inputs?: Admin_Traffic_By_TypeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_By_TypeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_by_type(inputs)
	if (locale === "de") return de_admin_traffic_by_type(inputs)
	if (locale === "fr") return fr_admin_traffic_by_type(inputs)
	if (locale === "it") return it_admin_traffic_by_type(inputs)
	if (locale === "nl") return nl_admin_traffic_by_type(inputs)
	if (locale === "pl") return pl_admin_traffic_by_type(inputs)
	if (locale === "pt") return pt_admin_traffic_by_type(inputs)
	if (locale === "ru") return ru_admin_traffic_by_type(inputs)
	if (locale === "sv") return sv_admin_traffic_by_type(inputs)
	if (locale === "tr") return tr_admin_traffic_by_type(inputs)
	if (locale === "zh") return zh_admin_traffic_by_type(inputs)
	if (locale === "ja") return ja_admin_traffic_by_type(inputs)
	return en_admin_traffic_by_type(inputs)
});

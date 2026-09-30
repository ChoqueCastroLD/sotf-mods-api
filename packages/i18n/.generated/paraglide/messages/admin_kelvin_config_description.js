/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_Config_DescriptionInputs */

const en_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Applies to new requests within a minute.`)
};

const es_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se aplica a las peticiones nuevas en menos de un minuto.`)
};

const de_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gilt innerhalb einer Minute für neue Anfragen.`)
};

const fr_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`S’applique aux nouvelles requêtes en moins d’une minute.`)
};

const it_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si applica alle nuove richieste entro un minuto.`)
};

const nl_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geldt binnen een minuut voor nieuwe verzoeken.`)
};

const pl_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obowiązuje dla nowych żądań w ciągu minuty.`)
};

const pt_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vale para novas requisições em até um minuto.`)
};

const ru_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Применяется к новым запросам в течение минуты.`)
};

const sv_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gäller nya anrop inom en minut.`)
};

const tr_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni isteklere bir dakika içinde uygulanır.`)
};

const zh_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`一分钟内对新请求生效。`)
};

const ja_admin_kelvin_config_description = /** @type {(inputs: Admin_Kelvin_Config_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 分以内に新しいリクエストへ適用されます。`)
};

/**
* | output |
* | --- |
* | "Applies to new requests within a minute." |
*
* @param {Admin_Kelvin_Config_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_config_description = /** @type {((inputs?: Admin_Kelvin_Config_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_Config_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_config_description(inputs)
	if (locale === "de") return de_admin_kelvin_config_description(inputs)
	if (locale === "fr") return fr_admin_kelvin_config_description(inputs)
	if (locale === "it") return it_admin_kelvin_config_description(inputs)
	if (locale === "nl") return nl_admin_kelvin_config_description(inputs)
	if (locale === "pl") return pl_admin_kelvin_config_description(inputs)
	if (locale === "pt") return pt_admin_kelvin_config_description(inputs)
	if (locale === "ru") return ru_admin_kelvin_config_description(inputs)
	if (locale === "sv") return sv_admin_kelvin_config_description(inputs)
	if (locale === "tr") return tr_admin_kelvin_config_description(inputs)
	if (locale === "zh") return zh_admin_kelvin_config_description(inputs)
	if (locale === "ja") return ja_admin_kelvin_config_description(inputs)
	return en_admin_kelvin_config_description(inputs)
});

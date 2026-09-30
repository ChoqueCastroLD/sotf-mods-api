/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Field_TimezoneInputs */

const en_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In your time zone.`)
};

const es_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En tu zona horaria.`)
};

const de_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In deiner Zeitzone.`)
};

const fr_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dans votre fuseau horaire.`)
};

const it_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nel tuo fuso orario.`)
};

const nl_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In jouw tijdzone.`)
};

const pl_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W twojej strefie czasowej.`)
};

const pt_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No seu fuso horário.`)
};

const ru_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В вашем часовом поясе.`)
};

const sv_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I din tidszon.`)
};

const tr_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Senin saat diliminde.`)
};

const zh_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使用你的时区。`)
};

const ja_admin_ann_field_timezone = /** @type {(inputs: Admin_Ann_Field_TimezoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたのタイムゾーンで入力します。`)
};

/**
* | output |
* | --- |
* | "In your time zone." |
*
* @param {Admin_Ann_Field_TimezoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_field_timezone = /** @type {((inputs?: Admin_Ann_Field_TimezoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Field_TimezoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_field_timezone(inputs)
	if (locale === "de") return de_admin_ann_field_timezone(inputs)
	if (locale === "fr") return fr_admin_ann_field_timezone(inputs)
	if (locale === "it") return it_admin_ann_field_timezone(inputs)
	if (locale === "nl") return nl_admin_ann_field_timezone(inputs)
	if (locale === "pl") return pl_admin_ann_field_timezone(inputs)
	if (locale === "pt") return pt_admin_ann_field_timezone(inputs)
	if (locale === "ru") return ru_admin_ann_field_timezone(inputs)
	if (locale === "sv") return sv_admin_ann_field_timezone(inputs)
	if (locale === "tr") return tr_admin_ann_field_timezone(inputs)
	if (locale === "zh") return zh_admin_ann_field_timezone(inputs)
	if (locale === "ja") return ja_admin_ann_field_timezone(inputs)
	return en_admin_ann_field_timezone(inputs)
});

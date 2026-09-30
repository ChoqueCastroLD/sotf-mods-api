/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown>, seconds: NonNullable<unknown> }} Admin_Limits_DefaultInputs */

const en_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("en", i?.seconds, {});return /** @type {LocalizedString} */ (`Default: ${i?.max} per ${seconds__number} s`)
};

const es_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("es", i?.seconds, {});return /** @type {LocalizedString} */ (`Por defecto: ${i?.max} cada ${seconds__number} s`)
};

const de_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("de", i?.seconds, {});return /** @type {LocalizedString} */ (`Standard: ${i?.max} pro ${seconds__number} s`)
};

const fr_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("fr", i?.seconds, {});return /** @type {LocalizedString} */ (`Par défaut : ${i?.max} par ${seconds__number} s`)
};

const it_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("it", i?.seconds, {});return /** @type {LocalizedString} */ (`Predefinito: ${i?.max} ogni ${seconds__number} s`)
};

const nl_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("nl", i?.seconds, {});return /** @type {LocalizedString} */ (`Standaard: ${i?.max} per ${seconds__number} s`)
};

const pl_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("pl", i?.seconds, {});return /** @type {LocalizedString} */ (`Domyślnie: ${i?.max} na ${seconds__number} s`)
};

const pt_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("pt", i?.seconds, {});return /** @type {LocalizedString} */ (`Padrão: ${i?.max} a cada ${seconds__number} s`)
};

const ru_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("ru", i?.seconds, {});return /** @type {LocalizedString} */ (`По умолчанию: ${i?.max} за ${seconds__number} с`)
};

const sv_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("sv", i?.seconds, {});return /** @type {LocalizedString} */ (`Standard: ${i?.max} per ${seconds__number} s`)
};

const tr_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("tr", i?.seconds, {});return /** @type {LocalizedString} */ (`Varsayılan: ${seconds__number} sn’de ${i?.max}`)
};

const zh_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("zh", i?.seconds, {});return /** @type {LocalizedString} */ (`默认：每 ${seconds__number} 秒 ${i?.max} 次`)
};

const ja_admin_limits_default = /** @type {(inputs: Admin_Limits_DefaultInputs) => LocalizedString} */ (i) => {
	const seconds__number = registry.number("ja", i?.seconds, {});return /** @type {LocalizedString} */ (`既定：${seconds__number} 秒あたり ${i?.max} 回`)
};

/**
* | output |
* | --- |
* | "Default: {max} per {seconds__number} s" |
*
* @param {Admin_Limits_DefaultInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_default = /** @type {((inputs: Admin_Limits_DefaultInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_DefaultInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_default(inputs)
	if (locale === "de") return de_admin_limits_default(inputs)
	if (locale === "fr") return fr_admin_limits_default(inputs)
	if (locale === "it") return it_admin_limits_default(inputs)
	if (locale === "nl") return nl_admin_limits_default(inputs)
	if (locale === "pl") return pl_admin_limits_default(inputs)
	if (locale === "pt") return pt_admin_limits_default(inputs)
	if (locale === "ru") return ru_admin_limits_default(inputs)
	if (locale === "sv") return sv_admin_limits_default(inputs)
	if (locale === "tr") return tr_admin_limits_default(inputs)
	if (locale === "zh") return zh_admin_limits_default(inputs)
	if (locale === "ja") return ja_admin_limits_default(inputs)
	return en_admin_limits_default(inputs)
});

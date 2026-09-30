/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Tax_Retired_BadgeInputs */

const en_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retired`)
};

const es_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirada`)
};

const de_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stillgelegt`)
};

const fr_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Retirée`)
};

const it_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ritirata`)
};

const nl_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ingetrokken`)
};

const pl_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wycofana`)
};

const pt_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aposentada`)
};

const ru_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выведена`)
};

const sv_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pensionerad`)
};

const tr_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Emekli`)
};

const zh_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已停用`)
};

const ja_admin_tax_retired_badge = /** @type {(inputs: Admin_Tax_Retired_BadgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`引退済み`)
};

/**
* | output |
* | --- |
* | "Retired" |
*
* @param {Admin_Tax_Retired_BadgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_tax_retired_badge = /** @type {((inputs?: Admin_Tax_Retired_BadgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Tax_Retired_BadgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_tax_retired_badge(inputs)
	if (locale === "de") return de_admin_tax_retired_badge(inputs)
	if (locale === "fr") return fr_admin_tax_retired_badge(inputs)
	if (locale === "it") return it_admin_tax_retired_badge(inputs)
	if (locale === "nl") return nl_admin_tax_retired_badge(inputs)
	if (locale === "pl") return pl_admin_tax_retired_badge(inputs)
	if (locale === "pt") return pt_admin_tax_retired_badge(inputs)
	if (locale === "ru") return ru_admin_tax_retired_badge(inputs)
	if (locale === "sv") return sv_admin_tax_retired_badge(inputs)
	if (locale === "tr") return tr_admin_tax_retired_badge(inputs)
	if (locale === "zh") return zh_admin_tax_retired_badge(inputs)
	if (locale === "ja") return ja_admin_tax_retired_badge(inputs)
	return en_admin_tax_retired_badge(inputs)
});

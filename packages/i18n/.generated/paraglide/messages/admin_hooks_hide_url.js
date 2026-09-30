/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Hide_UrlInputs */

const en_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hide address`)
};

const es_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar dirección`)
};

const de_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse verbergen`)
};

const fr_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Masquer l’adresse`)
};

const it_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nascondi indirizzo`)
};

const nl_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres verbergen`)
};

const pl_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ukryj adres`)
};

const pt_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ocultar endereço`)
};

const ru_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скрыть адрес`)
};

const sv_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dölj adress`)
};

const tr_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresi gizle`)
};

const zh_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏地址`)
};

const ja_admin_hooks_hide_url = /** @type {(inputs: Admin_Hooks_Hide_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレスを隠す`)
};

/**
* | output |
* | --- |
* | "Hide address" |
*
* @param {Admin_Hooks_Hide_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_hide_url = /** @type {((inputs?: Admin_Hooks_Hide_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Hide_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_hide_url(inputs)
	if (locale === "de") return de_admin_hooks_hide_url(inputs)
	if (locale === "fr") return fr_admin_hooks_hide_url(inputs)
	if (locale === "it") return it_admin_hooks_hide_url(inputs)
	if (locale === "nl") return nl_admin_hooks_hide_url(inputs)
	if (locale === "pl") return pl_admin_hooks_hide_url(inputs)
	if (locale === "pt") return pt_admin_hooks_hide_url(inputs)
	if (locale === "ru") return ru_admin_hooks_hide_url(inputs)
	if (locale === "sv") return sv_admin_hooks_hide_url(inputs)
	if (locale === "tr") return tr_admin_hooks_hide_url(inputs)
	if (locale === "zh") return zh_admin_hooks_hide_url(inputs)
	if (locale === "ja") return ja_admin_hooks_hide_url(inputs)
	return en_admin_hooks_hide_url(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Show_UrlInputs */

const en_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Show address`)
};

const es_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar dirección`)
};

const de_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresse anzeigen`)
};

const fr_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afficher l’adresse`)
};

const it_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostra indirizzo`)
};

const nl_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adres tonen`)
};

const pl_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pokaż adres`)
};

const pt_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mostrar endereço`)
};

const ru_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показать адрес`)
};

const sv_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa adress`)
};

const tr_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Adresi göster`)
};

const zh_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示地址`)
};

const ja_admin_hooks_show_url = /** @type {(inputs: Admin_Hooks_Show_UrlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アドレスを表示`)
};

/**
* | output |
* | --- |
* | "Show address" |
*
* @param {Admin_Hooks_Show_UrlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_show_url = /** @type {((inputs?: Admin_Hooks_Show_UrlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Show_UrlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_show_url(inputs)
	if (locale === "de") return de_admin_hooks_show_url(inputs)
	if (locale === "fr") return fr_admin_hooks_show_url(inputs)
	if (locale === "it") return it_admin_hooks_show_url(inputs)
	if (locale === "nl") return nl_admin_hooks_show_url(inputs)
	if (locale === "pl") return pl_admin_hooks_show_url(inputs)
	if (locale === "pt") return pt_admin_hooks_show_url(inputs)
	if (locale === "ru") return ru_admin_hooks_show_url(inputs)
	if (locale === "sv") return sv_admin_hooks_show_url(inputs)
	if (locale === "tr") return tr_admin_hooks_show_url(inputs)
	if (locale === "zh") return zh_admin_hooks_show_url(inputs)
	if (locale === "ja") return ja_admin_hooks_show_url(inputs)
	return en_admin_hooks_show_url(inputs)
});

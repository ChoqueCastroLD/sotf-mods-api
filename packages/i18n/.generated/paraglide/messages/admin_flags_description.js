/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Flags_DescriptionInputs */

const en_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Switch features on or off without a deploy.`)
};

const es_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activa o desactiva funciones sin desplegar.`)
};

const de_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Funktionen ohne Deployment ein- oder ausschalten.`)
};

const fr_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activez ou désactivez des fonctionnalités sans déploiement.`)
};

const it_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attiva o disattiva funzioni senza un deploy.`)
};

const nl_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zet functies aan of uit zonder deploy.`)
};

const pl_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Włączaj i wyłączaj funkcje bez wdrożenia.`)
};

const pt_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ligue ou desligue recursos sem deploy.`)
};

const ru_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Включайте и выключайте функции без деплоя.`)
};

const sv_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Slå på eller av funktioner utan driftsättning.`)
};

const tr_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özellikleri dağıtım yapmadan aç veya kapat.`)
};

const zh_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无需部署即可开启或关闭功能。`)
};

const ja_admin_flags_description = /** @type {(inputs: Admin_Flags_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`デプロイなしで機能をオン・オフします。`)
};

/**
* | output |
* | --- |
* | "Switch features on or off without a deploy." |
*
* @param {Admin_Flags_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_flags_description = /** @type {((inputs?: Admin_Flags_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Flags_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_flags_description(inputs)
	if (locale === "de") return de_admin_flags_description(inputs)
	if (locale === "fr") return fr_admin_flags_description(inputs)
	if (locale === "it") return it_admin_flags_description(inputs)
	if (locale === "nl") return nl_admin_flags_description(inputs)
	if (locale === "pl") return pl_admin_flags_description(inputs)
	if (locale === "pt") return pt_admin_flags_description(inputs)
	if (locale === "ru") return ru_admin_flags_description(inputs)
	if (locale === "sv") return sv_admin_flags_description(inputs)
	if (locale === "tr") return tr_admin_flags_description(inputs)
	if (locale === "zh") return zh_admin_flags_description(inputs)
	if (locale === "ja") return ja_admin_flags_description(inputs)
	return en_admin_flags_description(inputs)
});

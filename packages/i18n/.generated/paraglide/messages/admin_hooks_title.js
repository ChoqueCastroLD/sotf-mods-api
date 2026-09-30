/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_TitleInputs */

const en_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord webhooks`)
};

const es_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks de Discord`)
};

const de_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord-Webhooks`)
};

const fr_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks Discord`)
};

const it_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhook di Discord`)
};

const nl_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord-webhooks`)
};

const pl_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooki Discorda`)
};

const pt_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Webhooks do Discord`)
};

const ru_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вебхуки Discord`)
};

const sv_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord-webhooks`)
};

const tr_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord webhook’ları`)
};

const zh_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord Webhook`)
};

const ja_admin_hooks_title = /** @type {(inputs: Admin_Hooks_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Discord Webhook`)
};

/**
* | output |
* | --- |
* | "Discord webhooks" |
*
* @param {Admin_Hooks_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_title = /** @type {((inputs?: Admin_Hooks_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_title(inputs)
	if (locale === "de") return de_admin_hooks_title(inputs)
	if (locale === "fr") return fr_admin_hooks_title(inputs)
	if (locale === "it") return it_admin_hooks_title(inputs)
	if (locale === "nl") return nl_admin_hooks_title(inputs)
	if (locale === "pl") return pl_admin_hooks_title(inputs)
	if (locale === "pt") return pt_admin_hooks_title(inputs)
	if (locale === "ru") return ru_admin_hooks_title(inputs)
	if (locale === "sv") return sv_admin_hooks_title(inputs)
	if (locale === "tr") return tr_admin_hooks_title(inputs)
	if (locale === "zh") return zh_admin_hooks_title(inputs)
	if (locale === "ja") return ja_admin_hooks_title(inputs)
	return en_admin_hooks_title(inputs)
});

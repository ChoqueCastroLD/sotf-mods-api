/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Url_HintInputs */

const en_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const es_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const de_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const fr_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const it_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const nl_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const pl_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const pt_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const ru_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const sv_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const tr_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const zh_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

const ja_admin_hooks_url_hint = /** @type {(inputs: Admin_Hooks_Url_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`https://discord.com/api/webhooks/…`)
};

/**
* | output |
* | --- |
* | "https://discord.com/api/webhooks/…" |
*
* @param {Admin_Hooks_Url_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_url_hint = /** @type {((inputs?: Admin_Hooks_Url_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Url_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_url_hint(inputs)
	if (locale === "de") return de_admin_hooks_url_hint(inputs)
	if (locale === "fr") return fr_admin_hooks_url_hint(inputs)
	if (locale === "it") return it_admin_hooks_url_hint(inputs)
	if (locale === "nl") return nl_admin_hooks_url_hint(inputs)
	if (locale === "pl") return pl_admin_hooks_url_hint(inputs)
	if (locale === "pt") return pt_admin_hooks_url_hint(inputs)
	if (locale === "ru") return ru_admin_hooks_url_hint(inputs)
	if (locale === "sv") return sv_admin_hooks_url_hint(inputs)
	if (locale === "tr") return tr_admin_hooks_url_hint(inputs)
	if (locale === "zh") return zh_admin_hooks_url_hint(inputs)
	if (locale === "ja") return ja_admin_hooks_url_hint(inputs)
	return en_admin_hooks_url_hint(inputs)
});

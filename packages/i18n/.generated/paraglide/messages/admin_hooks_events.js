/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_EventsInputs */

const en_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Announce`)
};

const es_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anunciar`)
};

const de_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ankündigen`)
};

const fr_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annoncer`)
};

const it_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuncia`)
};

const nl_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aankondigen`)
};

const pl_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ogłaszaj`)
};

const pt_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anunciar`)
};

const ru_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщать о`)
};

const sv_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meddela`)
};

const tr_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyur`)
};

const zh_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`发布内容`)
};

const ja_admin_hooks_events = /** @type {(inputs: Admin_Hooks_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告知する内容`)
};

/**
* | output |
* | --- |
* | "Announce" |
*
* @param {Admin_Hooks_EventsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_events = /** @type {((inputs?: Admin_Hooks_EventsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_EventsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_events(inputs)
	if (locale === "de") return de_admin_hooks_events(inputs)
	if (locale === "fr") return fr_admin_hooks_events(inputs)
	if (locale === "it") return it_admin_hooks_events(inputs)
	if (locale === "nl") return nl_admin_hooks_events(inputs)
	if (locale === "pl") return pl_admin_hooks_events(inputs)
	if (locale === "pt") return pt_admin_hooks_events(inputs)
	if (locale === "ru") return ru_admin_hooks_events(inputs)
	if (locale === "sv") return sv_admin_hooks_events(inputs)
	if (locale === "tr") return tr_admin_hooks_events(inputs)
	if (locale === "zh") return zh_admin_hooks_events(inputs)
	if (locale === "ja") return ja_admin_hooks_events(inputs)
	return en_admin_hooks_events(inputs)
});

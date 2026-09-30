/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Event_Mod_PublishedInputs */

const en_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New mods`)
};

const es_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods nuevos`)
};

const de_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue Mods`)
};

const fr_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveaux mods`)
};

const it_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuove mod`)
};

const nl_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe mods`)
};

const pl_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe mody`)
};

const pt_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods novos`)
};

const ru_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новые моды`)
};

const sv_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya moddar`)
};

const tr_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni modlar`)
};

const zh_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新模组`)
};

const ja_admin_hooks_event_mod_published = /** @type {(inputs: Admin_Hooks_Event_Mod_PublishedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しい MOD`)
};

/**
* | output |
* | --- |
* | "New mods" |
*
* @param {Admin_Hooks_Event_Mod_PublishedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_event_mod_published = /** @type {((inputs?: Admin_Hooks_Event_Mod_PublishedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Event_Mod_PublishedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_event_mod_published(inputs)
	if (locale === "de") return de_admin_hooks_event_mod_published(inputs)
	if (locale === "fr") return fr_admin_hooks_event_mod_published(inputs)
	if (locale === "it") return it_admin_hooks_event_mod_published(inputs)
	if (locale === "nl") return nl_admin_hooks_event_mod_published(inputs)
	if (locale === "pl") return pl_admin_hooks_event_mod_published(inputs)
	if (locale === "pt") return pt_admin_hooks_event_mod_published(inputs)
	if (locale === "ru") return ru_admin_hooks_event_mod_published(inputs)
	if (locale === "sv") return sv_admin_hooks_event_mod_published(inputs)
	if (locale === "tr") return tr_admin_hooks_event_mod_published(inputs)
	if (locale === "zh") return zh_admin_hooks_event_mod_published(inputs)
	if (locale === "ja") return ja_admin_hooks_event_mod_published(inputs)
	return en_admin_hooks_event_mod_published(inputs)
});

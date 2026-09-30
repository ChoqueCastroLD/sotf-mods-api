/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Event_MilestoneInputs */

const en_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`10k download milestones`)
};

const es_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hitos de 10k descargas`)
};

const de_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meilensteine von 10.000 Downloads`)
};

const fr_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Paliers de 10 000 téléchargements`)
};

const it_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traguardi di 10.000 download`)
};

const nl_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mijlpalen van 10.000 downloads`)
};

const pl_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Progi 10 tys. pobrań`)
};

const pt_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Marcos de 10 mil downloads`)
};

const ru_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рубежи в 10 тыс. скачиваний`)
};

const sv_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Milstolpar på 10 000 nedladdningar`)
};

const tr_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`10 bin indirme kilometre taşları`)
};

const zh_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 万次下载里程碑`)
};

const ja_admin_hooks_event_milestone = /** @type {(inputs: Admin_Hooks_Event_MilestoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 万ダウンロードの節目`)
};

/**
* | output |
* | --- |
* | "10k download milestones" |
*
* @param {Admin_Hooks_Event_MilestoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_event_milestone = /** @type {((inputs?: Admin_Hooks_Event_MilestoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Event_MilestoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_event_milestone(inputs)
	if (locale === "de") return de_admin_hooks_event_milestone(inputs)
	if (locale === "fr") return fr_admin_hooks_event_milestone(inputs)
	if (locale === "it") return it_admin_hooks_event_milestone(inputs)
	if (locale === "nl") return nl_admin_hooks_event_milestone(inputs)
	if (locale === "pl") return pl_admin_hooks_event_milestone(inputs)
	if (locale === "pt") return pt_admin_hooks_event_milestone(inputs)
	if (locale === "ru") return ru_admin_hooks_event_milestone(inputs)
	if (locale === "sv") return sv_admin_hooks_event_milestone(inputs)
	if (locale === "tr") return tr_admin_hooks_event_milestone(inputs)
	if (locale === "zh") return zh_admin_hooks_event_milestone(inputs)
	if (locale === "ja") return ja_admin_hooks_event_milestone(inputs)
	return en_admin_hooks_event_milestone(inputs)
});

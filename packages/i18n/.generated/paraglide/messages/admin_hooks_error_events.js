/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Hooks_Error_EventsInputs */

const en_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose at least one event.`)
};

const es_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige al menos un evento.`)
};

const de_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle mindestens ein Ereignis.`)
};

const fr_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez au moins un événement.`)
};

const it_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli almeno un evento.`)
};

const nl_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies minstens één gebeurtenis.`)
};

const pl_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz co najmniej jedno zdarzenie.`)
};

const pt_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha pelo menos um evento.`)
};

const ru_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите хотя бы одно событие.`)
};

const sv_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj minst en händelse.`)
};

const tr_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az bir olay seç.`)
};

const zh_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请至少选择一个事件。`)
};

const ja_admin_hooks_error_events = /** @type {(inputs: Admin_Hooks_Error_EventsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`イベントを 1 つ以上選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose at least one event." |
*
* @param {Admin_Hooks_Error_EventsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_hooks_error_events = /** @type {((inputs?: Admin_Hooks_Error_EventsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Hooks_Error_EventsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_hooks_error_events(inputs)
	if (locale === "de") return de_admin_hooks_error_events(inputs)
	if (locale === "fr") return fr_admin_hooks_error_events(inputs)
	if (locale === "it") return it_admin_hooks_error_events(inputs)
	if (locale === "nl") return nl_admin_hooks_error_events(inputs)
	if (locale === "pl") return pl_admin_hooks_error_events(inputs)
	if (locale === "pt") return pt_admin_hooks_error_events(inputs)
	if (locale === "ru") return ru_admin_hooks_error_events(inputs)
	if (locale === "sv") return sv_admin_hooks_error_events(inputs)
	if (locale === "tr") return tr_admin_hooks_error_events(inputs)
	if (locale === "zh") return zh_admin_hooks_error_events(inputs)
	if (locale === "ja") return ja_admin_hooks_error_events(inputs)
	return en_admin_hooks_error_events(inputs)
});

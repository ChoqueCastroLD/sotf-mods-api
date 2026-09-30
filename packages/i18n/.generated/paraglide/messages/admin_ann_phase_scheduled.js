/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Phase_ScheduledInputs */

const en_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scheduled`)
};

const es_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programado`)
};

const de_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geplant`)
};

const fr_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programmée`)
};

const it_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Programmato`)
};

const nl_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gepland`)
};

const pl_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaplanowane`)
};

const pt_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agendado`)
};

const ru_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Запланировано`)
};

const sv_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schemalagt`)
};

const tr_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Planlandı`)
};

const zh_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已排期`)
};

const ja_admin_ann_phase_scheduled = /** @type {(inputs: Admin_Ann_Phase_ScheduledInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`予約済み`)
};

/**
* | output |
* | --- |
* | "Scheduled" |
*
* @param {Admin_Ann_Phase_ScheduledInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_phase_scheduled = /** @type {((inputs?: Admin_Ann_Phase_ScheduledInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Phase_ScheduledInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_phase_scheduled(inputs)
	if (locale === "de") return de_admin_ann_phase_scheduled(inputs)
	if (locale === "fr") return fr_admin_ann_phase_scheduled(inputs)
	if (locale === "it") return it_admin_ann_phase_scheduled(inputs)
	if (locale === "nl") return nl_admin_ann_phase_scheduled(inputs)
	if (locale === "pl") return pl_admin_ann_phase_scheduled(inputs)
	if (locale === "pt") return pt_admin_ann_phase_scheduled(inputs)
	if (locale === "ru") return ru_admin_ann_phase_scheduled(inputs)
	if (locale === "sv") return sv_admin_ann_phase_scheduled(inputs)
	if (locale === "tr") return tr_admin_ann_phase_scheduled(inputs)
	if (locale === "zh") return zh_admin_ann_phase_scheduled(inputs)
	if (locale === "ja") return ja_admin_ann_phase_scheduled(inputs)
	return en_admin_ann_phase_scheduled(inputs)
});

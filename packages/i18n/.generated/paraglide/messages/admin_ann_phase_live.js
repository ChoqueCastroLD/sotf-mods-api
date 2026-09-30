/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Phase_LiveInputs */

const en_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live`)
};

const es_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activo`)
};

const de_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktiv`)
};

const fr_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En ligne`)
};

const it_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attivo`)
};

const nl_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actief`)
};

const pl_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktywne`)
};

const pt_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No ar`)
};

const ru_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывается`)
};

const sv_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktivt`)
};

const tr_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayında`)
};

const zh_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`展示中`)
};

const ja_admin_ann_phase_live = /** @type {(inputs: Admin_Ann_Phase_LiveInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示中`)
};

/**
* | output |
* | --- |
* | "Live" |
*
* @param {Admin_Ann_Phase_LiveInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_phase_live = /** @type {((inputs?: Admin_Ann_Phase_LiveInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Phase_LiveInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_phase_live(inputs)
	if (locale === "de") return de_admin_ann_phase_live(inputs)
	if (locale === "fr") return fr_admin_ann_phase_live(inputs)
	if (locale === "it") return it_admin_ann_phase_live(inputs)
	if (locale === "nl") return nl_admin_ann_phase_live(inputs)
	if (locale === "pl") return pl_admin_ann_phase_live(inputs)
	if (locale === "pt") return pt_admin_ann_phase_live(inputs)
	if (locale === "ru") return ru_admin_ann_phase_live(inputs)
	if (locale === "sv") return sv_admin_ann_phase_live(inputs)
	if (locale === "tr") return tr_admin_ann_phase_live(inputs)
	if (locale === "zh") return zh_admin_ann_phase_live(inputs)
	if (locale === "ja") return ja_admin_ann_phase_live(inputs)
	return en_admin_ann_phase_live(inputs)
});

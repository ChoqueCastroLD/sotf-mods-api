/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_Phase_EndedInputs */

const en_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ended`)
};

const es_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminado`)
};

const de_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beendet`)
};

const fr_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminée`)
};

const it_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Terminato`)
};

const nl_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beëindigd`)
};

const pl_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zakończone`)
};

const pt_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Encerrado`)
};

const ru_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Завершено`)
};

const sv_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avslutat`)
};

const tr_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bitti`)
};

const zh_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已结束`)
};

const ja_admin_ann_phase_ended = /** @type {(inputs: Admin_Ann_Phase_EndedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`終了`)
};

/**
* | output |
* | --- |
* | "Ended" |
*
* @param {Admin_Ann_Phase_EndedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_phase_ended = /** @type {((inputs?: Admin_Ann_Phase_EndedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_Phase_EndedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_phase_ended(inputs)
	if (locale === "de") return de_admin_ann_phase_ended(inputs)
	if (locale === "fr") return fr_admin_ann_phase_ended(inputs)
	if (locale === "it") return it_admin_ann_phase_ended(inputs)
	if (locale === "nl") return nl_admin_ann_phase_ended(inputs)
	if (locale === "pl") return pl_admin_ann_phase_ended(inputs)
	if (locale === "pt") return pt_admin_ann_phase_ended(inputs)
	if (locale === "ru") return ru_admin_ann_phase_ended(inputs)
	if (locale === "sv") return sv_admin_ann_phase_ended(inputs)
	if (locale === "tr") return tr_admin_ann_phase_ended(inputs)
	if (locale === "zh") return zh_admin_ann_phase_ended(inputs)
	if (locale === "ja") return ja_admin_ann_phase_ended(inputs)
	return en_admin_ann_phase_ended(inputs)
});

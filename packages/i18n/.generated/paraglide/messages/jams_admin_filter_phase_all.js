/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Admin_Filter_Phase_AllInputs */

const en_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Any phase`)
};

const es_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cualquier fase`)
};

const de_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jede Phase`)
};

const fr_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toutes les phases`)
};

const it_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualsiasi fase`)
};

const nl_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke fase`)
};

const pl_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dowolna faza`)
};

const pt_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualquer fase`)
};

const ru_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Любая фаза`)
};

const sv_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alla faser`)
};

const tr_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tüm aşamalar`)
};

const zh_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`任意阶段`)
};

const ja_jams_admin_filter_phase_all = /** @type {(inputs: Jams_Admin_Filter_Phase_AllInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すべてのフェーズ`)
};

/**
* | output |
* | --- |
* | "Any phase" |
*
* @param {Jams_Admin_Filter_Phase_AllInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_admin_filter_phase_all = /** @type {((inputs?: Jams_Admin_Filter_Phase_AllInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Admin_Filter_Phase_AllInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_admin_filter_phase_all(inputs)
	if (locale === "de") return de_jams_admin_filter_phase_all(inputs)
	if (locale === "fr") return fr_jams_admin_filter_phase_all(inputs)
	if (locale === "it") return it_jams_admin_filter_phase_all(inputs)
	if (locale === "nl") return nl_jams_admin_filter_phase_all(inputs)
	if (locale === "pl") return pl_jams_admin_filter_phase_all(inputs)
	if (locale === "pt") return pt_jams_admin_filter_phase_all(inputs)
	if (locale === "ru") return ru_jams_admin_filter_phase_all(inputs)
	if (locale === "sv") return sv_jams_admin_filter_phase_all(inputs)
	if (locale === "tr") return tr_jams_admin_filter_phase_all(inputs)
	if (locale === "zh") return zh_jams_admin_filter_phase_all(inputs)
	if (locale === "ja") return ja_jams_admin_filter_phase_all(inputs)
	return en_jams_admin_filter_phase_all(inputs)
});

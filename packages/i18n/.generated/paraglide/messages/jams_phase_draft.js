/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Phase_DraftInputs */

const en_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Draft`)
};

const es_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Borrador`)
};

const de_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entwurf`)
};

const fr_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brouillon`)
};

const it_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bozza`)
};

const nl_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Concept`)
};

const pl_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szkic`)
};

const pt_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rascunho`)
};

const ru_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Черновик`)
};

const sv_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utkast`)
};

const tr_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taslak`)
};

const zh_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`草稿`)
};

const ja_jams_phase_draft = /** @type {(inputs: Jams_Phase_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書き`)
};

/**
* | output |
* | --- |
* | "Draft" |
*
* @param {Jams_Phase_DraftInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_phase_draft = /** @type {((inputs?: Jams_Phase_DraftInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Phase_DraftInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_phase_draft(inputs)
	if (locale === "de") return de_jams_phase_draft(inputs)
	if (locale === "fr") return fr_jams_phase_draft(inputs)
	if (locale === "it") return it_jams_phase_draft(inputs)
	if (locale === "nl") return nl_jams_phase_draft(inputs)
	if (locale === "pl") return pl_jams_phase_draft(inputs)
	if (locale === "pt") return pt_jams_phase_draft(inputs)
	if (locale === "ru") return ru_jams_phase_draft(inputs)
	if (locale === "sv") return sv_jams_phase_draft(inputs)
	if (locale === "tr") return tr_jams_phase_draft(inputs)
	if (locale === "zh") return zh_jams_phase_draft(inputs)
	if (locale === "ja") return ja_jams_phase_draft(inputs)
	return en_jams_phase_draft(inputs)
});

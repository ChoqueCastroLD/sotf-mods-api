/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Max_CoauthorsInputs */

const en_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-authors per entry`)
};

const es_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautores por participación`)
};

const de_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-Autoren pro Beitrag`)
};

const fr_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coauteurs par participation`)
};

const it_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautori per iscrizione`)
};

const nl_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Co-auteurs per inzending`)
};

const pl_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Współautorów na zgłoszenie`)
};

const pt_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coautores por inscrição`)
};

const ru_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Соавторов на работу`)
};

const sv_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Medförfattare per bidrag`)
};

const tr_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru başına ortak yapımcı`)
};

const zh_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每件作品的合作者数`)
};

const ja_jams_editor_max_coauthors = /** @type {(inputs: Jams_Editor_Max_CoauthorsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1作品あたりの共同制作者数`)
};

/**
* | output |
* | --- |
* | "Co-authors per entry" |
*
* @param {Jams_Editor_Max_CoauthorsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_max_coauthors = /** @type {((inputs?: Jams_Editor_Max_CoauthorsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Max_CoauthorsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_max_coauthors(inputs)
	if (locale === "de") return de_jams_editor_max_coauthors(inputs)
	if (locale === "fr") return fr_jams_editor_max_coauthors(inputs)
	if (locale === "it") return it_jams_editor_max_coauthors(inputs)
	if (locale === "nl") return nl_jams_editor_max_coauthors(inputs)
	if (locale === "pl") return pl_jams_editor_max_coauthors(inputs)
	if (locale === "pt") return pt_jams_editor_max_coauthors(inputs)
	if (locale === "ru") return ru_jams_editor_max_coauthors(inputs)
	if (locale === "sv") return sv_jams_editor_max_coauthors(inputs)
	if (locale === "tr") return tr_jams_editor_max_coauthors(inputs)
	if (locale === "zh") return zh_jams_editor_max_coauthors(inputs)
	if (locale === "ja") return ja_jams_editor_max_coauthors(inputs)
	return en_jams_editor_max_coauthors(inputs)
});

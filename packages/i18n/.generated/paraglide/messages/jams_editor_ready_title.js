/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Ready_TitleInputs */

const en_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Before you announce`)
};

const es_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes de anunciar`)
};

const de_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vor der Ankündigung`)
};

const fr_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avant d’annoncer`)
};

const it_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prima di annunciare`)
};

const nl_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voor je aankondigt`)
};

const pl_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przed ogłoszeniem`)
};

const pt_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antes de anunciar`)
};

const ru_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Перед объявлением`)
};

const sv_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Innan du annonserar`)
};

const tr_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duyurmadan önce`)
};

const zh_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公布之前`)
};

const ja_jams_editor_ready_title = /** @type {(inputs: Jams_Editor_Ready_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告知の前に`)
};

/**
* | output |
* | --- |
* | "Before you announce" |
*
* @param {Jams_Editor_Ready_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_ready_title = /** @type {((inputs?: Jams_Editor_Ready_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Ready_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_ready_title(inputs)
	if (locale === "de") return de_jams_editor_ready_title(inputs)
	if (locale === "fr") return fr_jams_editor_ready_title(inputs)
	if (locale === "it") return it_jams_editor_ready_title(inputs)
	if (locale === "nl") return nl_jams_editor_ready_title(inputs)
	if (locale === "pl") return pl_jams_editor_ready_title(inputs)
	if (locale === "pt") return pt_jams_editor_ready_title(inputs)
	if (locale === "ru") return ru_jams_editor_ready_title(inputs)
	if (locale === "sv") return sv_jams_editor_ready_title(inputs)
	if (locale === "tr") return tr_jams_editor_ready_title(inputs)
	if (locale === "zh") return zh_jams_editor_ready_title(inputs)
	if (locale === "ja") return ja_jams_editor_ready_title(inputs)
	return en_jams_editor_ready_title(inputs)
});

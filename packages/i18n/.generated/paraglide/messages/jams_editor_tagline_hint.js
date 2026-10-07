/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Tagline_HintInputs */

const en_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`One line under the title.`)
};

const es_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una línea bajo el título.`)
};

const de_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eine Zeile unter dem Titel.`)
};

const fr_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une ligne sous le titre.`)
};

const it_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una riga sotto il titolo.`)
};

const nl_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eén regel onder de titel.`)
};

const pl_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jedna linijka pod tytułem.`)
};

const pt_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma linha sob o título.`)
};

const ru_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одна строка под названием.`)
};

const sv_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En rad under titeln.`)
};

const tr_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başlığın altındaki tek satır.`)
};

const zh_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示在标题下方的一行文字。`)
};

const ja_jams_editor_tagline_hint = /** @type {(inputs: Jams_Editor_Tagline_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タイトルの下に表示される 1 行です。`)
};

/**
* | output |
* | --- |
* | "One line under the title." |
*
* @param {Jams_Editor_Tagline_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_tagline_hint = /** @type {((inputs?: Jams_Editor_Tagline_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Tagline_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_tagline_hint(inputs)
	if (locale === "de") return de_jams_editor_tagline_hint(inputs)
	if (locale === "fr") return fr_jams_editor_tagline_hint(inputs)
	if (locale === "it") return it_jams_editor_tagline_hint(inputs)
	if (locale === "nl") return nl_jams_editor_tagline_hint(inputs)
	if (locale === "pl") return pl_jams_editor_tagline_hint(inputs)
	if (locale === "pt") return pt_jams_editor_tagline_hint(inputs)
	if (locale === "ru") return ru_jams_editor_tagline_hint(inputs)
	if (locale === "sv") return sv_jams_editor_tagline_hint(inputs)
	if (locale === "tr") return tr_jams_editor_tagline_hint(inputs)
	if (locale === "zh") return zh_jams_editor_tagline_hint(inputs)
	if (locale === "ja") return ja_jams_editor_tagline_hint(inputs)
	return en_jams_editor_tagline_hint(inputs)
});

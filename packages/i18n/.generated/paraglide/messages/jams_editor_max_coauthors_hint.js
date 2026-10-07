/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Max_Coauthors_HintInputs */

const en_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Besides the lead author.`)
};

const es_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Además del autor principal.`)
};

const de_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zusätzlich zum Hauptautor.`)
};

const fr_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En plus de l’auteur principal.`)
};

const it_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oltre all’autore principale.`)
};

const nl_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Naast de hoofdmaker.`)
};

const pl_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oprócz głównego autora.`)
};

const pt_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Além do autor principal.`)
};

const ru_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Помимо основного автора.`)
};

const sv_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utöver huvudskaparen.`)
};

const tr_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana yazara ek olarak.`)
};

const zh_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不含主要作者。`)
};

const ja_jams_editor_max_coauthors_hint = /** @type {(inputs: Jams_Editor_Max_Coauthors_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`主な作者に加えて指定できる人数です。`)
};

/**
* | output |
* | --- |
* | "Besides the lead author." |
*
* @param {Jams_Editor_Max_Coauthors_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_max_coauthors_hint = /** @type {((inputs?: Jams_Editor_Max_Coauthors_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Max_Coauthors_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_max_coauthors_hint(inputs)
	if (locale === "de") return de_jams_editor_max_coauthors_hint(inputs)
	if (locale === "fr") return fr_jams_editor_max_coauthors_hint(inputs)
	if (locale === "it") return it_jams_editor_max_coauthors_hint(inputs)
	if (locale === "nl") return nl_jams_editor_max_coauthors_hint(inputs)
	if (locale === "pl") return pl_jams_editor_max_coauthors_hint(inputs)
	if (locale === "pt") return pt_jams_editor_max_coauthors_hint(inputs)
	if (locale === "ru") return ru_jams_editor_max_coauthors_hint(inputs)
	if (locale === "sv") return sv_jams_editor_max_coauthors_hint(inputs)
	if (locale === "tr") return tr_jams_editor_max_coauthors_hint(inputs)
	if (locale === "zh") return zh_jams_editor_max_coauthors_hint(inputs)
	if (locale === "ja") return ja_jams_editor_max_coauthors_hint(inputs)
	return en_jams_editor_max_coauthors_hint(inputs)
});

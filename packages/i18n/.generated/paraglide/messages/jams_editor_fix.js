/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_FixInputs */

const en_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fix`)
};

const es_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corregir`)
};

const de_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beheben`)
};

const fr_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corriger`)
};

const it_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Correggi`)
};

const nl_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aanvullen`)
};

const pl_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uzupełnij`)
};

const pt_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Corrigir`)
};

const ru_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Исправить`)
};

const sv_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtgärda`)
};

const tr_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzelt`)
};

const zh_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`去设置`)
};

const ja_jams_editor_fix = /** @type {(inputs: Jams_Editor_FixInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`設定する`)
};

/**
* | output |
* | --- |
* | "Fix" |
*
* @param {Jams_Editor_FixInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_fix = /** @type {((inputs?: Jams_Editor_FixInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_FixInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_fix(inputs)
	if (locale === "de") return de_jams_editor_fix(inputs)
	if (locale === "fr") return fr_jams_editor_fix(inputs)
	if (locale === "it") return it_jams_editor_fix(inputs)
	if (locale === "nl") return nl_jams_editor_fix(inputs)
	if (locale === "pl") return pl_jams_editor_fix(inputs)
	if (locale === "pt") return pt_jams_editor_fix(inputs)
	if (locale === "ru") return ru_jams_editor_fix(inputs)
	if (locale === "sv") return sv_jams_editor_fix(inputs)
	if (locale === "tr") return tr_jams_editor_fix(inputs)
	if (locale === "zh") return zh_jams_editor_fix(inputs)
	if (locale === "ja") return ja_jams_editor_fix(inputs)
	return en_jams_editor_fix(inputs)
});

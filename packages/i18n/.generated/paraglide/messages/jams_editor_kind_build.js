/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Kind_BuildInputs */

const en_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds only`)
};

const es_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo builds`)
};

const de_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Builds`)
};

const fr_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Builds uniquement`)
};

const it_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo build`)
};

const nl_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen builds`)
};

const pl_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko buildy`)
};

const pt_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Somente builds`)
};

const ru_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только сборки`)
};

const sv_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast builds`)
};

const tr_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca build'ler`)
};

const zh_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅构建`)
};

const ja_jams_editor_kind_build = /** @type {(inputs: Jams_Editor_Kind_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ビルドのみ`)
};

/**
* | output |
* | --- |
* | "Builds only" |
*
* @param {Jams_Editor_Kind_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_kind_build = /** @type {((inputs?: Jams_Editor_Kind_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Kind_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_kind_build(inputs)
	if (locale === "de") return de_jams_editor_kind_build(inputs)
	if (locale === "fr") return fr_jams_editor_kind_build(inputs)
	if (locale === "it") return it_jams_editor_kind_build(inputs)
	if (locale === "nl") return nl_jams_editor_kind_build(inputs)
	if (locale === "pl") return pl_jams_editor_kind_build(inputs)
	if (locale === "pt") return pt_jams_editor_kind_build(inputs)
	if (locale === "ru") return ru_jams_editor_kind_build(inputs)
	if (locale === "sv") return sv_jams_editor_kind_build(inputs)
	if (locale === "tr") return tr_jams_editor_kind_build(inputs)
	if (locale === "zh") return zh_jams_editor_kind_build(inputs)
	if (locale === "ja") return ja_jams_editor_kind_build(inputs)
	return en_jams_editor_kind_build(inputs)
});

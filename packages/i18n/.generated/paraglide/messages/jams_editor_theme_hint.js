/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_Theme_HintInputs */

const en_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visible to staff only while it is hidden.`)
};

const es_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo visible para el equipo mientras esté oculto.`)
};

const de_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur für das Team sichtbar, solange es verborgen ist.`)
};

const fr_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visible uniquement par l'équipe tant qu'il est masqué.`)
};

const it_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visibile solo allo staff finché è nascosto.`)
};

const nl_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen zichtbaar voor het team zolang het verborgen is.`)
};

const pl_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widoczny tylko dla zespołu, dopóki jest ukryty.`)
};

const pt_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visível só para a equipe enquanto estiver oculto.`)
};

const ru_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока тема скрыта, её видит только команда.`)
};

const sv_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast synligt för teamet så länge det är dolt.`)
};

const tr_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gizliyken yalnızca ekip görebilir.`)
};

const zh_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`隐藏期间仅工作人员可见。`)
};

const ja_jams_editor_theme_hint = /** @type {(inputs: Jams_Editor_Theme_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`非公開の間はスタッフのみ閲覧できます。`)
};

/**
* | output |
* | --- |
* | "Visible to staff only while it is hidden." |
*
* @param {Jams_Editor_Theme_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_theme_hint = /** @type {((inputs?: Jams_Editor_Theme_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Theme_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_theme_hint(inputs)
	if (locale === "de") return de_jams_editor_theme_hint(inputs)
	if (locale === "fr") return fr_jams_editor_theme_hint(inputs)
	if (locale === "it") return it_jams_editor_theme_hint(inputs)
	if (locale === "nl") return nl_jams_editor_theme_hint(inputs)
	if (locale === "pl") return pl_jams_editor_theme_hint(inputs)
	if (locale === "pt") return pt_jams_editor_theme_hint(inputs)
	if (locale === "ru") return ru_jams_editor_theme_hint(inputs)
	if (locale === "sv") return sv_jams_editor_theme_hint(inputs)
	if (locale === "tr") return tr_jams_editor_theme_hint(inputs)
	if (locale === "zh") return zh_jams_editor_theme_hint(inputs)
	if (locale === "ja") return ja_jams_editor_theme_hint(inputs)
	return en_jams_editor_theme_hint(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ phase: NonNullable<unknown> }} Jams_Editor_Force_TitleInputs */

const en_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Move the jam to "${i?.phase}"?`)
};

const es_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`¿Mover el jam a «${i?.phase}»?`)
};

const de_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam auf „${i?.phase}“ setzen?`)
};

const fr_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Passer le jam à « ${i?.phase} » ?`)
};

const it_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spostare il jam a «${i?.phase}»?`)
};

const nl_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam verplaatsen naar "${i?.phase}"?`)
};

const pl_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Przenieść jam do fazy „${i?.phase}”?`)
};

const pt_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mover o jam para "${i?.phase}"?`)
};

const ru_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Перевести джем в фазу «${i?.phase}»?`)
};

const sv_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flytta jammen till "${i?.phase}"?`)
};

const tr_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jam "${i?.phase}" aşamasına alınsın mı?`)
};

const zh_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`要将 Jam 切换到「${i?.phase}」吗？`)
};

const ja_jams_editor_force_title = /** @type {(inputs: Jams_Editor_Force_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ジャムを「${i?.phase}」に移しますか？`)
};

/**
* | output |
* | --- |
* | "Move the jam to \"{phase}\"?" |
*
* @param {Jams_Editor_Force_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_force_title = /** @type {((inputs: Jams_Editor_Force_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_Force_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_force_title(inputs)
	if (locale === "de") return de_jams_editor_force_title(inputs)
	if (locale === "fr") return fr_jams_editor_force_title(inputs)
	if (locale === "it") return it_jams_editor_force_title(inputs)
	if (locale === "nl") return nl_jams_editor_force_title(inputs)
	if (locale === "pl") return pl_jams_editor_force_title(inputs)
	if (locale === "pt") return pt_jams_editor_force_title(inputs)
	if (locale === "ru") return ru_jams_editor_force_title(inputs)
	if (locale === "sv") return sv_jams_editor_force_title(inputs)
	if (locale === "tr") return tr_jams_editor_force_title(inputs)
	if (locale === "zh") return zh_jams_editor_force_title(inputs)
	if (locale === "ja") return ja_jams_editor_force_title(inputs)
	return en_jams_editor_force_title(inputs)
});

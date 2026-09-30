/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Editor_TitleInputs */

const en_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit jam`)
};

const es_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar jam`)
};

const de_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam bearbeiten`)
};

const fr_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le jam`)
};

const it_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica jam`)
};

const nl_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam bewerken`)
};

const pl_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj jam`)
};

const pt_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar jam`)
};

const ru_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Редактирование джема`)
};

const sv_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera jam`)
};

const tr_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'i düzenle`)
};

const zh_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑 Jam`)
};

const ja_jams_editor_title = /** @type {(inputs: Jams_Editor_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムを編集`)
};

/**
* | output |
* | --- |
* | "Edit jam" |
*
* @param {Jams_Editor_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_editor_title = /** @type {((inputs?: Jams_Editor_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Editor_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_editor_title(inputs)
	if (locale === "de") return de_jams_editor_title(inputs)
	if (locale === "fr") return fr_jams_editor_title(inputs)
	if (locale === "it") return it_jams_editor_title(inputs)
	if (locale === "nl") return nl_jams_editor_title(inputs)
	if (locale === "pl") return pl_jams_editor_title(inputs)
	if (locale === "pt") return pt_jams_editor_title(inputs)
	if (locale === "ru") return ru_jams_editor_title(inputs)
	if (locale === "sv") return sv_jams_editor_title(inputs)
	if (locale === "tr") return tr_jams_editor_title(inputs)
	if (locale === "zh") return zh_jams_editor_title(inputs)
	if (locale === "ja") return ja_jams_editor_title(inputs)
	return en_jams_editor_title(inputs)
});

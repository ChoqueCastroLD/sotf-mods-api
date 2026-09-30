/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Kits_Editor_TitleInputs */

const en_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editing ${i?.name}`)
};

const es_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editando ${i?.name}`)
};

const de_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bearbeiten`)
};

const fr_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modification de ${i?.name}`)
};

const it_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifica di ${i?.name}`)
};

const nl_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bewerken`)
};

const pl_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edycja: ${i?.name}`)
};

const pt_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editando ${i?.name}`)
};

const ru_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Редактирование: ${i?.name}`)
};

const sv_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Redigerar ${i?.name}`)
};

const tr_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} düzenleniyor`)
};

const zh_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑 ${i?.name}`)
};

const ja_kits_editor_title = /** @type {(inputs: Kits_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を編集中`)
};

/**
* | output |
* | --- |
* | "Editing {name}" |
*
* @param {Kits_Editor_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_editor_title = /** @type {((inputs: Kits_Editor_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Editor_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_editor_title(inputs)
	if (locale === "de") return de_kits_editor_title(inputs)
	if (locale === "fr") return fr_kits_editor_title(inputs)
	if (locale === "it") return it_kits_editor_title(inputs)
	if (locale === "nl") return nl_kits_editor_title(inputs)
	if (locale === "pl") return pl_kits_editor_title(inputs)
	if (locale === "pt") return pt_kits_editor_title(inputs)
	if (locale === "ru") return ru_kits_editor_title(inputs)
	if (locale === "sv") return sv_kits_editor_title(inputs)
	if (locale === "tr") return tr_kits_editor_title(inputs)
	if (locale === "zh") return zh_kits_editor_title(inputs)
	if (locale === "ja") return ja_kits_editor_title(inputs)
	return en_kits_editor_title(inputs)
});

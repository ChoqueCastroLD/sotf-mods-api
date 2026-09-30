/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown> }} Basecamp_Editor_TitleInputs */

const en_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edit ${i?.name}`)
};

const es_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar ${i?.name}`)
};

const de_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bearbeiten`)
};

const fr_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifier ${i?.name}`)
};

const it_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modifica ${i?.name}`)
};

const nl_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} bewerken`)
};

const pl_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Edytuj ${i?.name}`)
};

const pt_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Editar ${i?.name}`)
};

const ru_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Изменить ${i?.name}`)
};

const sv_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Redigera ${i?.name}`)
};

const tr_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} düzenleniyor`)
};

const zh_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`编辑 ${i?.name}`)
};

const ja_basecamp_editor_title = /** @type {(inputs: Basecamp_Editor_TitleInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} を編集`)
};

/**
* | output |
* | --- |
* | "Edit {name}" |
*
* @param {Basecamp_Editor_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_title = /** @type {((inputs: Basecamp_Editor_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_title(inputs)
	if (locale === "de") return de_basecamp_editor_title(inputs)
	if (locale === "fr") return fr_basecamp_editor_title(inputs)
	if (locale === "it") return it_basecamp_editor_title(inputs)
	if (locale === "nl") return nl_basecamp_editor_title(inputs)
	if (locale === "pl") return pl_basecamp_editor_title(inputs)
	if (locale === "pt") return pt_basecamp_editor_title(inputs)
	if (locale === "ru") return ru_basecamp_editor_title(inputs)
	if (locale === "sv") return sv_basecamp_editor_title(inputs)
	if (locale === "tr") return tr_basecamp_editor_title(inputs)
	if (locale === "zh") return zh_basecamp_editor_title(inputs)
	if (locale === "ja") return ja_basecamp_editor_title(inputs)
	return en_basecamp_editor_title(inputs)
});

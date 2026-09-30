/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Editor_Fallback_TitleInputs */

const en_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edit mod`)
};

const es_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar mod`)
};

const de_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod bearbeiten`)
};

const fr_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifier le mod`)
};

const it_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifica mod`)
};

const nl_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod bewerken`)
};

const pl_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Edytuj mod`)
};

const pt_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Editar mod`)
};

const ru_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменить мод`)
};

const sv_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Redigera mod`)
};

const tr_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modu düzenle`)
};

const zh_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`编辑模组`)
};

const ja_basecamp_editor_fallback_title = /** @type {(inputs: Basecamp_Editor_Fallback_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD を編集`)
};

/**
* | output |
* | --- |
* | "Edit mod" |
*
* @param {Basecamp_Editor_Fallback_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_editor_fallback_title = /** @type {((inputs?: Basecamp_Editor_Fallback_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Editor_Fallback_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_editor_fallback_title(inputs)
	if (locale === "de") return de_basecamp_editor_fallback_title(inputs)
	if (locale === "fr") return fr_basecamp_editor_fallback_title(inputs)
	if (locale === "it") return it_basecamp_editor_fallback_title(inputs)
	if (locale === "nl") return nl_basecamp_editor_fallback_title(inputs)
	if (locale === "pl") return pl_basecamp_editor_fallback_title(inputs)
	if (locale === "pt") return pt_basecamp_editor_fallback_title(inputs)
	if (locale === "ru") return ru_basecamp_editor_fallback_title(inputs)
	if (locale === "sv") return sv_basecamp_editor_fallback_title(inputs)
	if (locale === "tr") return tr_basecamp_editor_fallback_title(inputs)
	if (locale === "zh") return zh_basecamp_editor_fallback_title(inputs)
	if (locale === "ja") return ja_basecamp_editor_fallback_title(inputs)
	return en_basecamp_editor_fallback_title(inputs)
});

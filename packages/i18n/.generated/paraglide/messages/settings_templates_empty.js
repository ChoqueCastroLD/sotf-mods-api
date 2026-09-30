/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Templates_EmptyInputs */

const en_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No templates yet.`)
};

const es_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no hay plantillas.`)
};

const de_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Vorlagen.`)
};

const fr_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun modèle pour l’instant.`)
};

const it_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun modello.`)
};

const nl_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen sjablonen.`)
};

const pl_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze nie ma szablonów.`)
};

const pt_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum modelo ainda.`)
};

const ru_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаблонов пока нет.`)
};

const sv_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga mallar än.`)
};

const tr_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz şablon yok.`)
};

const zh_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有模板。`)
};

const ja_settings_templates_empty = /** @type {(inputs: Settings_Templates_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`テンプレートはまだありません。`)
};

/**
* | output |
* | --- |
* | "No templates yet." |
*
* @param {Settings_Templates_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_templates_empty = /** @type {((inputs?: Settings_Templates_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Templates_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_templates_empty(inputs)
	if (locale === "de") return de_settings_templates_empty(inputs)
	if (locale === "fr") return fr_settings_templates_empty(inputs)
	if (locale === "it") return it_settings_templates_empty(inputs)
	if (locale === "nl") return nl_settings_templates_empty(inputs)
	if (locale === "pl") return pl_settings_templates_empty(inputs)
	if (locale === "pt") return pt_settings_templates_empty(inputs)
	if (locale === "ru") return ru_settings_templates_empty(inputs)
	if (locale === "sv") return sv_settings_templates_empty(inputs)
	if (locale === "tr") return tr_settings_templates_empty(inputs)
	if (locale === "zh") return zh_settings_templates_empty(inputs)
	if (locale === "ja") return ja_settings_templates_empty(inputs)
	return en_settings_templates_empty(inputs)
});

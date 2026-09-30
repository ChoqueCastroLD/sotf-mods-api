/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Templates_TitleInputs */

const en_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reply templates`)
};

const es_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantillas de respuesta`)
};

const de_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwortvorlagen`)
};

const fr_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèles de réponse`)
};

const it_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelli di risposta`)
};

const nl_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Antwoordsjablonen`)
};

const pl_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szablony odpowiedzi`)
};

const pt_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelos de resposta`)
};

const ru_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Шаблоны ответов`)
};

const sv_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Svarsmallar`)
};

const tr_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıt şablonları`)
};

const zh_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`回复模板`)
};

const ja_settings_templates_title = /** @type {(inputs: Settings_Templates_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信テンプレート`)
};

/**
* | output |
* | --- |
* | "Reply templates" |
*
* @param {Settings_Templates_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_templates_title = /** @type {((inputs?: Settings_Templates_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Templates_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_templates_title(inputs)
	if (locale === "de") return de_settings_templates_title(inputs)
	if (locale === "fr") return fr_settings_templates_title(inputs)
	if (locale === "it") return it_settings_templates_title(inputs)
	if (locale === "nl") return nl_settings_templates_title(inputs)
	if (locale === "pl") return pl_settings_templates_title(inputs)
	if (locale === "pt") return pt_settings_templates_title(inputs)
	if (locale === "ru") return ru_settings_templates_title(inputs)
	if (locale === "sv") return sv_settings_templates_title(inputs)
	if (locale === "tr") return tr_settings_templates_title(inputs)
	if (locale === "zh") return zh_settings_templates_title(inputs)
	if (locale === "ja") return ja_settings_templates_title(inputs)
	return en_settings_templates_title(inputs)
});

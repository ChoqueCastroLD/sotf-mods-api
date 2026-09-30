/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_Policy_LinkInputs */

const en_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Read the content policy`)
};

const es_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leer la política de contenidos`)
};

const de_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inhaltsrichtlinie lesen`)
};

const fr_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lire la politique de contenu`)
};

const it_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Leggi la politica sui contenuti`)
};

const nl_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het inhoudsbeleid lezen`)
};

const pl_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeczytaj zasady dotyczące treści`)
};

const pt_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ler a política de conteúdo`)
};

const ru_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Прочитать правила контента`)
};

const sv_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Läs innehållspolicyn`)
};

const tr_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İçerik politikasını oku`)
};

const zh_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`阅读内容政策`)
};

const ja_settings_creator_policy_link = /** @type {(inputs: Settings_Creator_Policy_LinkInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンテンツポリシーを読む`)
};

/**
* | output |
* | --- |
* | "Read the content policy" |
*
* @param {Settings_Creator_Policy_LinkInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_policy_link = /** @type {((inputs?: Settings_Creator_Policy_LinkInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_Policy_LinkInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_policy_link(inputs)
	if (locale === "de") return de_settings_creator_policy_link(inputs)
	if (locale === "fr") return fr_settings_creator_policy_link(inputs)
	if (locale === "it") return it_settings_creator_policy_link(inputs)
	if (locale === "nl") return nl_settings_creator_policy_link(inputs)
	if (locale === "pl") return pl_settings_creator_policy_link(inputs)
	if (locale === "pt") return pt_settings_creator_policy_link(inputs)
	if (locale === "ru") return ru_settings_creator_policy_link(inputs)
	if (locale === "sv") return sv_settings_creator_policy_link(inputs)
	if (locale === "tr") return tr_settings_creator_policy_link(inputs)
	if (locale === "zh") return zh_settings_creator_policy_link(inputs)
	if (locale === "ja") return ja_settings_creator_policy_link(inputs)
	return en_settings_creator_policy_link(inputs)
});

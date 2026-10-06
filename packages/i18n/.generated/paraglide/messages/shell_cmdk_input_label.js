/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Shell_Cmdk_Input_LabelInputs */

const en_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods, builds, users and pages`)
};

const es_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods, builds, usuarios y páginas`)
};

const de_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, Builds, Nutzer und Seiten suchen`)
};

const fr_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods, builds, utilisateurs et pages`)
};

const it_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod, build, utenti e pagine`)
};

const nl_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek mods, builds, gebruikers en pagina’s`)
};

const pl_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów, buildów, użytkowników i stron`)
};

const pt_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buscar mods, builds, usuários e páginas`)
};

const ru_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поиск модов, построек, пользователей и страниц`)
};

const sv_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar, byggen, användare och sidor`)
};

const tr_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, yapı, kullanıcı ve sayfa ara`)
};

const zh_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索模组、建筑、用户和页面`)
};

const ja_shell_cmdk_input_label = /** @type {(inputs: Shell_Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD、建築、ユーザー、ページを検索`)
};

/**
* | output |
* | --- |
* | "Search mods, builds, users and pages" |
*
* @param {Shell_Cmdk_Input_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const shell_cmdk_input_label = /** @type {((inputs?: Shell_Cmdk_Input_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Shell_Cmdk_Input_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_shell_cmdk_input_label(inputs)
	if (locale === "de") return de_shell_cmdk_input_label(inputs)
	if (locale === "fr") return fr_shell_cmdk_input_label(inputs)
	if (locale === "it") return it_shell_cmdk_input_label(inputs)
	if (locale === "nl") return nl_shell_cmdk_input_label(inputs)
	if (locale === "pl") return pl_shell_cmdk_input_label(inputs)
	if (locale === "pt") return pt_shell_cmdk_input_label(inputs)
	if (locale === "ru") return ru_shell_cmdk_input_label(inputs)
	if (locale === "sv") return sv_shell_cmdk_input_label(inputs)
	if (locale === "tr") return tr_shell_cmdk_input_label(inputs)
	if (locale === "zh") return zh_shell_cmdk_input_label(inputs)
	if (locale === "ja") return ja_shell_cmdk_input_label(inputs)
	return en_shell_cmdk_input_label(inputs)
});

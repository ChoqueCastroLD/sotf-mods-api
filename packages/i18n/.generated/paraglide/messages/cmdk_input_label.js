/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Input_LabelInputs */

const en_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Search mods, builds, kits, creators and commands`)
};

const es_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busca mods, builds, kits, creadores y comandos`)
};

const de_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods, Builds, Kits, Creator und Befehle suchen`)
};

const fr_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rechercher des mods, builds, kits, créateurs et commandes`)
};

const it_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cerca mod, build, kit, creatori e comandi`)
};

const nl_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zoek mods, builds, kits, makers en opdrachten`)
};

const pl_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szukaj modów, buildów, zestawów, twórców i poleceń`)
};

const pt_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Busque mods, builds, kits, criadores e comandos`)
};

const ru_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ищите моды, постройки, наборы, авторов и команды`)
};

const sv_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sök moddar, byggen, kit, skapare och kommandon`)
};

const tr_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod, yapı, kit, üretici ve komut ara`)
};

const zh_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`搜索模组、建筑、套装、创作者和命令`)
};

const ja_cmdk_input_label = /** @type {(inputs: Cmdk_Input_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MOD、建築、キット、クリエイター、コマンドを検索`)
};

/**
* | output |
* | --- |
* | "Search mods, builds, kits, creators and commands" |
*
* @param {Cmdk_Input_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_input_label = /** @type {((inputs?: Cmdk_Input_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Input_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_input_label(inputs)
	if (locale === "de") return de_cmdk_input_label(inputs)
	if (locale === "fr") return fr_cmdk_input_label(inputs)
	if (locale === "it") return it_cmdk_input_label(inputs)
	if (locale === "nl") return nl_cmdk_input_label(inputs)
	if (locale === "pl") return pl_cmdk_input_label(inputs)
	if (locale === "pt") return pt_cmdk_input_label(inputs)
	if (locale === "ru") return ru_cmdk_input_label(inputs)
	if (locale === "sv") return sv_cmdk_input_label(inputs)
	if (locale === "tr") return tr_cmdk_input_label(inputs)
	if (locale === "zh") return zh_cmdk_input_label(inputs)
	if (locale === "ja") return ja_cmdk_input_label(inputs)
	return en_cmdk_input_label(inputs)
});

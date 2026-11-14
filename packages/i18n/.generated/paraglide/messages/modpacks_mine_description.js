/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Mine_DescriptionInputs */

const en_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group mods into a modpack that anyone can install with SotF Mods Manager.`)
};

const es_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agrupa mods en un modpack que cualquiera puede instalar con SotF Mods Manager.`)
};

const de_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fasse Mods zu einem Modpack zusammen, das jeder mit SotF Mods Manager installieren kann.`)
};

const fr_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regroupez des mods dans un modpack que tout le monde peut installer avec SotF Mods Manager.`)
};

const it_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raggruppa delle mod in un modpack che chiunque può installare con SotF Mods Manager.`)
};

const nl_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bundel mods in een modpack dat iedereen kan installeren met SotF Mods Manager.`)
};

const pl_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Połącz mody w modpack, który każdy może zainstalować w SotF Mods Manager.`)
};

const pt_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agrupe mods em um modpack que qualquer pessoa pode instalar com o SotF Mods Manager.`)
};

const ru_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объединяйте моды в модпак, который любой может установить через SotF Mods Manager.`)
};

const sv_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samla moddar i ett modpaket som vem som helst kan installera med SotF Mods Manager.`)
};

const tr_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları herkesin SotF Mods Manager ile kurabileceği bir mod paketinde topla.`)
};

const zh_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把模组组合成整合包，任何人都可以用 SotF Mods Manager 安装。`)
};

const ja_modpacks_mine_description = /** @type {(inputs: Modpacks_Mine_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod をまとめて、誰でも SotF Mods Manager でインストールできる Modパックを作りましょう。`)
};

/**
* | output |
* | --- |
* | "Group mods into a modpack that anyone can install with SotF Mods Manager." |
*
* @param {Modpacks_Mine_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_mine_description = /** @type {((inputs?: Modpacks_Mine_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Mine_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_mine_description(inputs)
	if (locale === "de") return de_modpacks_mine_description(inputs)
	if (locale === "fr") return fr_modpacks_mine_description(inputs)
	if (locale === "it") return it_modpacks_mine_description(inputs)
	if (locale === "nl") return nl_modpacks_mine_description(inputs)
	if (locale === "pl") return pl_modpacks_mine_description(inputs)
	if (locale === "pt") return pt_modpacks_mine_description(inputs)
	if (locale === "ru") return ru_modpacks_mine_description(inputs)
	if (locale === "sv") return sv_modpacks_mine_description(inputs)
	if (locale === "tr") return tr_modpacks_mine_description(inputs)
	if (locale === "zh") return zh_modpacks_mine_description(inputs)
	if (locale === "ja") return ja_modpacks_mine_description(inputs)
	return en_modpacks_mine_description(inputs)
});

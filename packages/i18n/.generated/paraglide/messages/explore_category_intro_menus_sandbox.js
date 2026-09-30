/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_Menus_SandboxInputs */

const en_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trainers, spawn menus and sandbox tools to experiment freely in single-player or as host.`)
};

const es_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrenadores, menús de aparición y herramientas sandbox para experimentar a tu aire en solitario o como anfitrión.`)
};

const de_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trainer, Spawn-Menüs und Sandbox-Werkzeuge zum freien Experimentieren allein oder als Host.`)
};

const fr_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trainers, menus d’apparition et outils bac à sable pour expérimenter librement en solo ou en tant qu’hôte.`)
};

const it_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trainer, menu di spawn e strumenti sandbox per sperimentare liberamente da solo o come host.`)
};

const nl_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trainers, spawnmenu’s en sandboxgereedschap om vrij te experimenteren in singleplayer of als host.`)
};

const pl_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trainery, menu spawnowania i narzędzia piaskownicy do swobodnych eksperymentów w pojedynkę lub jako host.`)
};

const pt_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trainers, menus de spawn e ferramentas sandbox para experimentar à vontade no modo solo ou como anfitrião.`)
};

const ru_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Трейнеры, меню спавна и инструменты песочницы для свободных экспериментов в одиночку или в роли хоста.`)
};

const sv_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trainers, spawnmenyer och sandlådeverktyg för att experimentera fritt i enspelarläge eller som värd.`)
};

const tr_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek başına ya da sunucu sahibi olarak özgürce denemeler yapmak için trainer’lar, spawn menüleri ve sandbox araçları.`)
};

const zh_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`修改器、生成菜单和沙盒工具，让你在单人或作为房主时自由试验。`)
};

const ja_explore_category_intro_menus_sandbox = /** @type {(inputs: Explore_Category_Intro_Menus_SandboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`トレーナー、スポーンメニュー、サンドボックスツール。ソロやホストで自由に試せます。`)
};

/**
* | output |
* | --- |
* | "Trainers, spawn menus and sandbox tools to experiment freely in single-player or as host." |
*
* @param {Explore_Category_Intro_Menus_SandboxInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_menus_sandbox = /** @type {((inputs?: Explore_Category_Intro_Menus_SandboxInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Menus_SandboxInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_menus_sandbox(inputs)
	if (locale === "de") return de_explore_category_intro_menus_sandbox(inputs)
	if (locale === "fr") return fr_explore_category_intro_menus_sandbox(inputs)
	if (locale === "it") return it_explore_category_intro_menus_sandbox(inputs)
	if (locale === "nl") return nl_explore_category_intro_menus_sandbox(inputs)
	if (locale === "pl") return pl_explore_category_intro_menus_sandbox(inputs)
	if (locale === "pt") return pt_explore_category_intro_menus_sandbox(inputs)
	if (locale === "ru") return ru_explore_category_intro_menus_sandbox(inputs)
	if (locale === "sv") return sv_explore_category_intro_menus_sandbox(inputs)
	if (locale === "tr") return tr_explore_category_intro_menus_sandbox(inputs)
	if (locale === "zh") return zh_explore_category_intro_menus_sandbox(inputs)
	if (locale === "ja") return ja_explore_category_intro_menus_sandbox(inputs)
	return en_explore_category_intro_menus_sandbox(inputs)
});

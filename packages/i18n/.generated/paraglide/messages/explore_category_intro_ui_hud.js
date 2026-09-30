/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_Ui_HudInputs */

const en_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HUD, map, minimap and menu mods that show you more and get in the way less.`)
};

const es_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods del HUD, el mapa, el minimapa y los menús que te muestran más y estorban menos.`)
};

const de_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für HUD, Karte, Minikarte und Menüs, die dir mehr zeigen und weniger im Weg sind.`)
};

const fr_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de HUD, carte, minicarte et menus qui en montrent plus et gênent moins.`)
};

const it_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod per HUD, mappa, minimappa e menu che mostrano di più e ingombrano di meno.`)
};

const nl_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods voor HUD, kaart, minikaart en menu’s die je meer laten zien en minder in de weg zitten.`)
};

const pl_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody HUD, mapy, minimapy i menu, które pokazują więcej, a przeszkadzają mniej.`)
};

const pt_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de HUD, mapa, minimapa e menus que mostram mais e atrapalham menos.`)
};

const ru_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для HUD, карты, мини-карты и меню, которые показывают больше и мешают меньше.`)
};

const sv_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar för HUD, karta, minikarta och menyer som visar mer och är mindre i vägen.`)
};

const tr_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha çok gösteren, daha az engel olan HUD, harita, mini harita ve menü modları.`)
};

const zh_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HUD、地图、小地图和菜单模组，显示更多信息，干扰更少。`)
};

const ja_explore_category_intro_ui_hud = /** @type {(inputs: Explore_Category_Intro_Ui_HudInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`HUD、マップ、ミニマップ、メニューの MOD。より多くを表示し、邪魔にならない。`)
};

/**
* | output |
* | --- |
* | "HUD, map, minimap and menu mods that show you more and get in the way less." |
*
* @param {Explore_Category_Intro_Ui_HudInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_ui_hud = /** @type {((inputs?: Explore_Category_Intro_Ui_HudInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Ui_HudInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_ui_hud(inputs)
	if (locale === "de") return de_explore_category_intro_ui_hud(inputs)
	if (locale === "fr") return fr_explore_category_intro_ui_hud(inputs)
	if (locale === "it") return it_explore_category_intro_ui_hud(inputs)
	if (locale === "nl") return nl_explore_category_intro_ui_hud(inputs)
	if (locale === "pl") return pl_explore_category_intro_ui_hud(inputs)
	if (locale === "pt") return pt_explore_category_intro_ui_hud(inputs)
	if (locale === "ru") return ru_explore_category_intro_ui_hud(inputs)
	if (locale === "sv") return sv_explore_category_intro_ui_hud(inputs)
	if (locale === "tr") return tr_explore_category_intro_ui_hud(inputs)
	if (locale === "zh") return zh_explore_category_intro_ui_hud(inputs)
	if (locale === "ja") return ja_explore_category_intro_ui_hud(inputs)
	return en_explore_category_intro_ui_hud(inputs)
});

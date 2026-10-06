/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_Weapons_GearInputs */

const en_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New and tuned weapons, ammo, armour and gear for fighting and exploring.`)
};

const es_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Armas, munición, armaduras y equipo nuevos o ajustados para luchar y explorar.`)
};

const de_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neue und überarbeitete Waffen, Munition, Rüstungen und Ausrüstung für Kämpfe und Erkundung.`)
};

const fr_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Armes, munitions, armures et équipement nouveaux ou ajustés pour combattre et explorer.`)
};

const it_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Armi, munizioni, armature ed equipaggiamento nuovi o ribilanciati per combattere ed esplorare.`)
};

const nl_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuwe en bijgestelde wapens, munitie, bepantsering en uitrusting om te vechten en te verkennen.`)
};

const pl_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowe i dopracowane bronie, amunicja, pancerze i wyposażenie do walki i eksploracji.`)
};

const pt_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Armas, munição, armaduras e equipamentos novos ou ajustados para lutar e explorar.`)
};

const ru_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новое и доработанное оружие, боеприпасы, броня и снаряжение для боя и исследования.`)
};

const sv_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nya och justerade vapen, ammunition, rustningar och utrustning för strid och utforskning.`)
};

const tr_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dövüşmek ve keşfetmek için yeni ya da ayarlanmış silahlar, cephane, zırh ve ekipman.`)
};

const zh_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`用于战斗和探索的新增或调整过的武器、弹药、护甲和装备。`)
};

const ja_explore_category_intro_weapons_gear = /** @type {(inputs: Explore_Category_Intro_Weapons_GearInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`戦いと探索のための、新しい・調整済みの武器、弾薬、防具、装備。`)
};

/**
* | output |
* | --- |
* | "New and tuned weapons, ammo, armour and gear for fighting and exploring." |
*
* @param {Explore_Category_Intro_Weapons_GearInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_weapons_gear = /** @type {((inputs?: Explore_Category_Intro_Weapons_GearInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_Weapons_GearInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_weapons_gear(inputs)
	if (locale === "de") return de_explore_category_intro_weapons_gear(inputs)
	if (locale === "fr") return fr_explore_category_intro_weapons_gear(inputs)
	if (locale === "it") return it_explore_category_intro_weapons_gear(inputs)
	if (locale === "nl") return nl_explore_category_intro_weapons_gear(inputs)
	if (locale === "pl") return pl_explore_category_intro_weapons_gear(inputs)
	if (locale === "pt") return pt_explore_category_intro_weapons_gear(inputs)
	if (locale === "ru") return ru_explore_category_intro_weapons_gear(inputs)
	if (locale === "sv") return sv_explore_category_intro_weapons_gear(inputs)
	if (locale === "tr") return tr_explore_category_intro_weapons_gear(inputs)
	if (locale === "zh") return zh_explore_category_intro_weapons_gear(inputs)
	if (locale === "ja") return ja_explore_category_intro_weapons_gear(inputs)
	return en_explore_category_intro_weapons_gear(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Category_Intro_BuildingInputs */

const en_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tools and pieces for builders: snapping, blueprints, new structures and ways to shape your base.`)
};

const es_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herramientas y piezas para constructores: encaje, planos, estructuras nuevas y formas de dar forma a tu base.`)
};

const de_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werkzeuge und Bauteile für Baumeister: Einrasten, Baupläne, neue Strukturen und mehr Möglichkeiten für deine Basis.`)
};

const fr_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Outils et pièces pour bâtisseurs : aimantation, plans, nouvelles structures et plus de façons de façonner votre base.`)
};

const it_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strumenti e pezzi per costruttori: aggancio, progetti, nuove strutture e più modi per dare forma alla tua base.`)
};

const nl_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gereedschap en onderdelen voor bouwers: vastklikken, bouwtekeningen, nieuwe constructies en meer manieren om je basis vorm te geven.`)
};

const pl_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Narzędzia i elementy dla budowniczych: przyciąganie, plany, nowe konstrukcje i więcej sposobów na kształtowanie bazy.`)
};

const pt_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ferramentas e peças para construtores: encaixe, plantas, novas estruturas e mais jeitos de moldar sua base.`)
};

const ru_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Инструменты и детали для строителей: привязка, чертежи, новые конструкции и больше способов обустроить базу.`)
};

const sv_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verktyg och delar för byggare: fästning, ritningar, nya konstruktioner och fler sätt att forma basen.`)
};

const tr_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İnşaatçılar için araçlar ve parçalar: yapıştırma, planlar, yeni yapılar ve üssünü şekillendirmenin yeni yolları.`)
};

const zh_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为建造者准备的工具和部件：吸附、蓝图、新结构以及更多打造基地的方式。`)
};

const ja_explore_category_intro_building = /** @type {(inputs: Explore_Category_Intro_BuildingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`スナップ、設計図、新しい構造物など、拠点づくりを広げる建築家向けのツールとパーツ。`)
};

/**
* | output |
* | --- |
* | "Tools and pieces for builders: snapping, blueprints, new structures and ways to shape your base." |
*
* @param {Explore_Category_Intro_BuildingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_category_intro_building = /** @type {((inputs?: Explore_Category_Intro_BuildingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Category_Intro_BuildingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_category_intro_building(inputs)
	if (locale === "de") return de_explore_category_intro_building(inputs)
	if (locale === "fr") return fr_explore_category_intro_building(inputs)
	if (locale === "it") return it_explore_category_intro_building(inputs)
	if (locale === "nl") return nl_explore_category_intro_building(inputs)
	if (locale === "pl") return pl_explore_category_intro_building(inputs)
	if (locale === "pt") return pt_explore_category_intro_building(inputs)
	if (locale === "ru") return ru_explore_category_intro_building(inputs)
	if (locale === "sv") return sv_explore_category_intro_building(inputs)
	if (locale === "tr") return tr_explore_category_intro_building(inputs)
	if (locale === "zh") return zh_explore_category_intro_building(inputs)
	if (locale === "ja") return ja_explore_category_intro_building(inputs)
	return en_explore_category_intro_building(inputs)
});

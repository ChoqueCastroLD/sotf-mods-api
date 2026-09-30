/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Building_Mods_DescriptionInputs */

const en_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Building mods for Sons of the Forest: better snapping, new pieces, blueprints and tools for bigger bases.`)
};

const es_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de construcción para Sons of the Forest: mejor encaje, piezas nuevas, planos y herramientas para bases más grandes.`)
};

const de_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bau-Mods für Sons of the Forest: besseres Einrasten, neue Bauteile, Baupläne und Werkzeuge für größere Basen.`)
};

const fr_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de construction pour Sons of the Forest : meilleure aimantation, nouvelles pièces, plans et outils pour de plus grandes bases.`)
};

const it_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod di costruzione per Sons of the Forest: aggancio migliore, nuovi pezzi, progetti e strumenti per basi più grandi.`)
};

const nl_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bouwmods voor Sons of the Forest: beter vastklikken, nieuwe onderdelen, bouwtekeningen en gereedschap voor grotere bases.`)
};

const pl_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody do budowania w Sons of the Forest: lepsze przyciąganie, nowe elementy, plany i narzędzia do większych baz.`)
};

const pt_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods de construção para Sons of the Forest: encaixe melhor, peças novas, plantas e ferramentas para bases maiores.`)
};

const ru_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для строительства в Sons of the Forest: удобная привязка, новые детали, чертежи и инструменты для больших баз.`)
};

const sv_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Byggmoddar till Sons of the Forest: bättre fästning, nya delar, ritningar och verktyg för större baser.`)
};

const tr_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest için inşa modları: daha iyi yapıştırma, yeni parçalar, planlar ve büyük üsler için araçlar.`)
};

const zh_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest 建造模组：更好的吸附、新部件、蓝图以及打造大型基地的工具。`)
};

const ja_explore_best_building_mods_description = /** @type {(inputs: Explore_Best_Building_Mods_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sons of the Forest の建築 MOD。スナップの改善、新しいパーツ、設計図、大きな拠点のためのツール。`)
};

/**
* | output |
* | --- |
* | "Building mods for Sons of the Forest: better snapping, new pieces, blueprints and tools for bigger bases." |
*
* @param {Explore_Best_Building_Mods_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_building_mods_description = /** @type {((inputs?: Explore_Best_Building_Mods_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Building_Mods_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_building_mods_description(inputs)
	if (locale === "de") return de_explore_best_building_mods_description(inputs)
	if (locale === "fr") return fr_explore_best_building_mods_description(inputs)
	if (locale === "it") return it_explore_best_building_mods_description(inputs)
	if (locale === "nl") return nl_explore_best_building_mods_description(inputs)
	if (locale === "pl") return pl_explore_best_building_mods_description(inputs)
	if (locale === "pt") return pt_explore_best_building_mods_description(inputs)
	if (locale === "ru") return ru_explore_best_building_mods_description(inputs)
	if (locale === "sv") return sv_explore_best_building_mods_description(inputs)
	if (locale === "tr") return tr_explore_best_building_mods_description(inputs)
	if (locale === "zh") return zh_explore_best_building_mods_description(inputs)
	if (locale === "ja") return ja_explore_best_building_mods_description(inputs)
	return en_explore_best_building_mods_description(inputs)
});

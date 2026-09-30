/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Best_Quality_Of_Life_Mods_TitleInputs */

const en_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("en", i?.count, {});return /** @type {LocalizedString} */ (`Best Sons of the Forest QoL mods (${count__number} picks)`)
};

const es_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("es", i?.count, {});return /** @type {LocalizedString} */ (`Mejores mods de calidad de vida de SOTF (${count__number})`)
};

const de_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("de", i?.count, {});return /** @type {LocalizedString} */ (`Die besten SOTF Komfort-Mods (${count__number})`)
};

const fr_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("fr", i?.count, {});return /** @type {LocalizedString} */ (`Meilleurs mods qualité de vie SOTF (${count__number})`)
};

const it_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("it", i?.count, {});return /** @type {LocalizedString} */ (`Migliori mod qualità della vita SOTF (${count__number})`)
};

const nl_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("nl", i?.count, {});return /** @type {LocalizedString} */ (`Beste SOTF-mods voor gebruiksgemak (${count__number})`)
};

const pl_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pl", i?.count, {});return /** @type {LocalizedString} */ (`Najlepsze mody z udogodnieniami do SOTF (${count__number})`)
};

const pt_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("pt", i?.count, {});return /** @type {LocalizedString} */ (`Melhores mods de qualidade de vida de SOTF (${count__number})`)
};

const ru_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ru", i?.count, {});return /** @type {LocalizedString} */ (`Лучшие моды для удобства в SOTF (${count__number})`)
};

const sv_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("sv", i?.count, {});return /** @type {LocalizedString} */ (`Bästa livskvalitetsmoddarna till SOTF (${count__number})`)
};

const tr_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("tr", i?.count, {});return /** @type {LocalizedString} */ (`En iyi SOTF kolaylık modları (${count__number})`)
};

const zh_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`最佳 SOTF 便利改进模组（${count__number}）`)
};

const ja_explore_best_quality_of_life_mods_title = /** @type {(inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs) => LocalizedString} */ (i) => {
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`SOTF のおすすめ快適性向上 MOD（${count__number} 件）`)
};

/**
* | output |
* | --- |
* | "Best Sons of the Forest QoL mods ({count__number} picks)" |
*
* @param {Explore_Best_Quality_Of_Life_Mods_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_quality_of_life_mods_title = /** @type {((inputs: Explore_Best_Quality_Of_Life_Mods_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Quality_Of_Life_Mods_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "de") return de_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "fr") return fr_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "it") return it_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "nl") return nl_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "pl") return pl_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "pt") return pt_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "ru") return ru_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "sv") return sv_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "tr") return tr_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "zh") return zh_explore_best_quality_of_life_mods_title(inputs)
	if (locale === "ja") return ja_explore_best_quality_of_life_mods_title(inputs)
	return en_explore_best_quality_of_life_mods_title(inputs)
});

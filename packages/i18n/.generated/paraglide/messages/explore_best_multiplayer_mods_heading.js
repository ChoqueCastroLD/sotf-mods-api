/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Best_Multiplayer_Mods_HeadingInputs */

const en_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The best multiplayer mods`)
};

const es_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los mejores mods multijugador`)
};

const de_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die besten Multiplayer-Mods`)
};

const fr_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les meilleurs mods multijoueur`)
};

const it_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le migliori mod multigiocatore`)
};

const nl_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De beste multiplayer-mods`)
};

const pl_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Najlepsze mody wieloosobowe`)
};

const pt_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os melhores mods multijogador`)
};

const ru_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лучшие моды для мультиплеера`)
};

const sv_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De bästa flerspelarmoddarna`)
};

const tr_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En iyi çok oyunculu modlar`)
};

const zh_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最佳多人模组`)
};

const ja_explore_best_multiplayer_mods_heading = /** @type {(inputs: Explore_Best_Multiplayer_Mods_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`おすすめのマルチプレイ MOD`)
};

/**
* | output |
* | --- |
* | "The best multiplayer mods" |
*
* @param {Explore_Best_Multiplayer_Mods_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_best_multiplayer_mods_heading = /** @type {((inputs?: Explore_Best_Multiplayer_Mods_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Best_Multiplayer_Mods_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "de") return de_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "fr") return fr_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "it") return it_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "nl") return nl_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "pl") return pl_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "pt") return pt_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "ru") return ru_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "sv") return sv_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "tr") return tr_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "zh") return zh_explore_best_multiplayer_mods_heading(inputs)
	if (locale === "ja") return ja_explore_best_multiplayer_mods_heading(inputs)
	return en_explore_best_multiplayer_mods_heading(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Hero_Cta_ExploreInputs */

const en_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explore mods`)
};

const es_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const de_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods entdecken`)
};

const fr_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorer les mods`)
};

const it_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esplora le mod`)
};

const nl_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods verkennen`)
};

const pl_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przeglądaj mody`)
};

const pt_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Explorar mods`)
};

const ru_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Смотреть моды`)
};

const sv_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utforska moddar`)
};

const tr_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modları keşfet`)
};

const zh_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`浏览模组`)
};

const ja_landing_hero_cta_explore = /** @type {(inputs: Landing_Hero_Cta_ExploreInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODを探す`)
};

/**
* | output |
* | --- |
* | "Explore mods" |
*
* @param {Landing_Hero_Cta_ExploreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hero_cta_explore = /** @type {((inputs?: Landing_Hero_Cta_ExploreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hero_Cta_ExploreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hero_cta_explore(inputs)
	if (locale === "de") return de_landing_hero_cta_explore(inputs)
	if (locale === "fr") return fr_landing_hero_cta_explore(inputs)
	if (locale === "it") return it_landing_hero_cta_explore(inputs)
	if (locale === "nl") return nl_landing_hero_cta_explore(inputs)
	if (locale === "pl") return pl_landing_hero_cta_explore(inputs)
	if (locale === "pt") return pt_landing_hero_cta_explore(inputs)
	if (locale === "ru") return ru_landing_hero_cta_explore(inputs)
	if (locale === "sv") return sv_landing_hero_cta_explore(inputs)
	if (locale === "tr") return tr_landing_hero_cta_explore(inputs)
	if (locale === "zh") return zh_landing_hero_cta_explore(inputs)
	if (locale === "ja") return ja_landing_hero_cta_explore(inputs)
	return en_landing_hero_cta_explore(inputs)
});

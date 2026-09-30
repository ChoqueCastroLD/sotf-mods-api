/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Pillar_Of_The_Island_HintInputs */

const en_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Make a library that at least 3 mods by other creators require.`)
};

const es_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea una librería que requieran al menos 3 mods de otros creadores.`)
};

const de_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erstelle eine Bibliothek, die mindestens 3 Mods anderer Ersteller benötigen.`)
};

const fr_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créez une bibliothèque requise par au moins 3 mods d’autres créateurs.`)
};

const it_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea una libreria richiesta da almeno 3 mod di altri creatori.`)
};

const nl_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Maak een library die door minstens 3 mods van andere makers vereist wordt.`)
};

const pl_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stwórz bibliotekę wymaganą przez co najmniej 3 mody innych twórców.`)
};

const pt_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crie uma biblioteca exigida por pelo menos 3 mods de outros criadores.`)
};

const ru_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сделайте библиотеку, которая нужна как минимум 3 модам других авторов.`)
};

const sv_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gör ett bibliotek som minst 3 moddar av andra skapare kräver.`)
};

const tr_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diğer üreticilerin en az 3 modunun gerektirdiği bir kütüphane yap.`)
};

const zh_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制作一个被至少 3 个其他创作者的模组依赖的库。`)
};

const ja_profile_badge_pillar_of_the_island_hint = /** @type {(inputs: Profile_Badge_Pillar_Of_The_Island_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ほかのクリエイターの MOD 3 件以上が依存するライブラリを作る。`)
};

/**
* | output |
* | --- |
* | "Make a library that at least 3 mods by other creators require." |
*
* @param {Profile_Badge_Pillar_Of_The_Island_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_pillar_of_the_island_hint = /** @type {((inputs?: Profile_Badge_Pillar_Of_The_Island_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Pillar_Of_The_Island_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "de") return de_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "fr") return fr_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "it") return it_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "nl") return nl_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "pl") return pl_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "pt") return pt_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "ru") return ru_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "sv") return sv_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "tr") return tr_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "zh") return zh_profile_badge_pillar_of_the_island_hint(inputs)
	if (locale === "ja") return ja_profile_badge_pillar_of_the_island_hint(inputs)
	return en_profile_badge_pillar_of_the_island_hint(inputs)
});

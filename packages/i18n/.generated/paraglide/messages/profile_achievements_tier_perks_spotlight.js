/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Achievements_Tier_Perks_SpotlightInputs */

const en_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tier stamp, avatar frame and a spotlight on the home page.`)
};

const es_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sello de nivel, marco de avatar y un lugar destacado en la portada.`)
};

const de_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stufen-Stempel, Avatar-Rahmen und ein Platz im Rampenlicht der Startseite.`)
};

const fr_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tampon de palier, cadre d’avatar et mise en avant sur la page d’accueil.`)
};

const it_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Timbro di livello, cornice dell’avatar e uno spazio in primo piano nella home.`)
};

const nl_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niveaustempel, avatarrand en een plek in de schijnwerpers op de homepage.`)
};

const pl_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pieczątka poziomu, ramka awatara i miejsce w centrum uwagi na stronie głównej.`)
};

const pt_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Carimbo de nível, moldura de avatar e destaque na página inicial.`)
};

const ru_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Штамп уровня, рамка аватара и место в центре внимания на главной.`)
};

const sv_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nivåstämpel, avatarram och en plats i rampljuset på startsidan.`)
};

const tr_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seviye damgası, avatar çerçevesi ve ana sayfada öne çıkma.`)
};

const zh_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`段位印章、头像边框，并在首页焦点展示。`)
};

const ja_profile_achievements_tier_perks_spotlight = /** @type {(inputs: Profile_Achievements_Tier_Perks_SpotlightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ティアスタンプ、アバター枠、トップページでのスポットライト。`)
};

/**
* | output |
* | --- |
* | "Tier stamp, avatar frame and a spotlight on the home page." |
*
* @param {Profile_Achievements_Tier_Perks_SpotlightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_achievements_tier_perks_spotlight = /** @type {((inputs?: Profile_Achievements_Tier_Perks_SpotlightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Achievements_Tier_Perks_SpotlightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "de") return de_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "fr") return fr_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "it") return it_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "nl") return nl_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "pl") return pl_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "pt") return pt_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "ru") return ru_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "sv") return sv_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "tr") return tr_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "zh") return zh_profile_achievements_tier_perks_spotlight(inputs)
	if (locale === "ja") return ja_profile_achievements_tier_perks_spotlight(inputs)
	return en_profile_achievements_tier_perks_spotlight(inputs)
});

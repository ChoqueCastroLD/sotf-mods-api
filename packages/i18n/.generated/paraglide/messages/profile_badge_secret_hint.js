/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Secret_HintInputs */

const en_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keep exploring. Some things on the island are only found at night.`)
};

const es_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue explorando. Algunas cosas de la isla solo se encuentran de noche.`)
};

const de_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erkunde weiter. Manches auf der Insel findet man nur nachts.`)
};

const fr_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuez d’explorer. Certaines choses sur l’île ne se trouvent que la nuit.`)
};

const it_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua a esplorare. Alcune cose sull’isola si trovano solo di notte.`)
};

const nl_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Blijf ontdekken. Sommige dingen op het eiland vind je alleen ’s nachts.`)
};

const pl_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eksploruj dalej. Niektóre rzeczy na wyspie można znaleźć tylko nocą.`)
};

const pt_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue explorando. Algumas coisas na ilha só aparecem à noite.`)
};

const ru_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжайте исследовать. Кое-что на острове можно найти только ночью.`)
};

const sv_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt utforska. Vissa saker på ön hittar man bara på natten.`)
};

const tr_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keşfetmeye devam et. Adadaki bazı şeyler yalnızca gece bulunur.`)
};

const zh_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续探索吧。岛上有些东西只在夜里才能找到。`)
};

const ja_profile_badge_secret_hint = /** @type {(inputs: Profile_Badge_Secret_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`探索を続けよう。島には夜にしか見つからないものもある。`)
};

/**
* | output |
* | --- |
* | "Keep exploring. Some things on the island are only found at night." |
*
* @param {Profile_Badge_Secret_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_secret_hint = /** @type {((inputs?: Profile_Badge_Secret_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Secret_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_secret_hint(inputs)
	if (locale === "de") return de_profile_badge_secret_hint(inputs)
	if (locale === "fr") return fr_profile_badge_secret_hint(inputs)
	if (locale === "it") return it_profile_badge_secret_hint(inputs)
	if (locale === "nl") return nl_profile_badge_secret_hint(inputs)
	if (locale === "pl") return pl_profile_badge_secret_hint(inputs)
	if (locale === "pt") return pt_profile_badge_secret_hint(inputs)
	if (locale === "ru") return ru_profile_badge_secret_hint(inputs)
	if (locale === "sv") return sv_profile_badge_secret_hint(inputs)
	if (locale === "tr") return tr_profile_badge_secret_hint(inputs)
	if (locale === "zh") return zh_profile_badge_secret_hint(inputs)
	if (locale === "ja") return ja_profile_badge_secret_hint(inputs)
	return en_profile_badge_secret_hint(inputs)
});

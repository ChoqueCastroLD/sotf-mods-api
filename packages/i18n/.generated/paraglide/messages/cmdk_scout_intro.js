/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_IntroInputs */

const en_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe what you want to do in the game and Scout will find mods for it.`)
};

const es_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe lo que quieres hacer en el juego y Scout buscará mods para ello.`)
};

const de_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibe, was du im Spiel tun willst, und Scout findet passende Mods.`)
};

const fr_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Décris ce que tu veux faire dans le jeu et Scout trouvera des mods pour ça.`)
};

const it_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrivi cosa vuoi fare nel gioco e Scout troverà le mod adatte.`)
};

const nl_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijf wat je in het spel wilt doen en Scout zoekt er mods voor.`)
};

const pl_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opisz, co chcesz robić w grze, a Scout znajdzie pasujące mody.`)
};

const pt_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descreve o que queres fazer no jogo e o Scout encontra mods para isso.`)
};

const ru_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опишите, что хотите делать в игре, и Scout подберёт моды.`)
};

const sv_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskriv vad du vill göra i spelet så hittar Scout moddar för det.`)
};

const tr_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunda ne yapmak istediğini anlat, Scout sana uygun modları bulsun.`)
};

const zh_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述你想在游戏里做什么，Scout 会为你找到合适的模组。`)
};

const ja_cmdk_scout_intro = /** @type {(inputs: Cmdk_Scout_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームでやりたいことを書くと、Scoutが合うModを探します。`)
};

/**
* | output |
* | --- |
* | "Describe what you want to do in the game and Scout will find mods for it." |
*
* @param {Cmdk_Scout_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_intro = /** @type {((inputs?: Cmdk_Scout_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_intro(inputs)
	if (locale === "de") return de_cmdk_scout_intro(inputs)
	if (locale === "fr") return fr_cmdk_scout_intro(inputs)
	if (locale === "it") return it_cmdk_scout_intro(inputs)
	if (locale === "nl") return nl_cmdk_scout_intro(inputs)
	if (locale === "pl") return pl_cmdk_scout_intro(inputs)
	if (locale === "pt") return pt_cmdk_scout_intro(inputs)
	if (locale === "ru") return ru_cmdk_scout_intro(inputs)
	if (locale === "sv") return sv_cmdk_scout_intro(inputs)
	if (locale === "tr") return tr_cmdk_scout_intro(inputs)
	if (locale === "zh") return zh_cmdk_scout_intro(inputs)
	if (locale === "ja") return ja_cmdk_scout_intro(inputs)
	return en_cmdk_scout_intro(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Kit_HintInputs */

const en_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Group your mods into a loadout you can share with one code.`)
};

const es_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agrupa tus mods en un loadout que puedes compartir con un solo código.`)
};

const de_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fasse deine Mods zu einem Loadout zusammen, das du mit einem Code teilen kannst.`)
};

const fr_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Regroupez vos mods dans un loadout à partager avec un seul code.`)
};

const it_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raggruppa le tue mod in un loadout da condividere con un solo codice.`)
};

const nl_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bundel je mods in een loadout die je met één code deelt.`)
};

const pl_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zbierz mody w zestaw, który udostępnisz jednym kodem.`)
};

const pt_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Junte seus mods em um loadout para compartilhar com um único código.`)
};

const ru_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Объедините моды в набор, которым можно поделиться одним кодом.`)
};

const sv_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Samla dina moddar i en loadout som du delar med en enda kod.`)
};

const tr_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarını tek bir kodla paylaşabileceğin bir kitte topla.`)
};

const zh_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`把你的模组组合成一个套装，用一个代码即可分享。`)
};

const ja_me_onboarding_kit_hint = /** @type {(inputs: Me_Onboarding_Kit_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODをまとめて、1つのコードで共有できるキットにしましょう。`)
};

/**
* | output |
* | --- |
* | "Group your mods into a loadout you can share with one code." |
*
* @param {Me_Onboarding_Kit_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_kit_hint = /** @type {((inputs?: Me_Onboarding_Kit_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Kit_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_kit_hint(inputs)
	if (locale === "de") return de_me_onboarding_kit_hint(inputs)
	if (locale === "fr") return fr_me_onboarding_kit_hint(inputs)
	if (locale === "it") return it_me_onboarding_kit_hint(inputs)
	if (locale === "nl") return nl_me_onboarding_kit_hint(inputs)
	if (locale === "pl") return pl_me_onboarding_kit_hint(inputs)
	if (locale === "pt") return pt_me_onboarding_kit_hint(inputs)
	if (locale === "ru") return ru_me_onboarding_kit_hint(inputs)
	if (locale === "sv") return sv_me_onboarding_kit_hint(inputs)
	if (locale === "tr") return tr_me_onboarding_kit_hint(inputs)
	if (locale === "zh") return zh_me_onboarding_kit_hint(inputs)
	if (locale === "ja") return ja_me_onboarding_kit_hint(inputs)
	return en_me_onboarding_kit_hint(inputs)
});

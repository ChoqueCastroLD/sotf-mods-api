/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Mod_Of_The_Week_HintInputs */

const en_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Have one of your mods chosen as Mod of the Week. Can be earned again.`)
};

const es_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que uno de tus mods sea elegido Mod de la semana. Se puede ganar varias veces.`)
};

const de_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einer deiner Mods wird zum Mod der Woche gewählt. Mehrfach erreichbar.`)
};

const fr_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir l’un de vos mods élu Mod de la semaine. Peut s’obtenir plusieurs fois.`)
};

const it_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una tua mod viene scelta come Mod della settimana. Si può ottenere più volte.`)
};

const nl_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een van je mods wordt Mod van de week. Kan vaker worden verdiend.`)
};

const pl_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeden z twoich modów zostaje Modem tygodnia. Można zdobyć wielokrotnie.`)
};

const pt_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenha um mod escolhido como Mod da semana. Pode ser conquistada várias vezes.`)
};

const ru_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один из ваших модов выбран модом недели. Можно получить несколько раз.`)
};

const sv_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En av dina moddar blir Veckans modd. Kan tjänas in flera gånger.`)
};

const tr_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından biri Haftanın Modu seçilsin. Birden çok kez kazanılabilir.`)
};

const zh_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组被选为本周模组。可重复获得。`)
};

const ja_profile_badge_mod_of_the_week_hint = /** @type {(inputs: Profile_Badge_Mod_Of_The_Week_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分の MOD が今週の MOD に選ばれる。何度でも獲得可能。`)
};

/**
* | output |
* | --- |
* | "Have one of your mods chosen as Mod of the Week. Can be earned again." |
*
* @param {Profile_Badge_Mod_Of_The_Week_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_mod_of_the_week_hint = /** @type {((inputs?: Profile_Badge_Mod_Of_The_Week_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Mod_Of_The_Week_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "de") return de_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "fr") return fr_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "it") return it_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "nl") return nl_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "pl") return pl_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "pt") return pt_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "ru") return ru_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "sv") return sv_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "tr") return tr_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "zh") return zh_profile_badge_mod_of_the_week_hint(inputs)
	if (locale === "ja") return ja_profile_badge_mod_of_the_week_hint(inputs)
	return en_profile_badge_mod_of_the_week_hint(inputs)
});

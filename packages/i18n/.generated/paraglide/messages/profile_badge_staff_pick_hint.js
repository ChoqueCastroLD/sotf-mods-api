/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Staff_Pick_HintInputs */

const en_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Have one of your mods picked by the staff. Can be earned again.`)
};

const es_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Que el equipo elija uno de tus mods. Se puede ganar varias veces.`)
};

const de_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Team empfiehlt einen deiner Mods. Mehrfach erreichbar.`)
};

const fr_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir l’un de vos mods choisi par l’équipe. Peut s’obtenir plusieurs fois.`)
};

const it_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lo staff sceglie una tua mod. Si può ottenere più volte.`)
};

const nl_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het team kiest een van je mods. Kan vaker worden verdiend.`)
};

const pl_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zespół wybiera jeden z twoich modów. Można zdobyć wielokrotnie.`)
};

const pt_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tenha um mod escolhido pela equipe. Pode ser conquistada várias vezes.`)
};

const ru_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Команда выбрала один из ваших модов. Можно получить несколько раз.`)
};

const sv_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teamet väljer en av dina moddar. Kan tjänas in flera gånger.`)
};

const tr_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modlarından biri ekip tarafından seçilsin. Birden çok kez kazanılabilir.`)
};

const zh_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的模组被团队选中。可重复获得。`)
};

const ja_profile_badge_staff_pick_hint = /** @type {(inputs: Profile_Badge_Staff_Pick_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自分の MOD がスタッフに選ばれる。何度でも獲得可能。`)
};

/**
* | output |
* | --- |
* | "Have one of your mods picked by the staff. Can be earned again." |
*
* @param {Profile_Badge_Staff_Pick_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_staff_pick_hint = /** @type {((inputs?: Profile_Badge_Staff_Pick_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Staff_Pick_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_staff_pick_hint(inputs)
	if (locale === "de") return de_profile_badge_staff_pick_hint(inputs)
	if (locale === "fr") return fr_profile_badge_staff_pick_hint(inputs)
	if (locale === "it") return it_profile_badge_staff_pick_hint(inputs)
	if (locale === "nl") return nl_profile_badge_staff_pick_hint(inputs)
	if (locale === "pl") return pl_profile_badge_staff_pick_hint(inputs)
	if (locale === "pt") return pt_profile_badge_staff_pick_hint(inputs)
	if (locale === "ru") return ru_profile_badge_staff_pick_hint(inputs)
	if (locale === "sv") return sv_profile_badge_staff_pick_hint(inputs)
	if (locale === "tr") return tr_profile_badge_staff_pick_hint(inputs)
	if (locale === "zh") return zh_profile_badge_staff_pick_hint(inputs)
	if (locale === "ja") return ja_profile_badge_staff_pick_hint(inputs)
	return en_profile_badge_staff_pick_hint(inputs)
});

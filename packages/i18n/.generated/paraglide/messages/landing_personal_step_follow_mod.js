/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Step_Follow_ModInputs */

const en_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow a mod`)
};

const es_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue un mod`)
};

const de_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einem Mod folgen`)
};

const fr_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivre un mod`)
};

const it_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui una mod`)
};

const nl_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volg een mod`)
};

const pl_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj mod`)
};

const pt_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siga um mod`)
};

const ru_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписаться на мод`)
};

const sv_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ en modd`)
};

const tr_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir modu takip et`)
};

const zh_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注一个模组`)
};

const ja_landing_personal_step_follow_mod = /** @type {(inputs: Landing_Personal_Step_Follow_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODをフォロー`)
};

/**
* | output |
* | --- |
* | "Follow a mod" |
*
* @param {Landing_Personal_Step_Follow_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_step_follow_mod = /** @type {((inputs?: Landing_Personal_Step_Follow_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Step_Follow_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_step_follow_mod(inputs)
	if (locale === "de") return de_landing_personal_step_follow_mod(inputs)
	if (locale === "fr") return fr_landing_personal_step_follow_mod(inputs)
	if (locale === "it") return it_landing_personal_step_follow_mod(inputs)
	if (locale === "nl") return nl_landing_personal_step_follow_mod(inputs)
	if (locale === "pl") return pl_landing_personal_step_follow_mod(inputs)
	if (locale === "pt") return pt_landing_personal_step_follow_mod(inputs)
	if (locale === "ru") return ru_landing_personal_step_follow_mod(inputs)
	if (locale === "sv") return sv_landing_personal_step_follow_mod(inputs)
	if (locale === "tr") return tr_landing_personal_step_follow_mod(inputs)
	if (locale === "zh") return zh_landing_personal_step_follow_mod(inputs)
	if (locale === "ja") return ja_landing_personal_step_follow_mod(inputs)
	return en_landing_personal_step_follow_mod(inputs)
});

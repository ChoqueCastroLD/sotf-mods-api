/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Follow_TitleInputs */

const en_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Follow a mod`)
};

const es_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sigue un mod`)
};

const de_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folge einem Mod`)
};

const fr_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivez un mod`)
};

const it_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segui una mod`)
};

const nl_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volg een mod`)
};

const pl_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwuj mod`)
};

const pt_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siga um mod`)
};

const ru_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подпишитесь на мод`)
};

const sv_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följ en modd`)
};

const tr_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir modu takip et`)
};

const zh_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注一个模组`)
};

const ja_me_onboarding_follow_title = /** @type {(inputs: Me_Onboarding_Follow_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODをフォロー`)
};

/**
* | output |
* | --- |
* | "Follow a mod" |
*
* @param {Me_Onboarding_Follow_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_follow_title = /** @type {((inputs?: Me_Onboarding_Follow_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Follow_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_follow_title(inputs)
	if (locale === "de") return de_me_onboarding_follow_title(inputs)
	if (locale === "fr") return fr_me_onboarding_follow_title(inputs)
	if (locale === "it") return it_me_onboarding_follow_title(inputs)
	if (locale === "nl") return nl_me_onboarding_follow_title(inputs)
	if (locale === "pl") return pl_me_onboarding_follow_title(inputs)
	if (locale === "pt") return pt_me_onboarding_follow_title(inputs)
	if (locale === "ru") return ru_me_onboarding_follow_title(inputs)
	if (locale === "sv") return sv_me_onboarding_follow_title(inputs)
	if (locale === "tr") return tr_me_onboarding_follow_title(inputs)
	if (locale === "zh") return zh_me_onboarding_follow_title(inputs)
	if (locale === "ja") return ja_me_onboarding_follow_title(inputs)
	return en_me_onboarding_follow_title(inputs)
});

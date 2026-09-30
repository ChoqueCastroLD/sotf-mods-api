/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_CompletedInputs */

const en_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You survived day one — badge unlocked`)
};

const es_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Has sobrevivido al primer día: insignia desbloqueada`)
};

const de_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast den ersten Tag überlebt – Abzeichen freigeschaltet`)
};

const fr_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous avez survécu au premier jour — badge débloqué`)
};

const it_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sei sopravvissuto al primo giorno: distintivo sbloccato`)
};

const nl_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt de eerste dag overleefd — badge ontgrendeld`)
};

const pl_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetrwałeś pierwszy dzień — odznaka odblokowana`)
};

const pt_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você sobreviveu ao primeiro dia — insígnia desbloqueada`)
};

const ru_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы пережили первый день — значок получен`)
};

const sv_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du överlevde första dagen — märke upplåst`)
};

const tr_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk günü atlattın — rozet açıldı`)
};

const zh_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你撑过了第一天——徽章已解锁`)
};

const ja_me_onboarding_completed = /** @type {(inputs: Me_Onboarding_CompletedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1日目を生き延びました。バッジを獲得`)
};

/**
* | output |
* | --- |
* | "You survived day one — badge unlocked" |
*
* @param {Me_Onboarding_CompletedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_completed = /** @type {((inputs?: Me_Onboarding_CompletedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_CompletedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_completed(inputs)
	if (locale === "de") return de_me_onboarding_completed(inputs)
	if (locale === "fr") return fr_me_onboarding_completed(inputs)
	if (locale === "it") return it_me_onboarding_completed(inputs)
	if (locale === "nl") return nl_me_onboarding_completed(inputs)
	if (locale === "pl") return pl_me_onboarding_completed(inputs)
	if (locale === "pt") return pt_me_onboarding_completed(inputs)
	if (locale === "ru") return ru_me_onboarding_completed(inputs)
	if (locale === "sv") return sv_me_onboarding_completed(inputs)
	if (locale === "tr") return tr_me_onboarding_completed(inputs)
	if (locale === "zh") return zh_me_onboarding_completed(inputs)
	if (locale === "ja") return ja_me_onboarding_completed(inputs)
	return en_me_onboarding_completed(inputs)
});

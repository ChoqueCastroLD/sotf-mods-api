/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_TitleInputs */

const en_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survive your first day`)
};

const es_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobrevive a tu primer día`)
};

const de_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Überlebe deinen ersten Tag`)
};

const fr_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivez à votre premier jour`)
};

const it_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sopravvivi al tuo primo giorno`)
};

const nl_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overleef je eerste dag`)
};

const pl_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przetrwaj pierwszy dzień`)
};

const pt_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sobreviva ao seu primeiro dia`)
};

const ru_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переживите первый день`)
};

const sv_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Överlev din första dag`)
};

const tr_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İlk gününü atlat`)
};

const zh_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撑过你的第一天`)
};

const ja_me_onboarding_title = /** @type {(inputs: Me_Onboarding_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最初の1日を生き延びよう`)
};

/**
* | output |
* | --- |
* | "Survive your first day" |
*
* @param {Me_Onboarding_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_title = /** @type {((inputs?: Me_Onboarding_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_title(inputs)
	if (locale === "de") return de_me_onboarding_title(inputs)
	if (locale === "fr") return fr_me_onboarding_title(inputs)
	if (locale === "it") return it_me_onboarding_title(inputs)
	if (locale === "nl") return nl_me_onboarding_title(inputs)
	if (locale === "pl") return pl_me_onboarding_title(inputs)
	if (locale === "pt") return pt_me_onboarding_title(inputs)
	if (locale === "ru") return ru_me_onboarding_title(inputs)
	if (locale === "sv") return sv_me_onboarding_title(inputs)
	if (locale === "tr") return tr_me_onboarding_title(inputs)
	if (locale === "zh") return zh_me_onboarding_title(inputs)
	if (locale === "ja") return ja_me_onboarding_title(inputs)
	return en_me_onboarding_title(inputs)
});

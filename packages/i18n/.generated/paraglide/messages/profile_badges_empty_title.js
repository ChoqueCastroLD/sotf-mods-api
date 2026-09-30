/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badges_Empty_TitleInputs */

const en_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The notebook is blank`)
};

const es_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El cuaderno está en blanco`)
};

const de_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Tagebuch ist leer`)
};

const fr_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le carnet est vierge`)
};

const it_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il taccuino è vuoto`)
};

const nl_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het notitieboek is leeg`)
};

const pl_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dziennik jest pusty`)
};

const pt_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O caderno está em branco`)
};

const ru_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дневник пока пуст`)
};

const sv_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dagboken är tom`)
};

const tr_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Defter boş`)
};

const zh_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`笔记本还是空的`)
};

const ja_profile_badges_empty_title = /** @type {(inputs: Profile_Badges_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ノートはまだ白紙です`)
};

/**
* | output |
* | --- |
* | "The notebook is blank" |
*
* @param {Profile_Badges_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badges_empty_title = /** @type {((inputs?: Profile_Badges_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badges_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badges_empty_title(inputs)
	if (locale === "de") return de_profile_badges_empty_title(inputs)
	if (locale === "fr") return fr_profile_badges_empty_title(inputs)
	if (locale === "it") return it_profile_badges_empty_title(inputs)
	if (locale === "nl") return nl_profile_badges_empty_title(inputs)
	if (locale === "pl") return pl_profile_badges_empty_title(inputs)
	if (locale === "pt") return pt_profile_badges_empty_title(inputs)
	if (locale === "ru") return ru_profile_badges_empty_title(inputs)
	if (locale === "sv") return sv_profile_badges_empty_title(inputs)
	if (locale === "tr") return tr_profile_badges_empty_title(inputs)
	if (locale === "zh") return zh_profile_badges_empty_title(inputs)
	if (locale === "ja") return ja_profile_badges_empty_title(inputs)
	return en_profile_badges_empty_title(inputs)
});

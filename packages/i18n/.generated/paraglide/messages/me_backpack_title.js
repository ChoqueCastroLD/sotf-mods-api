/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Backpack_TitleInputs */

const en_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Following`)
};

const es_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Siguiendo`)
};

const de_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Folge ich`)
};

const fr_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suivis`)
};

const it_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguiti`)
};

const nl_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Volgend`)
};

const pl_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obserwowane`)
};

const pt_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seguindo`)
};

const ru_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подписки`)
};

const sv_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Följer`)
};

const tr_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip edilenler`)
};

const zh_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关注`)
};

const ja_me_backpack_title = /** @type {(inputs: Me_Backpack_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォロー中`)
};

/**
* | output |
* | --- |
* | "Following" |
*
* @param {Me_Backpack_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_title = /** @type {((inputs?: Me_Backpack_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_title(inputs)
	if (locale === "de") return de_me_backpack_title(inputs)
	if (locale === "fr") return fr_me_backpack_title(inputs)
	if (locale === "it") return it_me_backpack_title(inputs)
	if (locale === "nl") return nl_me_backpack_title(inputs)
	if (locale === "pl") return pl_me_backpack_title(inputs)
	if (locale === "pt") return pt_me_backpack_title(inputs)
	if (locale === "ru") return ru_me_backpack_title(inputs)
	if (locale === "sv") return sv_me_backpack_title(inputs)
	if (locale === "tr") return tr_me_backpack_title(inputs)
	if (locale === "zh") return zh_me_backpack_title(inputs)
	if (locale === "ja") return ja_me_backpack_title(inputs)
	return en_me_backpack_title(inputs)
});

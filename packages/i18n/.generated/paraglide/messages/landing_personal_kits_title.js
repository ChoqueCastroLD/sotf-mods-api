/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Personal_Kits_TitleInputs */

const en_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your recent Kits`)
};

const es_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus Kits recientes`)
};

const de_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine letzten Kits`)
};

const fr_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos Kits récents`)
};

const it_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi Kit recenti`)
};

const nl_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je recente Kits`)
};

const pl_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje ostatnie zestawy`)
};

const pt_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus Kits recentes`)
};

const ru_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши недавние наборы`)
};

const sv_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina senaste kit`)
};

const tr_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Son kitlerin`)
};

const zh_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你最近的套装`)
};

const ja_landing_personal_kits_title = /** @type {(inputs: Landing_Personal_Kits_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最近のキット`)
};

/**
* | output |
* | --- |
* | "Your recent Kits" |
*
* @param {Landing_Personal_Kits_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_personal_kits_title = /** @type {((inputs?: Landing_Personal_Kits_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Personal_Kits_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_personal_kits_title(inputs)
	if (locale === "de") return de_landing_personal_kits_title(inputs)
	if (locale === "fr") return fr_landing_personal_kits_title(inputs)
	if (locale === "it") return it_landing_personal_kits_title(inputs)
	if (locale === "nl") return nl_landing_personal_kits_title(inputs)
	if (locale === "pl") return pl_landing_personal_kits_title(inputs)
	if (locale === "pt") return pt_landing_personal_kits_title(inputs)
	if (locale === "ru") return ru_landing_personal_kits_title(inputs)
	if (locale === "sv") return sv_landing_personal_kits_title(inputs)
	if (locale === "tr") return tr_landing_personal_kits_title(inputs)
	if (locale === "zh") return zh_landing_personal_kits_title(inputs)
	if (locale === "ja") return ja_landing_personal_kits_title(inputs)
	return en_landing_personal_kits_title(inputs)
});

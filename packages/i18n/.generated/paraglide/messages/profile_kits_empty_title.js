/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Kits_Empty_TitleInputs */

const en_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No public kits`)
};

const es_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No hay kits públicos`)
};

const de_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine öffentlichen Kits`)
};

const fr_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun kit public`)
};

const it_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun kit pubblico`)
};

const nl_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen openbare kits`)
};

const pl_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak publicznych zestawów`)
};

const pt_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum kit público`)
};

const ru_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Нет публичных наборов`)
};

const sv_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga offentliga kit`)
};

const tr_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Herkese açık kit yok`)
};

const zh_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有公开的套装`)
};

const ja_profile_kits_empty_title = /** @type {(inputs: Profile_Kits_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開キットはありません`)
};

/**
* | output |
* | --- |
* | "No public kits" |
*
* @param {Profile_Kits_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_kits_empty_title = /** @type {((inputs?: Profile_Kits_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Kits_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_kits_empty_title(inputs)
	if (locale === "de") return de_profile_kits_empty_title(inputs)
	if (locale === "fr") return fr_profile_kits_empty_title(inputs)
	if (locale === "it") return it_profile_kits_empty_title(inputs)
	if (locale === "nl") return nl_profile_kits_empty_title(inputs)
	if (locale === "pl") return pl_profile_kits_empty_title(inputs)
	if (locale === "pt") return pt_profile_kits_empty_title(inputs)
	if (locale === "ru") return ru_profile_kits_empty_title(inputs)
	if (locale === "sv") return sv_profile_kits_empty_title(inputs)
	if (locale === "tr") return tr_profile_kits_empty_title(inputs)
	if (locale === "zh") return zh_profile_kits_empty_title(inputs)
	if (locale === "ja") return ja_profile_kits_empty_title(inputs)
	return en_profile_kits_empty_title(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Builds_Empty_TitleInputs */

const en_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No builds yet`)
};

const es_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay builds`)
};

const de_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Builds`)
};

const fr_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun build pour l’instant`)
};

const it_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna build`)
};

const nl_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen builds`)
};

const pl_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak buildów`)
};

const pt_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhuma build ainda`)
};

const ru_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Построек пока нет`)
};

const sv_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga byggen än`)
};

const tr_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz yapı yok`)
};

const zh_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无建筑`)
};

const ja_profile_builds_empty_title = /** @type {(inputs: Profile_Builds_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ建築はありません`)
};

/**
* | output |
* | --- |
* | "No builds yet" |
*
* @param {Profile_Builds_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_builds_empty_title = /** @type {((inputs?: Profile_Builds_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Builds_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_builds_empty_title(inputs)
	if (locale === "de") return de_profile_builds_empty_title(inputs)
	if (locale === "fr") return fr_profile_builds_empty_title(inputs)
	if (locale === "it") return it_profile_builds_empty_title(inputs)
	if (locale === "nl") return nl_profile_builds_empty_title(inputs)
	if (locale === "pl") return pl_profile_builds_empty_title(inputs)
	if (locale === "pt") return pt_profile_builds_empty_title(inputs)
	if (locale === "ru") return ru_profile_builds_empty_title(inputs)
	if (locale === "sv") return sv_profile_builds_empty_title(inputs)
	if (locale === "tr") return tr_profile_builds_empty_title(inputs)
	if (locale === "zh") return zh_profile_builds_empty_title(inputs)
	if (locale === "ja") return ja_profile_builds_empty_title(inputs)
	return en_profile_builds_empty_title(inputs)
});

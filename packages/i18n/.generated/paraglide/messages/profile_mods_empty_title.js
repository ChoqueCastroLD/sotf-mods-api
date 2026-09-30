/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Mods_Empty_TitleInputs */

const en_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No mods yet`)
};

const es_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay mods`)
};

const de_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Mods`)
};

const fr_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun mod pour l’instant`)
};

const it_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessuna mod`)
};

const nl_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen mods`)
};

const pl_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak modów`)
};

const pt_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum mod ainda`)
};

const ru_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модов пока нет`)
};

const sv_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga moddar än`)
};

const tr_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz mod yok`)
};

const zh_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无模组`)
};

const ja_profile_mods_empty_title = /** @type {(inputs: Profile_Mods_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ MOD はありません`)
};

/**
* | output |
* | --- |
* | "No mods yet" |
*
* @param {Profile_Mods_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_mods_empty_title = /** @type {((inputs?: Profile_Mods_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Mods_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_mods_empty_title(inputs)
	if (locale === "de") return de_profile_mods_empty_title(inputs)
	if (locale === "fr") return fr_profile_mods_empty_title(inputs)
	if (locale === "it") return it_profile_mods_empty_title(inputs)
	if (locale === "nl") return nl_profile_mods_empty_title(inputs)
	if (locale === "pl") return pl_profile_mods_empty_title(inputs)
	if (locale === "pt") return pt_profile_mods_empty_title(inputs)
	if (locale === "ru") return ru_profile_mods_empty_title(inputs)
	if (locale === "sv") return sv_profile_mods_empty_title(inputs)
	if (locale === "tr") return tr_profile_mods_empty_title(inputs)
	if (locale === "zh") return zh_profile_mods_empty_title(inputs)
	if (locale === "ja") return ja_profile_mods_empty_title(inputs)
	return en_profile_mods_empty_title(inputs)
});

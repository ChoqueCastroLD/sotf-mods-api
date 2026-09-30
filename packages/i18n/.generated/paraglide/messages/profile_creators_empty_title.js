/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Empty_TitleInputs */

const en_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No creators yet`)
};

const es_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay creadores`)
};

const de_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Ersteller`)
};

const fr_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun créateur pour l’instant`)
};

const it_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun creatore`)
};

const nl_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen makers`)
};

const pl_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak twórców`)
};

const pt_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nenhum criador ainda`)
};

const ru_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторов пока нет`)
};

const sv_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga skapare än`)
};

const tr_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz üretici yok`)
};

const zh_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无创作者`)
};

const ja_profile_creators_empty_title = /** @type {(inputs: Profile_Creators_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだクリエイターはいません`)
};

/**
* | output |
* | --- |
* | "No creators yet" |
*
* @param {Profile_Creators_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_empty_title = /** @type {((inputs?: Profile_Creators_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_empty_title(inputs)
	if (locale === "de") return de_profile_creators_empty_title(inputs)
	if (locale === "fr") return fr_profile_creators_empty_title(inputs)
	if (locale === "it") return it_profile_creators_empty_title(inputs)
	if (locale === "nl") return nl_profile_creators_empty_title(inputs)
	if (locale === "pl") return pl_profile_creators_empty_title(inputs)
	if (locale === "pt") return pt_profile_creators_empty_title(inputs)
	if (locale === "ru") return ru_profile_creators_empty_title(inputs)
	if (locale === "sv") return sv_profile_creators_empty_title(inputs)
	if (locale === "tr") return tr_profile_creators_empty_title(inputs)
	if (locale === "zh") return zh_profile_creators_empty_title(inputs)
	if (locale === "ja") return ja_profile_creators_empty_title(inputs)
	return en_profile_creators_empty_title(inputs)
});

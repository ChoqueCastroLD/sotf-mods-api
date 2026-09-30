/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Creators_Error_TitleInputs */

const en_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The creators didn’t load`)
};

const es_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los creadores no se han cargado`)
};

const de_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Ersteller wurden nicht geladen`)
};

const fr_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les créateurs ne se sont pas chargés`)
};

const it_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I creatori non si sono caricati`)
};

const nl_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De makers zijn niet geladen`)
};

const pl_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać twórców`)
};

const pt_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os criadores não carregaram`)
};

const ru_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Авторы не загрузились`)
};

const sv_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skaparna laddades inte`)
};

const tr_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Üreticiler yüklenemedi`)
};

const zh_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创作者列表未能加载`)
};

const ja_profile_creators_error_title = /** @type {(inputs: Profile_Creators_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クリエイターを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "The creators didn’t load" |
*
* @param {Profile_Creators_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_creators_error_title = /** @type {((inputs?: Profile_Creators_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Creators_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_creators_error_title(inputs)
	if (locale === "de") return de_profile_creators_error_title(inputs)
	if (locale === "fr") return fr_profile_creators_error_title(inputs)
	if (locale === "it") return it_profile_creators_error_title(inputs)
	if (locale === "nl") return nl_profile_creators_error_title(inputs)
	if (locale === "pl") return pl_profile_creators_error_title(inputs)
	if (locale === "pt") return pt_profile_creators_error_title(inputs)
	if (locale === "ru") return ru_profile_creators_error_title(inputs)
	if (locale === "sv") return sv_profile_creators_error_title(inputs)
	if (locale === "tr") return tr_profile_creators_error_title(inputs)
	if (locale === "zh") return zh_profile_creators_error_title(inputs)
	if (locale === "ja") return ja_profile_creators_error_title(inputs)
	return en_profile_creators_error_title(inputs)
});

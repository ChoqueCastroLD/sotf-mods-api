/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Tab_Error_TitleInputs */

const en_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This section didn’t load`)
};

const es_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta sección no se ha cargado`)
};

const de_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Bereich wurde nicht geladen`)
};

const fr_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cette section ne s’est pas chargée`)
};

const it_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questa sezione non si è caricata`)
};

const nl_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit onderdeel is niet geladen`)
};

const pl_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ta sekcja się nie wczytała`)
};

const pt_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esta seção não carregou`)
};

const ru_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот раздел не загрузился`)
};

const sv_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här avsnittet laddades inte`)
};

const tr_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bölüm yüklenemedi`)
};

const zh_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`此板块未能加载`)
};

const ja_profile_tab_error_title = /** @type {(inputs: Profile_Tab_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このセクションを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "This section didn’t load" |
*
* @param {Profile_Tab_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_tab_error_title = /** @type {((inputs?: Profile_Tab_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Tab_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_tab_error_title(inputs)
	if (locale === "de") return de_profile_tab_error_title(inputs)
	if (locale === "fr") return fr_profile_tab_error_title(inputs)
	if (locale === "it") return it_profile_tab_error_title(inputs)
	if (locale === "nl") return nl_profile_tab_error_title(inputs)
	if (locale === "pl") return pl_profile_tab_error_title(inputs)
	if (locale === "pt") return pt_profile_tab_error_title(inputs)
	if (locale === "ru") return ru_profile_tab_error_title(inputs)
	if (locale === "sv") return sv_profile_tab_error_title(inputs)
	if (locale === "tr") return tr_profile_tab_error_title(inputs)
	if (locale === "zh") return zh_profile_tab_error_title(inputs)
	if (locale === "ja") return ja_profile_tab_error_title(inputs)
	return en_profile_tab_error_title(inputs)
});

/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Error_TitleInputs */

const en_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn't load the jams`)
};

const es_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar los jams`)
};

const de_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jams konnten nicht geladen werden`)
};

const fr_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les jams`)
};

const it_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare i jam`)
};

const nl_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De jams konden niet worden geladen`)
};

const pl_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać jamów`)
};

const pt_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar os jams`)
};

const ru_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить джемы`)
};

const sv_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kunde inte läsa in jams`)
};

const tr_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'ler yüklenemedi`)
};

const zh_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载 Jam`)
};

const ja_jams_error_title = /** @type {(inputs: Jams_Error_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムを読み込めませんでした`)
};

/**
* | output |
* | --- |
* | "Couldn't load the jams" |
*
* @param {Jams_Error_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_error_title = /** @type {((inputs?: Jams_Error_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Error_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_error_title(inputs)
	if (locale === "de") return de_jams_error_title(inputs)
	if (locale === "fr") return fr_jams_error_title(inputs)
	if (locale === "it") return it_jams_error_title(inputs)
	if (locale === "nl") return nl_jams_error_title(inputs)
	if (locale === "pl") return pl_jams_error_title(inputs)
	if (locale === "pt") return pt_jams_error_title(inputs)
	if (locale === "ru") return ru_jams_error_title(inputs)
	if (locale === "sv") return sv_jams_error_title(inputs)
	if (locale === "tr") return tr_jams_error_title(inputs)
	if (locale === "zh") return zh_jams_error_title(inputs)
	if (locale === "ja") return ja_jams_error_title(inputs)
	return en_jams_error_title(inputs)
});
